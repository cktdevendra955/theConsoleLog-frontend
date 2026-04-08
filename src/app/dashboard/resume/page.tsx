"use client";

import React, { useState } from 'react';
// Importing specific icons from Material Design (md) set
import { MdPerson, MdWork, MdAdd, MdDownload } from 'react-icons/md';

interface ResumeData {
  name: string;
  role: string;
  experience: string;
}

export default function SimpleResume() {
  const [data, setData] = useState<ResumeData>({
    name: "Alex Rivers",
    role: "Senior Product Designer",
    experience: "Spearheaded the redesign of the Checkout experience..."
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row font-sans">
      
      {/* LEFT PANEL: The Form */}
      <section className="w-full md:w-1/2 p-8 space-y-8 bg-white border-r border-slate-200 overflow-y-auto">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">ReferEdge Editor</h2>
          <p className="text-slate-500 text-sm">Update your information to see live changes.</p>
        </div>

        {/* Name Input */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-xs font-bold uppercase text-slate-400">
            <MdPerson size={16} className="text-indigo-500" /> Full Name
          </label>
          <input 
            name="name"
            value={data.name}
            onChange={handleChange}
            className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
            type="text" 
          />
        </div>

        {/* Role Input */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-xs font-bold uppercase text-slate-400">
            <MdWork size={16} className="text-indigo-500" /> Job Title
          </label>
          <input 
            name="role"
            value={data.role}
            onChange={handleChange}
            className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
            type="text" 
          />
        </div>

        {/* Experience Input */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="flex items-center gap-2 text-xs font-bold uppercase text-slate-400">
               Experience
            </label>
            <button className="text-indigo-600 text-xs font-bold flex items-center gap-1 hover:underline">
              <MdAdd size={16} /> Add Role
            </button>
          </div>
          <textarea 
            name="experience"
            value={data.experience}
            onChange={handleChange}
            rows={5}
            className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none text-sm leading-relaxed"
          />
        </div>
      </section>

      {/* RIGHT PANEL: Live Preview */}
      <section className="w-full md:w-1/2 bg-slate-100 p-6 md:p-12 flex flex-col items-center overflow-y-auto">
        
        {/* The Resume Paper */}
        <div className="w-full max-w-[500px] bg-white shadow-2xl p-10 min-h-[600px] flex flex-col">
          
          <div className="border-b-2 border-slate-900 pb-4 mb-8">
            <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">
              {data.name || "Your Name"}
            </h1>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-[3px]">
              {data.role || "Professional Title"}
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-[10px] font-bold text-slate-300 uppercase tracking-[2px] mb-4">Work Experience</h3>
            <div className="text-[13px] text-slate-700 leading-loose italic">
              {data.experience || "Your work history will appear here..."}
            </div>
          </div>

          <div className="mt-auto pt-10 flex justify-center opacity-10">
            <div className="w-12 h-1 bg-slate-900 rounded-full"></div>
          </div>
        </div>

        {/* Action Button */}
        <button className="mt-8 flex items-center gap-2 bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-600 transition-colors shadow-lg">
          <MdDownload size={20} /> Download PDF
        </button>
      </section>

    </div>
  );
}
"use client";

import React, { useState } from "react";
   import { CalendarClock } from "lucide-react";

   import {
  X,
  CalendarDays,
  Clock3,
  Video,
  VideoIcon,
  Building2,
  Send,
  UserRound,
  Sparkles,
} from "lucide-react";
const page = () => {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div >
      
      <main >
        <div className="max-w-[1400px] mx-auto">
     

<header className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
  
  <div>
    <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-indigo-600">
      <CalendarClock size={16} />

      <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
        Scheduling Center
      </span>
    </div>

    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-on-surface mb-2 leading-tight">
      Scheduling HQ
    </h2>

    <p className="text-slate-500 font-medium max-w-2xl leading-relaxed text-sm sm:text-base">
      Manage your executive editorial talent pipeline. Meticulously
      organized, perfectly timed.
    </p>
  </div>
</header>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
  {/* Calendar Section */}
  <div className="col-span-12 lg:col-span-9 bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-slate-100">
    
    {/* Header */}
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-4 lg:p-6 border-b border-slate-50">
      
      <div className="flex flex-wrap items-center gap-3">
        <h3 className="text-base lg:text-lg font-bold">
          Week of Oct 14 - 20, 2024
        </h3>

        <div className="flex border border-slate-200 rounded-lg overflow-hidden">
          <button className="p-2 hover:bg-slate-50 transition-colors">
            <span className="material-symbols-outlined text-sm">
              chevron_left
            </span>
          </button>

          <button className="p-2 border-l border-slate-200 hover:bg-slate-50 transition-colors">
            <span className="material-symbols-outlined text-sm">
              chevron_right
            </span>
          </button>
        </div>

        <button className="text-xs font-bold text-primary uppercase tracking-widest px-3 py-1 bg-primary-fixed rounded-md">
          Today
        </button>
      </div>

      <div className="flex items-center bg-surface-container-low p-1 rounded-lg w-fit">
        <button className="px-4 py-1.5 text-xs font-bold bg-white shadow-sm rounded-md text-primary">
          Week
        </button>

        <button className="px-4 py-1.5 text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors">
          Month
        </button>
      </div>
    </div>

    {/* Scrollable Calendar */}
    <div className="overflow-x-auto">
      <div className="calendar-grid bg-white min-w-[900px]">
        
        {/* Days Header */}
        <div className="border-b border-r border-slate-50 p-2 bg-slate-50/30"></div>

        {[
          { day: "Mon", date: "14" },
          { day: "Tue", date: "15", active: true },
          { day: "Wed", date: "16" },
          { day: "Thu", date: "17" },
          { day: "Fri", date: "18" },
        ].map((item, index) => (
          <div
            key={index}
            className={`border-b border-r border-slate-50 p-4 text-center ${
              item.active ? "bg-primary/5" : ""
            }`}
          >
            <p
              className={`text-[10px] uppercase font-bold tracking-widest ${
                item.active ? "text-primary" : "text-slate-400"
              }`}
            >
              {item.day}
            </p>

            <p
              className={`text-xl font-bold ${
                item.active ? "text-primary" : ""
              }`}
            >
              {item.date}
            </p>
          </div>
        ))}

        {/* 9 AM */}
        <div className="border-r border-b border-slate-50 p-2 text-right pr-4 text-[10px] font-bold text-slate-400 uppercase">
          09:00 AM
        </div>

        <div className="border-r border-b border-slate-50 relative"></div>
        <div className="border-r border-b border-slate-50 relative bg-primary/5"></div>
        <div className="border-r border-b border-slate-50 relative"></div>
        <div className="border-r border-b border-slate-50 relative"></div>
        <div className="border-b border-slate-50 relative"></div>

        {/* 10 AM */}
        <div className="border-r border-b border-slate-50 p-2 text-right pr-4 text-[10px] font-bold text-slate-400 uppercase">
          10:00 AM
        </div>

        <div className="border-r border-b border-slate-50 relative p-1">
          <div className="bg-primary text-white p-2 rounded-lg text-[10px] shadow-lg shadow-primary/10">
            <p className="font-bold mb-1">Marcus Thorne</p>

            <div className="flex items-center gap-1 opacity-80">
              <span className="material-symbols-outlined text-[12px]">
                video_call
              </span>

              <span>Google Meet</span>
            </div>
          </div>
        </div>

        <div className="border-r border-b border-slate-50 relative bg-primary/5"></div>

        <div className="border-r border-b border-slate-50 relative p-1">
          <div className="bg-tertiary text-white p-2 rounded-lg text-[10px] shadow-lg shadow-tertiary/10">
            <p className="font-bold mb-1">Sophia Chen</p>

            <div className="flex items-center gap-1 opacity-80">
              <span className="material-symbols-outlined text-[12px]">
                apartment
              </span>

              <span>In-Person</span>
            </div>
          </div>
        </div>

        <div className="border-r border-b border-slate-50 relative"></div>
        <div className="border-b border-slate-50 relative"></div>

        {/* 11 AM */}
        <div className="border-r border-b border-slate-50 p-2 text-right pr-4 text-[10px] font-bold text-slate-400 uppercase">
          11:00 AM
        </div>

        <div className="border-r border-b border-slate-50 relative"></div>

        <div className="border-r border-b border-slate-50 relative bg-primary/5 p-1">
          <div className="bg-slate-800 text-white p-2 rounded-lg text-[10px] shadow-lg">
            <p className="font-bold mb-1">Elena Rodriguez</p>

            <div className="flex items-center gap-1 opacity-80">
              <span className="material-symbols-outlined text-[12px]">
                call
              </span>

              <span>Phone Call</span>
            </div>
          </div>
        </div>

        <div className="border-r border-b border-slate-50 relative"></div>
        <div className="border-r border-b border-slate-50 relative"></div>
        <div className="border-b border-slate-50 relative"></div>

        {/* 12 PM */}
        <div className="border-r border-b border-slate-50 p-2 text-right pr-4 text-[10px] font-bold text-slate-400 uppercase">
          12:00 PM
        </div>

        <div className="border-r border-b border-slate-50 relative bg-slate-50/50"></div>
        <div className="border-r border-b border-slate-50 relative bg-primary/5"></div>
        <div className="border-r border-b border-slate-50 relative bg-slate-50/50"></div>
        <div className="border-r border-b border-slate-50 relative bg-slate-50/50"></div>
        <div className="border-b border-slate-50 relative bg-slate-50/50"></div>

        {/* 1 PM */}
        <div className="border-r border-b border-slate-50 p-2 text-right pr-4 text-[10px] font-bold text-slate-400 uppercase">
          01:00 PM
        </div>

        <div className="border-r border-b border-slate-50 relative"></div>

        <div className="border-r border-b border-slate-50 relative bg-primary/5"></div>

        <div className="border-r border-b border-slate-50 relative p-1">
          <div className="border-2 border-primary/40 text-primary p-2 rounded-lg text-[10px] bg-primary/5 border-dashed">
            <p className="font-bold mb-1">David Kim</p>

            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[12px]">
                schedule
              </span>

              <span className="font-bold">Pending Accept</span>
            </div>
          </div>
        </div>

        <div className="border-r border-b border-slate-50 relative"></div>
        <div className="border-b border-slate-50 relative"></div>
      </div>
    </div>
  </div>

  {/* Sidebar */}
  <div className="col-span-12 lg:col-span-3 space-y-6">
    
    {/* Pending */}
    <section className="bg-surface-container-low p-4 lg:p-6 rounded-xl border border-slate-200/50">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500">
          Pending
        </h3>

        <span className="bg-white px-2 py-0.5 rounded text-[10px] font-bold border border-slate-200">
          04
        </span>
      </div>

      <div className="space-y-4">
        {[
          {
            name: "Sarah Jenkins",
            role: "Chief Editor Candidate",
          },
          {
            name: "Oliver Vance",
            role: "Content Strategy Lead",
          },
        ].map((candidate, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow-sm group hover:ring-2 ring-primary/10 transition-all cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-slate-100"></div>

              <div>
                <p className="text-sm font-bold">{candidate.name}</p>

                <p className="text-[10px] text-slate-400 font-medium">
                  {candidate.role}
                </p>
              </div>
            </div>

            <button className="w-full py-2 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg transition-transform active:scale-95">
              Schedule Now
            </button>
          </div>
        ))}
      </div>
    </section>

    {/* Status Tracker */}
    <section className="bg-white p-4 lg:p-6 rounded-xl border border-slate-100">
      <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">
        Status Tracker
      </h3>

      <div className="space-y-6">
        {[
          {
            label: "Accepted",
            count: "12",
            color: "bg-emerald-500",
          },
          {
            label: "Sent",
            count: "08",
            color: "bg-primary",
          },
          {
            label: "Rescheduled",
            count: "03",
            color: "bg-amber-500",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full ${item.color}`}></div>

              <span className="text-xs font-semibold text-slate-600">
                {item.label}
              </span>
            </div>

            <span className="text-xs font-bold">{item.count}</span>
          </div>
        ))}
      </div>
    </section>
  </div>
</div>
        </div>
      </main>

      {/* <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
  
  <div className="w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl animate-in fade-in zoom-in duration-300">
    
    <div className="relative p-8">
      
      <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-100/40 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        
        <div className="mb-8 flex items-start justify-between">
          
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-indigo-600">
              <Sparkles size={14} />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                Executive Interview
              </span>
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-on-surface">
              Schedule Interview
            </h2>

            <p className="mt-1 text-sm font-medium text-slate-500">
              Final Round: Executive Content Lead
            </p>
          </div>

          <button className="rounded-xl p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600">
            <X size={20} />
          </button>
        </div>

        <form className="space-y-6">
          
          <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4">
            
            <img
              alt="Candidate"
              className="h-14 w-14 rounded-xl object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGIUFt6HOKJ8TB4Ii5Kqo3vu87t19qhaPQYslgTeO8zshzxviKLXfQb2d-TaPopKdxxSDt1F7LveS2ag4M1ImPsHzoCAv0E-Pk4ZU4ODNE530IExHCK_vh8Z01GpqWT43AGIvq8GSL-t_qT6e6N3fS_WLlD54Xxq2zEVbs-ctdh5GhSsNJryKEVuyNbplV3VDiGfHZPPtL2S04UuejYHmldgVm1_6pWmtRN4MwxJP2Wzk-ccND9kZi-rLBb18XhI0I3oLMmljlhvNz"
            />

            <div>
              <p className="font-bold text-on-surface">
                Sarah Jenkins
              </p>

              <p className="text-xs font-medium text-slate-500">
                jenkins.s@editorial.com
              </p>
            </div>

            <div className="ml-auto rounded-full bg-emerald-100 px-3 py-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700">
                Elite Match
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="space-y-2">
              
              <label className="px-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Date
              </label>

              <div className="relative">
                <CalendarDays
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="date"
                  className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-12 pr-4 text-sm outline-none transition-all focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>
            </div>

            <div className="space-y-2">
              
              <label className="px-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Time
              </label>

              <div className="relative">
                <Clock3
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="time"
                  className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-12 pr-4 text-sm outline-none transition-all focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            
            <label className="px-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Platform
            </label>

            <div className="grid grid-cols-3 gap-3">
              
              <button
                type="button"
                className="flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-indigo-600 bg-indigo-50 p-4 text-indigo-600 transition-all"
              >
                <Video size={22} />

                <span className="text-[10px] font-bold uppercase tracking-widest">
                  Meet
                </span>
              </button>

              <button
                type="button"
                className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-slate-200 p-4 text-slate-500 transition-all hover:bg-slate-50"
              >
                <VideoIcon size={22} />

                <span className="text-[10px] font-bold uppercase tracking-widest">
                  Zoom
                </span>
              </button>

              <button
                type="button"
                className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-slate-200 p-4 text-slate-500 transition-all hover:bg-slate-50"
              >
                <Building2 size={22} />

                <span className="text-[10px] font-bold uppercase tracking-widest">
                  On-site
                </span>
              </button>
            </div>
          </div>

          <div className="space-y-2">
            
            <label className="px-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Interviewer
            </label>

            <div className="relative">
              
              <UserRound
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <select className="w-full appearance-none rounded-2xl border border-slate-200 bg-white py-3 pl-12 pr-4 text-sm outline-none transition-all focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10">
                <option>Eleanor Rigby (VP Content)</option>
                <option>Julian Black (Creative Director)</option>
                <option>Alex Sterling (Lead Recruiter)</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-end gap-4 pt-4">
            
            <button
             onClick={() => setOpen(false)}
              type="button"
              className="px-6 py-3 text-sm font-bold text-slate-500 transition-colors hover:text-slate-800"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-8 py-3 text-sm font-bold text-white shadow-xl shadow-indigo-500/20 transition-all hover:bg-indigo-700 active:scale-95"
            >
              <Send size={16} />

              Send Invitation
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div> */}
      <footer className="w-full py-6 mt-auto border-t border-slate-100 flex justify-between items-center px-8 w-[calc(100%-16rem)] ml-64 bg-transparent">
        <p className="text-xs font-medium uppercase tracking-widest text-slate-400">
          © 2024 Editorial Executive Recruitment. All rights reserved.
        </p>
        <div className="flex gap-8">
          <a
            className="text-xs font-medium uppercase tracking-widest text-slate-400 hover:text-indigo-500 transition-opacity"
            href="#"
          >
            Legal
          </a>
          <a
            className="text-xs font-medium uppercase tracking-widest text-slate-400 hover:text-indigo-500 transition-opacity"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="text-xs font-medium uppercase tracking-widest text-slate-400 hover:text-indigo-500 transition-opacity"
            href="#"
          >
            Support
          </a>
          <a
            className="text-xs font-medium uppercase tracking-widest text-slate-400 hover:text-indigo-500 transition-opacity"
            href="#"
          >
            Documentation
          </a>
        </div>
      </footer>
    </div>
  );
};

export default page;

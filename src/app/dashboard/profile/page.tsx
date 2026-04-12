"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Link as LinkIcon,
  Edit3,
  Plus,
} from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 lg:space-y-8 pb-20 lg:pb-12">
      
      {/* Header Card */}
      <div className="bg-surface-lowest rounded-2xl overflow-hidden shadow-sm border border-slate-100">
        <div className="h-32 lg:h-48 bg-gradient-to-r from-primary to-indigo-600 relative">
          <button className="absolute bottom-4 right-4 p-2 bg-white/20 backdrop-blur-md text-white rounded-lg">
            <Edit3 size={18} />
          </button>
        </div>

        <div className="px-4 lg:px-8 pb-6 lg:pb-8 relative">
          <div className="flex justify-between items-end -mt-10 lg:-mt-16 mb-6">
            
            {/* Avatar */}
            <div className="relative">
              <div className="w-20 h-20 lg:w-32 lg:h-32 rounded-2xl border-4 border-white bg-slate-200 overflow-hidden shadow-xl">
                <img
                  src="https://picsum.photos/seed/user/200/200"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <button className="absolute bottom-1 right-1 p-1.5 bg-primary text-white rounded-lg">
                <Plus size={14} />
              </button>
            </div>

            <button className="px-4 py-2 bg-primary text-white font-bold rounded-xl">
              Edit Profile
            </button>
          </div>

          {/* Info */}
          <div className="space-y-4">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
              Devendra Singh
            </h2>

            <p className="text-slate-500">
              Senior Product Designer
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <MapPin size={16} /> India
              </span>
              <span className="flex items-center gap-2">
                <Mail size={16} /> your@email.com
              </span>
              <span className="flex items-center gap-2">
                <LinkIcon size={16} /> yourportfolio.com
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        
        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-6">

          {/* 🎓 Education Section (NEW) */}
          <section className="bg-surface-lowest p-6 rounded-2xl shadow-sm border border-slate-100 space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-slate-900">Education</h3>
              <button className="p-2 text-primary hover:bg-primary/5 rounded-lg">
                <Plus size={20} />
              </button>
            </div>

            <div className="space-y-6">
              {[
                {
                  degree: "MCA (Master of Computer Applications)",
                  college: "AKTU University",
                  period: "2022 - 2024",
                  desc: "Focused on Java, Spring Boot, and full-stack development."
                },
                {
                  degree: "BCA (Bachelor of Computer Applications)",
                  college: "XYZ College",
                  period: "2019 - 2022",
                  desc: "Built strong foundation in programming and databases."
                }
              ].map((edu, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 bg-surface-low rounded-xl flex items-center justify-center font-bold text-slate-400">
                    🎓
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900">
                      {edu.degree}
                    </h4>
                    <p className="text-primary text-sm font-semibold">
                      {edu.college}
                    </p>
                    <span className="text-xs text-slate-400">
                      {edu.period}
                    </span>
                    <p className="text-sm text-slate-500">
                      {edu.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 💼 Experience Section */}
          <section className="bg-surface-lowest p-6 rounded-2xl shadow-sm border border-slate-100 space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-slate-900">Experience</h3>
              <button className="p-2 text-primary hover:bg-primary/5 rounded-lg">
                <Plus size={20} />
              </button>
            </div>

            <div className="space-y-6">
              {[
                {
                  role: "Java Developer",
                  company: "Edunext Technologies",
                  period: "2024 - Present",
                  description: "Working on Spring Boot APIs and backend systems."
                }
              ].map((exp, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 bg-surface-low rounded-xl flex items-center justify-center font-bold text-slate-400">
                    {exp.company[0]}
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900">
                      {exp.role}
                    </h4>
                    <p className="text-primary text-sm font-semibold">
                      {exp.company}
                    </p>
                    <span className="text-xs text-slate-400">
                      {exp.period}
                    </span>
                    <p className="text-sm text-slate-500">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {/* Skills */}
          <section className="bg-surface-lowest p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Skills
            </h3>

            <div className="flex flex-wrap gap-2">
              {["Java", "Spring Boot", "React", "Next.js"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-surface-low rounded-lg text-sm font-bold"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
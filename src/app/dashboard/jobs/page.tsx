"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  MapPin,
  Briefcase,
  Clock,
  DollarSign,
  Filter,
  Bookmark,
  X,
  CheckCircle2,
} from "lucide-react";

const jobs = [
  {
    id: 1,
    company: "Meta",
    logo: "https://picsum.photos/seed/meta/100/100",
    role: "Product Designer",
    location: "Menlo Park, CA",
    type: "Full-time",
    salary: "$160k - $220k",
    posted: "12h ago",
    description: "We are looking for a Product Designer to help us build the future...",
    tags: ["Design System", "Figma", "Prototyping"],
  },
  {
    id: 2,
    company: "Apple",
    logo: "https://picsum.photos/seed/apple/100/100",
    role: "Senior UX Designer",
    location: "Cupertino, CA",
    type: "Full-time",
    salary: "$190k - $250k",
    posted: "1 day ago",
    description: "Join the team that designs iconic products...",
    tags: ["iOS", "Human Interface", "Accessibility"],
  },
  {
    id: 3,
    company: "Netflix",
    logo: "https://picsum.photos/seed/netflix/100/100",
    role: "Interaction Designer",
    location: "Remote",
    type: "Remote",
    salary: "$170k - $230k",
    posted: "2 days ago",
    description: "Help shape how millions discover content...",
    tags: ["TV UI", "Motion Design", "User Testing"],
  },
];

export default function FindJobs() {
  const [selectedJob, setSelectedJob] = useState<(typeof jobs)[0] | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex h-full lg:h-[calc(100vh-80px)] gap-6 relative p-5">
      
      {/* LEFT LIST */}
      <div className={`flex-1 flex flex-col gap-4 overflow-hidden ${selectedJob ? "hidden lg:flex" : ""}`}>
        
        {/* Search */}
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              placeholder="Search jobs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white rounded-xl shadow-sm focus:ring-2 focus:ring-primary outline-none"
            />
          </div>

          <button className="px-4 py-3 bg-white rounded-xl shadow-sm flex items-center gap-2">
            <Filter size={18} />
            <span className="hidden sm:block">Filters</span>
          </button>
        </div>

        {/* LIST */}
        <div className="flex-1 overflow-y-auto space-y-4 pb-10">
          {jobs.map((job) => (
            <motion.div
              key={job.id}
              onClick={() => setSelectedJob(job)}
              className={`p-4 rounded-xl border-2 cursor-pointer transition ${
                selectedJob?.id === job.id
                  ? "border-primary bg-white shadow-lg"
                  : "border-transparent bg-white hover:border-slate-200"
              }`}
            >
              <div className="flex gap-4">
                <Image src={job.logo} alt="" width={56} height={56} className="rounded-xl" />

                <div className="flex-1">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-bold text-slate-900">{job.role}</h3>
                      <p className="text-primary font-semibold">{job.company}</p>
                    </div>

                    <Bookmark className="text-slate-400 hover:text-primary" />
                  </div>

                  <div className="flex flex-wrap gap-3 mt-3 text-sm text-slate-500">
                    <span className="flex items-center gap-1"><MapPin size={14} />{job.location}</span>
                    <span className="flex items-center gap-1"><Briefcase size={14} />{job.type}</span>
                    <span className="flex items-center gap-1"><DollarSign size={14} />{job.salary}</span>
                    <span className="ml-auto flex items-center gap-1"><Clock size={14} />{job.posted}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* RIGHT PANEL / MOBILE DRAWER */}
      <AnimatePresence>
        {selectedJob && (
          <>
            {/* BACKDROP */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedJob(null)}
            />

            {/* PANEL */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed right-0 top-0 h-screen w-full sm:w-[420px] bg-white z-50 shadow-2xl flex flex-col lg:relative lg:w-[450px]"
            >
              <div className="p-6 overflow-y-auto flex-1 space-y-6">
                
                {/* HEADER */}
                <div className="flex justify-between">
                  <Image src={selectedJob.logo} alt="" width={70} height={70} className="rounded-2xl" />
                  <button onClick={() => setSelectedJob(null)}>
                    <X size={24} />
                  </button>
                </div>

                <div>
                  <h2 className="text-xl font-bold">{selectedJob.role}</h2>
                  <p className="text-primary font-semibold">{selectedJob.company}</p>
                </div>

                {/* INFO */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-100 p-3 rounded-xl">
                    <p className="text-xs text-slate-500">Location</p>
                    <p className="font-bold">{selectedJob.location}</p>
                  </div>
                  <div className="bg-slate-100 p-3 rounded-xl">
                    <p className="text-xs text-slate-500">Salary</p>
                    <p className="font-bold">{selectedJob.salary}</p>
                  </div>
                </div>

                {/* DESC */}
                <p className="text-slate-600 text-sm">
                  {selectedJob.description}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2">
                  {selectedJob.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* FOOTER */}
              <div className="p-4 border-t flex gap-3">
                <button className="flex-1 py-3 bg-primary text-white rounded-xl">
                  Apply Now
                </button>
                <button className="p-3 bg-slate-100 rounded-xl">
                  <Bookmark />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* EMPTY STATE */}
      {!selectedJob && (
        <div className="hidden lg:flex w-[450px] items-center justify-center border-dashed border-2 rounded-xl">
          <p className="text-slate-400">Select a job</p>
        </div>
      )}
    </div>
  );
}
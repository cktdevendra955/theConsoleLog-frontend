"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  MapPin,
  Bookmark,
  Briefcase,
  Filter,
} from "lucide-react";

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  saved: boolean;
};

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechNova",
      location: "Remote",
      type: "Full-time",
      saved: false,
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "CodeCraft",
      location: "Bangalore",
      type: "Full-time",
      saved: false,
    },
    {
      id: 3,
      title: "React Intern",
      company: "StartupX",
      location: "Delhi",
      type: "Internship",
      saved: false,
    },
  ]);

  const toggleSave = (id: number) => {
    setJobs((prev) =>
      prev.map((job) =>
        job.id === id ? { ...job, saved: !job.saved } : job
      )
    );
  };

  return (
    <div className="min-h-screen bg-white text-black">

      {/* 🔹 Header */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <h1 className="text-lg font-semibold">Mark-43</h1>
          <div className="text-sm text-gray-500">Jobs</div>
        </div>
      </header>

      {/* 🔹 Search + Filters */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row gap-4">

          {/* Search */}
          <div className="flex items-center border rounded-xl px-4 w-full">
            <Search size={16} className="text-gray-400 mr-2" />
            <input
              placeholder="Search job title or company..."
              className="w-full py-2 text-sm focus:outline-none"
            />
          </div>

          {/* Location */}
          <div className="flex items-center border rounded-xl px-4 w-full md:w-64">
            <MapPin size={16} className="text-gray-400 mr-2" />
            <input
              placeholder="Location"
              className="w-full py-2 text-sm focus:outline-none"
            />
          </div>

          {/* Filter Button */}
          <button className="flex items-center gap-2 border px-4 py-2 rounded-xl text-sm hover:bg-gray-100">
            <Filter size={16} /> Filters
          </button>

        </div>
      </section>

      {/* 🔹 Job List */}
      <section className="max-w-7xl mx-auto px-6 pb-16 grid md:grid-cols-2 gap-6">

        {jobs.map((job) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border rounded-2xl p-6 hover:shadow-md transition"
          >
            {/* Top */}
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-lg font-medium">{job.title}</h2>
                <p className="text-sm text-gray-500">{job.company}</p>
              </div>

              <button onClick={() => toggleSave(job.id)}>
                <Bookmark
                  className={`h-5 w-5 ${
                    job.saved ? "text-black" : "text-gray-400"
                  }`}
                  fill={job.saved ? "black" : "none"}
                />
              </button>
            </div>

            {/* Info */}
            <div className="flex items-center gap-4 text-sm text-gray-500 mt-4">
              <span className="flex items-center gap-1">
                <MapPin size={14} /> {job.location}
              </span>
              <span className="flex items-center gap-1">
                <Briefcase size={14} /> {job.type}
              </span>
            </div>

            {/* Actions */}
            <div className="flex justify-between items-center mt-6">
              <span className="text-xs text-gray-400">
                Posted recently
              </span>

              <button className="bg-black text-white px-4 py-2 rounded-xl text-sm hover:opacity-90">
                Apply
              </button>
            </div>
          </motion.div>
        ))}

      </section>

      {/* 🔹 Empty State (optional if no jobs) */}
      {jobs.length === 0 && (
        <div className="text-center text-gray-500 py-20">
          No jobs found. Try adjusting your filters.
        </div>
      )}
    </div>
  );
}   
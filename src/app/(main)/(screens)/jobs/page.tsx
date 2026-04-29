"use client";

import {
  Search,
  MapPin,
  Briefcase,
  Bookmark,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

const jobs = [
  {
    title: "Frontend Developer",
    company: "StartupX",
    location: "Remote",
    type: "Full-time",
    skills: ["React", "Next.js", "Tailwind"],
  },
  {
    title: "Backend Developer",
    company: "TechFlow",
    location: "Bangalore",
    type: "Full-time",
    skills: ["Java", "Spring Boot", "MySQL"],
  },
  {
    title: "Full Stack Developer",
    company: "CodeBase",
    location: "Remote",
    type: "Internship",
    skills: ["React", "Node.js", "MongoDB"],
  },
];

export default function JobSearchPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Remote", "Full-time", "Internship"];

  const filteredJobs =
    activeFilter === "All"
      ? jobs
      : jobs.filter(
          (job) =>
            job.location === activeFilter || job.type === activeFilter
        );

  return (
    <main className="bg-white text-gray-900 min-h-screen">

      {/* HERO */}
      <section className="pb-10 px-6 md:px-12 text-center border-b">
        <div className="max-w-3xl mx-auto">

          <h1 className="text-3xl md:text-5xl font-semibold">
            Find Jobs That Match <br />
            <span className="text-gray-400">Your Skills</span>
          </h1>

          {/* SEARCH */}
          <div className="mt-6 flex items-center gap-3 border rounded-xl px-4 py-3">
            <Search size={18} className="text-gray-400" />
            <input
              placeholder="Search roles, skills, companies..."
              className="w-full outline-none"
            />
          </div>

        </div>
      </section>

      {/* FILTER BAR */}
      <section className="px-6 md:px-12 py-6 border-b">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">

          {/* FILTER CHIPS */}
          <div className="flex flex-wrap gap-3">
            {filters.map((filter, i) => (
              <button
                key={i}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm border ${
                  activeFilter === filter
                    ? "bg-black text-white"
                    : "bg-white text-gray-600"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* DROPDOWNS */}
          <div className="flex gap-3 flex-wrap">

            <select className="border rounded-lg px-3 py-2 text-sm">
              <option>Location</option>
              <option>Remote</option>
              <option>Delhi</option>
              <option>Bangalore</option>
            </select>

            <select className="border rounded-lg px-3 py-2 text-sm">
              <option>Experience</option>
              <option>0–1 Years</option>
              <option>1–3 Years</option>
            </select>

            <select className="border rounded-lg px-3 py-2 text-sm">
              <option>Sort</option>
              <option>Newest</option>
              <option>Best Match</option>
            </select>

          </div>

        </div>
      </section>

      {/* JOB GRID */}
      <section className="px-6 md:px-12 py-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredJobs.map((job, i) => (
            <div
              key={i}
              className="border rounded-2xl p-5 flex flex-col justify-between"
            >

              {/* TOP */}
              <div>
                <div className="flex justify-between items-start">

                  <div>
                    <h2 className="text-lg font-semibold">
                      {job.title}
                    </h2>
                    <p className="text-gray-500 text-sm">
                      {job.company}
                    </p>
                  </div>

                  <button className="p-2 border rounded-lg">
                    <Bookmark size={14} />
                  </button>

                </div>

                {/* INFO */}
                <div className="flex flex-wrap gap-3 text-xs text-gray-600 mt-4">
                  <span className="flex items-center gap-1">
                    <MapPin size={12} /> {job.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Briefcase size={12} /> {job.type}
                  </span>
                </div>

                {/* SKILLS */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {job.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-gray-100 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* FOOTER */}
              <div className="mt-6 flex items-center justify-between">
                <p className="text-xs text-gray-400">
                  Skill matched
                </p>

                <button className="px-4 py-2 bg-black text-white rounded-lg text-sm flex items-center gap-1">
                  Apply <ArrowRight size={14} />
                </button>
              </div>

            </div>
          ))}

        </div>
      </section>

    </main>
  );
}
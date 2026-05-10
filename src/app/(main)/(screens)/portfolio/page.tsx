"use client";

import { Search, MapPin, ArrowUpRight, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

/* ================= MOCK DATA ================= */
const developers = [
  {
    name: "Aarav Sharma",
    role: "Frontend Developer",
    location: "Delhi, India",
    skills: ["React", "Next.js", "Tailwind"],
  },
  {
    name: "Priya Verma",
    role: "Full Stack Developer",
    location: "Bangalore, India",
    skills: ["Node.js", "MongoDB", "React"],
  },
  {
    name: "Rohit Singh",
    role: "UI Engineer",
    location: "Remote",
    skills: ["Figma", "CSS", "JavaScript"],
  },
  {
    name: "Neha Gupta",
    role: "Backend Developer",
    location: "Pune, India",
    skills: ["Node.js", "Express", "PostgreSQL"],
  },
];

export default function PortfolioPage() {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="bg-[#f6f7f9] min-h-screen">

      {/* ================= HERO ================= */}
      <div className="bg-gradient-to-b from-white to-gray-100 border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 md:px-12 py-12 md:py-16 text-center">

          <h1 className="text-2xl md:text-4xl font-semibold text-gray-900">
            Discover Talented Developers
          </h1>

          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Browse portfolios, explore skills, and hire developers based on real work — not just resumes.
          </p>

          <div className="mt-6 md:mt-8 relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
            <input
              placeholder="Search by name, skill, or role..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-gray-200 bg-white shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-black/10"
            />
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {["React", "Next.js", "Node.js", "UI/UX", "Python"].map((skill) => (
              <button
                key={skill}
                className="px-4 py-1.5 text-sm rounded-full border border-gray-200 bg-white hover:bg-gray-100 transition"
              >
                {skill}
              </button>
            ))}
          </div>

          <p className="text-sm text-gray-400 mt-4">
            10,000+ developers • 500+ companies hiring
          </p>
        </div>
      </div>

      {/* ================= MAIN ================= */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-8 grid grid-cols-12 gap-8">

        {/* ================= MOBILE FILTER BUTTON ================= */}
        <div className="col-span-12 lg:hidden">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl bg-white text-sm font-medium"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
        </div>

        {/* ================= FILTER SIDEBAR ================= */}
        <aside
          className={`col-span-12 lg:col-span-3 ${
            showFilters ? "block" : "hidden"
          } lg:block`}
        >
          <div className="bg-white border border-gray-200 rounded-2xl p-5 space-y-6 sticky top-24">

            <h3 className="font-semibold text-gray-900 text-sm">
              Filters
            </h3>

            {/* Location */}
            <div>
              <p className="text-xs font-semibold text-gray-500 mb-2">
                Location
              </p>
              <div className="space-y-2 text-sm">
                {["Remote", "Delhi", "Bangalore", "Pune"].map((loc) => (
                  <label key={loc} className="flex items-center gap-2">
                    <input type="checkbox" />
                    {loc}
                  </label>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <p className="text-xs font-semibold text-gray-500 mb-2">
                Skills
              </p>
              <div className="space-y-2 text-sm">
                {["React", "Next.js", "Node.js", "UI/UX"].map((skill) => (
                  <label key={skill} className="flex items-center gap-2">
                    <input type="checkbox" />
                    {skill}
                  </label>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <p className="text-xs font-semibold text-gray-500 mb-2">
                Experience
              </p>
              <div className="space-y-2 text-sm">
                {["0-2 Years", "2-5 Years", "5+ Years"].map((exp) => (
                  <label key={exp} className="flex items-center gap-2">
                    <input type="checkbox" />
                    {exp}
                  </label>
                ))}
              </div>
            </div>

            <button className="w-full primary-gradient-bg py-2.5 rounded-xl text-sm font-medium">
              Apply Filters
            </button>
          </div>
        </aside>

        {/* ================= RIGHT SIDE ================= */}
        <main className="col-span-12 lg:col-span-9">

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Available Developers
            </h2>

            <select className="border border-gray-200 rounded-xl px-3 py-2 text-sm bg-white">
              <option>Sort by Latest</option>
              <option>Top Rated</option>
            </select>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {developers.map((dev, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-md hover:-translate-y-1 transition"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {dev.name}
                    </h3>
                    <p className="text-sm text-gray-500">{dev.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <MapPin className="w-4 h-4" />
                  {dev.location}
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                  {dev.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs bg-gray-100 rounded-full text-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 border border-gray-200 rounded-xl py-2 text-sm font-medium hover:bg-gray-50">
                    View Profile
                  </button>

                  <button className="flex-1 primary-gradient-bg rounded-xl py-2 text-sm font-medium flex items-center justify-center gap-1 hover:bg-gray-900">
                    Hire
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
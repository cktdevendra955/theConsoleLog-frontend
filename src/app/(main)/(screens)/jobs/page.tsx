"use client";

import { useState } from "react";
import {
  MapPin,
  Briefcase,
  Calendar,
  ArrowUpRight,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";

export default function JobPage() {
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <div className="bg-[#f6f7f9] min-h-screen px-4 md:px-40 py-6 md:py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6 md:gap-8">

        {/* ================= MOBILE HEADER ================= */}
        <div className="col-span-12 flex items-center justify-between lg:hidden mb-2">
          <h2 className="text-xl font-semibold">Jobs</h2>

          <button
            onClick={() => setOpenFilter(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-200 text-sm"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
        </div>

        {/* ================= FILTER DRAWER (MOBILE) ================= */}
        {openFilter && (
          <div className="fixed inset-0 z-50 bg-black/40 flex">
            <div className="bg-white w-[85%] max-w-sm h-full p-6 overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Filters</h3>
                <button onClick={() => setOpenFilter(false)}>
                  <X />
                </button>
              </div>

              <FilterContent />

              <button className="w-full mt-6 py-2.5 rounded-xl bg-black text-white">
                Apply Filters
              </button>
            </div>

            <div className="flex-1" onClick={() => setOpenFilter(false)} />
          </div>
        )}

        {/* ================= DESKTOP FILTER ================= */}
        <aside className="hidden lg:block col-span-3">
          <div className="sticky top-24 bg-white border border-gray-200 rounded-2xl p-6">
            <FilterContent />
          </div>
        </aside>

        {/* ================= JOB LIST ================= */}
        <main className="col-span-12 lg:col-span-9 space-y-4 md:space-y-6">

          {/* Desktop Header */}
          <div className="hidden lg:flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-900">
              120 Jobs Found
            </h2>
          </div>

          {[1, 2, 3, 4].map((job) => (
            <div
              key={job}
              className="bg-white border border-gray-200 rounded-2xl p-5 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:shadow-md hover:-translate-y-1 transition"
            >
              {/* LEFT / TOP */}
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-xl shrink-0" />

                <div className="w-full">
                  <h3 className="text-base md:text-lg font-semibold text-gray-900">
                    Frontend Developer
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 mb-2">
                    TechCorp Pvt Ltd
                  </p>

                  <div className="flex flex-wrap gap-3 text-xs md:text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      Remote
                    </span>

                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      2–5 Years
                    </span>

                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      25 May
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT / BOTTOM */}
              <div className="flex flex-col md:items-end gap-3 w-full md:w-auto mt-2 md:mt-0">
                
                <div className="flex items-center justify-between md:block w-full">
                  <p className="text-xs text-gray-500">Salary</p>
                  <p className="text-base md:text-lg font-semibold text-gray-900">
                    ₹6–12 LPA
                  </p>
                </div>

                <button className="w-full md:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-black text-white hover:bg-gray-900 active:scale-[0.97] transition-all">
                  Apply
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}

/* ================= FILTER CONTENT ================= */

function FilterContent() {
  return (
    <div className="space-y-5">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
        <input
          className="w-full pl-9 pr-3 py-2 rounded-xl border border-gray-200 bg-gray-50 text-sm"
          placeholder="Search jobs..."
        />
      </div>

      {/* Location */}
      <div>
        <p className="text-sm font-medium mb-2">Location</p>
        <input className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm bg-gray-50" />
      </div>

      {/* Experience */}
      <div>
        <p className="text-sm font-medium mb-2">Experience</p>
        <select className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm bg-gray-50">
          <option>Any</option>
          <option>0-2 Years</option>
          <option>2-5 Years</option>
        </select>
      </div>

      {/* Job Type */}
      <div>
        <p className="text-sm font-medium mb-2">Job Type</p>
        <div className="space-y-2 text-sm">
          <label className="flex gap-2">
            <input type="checkbox" /> Full-time
          </label>
          <label className="flex gap-2">
            <input type="checkbox" /> Internship
          </label>
          <label className="flex gap-2">
            <input type="checkbox" /> Remote
          </label>
        </div>
      </div>

      {/* Salary */}
      <div>
        <p className="text-sm font-medium mb-2">Salary</p>
        <select className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm bg-gray-50">
          <option>Any</option>
          <option>3–6 LPA</option>
          <option>6–12 LPA</option>
          <option>12+ LPA</option>
        </select>
      </div>
    </div>
  );
}
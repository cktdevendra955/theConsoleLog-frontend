import React from "react";
import {
  ChevronRight,
  Download,
  Plus,
  Users,
  TrendingUp,
  Zap,
  CalendarDays,
  Crown,
  RotateCcw,
  CheckCircle2,
  X,
  Mail,
  MoreVertical,
  ChevronLeft,
} from "lucide-react";

const page = () => {
  return (
    <div className="">      
      <main className="flex-1  min-h-screen flex flex-col relative">
        
        <div className="mt-16 flex flex-1 flex-col gap-6 p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            {/* Left Content */}
            <div>
              {/* Breadcrumb */}
              <nav className="mb-2 flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-widest text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Users size={14} />
                  <span>Talent</span>
                </div>

                <ChevronRight size={12} />

                <span className="text-indigo-600">Active Candidates</span>
              </nav>

              {/* Heading */}
              <h2 className="text-2xl font-bold tracking-tight text-on-surface sm:text-3xl">
                Candidate Management
              </h2>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              {/* Export Button */}
              <button className="flex items-center justify-center gap-2 rounded-lg border border-outline-variant/30 bg-white px-4 py-2 text-sm font-semibold shadow-sm transition-colors hover:bg-slate-50">
                <Download size={18} />
                Export CSV
              </button>

              {/* Add Button */}
              <button className="flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all hover:opacity-90">
                <Plus size={18} />
                Manual Entry
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 md:gap-6">
            {/* Card 1 */}
            <div className="rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-5 shadow-sm sm:p-6">
              <p className="mb-1 text-[10px] uppercase tracking-widest text-slate-400">
                Total Pipeline
              </p>

              <p className="text-2xl font-bold">1,284</p>

              <div className="mt-2 flex items-center gap-1 text-[10px] font-bold text-emerald-600">
                <TrendingUp size={14} />
                +12% this month
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-5 shadow-sm sm:p-6">
              <p className="mb-1 text-[10px] uppercase tracking-widest text-slate-400">
                High Match (90%+)
              </p>

              <p className="text-2xl font-bold">42</p>

              <div className="mt-2 flex items-center gap-1 text-[10px] font-bold text-indigo-600">
                <Zap size={14} />
                Elite potential
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-5 shadow-sm sm:p-6">
              <p className="mb-1 text-[10px] uppercase tracking-widest text-slate-400">
                Interviews Scheduled
              </p>

              <p className="text-2xl font-bold">18</p>

              <div className="mt-2 flex items-center gap-1 text-[10px] font-bold text-slate-400">
                <CalendarDays size={14} />4 happening today
              </div>
            </div>

            {/* Card 4 */}
            <div className="rounded-xl border border-tertiary/20 bg-tertiary-container/10 p-5 shadow-sm sm:p-6">
              <p className="mb-1 text-[10px] uppercase tracking-widest text-tertiary">
                Premium Slots Remaining
              </p>

              <p className="text-2xl font-bold text-tertiary">03</p>

              <div className="mt-2 flex items-center gap-1 text-[10px] font-bold text-tertiary">
                <Crown size={14} />
                Upgrade for more
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 xl:flex-row xl:items-start">
            {/* Sidebar Filters */}
            <aside className="w-full flex-shrink-0 space-y-8 rounded-2xl border border-outline-variant/10 bg-surface-container-low/50 p-5 sm:p-6 xl:w-72">
              <div>
                {/* Header */}
                <h4 className="mb-6 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-slate-400">
                  Advanced Filters
                  <button className="flex items-center gap-1 text-indigo-600 transition-all hover:underline">
                    <RotateCcw size={14} />
                    Reset
                  </button>
                </h4>

                <div className="space-y-6">
                  {/* Skills */}
                  <div>
                    <label className="mb-3 block text-xs font-bold">
                      Core Skills
                    </label>

                    <div className="space-y-2">
                      {[
                        "Creative Direction",
                        "Digital Strategy",
                        "Editorial Design",
                        "UX Copywriting",
                      ].map((skill) => (
                        <label
                          key={skill}
                          className="group flex cursor-pointer items-center gap-3"
                        >
                          <input
                            className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                            type="checkbox"
                          />

                          <span className="text-sm text-slate-600 group-hover:text-on-surface">
                            {skill}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Experience */}
                  <div>
                    <label className="mb-3 block text-xs font-bold">
                      Experience Level (Years)
                    </label>

                    <input
                      className="h-1 w-full cursor-pointer appearance-none rounded-lg bg-indigo-100 accent-indigo-600"
                      max="20"
                      min="0"
                      type="range"
                      value="8"
                    />

                    <div className="mt-2 flex justify-between text-[10px] font-bold text-slate-400">
                      <span>0</span>
                      <span>8+ Years</span>
                      <span>20</span>
                    </div>
                  </div>

                  {/* Salary */}
                  <div>
                    <label className="mb-3 block text-xs font-bold">
                      Expected Salary
                    </label>

                    <div className="flex items-center gap-2">
                      <div className="relative flex-1">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400">
                          $
                        </span>

                        <input
                          className="w-full rounded-lg border-outline-variant/30 bg-white py-2 pl-6 pr-2 text-xs focus:border-primary focus:ring-primary/20"
                          type="text"
                          value="90k"
                        />
                      </div>

                      <span className="text-slate-400">-</span>

                      <div className="relative flex-1">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400">
                          $
                        </span>

                        <input
                          className="w-full rounded-lg border-outline-variant/30 bg-white py-2 pl-6 pr-2 text-xs focus:border-primary focus:ring-primary/20"
                          type="text"
                          value="150k"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Status */}
                  <div>
                    <label className="mb-3 block text-xs font-bold">
                      Application Status
                    </label>

                    <select className="w-full rounded-lg border-outline-variant/30 bg-white px-3 py-2 text-xs focus:border-primary focus:ring-primary/20">
                      <option>All Active</option>
                      <option>New Applicants</option>
                      <option>Shortlisted</option>
                      <option>Interviewing</option>
                    </select>
                  </div>
                </div>
              </div>
            </aside>

            {/* Table Section */}
            <div className="flex flex-1 flex-col overflow-hidden rounded-2xl border border-outline-variant/10 bg-surface-container-lowest shadow-sm">
              {/* Top Actions */}
              <div className="flex flex-col gap-4 border-b border-outline-variant/10 bg-slate-50/50 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                <div className="flex flex-wrap items-center gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                      type="checkbox"
                    />

                    <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                      Select All
                    </span>
                  </label>

                  <div className="hidden h-4 w-px bg-slate-200 sm:block"></div>

                  <div className="flex flex-wrap items-center gap-2">
                    <button className="flex items-center gap-1 rounded px-3 py-1 text-xs font-bold text-indigo-600 transition-colors hover:bg-indigo-50">
                      <CheckCircle2 size={16} />
                      Shortlist
                    </button>

                    <button className="flex items-center gap-1 rounded px-3 py-1 text-xs font-bold text-error transition-colors hover:bg-error-container/20">
                      <X size={16} />
                      Reject
                    </button>

                    <button className="flex items-center gap-1 rounded px-3 py-1 text-xs font-bold text-slate-500 transition-colors hover:bg-slate-100">
                      <Mail size={16} />
                      Message
                    </button>
                  </div>
                </div>

                <p className="text-xs font-medium text-slate-400">
                  Showing <span className="text-on-surface">12</span> of 48
                  candidates
                </p>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="min-w-[900px] w-full border-collapse text-left">
                  <thead>
                    <tr className="border-b border-outline-variant/10">
                      {[
                        "Candidate",
                        "Match %",
                        "ATS Score",
                        "Experience",
                        "Status",
                      ].map((heading, index) => (
                        <th
                          key={heading}
                          className={`px-6 py-4 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400 ${
                            index === 1 || index === 2 ? "text-center" : ""
                          }`}
                        >
                          {heading}
                        </th>
                      ))}

                      <th className="px-6 py-4"></th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-outline-variant/5">
                    {[
                      {
                        name: "Alexandra Vance",
                        role: "Senior Product Strategist • London",
                        match: "98%",
                        matchColor: "bg-tertiary-container/20 text-tertiary",
                        ats: "842",
                        exp: "12 Years",
                        company: "Ex-Vogue, Monocle",
                        status: "Shortlisted",
                        statusColor: "bg-indigo-50 text-indigo-600",
                      },
                      {
                        name: "Julian Rossi",
                        role: "Head of Design • Milan",
                        match: "92%",
                        matchColor: "bg-emerald-100 text-emerald-700",
                        ats: "790",
                        exp: "8 Years",
                        company: "Ex-Prada, Gucci",
                        status: "Interviewing",
                        statusColor: "bg-amber-50 text-amber-600",
                      },
                    ].map((candidate) => (
                      <tr
                        key={candidate.name}
                        className="group transition-colors hover:bg-slate-50/80"
                      >
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-4">
                            <input
                              className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                              type="checkbox"
                            />

                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 font-bold text-primary">
                              {candidate.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </div>

                            <div>
                              <p className="text-sm font-bold text-on-surface">
                                {candidate.name}
                              </p>

                              <p className="text-[11px] font-medium text-slate-400">
                                {candidate.role}
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-6 py-5 text-center">
                          <span
                            className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${candidate.matchColor}`}
                          >
                            {candidate.match}
                          </span>
                        </td>

                        <td className="px-6 py-5 text-center">
                          <p className="text-sm font-semibold text-on-surface">
                            {candidate.ats}

                            <span className="text-[10px] text-slate-400">
                              {" "}
                              / 1000
                            </span>
                          </p>
                        </td>

                        <td className="px-6 py-5">
                          <p className="text-xs font-bold text-slate-600">
                            {candidate.exp}
                          </p>

                          <p className="text-[10px] text-slate-400">
                            {candidate.company}
                          </p>
                        </td>

                        <td className="px-6 py-5">
                          <span
                            className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider ${candidate.statusColor}`}
                          >
                            {candidate.status}
                          </span>
                        </td>

                        <td className="px-6 py-5 text-right">
                          <button className="text-slate-300 transition-colors hover:text-indigo-600">
                            <MoreVertical size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="mt-auto flex flex-col gap-4 border-t border-outline-variant/10 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-slate-400">
                    Rows per page:
                  </span>

                  <select className="cursor-pointer border-none bg-transparent text-xs font-bold focus:ring-0">
                    <option>12</option>
                    <option>24</option>
                    <option>48</option>
                  </select>
                </div>

                <div className="flex items-center gap-4">
                  <button className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-all hover:bg-slate-100">
                    <ChevronLeft size={18} />
                  </button>

                  <div className="flex items-center gap-1">
                    <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-xs font-bold text-white">
                      1
                    </button>

                    <button className="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold hover:bg-slate-100">
                      2
                    </button>

                    <button className="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold hover:bg-slate-100">
                      3
                    </button>

                    <span className="mx-1 text-slate-400">...</span>

                    <button className="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold hover:bg-slate-100">
                      4
                    </button>
                  </div>

                  <button className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-all hover:bg-slate-100">
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="w-full py-6 mt-auto flex justify-between items-center px-8 border-t border-slate-100">
          <p className="text-xs font-medium uppercase tracking-widest text-slate-400">
            © 2024 Editorial Executive Recruitment. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              className="text-xs font-medium uppercase tracking-widest text-slate-400 hover:text-indigo-500 transition-opacity opacity-80 hover:opacity-100"
              href="#"
            >
              Legal
            </a>
            <a
              className="text-xs font-medium uppercase tracking-widest text-slate-400 hover:text-indigo-500 transition-opacity opacity-80 hover:opacity-100"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-xs font-medium uppercase tracking-widest text-slate-400 hover:text-indigo-500 transition-opacity opacity-80 hover:opacity-100"
              href="#"
            >
              Support
            </a>
            <a
              className="text-xs font-medium uppercase tracking-widest text-slate-400 hover:text-indigo-500 transition-opacity opacity-80 hover:opacity-100"
              href="#"
            >
              Documentation
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default page;

import React from "react";

const page = () => {
  return (
    <div className="bg-background text-on-surface flex min-h-screen">
      <aside className="h-screen w-64 fixed left-0 top-0 bg-slate-50 border-r border-slate-200/50 flex flex-col py-8 px-4 z-50">
        <div className="mb-10 px-2">
          <h1 className="text-lg font-bold text-indigo-700 tracking-tight leading-relaxed">
            The Curator
          </h1>
          <p className="text-xs text-slate-500 font-sans">
            Elite Talent Partners
          </p>
        </div>
        <nav className="flex-1 space-y-1">
          <a
            className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-100 transition-colors duration-200 rounded-lg group"
            href="#"
          >
            <span className="material-symbols-outlined group-hover:text-indigo-600">
              dashboard
            </span>
            <span className="text-sm font-medium">Dashboard</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-100 transition-colors duration-200 rounded-lg group"
            href="#"
          >
            <span className="material-symbols-outlined group-hover:text-indigo-600">
              add_circle
            </span>
            <span className="text-sm font-medium">Post Job</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-100 transition-colors duration-200 rounded-lg group"
            href="#"
          >
            <span className="material-symbols-outlined group-hover:text-indigo-600">
              work
            </span>
            <span className="text-sm font-medium">Manage Jobs</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2 text-indigo-700 font-semibold border-r-4 border-indigo-600 bg-indigo-50/50 rounded-l-lg"
            href="#"
          >
            <span className="material-symbols-outlined">group</span>
            <span className="text-sm font-medium">Candidates</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-100 transition-colors duration-200 rounded-lg group"
            href="#"
          >
            <span className="material-symbols-outlined group-hover:text-indigo-600">
              event
            </span>
            <span className="text-sm font-medium">Interviews</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-100 transition-colors duration-200 rounded-lg group"
            href="#"
          >
            <span className="material-symbols-outlined group-hover:text-indigo-600">
              mail
            </span>
            <span className="text-sm font-medium">Messages</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-100 transition-colors duration-200 rounded-lg group"
            href="#"
          >
            <span className="material-symbols-outlined group-hover:text-indigo-600">
              insights
            </span>
            <span className="text-sm font-medium">Analytics</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-100 transition-colors duration-200 rounded-lg group"
            href="#"
          >
            <span className="material-symbols-outlined group-hover:text-indigo-600">
              business
            </span>
            <span className="text-sm font-medium">Company Profile</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-100 transition-colors duration-200 rounded-lg group"
            href="#"
          >
            <span className="material-symbols-outlined group-hover:text-indigo-600">
              settings
            </span>
            <span className="text-sm font-medium">Settings</span>
          </a>
        </nav>
        <div className="mt-auto pt-6 border-t border-slate-200/50">
          <button className="w-full bg-primary-container text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 scale-95 active:opacity-80 transition-all">
            <span className="material-symbols-outlined">add</span>
            Quick Post
          </button>
        </div>
      </aside>
      <main className="flex-1 ml-64 min-h-screen flex flex-col relative">
        <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 bg-white/80 backdrop-blur-md flex items-center justify-between px-8 z-40">
          <div className="flex items-center bg-surface-container-low px-4 py-2 rounded-full w-96 focus-within:ring-2 focus-within:ring-indigo-500/20 transition-all">
            <span className="material-symbols-outlined text-slate-400 mr-2">
              search
            </span>
            <input
              className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-slate-400"
              placeholder="Search candidates, skills, or locations..."
              type="text"
            />
          </div>
          <div className="flex items-center gap-6">
            <button className="relative text-slate-500 hover:text-indigo-600 transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-error ring-2 ring-white"></span>
            </button>
            <div className="flex items-center gap-3 pl-6 border-l border-slate-100">
              <div className="text-right">
                <p className="text-sm font-bold tracking-tight">
                  Marcus Thorne
                </p>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest">
                  Executive Recruiter
                </p>
              </div>
              <img
                alt="Recruiter profile"
                className="w-10 h-10 rounded-full border-2 border-primary/10 object-cover"
                data-alt="Professional portrait of a recruiter with glasses in a modern office, soft lighting, neutral background"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGpsSgxlF83Wak60m_S4GOxf1Kd7dWHBqVZuvG_pFf1BUbh5Ij5-BjUeMhvv0e7g3LNmIqxPW5brgE-8L1agJUeLtAAGLMQadWzQJJ7v69_hDN_Gs_dwHsnHCEczzE0vtJVaFUDt3aiHvSKUNf7C4U2_0OhIGyPb7FaAdilSmFXmsCoTCv2PenskxxLNNoZXpeKjMBcD_KTvfp6nL4EXkSPEIbGjBjHc-H9Kk5AV16gyihvD_z9kc9AMkGb84C_ug4hmyE-PgCU5Ib"
              />
            </div>
          </div>
        </header>
        <div className="mt-16 p-8 flex-1 flex flex-col gap-8">
          <div className="flex justify-between items-end">
            <div>
              <nav className="flex text-xs text-slate-400 mb-2 gap-2 font-medium uppercase tracking-widest">
                <span>Talent</span>
                <span>/</span>
                <span className="text-indigo-600">Active Candidates</span>
              </nav>
              <h2 className="text-3xl font-bold tracking-tight text-on-surface">
                Candidate Management
              </h2>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-outline-variant/30 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors shadow-sm">
                <span className="material-symbols-outlined text-[20px]">
                  file_download
                </span>
                Export CSV
              </button>
              <button className="flex items-center gap-2 px-6 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:opacity-90 transition-all shadow-lg shadow-indigo-500/20">
                <span className="material-symbols-outlined text-[20px]">
                  add
                </span>
                Manual Entry
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 shadow-sm">
              <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">
                Total Pipeline
              </p>
              <p className="text-2xl font-bold">1,284</p>
              <div className="mt-2 text-[10px] text-emerald-600 font-bold flex items-center">
                <span className="material-symbols-outlined text-[14px]">
                  trending_up
                </span>{" "}
                +12% this month
              </div>
            </div>
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 shadow-sm">
              <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">
                High Match (90%+)
              </p>
              <p className="text-2xl font-bold">42</p>
              <div className="mt-2 text-[10px] text-indigo-600 font-bold flex items-center">
                <span className="material-symbols-outlined text-[14px]">
                  bolt
                </span>{" "}
                Elite potential
              </div>
            </div>
            <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 shadow-sm">
              <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">
                Interviews Scheduled
              </p>
              <p className="text-2xl font-bold">18</p>
              <div className="mt-2 text-[10px] text-slate-400 font-bold flex items-center">
                <span className="material-symbols-outlined text-[14px]">
                  event
                </span>{" "}
                4 happening today
              </div>
            </div>
            <div className="bg-tertiary-container/10 p-6 rounded-xl border border-tertiary/20 shadow-sm">
              <p className="text-[10px] text-tertiary uppercase tracking-widest mb-1">
                Premium Slots Remaining
              </p>
              <p className="text-2xl font-bold text-tertiary">03</p>
              <div className="mt-2 text-[10px] text-tertiary font-bold flex items-center">
                <span className="material-symbols-outlined text-[14px]">
                  workspace_premium
                </span>{" "}
                Upgrade for more
              </div>
            </div>
          </div>
          <div className="flex gap-8 items-start">
            <aside className="w-72 flex-shrink-0 bg-surface-container-low/50 p-6 rounded-2xl border border-outline-variant/10 space-y-8">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center justify-between">
                  Advanced Filters
                  <button className="text-indigo-600 hover:underline">
                    Reset
                  </button>
                </h4>
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold mb-3">
                      Core Skills
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300"
                          type="checkbox"
                        />
                        <span className="text-sm text-slate-600 group-hover:text-on-surface">
                          Creative Direction
                        </span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300"
                          type="checkbox"
                        />
                        <span className="text-sm text-slate-600 group-hover:text-on-surface">
                          Digital Strategy
                        </span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300"
                          type="checkbox"
                        />
                        <span className="text-sm text-slate-600 group-hover:text-on-surface">
                          Editorial Design
                        </span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300"
                          type="checkbox"
                        />
                        <span className="text-sm text-slate-600 group-hover:text-on-surface">
                          UX Copywriting
                        </span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold mb-3">
                      Experience Level (Years)
                    </label>
                    <input
                      className="w-full h-1 bg-indigo-100 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                      max="20"
                      min="0"
                      type="range"
                      value="8"
                    />
                    <div className="flex justify-between text-[10px] mt-2 font-bold text-slate-400">
                      <span>0</span>
                      <span>8+ Years</span>
                      <span>20</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold mb-3">
                      Expected Salary
                    </label>
                    <div className="flex items-center gap-2">
                      <div className="relative flex-1">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-400">
                          $
                        </span>
                        <input
                          className="w-full pl-6 pr-2 py-2 text-xs border-outline-variant/30 rounded-lg bg-white focus:ring-primary/20 focus:border-primary"
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
                          className="w-full pl-6 pr-2 py-2 text-xs border-outline-variant/30 rounded-lg bg-white focus:ring-primary/20 focus:border-primary"
                          type="text"
                          value="150k"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold mb-3">
                      Application Status
                    </label>
                    <select className="w-full text-xs border-outline-variant/30 rounded-lg bg-white focus:ring-primary/20 focus:border-primary py-2 px-3">
                      <option>All Active</option>
                      <option>New Applicants</option>
                      <option>Shortlisted</option>
                      <option>Interviewing</option>
                    </select>
                  </div>
                </div>
              </div>
            </aside>
            <div className="flex-1 bg-surface-container-lowest rounded-2xl border border-outline-variant/10 shadow-sm overflow-hidden flex flex-col">
              <div className="px-6 py-4 border-b border-outline-variant/10 flex items-center justify-between bg-slate-50/50">
                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300"
                      type="checkbox"
                    />
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                      Select All
                    </span>
                  </label>
                  <div className="h-4 w-px bg-slate-200"></div>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1 text-xs font-bold text-indigo-600 hover:bg-indigo-50 rounded transition-colors flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">
                        verified
                      </span>{" "}
                      Shortlist
                    </button>
                    <button className="px-3 py-1 text-xs font-bold text-error hover:bg-error-container/20 rounded transition-colors flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">
                        close
                      </span>{" "}
                      Reject
                    </button>
                    <button className="px-3 py-1 text-xs font-bold text-slate-500 hover:bg-slate-100 rounded transition-colors flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">
                        mail
                      </span>{" "}
                      Message
                    </button>
                  </div>
                </div>
                <p className="text-xs text-slate-400 font-medium">
                  Showing <span className="text-on-surface">12</span> of 48
                  candidates
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-outline-variant/10">
                      <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400">
                        Candidate
                      </th>
                      <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400 text-center">
                        Match %
                      </th>
                      <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400 text-center">
                        ATS Score
                      </th>
                      <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400">
                        Experience
                      </th>
                      <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400">
                        Status
                      </th>
                      <th className="px-6 py-4"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/5">
                    <tr className="hover:bg-slate-50/80 transition-colors group">
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-4">
                          <input
                            className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300"
                            type="checkbox"
                          />
                          <img
                            alt="Candidate 1"
                            className="w-10 h-10 rounded-xl object-cover"
                            data-alt="Portrait of a professional creative woman with a vibrant background, soft focus, sophisticated atmosphere"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvHODhGz15p6n1aUAhpqP_KlYDUgQKCOOVQqSebnRbEp4sfnC1cq8x0C9dhjbuTB6m4ZsdiBJcjIs_1IGo_Sj_QYA1a9adCB0LCGV4VeG_wUENjm8F3jSWmyqNuXRTD4T2tegIsA8Iam-NwDaM25Ohllri9RLInrgVy8w8Lhlwy45TPnUNfC2-dP4Du9Kf1xaF2Sc42I0x3wzHLVnvuQ2Nq5rZgW2tYaM10OhTB42xtdfqk7KIVMKXNudhiin2bCsLebZhU207El37"
                          />
                          <div>
                            <p className="text-sm font-bold text-on-surface">
                              Alexandra Vance
                            </p>
                            <p className="text-[11px] text-slate-400 font-medium">
                              Senior Product Strategist • London
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <span className="inline-block px-3 py-1 rounded-full bg-tertiary-container/20 text-tertiary text-xs font-bold">
                          98%
                        </span>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <p className="text-sm font-semibold text-on-surface">
                          842{" "}
                          <span className="text-[10px] text-slate-400">
                            / 1000
                          </span>
                        </p>
                      </td>
                      <td className="px-6 py-5">
                        <p className="text-xs font-bold text-slate-600">
                          12 Years
                        </p>
                        <p className="text-[10px] text-slate-400">
                          Ex-Vogue, Monocle
                        </p>
                      </td>
                      <td className="px-6 py-5">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-indigo-50 text-indigo-600 text-[10px] font-extrabold uppercase tracking-wider">
                          Shortlisted
                        </span>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <button className="material-symbols-outlined text-slate-300 hover:text-indigo-600 transition-colors">
                          more_vert
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/80 transition-colors group">
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-4">
                          <input
                            className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300"
                            type="checkbox"
                          />
                          <img
                            alt="Candidate 2"
                            className="w-10 h-10 rounded-xl object-cover"
                            data-alt="Portrait of a young man in creative attire, minimal studio background, high-end editorial lighting"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIX9ePihVpV9_-Jg3mkPH0tYm-ba3eQ-syD6FHH-Zw3MFHh1IGcHd4rA1rcqmk6tg0S7SQbvWHbXLT4S9Sn1dW8aJKRTs9CuPGLTOU_ScZiQvn-bbx6pQLiT3YkXDSBhG6ju95ykZzbE88Zd00WVngkt8kkorAVh11kNcS7NWu6bap3Ry71BDDpvQ-moaj3ohxI_HbCU9zTd6f5RcaTYr394H93XfiPRwB4QJGCMHrM9vrvBqEjX-OQjqmkCDPHD9ACm0XMkX8v2g9"
                          />
                          <div>
                            <p className="text-sm font-bold text-on-surface">
                              Julian Rossi
                            </p>
                            <p className="text-[11px] text-slate-400 font-medium">
                              Head of Design • Milan
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">
                          92%
                        </span>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <p className="text-sm font-semibold text-on-surface">
                          790{" "}
                          <span className="text-[10px] text-slate-400">
                            / 1000
                          </span>
                        </p>
                      </td>
                      <td className="px-6 py-5">
                        <p className="text-xs font-bold text-slate-600">
                          8 Years
                        </p>
                        <p className="text-[10px] text-slate-400">
                          Ex-Prada, Gucci
                        </p>
                      </td>
                      <td className="px-6 py-5">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-amber-50 text-amber-600 text-[10px] font-extrabold uppercase tracking-wider">
                          Interviewing
                        </span>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <button className="material-symbols-outlined text-slate-300 hover:text-indigo-600 transition-colors">
                          more_vert
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/80 transition-colors group">
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-4">
                          <input
                            className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300"
                            type="checkbox"
                          />
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                            ES
                          </div>
                          <div>
                            <p className="text-sm font-bold text-on-surface">
                              Eleanor Sterling
                            </p>
                            <p className="text-[11px] text-slate-400 font-medium">
                              Content Director • New York
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold">
                          88%
                        </span>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <p className="text-sm font-semibold text-on-surface">
                          755{" "}
                          <span className="text-[10px] text-slate-400">
                            / 1000
                          </span>
                        </p>
                      </td>
                      <td className="px-6 py-5">
                        <p className="text-xs font-bold text-slate-600">
                          15 Years
                        </p>
                        <p className="text-[10px] text-slate-400">
                          Ex-New York Times
                        </p>
                      </td>
                      <td className="px-6 py-5">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-500 text-[10px] font-extrabold uppercase tracking-wider">
                          New Applied
                        </span>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <button className="material-symbols-outlined text-slate-300 hover:text-indigo-600 transition-colors">
                          more_vert
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50/80 transition-colors group">
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-4">
                          <input
                            className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300"
                            type="checkbox"
                          />
                          <img
                            alt="Candidate 4"
                            className="w-10 h-10 rounded-xl object-cover"
                            data-alt="Modern professional woman in a bright office space, warm natural light, soft professional aesthetic"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOLOj3tauKZ-T51Wob93mzoJstUe1VDr9wEj5-qUfirnkzVvcZEwCm0yuwBIlA4aLmo4Xxvq3PyOfHZ5N4_aQ1SDCXelr2dbn8BVsxkWo72mBtUfTTGPuskVSOYM85xH4o64Ro-jov_3fl-IAV0p6PnhxcXClo-5B7TeAfH6_xGtqrdgJgRa7MG3oJO9_lyzeHcjF3Of69vnV4Qcf-mo0QsrURs2eIgJg0yPw19VZnBGzDpevxs4ds4_4DBB9n0i_LGwPmLRrWPv9Z"
                          />
                          <div>
                            <p className="text-sm font-bold text-on-surface">
                              Sienna Brooks
                            </p>
                            <p className="text-[11px] text-slate-400 font-medium">
                              UX Architect • Berlin
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-bold">
                          76%
                        </span>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <p className="text-sm font-semibold text-on-surface">
                          610{" "}
                          <span className="text-[10px] text-slate-400">
                            / 1000
                          </span>
                        </p>
                      </td>
                      <td className="px-6 py-5">
                        <p className="text-xs font-bold text-slate-600">
                          5 Years
                        </p>
                        <p className="text-[10px] text-slate-400">
                          Ex-Zalando, DeliveryHero
                        </p>
                      </td>
                      <td className="px-6 py-5">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-500 text-[10px] font-extrabold uppercase tracking-wider">
                          New Applied
                        </span>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <button className="material-symbols-outlined text-slate-300 hover:text-indigo-600 transition-colors">
                          more_vert
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-auto px-6 py-6 border-t border-outline-variant/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400 font-medium">
                    Rows per page:
                  </span>
                  <select className="text-xs border-none bg-transparent font-bold focus:ring-0 cursor-pointer">
                    <option>12</option>
                    <option>24</option>
                    <option>48</option>
                  </select>
                </div>
                <div className="flex items-center gap-4">
                  <button className="w-8 h-8 flex items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 transition-all">
                    <span className="material-symbols-outlined text-[20px]">
                      chevron_left
                    </span>
                  </button>
                  <div className="flex items-center gap-1">
                    <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-indigo-600 text-white text-xs font-bold">
                      1
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 text-xs font-bold">
                      2
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 text-xs font-bold">
                      3
                    </button>
                    <span className="text-slate-400 mx-1">...</span>
                    <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 text-xs font-bold">
                      4
                    </button>
                  </div>
                  <button className="w-8 h-8 flex items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 transition-all">
                    <span className="material-symbols-outlined text-[20px]">
                      chevron_right
                    </span>
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

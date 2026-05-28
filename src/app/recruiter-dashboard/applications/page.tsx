import React from "react";

const page = () => {
  return (
    <div className="bg-background text-on-surface min-h-screen">
      <aside className="h-screen w-64 fixed left-0 top-0 bg-slate-50 dark:bg-slate-900 border-r border-slate-200/50 dark:border-slate-800/50 flex flex-col h-full py-8 px-4 font-sans tracking-tight leading-relaxed z-50">
        <div className="mb-10 px-2">
          <h1 className="text-lg font-bold text-indigo-700 dark:text-indigo-300">
            The Curator
          </h1>
          <p className="text-xs text-slate-400 font-medium tracking-wide">
            Elite Talent Partners
          </p>
        </div>
        <nav className="flex-1 space-y-1">
          <a
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px]">
              dashboard
            </span>
            <span className="text-sm font-medium">Dashboard</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px]">
              add_circle
            </span>
            <span className="text-sm font-medium">Post Job</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-indigo-700 dark:text-indigo-400 font-semibold border-r-4 border-indigo-600 dark:border-indigo-400 bg-indigo-50/50 dark:bg-indigo-900/20 transition-all"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px]">work</span>
            <span className="text-sm font-medium">Manage Jobs</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px]">group</span>
            <span className="text-sm font-medium">Candidates</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px]">event</span>
            <span className="text-sm font-medium">Interviews</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px]">mail</span>
            <span className="text-sm font-medium">Messages</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px]">
              insights
            </span>
            <span className="text-sm font-medium">Analytics</span>
          </a>
        </nav>
        <div className="mt-auto pt-6 space-y-1">
          <a
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px]">
              business
            </span>
            <span className="text-sm font-medium">Company Profile</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px]">
              settings
            </span>
            <span className="text-sm font-medium">Settings</span>
          </a>
          <div className="mt-6 p-4 rounded-xl bg-indigo-600 text-white text-center shadow-lg shadow-indigo-200 cursor-pointer active:scale-95 transition-all">
            <span className="text-sm font-bold">Quick Post</span>
          </div>
        </div>
      </aside>
      <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md flex items-center justify-between px-8 z-40">
        <div className="flex items-center gap-6 flex-1">
          <div className="relative w-full max-w-md group">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
              search
            </span>
            <input
              className="w-full bg-surface-container-low border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-indigo-500/20 focus:bg-white transition-all outline-none"
              placeholder="Search open roles or candidate names..."
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button className="relative p-2 text-slate-500 hover:text-indigo-600 transition-colors">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
          </button>
          <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-all active:scale-95 shadow-md shadow-indigo-100">
            Post New Job
          </button>
          <div className="flex items-center gap-3 pl-4 border-l border-slate-100">
            <img
              className="w-8 h-8 rounded-full object-cover"
              data-alt="professional male recruiter in a crisp white shirt smiling in a bright modern office environment"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmK3zj1cAPELDF_c5fbAC7M046IsPBTX_52DvHG234YcKTpOIBdOAJFckGNDu--fSoyX7YcRmXYGsC5P34bX1OO5JThs0aIJ9nM_N-Lz7r08LyRxSgOANOnLU575IsdcaHduZCrMLLvxMc2RZwlyt9fb5VgYsMorcb0OXNLaReEjWu_MvvKqACGpvRAkvTqKIMOWUrV0GrGEnlZO4GioP-70uVoZF4ikcRhYR782vC4MrfB34KyDyjyGpQ0d8LRyIXoQw8eqEoWzip"
            />
            <div className="hidden lg:block">
              <p className="text-xs font-bold text-on-surface">Alex Mercer</p>
              <p className="text-[10px] text-slate-400">Executive Partner</p>
            </div>
          </div>
        </div>
      </header>
      <main className="ml-64 pt-24 pb-12 px-12 min-h-screen">
        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <nav className="flex items-center gap-2 text-xs text-slate-400 mb-2 uppercase tracking-widest font-semibold">
              <span>Recruitment</span>
              <span className="material-symbols-outlined text-[10px]">
                chevron_right
              </span>
              <span className="text-indigo-600">Active Roles</span>
            </nav>
            <h2 className="text-[2.5rem] font-bold tracking-tight text-on-surface leading-tight">
              Manage Jobs
            </h2>
            <p className="text-slate-500 mt-2 max-w-xl">
              Oversee your current talent pipelines across editorial, design,
              and executive departments.
            </p>
          </div>
          <div className="flex gap-3">
            <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100 flex items-center gap-3">
              <span className="material-symbols-outlined text-indigo-500">
                filter_list
              </span>
              <select className="text-sm font-medium text-slate-600 border-none focus:ring-0 cursor-pointer bg-transparent">
                <option>All Statuses</option>
                <option>Active Only</option>
                <option>Paused Only</option>
              </select>
            </div>
            <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100 flex items-center gap-3">
              <span className="material-symbols-outlined text-indigo-500">
                sort
              </span>
              <select className="text-sm font-medium text-slate-600 border-none focus:ring-0 cursor-pointer bg-transparent">
                <option>Sort by Date</option>
                <option>Sort by Applicants</option>
                <option>Sort by Priority</option>
              </select>
            </div>
          </div>
        </header>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <div className="group bg-surface-container-lowest rounded-[24px] p-8 transition-all hover:shadow-xl hover:shadow-indigo-500/5 border border-transparent hover:border-indigo-100/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-wider">
                Active
              </span>
            </div>
            <div className="flex flex-col h-full">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <span className="material-symbols-outlined text-3xl">
                    auto_stories
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-on-surface group-hover:text-indigo-600 transition-colors">
                    Senior Editorial Director
                  </h3>
                  <p className="text-sm text-slate-400 mt-0.5">
                    Posted 4 days ago • London (Hybrid)
                  </p>
                </div>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-4 mb-8">
                <div className="bg-surface-container-low rounded-2xl p-4">
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1">
                    Applicants
                  </p>
                  <div className="flex items-end gap-2">
                    <span className="text-2xl font-bold text-on-surface">
                      142
                    </span>
                    <span className="text-emerald-500 text-xs font-bold flex items-center mb-1">
                      <span className="material-symbols-outlined text-sm">
                        trending_up
                      </span>{" "}
                      12%
                    </span>
                  </div>
                </div>
                <div className="bg-surface-container-low rounded-2xl p-4">
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1">
                    Match Rate
                  </p>
                  <div className="flex items-end gap-2">
                    <span className="text-2xl font-bold text-on-surface">
                      84%
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-tertiary-container/20 text-tertiary text-[8px] font-black uppercase mb-1">
                      Elite
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
                <div className="flex gap-2">
                  <button
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:bg-slate-50 hover:text-indigo-600 transition-all"
                    title="Edit Job"
                  >
                    <span className="material-symbols-outlined text-xl">
                      edit
                    </span>
                  </button>
                  <button
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:bg-rose-50 hover:text-rose-500 transition-all"
                    title="Pause Recruitment"
                  >
                    <span className="material-symbols-outlined text-xl">
                      pause_circle
                    </span>
                  </button>
                </div>
                <a
                  className="flex items-center gap-2 text-indigo-600 text-sm font-bold hover:gap-3 transition-all group/link"
                  href="#"
                >
                  View Candidates
                  <span className="material-symbols-outlined text-lg">
                    arrow_right_alt
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="group bg-surface-container-lowest rounded-[24px] p-8 transition-all hover:shadow-xl hover:shadow-slate-500/5 border border-transparent hover:border-slate-200/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-wider">
                Paused
              </span>
            </div>
            <div className="flex flex-col h-full opacity-75 grayscale-[0.3] group-hover:opacity-100 group-hover:grayscale-0 transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400">
                  <span className="material-symbols-outlined text-3xl">
                    brush
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-on-surface">
                    Creative Design Lead
                  </h3>
                  <p className="text-sm text-slate-400 mt-0.5">
                    Posted 12 days ago • New York (Remote)
                  </p>
                </div>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-4 mb-8">
                <div className="bg-surface-container-low rounded-2xl p-4">
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1">
                    Applicants
                  </p>
                  <div className="flex items-end gap-2">
                    <span className="text-2xl font-bold text-on-surface">
                      56
                    </span>
                    <span className="text-slate-400 text-xs font-bold flex items-center mb-1">
                      <span className="material-symbols-outlined text-sm">
                        trending_flat
                      </span>{" "}
                      0%
                    </span>
                  </div>
                </div>
                <div className="bg-surface-container-low rounded-2xl p-4">
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1">
                    Status
                  </p>
                  <div className="flex items-end gap-2">
                    <span className="text-md font-bold text-on-surface mb-1">
                      On Hold
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
                <div className="flex gap-2">
                  <button className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:bg-slate-50 hover:text-indigo-600 transition-all">
                    <span className="material-symbols-outlined text-xl">
                      edit
                    </span>
                  </button>
                  <button
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-emerald-600 bg-emerald-50 hover:bg-emerald-100 transition-all"
                    title="Resume Recruitment"
                  >
                    <span className="material-symbols-outlined text-xl">
                      play_circle
                    </span>
                  </button>
                </div>
                <a
                  className="flex items-center gap-2 text-indigo-600 text-sm font-bold hover:gap-3 transition-all group/link"
                  href="#"
                >
                  View Candidates
                  <span className="material-symbols-outlined text-lg">
                    arrow_right_alt
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="group bg-surface-container-lowest rounded-[24px] p-8 transition-all hover:shadow-xl hover:shadow-indigo-500/5 border border-transparent hover:border-indigo-100/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-wider">
                Active
              </span>
            </div>
            <div className="flex flex-col h-full">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <span className="material-symbols-outlined text-3xl">
                    payments
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-on-surface group-hover:text-indigo-600 transition-colors">
                    VP of Digital Strategy
                  </h3>
                  <p className="text-sm text-slate-400 mt-0.5">
                    Posted 2 days ago • Global Remote
                  </p>
                </div>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-4 mb-8">
                <div className="bg-surface-container-low rounded-2xl p-4">
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1">
                    Applicants
                  </p>
                  <div className="flex items-end gap-2">
                    <span className="text-2xl font-bold text-on-surface">
                      218
                    </span>
                    <span className="text-emerald-500 text-xs font-bold flex items-center mb-1">
                      <span className="material-symbols-outlined text-sm">
                        trending_up
                      </span>{" "}
                      44%
                    </span>
                  </div>
                </div>
                <div className="bg-surface-container-low rounded-2xl p-4">
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1">
                    Priority
                  </p>
                  <div className="flex items-end gap-2">
                    <span className="text-2xl font-bold text-on-surface">
                      High
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-rose-50 text-rose-500 text-[8px] font-black uppercase mb-1">
                      Critical
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
                <div className="flex gap-2">
                  <button className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:bg-slate-50 hover:text-indigo-600 transition-all">
                    <span className="material-symbols-outlined text-xl">
                      edit
                    </span>
                  </button>
                  <button className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:bg-rose-50 hover:text-rose-500 transition-all">
                    <span className="material-symbols-outlined text-xl">
                      pause_circle
                    </span>
                  </button>
                </div>
                <a
                  className="flex items-center gap-2 text-indigo-600 text-sm font-bold hover:gap-3 transition-all group/link"
                  href="#"
                >
                  View Candidates
                  <span className="material-symbols-outlined text-lg">
                    arrow_right_alt
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-indigo-600 to-primary-container rounded-[24px] p-8 text-white flex flex-col justify-between overflow-hidden relative">
            <div className="absolute -right-12 -top-12 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <span className="material-symbols-outlined text-4xl mb-6">
                bolt
              </span>
              <h3 className="text-2xl font-bold mb-2">
                Need a faster pipeline?
              </h3>
              <p className="text-indigo-100 text-sm leading-relaxed max-w-xs">
                Our AI-assisted "Curator Pro" can filter 500+ candidates into a
                shortlist of 10 in under 3 minutes.
              </p>
            </div>
            <div className="relative z-10 flex items-center gap-4 mt-8">
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-xl text-sm font-bold hover:bg-indigo-50 transition-all active:scale-95 shadow-lg">
                Enable Auto-Curate
              </button>
              <button className="text-white/80 hover:text-white text-sm font-medium transition-colors">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-[calc(100%-16rem)] ml-64 flex justify-between items-center px-8 py-6 mt-auto border-t border-slate-100 dark:border-slate-800 bg-transparent">
        <p className="text-xs font-medium uppercase tracking-widest text-slate-400">
          © 2024 Editorial Executive Recruitment. All rights reserved.
        </p>
        <div className="flex gap-8">
          <a
            className="text-xs font-medium uppercase tracking-widest text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-300 opacity-80 hover:opacity-100 transition-all"
            href="#"
          >
            Legal
          </a>
          <a
            className="text-xs font-medium uppercase tracking-widest text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-300 opacity-80 hover:opacity-100 transition-all"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="text-xs font-medium uppercase tracking-widest text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-300 opacity-80 hover:opacity-100 transition-all"
            href="#"
          >
            Support
          </a>
          <a
            className="text-xs font-medium uppercase tracking-widest text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-300 opacity-80 hover:opacity-100 transition-all"
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

export default function Page() {
  return (
    <div className="bg-background text-on-surface flex min-h-screen">
      <aside className="h-screen w-64 fixed left-0 top-0 flex flex-col h-full py-8 px-4 bg-slate-50 dark:bg-slate-900 border-r border-slate-200/50 dark:border-slate-800/50 z-50">
        <div className="mb-10 px-2">
          <h1 className="text-lg font-bold text-indigo-700 dark:text-indigo-300 tracking-tight">
            The Curator
          </h1>
          <p className="text-xs text-slate-500 font-sans tracking-tight">
            Elite Talent Partners
          </p>
        </div>
        <nav className="flex-1 space-y-1">
          <a
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
            href="#"
          >
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm font-medium">Dashboard</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-indigo-700 dark:text-indigo-400 font-semibold border-r-4 border-indigo-600 dark:border-indigo-400 bg-indigo-50/50 dark:bg-indigo-900/20"
            href="#"
          >
            <span className="material-symbols-outlined">add_circle</span>
            <span className="text-sm">Post Job</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
            href="#"
          >
            <span className="material-symbols-outlined">work</span>
            <span className="text-sm font-medium">Manage Jobs</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
            href="#"
          >
            <span className="material-symbols-outlined">group</span>
            <span className="text-sm font-medium">Candidates</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
            href="#"
          >
            <span className="material-symbols-outlined">event</span>
            <span className="text-sm font-medium">Interviews</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
            href="#"
          >
            <span className="material-symbols-outlined">mail</span>
            <span className="text-sm font-medium">Messages</span>
          </a>
          <div className="pt-4 mt-4 border-t border-slate-200/50">
            <a
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
              href="#"
            >
              <span className="material-symbols-outlined">insights</span>
              <span className="text-sm font-medium">Analytics</span>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
              href="#"
            >
              <span className="material-symbols-outlined">business</span>
              <span className="text-sm font-medium">Company Profile</span>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
              href="#"
            >
              <span className="material-symbols-outlined">settings</span>
              <span className="text-sm font-medium">Settings</span>
            </a>
          </div>
        </nav>
        <div className="mt-auto px-2">
          <div className="flex items-center gap-3 p-2 rounded-xl bg-slate-100/50 dark:bg-slate-800/50">
            <img
              alt="Recruiter profile"
              className="w-10 h-10 rounded-lg object-cover"
              data-alt="Close-up headshot of a professional male recruiter in a dark blazer smiling confidently in a modern bright office setting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIurSoiji2wQRaW1AG-D52blt7AA655BY5AesKluUSKhZLZ9JKO9RKwvVGwwj3WyFvR76hdZbIppnlAXU_6lFrS3usDsrtRxbuD2R1PAT6RE3FH5UOcQ6oZ72nQrXVP8Je05dSOCl_AOAUQIscfV2kpPwyMMOMJsf-q4qmVHkHL9CUeRtMC1z9J8NZKGb4urKsfVjtbUjzecj4jm6kKacACxoLeOKMLaY2L-yBP69_shXlkPDkdSDlDBZyZMewBxm0BbYOIKLVAHmr"
            />
            <div className="overflow-hidden">
              <p className="text-sm font-semibold truncate text-on-surface">
                Julian Thorne
              </p>
              <p className="text-[10px] text-slate-500 uppercase tracking-wider">
                Senior Partner
              </p>
            </div>
          </div>
        </div>
      </aside>
      <main className="flex-1 ml-64 min-h-screen flex flex-col">
        <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 flex items-center justify-between px-8 z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm dark:shadow-none">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-full max-w-md group focus-within:ring-2 focus-within:ring-indigo-500/20 rounded-lg transition-all">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                search
              </span>
              <input
                className="w-full bg-slate-50 border-none rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-0 placeholder:text-slate-400"
                placeholder="Search talent, jobs, or analytics..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button className="relative text-slate-500 hover:text-indigo-600 transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full border-2 border-white"></span>
            </button>
            <div className="h-6 w-[1px] bg-slate-200"></div>
            <button className="bg-primary hover:bg-primary-container text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all scale-95 active:opacity-80">
              Post New Job
            </button>
          </div>
        </header>
        <div className="mt-16 p-10 flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex items-center justify-between relative px-2">
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-slate-200 -translate-y-1/2 -z-10"></div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-lg shadow-primary/20 ring-4 ring-white">
                  1
                </div>
                <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                  Details
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-200 text-slate-400 flex items-center justify-center font-bold">
                  2
                </div>
                <span className="text-xs font-medium text-slate-400 uppercase tracking-widest">
                  Requirements
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-200 text-slate-400 flex items-center justify-center font-bold">
                  3
                </div>
                <span className="text-xs font-medium text-slate-400 uppercase tracking-widest">
                  Compensation
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-200 text-slate-400 flex items-center justify-center font-bold">
                  4
                </div>
                <span className="text-xs font-medium text-slate-400 uppercase tracking-widest">
                  Settings
                </span>
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-8 space-y-8">
              <section className="bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-slate-100">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-xl font-bold tracking-tight text-on-surface">
                      Job Definition
                    </h2>
                    <p className="text-sm text-slate-500 mt-1">
                      Foundational details for the elite position.
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-tertiary-container/20 text-tertiary font-bold text-[10px] rounded-full uppercase tracking-widest">
                    Drafting Phase
                  </span>
                </div>
                <div className="space-y-6">
                  <div className="group">
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 transition-colors group-focus-within:text-primary">
                      Job Title
                    </label>
                    <input
                      className="w-full border-0 border-b border-slate-200 bg-transparent py-3 px-0 focus:ring-0 focus:border-primary text-lg font-medium placeholder:text-slate-300 transition-all"
                      placeholder="e.g. Senior Creative Director, EMEA"
                      type="text"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Experience Level
                      </label>
                      <select className="w-full border-0 border-b border-slate-200 bg-transparent py-3 px-0 focus:ring-0 focus:border-primary text-sm font-medium appearance-none">
                        <option>Senior Executive (10+ years)</option>
                        <option>Lead Manager (7-10 years)</option>
                        <option>Mid-Level Specialist (4-7 years)</option>
                        <option>Junior Professional (1-3 years)</option>
                      </select>
                    </div>
                    <div className="flex flex-col justify-end">
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Work Protocol
                      </label>
                      <div className="flex bg-slate-100 rounded-lg p-1 w-fit">
                        <button className="px-4 py-1.5 rounded-md text-xs font-bold bg-white shadow-sm text-primary transition-all">
                          Remote
                        </button>
                        <button className="px-4 py-1.5 rounded-md text-xs font-bold text-slate-500 hover:text-on-surface transition-all">
                          Onsite
                        </button>
                        <button className="px-4 py-1.5 rounded-md text-xs font-bold text-slate-500 hover:text-on-surface transition-all">
                          Hybrid
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Required Core Skills
                    </label>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-indigo-50 text-primary rounded-lg text-xs font-semibold flex items-center gap-2 border border-indigo-100">
                        Strategic Branding{" "}
                        <span className="material-symbols-outlined text-xs cursor-pointer">
                          close
                        </span>
                      </span>
                      <span className="px-3 py-1.5 bg-indigo-50 text-primary rounded-lg text-xs font-semibold flex items-center gap-2 border border-indigo-100">
                        Narrative Design{" "}
                        <span className="material-symbols-outlined text-xs cursor-pointer">
                          close
                        </span>
                      </span>
                      <span className="px-3 py-1.5 bg-indigo-50 text-primary rounded-lg text-xs font-semibold flex items-center gap-2 border border-indigo-100">
                        Executive Leadership{" "}
                        <span className="material-symbols-outlined text-xs cursor-pointer">
                          close
                        </span>
                      </span>
                      <button className="px-3 py-1.5 border border-dashed border-slate-300 text-slate-400 hover:border-primary hover:text-primary rounded-lg text-xs font-medium transition-all flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">
                          add
                        </span>{" "}
                        Add Skill
                      </button>
                    </div>
                  </div>
                </div>
              </section>
              <section className="bg-surface-container-lowest rounded-xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="p-4 bg-slate-50/50 border-b border-slate-100 flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-slate-200 transition-colors">
                      <span className="material-symbols-outlined text-sm">
                        format_bold
                      </span>
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-slate-200 transition-colors">
                      <span className="material-symbols-outlined text-sm">
                        format_italic
                      </span>
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-slate-200 transition-colors">
                      <span className="material-symbols-outlined text-sm">
                        format_list_bulleted
                      </span>
                    </button>
                  </div>
                  <div className="h-4 w-[1px] bg-slate-200"></div>
                  <div className="flex items-center gap-1">
                    <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-slate-200 transition-colors">
                      <span className="material-symbols-outlined text-sm">
                        link
                      </span>
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-slate-200 transition-colors">
                      <span className="material-symbols-outlined text-sm">
                        image
                      </span>
                    </button>
                  </div>
                  <div className="ml-auto flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>{" "}
                    Autosaved
                  </div>
                </div>
                <div className="p-8">
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                    Job Narrative &amp; Vision
                  </label>
                  <textarea
                    className="w-full border-none focus:ring-0 p-0 text-slate-700 leading-relaxed placeholder:text-slate-300 resize-none"
                    placeholder="Craft a compelling story about this role, the challenges they will face, and the legacy they will leave..."
                  ></textarea>
                </div>
              </section>
            </div>
            <div className="col-span-12 lg:col-span-4 space-y-6">
              <div className="bg-surface-container-low rounded-xl p-6 border border-slate-100">
                <h3 className="text-sm font-bold text-on-surface mb-4">
                  Elite Compensation
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">
                      Annual Salary Range (USD)
                    </label>
                    <div className="flex items-center gap-3">
                      <input
                        className="w-full bg-white border border-slate-200 rounded-lg py-2 px-3 text-sm font-semibold focus:ring-primary focus:border-primary"
                        placeholder="180k"
                        type="text"
                      />
                      <span className="text-slate-300">—</span>
                      <input
                        className="w-full bg-white border border-slate-200 rounded-lg py-2 px-3 text-sm font-semibold focus:ring-primary focus:border-primary"
                        placeholder="250k"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-white/50 rounded-lg border border-slate-200/50">
                    <span className="material-symbols-outlined text-tertiary">
                      workspace_premium
                    </span>
                    <div>
                      <p className="text-xs font-bold text-on-surface">
                        Equity Package
                      </p>
                      <p className="text-[10px] text-slate-500">
                        Enable for executive candidates
                      </p>
                    </div>
                    <input
                      className="ml-auto w-4 h-4 text-primary border-slate-300 rounded focus:ring-primary"
                      type="checkbox"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-indigo-900 rounded-xl p-6 text-white overflow-hidden relative group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                <h3 className="text-xs font-bold uppercase tracking-widest opacity-60 mb-4">
                  Public Preview
                </h3>
                <div className="space-y-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/10 backdrop-blur rounded-lg flex items-center justify-center text-xl">
                      ✨
                    </div>
                    <div>
                      <p className="text-sm font-bold truncate">
                        Senior Creative Director
                      </p>
                      <p className="text-[10px] opacity-70">
                        Editorial Executive • London, UK
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-2 py-0.5 bg-white/10 rounded text-[9px] font-bold uppercase">
                      $180k - $250k
                    </span>
                    <span className="px-2 py-0.5 bg-white/10 rounded text-[9px] font-bold uppercase">
                      Remote
                    </span>
                  </div>
                </div>
                <div className="mt-8 pt-4 border-t border-white/10">
                  <p className="text-[10px] opacity-60 italic">
                    “This role is critical to our 2025 expansion...”
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-100 flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                  <span className="material-symbols-outlined text-lg">
                    lightbulb
                  </span>
                </div>
                <div>
                  <p className="text-xs font-bold text-on-surface">
                    Curator Tip
                  </p>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Executive roles with clear salary ranges see a 40% higher
                    engagement from high-intent candidates.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-6xl mx-auto mt-12 flex items-center justify-between py-6 border-t border-slate-100">
            <button className="flex items-center gap-2 text-slate-400 hover:text-slate-600 transition-colors text-sm font-medium">
              <span className="material-symbols-outlined">arrow_back</span> Back
              to Workspace
            </button>
            <div className="flex items-center gap-4">
              <button className="px-6 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold text-sm hover:bg-slate-50 transition-all scale-95 active:scale-90">
                Save Draft
              </button>
              <button className="px-8 py-2.5 rounded-xl bg-gradient-to-r from-primary to-primary-container text-white font-bold text-sm shadow-lg shadow-primary/20 hover:shadow-xl transition-all scale-95 active:scale-90">
                Publish Job
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

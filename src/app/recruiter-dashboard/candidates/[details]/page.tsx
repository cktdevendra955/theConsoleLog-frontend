import React from "react";

const page = () => {
  return (
    <div className="bg-surface text-on-surface flex overflow-hidden h-screen">
      <aside className="h-screen w-64 fixed left-0 top-0 flex flex-col h-full py-8 px-4 bg-slate-50 dark:bg-slate-900 border-r border-slate-200/50 dark:border-slate-800/50 font-sans tracking-tight leading-relaxed z-50">
        <div className="mb-10 px-2">
          <h1 className="text-lg font-bold text-indigo-700 dark:text-indigo-300">
            The Curator
          </h1>
          <p className="text-xs text-slate-400 uppercase tracking-widest">
            Elite Talent Partners
          </p>
        </div>
        <nav className="space-y-1 flex-1">
          <a
            className="flex items-center gap-3 px-3 py-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200 rounded-lg group"
            href="#"
          >
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm font-medium">Dashboard</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200 rounded-lg group"
            href="#"
          >
            <span className="material-symbols-outlined">add_circle</span>
            <span className="text-sm font-medium">Post Job</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200 rounded-lg group"
            href="#"
          >
            <span className="material-symbols-outlined">work</span>
            <span className="text-sm font-medium">Manage Jobs</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2 text-indigo-700 dark:text-indigo-400 font-semibold border-r-4 border-indigo-600 dark:border-indigo-400 bg-indigo-50/50 dark:bg-indigo-900/20 transition-all rounded-l-lg group"
            href="#"
          >
            <span className="material-symbols-outlined">group</span>
            <span className="text-sm font-medium">Candidates</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200 rounded-lg group"
            href="#"
          >
            <span className="material-symbols-outlined">event</span>
            <span className="text-sm font-medium">Interviews</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200 rounded-lg group"
            href="#"
          >
            <span className="material-symbols-outlined">mail</span>
            <span className="text-sm font-medium">Messages</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200 rounded-lg group"
            href="#"
          >
            <span className="material-symbols-outlined">insights</span>
            <span className="text-sm font-medium">Analytics</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200 rounded-lg group"
            href="#"
          >
            <span className="material-symbols-outlined">business</span>
            <span className="text-sm font-medium">Company Profile</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200 rounded-lg group"
            href="#"
          >
            <span className="material-symbols-outlined">settings</span>
            <span className="text-sm font-medium">Settings</span>
          </a>
        </nav>
        <div className="mt-auto px-2">
          <button className="w-full py-3 bg-indigo-600 text-white rounded-xl text-sm font-semibold shadow-sm hover:bg-indigo-700 transition-all active:scale-95">
            Quick Post
          </button>
        </div>
      </aside>
      <div className="flex-1 ml-64 flex flex-col relative overflow-hidden bg-background">
        <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 flex items-center justify-between px-8 z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm dark:shadow-none">
          <div className="flex items-center gap-6 flex-1">
            <div className="relative w-96 group">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors">
                search
              </span>
              <input
                className="w-full bg-surface-container-low border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-indigo-500/20 transition-all outline-none"
                placeholder="Search across candidates..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button className="relative p-2 text-slate-500 hover:text-indigo-600 transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full ring-2 ring-white"></span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-slate-100">
              <div className="text-right">
                <p className="text-xs font-bold text-on-surface">Elena Vance</p>
                <p className="text-[10px] text-slate-400 tracking-wider uppercase">
                  Senior Recruiter
                </p>
              </div>
              <img
                className="w-10 h-10 rounded-full border-2 border-primary-fixed object-cover"
                data-alt="professional portrait of a confident female executive with glasses and a soft office background"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGNBLed5oDqK4IPjoIR09srwD-up7WuwL3_sJO_uD4ojN3DAJtYhNCMMDHsH1iPg8T0ZM64hUlTxX--fhUod3kDUYXdvfuIzwTjQbq7XhmYrm099I6ZyG0BUKg9twFGhzAhAZWhxsNpekRHE29NYlyPjQ74JfEtRQN8C2GyJ1GPU9SZLRrQsG1WedlQdLpltOXL8uCz63pvg3O76xFeWMBTVE6ZO1x_vfHXGtHS0ln8Yff1Wi0vKZdMby2_KGDNSFAFArVMAEavs93"
              />
            </div>
          </div>
        </header>
        <main className="mt-16 flex-1 overflow-hidden flex flex-row">
          <section className="w-7/12 h-full overflow-y-auto bg-surface-container-low p-8 border-r border-slate-200/40">
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="bg-surface-container-lowest p-10 rounded-xl shadow-sm space-y-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <h2 className="text-3xl font-bold tracking-tight text-on-surface">
                      Julian S. Reed
                    </h2>
                    <p className="text-indigo-600 font-medium">
                      Senior Editorial Strategy Director
                    </p>
                  </div>
                  <img
                    className="w-24 h-24 rounded-xl object-cover shadow-sm grayscale hover:grayscale-0 transition-all duration-500"
                    data-alt="portrait of a mature professional male in a navy blazer against a neutral studio background"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_IerzKx9MbEZ-yba8bDjuDJCAX8WpU69XAtKQ5NyoDtYuCWcMGD9Tiy8Yoocb1ry3488NQ4aJ3l_o7sANDeuA4I0LcuUm6uOG_H8zSiDg0SAEJrrH7TDiX-Ggw3FjL7QYD-3KbEoi_QJw02qOWJDIRNoKlh4T-GJBuEpxw54cOtd2WFjioOTYnUUFgRDTMvswAV0OYdLKmQbTrsFGh-bgogIn3du1GZVnjgk-ATyFM0328cQ9cyUXy1BDSmkbBISxhLb2AE65jKQm"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 border-b border-slate-100 pb-2">
                    Professional Summary
                  </h3>
                  <p className="text-body-md leading-relaxed text-slate-600">
                    Award-winning editorial leader with 12+ years of experience
                    steering high-impact content strategies for global media
                    houses. Proven track record in digital transformation,
                    audience growth through precision data analytics, and
                    mentoring cross-functional creative teams.
                  </p>
                </div>
                <div className="space-y-6">
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 border-b border-slate-100 pb-2">
                    Experience
                  </h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-1 bg-indigo-500/20 rounded-full"></div>
                      <div>
                        <h4 className="font-bold text-on-surface">
                          Global Managing Editor
                        </h4>
                        <p className="text-sm text-indigo-600">
                          The Atlantic • 2019 — Present
                        </p>
                        <ul className="mt-2 text-sm text-slate-600 list-disc list-inside space-y-1">
                          <li>
                            Orchestrated 40% growth in digital subscriptions via
                            content-first roadmap.
                          </li>
                          <li>
                            Managed an annual editorial budget of $5.2M across 4
                            global bureaus.
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-1 bg-slate-200 rounded-full"></div>
                      <div>
                        <h4 className="font-bold text-on-surface">
                          Lead Features Strategist
                        </h4>
                        <p className="text-sm text-indigo-600">
                          Condé Nast • 2014 — 2019
                        </p>
                        <p className="mt-2 text-sm text-slate-600">
                          Led the digital pivot for flagship titles,
                          implementing SEO-driven long-form content models.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-10 rounded-xl shadow-sm min-h-[400px] flex items-center justify-center border-2 border-dashed border-slate-100">
                <div className="text-center space-y-3">
                  <span className="material-symbols-outlined text-4xl text-slate-200">
                    description
                  </span>
                  <p className="text-sm text-slate-400">
                    Scroll for Portfolio Attachments
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="w-5/12 h-full overflow-y-auto bg-surface p-8 space-y-8 pb-32">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 p-6 bg-indigo-600 rounded-xl text-white relative overflow-hidden">
                <div className="relative z-10">
                  <p className="text-xs uppercase tracking-widest opacity-80 mb-1">
                    ATS Match Score
                  </p>
                  <h3 className="text-4xl font-extrabold tracking-tighter">
                    94%
                  </h3>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="px-2 py-1 bg-white/20 rounded text-[10px] font-bold">
                      EXCEPTIONAL MATCH
                    </span>
                    <span className="material-symbols-outlined text-sm">
                      trending_up
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined absolute right-[-20px] bottom-[-20px] text-9xl opacity-10">
                  verified
                </span>
              </div>
              <div className="p-5 bg-white rounded-xl border border-slate-100 shadow-sm">
                <p className="text-xs text-slate-400 font-medium mb-3">
                  Skill Radar
                </p>
                <div className="flex items-center justify-center py-4">
                  <svg className="w-24 h-24">
                    <polygon fill="none"></polygon>
                    <polygon
                      fill="#3525cd"
                      fill-opacity="0.15"
                      points="50,20 80,45 70,80 30,80 20,45"
                      stroke="#3525cd"
                      stroke-width="2"
                    ></polygon>
                  </svg>
                </div>
                <div className="flex justify-between text-[10px] uppercase font-bold text-indigo-600">
                  <span>Strategy</span>
                  <span>9.2</span>
                </div>
              </div>
              <div className="p-5 bg-white rounded-xl border border-slate-100 shadow-sm flex flex-col justify-between">
                <p className="text-xs text-slate-400 font-medium">
                  Interview Availability
                </p>
                <div className="space-y-1">
                  <p className="text-sm font-bold">Within 48h</p>
                  <p className="text-[10px] text-emerald-600">
                    Immediate Openness
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-tertiary-container/10 border border-tertiary-container/30 rounded-xl space-y-3">
              <div className="flex items-center gap-2 text-tertiary">
                <span className="material-symbols-outlined text-lg">stars</span>
                <h4 className="text-sm font-bold tracking-tight">
                  Executive Match Analysis
                </h4>
              </div>
              <p className="text-body-md text-on-tertiary-container leading-relaxed">
                Julian’s background at{" "}
                <span className="font-bold">The Atlantic</span> aligns perfectly
                with the Editorial Executive requirement for digital
                transformation. His portfolio showcases a sophisticated grasp of
                "Elite Curatorial" content models which our client seeks.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                  Recruiter Notes
                </h4>
                <span className="text-[10px] text-indigo-600 font-bold bg-indigo-50 px-2 py-1 rounded">
                  3 PREVIOUS LOGS
                </span>
              </div>
              <div className="relative">
                <textarea
                  className="w-full min-h-[100px] p-4 bg-white border border-slate-200 rounded-xl text-sm focus:ring-4 focus:ring-indigo-500/5 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-300"
                  placeholder="Add private recruiter note..."
                ></textarea>
                <button className="absolute bottom-3 right-3 text-indigo-600 hover:bg-indigo-50 p-2 rounded-lg transition-colors">
                  <span className="material-symbols-outlined text-lg">
                    send
                  </span>
                </button>
              </div>
              <div className="space-y-6 relative before:absolute before:left-3 before:top-4 before:bottom-4 before:w-px before:bg-slate-100">
                <div className="relative pl-8">
                  <div className="absolute left-1 top-1 w-4 h-4 rounded-full bg-indigo-100 border-2 border-white"></div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-slate-400">
                      TODAY • 10:45 AM
                    </p>
                    <p className="text-sm text-on-surface">
                      Screening call completed. Excellent culture fit, but
                      Salary expectation is at the top of range (+$15k).
                    </p>
                    <p className="text-[10px] text-indigo-600 font-medium">
                      — Elena Vance
                    </p>
                  </div>
                </div>
                <div className="relative pl-8">
                  <div className="absolute left-1 top-1 w-4 h-4 rounded-full bg-slate-100 border-2 border-white"></div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-bold text-slate-400">
                      OCT 12, 2024
                    </p>
                    <p className="text-sm text-on-surface italic">
                      Application received via executive referral program.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="fixed bottom-0 right-0 w-[calc(100%-16rem)] h-20 bg-white/90 backdrop-blur-md border-t border-slate-100 z-40 flex items-center justify-between px-8">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-medium text-sm transition-colors">
              <span className="material-symbols-outlined text-lg">
                download
              </span>
              PDF Resume
            </button>
            <button className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-medium text-sm transition-colors">
              <span className="material-symbols-outlined text-lg">share</span>
              Share with Client
            </button>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-6 py-2.5 rounded-xl border border-error/20 text-error hover:bg-error-container/20 font-bold text-sm transition-all active:scale-95">
              Reject
            </button>
            <button className="px-6 py-2.5 rounded-xl border border-slate-200 text-on-surface hover:bg-slate-50 font-bold text-sm transition-all active:scale-95">
              Shortlist
            </button>
            <button className="px-8 py-2.5 bg-indigo-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all active:scale-95 flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">
                calendar_today
              </span>
              Schedule Interview
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default page;

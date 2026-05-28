import React from "react";
import {
  BriefcaseBusiness,
  FileText,
  TrendingUp,
  BadgeCheck,
  Stars,
  Send,
  Download,
  Share2,
  CalendarDays,
} from "lucide-react";

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
          <section className="h-full w-full overflow-y-auto border-r border-slate-200/40 bg-surface-container-low p-4 sm:p-6 lg:w-7/12 lg:p-8">
            <div className="mx-auto max-w-3xl space-y-6 lg:space-y-8">
              {/* Profile Card */}
              <div className="space-y-6 rounded-xl bg-surface-container-lowest p-5 shadow-sm sm:p-8 lg:p-10">
                {/* Top */}
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-1">
                    <h2 className="text-2xl font-bold tracking-tight text-on-surface sm:text-3xl">
                      Julian S. Reed
                    </h2>

                    <p className="font-medium text-indigo-600">
                      Senior Editorial Strategy Director
                    </p>
                  </div>

                  <img
                    className="h-24 w-24 rounded-xl object-cover shadow-sm grayscale transition-all duration-500 hover:grayscale-0"
                    data-alt="portrait of a mature professional male in a navy blazer against a neutral studio background"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_IerzKx9MbEZ-yba8bDjuDJCAX8WpU69XAtKQ5NyoDtYuCWcMGD9Tiy8Yoocb1ry3488NQ4aJ3l_o7sANDeuA4I0LcuUm6uOG_H8zSiDg0SAEJrrH7TDiX-Ggw3FjL7QYD-3KbEoi_QJw02qOWJDIRNoKlh4T-GJBuEpxw54cOtd2WFjioOTYnUUFgRDTMvswAV0OYdLKmQbTrsFGh-bgogIn3du1GZVnjgk-ATyFM0328cQ9cyUXy1BDSmkbBISxhLb2AE65jKQm"
                  />
                </div>

                {/* Summary */}
                <div className="space-y-4">
                  <h3 className="flex items-center gap-2 border-b border-slate-100 pb-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                    <FileText size={14} />
                    Professional Summary
                  </h3>

                  <p className="leading-relaxed text-slate-600">
                    Award-winning editorial leader with 12+ years of experience
                    steering high-impact content strategies for global media
                    houses. Proven track record in digital transformation,
                    audience growth through precision data analytics, and
                    mentoring cross-functional creative teams.
                  </p>
                </div>

                {/* Experience */}
                <div className="space-y-6">
                  <h3 className="flex items-center gap-2 border-b border-slate-100 pb-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                    <BriefcaseBusiness size={14} />
                    Experience
                  </h3>

                  <div className="space-y-6">
                    {/* Experience 1 */}
                    <div className="flex gap-4">
                      <div className="w-1 rounded-full bg-indigo-500/20"></div>

                      <div>
                        <h4 className="font-bold text-on-surface">
                          Global Managing Editor
                        </h4>

                        <p className="text-sm text-indigo-600">
                          The Atlantic • 2019 — Present
                        </p>

                        <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-slate-600">
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

                    {/* Experience 2 */}
                    <div className="flex gap-4">
                      <div className="w-1 rounded-full bg-slate-200"></div>

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

              {/* Attachment Box */}
              <div className="flex min-h-[300px] items-center justify-center rounded-xl border-2 border-dashed border-slate-100 bg-surface-container-lowest p-6 shadow-sm sm:min-h-[400px]">
                <div className="space-y-3 text-center">
                  <FileText size={42} className="mx-auto text-slate-200" />

                  <p className="text-sm text-slate-400">
                    Scroll for Portfolio Attachments
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="h-full w-full overflow-y-auto bg-surface p-4 pb-32 sm:p-6 lg:w-5/12 lg:p-8">
            <div className="space-y-8">
              {/* Top Cards */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* ATS Score */}
                <div className="relative col-span-1 overflow-hidden rounded-xl bg-indigo-600 p-6 text-white sm:col-span-2">
                  <div className="relative z-10">
                    <p className="mb-1 text-xs uppercase tracking-widest opacity-80">
                      ATS Match Score
                    </p>

                    <h3 className="text-4xl font-extrabold tracking-tighter">
                      94%
                    </h3>

                    <div className="mt-4 flex items-center gap-2">
                      <span className="rounded bg-white/20 px-2 py-1 text-[10px] font-bold">
                        EXCEPTIONAL MATCH
                      </span>

                      <TrendingUp size={16} />
                    </div>
                  </div>

                  <BadgeCheck
                    size={120}
                    className="absolute -bottom-5 -right-5 opacity-10"
                  />
                </div>

                {/* Skill Radar */}
                <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
                  <p className="mb-3 text-xs font-medium text-slate-400">
                    Skill Radar
                  </p>

                  <div className="flex items-center justify-center py-4">
                    <svg className="h-24 w-24">
                      <polygon fill="none"></polygon>

                      <polygon
                        fill="#3525cd"
                        fillOpacity="0.15"
                        points="50,20 80,45 70,80 30,80 20,45"
                        stroke="#3525cd"
                        strokeWidth="2"
                      ></polygon>
                    </svg>
                  </div>

                  <div className="flex justify-between text-[10px] font-bold uppercase text-indigo-600">
                    <span>Strategy</span>
                    <span>9.2</span>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex flex-col justify-between rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
                  <p className="text-xs font-medium text-slate-400">
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

              {/* Analysis */}
              <div className="space-y-3 rounded-xl border border-tertiary-container/30 bg-tertiary-container/10 p-6">
                <div className="flex items-center gap-2 text-tertiary">
                  <Stars size={18} />

                  <h4 className="text-sm font-bold tracking-tight">
                    Executive Match Analysis
                  </h4>
                </div>

                <p className="leading-relaxed text-on-tertiary-container">
                  Julian’s background at{" "}
                  <span className="font-bold">The Atlantic</span> aligns
                  perfectly with the Editorial Executive requirement for digital
                  transformation. His portfolio showcases a sophisticated grasp
                  of "Elite Curatorial" content models which our client seeks.
                </p>
              </div>

              {/* Notes */}
              <div className="space-y-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                    Recruiter Notes
                  </h4>

                  <span className="w-fit rounded bg-indigo-50 px-2 py-1 text-[10px] font-bold text-indigo-600">
                    3 PREVIOUS LOGS
                  </span>
                </div>

                {/* Textarea */}
                <div className="relative">
                  <textarea
                    className="min-h-[100px] w-full rounded-xl border border-slate-200 bg-white p-4 text-sm outline-none transition-all placeholder:text-slate-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/5"
                    placeholder="Add private recruiter note..."
                  ></textarea>

                  <button className="absolute bottom-3 right-3 rounded-lg p-2 text-indigo-600 transition-colors hover:bg-indigo-50">
                    <Send size={18} />
                  </button>
                </div>

                {/* Timeline */}
                <div className="relative space-y-6 before:absolute before:bottom-4 before:left-3 before:top-4 before:w-px before:bg-slate-100">
                  {/* Log 1 */}
                  <div className="relative pl-8">
                    <div className="absolute left-1 top-1 h-4 w-4 rounded-full border-2 border-white bg-indigo-100"></div>

                    <div className="space-y-1">
                      <p className="text-[10px] font-bold text-slate-400">
                        TODAY • 10:45 AM
                      </p>

                      <p className="text-sm text-on-surface">
                        Screening call completed. Excellent culture fit, but
                        Salary expectation is at the top of range (+$15k).
                      </p>

                      <p className="text-[10px] font-medium text-indigo-600">
                        — Elena Vance
                      </p>
                    </div>
                  </div>

                  {/* Log 2 */}
                  <div className="relative pl-8">
                    <div className="absolute left-1 top-1 h-4 w-4 rounded-full border-2 border-white bg-slate-100"></div>

                    <div className="space-y-1">
                      <p className="text-[10px] font-bold text-slate-400">
                        OCT 12, 2024
                      </p>

                      <p className="text-sm italic text-on-surface">
                        Application received via executive referral program.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="fixed bottom-0 right-0 z-40 flex min-h-[80px] w-full flex-col gap-4 border-t border-slate-100 bg-white/90 px-4 py-4 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:w-[calc(100%-16rem)] lg:px-8">
          {/* Left Actions */}
          <div className="flex flex-wrap items-center gap-4">
            <button className="flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900">
              <Download size={18} />
              PDF Resume
            </button>

            <button className="flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900">
              <Share2 size={18} />
              Share with Client
            </button>
          </div>

          {/* Right Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <button className="rounded-xl border border-error/20 px-5 py-2.5 text-sm font-bold text-error transition-all active:scale-95 hover:bg-error-container/20 sm:px-6">
              Reject
            </button>

            <button className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-bold text-on-surface transition-all active:scale-95 hover:bg-slate-50 sm:px-6">
              Shortlist
            </button>

            <button className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition-all active:scale-95 hover:bg-indigo-700 sm:px-8">
              <CalendarDays size={18} />
              Schedule Interview
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default page;

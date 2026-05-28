import React from "react";

const page = () => {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary-fixed-dim selection:text-on-primary-fixed">
      <aside className="h-screen w-64 fixed left-0 top-0 bg-slate-50 border-r border-slate-200/50 flex flex-col py-8 px-4 z-50">
        <div className="mb-10 px-2">
          <h1 className="text-lg font-bold text-indigo-700 tracking-tight">
            The Curator
          </h1>
          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-semibold">
            Elite Talent Partners
          </p>
        </div>
        <nav className="flex-1 space-y-1">
          <a
            className="flex items-center gap-3 px-3 py-2.5 text-slate-500 hover:bg-slate-100 transition-colors duration-200 rounded-lg group"
            href="#"
          >
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm font-medium">Dashboard</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2.5 text-slate-500 hover:bg-slate-100 transition-colors duration-200 rounded-lg group"
            href="#"
          >
            <span className="material-symbols-outlined">add_circle</span>
            <span className="text-sm font-medium">Post Job</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2.5 text-slate-500 hover:bg-slate-100 transition-colors duration-200 rounded-lg group"
            href="#"
          >
            <span className="material-symbols-outlined">work</span>
            <span className="text-sm font-medium">Manage Jobs</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2.5 text-slate-500 hover:bg-slate-100 transition-colors duration-200 rounded-lg group"
            href="#"
          >
            <span className="material-symbols-outlined">group</span>
            <span className="text-sm font-medium">Candidates</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2.5 text-indigo-700 font-semibold border-r-4 border-indigo-600 bg-indigo-50/50 rounded-l-lg group"
            href="#"
          >
            <span className="material-symbols-outlined">event</span>
            <span className="text-sm font-medium">Interviews</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2.5 text-slate-500 hover:bg-slate-100 transition-colors duration-200 rounded-lg group"
            href="#"
          >
            <span className="material-symbols-outlined">mail</span>
            <span className="text-sm font-medium">Messages</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2.5 text-slate-500 hover:bg-slate-100 transition-colors duration-200 rounded-lg group"
            href="#"
          >
            <span className="material-symbols-outlined">insights</span>
            <span className="text-sm font-medium">Analytics</span>
          </a>
        </nav>
        <div className="mt-auto px-2 space-y-4">
          <button className="w-full py-3 bg-primary text-white rounded-xl text-sm font-semibold shadow-lg shadow-primary/20 scale-95 active:opacity-80 transition-all">
            Quick Post
          </button>
          <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
            <img
              alt="Recruiter profile"
              className="w-8 h-8 rounded-full object-cover"
              data-alt="professional portrait of a corporate executive with a friendly expression and neutral office background"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1lM5jmjBKBz4Rt2NuetNUDJD542wmkvcLXSUhP1rxjUXoeoHGmpnTuE4ByW9UJRnVpOJ_l-OyucIh1ix0qfaWmZYuZSAAYYMmOg3H13DgiXPODr3tG-VtxQX2OxMiV38zPT0PZv9GDV94UtleYfy7TIqhu7N4o8kZjfX_ODLtR_W4eVq3xp55evqoWih0szcuvYGrpWjqrs-d2HlnFMlV6UFePbfALQacU6wGCNcdNkTO2VmJyTSQvG0_rDdQ527Jfi6cltUAvxMa"
            />
            <div>
              <p className="text-xs font-bold text-on-surface">Alex Sterling</p>
              <p className="text-[10px] text-slate-400">Lead Recruiter</p>
            </div>
          </div>
        </div>
      </aside>
      <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 bg-white/80 backdrop-blur-md flex items-center justify-between px-8 z-40">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative w-full max-w-md group">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl group-focus-within:text-primary transition-colors">
              search
            </span>
            <input
              className="w-full bg-surface-container-low border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all"
              placeholder="Search candidates, roles, or dates..."
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-slate-500 hover:text-primary cursor-pointer relative">
              notifications
              <span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full border-2 border-white"></span>
            </span>
          </div>
          <button className="bg-primary-container text-on-primary text-xs font-bold px-5 py-2.5 rounded-full shadow-md hover:opacity-90 transition-opacity">
            Post New Job
          </button>
        </div>
      </header>
      <main className="ml-64 mt-16 p-8 min-h-screen bg-background">
        <div className="max-w-[1400px] mx-auto">
          <header className="mb-10">
            <h2 className="text-3xl font-bold tracking-tight text-on-surface mb-2">
              Scheduling HQ
            </h2>
            <p className="text-slate-500 font-medium max-w-2xl">
              Manage your executive editorial talent pipeline. Meticulously
              organized, perfectly timed.
            </p>
          </header>
          <div className="grid grid-cols-12 gap-8 items-start">
            <div className="col-span-12 lg:col-span-9 bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-slate-100">
              <div className="flex items-center justify-between p-6 border-b border-slate-50">
                <div className="flex items-center gap-4">
                  <h3 className="text-lg font-bold">
                    Week of Oct 14 - 20, 2024
                  </h3>
                  <div className="flex border border-slate-200 rounded-lg overflow-hidden">
                    <button className="p-2 hover:bg-slate-50 transition-colors">
                      <span className="material-symbols-outlined text-sm">
                        chevron_left
                      </span>
                    </button>
                    <button className="p-2 border-l border-slate-200 hover:bg-slate-50 transition-colors">
                      <span className="material-symbols-outlined text-sm">
                        chevron_right
                      </span>
                    </button>
                  </div>
                  <button className="text-xs font-bold text-primary uppercase tracking-widest px-3 py-1 bg-primary-fixed rounded-md">
                    Today
                  </button>
                </div>
                <div className="flex items-center bg-surface-container-low p-1 rounded-lg">
                  <button className="px-4 py-1.5 text-xs font-bold bg-white shadow-sm rounded-md text-primary">
                    Week
                  </button>
                  <button className="px-4 py-1.5 text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors">
                    Month
                  </button>
                </div>
              </div>
              <div className="calendar-grid bg-white">
                <div className="border-b border-r border-slate-50 p-2 bg-slate-50/30"></div>
                <div className="border-b border-r border-slate-50 p-4 text-center">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                    Mon
                  </p>
                  <p className="text-xl font-bold">14</p>
                </div>
                <div className="border-b border-r border-slate-50 p-4 text-center bg-primary/5">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-primary">
                    Tue
                  </p>
                  <p className="text-xl font-bold text-primary">15</p>
                </div>
                <div className="border-b border-r border-slate-50 p-4 text-center">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                    Wed
                  </p>
                  <p className="text-xl font-bold">16</p>
                </div>
                <div className="border-b border-r border-slate-50 p-4 text-center">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                    Thu
                  </p>
                  <p className="text-xl font-bold">17</p>
                </div>
                <div className="border-b border-slate-50 p-4 text-center">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                    Fri
                  </p>
                  <p className="text-xl font-bold">18</p>
                </div>
                <div className="border-r border-b border-slate-50 p-2 text-right pr-4 text-[10px] font-bold text-slate-400 uppercase">
                  09:00 AM
                </div>
                <div className="border-r border-b border-slate-50 relative"></div>
                <div className="border-r border-b border-slate-50 relative bg-primary/5"></div>
                <div className="border-r border-b border-slate-50 relative"></div>
                <div className="border-r border-b border-slate-50 relative"></div>
                <div className="border-b border-slate-50 relative"></div>
                <div className="border-r border-b border-slate-50 p-2 text-right pr-4 text-[10px] font-bold text-slate-400 uppercase">
                  10:00 AM
                </div>
                <div className="border-r border-b border-slate-50 relative p-1">
                  <div className="bg-primary text-white p-2 rounded-lg text-[10px] shadow-lg shadow-primary/10">
                    <p className="font-bold mb-1">Marcus Thorne</p>
                    <div className="flex items-center gap-1 opacity-80">
                      <span className="material-symbols-outlined text-[12px]">
                        video_call
                      </span>
                      <span>Google Meet</span>
                    </div>
                  </div>
                </div>
                <div className="border-r border-b border-slate-50 relative bg-primary/5"></div>
                <div className="border-r border-b border-slate-50 relative p-1">
                  <div className="bg-tertiary text-white p-2 rounded-lg text-[10px] shadow-lg shadow-tertiary/10">
                    <p className="font-bold mb-1">Sophia Chen</p>
                    <div className="flex items-center gap-1 opacity-80">
                      <span className="material-symbols-outlined text-[12px]">
                        apartment
                      </span>
                      <span>In-Person</span>
                    </div>
                  </div>
                </div>
                <div className="border-r border-b border-slate-50 relative"></div>
                <div className="border-b border-slate-50 relative"></div>
                <div className="border-r border-b border-slate-50 p-2 text-right pr-4 text-[10px] font-bold text-slate-400 uppercase">
                  11:00 AM
                </div>
                <div className="border-r border-b border-slate-50 relative"></div>
                <div className="border-r border-b border-slate-50 relative bg-primary/5 p-1">
                  <div className="bg-slate-800 text-white p-2 rounded-lg text-[10px] shadow-lg">
                    <p className="font-bold mb-1">Elena Rodriguez</p>
                    <div className="flex items-center gap-1 opacity-80">
                      <span className="material-symbols-outlined text-[12px]">
                        call
                      </span>
                      <span>Phone Call</span>
                    </div>
                  </div>
                </div>
                <div className="border-r border-b border-slate-50 relative"></div>
                <div className="border-r border-b border-slate-50 relative"></div>
                <div className="border-b border-slate-50 relative"></div>
                <div className="border-r border-b border-slate-50 p-2 text-right pr-4 text-[10px] font-bold text-slate-400 uppercase">
                  12:00 PM
                </div>
                <div className="border-r border-b border-slate-50 relative bg-slate-50/50"></div>
                <div className="border-r border-b border-slate-50 relative bg-primary/5"></div>
                <div className="border-r border-b border-slate-50 relative bg-slate-50/50"></div>
                <div className="border-r border-b border-slate-50 relative bg-slate-50/50"></div>
                <div className="border-b border-slate-50 relative bg-slate-50/50"></div>
                <div className="border-r border-b border-slate-50 p-2 text-right pr-4 text-[10px] font-bold text-slate-400 uppercase">
                  01:00 PM
                </div>
                <div className="border-r border-b border-slate-50 relative"></div>
                <div className="border-r border-b border-slate-50 relative bg-primary/5"></div>
                <div className="border-r border-b border-slate-50 relative">
                  <div className="border-2 border-primary/40 text-primary p-2 rounded-lg text-[10px] bg-primary/5 border-dashed">
                    <p className="font-bold mb-1">David Kim</p>
                    <div className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[12px]">
                        schedule
                      </span>
                      <span className="font-bold">Pending Accept</span>
                    </div>
                  </div>
                </div>
                <div className="border-r border-b border-slate-50 relative"></div>
                <div className="border-b border-slate-50 relative"></div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-3 space-y-8">
              <section className="bg-surface-container-low p-6 rounded-xl border border-slate-200/50">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500">
                    Pending
                  </h3>
                  <span className="bg-white px-2 py-0.5 rounded text-[10px] font-bold border border-slate-200">
                    04
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-xl shadow-sm group hover:ring-2 ring-primary/10 transition-all cursor-pointer">
                    <div className="flex items-center gap-3 mb-3">
                      <img
                        alt="Candidate"
                        className="w-10 h-10 rounded-lg object-cover"
                        data-alt="professional woman of color smiling in corporate attire"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUPkiGErMv5dapAdenvGVKXDWs3FPOztkCLTehwxIkJ_-bQaGFpXSorxYim06Co5CazWgEwV-l3vsp1HPpmRIUbAf1Zih3MICzNqIAAXE8Zm0htZqMdk8gRohRKYc-LOAYS9gGDGb7N4S5NiiCBU7239gtt4obJFkRU2V6qQkeSWLXFUzdbo5c7aoHEZD2f-ttn3O-q_C6iqe_xMO17ZfQvHkGtwSv_ysz8nI4_znzG9UBRFj6VD8yCiTAuxiF4ee1WKAUdTkYmcC_"
                      />
                      <div>
                        <p className="text-sm font-bold">Sarah Jenkins</p>
                        <p className="text-[10px] text-slate-400 font-medium">
                          Chief Editor Candidate
                        </p>
                      </div>
                    </div>
                    <button className="w-full py-2 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg transition-transform active:scale-95">
                      Schedule Now
                    </button>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm group hover:ring-2 ring-primary/10 transition-all cursor-pointer">
                    <div className="flex items-center gap-3 mb-3">
                      <img
                        alt="Candidate"
                        className="w-10 h-10 rounded-lg object-cover"
                        data-alt="executive man in smart casual wear sitting in a modern office"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuClwg-AeX3kRLja3bO-ZLUA0OeGy5-V-TlIdgT6eDPycp80s1t-C9rsKYa6P_7GwbYiKzm9yYV-dAeabtqXj-xJhDnWMbpBMnv9nw6HPYYo-la80BbntNxKoMbMCBellZpHpwFRybnz8v_1d8gzBYAx8UH1uU-69icCE8hgblgu-dPfdkZLf4Jd8FUDDb2cKI_VEQ9lu-uALTQe5vqt0aOr7XhfGBeLH0OJh6PopFFXMLvXUKewqc3Q0w3p1XnzBjBBdP0__o2QHXfi"
                      />
                      <div>
                        <p className="text-sm font-bold">Oliver Vance</p>
                        <p className="text-[10px] text-slate-400 font-medium">
                          Content Strategy Lead
                        </p>
                      </div>
                    </div>
                    <button className="w-full py-2 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg transition-transform active:scale-95">
                      Schedule Now
                    </button>
                  </div>
                </div>
              </section>
              <section className="bg-white p-6 rounded-xl border border-slate-100">
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">
                  Status Tracker
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                      <span className="text-xs font-semibold text-slate-600">
                        Accepted
                      </span>
                    </div>
                    <span className="text-xs font-bold">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-xs font-semibold text-slate-600">
                        Sent
                      </span>
                    </div>
                    <span className="text-xs font-bold">08</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                      <span className="text-xs font-semibold text-slate-600">
                        Rescheduled
                      </span>
                    </div>
                    <span className="text-xs font-bold">03</span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
          <div className="p-8">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">
                  Schedule Interview
                </h2>
                <p className="text-sm text-slate-500 mt-1 font-medium">
                  Final Round: Executive Content Lead
                </p>
              </div>
              <button className="text-slate-400 hover:text-slate-600">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <form className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <img
                  alt="Candidate"
                  className="w-12 h-12 rounded-lg object-cover"
                  data-alt="professional woman of color portrait"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGIUFt6HOKJ8TB4Ii5Kqo3vu87t19qhaPQYslgTeO8zshzxviKLXfQb2d-TaPopKdxxSDt1F7LveS2ag4M1ImPsHzoCAv0E-Pk4ZU4ODNE530IExHCK_vh8Z01GpqWT43AGIvq8GSL-t_qT6e6N3fS_WLlD54Xxq2zEVbs-ctdh5GhSsNJryKEVuyNbplV3VDiGfHZPPtL2S04UuejYHmldgVm1_6pWmtRN4MwxJP2Wzk-ccND9kZi-rLBb18XhI0I3oLMmljlhvNz"
                />
                <div>
                  <p className="font-bold">Sarah Jenkins</p>
                  <p className="text-xs text-slate-500 font-medium">
                    jenkins.s@editorial.com
                  </p>
                </div>
                <div className="ml-auto bg-tertiary-container/30 px-3 py-1 rounded-full">
                  <span className="text-[10px] font-bold text-tertiary uppercase tracking-widest">
                    Elite Match
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 px-1">
                    Date
                  </label>
                  <input
                    className="w-full bg-white border border-slate-200 rounded-xl py-3 px-4 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    type="date"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 px-1">
                    Time
                  </label>
                  <input
                    className="w-full bg-white border border-slate-200 rounded-xl py-3 px-4 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    type="time"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 px-1">
                  Platform
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl border-2 border-primary bg-primary/5 text-primary"
                    type="button"
                  >
                    <span className="material-symbols-outlined">
                      video_call
                    </span>
                    <span className="text-[10px] font-bold">Meet</span>
                  </button>
                  <button
                    className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-500"
                    type="button"
                  >
                    <span className="material-symbols-outlined">videocam</span>
                    <span className="text-[10px] font-bold">Zoom</span>
                  </button>
                  <button
                    className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-500"
                    type="button"
                  >
                    <span className="material-symbols-outlined">apartment</span>
                    <span className="text-[10px] font-bold">On-site</span>
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 px-1">
                  Interviewer
                </label>
                <select className="w-full bg-white border border-slate-200 rounded-xl py-3 px-4 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary appearance-none transition-all">
                  <option>Eleanor Rigby (VP Content)</option>
                  <option>Julian Black (Creative Director)</option>
                  <option>Alex Sterling (Lead Recruiter)</option>
                </select>
              </div>
              <div className="pt-4 flex items-center justify-end gap-4">
                <button
                  className="px-6 py-3 text-sm font-bold text-slate-500 hover:text-slate-800 transition-colors"
                  type="button"
                >
                  Cancel
                </button>
                <button
                  className="px-10 py-3 bg-primary text-white rounded-xl text-sm font-bold shadow-xl shadow-primary/20 hover:opacity-90 transition-opacity"
                  type="submit"
                >
                  Send Invitation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <footer className="w-full py-6 mt-auto border-t border-slate-100 flex justify-between items-center px-8 w-[calc(100%-16rem)] ml-64 bg-transparent">
        <p className="text-xs font-medium uppercase tracking-widest text-slate-400">
          © 2024 Editorial Executive Recruitment. All rights reserved.
        </p>
        <div className="flex gap-8">
          <a
            className="text-xs font-medium uppercase tracking-widest text-slate-400 hover:text-indigo-500 transition-opacity"
            href="#"
          >
            Legal
          </a>
          <a
            className="text-xs font-medium uppercase tracking-widest text-slate-400 hover:text-indigo-500 transition-opacity"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="text-xs font-medium uppercase tracking-widest text-slate-400 hover:text-indigo-500 transition-opacity"
            href="#"
          >
            Support
          </a>
          <a
            className="text-xs font-medium uppercase tracking-widest text-slate-400 hover:text-indigo-500 transition-opacity"
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

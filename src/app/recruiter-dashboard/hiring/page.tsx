import React from "react";

const page = () => {
  return (
    <div className="bg-background text-on-surface min-h-screen flex overflow-hidden">
      <aside className="h-screen w-64 fixed left-0 top-0 bg-slate-50 border-r border-slate-200/50 flex flex-col py-8 px-4 z-50">
        <div className="mb-10 px-2">
          <h1 className="text-lg font-bold text-indigo-700 tracking-tight">
            The Curator
          </h1>
          <p className="text-xs font-sans tracking-tight leading-relaxed text-slate-500">
            Elite Talent Partners
          </p>
        </div>
        <nav className="flex-1 space-y-1">
          <a
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors duration-200 group"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px]">
              dashboard
            </span>
            <span className="text-sm font-medium">Dashboard</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors duration-200 group"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px]">
              add_circle
            </span>
            <span className="text-sm font-medium">Post Job</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors duration-200 group"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px]">work</span>
            <span className="text-sm font-medium">Manage Jobs</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors duration-200 group"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px]">group</span>
            <span className="text-sm font-medium">Candidates</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors duration-200 group"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px]">event</span>
            <span className="text-sm font-medium">Interviews</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors duration-200 group"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px]">mail</span>
            <span className="text-sm font-medium">Messages</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-indigo-700 font-semibold border-r-4 border-indigo-600 bg-indigo-50/50 transition-colors duration-200"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px]">
              insights
            </span>
            <span className="text-sm font-medium">Analytics</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors duration-200 group"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px]">
              business
            </span>
            <span className="text-sm font-medium">Company Profile</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors duration-200 group"
            href="#"
          >
            <span className="material-symbols-outlined text-[20px]">
              settings
            </span>
            <span className="text-sm font-medium">Settings</span>
          </a>
        </nav>
        <div className="mt-auto pt-6 px-2">
          <button className="w-full py-3 px-4 bg-indigo-600 text-white rounded-xl text-sm font-semibold shadow-sm hover:opacity-90 active:scale-95 transition-all">
            Quick Post
          </button>
          <div className="mt-8 flex items-center gap-3 border-t border-slate-200/50 pt-6">
            <img
              alt="User profile switcher"
              className="w-10 h-10 rounded-full object-cover"
              data-alt="Close-up portrait of a professional male recruiter in a sharp navy blazer, soft natural lighting in a modern office"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZe_sFnUWIAoRhiHxd4VdY5AzRZDaoLvs0JqsJqg1TOwf300BoaXldimmjp-rL4OWOmEFgOB7IE0sQihS4NRChHiIo2T9Bc_ku3dnkC-5cEnrBEx0zIZpQC79ZE4AQmzIOGo0NA7o7sgsr5z-EzyGlGsmp8Qzw1a2PWI4LsMlLtK3V-_hCrNeVoDt9ZWGtQrZJnJDwOHKwxYdBagYT1RiVCgEax8E2zjosx2Nvr6d7ylWASIYcSrLGKfPAhqIn0aoNDmAbEFcGjVPq"
            />
            <div>
              <p className="text-xs font-bold text-on-surface">Alex Mercer</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest">
                Lead Recruiter
              </p>
            </div>
          </div>
        </div>
      </aside>
      <main className="flex-1 ml-64 overflow-y-auto h-screen bg-background relative flex flex-col">
        <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 flex items-center justify-between px-8 z-40 bg-white/80 backdrop-blur-md">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-96 flex items-center">
              <span className="material-symbols-outlined absolute left-3 text-slate-400 text-lg">
                search
              </span>
              <input
                className="w-full bg-slate-100 border-none rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-indigo-500/20 placeholder:text-slate-400"
                placeholder="Search analytics or reports..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button className="relative text-slate-500 hover:text-indigo-600 transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-indigo-600 rounded-full border-2 border-white"></span>
            </button>
            <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">add</span>
              Post New Job
            </button>
          </div>
        </header>
        <section className="mt-16 p-8 flex-1">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-tertiary uppercase mb-2 block">
                Enterprise Intelligence
              </span>
              <h2 className="text-4xl font-bold text-on-surface tracking-tight leading-none">
                Hiring Analytics
              </h2>
              <p className="text-slate-500 mt-3 max-w-lg text-sm font-body leading-relaxed">
                Precision tracking of your recruitment ecosystem. Leverage
                data-driven insights to optimize department performance and
                talent acquisition velocity.
              </p>
            </div>
            <div className="flex gap-3">
              <button className="px-5 py-2.5 rounded-lg border border-outline-variant/30 text-xs font-semibold text-on-surface hover:bg-surface-container-low transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">
                  download
                </span>
                Export CSV
              </button>
              <button className="px-5 py-2.5 rounded-lg bg-indigo-600 text-white text-xs font-semibold shadow-sm hover:shadow-indigo-500/20 transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">
                  picture_as_pdf
                </span>
                Report PDF
              </button>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-6 mb-12">
            <div className="col-span-8 bg-surface-container-lowest rounded-xl p-6 border border-slate-100/50 shadow-sm">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-on-surface">
                    Hiring Success Rate
                  </h3>
                  <p className="text-xs text-slate-400">
                    Quarterly retention vs. performance metrics
                  </p>
                </div>
                <select className="text-xs font-medium border-none bg-slate-50 rounded-lg py-1 px-3 focus:ring-0">
                  <option>Last 12 Months</option>
                  <option>Q3 2024</option>
                </select>
              </div>
              <div className="h-64 relative flex items-end justify-between px-2 gap-4">
                <div className="absolute inset-0 flex flex-col justify-between">
                  <div className="w-full border-t border-slate-50 h-px"></div>
                  <div className="w-full border-t border-slate-50 h-px"></div>
                  <div className="w-full border-t border-slate-50 h-px"></div>
                  <div className="w-full border-t border-slate-50 h-px"></div>
                  <div className="w-full border-t border-slate-50 h-px"></div>
                </div>
                {/* <svg className="absolute inset-0 w-full h-full" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0,35 Q10,32 20,25 T40,28 T60,15 T80,10 T100,5" fill="none" stroke="#3525cd" stroke-width="2" vector-effect="non-scaling-stroke"></path>
<path d="M0,35 Q10,32 20,25 T40,28 T60,15 T80,10 T100,5 L100,40 L0,40 Z" fill="url(#grad1)" opacity="0.1"></path>
<defs>
<lineargradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style="stop-color:#3525cd;stop-opacity:1"></stop>
<stop offset="100%" style="stop-color:#3525cd;stop-opacity:0"></stop>
</lineargradient>
</defs>
</svg> */}

                <div className="z-10 flex w-full justify-between mt-auto pt-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <span>Jan</span>
                  <span>Mar</span>
                  <span>May</span>
                  <span>Jul</span>
                  <span>Sep</span>
                  <span>Nov</span>
                </div>
              </div>
            </div>
            <div className="col-span-4 bg-surface-container-lowest rounded-xl p-6 border border-slate-100/50 shadow-sm flex flex-col">
              <h3 className="text-lg font-semibold tracking-tight text-on-surface mb-6">
                Conversion Funnel
              </h3>
              <div className="flex-1 flex flex-col gap-2 justify-center">
                <div className="group relative">
                  <div className="bg-indigo-600 h-10 w-full rounded-lg opacity-100 flex items-center justify-between px-4 transition-all hover:scale-[1.02]">
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                      Applications
                    </span>
                    <span className="text-white font-bold text-sm">2,482</span>
                  </div>
                </div>
                <div className="group relative px-4">
                  <div className="bg-indigo-500 h-10 w-full rounded-lg opacity-85 flex items-center justify-between px-4 transition-all hover:scale-[1.02]">
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                      Screening
                    </span>
                    <span className="text-white font-bold text-sm">840</span>
                  </div>
                </div>
                <div className="group relative px-8">
                  <div className="bg-indigo-400 h-10 w-full rounded-lg opacity-70 flex items-center justify-between px-4 transition-all hover:scale-[1.02]">
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                      Interview
                    </span>
                    <span className="text-white font-bold text-sm">112</span>
                  </div>
                </div>
                <div className="group relative px-12">
                  <div className="bg-tertiary-container h-10 w-full rounded-lg flex items-center justify-between px-4 transition-all hover:scale-[1.02]">
                    <span className="text-[10px] font-bold text-on-tertiary-container uppercase tracking-widest">
                      Offers
                    </span>
                    <span className="text-on-tertiary-container font-bold text-sm">
                      48
                    </span>
                  </div>
                </div>
                <div className="group relative px-16">
                  <div className="bg-tertiary h-10 w-full rounded-lg flex items-center justify-between px-4 transition-all hover:scale-[1.02]">
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">
                      Hired
                    </span>
                    <span className="text-white font-bold text-sm">42</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-6 bg-surface-container-lowest rounded-xl p-6 border border-slate-100/50 shadow-sm">
              <h3 className="text-lg font-semibold tracking-tight text-on-surface mb-6">
                Application Volume
              </h3>
              <div className="flex items-end justify-between h-48 gap-3 px-2">
                <div className="flex-1 bg-slate-100 rounded-t-lg relative group transition-all hover:bg-indigo-100">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    120
                  </div>
                </div>
                <div className="flex-1 bg-slate-100 rounded-t-lg relative group transition-all hover:bg-indigo-100">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    190
                  </div>
                </div>
                <div className="flex-1 bg-indigo-600 rounded-t-lg relative group transition-all hover:opacity-90">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    280
                  </div>
                </div>
                <div className="flex-1 bg-slate-100 rounded-t-lg relative group transition-all hover:bg-indigo-100">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    160
                  </div>
                </div>
                <div className="flex-1 bg-slate-100 rounded-t-lg relative group transition-all hover:bg-indigo-100">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    220
                  </div>
                </div>
                <div className="flex-1 bg-slate-100 rounded-t-lg relative group transition-all hover:bg-indigo-100"></div>
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  130
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
            </div>
          </div>
          <div className="col-span-6 bg-surface-container-lowest rounded-xl p-6 border border-slate-100/50 shadow-sm flex items-center gap-12">
            <div className="w-40 h-40 rounded-full border-[12px] border-slate-50 flex items-center justify-center relative">
              <div className="absolute inset-0 rounded-full border-[12px] border-indigo-600 border-t-transparent border-l-transparent transform rotate-45"></div>
              <div className="absolute inset-0 rounded-full border-[12px] border-tertiary-container border-t-transparent border-r-transparent border-b-transparent transform -rotate-12"></div>
              <div className="text-center">
                <span className="block text-2xl font-bold">12</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                  Sources
                </span>
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <h3 className="text-lg font-semibold tracking-tight text-on-surface">
                Hiring Sources
              </h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-indigo-600"></div>
                    <span className="text-xs font-medium text-slate-600">
                      Direct Referrals
                    </span>
                  </div>
                  <span className="text-xs font-bold">45%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-tertiary-container"></div>
                    <span className="text-xs font-medium text-slate-600">
                      LinkedIn Talent
                    </span>
                  </div>
                  <span className="text-xs font-bold">30%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                    <span className="text-xs font-medium text-slate-600">
                      Executive Search
                    </span>
                  </div>
                  <span className="text-xs font-bold">25%</span>
                </div>
              </div>
            </div>
          </div>
          {/* d */}
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden border border-slate-100/50 shadow-sm">
            <div className="p-6 border-b border-slate-50 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-on-surface">
                  Time to Hire Velocity
                </h3>
                <p className="text-xs text-slate-400">
                  Efficiency metrics categorized by functional departments
                </p>
              </div>
              <button className="text-xs font-bold text-indigo-600 uppercase tracking-widest hover:underline">
                View All Departments
              </button>
            </div>
            <table className="w-full text-left">
              <thead className="bg-slate-50/50">
                <tr>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Department
                  </th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Active Roles
                  </th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Avg. Time to Hire
                  </th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Trend
                  </th>
                  <th className="px-6 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">
                    Efficiency
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                <tr className="hover:bg-slate-50/30 transition-colors">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                        <span className="material-symbols-outlined text-lg">
                          terminal
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-on-surface">
                        Engineering
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm text-slate-600">
                    12 Positions
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-sm font-bold text-on-surface">
                      32 Days
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-1 text-emerald-600">
                      <span className="material-symbols-outlined text-sm">
                        trending_down
                      </span>
                      <span className="text-[10px] font-bold">-4%</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase">
                      Optimal
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/30 transition-colors">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-tertiary-container/10 text-tertiary flex items-center justify-center">
                        <span className="material-symbols-outlined text-lg">
                          palette
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-on-surface">
                        Design &amp; Creative
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm text-slate-600">
                    4 Positions
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-sm font-bold text-on-surface">
                      24 Days
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-1 text-emerald-600">
                      <span className="material-symbols-outlined text-sm">
                        trending_down
                      </span>
                      <span className="text-[10px] font-bold">-12%</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <span className="px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant text-[10px] font-bold uppercase">
                      Elite
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/30 transition-colors">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center">
                        <span className="material-symbols-outlined text-lg">
                          payments
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-on-surface">
                        Sales &amp; Marketing
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm text-slate-600">
                    18 Positions
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-sm font-bold text-on-surface">
                      45 Days
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-1 text-rose-600">
                      <span className="material-symbols-outlined text-sm">
                        trending_up
                      </span>
                      <span className="text-[10px] font-bold">+8%</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold uppercase">
                      Warning
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <footer className="w-full py-6 mt-auto flex justify-between items-center px-8 border-t border-slate-100">
          <p className="text-xs font-medium uppercase tracking-widest text-slate-400">
            © 2024 Editorial Executive Recruitment. All rights reserved.
          </p>
          <div className="flex gap-8">
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

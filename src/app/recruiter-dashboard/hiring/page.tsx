import React from "react";
import {
  Briefcase,
  Download,
  FileText,
  TrendingUp,
  Users,
  CalendarDays,
  ChevronLeft,
  BarChart3,
  PieChart, ArrowDown,
  ArrowUp,
  Code2,
  Palette,
  BriefcaseBusiness,
  ChevronRight,
} from "lucide-react";

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
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
  
  {/* Left Content */}
  <div>
    
    <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-tertiary">
      Enterprise Intelligence
    </span>

    <h2 className="text-3xl font-bold leading-none tracking-tight text-on-surface sm:text-4xl">
      Hiring Analytics
    </h2>

    <p className="mt-3 max-w-lg text-sm leading-relaxed text-slate-500 font-body">
      Precision tracking of your recruitment ecosystem. Leverage
      data-driven insights to optimize department performance and
      talent acquisition velocity.
    </p>
  </div>

  {/* Right Buttons */}
  <div className="flex flex-wrap gap-3">
    
    <button className="flex items-center gap-2 rounded-lg border border-outline-variant/30 px-5 py-2.5 text-xs font-semibold text-on-surface transition-colors hover:bg-surface-container-low">
      
      <Download size={18} />

      Export CSV
    </button>

    <button className="flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-all hover:shadow-indigo-500/20">
      
      <FileText size={18} />

      Report PDF
    </button>
  </div>
</div>
          <div className="mb-12 grid grid-cols-1 gap-6 xl:grid-cols-12">
  
  {/* Hiring Success Rate */}
  <div className="rounded-xl border border-slate-100/50 bg-surface-container-lowest p-4 shadow-sm sm:p-6 xl:col-span-8">
    
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      
      <div>
        <h3 className="text-lg font-semibold tracking-tight text-on-surface">
          Hiring Success Rate
        </h3>

        <p className="text-xs text-slate-400">
          Quarterly retention vs. performance metrics
        </p>
      </div>

      <select className="rounded-lg border-none bg-slate-50 px-3 py-1 text-xs font-medium focus:ring-0">
        <option>Last 12 Months</option>
        <option>Q3 2024</option>
      </select>
    </div>

    <div className="relative flex h-64 items-end justify-between gap-4 px-2">
      
      {/* Grid Lines */}
      <div className="absolute inset-0 flex flex-col justify-between">
        <div className="h-px w-full border-t border-slate-50"></div>
        <div className="h-px w-full border-t border-slate-50"></div>
        <div className="h-px w-full border-t border-slate-50"></div>
        <div className="h-px w-full border-t border-slate-50"></div>
        <div className="h-px w-full border-t border-slate-50"></div>
      </div>

      {/* Bottom Labels */}
      <div className="z-10 mt-auto flex w-full justify-between pt-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
        <span>Jan</span>
        <span>Mar</span>
        <span>May</span>
        <span>Jul</span>
        <span>Sep</span>
        <span>Nov</span>
      </div>
    </div>
  </div>

  {/* Conversion Funnel */}
  <div className="flex flex-col rounded-xl border border-slate-100/50 bg-surface-container-lowest p-4 shadow-sm sm:p-6 xl:col-span-4">
    
    <h3 className="mb-6 text-lg font-semibold tracking-tight text-on-surface">
      Conversion Funnel
    </h3>

    <div className="flex flex-1 flex-col justify-center gap-2">
      
      <div className="group relative">
        <div className="flex h-10 w-full items-center justify-between rounded-lg bg-indigo-600 px-4 opacity-100 transition-all hover:scale-[1.02]">
          <span className="text-[10px] font-bold uppercase tracking-widest text-white">
            Applications
          </span>

          <span className="text-sm font-bold text-white">
            2,482
          </span>
        </div>
      </div>

      <div className="group relative px-4">
        <div className="flex h-10 w-full items-center justify-between rounded-lg bg-indigo-500 px-4 opacity-85 transition-all hover:scale-[1.02]">
          <span className="text-[10px] font-bold uppercase tracking-widest text-white">
            Screening
          </span>

          <span className="text-sm font-bold text-white">
            840
          </span>
        </div>
      </div>

      <div className="group relative px-8">
        <div className="flex h-10 w-full items-center justify-between rounded-lg bg-indigo-400 px-4 opacity-70 transition-all hover:scale-[1.02]">
          <span className="text-[10px] font-bold uppercase tracking-widest text-white">
            Interview
          </span>

          <span className="text-sm font-bold text-white">
            112
          </span>
        </div>
      </div>

      <div className="group relative px-12">
        <div className="flex h-10 w-full items-center justify-between rounded-lg bg-tertiary-container px-4 transition-all hover:scale-[1.02]">
          <span className="text-[10px] font-bold uppercase tracking-widest text-on-tertiary-container">
            Offers
          </span>

          <span className="text-sm font-bold text-on-tertiary-container">
            48
          </span>
        </div>
      </div>

      <div className="group relative px-16">
        <div className="flex h-10 w-full items-center justify-between rounded-lg bg-tertiary px-4 transition-all hover:scale-[1.02]">
          <span className="text-[10px] font-bold uppercase tracking-widest text-white">
            Hired
          </span>

          <span className="text-sm font-bold text-white">
            42
          </span>
        </div>
      </div>
    </div>
  </div>

  {/* Application Volume */}
  <div className="rounded-xl border border-slate-100/50 bg-surface-container-lowest p-4 shadow-sm sm:p-6 xl:col-span-6">
    
    <h3 className="mb-6 text-lg font-semibold tracking-tight text-on-surface">
      Application Volume
    </h3>

    <div className="relative">
      
      <div className="flex h-48 items-end justify-between gap-3 px-2">
        
        <div className="group relative flex-1 rounded-t-lg bg-slate-100 transition-all hover:bg-indigo-100">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 transition-opacity group-hover:opacity-100">
            120
          </div>
        </div>

        <div className="group relative flex-1 rounded-t-lg bg-slate-100 transition-all hover:bg-indigo-100">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 transition-opacity group-hover:opacity-100">
            190
          </div>
        </div>

        <div className="group relative flex-1 rounded-t-lg bg-indigo-600 transition-all hover:opacity-90">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 transition-opacity group-hover:opacity-100">
            280
          </div>
        </div>

        <div className="group relative flex-1 rounded-t-lg bg-slate-100 transition-all hover:bg-indigo-100">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 transition-opacity group-hover:opacity-100">
            160
          </div>
        </div>

        <div className="group relative flex-1 rounded-t-lg bg-slate-100 transition-all hover:bg-indigo-100">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 transition-opacity group-hover:opacity-100">
            220
          </div>
        </div>

        <div className="group relative flex-1 rounded-t-lg bg-slate-100 transition-all hover:bg-indigo-100">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 transition-opacity group-hover:opacity-100">
            130
          </div>
        </div>
      </div>

      {/* Days */}
      <div className="mt-4 flex justify-between text-[10px] font-bold uppercase tracking-tighter text-slate-400">
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
      </div>
    </div>
  </div>
</div>
          <div className="col-span-6 bg-surface-container-lowest rounded-xl p-6 border border-slate-100/50 shadow-sm flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
  
  <div className="relative flex items-center justify-center">
    <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full border-[12px] border-slate-50 flex items-center justify-center relative">
      
      <div className="absolute inset-0 rounded-full border-[12px] border-indigo-600 border-t-transparent border-l-transparent rotate-45"></div>

      <div className="absolute inset-0 rounded-full border-[12px] border-emerald-400 border-t-transparent border-r-transparent border-b-transparent -rotate-12"></div>

      <div className="text-center">
        <span className="block text-2xl font-bold text-on-surface">
          12
        </span>

        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
          Sources
        </span>
      </div>
    </div>

    <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-lg">
      <PieChart size={18} />
    </div>
  </div>

  <div className="flex-1 w-full space-y-5">
    
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
        <BarChart3 size={20} />
      </div>

      <div>
        <h3 className="text-lg font-semibold tracking-tight text-on-surface">
          Hiring Sources
        </h3>

        <p className="text-xs text-slate-400">
          Recruitment channel performance
        </p>
      </div>
    </div>

    <div className="space-y-3">
      
      <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-indigo-600"></div>

          <div className="flex items-center gap-2">
            <Users size={14} className="text-slate-500" />

            <span className="text-xs font-medium text-slate-600">
              Direct Referrals
            </span>
          </div>
        </div>

        <span className="text-xs font-bold text-on-surface">
          45%
        </span>
      </div>

      <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-400"></div>

          <div className="flex items-center gap-2">
            <Briefcase size={14} className="text-slate-500" />

            <span className="text-xs font-medium text-slate-600">
              LinkedIn Talent
            </span>
          </div>
        </div>

        <span className="text-xs font-bold text-on-surface">
          30%
        </span>
      </div>

      <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-slate-300"></div>

          <div className="flex items-center gap-2">
            <TrendingUp size={14} className="text-slate-500" />

            <span className="text-xs font-medium text-slate-600">
              Executive Search
            </span>
          </div>
        </div>

        <span className="text-xs font-bold text-on-surface">
          25%
        </span>
      </div>
    </div>
  </div>
</div>
          {/* d */}

<div className="bg-surface-container-lowest rounded-xl overflow-hidden border border-slate-100/50 shadow-sm">
  
  <div className="p-6 border-b border-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
    
    <div>
      <h3 className="text-lg font-semibold tracking-tight text-on-surface">
        Time to Hire Velocity
      </h3>

      <p className="text-xs text-slate-400">
        Efficiency metrics categorized by functional departments
      </p>
    </div>

    <button className="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 uppercase tracking-widest hover:underline">
      View All Departments
      <ChevronRight size={14} />
    </button>
  </div>

  <div className="overflow-x-auto">
    <table className="w-full text-left min-w-[700px]">
      
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
                <Code2 size={18} />
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
              <ArrowDown size={16} />
              <span className="text-[10px] font-bold">
                -4%
              </span>
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
              
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Palette size={18} />
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
              <ArrowDown size={16} />
              <span className="text-[10px] font-bold">
                -12%
              </span>
            </div>
          </td>

          <td className="px-6 py-5 text-right">
            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase">
              Elite
            </span>
          </td>
        </tr>

        <tr className="hover:bg-slate-50/30 transition-colors">
          
          <td className="px-6 py-5">
            <div className="flex items-center gap-3">
              
              <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center">
                <BriefcaseBusiness size={18} />
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
              <ArrowUp size={16} />
              <span className="text-[10px] font-bold">
                +8%
              </span>
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

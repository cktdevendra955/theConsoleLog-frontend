"use client";

import {
  LayoutDashboard,
  CirclePlus,
  BriefcaseBusiness,
  Users,
  CalendarDays,
  Mail,
  BarChart3,
  Building2,
  Settings,
  Plus,
  Search,
  Bell,
  Menu,
  ChevronRight,
  Filter,
  ArrowUpDown,BookOpen,
  PenTool,
  BadgeDollarSign,
  TrendingUp,
  Pencil,
  PauseCircle,
  PlayCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { HiSparkles } from "react-icons/hi";
import { MdTrendingFlat } from "react-icons/md";

const page = () => {
  return (
    <div className="bg-background text-on-surface min-h-screen">
      <aside className="fixed left-0 top-0 z-50 flex h-screen w-[260px] flex-col border-r border-slate-200/50 bg-slate-50 px-4 py-6 font-sans tracking-tight leading-relaxed dark:border-slate-800/50 dark:bg-slate-900 max-md:w-[78px] max-md:px-2">
        {/* Logo */}
        <div className="mb-10 px-2 max-md:px-1">
          <h1 className="text-lg font-bold text-indigo-700 dark:text-indigo-300 max-md:text-center">
            <span className="max-md:hidden">The Curator</span>
            <span className="hidden max-md:block">TC</span>
          </h1>

          <p className="text-xs font-medium tracking-wide text-slate-400 max-md:hidden">
            Elite Talent Partners
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1">
          <a
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-500 transition-colors duration-200 hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-indigo-300 max-md:justify-center max-md:px-2"
            href="#"
          >
            <LayoutDashboard size={20} />

            <span className="text-sm font-medium max-md:hidden">Dashboard</span>
          </a>

          <a
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-500 transition-colors duration-200 hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-indigo-300 max-md:justify-center max-md:px-2"
            href="#"
          >
            <CirclePlus size={20} />

            <span className="text-sm font-medium max-md:hidden">Post Job</span>
          </a>

          <a
            className="flex items-center gap-3 rounded-lg border-r-4 border-indigo-600 bg-indigo-50/50 px-3 py-2.5 font-semibold text-indigo-700 transition-all dark:border-indigo-400 dark:bg-indigo-900/20 dark:text-indigo-400 max-md:justify-center max-md:px-2"
            href="#"
          >
            <BriefcaseBusiness size={20} />

            <span className="text-sm font-medium max-md:hidden">
              Manage Jobs
            </span>
          </a>

          <a
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-500 transition-colors duration-200 hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-indigo-300 max-md:justify-center max-md:px-2"
            href="#"
          >
            <Users size={20} />

            <span className="text-sm font-medium max-md:hidden">
              Candidates
            </span>
          </a>

          <a
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-500 transition-colors duration-200 hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-indigo-300 max-md:justify-center max-md:px-2"
            href="#"
          >
            <CalendarDays size={20} />

            <span className="text-sm font-medium max-md:hidden">
              Interviews
            </span>
          </a>

          <a
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-500 transition-colors duration-200 hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-indigo-300 max-md:justify-center max-md:px-2"
            href="#"
          >
            <Mail size={20} />

            <span className="text-sm font-medium max-md:hidden">Messages</span>
          </a>

          <a
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-500 transition-colors duration-200 hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-indigo-300 max-md:justify-center max-md:px-2"
            href="#"
          >
            <BarChart3 size={20} />

            <span className="text-sm font-medium max-md:hidden">Analytics</span>
          </a>
        </nav>

        {/* Bottom Section */}
        <div className="mt-auto space-y-1 pt-6">
          <a
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-500 transition-colors duration-200 hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-indigo-300 max-md:justify-center max-md:px-2"
            href="#"
          >
            <Building2 size={20} />

            <span className="text-sm font-medium max-md:hidden">
              Company Profile
            </span>
          </a>

          <a
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-500 transition-colors duration-200 hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-indigo-300 max-md:justify-center max-md:px-2"
            href="#"
          >
            <Settings size={20} />

            <span className="text-sm font-medium max-md:hidden">Settings</span>
          </a>

          <div className="mt-6 cursor-pointer rounded-xl bg-indigo-600 p-4 text-center text-white shadow-lg shadow-indigo-200 transition-all active:scale-95 max-md:p-3">
            <span className="text-sm font-bold max-md:hidden">Quick Post</span>

            <span className="hidden max-md:block">
              <Plus size={22} />
            </span>
          </div>
        </div>
      </aside>
      <header className="fixed top-0 right-0 z-40 flex h-16 w-[calc(100%-16rem)] items-center justify-between bg-white/80 px-4 backdrop-blur-md dark:bg-slate-950/80 md:px-8 max-md:w-[calc(100%-78px)]">
        {/* Left Section */}
        <div className="flex flex-1 items-center gap-4 md:gap-6">
          {/* Mobile Menu Icon */}
          <button className="hidden max-md:flex text-slate-500">
            <Menu size={22} />
          </button>

          {/* Search */}
          <div className="group relative w-full max-w-md">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              className="w-full rounded-full border-none bg-surface-container-low py-2 pl-10 pr-4 text-sm outline-none transition-all focus:bg-white focus:ring-2 focus:ring-indigo-500/20"
              placeholder="Search open roles or candidate names..."
              type="text"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3 md:gap-6">
          {/* Notification */}
          <button className="relative p-2 text-slate-500 transition-colors hover:text-indigo-600">
            <Bell size={20} />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-error"></span>
          </button>

          {/* Button */}
          <button className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-indigo-100 transition-all hover:bg-indigo-700 active:scale-95 md:px-5">
            <Plus size={16} />

            <span className="hidden sm:block">Post New Job</span>
          </button>

          {/* Profile */}
          <div className="flex items-center gap-3 border-l border-slate-100 pl-3 md:pl-4">
            <img
              className="h-8 w-8 rounded-full object-cover"
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
        <header className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          {/* Left Content */}
          <div>
            <nav className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-400">
              <span>Recruitment</span>

              <ChevronRight size={12} />

              <span className="text-indigo-600">Active Roles</span>
            </nav>

            <h2 className="text-[2.2rem] font-bold leading-tight tracking-tight text-on-surface sm:text-[2.5rem]">
              Manage Jobs
            </h2>

            <p className="mt-2 max-w-xl text-slate-500">
              Oversee your current talent pipelines across editorial, design,
              and executive departments.
            </p>
          </div>

          {/* Right Filters */}
          <div className="flex flex-col gap-3 sm:flex-row">
            {/* Filter */}
            <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white px-4 py-2 shadow-sm">
              <Filter size={18} className="text-indigo-500" />

              <select className="cursor-pointer border-none bg-transparent text-sm font-medium text-slate-600 focus:ring-0 outline-none">
                <option>All Statuses</option>
                <option>Active Only</option>
                <option>Paused Only</option>
              </select>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white px-4 py-2 shadow-sm">
              <ArrowUpDown size={18} className="text-indigo-500" />

              <select className="cursor-pointer border-none bg-transparent text-sm font-medium text-slate-600 focus:ring-0 outline-none">
                <option>Sort by Date</option>
                <option>Sort by Applicants</option>
                <option>Sort by Priority</option>
              </select>
            </div>
          </div>
        </header>
        <div className="grid grid-cols-1 gap-6 lg:gap-8 xl:grid-cols-2">
  
  {/* Card 1 */}
  <div className="group relative overflow-hidden rounded-[24px] border border-transparent bg-surface-container-lowest p-6 transition-all hover:border-indigo-100/50 hover:shadow-xl hover:shadow-indigo-500/5 sm:p-8">
    
    <div className="absolute right-0 top-0 p-4">
      <span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-600">
        Active
      </span>
    </div>

    <div className="flex h-full flex-col">
      
      <div className="mb-6 flex items-start gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
          <BookOpen size={30} />
        </div>

        <div>
          <h3 className="text-lg font-bold text-on-surface transition-colors group-hover:text-indigo-600 sm:text-xl">
            Senior Editorial Director
          </h3>

          <p className="mt-0.5 text-sm text-slate-400">
            Posted 4 days ago • London (Hybrid)
          </p>
        </div>
      </div>

      <div className="mb-8 grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
        
        <div className="rounded-2xl bg-surface-container-low p-4">
          <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            Applicants
          </p>

          <div className="flex items-end gap-2">
            <span className="text-2xl font-bold text-on-surface">
              142
            </span>

            <span className="mb-1 flex items-center gap-1 text-xs font-bold text-emerald-500">
              <TrendingUp size={14} />
              12%
            </span>
          </div>
        </div>

        <div className="rounded-2xl bg-surface-container-low p-4">
          <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            Match Rate
          </p>

          <div className="flex items-end gap-2">
            <span className="text-2xl font-bold text-on-surface">
              84%
            </span>

            <span className="mb-1 rounded-full bg-tertiary-container/20 px-2 py-0.5 text-[8px] font-black uppercase text-tertiary">
              Elite
            </span>
          </div>
        </div>
      </div>

      <div className="mt-auto flex flex-col gap-4 border-t border-slate-50 pt-6 sm:flex-row sm:items-center sm:justify-between">
        
        <div className="flex gap-2">
          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition-all hover:bg-slate-50 hover:text-indigo-600"
            title="Edit Job"
          >
            <Pencil size={18} />
          </button>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition-all hover:bg-rose-50 hover:text-rose-500"
            title="Pause Recruitment"
          >
            <PauseCircle size={18} />
          </button>
        </div>

        <a
          className="group/link flex items-center gap-2 text-sm font-bold text-indigo-600 transition-all hover:gap-3"
          href="#"
        >
          View Candidates

          <ArrowRight size={18} />
        </a>
      </div>
    </div>
  </div>

  {/* Card 2 */}
  <div className="group relative overflow-hidden rounded-[24px] border border-transparent bg-surface-container-lowest p-6 transition-all hover:border-slate-200/50 hover:shadow-xl hover:shadow-slate-500/5 sm:p-8">
    
    <div className="absolute right-0 top-0 p-4">
      <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
        Paused
      </span>
    </div>

    <div className="flex h-full flex-col opacity-75 grayscale-[0.3] transition-all group-hover:opacity-100 group-hover:grayscale-0">
      
      <div className="mb-6 flex items-start gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
          <PenTool size={30} />
        </div>

        <div>
          <h3 className="text-lg font-bold text-on-surface sm:text-xl">
            Creative Design Lead
          </h3>

          <p className="mt-0.5 text-sm text-slate-400">
            Posted 12 days ago • New York (Remote)
          </p>
        </div>
      </div>

      <div className="mb-8 grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
        
        <div className="rounded-2xl bg-surface-container-low p-4">
          <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            Applicants
          </p>

          <div className="flex items-end gap-2">
            <span className="text-2xl font-bold text-on-surface">
              56
            </span>

            <span className="mb-1 flex items-center gap-1 text-xs font-bold text-slate-400">
              <MdTrendingFlat size={14} />
              0%
            </span>
          </div>
        </div>

        <div className="rounded-2xl bg-surface-container-low p-4">
          <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            Status
          </p>

          <div className="flex items-end gap-2">
            <span className="mb-1 text-md font-bold text-on-surface">
              On Hold
            </span>
          </div>
        </div>
      </div>

      <div className="mt-auto flex flex-col gap-4 border-t border-slate-50 pt-6 sm:flex-row sm:items-center sm:justify-between">
        
        <div className="flex gap-2">
          <button className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition-all hover:bg-slate-50 hover:text-indigo-600">
            <Pencil size={18} />
          </button>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-all hover:bg-emerald-100"
            title="Resume Recruitment"
          >
            <PlayCircle size={18} />
          </button>
        </div>

        <a
          className="group/link flex items-center gap-2 text-sm font-bold text-indigo-600 transition-all hover:gap-3"
          href="#"
        >
          View Candidates

          <ArrowRight size={18} />
        </a>
      </div>
    </div>
  </div>

  {/* Card 3 */}
  <div className="group relative overflow-hidden rounded-[24px] border border-transparent bg-surface-container-lowest p-6 transition-all hover:border-indigo-100/50 hover:shadow-xl hover:shadow-indigo-500/5 sm:p-8">
    
    <div className="absolute right-0 top-0 p-4">
      <span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-600">
        Active
      </span>
    </div>

    <div className="flex h-full flex-col">
      
      <div className="mb-6 flex items-start gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
          <BadgeDollarSign size={30} />
        </div>

        <div>
          <h3 className="text-lg font-bold text-on-surface transition-colors group-hover:text-indigo-600 sm:text-xl">
            VP of Digital Strategy
          </h3>

          <p className="mt-0.5 text-sm text-slate-400">
            Posted 2 days ago • Global Remote
          </p>
        </div>
      </div>

      <div className="mb-8 grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2">
        
        <div className="rounded-2xl bg-surface-container-low p-4">
          <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            Applicants
          </p>

          <div className="flex items-end gap-2">
            <span className="text-2xl font-bold text-on-surface">
              218
            </span>

            <span className="mb-1 flex items-center gap-1 text-xs font-bold text-emerald-500">
              <TrendingUp size={14} />
              44%
            </span>
          </div>
        </div>

        <div className="rounded-2xl bg-surface-container-low p-4">
          <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            Priority
          </p>

          <div className="flex items-end gap-2">
            <span className="text-2xl font-bold text-on-surface">
              High
            </span>

            <span className="mb-1 rounded-full bg-rose-50 px-2 py-0.5 text-[8px] font-black uppercase text-rose-500">
              Critical
            </span>
          </div>
        </div>
      </div>

      <div className="mt-auto flex flex-col gap-4 border-t border-slate-50 pt-6 sm:flex-row sm:items-center sm:justify-between">
        
        <div className="flex gap-2">
          <button className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition-all hover:bg-slate-50 hover:text-indigo-600">
            <Pencil size={18} />
          </button>

          <button className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-400 transition-all hover:bg-rose-50 hover:text-rose-500">
            <PauseCircle size={18} />
          </button>
        </div>

        <a
          className="group/link flex items-center gap-2 text-sm font-bold text-indigo-600 transition-all hover:gap-3"
          href="#"
        >
          View Candidates

          <ArrowRight size={18} />
        </a>
      </div>
    </div>
  </div>

  {/* CTA Card */}
  <div className="relative flex flex-col justify-between overflow-hidden rounded-[24px] bg-gradient-to-br from-indigo-600 to-primary-container p-6 text-white sm:p-8">
    
    <div className="absolute -right-12 -top-12 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>

    <div className="relative z-10">
      <HiSparkles size={40} className="mb-6" />

      <h3 className="mb-2 text-2xl font-bold">
        Need a faster pipeline?
      </h3>

      <p className="max-w-xs text-sm leading-relaxed text-indigo-100">
        Our AI-assisted "Curator Pro" can filter 500+ candidates into a
        shortlist of 10 in under 3 minutes.
      </p>
    </div>

    <div className="relative z-10 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
      
      <button className="rounded-xl bg-white px-6 py-3 text-sm font-bold text-indigo-600 shadow-lg transition-all hover:bg-indigo-50 active:scale-95">
        Enable Auto-Curate
      </button>

      <button className="text-sm font-medium text-white/80 transition-colors hover:text-white">
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

"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  PlusCircle,
  BriefcaseBusiness,
  Users,
  CalendarDays,
  Mail,
  BarChart3,
} from "lucide-react";
 

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-50 h-screen w-64 bg-slate-50 dark:bg-slate-900 border-r border-slate-200/50 dark:border-slate-800/50 hidden lg:flex flex-col py-8 px-4">
        <div className="mb-10 px-4">
          <h1 className="text-lg font-bold text-indigo-700 dark:text-indigo-300 tracking-tight leading-relaxed">
            The Curator
          </h1>

          <p className="text-xs font-sans tracking-tight text-slate-500">
            Elite Talent Partners
          </p>
        </div>

        <nav className="flex-grow space-y-1">
          <a
            className="flex items-center px-4 py-3 text-indigo-700 dark:text-indigo-400 font-semibold border-r-4 border-indigo-600 dark:border-indigo-400 bg-indigo-50/50 dark:bg-indigo-900/20 transition-all"
            href="#"
          >
            <LayoutDashboard size={18} className="mr-3" />
            <span className="text-sm">Dashboard</span>
          </a>

          <a
            className="flex items-center px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
            href="#"
          >
            <PlusCircle size={18} className="mr-3" />
            <span className="text-sm">Post Job</span>
          </a>

          <a
            className="flex items-center px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
            href="#"
          >
            <BriefcaseBusiness size={18} className="mr-3" />
            <span className="text-sm">Manage Jobs</span>
          </a>

          <a
            className="flex items-center px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
            href="#"
          >
            <Users size={18} className="mr-3" />
            <span className="text-sm">Candidates</span>
          </a>

          <a
            className="flex items-center px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
            href="#"
          >
            <CalendarDays size={18} className="mr-3" />
            <span className="text-sm">Interviews</span>
          </a>

          <a
            className="flex items-center px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
            href="#"
          >
            <Mail size={18} className="mr-3" />
            <span className="text-sm">Messages</span>
          </a>

          <a
            className="flex items-center px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
            href="#"
          >
            <BarChart3 size={18} className="mr-3" />
            <span className="text-sm">Analytics</span>
          </a>
        </nav>

        <div className="mt-auto px-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          <button className="w-full bg-indigo-600 text-white py-3 px-4 rounded-xl font-semibold text-sm scale-95 active:opacity-80 transition-all">
            Quick Post
          </button>
        </div>
      </aside>
  );
}
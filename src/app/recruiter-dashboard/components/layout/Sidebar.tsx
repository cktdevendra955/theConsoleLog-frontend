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

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    active: true,
  },
  {
    title: "Post Job",
    icon: PlusCircle,
  },
  {
    title: "Manage Jobs",
    icon: BriefcaseBusiness,
  },
  {
    title: "Candidates",
    icon: Users,
  },
  {
    title: "Interviews",
    icon: CalendarDays,
  },
  {
    title: "Messages",
    icon: Mail,
  },
  {
    title: "Analytics",
    icon: BarChart3,
  },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-50 hidden h-screen w-64 flex-col border-r border-slate-200/50 bg-slate-50 px-4 py-8 dark:border-slate-800/50 dark:bg-slate-900 lg:flex">
      <div className="mb-10 px-4">
        <h1 className="text-lg font-bold tracking-tight text-indigo-700 dark:text-indigo-300">
          The Curator
        </h1>

        <p className="text-xs tracking-tight text-slate-500">
          Elite Talent Partners
        </p>
      </div>

      <nav className="flex-grow space-y-1">
        {menuItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <Link
              href="#"
              key={index}
              className={`flex items-center rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                item.active
                  ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-300"
                  : "text-slate-500 hover:bg-slate-100 hover:text-indigo-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-indigo-300"
              }`}
            >
              <Icon size={18} className="mr-3" />
              {item.title}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto border-t border-slate-200 pt-4 dark:border-slate-800">
        <button className="w-full rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-indigo-700">
          Quick Post
        </button>
      </div>
    </aside>
  );
}
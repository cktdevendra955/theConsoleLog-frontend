"use client";

import { Bell, Menu, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed right-0 top-0 z-40 flex h-16 w-full items-center justify-between bg-white/80 px-4 shadow-sm backdrop-blur-md dark:bg-slate-950/80 lg:w-[calc(100%-16rem)] lg:px-8">
      <div className="flex items-center">
        <button className="mr-4 text-slate-600 lg:hidden dark:text-slate-300">
          <Menu size={22} />
        </button>

        <div className="hidden items-center rounded-full bg-slate-100 px-4 py-2 md:flex w-72 lg:w-96">
          <Search size={16} className="mr-2 text-slate-400" />

          <input
            type="text"
            placeholder="Search candidates..."
            className="w-full bg-transparent text-sm outline-none"
          />
        </div>
      </div>

      <div className="flex items-center space-x-5">
        <button className="relative text-slate-500 hover:text-indigo-600">
          <Bell size={20} />

          <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        <div className="flex items-center space-x-3">
          <div className="hidden text-right sm:block">
            <p className="text-xs font-bold">Alex Mercer</p>

            <p className="text-[10px] uppercase tracking-widest text-slate-400">
              Senior Partner
            </p>
          </div>

          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
            className="h-10 w-10 rounded-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}   
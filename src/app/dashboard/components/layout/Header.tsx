"use client";

import { Menu, Bell } from "lucide-react";

export default function Header({
  toggleSidebar,
  openMobile,
}: {
  toggleSidebar: () => void;
  openMobile: () => void;
}) {
  return (
    <header className="h-16 flex items-center justify-between px-4 md:px-6">

      {/* LEFT */}
      <div className="flex items-center gap-4">
        <button onClick={openMobile} className="md:hidden">
          <Menu className="h-5 w-5 text-gray-600" />
        </button>

        <button onClick={toggleSidebar} className="hidden md:block">
          <Menu className="h-5 w-5 text-gray-600" />
        </button>

        {/* SEARCH */}
        <div className="bg-white/70 rounded-xl px-4 py-2 shadow-inner flex items-center gap-2 w-40 md:w-64">
          <input
            placeholder="Search..."
            className="bg-transparent outline-none text-sm w-full"
          />
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-5">
        <Bell className="h-5 w-5 text-gray-500" />

        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/40"
            className="h-9 w-9 rounded-full"
          />
          <div className="hidden sm:block text-sm">
            <p className="font-medium">Devendra</p>
            <p className="text-xs text-gray-400">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
}
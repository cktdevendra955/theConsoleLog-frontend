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
    <header className="h-16 border-b flex items-center justify-between px-4 md:px-8 bg-white">
      
      <div className="flex items-center gap-3">
        {/* Mobile */}
        <button onClick={openMobile} className="md:hidden">
          <Menu className="h-5 w-5" />
        </button>

        {/* Desktop */}
        <button onClick={toggleSidebar} className="hidden md:block">
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <div className="flex items-center gap-4">
        <Bell className="h-5 w-5" />
      </div>
    </header>
  );
}
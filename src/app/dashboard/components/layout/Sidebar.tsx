"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { LogOut } from "lucide-react";
import { NAV_ITEMS } from "../../route/navigation";

export default function Sidebar({
  isOpen,
  isMobile = false,
}: {
  isOpen: boolean;
  isMobile?: boolean;
}) {
  const pathname = usePathname();

  // ✅ FIXED ACTIVE ROUTE LOGIC
  const isActiveRoute = (path: string) => {
    if (!pathname) return false;

    // Special case: Dashboard should only match exactly
    if (path === "/dashboard") {
      return pathname === path;
    }

    // Exact match OR nested route match
    return pathname === path || pathname.startsWith(path + "/");
  };

  const mainItems = NAV_ITEMS.filter((i) => i.section === "main");
  const secondaryItems = NAV_ITEMS.filter((i) => i.section === "secondary");

  const renderNavItem = (item: any) => {
    const isActive = isActiveRoute(item.path);

    return (
      <Link key={item.label} href={item.path}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className={`relative flex items-center gap-3 h-11 px-4 rounded-xl text-sm transition-all
            ${
              isActive
                  ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-md"                  
                : "text-gray-500 hover:bg-white/70"
            }
            ${!isOpen && !isMobile && "justify-center px-0"}
          `}
        >
          
          {/* {isActive && (
            <div className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-white/80" />
          )} */}

          <item.icon className="h-5 w-5 shrink-0" />
          {(isOpen || isMobile) && <span>{item.label}</span>}
        </motion.div>
      </Link>
    );
  };

  return (
    <motion.aside
      animate={{ width: isMobile ? 256 : isOpen ? 256 : 80 }}
      className={`flex flex-col ${
        isMobile
          ? "w-64 bg-[#f4f7fb]"
          : "hidden md:flex bg-[#f4f7fb]"
      }`}
    >
      <div className="flex flex-col h-[100dvh]">

        {/* Logo */}
        <div className="p-5 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 text-white flex items-center justify-center font-semibold shadow">
            C
          </div>
          {(isOpen || isMobile) && (
            <span className="text-lg font-semibold">Console</span>
          )}
        </div>

        {/* Nav */}
        <div className="flex-1 overflow-y-auto px-3 space-y-1">
          {mainItems.map(renderNavItem)}
          <div className="my-4 border-t border-white/40" />
          {secondaryItems.map(renderNavItem)}
        </div>

        {/* Logout */}
        <div className="p-4">
          <button className="flex items-center gap-3 text-gray-400 hover:text-red-500 text-sm transition">
            <LogOut className="h-5 w-5" />
            {(isOpen || isMobile) && "Logout"}
          </button>
        </div>
      </div>
    </motion.aside>
  );
}
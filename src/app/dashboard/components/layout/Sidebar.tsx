"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import { NAV_ITEMS } from "../../route/navigation";

export default function Sidebar({
  isOpen,
  isMobile = false,
  closeMobileSidebar,
}: {
  isOpen: boolean;
  isMobile?: boolean;
  closeMobileSidebar?: () => void;
}) {
  const pathname = usePathname();

  // ✅ ACTIVE ROUTE LOGIC
  const isActiveRoute = (path: string) => {
    if (!pathname) return false;

    if (path === "/dashboard") {
      return pathname === path;
    }

    return pathname === path || pathname.startsWith(path + "/");
  };

  const mainItems = NAV_ITEMS.filter((i) => i.section === "main");
  const secondaryItems = NAV_ITEMS.filter((i) => i.section === "secondary");

  const renderNavItem = (item: any) => {
    const isActive = isActiveRoute(item.path);

    return (
      <Link
        key={item.label}
        href={item.path}
        className="block"
        onClick={() => {
          // ✅ CLOSE MOBILE SIDEBAR AFTER CLICK
          if (isMobile) {
            closeMobileSidebar?.();
          }
        }}
      >
        <div
          className={`relative flex items-center gap-3 h-11 px-4 rounded-xl text-sm transition-all duration-200
            ${
              isActive
                ? "primary-gradient-bg shadow-md"
                : "text-gray-500 hover:bg-white/70"
            }
            ${!isOpen && !isMobile ? "justify-center px-0" : ""}
          `}
        >
          <item.icon className="h-5 w-5 shrink-0" />

          {(isOpen || isMobile) && <span>{item.label}</span>}
        </div>
      </Link>
    );
  };

  return (
    <aside
      className={`flex flex-col transition-all duration-300
        ${
          isMobile
            ? "w-64 bg-[#f4f7fb]"
            : isOpen
            ? "w-64 hidden md:flex bg-[#f4f7fb]"
            : "w-20 hidden md:flex bg-[#f4f7fb]"
        }
      `}
    >
      <div className="flex flex-col h-[100dvh]">
        {/* Logo */}
        <div className="p-5 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl primary-gradient-bg flex items-center justify-center font-semibold shadow">
            C
          </div>

          {(isOpen || isMobile) && (
            <span className="text-lg font-semibold">Console</span>
          )}
        </div>

        {/* Navigation */}
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
    </aside>
  );
}
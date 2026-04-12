"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  CreditCard,
  TrendingUp,
  Mail,
  Calendar,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: Users, label: "Customers", path: "/dashboard/customers" },
  { icon: CreditCard, label: "Transactions", path: "/dashboard/transactions" },
  { icon: TrendingUp, label: "Analytics", path: "/dashboard/analytics" },
  { icon: Mail, label: "Messages", path: "/dashboard/messages" },
  { icon: Calendar, label: "Calendar", path: "/dashboard/calendar" },
];

const secondaryNavItems = [
  { icon: Settings, label: "Settings", path: "/dashboard/settings" },
  { icon: HelpCircle, label: "Support", path: "/dashboard/support" },
];

export default function Sidebar({
  isOpen,
  isMobile = false,
}: {
  isOpen: boolean;
  isMobile?: boolean;
}) {
  const pathname = usePathname();

  return (
    <motion.aside
      animate={{ width: isMobile ? 256 : isOpen ? 256 : 80 }}
      className={`flex flex-col border-r ${
        isMobile
          ? "w-64 bg-white"
          : "hidden md:flex bg-card/80 backdrop-blur-xl"
      }`}
    >
      {/* 🔥 FULL HEIGHT CONTAINER */}
      <div className="flex flex-col h-[100dvh]">
        
        {/* Logo */}
        <div className="p-6 flex items-center gap-3 shrink-0">
          <div className="w-8 h-8 bg-primary text-white flex items-center justify-center rounded-lg font-bold">
            Z
          </div>
          {(isOpen || isMobile) && <span className="font-bold">Zenith</span>}
        </div>

        {/* Scrollable Nav */}
        <div className="flex-1 overflow-y-auto px-3 space-y-1 overscroll-contain">
          {navItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link key={item.label} href={item.path}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`flex items-center gap-3 h-11 px-3 rounded-md ${
                    isActive
                      ? "bg-primary text-white"
                      : "text-muted-foreground hover:bg-muted"
                  } ${!isOpen && !isMobile && "justify-center px-0"}`}
                >
                  <item.icon className="h-5 w-5" />
                  {(isOpen || isMobile) && <span>{item.label}</span>}
                </motion.div>
              </Link>
            );
          })}

          <div className="my-4 border-t" />

          {secondaryNavItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link key={item.label} href={item.path}>
                <div
                  className={`flex items-center gap-3 h-11 px-3 rounded-md ${
                    isActive
                      ? "bg-primary text-white"
                      : "text-muted-foreground hover:bg-muted"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  {(isOpen || isMobile) && <span>{item.label}</span>}
                </div>
              </Link>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 border-t shrink-0">
          <button className="flex items-center gap-3 text-muted-foreground hover:text-red-500">
            <LogOut className="h-5 w-5" />
            {(isOpen || isMobile) && "Logout"}
          </button>
        </div>
      </div>
    </motion.aside>
  );
}
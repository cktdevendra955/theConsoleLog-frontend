"use client";

import { Menu, Bell } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header({
  toggleSidebar,
  openMobile,
}: {
  toggleSidebar: () => void;
  openMobile: () => void;
}) {
  const [active, setActive] = useState<"notif" | "profile" | null>(null);

  const notifRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        notifRef.current &&
        !notifRef.current.contains(e.target as Node) &&
        profileRef.current &&
        !profileRef.current.contains(e.target as Node)
      ) {
        setActive(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

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

        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Dev
          </h1>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-5">

        {/* 🔔 Notification */}
        <div className="relative" ref={notifRef}>
          <div
            onClick={() =>
              setActive(active === "notif" ? null : "notif")
            }
            className={`p-2 rounded-lg cursor-pointer transition ${
              active === "notif" ? "bg-gray-100" : ""
            }`}
          >
            <Bell className="h-5 w-5 text-gray-500" />
          </div>

          <AnimatePresence>
            {active === "notif" && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-3 w-64 bg-white border rounded-xl shadow-lg p-3 z-50"
              >
                <p className="text-sm font-medium mb-2">Notifications</p>
                <div className="text-sm text-gray-500">
                  No new notifications
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 👤 Profile */}
        <div className="relative flex items-center gap-2" ref={profileRef}>
          <div
            onClick={() =>
              setActive(active === "profile" ? null : "profile")
            }
            className={`flex items-center gap-2 cursor-pointer px-2 py-1 rounded-lg transition ${
              active === "profile" ? "bg-gray-100" : ""
            }`}
          >
            <img
              src="https://i.pravatar.cc/40"
              className="h-9 w-9 rounded-full"
            />
            <div className="hidden sm:block text-sm">
              <p className="font-medium">Devendra</p>
              <p className="text-xs text-gray-400">Admin</p>
            </div>
          </div>

          <AnimatePresence>
            {active === "profile" && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 top-12 w-48 bg-white border rounded-xl shadow-lg p-2 z-50"
              >
                <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded-lg">
                  Profile
                </button>
                <button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded-lg">
                  Settings
                </button>
                <div className="border-t my-2"></div>
                <button className="w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-gray-100 rounded-lg">
                  Logout
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </header>
  );
}
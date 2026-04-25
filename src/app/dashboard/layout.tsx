"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="flex h-screen w-full bg-[#f5f7fb] overflow-hidden">

      {/* Desktop Sidebar */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            />

            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              className="fixed top-0 left-0 w-64 h-[100dvh] bg-white z-50 shadow-2xl"
            >
              <Sidebar isOpen isMobile />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main */}
      <main className="flex-1 flex flex-col min-w-0">
        <Header
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          openMobile={() => setIsMobileOpen(true)}
        />

        <div className="flex-1 overflow-auto px-4 md:px-6 py-6 text-gray-900">
          {children}
        </div>
      </main>
    </div>
  );
}
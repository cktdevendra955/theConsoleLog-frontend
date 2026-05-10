"use client";

import { useState } from "react";
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
    <div className="flex h-screen w-full bg-background text-on-surface antialiased overflow-hidden">
      {/* Desktop Sidebar */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* Mobile Sidebar */}
      {isMobileOpen && (
        <>
          {/* Overlay */}
          <div
            onClick={() => setIsMobileOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300"
          />

          {/* Sidebar */}
          <div className="fixed top-0 left-0 w-64 h-[100dvh] bg-white z-50 shadow-2xl transition-transform duration-300">
            <Sidebar isOpen isMobile />
          </div>
        </>
      )}

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
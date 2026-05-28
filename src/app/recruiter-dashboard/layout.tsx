"use client";

import { useEffect, useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
    <div className="bg-background text-on-surface antialiased">
      <Sidebar />
      <Header />
        <main className="ml-64 pt-24 pb-12 px-8 min-h-screen">
          <div className="">{children}</div>
        </main>
      
    </div>
  );
}
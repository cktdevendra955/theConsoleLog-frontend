"use client";

import { useState } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
export default function DashboardLayout({children,}: {children: React.ReactNode;}) {
  return (
    <div className="min-h-full flex flex-col bg-background text-on-background">
      <Header />
        <main className="flex-1 ">{children}</main>
      <Footer />
      
    </div>
  );
}

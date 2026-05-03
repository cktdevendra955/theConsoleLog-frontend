"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Jobs", href: "/jobs" },
  { name: "Drives", href: "/drives" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Resume", href: "/resume" },
];

export default function Header() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  // ✅ Fix hydration mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
        
        {/* Brand */}
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Mark-43
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => {
            const isActive = mounted && pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition ${
                  isActive
                    ? "text-black font-medium"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm text-gray-600 hover:text-black"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="text-sm bg-black text-white px-4 py-2 rounded-xl hover:opacity-90"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg border"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Collapsible Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px] border-t" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-6 bg-white">
          
          {/* Links */}
          <nav className="flex flex-col gap-4 mt-4 text-sm">
            {navLinks.map((link) => {
              const isActive = mounted && pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`${
                    isActive
                      ? "text-black font-medium"
                      : "text-gray-500"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Auth */}
          <div className="flex flex-col gap-3 mt-6">
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="text-sm text-gray-600"
            >
              Login
            </Link>

            <Link
              href="/register"
              onClick={() => setOpen(false)}
              className="text-sm bg-black text-white px-4 py-2 rounded-xl text-center"
            >
              Get Started
            </Link>
          </div>

        </div>
      </div>

    </header>
  );
}
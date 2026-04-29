"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Jobs", href: "/jobs" },
  { name: "Drives", href: "/drives" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Resume", href: "/resume" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* 🔥 Brand */}
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Mark-43
        </Link>

        {/* 🔹 Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
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

        {/* 🔹 Auth Buttons */}
        <div className="flex items-center gap-3">
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
      </div>
    </header>
  );
}
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">

      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

        {/* Brand */}
        <Link href="/" className="text-base font-semibold text-gray-900 tracking-tight">
          Mark-43
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = mounted && pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm transition relative
                  ${isActive ? "text-gray-900" : "text-gray-500 hover:text-gray-900"}
                `}
              >
                {link.name}

                {/* subtle underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-gray-900 transition-all
                    ${isActive ? "w-full" : "w-0"}
                  `}
                />
              </Link>
            );
          })}
        </nav>

        {/* Auth */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/login" className="text-sm text-gray-500 hover:text-gray-900">
            Login
          </Link>

          <Link
            href="/register"
            className="text-sm text-gray-900 font-medium hover:underline"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden p-2"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 w-72 h-full bg-white z-50 transform transition-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-16 px-6 flex items-center justify-between border-b">
          <span className="font-semibold text-gray-900">Menu</span>
          <button onClick={() => setOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <div className="p-6 flex flex-col gap-5">

          {navLinks.map((link) => {
            const isActive = mounted && pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-sm ${
                  isActive ? "text-gray-900 font-medium" : "text-gray-500"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="mt-6 pt-6 border-t flex flex-col gap-3">
            <Link href="/login" className="text-sm text-gray-500">
              Login
            </Link>

            <Link
              href="/register"
              className="text-sm font-medium text-gray-900"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
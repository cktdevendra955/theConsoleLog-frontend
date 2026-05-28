"use client";

import { Bell, Menu, Search } from "lucide-react";

export default function Header() {
  return (
   <header className="fixed top-0 right-0 lg:w-[calc(100%-16rem)] w-full h-16 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md flex items-center justify-between px-4 lg:px-8 z-40 shadow-sm dark:shadow-none">
        <div className="flex items-center">
          {/* Mobile Menu Button */}
          <button className="lg:hidden mr-4 text-slate-600 dark:text-slate-300">
            <Menu size={24} />
          </button>

          {/* Search */}
          <div className="hidden md:flex items-center bg-surface-container-low px-4 py-2 rounded-full w-72 lg:w-96 focus-within:ring-2 focus-within:ring-indigo-500/20 transition-all">
            <Search size={16} className="text-slate-400 mr-2" />

            <input
              className="bg-transparent border-none focus:ring-0 outline-none text-sm w-full text-slate-600 dark:text-slate-300"
              placeholder="Search candidates, roles, or insights..."
              type="text"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4 lg:space-x-6">
          {/* Notification */}
          <button className="relative text-slate-500 hover:text-indigo-700 transition-colors">
            <Bell size={20} />

            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Profile */}
          <div className="flex items-center space-x-3">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-bold text-on-surface">Alex Mercer</p>

              <p className="text-[10px] text-slate-400 uppercase tracking-widest">
                Senior Partner
              </p>
            </div>

            <img
              className="w-10 h-10 rounded-full object-cover ring-2 ring-indigo-50"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAc2XD9BrzFUwPy_DwMD7TDnie37hwSJ49GB1JsKwH09INUjtRcbpMuhDZGK3s0I0vDfmHDAM-irZFqEjknNYBeG0V0BaouuTV9h_qd0GRYtvZXjzNtIyuqmGWLyc6mR8INL54zGx__MX81zQnexaC0nDVkoClGwaXnd7IJwGlsus99UfROAaNXZw0McfB1n8yIU795CJ-mzo9CsBLKC82Negh6E5GOHDv7L9bHbgYmJTJeuVizHGSkcQ41jNP0g3-3-G1nJhXDmUUV"
              alt="Profile"
            />
          </div>
        </div>
      </header>
  );
}   
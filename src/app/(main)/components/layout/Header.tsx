"use client";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
      
      <div className="relative max-w-[1280px] mx-auto px-8 h-16 flex items-center">

        {/* LEFT - LOGO */}
        <div className="flex items-center">
          <span className="text-xl font-bold">Signal</span>
        </div>

        {/* CENTER - MENU */}
        <nav className="absolute left-1/2 -translate-x-1/2 hidden md:flex gap-8 text-sm">
          <a className="text-blue-600 border-b-2 border-blue-600 pb-1">Jobs</a>
          <a className="text-slate-500 hover:text-slate-900">Drives</a>
          <a className="text-slate-500 hover:text-slate-900">Talent</a>
          <a className="text-slate-500 hover:text-slate-900">Resume</a>
        </nav>

        {/* RIGHT - ACTIONS */}
        <div className="ml-auto flex items-center gap-4 text-sm">
          <button className="text-slate-500 hover:text-slate-900">
            Sign In
          </button>
          <button className="bg-primary text-white px-5 py-2 rounded-lg">
            Post a Role
          </button>
        </div>

      </div>

    </header>
  );
}
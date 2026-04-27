"use client";

import {
  Plus,
  ChevronDown,
  Info,
  MoreVertical,
  Star,
  CalendarDays,
  Archive,
  FileText,
  Mic,
  ArrowRight,
  LayoutDashboard,
  Briefcase,
  Search,
  MessageCircle,
  User,
  Filter,
  Calendar,
  Activity,
  ArrowRightLeft,
} from "lucide-react";

export default function Page() {
  return (
    <div className="bg-surface text-on-surface">
      <main className="min-h-screen">
        <section className=" pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="flex flex-col gap-6 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight">
                Track Application
              </h2>

              <p className="text-sm sm:text-base text-on-surface-variant mt-2 max-w-md">
                Managing 12 opportunities. 2 interviews this week.
              </p>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="w-full sm:w-auto px-4 py-2.5 rounded-full bg-white text-primary text-sm font-semibold">
                Export Report
              </button>

              <button className="w-full sm:w-auto px-4 py-2.5 rounded-full bg-gradient-to-br from-primary to-primary-container text-sm font-semibold flex items-center justify-center gap-2">
                <Plus size={16} />
                Track
              </button>
            </div>
          </div>

          {/* FILTER BAR */}
          <div className="bg-white rounded-xl p-3 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between mb-6">
            {/* TABS */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar">
              {["All (12)", "Interview", "Shortlisted", "Archived"].map(
                (tab, i) => (
                  <button
                    key={i}
                    className={`px-4 py-1.5 rounded-full text-xs whitespace-nowrap ${
                      i === 0
                        ? "bg-black text-white"
                        : "text-gray-500 bg-gray-100"
                    }`}
                  >
                    {tab}
                  </button>
                ),
              )}
            </div>

            {/* SORT */}
            <div className="relative w-full sm:w-auto">
              <Filter className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
              <select className="w-full sm:w-auto pl-8 pr-8 py-2 text-xs border rounded-lg bg-gray-50">
                <option>Newest</option>
                <option>Company</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-2 top-2.5" />
            </div>
          </div>

          {/* APPLICATION LIST */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-5 md:p-8 flex flex-col gap-5 md:grid md:grid-cols-12 md:items-center md:gap-6 shadow-premium group transition-all hover:bg-white">
              {/* Job */}
              <div className="flex items-center gap-4 md:col-span-4">
                <div className="w-14 h-14 bg-surface-container rounded-xl flex items-center justify-center overflow-hidden">
                  <img className="w-8 h-8 object-contain" src="..." />
                </div>
                <div>
                  <h4 className="text-title-lg font-semibold">
                    Senior Product Designer
                  </h4>
                  <p className="text-body-lg text-on-surface-variant">
                    Linear • Hybrid
                  </p>
                </div>
              </div>

              {/* Date */}
              <div className="flex justify-between md:block md:col-span-2 text-sm">
                <p>Oct 24, 2023</p>
                <p className="text-xs text-on-surface-variant">2 days ago</p>
              </div>

              {/* Status */}
              <div className="flex justify-between items-center md:justify-center md:col-span-2">
                <span className="bg-primary/5 text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase">
                  Shortlisted
                </span>
              </div>

              {/* Progress */}
              <div className="md:col-span-3">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-xs font-semibold">
                    <span>Interview Setup</span>
                    <span className="text-primary">60%</span>
                  </div>
                  <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                    <div className="w-[60%] h-full bg-primary"></div>
                  </div>
                  <p className="text-[11px] text-on-surface-variant flex items-center gap-1">
                    Waiting for recruiter to confirm slots
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="flex justify-end md:col-span-1">
                <button className="w-10 h-10 rounded-full hover:bg-surface-container flex items-center justify-center">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 md:p-8 flex flex-col gap-5 md:grid md:grid-cols-12 md:items-center md:gap-6 shadow-premium ring-2 ring-primary/10">
              <div className="flex items-center gap-4 md:col-span-4">
                <div className="w-14 h-14 bg-surface-container rounded-xl flex items-center justify-center">
                  <img className="w-8 h-8 object-contain" src="..." />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold">Lead UX Researcher</h4>
                    <Star className="w-4 h-4 text-yellow-500" />
                  </div>
                  <p className="text-on-surface-variant">Spotify • Remote</p>
                </div>
              </div>

              <div className="flex justify-between md:block md:col-span-2 text-sm">
                <p>Oct 20, 2023</p>
                <p className="text-xs text-on-surface-variant">6 days ago</p>
              </div>

              <div className="flex justify-between items-center md:justify-center md:col-span-2">
                <span className="bg-tertiary-container/10 text-tertiary px-3 py-1 rounded-full text-[10px] font-bold">
                  Interview Scheduled
                </span>
              </div>

              <div className="md:col-span-3">
                <div className="bg-white rounded-xl p-3 flex items-center gap-3 border border-primary/10">
                  <CalendarDays className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-[10px] font-bold text-primary">
                      TOMORROW • 10:00 AM
                    </p>
                    <p className="text-xs">Technical Round</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end md:col-span-1">
                <button className="bg-primary text-[10px] font-bold py-2 px-3 rounded-lg">
                  JOIN
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 md:p-8 flex flex-col gap-5 md:grid md:grid-cols-12 md:items-center md:gap-6 shadow-premium opacity-80">
              <div className="flex items-center gap-4 md:col-span-4">
                <div className="w-14 h-14 bg-surface-container rounded-xl flex items-center justify-center">
                  <img className="w-8 h-8 object-contain" src="..." />
                </div>
                <div>
                  <h4 className="font-semibold">Interface Architect</h4>
                  <p className="text-on-surface-variant">Studio J • On-site</p>
                </div>
              </div>

              <div className="flex justify-between md:block md:col-span-2 text-sm">
                <p>Oct 18, 2023</p>
                <p className="text-xs text-on-surface-variant">8 days ago</p>
              </div>

              <div className="flex justify-between items-center md:justify-center md:col-span-2">
                <span className="bg-outline-variant/20 px-3 py-1 rounded-full text-[10px]">
                  Applied
                </span>
              </div>

              <div className="md:col-span-3">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-xs">
                    <span>Review Stage</span>
                    <span>15%</span>
                  </div>
                  <div className="w-full h-1.5 bg-surface-container rounded-full">
                    <div className="w-[15%] h-full bg-outline"></div>
                  </div>
                  <p className="text-[11px] text-on-surface-variant">
                    Resume submitted
                  </p>
                </div>
              </div>

              <div className="flex justify-end md:col-span-1">
                <MoreVertical className="w-5 h-5" />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 md:p-8 flex flex-col gap-5 md:grid md:grid-cols-12 md:items-center md:gap-6 shadow-premium opacity-60">
              <div className="flex items-center gap-4 md:col-span-4">
                <div className="w-14 h-14 bg-surface-container rounded-xl flex items-center justify-center grayscale">
                  <img className="w-8 h-8 object-contain" src="..." />
                </div>
                <div>
                  <h4 className="font-semibold line-through">
                    Product Strategist
                  </h4>
                  <p className="text-on-surface-variant">X • Remote</p>
                </div>
              </div>

              <div className="flex justify-between md:block md:col-span-2 text-sm">
                <p>Oct 12, 2023</p>
                <p className="text-xs text-on-surface-variant">14 days ago</p>
              </div>

              <div className="flex justify-between items-center md:justify-center md:col-span-2">
                <span className="bg-error/5 text-error px-3 py-1 rounded-full text-[10px]">
                  Rejected
                </span>
              </div>

              <div className="md:col-span-3">
                <p className="text-xs text-error italic">
                  Moved forward with other candidates
                </p>
              </div>

              <div className="flex justify-end md:col-span-1">
                <Archive className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* INSIGHTS */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* LEFT */}
            <div className="lg:col-span-2 bg-gradient-to-br from-primary to-primary-container p-6 rounded-xl ">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                You're 40% faster
              </h3>

              <p className="text-sm opacity-90 mb-4">
                Faster applications increase success rate.
              </p>

              <button className="bg-white text-primary px-4 py-2 rounded-lg text-sm font-semibold">
                View Guide
              </button>
            </div>

            {/* RIGHT */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="text-sm font-semibold mb-4">Deadlines</h4>

              <div className="space-y-4 text-xs">
                <div className="flex gap-2 items-center">
                  <FileText size={14} />
                  Design Task (2 days)
                </div>

                <div className="flex gap-2 items-center">
                  <Mic size={14} />
                  Video Intro (5 days)
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* MOBILE NAV */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-14 bg-white border-t flex justify-around items-center text-xs">
        <LayoutDashboard size={18} />
        <Briefcase size={18} className="text-primary" />
        <Search size={20} />
        <MessageCircle size={18} />
        <User size={18} />
      </nav>
    </div>
  );
}

"use client";

import {
  Plus,
  ChevronDown,
  MoreVertical,
  Star,
  CalendarDays,
  Archive,
  FileText,
  Mic,
  LayoutDashboard,
  Briefcase,
  Search,
  MessageCircle,
  User,
  Filter,
  Calendar,
  FileText as FileIcon,
} from "lucide-react";

/* ---------------- DESIGN SYSTEM ---------------- */

const primaryGradient =
  "bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:opacity-90 transition";

const Card = ({ children }: any) => (
  <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-sm transition">
    {children}
  </div>
);

/* ---------------- PAGE ---------------- */

export default function Page() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">

        {/* HEADER */}
        <div className="flex flex-col gap-6">

          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Track Applications
            </h2>

            <p className="text-gray-500 mt-2 max-w-md">
              Managing 12 opportunities • 2 interviews this week
            </p>
          </div>

          {/* ACTIONS */}
          <div className="flex flex-col sm:flex-row gap-3">

            <button className="px-5 py-3 rounded-xl border hover:bg-gray-50 transition text-sm font-medium">
              Export Report
            </button>

            <button className={`px-5 py-3 rounded-xl text-sm font-semibold ${primaryGradient}`}>
              <Plus className="inline w-4 h-4 mr-1" />
              Track
            </button>

          </div>

        </div>

        {/* FILTER BAR */}
        <div className="bg-white border rounded-2xl p-4 flex flex-col sm:flex-row justify-between gap-3">

          {/* TABS */}
          <div className="flex gap-2 overflow-x-auto">

            {["All (12)", "Interview", "Shortlisted", "Archived"].map(
              (tab, i) => (
                <button
                  key={i}
                  className={`px-4 py-2 rounded-full text-xs whitespace-nowrap ${
                    i === 0
                      ? "bg-black text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {tab}
                </button>
              )
            )}

          </div>

          {/* SORT */}
          <div className="relative">

            <Filter className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />

            <select className="pl-8 pr-8 py-2 text-xs border rounded-lg bg-gray-50">
              <option>Newest</option>
              <option>Company</option>
            </select>

            <ChevronDown className="w-4 h-4 absolute right-2 top-2.5 text-gray-400" />

          </div>

        </div>

        {/* LIST */}
        <div className="space-y-5">

          {/* CARD 1 */}
          <Card>
            <div className="grid md:grid-cols-12 gap-6 items-center">

              {/* JOB */}
              <div className="md:col-span-4 flex items-center gap-4">

                <div className="w-14 h-14 bg-gray-50 border rounded-xl" />

                <div>
                  <h4 className="font-semibold">
                    Senior Product Designer
                  </h4>
                  <p className="text-sm text-gray-500">
                    Linear • Hybrid
                  </p>
                </div>

              </div>

              {/* DATE */}
              <div className="md:col-span-2 text-sm">
                <p>Oct 24, 2023</p>
                <p className="text-xs text-gray-400">2 days ago</p>
              </div>

              {/* STATUS */}
              <div className="md:col-span-2">
                <span className="px-3 py-1 rounded-full text-xs bg-emerald-50 text-emerald-600 font-medium">
                  Shortlisted
                </span>
              </div>

              {/* PROGRESS */}
              <div className="md:col-span-3">

                <div className="flex justify-between text-xs mb-1">
                  <span>Interview Setup</span>
                  <span className="text-emerald-600">60%</span>
                </div>

                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-[60%] bg-emerald-500"></div>
                </div>

              </div>

              {/* ACTION */}
              <div className="md:col-span-1 flex justify-end">
                <MoreVertical className="text-gray-400" />
              </div>

            </div>
          </Card>

          {/* CARD 2 */}
          <Card>
            <div className="grid md:grid-cols-12 gap-6 items-center">

              <div className="md:col-span-4 flex items-center gap-4">
                <div className="w-14 h-14 bg-gray-50 border rounded-xl" />
                <div>
                  <h4 className="font-semibold flex items-center gap-2">
                    Lead UX Researcher
                    <Star className="w-4 h-4 text-yellow-500" />
                  </h4>
                  <p className="text-sm text-gray-500">Spotify • Remote</p>
                </div>
              </div>

              <div className="md:col-span-2 text-sm">
                <p>Oct 20, 2023</p>
                <p className="text-xs text-gray-400">6 days ago</p>
              </div>

              <div className="md:col-span-2">
                <span className="px-3 py-1 rounded-full text-xs bg-blue-50 text-blue-600">
                  Interview Scheduled
                </span>
              </div>

              <div className="md:col-span-3">
                <div className="flex items-center gap-3 bg-gray-50 border rounded-xl p-3">
                  <CalendarDays className="text-emerald-600 w-4 h-4" />
                  <div>
                    <p className="text-xs font-semibold text-emerald-600">
                      TOMORROW 10:00 AM
                    </p>
                    <p className="text-xs text-gray-500">
                      Technical Round
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-1 flex justify-end">
                <button className={primaryGradient + " px-3 py-1 text-xs rounded-lg"}>
                  JOIN
                </button>
              </div>

            </div>
          </Card>

          {/* CARD 3 */}
          <Card className="opacity-60">

            <div className="grid md:grid-cols-12 gap-6 items-center">

              <div className="md:col-span-4 flex items-center gap-4">

                <div className="w-14 h-14 bg-gray-50 border rounded-xl grayscale" />

                <div>
                  <h4 className="font-semibold line-through">
                    Product Strategist
                  </h4>
                  <p className="text-sm text-gray-500">
                    X • Remote
                  </p>
                </div>

              </div>

              <div className="md:col-span-2 text-sm">
                <p>Oct 12, 2023</p>
                <p className="text-xs text-gray-400">14 days ago</p>
              </div>

              <div className="md:col-span-2">
                <span className="px-3 py-1 rounded-full text-xs bg-red-50 text-red-500">
                  Rejected
                </span>
              </div>

              <div className="md:col-span-3">
                <p className="text-xs text-red-500 italic">
                  Moved forward with other candidates
                </p>
              </div>

              <div className="md:col-span-1 flex justify-end">
                <Archive className="text-gray-400" />
              </div>

            </div>

          </Card>

        </div>

        {/* INSIGHTS */}
        <div className="grid lg:grid-cols-3 gap-6">

          <div className="lg:col-span-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-6 rounded-2xl">
            <h3 className="text-xl font-bold">
              You're 40% faster than average
            </h3>

            <p className="text-sm mt-2 opacity-90">
              Faster applications increase your interview success rate.
            </p>

            <button className="mt-4 bg-white text-emerald-600 px-4 py-2 rounded-xl text-sm font-semibold">
              View Guide
            </button>
          </div>

          <Card>
            <h4 className="font-semibold mb-4">Deadlines</h4>

            <div className="space-y-3 text-sm text-gray-600">

              <div className="flex gap-2">
                <FileIcon className="w-4 h-4 text-emerald-600" />
                Design Task (2 days)
              </div>

              <div className="flex gap-2">
                <Mic className="w-4 h-4 text-emerald-600" />
                Video Intro (5 days)
              </div>

            </div>

          </Card>

        </div>

      </main>

      {/* MOBILE NAV */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around items-center h-14">

        <LayoutDashboard size={18} />
        <Briefcase size={18} className="text-emerald-600" />
        <Search size={18} />
        <MessageCircle size={18} />
        <User size={18} />

      </nav>

    </div>
  );
}
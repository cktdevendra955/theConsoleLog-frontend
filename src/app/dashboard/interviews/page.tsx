"use client";

import {
  Calendar,
  Clock,
  Video,
  MapPin,
  MoreHorizontal,
  List,
  CalendarDays,
  Check,
  Lightbulb,
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

export default function Interviews() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <main className="px-4 sm:px-6 lg:px-8 py-10 max-w-6xl mx-auto space-y-10">

        {/* HEADER */}
        <div className="space-y-6">

          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Interviews
            </h2>
            <p className="text-gray-500 mt-2 max-w-md">
              Manage your upcoming meetings and technical rounds.
            </p>
          </div>

          {/* VIEW TOGGLE */}
          <div className="inline-flex p-1 bg-gray-50 border rounded-xl">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white shadow-sm text-emerald-600 font-medium text-sm">
              <List size={16} />
              List
            </button>

            <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-500 text-sm">
              <CalendarDays size={16} />
              Calendar
            </button>
          </div>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* LEFT */}
          <div className="lg:col-span-8 space-y-6">

            {/* HEADER */}
            <div className="flex justify-between items-center">
              <h3 className="text-xs uppercase tracking-widest text-gray-400">
                Upcoming Rounds (3)
              </h3>

              <button className="text-sm text-emerald-600 hover:underline">
                View History
              </button>
            </div>

            {/* CARD 1 */}
            <Card>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-4">

                <div className="flex gap-4">

                  <div className="w-12 h-12 bg-gray-50 border rounded-xl flex items-center justify-center" />

                  <div>
                    <h4 className="text-lg font-semibold">
                      Senior Product Designer
                    </h4>

                    <p className="text-sm text-gray-500">
                      Linear • Technical Round
                    </p>

                    <div className="flex gap-4 mt-2 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} /> Tomorrow
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} /> 10:00 AM
                      </span>
                    </div>
                  </div>
                </div>

                <span className="self-start text-xs px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 font-medium">
                  Priority
                </span>

              </div>

              <div className="mt-5 flex flex-col sm:flex-row sm:justify-between gap-3 sm:items-center">

                <span className="text-sm text-gray-500 flex items-center gap-2">
                  <Video size={14} className="text-emerald-600" />
                  Google Meet
                </span>

                <button className={primaryGradient + " px-5 py-2 rounded-xl text-sm"}>
                  Join Interview
                </button>

              </div>
            </Card>

            {/* CARD 2 */}
            <Card>
              <div className="flex justify-between">

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gray-50 border rounded-xl" />

                  <div>
                    <h4 className="text-lg font-semibold">
                      Design Systems Lead
                    </h4>
                    <p className="text-sm text-gray-500">
                      Flow Systems
                    </p>
                  </div>
                </div>

                <MoreHorizontal className="text-gray-400" />

              </div>

              <div className="mt-5 flex flex-col sm:flex-row sm:justify-between gap-3 bg-gray-50 border rounded-xl p-4">

                <div className="flex items-center gap-2">
                  <img className="w-7 h-7 rounded-full border" />
                  <span className="text-sm">Sarah Jenkins</span>
                </div>

                <div className="flex gap-2">
                  <button className="text-sm text-emerald-600">
                    Details
                  </button>

                  <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-500">
                    Pending
                  </span>
                </div>

              </div>
            </Card>

            {/* CARD 3 */}
            <Card>

              <div className="flex gap-4">

                <div className="w-12 h-12 bg-gray-50 border rounded-xl" />

                <div>
                  <h4 className="text-lg font-semibold">
                    UI/UX Architect
                  </h4>
                  <p className="text-sm text-gray-500">
                    Neura AI
                  </p>
                </div>

              </div>

              <div className="mt-5 flex flex-col sm:flex-row sm:justify-between gap-3">

                <span className="text-sm text-gray-500 flex items-center gap-2">
                  <MapPin size={14} className="text-emerald-600" />
                  In-person
                </span>

                <button className="px-5 py-2 rounded-xl border hover:bg-gray-50 transition text-sm">
                  Add to Calendar
                </button>

              </div>

            </Card>

          </div>

          {/* RIGHT */}
          <div className="lg:col-span-4 space-y-6">

            {/* PREP */}
            <Card>
              <h3 className="font-semibold">Preparation Guide</h3>

              <div className="mt-4 space-y-2 text-sm text-gray-600">

                <div className="flex items-center gap-2">
                  <Check className="text-emerald-600 w-4 h-4" />
                  Research company
                </div>

                <div className="flex items-center gap-2">
                  <Check className="text-emerald-600 w-4 h-4" />
                  Review case studies
                </div>

              </div>

              <button className="mt-4 w-full py-2 rounded-xl border hover:bg-gray-50 transition text-sm">
                View Checklist
              </button>
            </Card>

            {/* STATS */}
            <Card>
              <div className="grid grid-cols-2 text-center">

                <div>
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-sm text-gray-500">Completed</p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-emerald-600">85%</p>
                  <p className="text-sm text-gray-500">Success</p>
                </div>

              </div>
            </Card>

            {/* TIP */}
            <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 flex gap-3">
              <Lightbulb className="text-emerald-600" />
              <p className="text-sm text-gray-600">
                Send a thank-you note within 24 hours.
              </p>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}
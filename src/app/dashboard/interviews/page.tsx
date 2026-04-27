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

export default function Interviews() {
  return (
    <div className="bg-surface text-on-surface antialiased">
      <main className=" px-4 sm:px-6 lg:px-8 py-6 sm:py-8 min-h-screen">
        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="flex flex-col gap-6 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight tracking-tight">
                Interviews
              </h2>
              <p className="text-sm sm:text-base text-on-surface-variant mt-2 max-w-md">
                Manage your upcoming meetings and technical rounds.
              </p>
            </div>

            {/* VIEW TOGGLE */}
            <div className="flex w-full sm:w-fit p-1 bg-surface-container-low rounded-xl">
              <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-lg bg-white shadow-sm text-primary font-semibold text-xs sm:text-sm">
                <List size={16} />
                List
              </button>
              <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-on-surface-variant text-xs sm:text-sm">
                <CalendarDays size={16} />
                Calendar
              </button>
            </div>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

            {/* LEFT CONTENT */}
            <div className="lg:col-span-8 space-y-5">

              {/* TITLE */}
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wide text-on-surface-variant">
                  Upcoming Rounds (3)
                </h3>
                <a className="text-xs sm:text-sm font-semibold text-primary cursor-pointer">
                  View History
                </a>
              </div>

              {/* CARD 1 */}
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-4">

                  <div className="flex gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-surface-container-low rounded-xl flex items-center justify-center p-2">
                      <img src="https://via.placeholder.com/40" />
                    </div>

                    <div>
                      <h4 className="text-sm sm:text-lg font-semibold">
                        Senior Product Designer
                      </h4>
                      <p className="text-xs sm:text-sm text-on-surface-variant">
                        Linear • Technical Round
                      </p>

                      <div className="flex flex-col sm:flex-row sm:gap-4 mt-2 text-xs sm:text-sm">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} /> Tomorrow
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} /> 10:00 AM
                        </span>
                      </div>
                    </div>
                  </div>

                  <span className="text-[10px] bg-primary/10 text-primary px-2 py-1 rounded-full font-bold self-start">
                    Priority
                  </span>
                </div>

                <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:justify-between sm:items-center">
                  <span className="text-xs sm:text-sm text-on-surface-variant flex items-center gap-2">
                    <Video size={14} /> Google Meet
                  </span>

                  <button className="w-full sm:w-auto bg-primary-gradient px-4 py-2 rounded-full text-sm font-semibold">
                    Join Interview
                  </button>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
                <div className="flex flex-col gap-4">

                  <div className="flex justify-between">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-surface-container-low rounded-xl"></div>

                      <div>
                        <h4 className="text-sm sm:text-lg font-semibold">
                          Design Systems Lead
                        </h4>
                        <p className="text-xs sm:text-sm text-on-surface-variant">
                          Flow Systems
                        </p>
                      </div>
                    </div>

                    <MoreHorizontal size={18} />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:justify-between gap-3 bg-surface-container-low/50 p-3 rounded-xl">

                    <div className="flex items-center gap-2">
                      <img className="w-7 h-7 rounded-full" src="https://via.placeholder.com/30" />
                      <span className="text-xs">Sarah Jenkins</span>
                    </div>

                    <div className="flex gap-2">
                      <button className="text-xs px-3 py-1 text-primary">
                        Details
                      </button>
                      <button className="text-xs px-3 py-1 bg-surface-container-highest rounded-full opacity-60">
                        Pending
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm">
                <div className="flex flex-col gap-4">

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-surface-container-low rounded-xl"></div>

                    <div>
                      <h4 className="text-sm sm:text-lg font-semibold">
                        UI/UX Architect
                      </h4>
                      <p className="text-xs sm:text-sm text-on-surface-variant">
                        Neura AI
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:justify-between gap-3">

                    <span className="text-xs sm:text-sm flex items-center gap-2 text-on-surface-variant">
                      <MapPin size={14} /> In-person
                    </span>

                    <button className="w-full sm:w-auto px-4 py-2 bg-surface-container-high rounded-full text-sm">
                      Add to Calendar
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT SIDEBAR */}
            <div className="lg:col-span-4 space-y-5">

              {/* PREP */}
              <div className="bg-surface-container-low rounded-xl p-5">
                <h3 className="text-sm font-semibold mb-2">
                  Preparation Guide
                </h3>

                <div className="space-y-3 mt-4">
                  <div className="flex gap-2 text-xs">
                    <Check size={14} /> Research company
                  </div>
                  <div className="flex gap-2 text-xs">
                    <Check size={14} /> Review case studies
                  </div>
                </div>

                <button className="w-full mt-4 py-2 text-sm bg-white rounded-lg">
                  View Checklist
                </button>
              </div>

              {/* STATS */}
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-xl font-bold">12</p>
                    <p className="text-xs">Completed</p>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-primary">85%</p>
                    <p className="text-xs">Success</p>
                  </div>
                </div>
              </div>

              {/* TIP */}
              <div className="p-4 bg-tertiary-fixed rounded-xl flex gap-3">
                <Lightbulb size={18} />
                <p className="text-xs">
                  Send a thank-you note within 24 hours.
                </p>
              </div>

            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
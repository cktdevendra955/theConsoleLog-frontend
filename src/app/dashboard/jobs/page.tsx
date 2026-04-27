"use client";

import { Sparkles, ArrowRight, Trash2 } from "lucide-react";

export default function Page() {
  return (
    <div>
      <main className="min-h-screen">
        <div className=" pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

          {/* HEADER */}
          <div className="flex flex-col gap-6 mb-8">

            <div>
              <span className="text-[10px] font-bold tracking-widest text-primary uppercase">
                Curation
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mt-1">
                Saved Jobs
              </h2>

              <p className="text-sm sm:text-base text-on-surface-variant mt-2 max-w-md">
                Manage your shortlisted opportunities and track alignment.
              </p>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button className="w-full sm:w-auto px-4 py-2.5 rounded-full bg-surface-container-high text-primary font-semibold text-sm">
                Filter Match %
              </button>

              <button className="w-full sm:w-auto px-4 py-2.5 rounded-full bg-gradient-to-br from-primary to-primary-container font-semibold text-sm">
                Search Jobs
              </button>
            </div>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

            {/* FEATURED CARD */}
            <div className="lg:col-span-8 bg-white p-5 sm:p-6 lg:p-8 rounded-2xl shadow-sm">

              <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mb-6">

                <div className="flex gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-surface-container rounded-xl flex items-center justify-center">
                    <img src="https://via.placeholder.com/40" />
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold">
                      Senior Product Designer
                    </h3>
                    <p className="text-xs sm:text-sm text-on-surface-variant">
                      Linear · Remote
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end">
                  <span className="text-[10px] px-3 py-1 rounded-full bg-primary/10 text-primary font-bold">
                    98% MATCH
                  </span>
                  <p className="text-sm sm:text-base font-semibold mt-1">
                    $180k – $240k
                  </p>
                </div>
              </div>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mb-6">
                {["Figma", "Design Systems", "Strategy"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-xs rounded-lg bg-surface-container-low"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* ACTION */}
              <div className="flex flex-col sm:flex-row sm:justify-between gap-3 pt-4 border-t">
                <p className="text-xs text-on-surface-variant">
                  Saved 2 days ago
                </p>

                <div className="flex gap-2">
                  <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface-container-low text-error">
                    <Trash2 size={16} />
                  </button>

                  <button className="px-4 sm:px-6 py-2.5 rounded-xl bg-gradient-to-br from-primary to-primary-container text-sm font-bold">
                    Apply
                  </button>
                </div>
              </div>
            </div>

            {/* INSIGHT CARD */}
            <div className="lg:col-span-4 bg-primary p-5 sm:p-6 rounded-2xl  relative overflow-hidden">
              <Sparkles className="mb-3" />

              <h4 className="text-lg font-bold mb-2">
                Role Alignment
              </h4>

              <p className="text-xs sm:text-sm mb-4 opacity-90">
                Your profile matches 98% of requirements.
              </p>

              <button className="flex items-center gap-2 text-sm font-semibold border-b border-white/40">
                View Analysis
                <ArrowRight size={14} />
              </button>
            </div>

            {/* SMALL CARDS */}
            {[
              "Lead UX Researcher",
              "Interaction Designer",
              "3D Visualizer",
            ].map((title, i) => (
              <div
                key={i}
                className="lg:col-span-4 bg-white p-5 rounded-2xl shadow-sm"
              >
                <div className="flex justify-between mb-4">
                  <div className="w-10 h-10 bg-surface-container rounded-lg" />
                  <span className="text-[10px] px-2 py-1 rounded-full bg-surface-container-high">
                    {80 + i * 5}% MATCH
                  </span>
                </div>

                <h3 className="text-sm font-bold">{title}</h3>
                <p className="text-xs text-on-surface-variant mb-2">
                  Company · Location
                </p>

                <p className="text-primary text-xs font-semibold mb-4">
                  Salary Info
                </p>

                <div className="flex gap-2">
                  <button className="flex-1 py-2 rounded-lg bg-surface-container-low text-primary text-xs font-semibold">
                    Apply
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface-container-low text-on-surface-variant">
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}

            {/* EMPTY STATE */}
            <div className="lg:col-span-12 mt-6 bg-surface-container-low/50 p-6 sm:p-10 rounded-2xl text-center border border-dashed">

              <h3 className="text-base sm:text-lg font-bold mb-2">
                Want more relevant roles?
              </h3>

              <p className="text-xs sm:text-sm text-on-surface-variant mb-4 max-w-sm mx-auto">
                Update preferences to get better matches.
              </p>

              <button className="px-5 py-2.5 rounded-xl bg-surface-container-high text-sm font-semibold">
                Update Preferences
              </button>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
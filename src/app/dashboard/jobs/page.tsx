"use client";

import { Sparkles, ArrowRight, Trash2 } from "lucide-react";

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
            <span className="text-xs font-bold tracking-widest text-emerald-600 uppercase">
              Curation
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-1 tracking-tight">
              Saved Jobs
            </h2>

            <p className="text-gray-500 mt-2 max-w-md">
              Manage your shortlisted opportunities and track alignment.
            </p>
          </div>

          {/* ACTIONS */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="px-5 py-3 rounded-xl border hover:bg-gray-50 transition text-sm font-medium">
              Filter Match %
            </button>

            <button className={`px-5 py-3 rounded-xl text-sm font-semibold ${primaryGradient}`}>
              Search Jobs
            </button>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* FEATURED CARD */}
          <div className="lg:col-span-8">
            <Card>

              {/* HEADER */}
              <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">

                <div className="flex gap-4">

                  <div className="w-12 h-12 bg-gray-50 border rounded-xl flex items-center justify-center" />

                  <div>
                    <h3 className="text-xl font-semibold">
                      Senior Product Designer
                    </h3>

                    <p className="text-sm text-gray-500">
                      Linear · Remote
                    </p>
                  </div>

                </div>

                <div className="text-right">
                  <span className="text-xs px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 font-medium">
                    98% MATCH
                  </span>
                  <p className="text-lg font-semibold mt-2">
                    $180k – $240k
                  </p>
                </div>

              </div>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 mb-6">
                {["Figma", "Design Systems", "Strategy"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-lg bg-gray-50 border"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* ACTIONS */}
              <div className="flex flex-col sm:flex-row justify-between gap-3 pt-5 border-t">

                <p className="text-xs text-gray-500">
                  Saved 2 days ago
                </p>

                <div className="flex gap-2">

                  <button className="w-10 h-10 flex items-center justify-center rounded-xl border hover:bg-gray-50 transition text-red-500">
                    <Trash2 size={16} />
                  </button>

                  <button className={`px-5 py-2 rounded-xl text-sm font-semibold ${primaryGradient}`}>
                    Apply
                  </button>

                </div>

              </div>

            </Card>
          </div>

          {/* INSIGHT CARD */}
          <div className="lg:col-span-4">
            <div className="bg-emerald-600 text-white rounded-2xl p-6 relative overflow-hidden">

              <Sparkles className="mb-4" />

              <h4 className="text-lg font-semibold">
                Role Alignment
              </h4>

              <p className="text-sm mt-2 opacity-90">
                Your profile matches 98% of requirements.
              </p>

              <button className="mt-5 flex items-center gap-2 text-sm font-medium border-b border-white/40">
                View Analysis
                <ArrowRight size={14} />
              </button>

            </div>
          </div>

          {/* SMALL CARDS */}
          {[
            "Lead UX Researcher",
            "Interaction Designer",
            "3D Visualizer",
          ].map((title, i) => (
            <div key={i} className="lg:col-span-4">
              <Card>

                <div className="flex justify-between mb-4">

                  <div className="w-10 h-10 bg-gray-50 border rounded-lg" />

                  <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                    {80 + i * 5}% MATCH
                  </span>

                </div>

                <h3 className="text-sm font-semibold">{title}</h3>
                <p className="text-xs text-gray-500">
                  Company · Location
                </p>

                <p className="text-emerald-600 text-xs font-medium mt-2">
                  Salary Info
                </p>

                <div className="flex gap-2 mt-4">

                  <button className="flex-1 py-2 rounded-lg border hover:bg-gray-50 text-sm">
                    Apply
                  </button>

                  <button className="w-10 h-10 flex items-center justify-center rounded-lg border text-gray-500 hover:bg-gray-50">
                    <Trash2 size={14} />
                  </button>

                </div>

              </Card>
            </div>
          ))}

          {/* EMPTY STATE */}
          <div className="lg:col-span-12">
            <div className="bg-gray-50 border border-dashed rounded-2xl p-10 text-center">

              <h3 className="text-lg font-semibold">
                Want more relevant roles?
              </h3>

              <p className="text-sm text-gray-500 mt-2 max-w-sm mx-auto">
                Update preferences to get better matches.
              </p>

              <button className="mt-5 px-6 py-3 rounded-xl border hover:bg-white transition text-sm">
                Update Preferences
              </button>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
"use client";

import { Heart, Filter, ArrowUpDown } from "lucide-react";

/* ---------------- DESIGN SYSTEM ---------------- */

const primaryGradient =
  "bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:opacity-90 transition";

const Card = ({ children }: any) => (
  <div className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden">
    {children}
  </div>
);

/* ---------------- PAGE ---------------- */

export default function Portfolio() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">

        {/* HERO */}
        <section className="space-y-6">

          <div>
            <span className="text-xs font-bold tracking-widest text-emerald-600 uppercase">
              New Arrival
            </span>

            <h1 className="text-3xl md:text-5xl font-bold mt-2">
              Choose Your Professional Aesthetic
            </h1>
          </div>

          {/* HERO CARD */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-lg group">

            <img
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAEg-xaibUbEUrd9T416v1opq_EYC40IIRzx15KkenMsU1_Y7eSU3DAn-Dcq5FfvqDrLkRbvwNCL6OxVKcGjH-WU8NVZ1fpeFAoJEZZl9xOAgg3zi2T4F410RaeezmG-59tED-oxbGfA3A2_xpARhsADYYlTDiuaqK4ZPkW6bO2x4rUABJrTlAawDcT7sfY2QYFWwhqL9yFpHjyaeoX4nCLehhqC-71bSkUWyPVsqW6HnV1sfOynGPeOqhug7RQxI43XPNgwg9j3Ud"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* CONTENT */}
            <div className="absolute bottom-0 w-full p-6 md:p-10 flex flex-col md:flex-row justify-between gap-6 text-white">

              <div className="max-w-xl">

                <div className="flex gap-2 mb-3">
                  <span className="px-3 py-1 text-xs bg-white/10 border border-white/20 rounded-full">
                    Editors' Choice
                  </span>
                  <span className="px-3 py-1 text-xs bg-white/10 border border-white/20 rounded-full">
                    Editorial
                  </span>
                </div>

                <h2 className="text-xl md:text-2xl font-semibold">
                  The Architect Pro
                </h2>

                <p className="text-sm opacity-90 mt-2">
                  A modernist framework designed for high-end creative firms.
                </p>

              </div>

              <div className="flex gap-3">

                <button className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition text-sm backdrop-blur">
                  Live Preview
                </button>

                <button className={`px-6 py-3 rounded-xl text-sm font-semibold ${primaryGradient}`}>
                  Apply Theme
                </button>

              </div>

            </div>

          </div>
        </section>

        {/* HEADER */}
        <section className="flex justify-between items-center">

          <h3 className="text-xl md:text-2xl font-semibold">
            Curated Designs
          </h3>

          <div className="flex gap-2">

            <button className="p-2 rounded-xl border hover:bg-gray-50 transition">
              <Filter className="w-5 h-5 text-gray-600" />
            </button>

            <button className="p-2 rounded-xl border hover:bg-gray-50 transition">
              <ArrowUpDown className="w-5 h-5 text-gray-600" />
            </button>

          </div>

        </section>

        {/* GRID */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* CARD */}
          <Card>

            <div className="relative aspect-[4/3] overflow-hidden">

              <img
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkoeQXjW5KYytUsMZoz5pm0QMFlMrh6WypZnZ1iFCZm29UeBPfzC8vi7jyJ2vCk-lLaqkOn75B1B350rYBz44STxhbuNiRAsfMaQ-xTdaTU-0FElwP46VB1uCKItjcPh7Ozh875QabNecVpIS18CENVWerfRG9DI3BB2DW423Fslaumdsc6Fi-Gh5wcxoUDuNkgijadJDDHHOnkv9qMENimOUiwcq0EYX8T1aFWuwSiVM0TfckGQ9gJKPdMGRMBBq3Nj9qSyNdHrSE"
              />

              <button className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center hover:text-emerald-600 transition">
                <Heart className="w-5 h-5" />
              </button>

            </div>

            <div className="p-5 space-y-4">

              <div className="flex gap-2">

                <span className="text-xs px-2 py-1 rounded bg-emerald-50 text-emerald-600 font-medium">
                  MINIMAL
                </span>

                <span className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-600">
                  DARK
                </span>

              </div>

              <h4 className="font-semibold text-lg">
                Stellar Minimal
              </h4>

              <p className="text-sm text-gray-500">
                Clean typography with strong spacing system.
              </p>

              <div className="flex gap-2 pt-2">

                <button className="flex-1 py-2 rounded-xl border hover:bg-gray-50 text-sm">
                  Preview
                </button>

                <button className={`flex-1 py-2 rounded-xl text-sm font-semibold ${primaryGradient}`}>
                  Apply
                </button>

              </div>

            </div>

          </Card>

        </section>

      </main>
    </div>
  );
} 
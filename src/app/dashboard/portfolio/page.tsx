"use client";

import { Heart, Filter, ArrowUpDown } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="bg-background text-on-background selection:bg-primary/20">
      <div className="flex min-h-screen">
        <main className="flex-1 px-4 py-8 md:p-12">
          
          {/* HERO SECTION */}
          <section className="mb-12 md:mb-16">
            <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-6 md:mb-8 gap-4">
              <div>
                <span className="label-md text-primary font-bold tracking-[0.2em] uppercase mb-3 block">
                  New Arrival
                </span>

                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight max-w-2xl">
                  Choose Your Professional Aesthetic
                </h1>
              </div>
            </div>

            {/* HERO CARD */}
            <div className="relative h-[320px] sm:h-[400px] md:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden shadow-ambient group">
              <img
                alt="Featured theme background"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAEg-xaibUbEUrd9T416v1opq_EYC40IIRzx15KkenMsU1_Y7eSU3DAn-Dcq5FfvqDrLkRbvwNCL6OxVKcGjH-WU8NVZ1fpeFAoJEZZl9xOAgg3zi2T4F410RaeezmG-59tED-oxbGfA3A2_xpARhsADYYlTDiuaqK4ZPkW6bO2x4rUABJrTlAawDcT7sfY2QYFWwhqL9yFpHjyaeoX4nCLehhqC-71bSkUWyPVsqW6HnV1sfOynGPeOqhug7RQxI43XPNgwg9j3Ud"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

              <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-12 w-full flex flex-col md:flex-row md:justify-between md:items-end gap-6">
                
                <div className="max-w-lg">
                  <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                    <span className="px-3 py-1 bg-tertiary-fixed-dim/20 backdrop-blur-md rounded-full text-xs font-semibold uppercase border border-tertiary-fixed-dim/30">
                      Editors' Choice
                    </span>
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold uppercase border border-white/20">
                      Editorial
                    </span>
                  </div>

                  <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                    The Architect Pro
                  </h2>

                  <p className="text-xs sm:text-sm md:text-base line-clamp-2">
                    A high-contrast, modernist framework designed for structural designers and high-end creative firms.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <button className="w-full sm:w-auto px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-xl text-sm">
                    Live Preview
                  </button>

                  <button className="w-full sm:w-auto px-6 py-3 bg-gradient-primary rounded-xl text-sm shadow-lg">
                    Apply Theme
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* GRID SECTION */}
          <section>
            <div className="flex items-center justify-between mb-8 md:mb-12">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                Curated Designs
              </h3>

              <div className="flex gap-2">
                <button className="p-2 rounded-xl bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high transition-colors">
                  <Filter className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-xl bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high transition-colors">
                  <ArrowUpDown className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* RESPONSIVE GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

              {/* CARD 1 */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-ambient transition-all duration-300">
                
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    alt="Stellar Minimal theme"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkoeQXjW5KYytUsMZoz5pm0QMFlMrh6WypZnZ1iFCZm29UeBPfzC8vi7jyJ2vCk-lLaqkOn75B1B350rYBz44STxhbuNiRAsfMaQ-xTdaTU-0FElwP46VB1uCKItjcPh7Ozh875QabNecVpIS18CENVWerfRG9DI3BB2DW423Fslaumdsc6Fi-Gh5wcxoUDuNkgijadJDDHHOnkv9qMENimOUiwcq0EYX8T1aFWuwSiVM0TfckGQ9gJKPdMGRMBBq3Nj9qSyNdHrSE"
                  />

                  <div className="absolute inset-0 bg-on-background/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div className="absolute top-4 right-4">
                    <button className="h-10 w-10 glass-card rounded-full flex items-center justify-center text-on-surface hover:text-primary transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="p-4 md:p-6">
                  <div className="flex gap-2 mb-3">
                    <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                      MINIMAL
                    </span>
                    <span className="text-[10px] font-bold text-secondary bg-secondary/10 px-2 py-1 rounded">
                      DARK MODE
                    </span>
                  </div>

                  <h4 className="text-base md:text-lg font-semibold mb-2">
                    Stellar Minimal
                  </h4>

                  <p className="text-xs md:text-sm text-on-surface-variant mb-4 line-clamp-2">
                    Ultra-clean typography meets expansive negative space for the modern individualist.
                  </p>

                  <div className="flex gap-2">
                    <button className="flex-1 py-2 md:py-3 text-sm bg-surface-container-low rounded-xl">
                      Preview
                    </button>
                    <button className="flex-1 py-2 md:py-3 text-sm bg-gradient-primary rounded-xl">
                      Apply
                    </button>
                  </div>
                </div>
              </div>

              {/* 👉 COPY SAME CARD STRUCTURE FOR OTHER CARDS */}
              
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
"use client";

import Link from "next/link";
import {
  ArrowRight,
  Bolt,
  Verified,
  TrendingUp,
  Brain,
} from "lucide-react";
import { ROUTES } from "./route/routes";

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      
      {/* NAVBAR */}
      <header className="fixed top-0 w-full bg-white/70 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight">
            DevPlatform
          </h1>

          <Link
            href={ROUTES.DASHBOARD}
            className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black"
          >
            Dashboard <ArrowRight size={16} />
          </Link>
        </div>
      </header>

      {/* HERO */}
      <main className="pt-32 pb-20">
        <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs bg-gray-100 rounded-full">
              <Bolt size={14} /> Fast & Scalable Platform
            </span>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Build Your Future With <br />
              <span className="text-gray-500">
                Smart Tech Platform
              </span>
            </h1>

            <p className="text-gray-600 text-lg max-w-lg">
              A modern platform for developers, startups, and job seekers to
              connect, grow, and scale faster.
            </p>

            <div className="flex gap-4">
              <Link
                href={ROUTES.DASHBOARD}
                className="px-6 py-3 bg-black text-white rounded-xl flex items-center gap-2 hover:bg-gray-800 transition"
              >
                Go to Dashboard <ArrowRight size={16} />
              </Link>

              <button className="px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-100 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* RIGHT CONTENT (FEATURE CARDS) */}
          <div className="grid grid-cols-2 gap-4">
            
            <div className="p-5 rounded-2xl border border-gray-200 shadow-sm">
              <TrendingUp className="mb-3 text-gray-700" />
              <h3 className="font-semibold">Growth</h3>
              <p className="text-sm text-gray-500">
                Scale your startup faster
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-gray-200 shadow-sm">
              <Verified className="mb-3 text-gray-700" />
              <h3 className="font-semibold">Trusted</h3>
              <p className="text-sm text-gray-500">
                Verified companies & users
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-gray-200 shadow-sm">
              <Brain className="mb-3 text-gray-700" />
              <h3 className="font-semibold">AI Powered</h3>
              <p className="text-sm text-gray-500">
                Smart recommendations
              </p>
            </div>

            <div className="p-5 rounded-2xl border border-gray-200 shadow-sm">
              <Bolt className="mb-3 text-gray-700" />
              <h3 className="font-semibold">Fast</h3>
              <p className="text-sm text-gray-500">
                Lightning performance
              </p>
            </div>

          </div>
        </section>
      </main>

    </div>
  );
}
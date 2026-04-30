"use client";

import {
  ShieldCheck,
  Medal,
  Briefcase,
  UserSearch,
  Building2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [role, setRole] = useState<"developer" | "recruiter">("developer");

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <main className="relative overflow-hidden px-4 md:px-6 pt-20 pb-12">

        {/* BACKGROUND */}
        <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[60%] rounded-full bg-gray-100 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[60%] rounded-full bg-gray-200 blur-[120px]"></div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT */}
          <div className="flex flex-col space-y-6 md:space-y-8">

            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
              Get Hired for Your Skills.
              <br />
              <span className="text-gray-400">
                Not Just Your Resume.
              </span>
            </h1>

            <p className="text-sm md:text-base text-gray-500 max-w-md">
              Build your portfolio, get AI-matched with real startups, and
              get hired faster — even as a fresher.
            </p>

            <div className="space-y-4 md:space-y-6 pt-2 md:pt-6">

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <p className="text-xs md:text-sm font-semibold uppercase tracking-widest">
                    Verified Jobs Only
                  </p>
                  <p className="text-xs md:text-sm text-gray-500">
                    No fake listings. Real companies only.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                  <Medal size={18} />
                </div>
                <div>
                  <p className="text-xs md:text-sm font-semibold uppercase tracking-widest">
                    Skill-Based Hiring
                  </p>
                  <p className="text-xs md:text-sm text-gray-500">
                    Projects matter more than resumes.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-md border rounded-2xl p-6 md:p-8 shadow-sm bg-white relative">

              {/* HEADER */}
              <div className="mb-6">
                <h2 className="text-xl md:text-2xl font-semibold">
                  Welcome Back
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Sign in to continue
                </p>
              </div>

              {/* ROLE SWITCH */}
              <div className="grid grid-cols-2 gap-2 mb-6">

                <button
                  onClick={() => setRole("developer")}
                  className={`flex items-center justify-center gap-2 py-2 rounded-xl text-sm border ${
                    role === "developer"
                      ? "bg-black text-white"
                      : "bg-white"
                  }`}
                >
                  <UserSearch size={16} />
                  Developer
                </button>

                <button
                  onClick={() => setRole("recruiter")}
                  className={`flex items-center justify-center gap-2 py-2 rounded-xl text-sm border ${
                    role === "recruiter"
                      ? "bg-black text-white"
                      : "bg-white"
                  }`}
                >
                  <Building2 size={16} />
                  Recruiter
                </button>

              </div>

              {/* SOCIAL */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">

                <button className="flex items-center justify-center gap-2 py-3 rounded-xl border text-sm hover:bg-gray-50">
                  <img
                    className="w-4 h-4"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuASc4Mhioa7KdYuWnoCGvskGvo372yDCGRqQYvMhImUzA1bmdsSr5tvgP9F4MFZyPWnaNnTgyNb2b0k8aFu-TVLizBM4YWC1ZokXJM1iVUb2HrS9-bg1LcccMiLWHOWkU-r58oMMLYkq--1pIxNZI_O4AU2t-6FiY7yEx0PBGdz7dD1IoJ8DckkdqhLnM333P5lR0dvBNt8kFRGvJvHZRE3OysOenOkXJSfEUCFwPQ6V3o4sdbEUvUyzXIEVC-oCw65jqkzdCIQr0jz"
                  />
                  Google
                </button>

                <button className="flex items-center justify-center gap-2 py-3 rounded-xl border text-sm hover:bg-gray-50">
                  <Briefcase size={16} />
                  LinkedIn
                </button>

              </div>

              {/* DIVIDER */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-1 h-px bg-gray-200"></div>
                <span className="text-xs text-gray-400">OR</span>
                <div className="flex-1 h-px bg-gray-200"></div>
              </div>

              {/* FORM */}
              <form className="space-y-4">

                <input
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />

                <input
                  placeholder="Password"
                  type="password"
                  className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />

                <Link href="\dashboard" className="w-full py-3 rounded-xl bg-black text-white text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition">
                  Sign In <ArrowRight size={16} />
                </Link>

              </form>

              {/* FOOTER */}
              <p className="text-xs text-gray-500 text-center mt-6">
                Don’t have an account?
                <Link href="\signup" className="text-black font-medium ml-1 cursor-pointer">
                  Create Account
                </Link>
              </p>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
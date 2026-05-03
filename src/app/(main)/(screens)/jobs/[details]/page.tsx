"use client";

import {
  MapPin,
  Briefcase,
  Calendar,
  ArrowUpRight,
  Building2,
} from "lucide-react";

export default function JobDetailsPage() {
  return (
    <div className="bg-[#f6f7f9] min-h-screen pb-24">

      {/* ================= HERO ================= */}
      <div className="bg-gradient-to-b from-white to-gray-100 border-b border-gray-200 px-4 md:px-12 py-10">
        <div className="max-w-6xl mx-auto">

          <div className="flex items-start gap-4">
            {/* Logo */}
            <div className="w-14 h-14 bg-white border border-gray-200 rounded-2xl flex items-center justify-center shadow-sm">
              <Building2 className="w-6 h-6 text-gray-700" />
            </div>

            <div>
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
                Frontend Developer
              </h1>

              <p className="text-gray-500 mt-1 mb-3">
                TechCorp Pvt Ltd
              </p>

              {/* Meta */}
              <div className="flex flex-wrap gap-3 text-sm">
                <span className="flex items-center gap-1 bg-white border px-3 py-1 rounded-full text-gray-600">
                  <MapPin className="w-4 h-4" /> Remote
                </span>
                <span className="flex items-center gap-1 bg-white border px-3 py-1 rounded-full text-gray-600">
                  <Briefcase className="w-4 h-4" /> 2–5 Years
                </span>
                <span className="flex items-center gap-1 bg-white border px-3 py-1 rounded-full text-gray-600">
                  <Calendar className="w-4 h-4" /> Apply by 25 May
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MAIN ================= */}
      <div className="px-4 md:px-12 py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-12 gap-8">

          {/* LEFT */}
          <main className="col-span-12 lg:col-span-8 space-y-6">

            {/* Description */}
            <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200">
              <h2 className="text-lg font-semibold mb-4 text-gray-900">
                Job Description
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We are looking for a passionate Frontend Developer to build modern,
                scalable web applications. You will work closely with designers and
                backend engineers to deliver high-quality user experiences that
                delight users.
              </p>
            </section>

            {/* Skills */}
            <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200">
              <h2 className="text-lg font-semibold mb-4 text-gray-900">
                Skills Required
              </h2>

              <div className="flex flex-wrap gap-3">
                {["React", "Next.js", "Tailwind", "TypeScript"].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-1.5 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-gray-200 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Requirements */}
            <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-200">
              <h2 className="text-lg font-semibold mb-4 text-gray-900">
                Requirements
              </h2>

              <ul className="space-y-3 text-gray-600 text-sm">
                <li>• 2+ years of experience in frontend development</li>
                <li>• Strong knowledge of React and Next.js</li>
                <li>• Good understanding of UI/UX principles</li>
                <li>• Experience with REST APIs</li>
              </ul>
            </section>
          </main>

          {/* RIGHT SIDEBAR */}
          <aside className="col-span-12 lg:col-span-4">
            <div className="lg:sticky lg:top-24 space-y-4">

              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <p className="text-sm text-gray-500">Salary</p>
                <p className="text-xl font-semibold text-gray-900 mb-4">
                  ₹6–12 LPA
                </p>

                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-black text-white text-sm font-medium hover:bg-gray-900 active:scale-[0.97] transition-all">
                  Apply Now
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button className="w-full mt-3 border border-gray-200 py-3 rounded-xl text-sm font-medium hover:bg-gray-50 transition">
                  Save Job
                </button>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h4 className="text-sm font-semibold mb-3 text-gray-900">
                  Job Overview
                </h4>

                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Job Type</span>
                    <span className="text-gray-900">Full-time</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Experience</span>
                    <span className="text-gray-900">2–5 Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Location</span>
                    <span className="text-gray-900">Remote</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* MOBILE APPLY BAR */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 flex gap-3 lg:hidden">
        <button className="flex-1 border border-gray-200 rounded-xl text-sm font-medium">
          Save
        </button>
        <button className="flex-1 bg-black text-white rounded-xl text-sm font-medium flex items-center justify-center gap-2">
          Apply
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
"use client";

import {
  ArrowRight,
  Briefcase,
  User,
  Brain,
  CheckCircle,
  CalendarDays,
  MapPin,
} from "lucide-react";

export default function Page() {
  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <section className=" pb-10 px-6 md:px-12 text-center relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
            Stop Sending Resumes. <br />
            <span className="text-gray-400">Start Getting Selected.</span>
          </h1>

          <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto">
            Build your portfolio, get AI-matched with real startups, and get
            hired based on your skills — not just your resume.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <button className="px-6 py-3 bg-black text-white rounded-xl flex items-center gap-2 hover:bg-gray-800 transition">
              Build Portfolio <ArrowRight size={18} />
            </button>

            <button className="px-6 py-3 border rounded-xl hover:bg-gray-100 transition">
              Explore Jobs
            </button>
          </div>

          {/* Trust + Value */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span>✔ No fake job listings</span>
            <span>✔ AI skill matching</span>
            <span>✔ Fresher-first hiring</span>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION (VERY IMPORTANT FOR CONVERSION) */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Applying to 100 Jobs… <br />
            <span className="text-gray-400">Still No Response?</span>
          </h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            You’re not alone. Most developers struggle because the system is
            broken — not their skills.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-14">
            {[
              {
                title: "No Replies",
                desc: "You apply again and again, but recruiters never respond.",
              },
              {
                title: "Fake Listings",
                desc: "Many jobs are outdated or not even real.",
              },
              {
                title: "Resume Rejections",
                desc: "Your resume gets filtered before anyone sees your skills.",
              },
              {
                title: "High Competition",
                desc: "Thousands apply for the same role within hours.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border bg-white hover:shadow-xl transition group"
              >
                <h3 className="text-lg font-semibold group-hover:text-black">
                  {item.title}
                </h3>
                <p className="text-gray-500 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Emotional Reinforcement */}
          <p className="mt-12 text-sm text-gray-400">
            👉 The problem isn’t your effort. It’s how hiring works today.
          </p>
        </div>
      </section>

      {/* SOLUTION (YOUR DIFFERENTIATION) */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-2xl hover:shadow-xl transition">
            <Brain className="mb-4" />
            <h3 className="text-xl font-semibold">AI Job Matching</h3>
            <p className="text-gray-500 mt-2">
              Get matched with jobs based on your real skills, not keywords.
            </p>
          </div>

          <div className="p-6 border rounded-2xl hover:shadow-xl transition">
            <User className="mb-4" />
            <h3 className="text-xl font-semibold">Portfolio First</h3>
            <p className="text-gray-500 mt-2">
              Show your projects and stand out beyond your resume.
            </p>
          </div>

          <div className="p-6 border rounded-2xl hover:shadow-xl transition">
            <Briefcase className="mb-4" />
            <h3 className="text-xl font-semibold">Real Startup Jobs</h3>
            <p className="text-gray-500 mt-2">
              Only verified companies — no fake listings.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS - REDESIGNED */}
      <section className="py-28 px-6 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            How You Actually Get Hired
          </h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            A simple, smarter process designed for developers — not outdated
            hiring systems.
          </p>
        </div>

        {/* Timeline Style */}
        <div className="mt-16 max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-200"></div>

          {/* Step 1 */}
          <div className="relative flex md:items-center mb-12">
            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-medium">
              1
            </div>

            <div className="ml-12 md:ml-0 md:w-1/2 md:pr-12 text-left md:text-right">
              <h3 className="text-lg font-semibold">Build Your Portfolio</h3>
              <p className="text-gray-500 mt-2">
                Showcase your real skills, projects, and experience — not just a
                resume.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative flex md:items-center mb-12">
            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-medium">
              2
            </div>

            <div className="ml-12 md:ml-auto md:w-1/2 md:pl-12 text-left">
              <h3 className="text-lg font-semibold">Get AI Matched</h3>
              <p className="text-gray-500 mt-2">
                Our system connects you with jobs based on your actual skills
                and profile.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative flex md:items-center">
            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-medium">
              3
            </div>

            <div className="ml-12 md:ml-0 md:w-1/2 md:pr-12 text-left md:text-right">
              <h3 className="text-lg font-semibold">Get Hired Faster</h3>
              <p className="text-gray-500 mt-2">
                Skip the noise. Get discovered by real startups looking for your
                skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT FEATURES (CORE VALUE) */}
      <section className="py-28 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Everything You Need to Get Hired
          </h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Not just job listings — a complete system to build, manage, and grow
            your career.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Resume Builder */}
          <div className="p-8 border rounded-2xl bg-white">
            <h3 className="text-xl font-semibold">AI Resume Builder</h3>
            <p className="text-gray-500 mt-3">
              Create professional resumes optimized for recruiters and ATS
              systems in minutes.
            </p>
          </div>

          {/* Portfolio */}
          <div className="p-8 border rounded-2xl bg-white">
            <h3 className="text-xl font-semibold">Portfolio Showcase</h3>
            <p className="text-gray-500 mt-3">
              Build a powerful developer profile to showcase your real projects
              and skills.
            </p>
          </div>

          {/* Dashboard */}
          <div className="p-8 border rounded-2xl bg-white">
            <h3 className="text-xl font-semibold">Smart Dashboard</h3>
            <p className="text-gray-500 mt-3">
              Track applications, interviews, and job progress — all in one
              place.
            </p>
          </div>

          {/* Job Tracking */}
          <div className="p-8 border rounded-2xl bg-white">
            <h3 className="text-xl font-semibold">Job & Interview Tracking</h3>
            <p className="text-gray-500 mt-3">
              Never lose track of opportunities. Manage everything with clarity.
            </p>
          </div>
        </div>
      </section>

      

      {/* FINAL CTA */}
      <section className="py-24 px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto bg-black text-white rounded-2xl p-12">
          <h2 className="text-3xl font-semibold">
            Your Skills Deserve Better Opportunities
          </h2>

          <p className="mt-4 text-gray-300">
            Start building your portfolio and get discovered today.
          </p>

          <button className="mt-6 px-6 py-3 bg-white text-black rounded-xl hover:bg-gray-200 transition">
            Get Started
          </button>
        </div>
      </section>
    </main>
  );
}

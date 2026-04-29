"use client";

import {
  FileText,
  Sparkles,
  Download,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const templates = [
  {
    name: "Modern Minimal",
    type: "ATS Friendly",
  },
  {
    name: "Professional Clean",
    type: "ATS Friendly",
  },
  {
    name: "Developer Focus",
    type: "Tech Optimized",
  },
];

export default function ResumePage() {
  return (
    <main className="bg-white text-gray-900 min-h-screen">

      {/* HERO */}
      <section className="pt-24 pb-16 px-6 md:px-12 text-center border-b">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Build a Resume That <br />
            <span className="text-gray-400">Actually Gets You Hired</span>
          </h1>

          <p className="mt-6 text-gray-500 max-w-2xl mx-auto">
            Create ATS-friendly resumes, powered by AI, and download instantly — no cost, no limits.
          </p>

          {/* CTA */}
          <button className="mt-8 px-6 py-3 bg-black text-white rounded-xl flex items-center gap-2 mx-auto">
            Start Building <ArrowRight size={18} />
          </button>

          {/* TRUST */}
          <div className="mt-10 flex justify-center gap-6 text-sm text-gray-500 flex-wrap">
            <span>✔ 100% Free</span>
            <span>✔ Unlimited Downloads</span>
            <span>✔ ATS Optimized</span>
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

          <div className="border rounded-2xl p-6">
            <Sparkles className="mb-4" />
            <h3 className="font-semibold text-lg">
              AI Resume Builder
            </h3>
            <p className="text-gray-500 mt-2 text-sm">
              Generate bullet points, summaries, and skills automatically.
            </p>
          </div>

          <div className="border rounded-2xl p-6">
            <FileText className="mb-4" />
            <h3 className="font-semibold text-lg">
              ATS-Friendly Templates
            </h3>
            <p className="text-gray-500 mt-2 text-sm">
              Designed to pass recruiter filters and get shortlisted.
            </p>
          </div>

          <div className="border rounded-2xl p-6">
            <Download className="mb-4" />
            <h3 className="font-semibold text-lg">
              Instant PDF Download
            </h3>
            <p className="text-gray-500 mt-2 text-sm">
              Export your resume instantly with no watermark.
            </p>
          </div>

        </div>
      </section>

      {/* TEMPLATES */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-semibold text-center">
            Choose Your Template
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-12">

            {templates.map((template, i) => (
              <div
                key={i}
                className="border bg-white rounded-2xl p-6 flex flex-col justify-between"
              >

                {/* PREVIEW MOCK */}
                <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-sm">
                  Preview
                </div>

                <div className="mt-4">
                  <h3 className="font-medium">
                    {template.name}
                  </h3>

                  <p className="text-xs text-gray-500 mt-1">
                    {template.type}
                  </p>
                </div>

                <button className="mt-4 px-4 py-2 bg-black text-white rounded-lg text-sm">
                  Use Template
                </button>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl font-semibold">
            Build Your Resume in 3 Steps
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            {[
              "Choose Template",
              "Fill Details / Use AI",
              "Download PDF",
            ].map((step, i) => (
              <div key={i}>
                <div className="text-4xl text-gray-300 font-bold">
                  {i + 1}
                </div>
                <p className="mt-4 font-medium">
                  {step}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-6 md:px-12 text-center">
        <div className="max-w-4xl mx-auto bg-black text-white rounded-2xl p-12">

          <h2 className="text-3xl font-semibold">
            Stop Using Weak Resumes
          </h2>

          <p className="mt-4 text-gray-300">
            Build a strong, AI-powered resume that actually gets responses.
          </p>

          <button className="mt-6 px-6 py-3 bg-white text-black rounded-xl">
            Create Resume Now
          </button>

        </div>
      </section>

    </main>
  );
} 
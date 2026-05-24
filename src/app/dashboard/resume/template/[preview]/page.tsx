"use client";

import { useState } from "react";

export default function Preview() {
  const [form, setForm] = useState({
    firstName: "Julian",
    lastName: "Ames",
    summary:
      "Senior Product Designer with 8+ years of experience specializing in high-fidelity digital interfaces.",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="overflow-hidden bg-slate-50">

      <main className="flex h-[calc(100vh-64px)]">

        {/* LEFT PANEL */}
        <aside className="w-[460px] bg-white border-r border-slate-200/40 flex flex-col">

          {/* HEADER */}
          <div className="p-6 bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
            <h2 className="text-lg font-bold">Resume Content</h2>
            <p className="text-xs opacity-80 uppercase tracking-widest">
              Editor Mode
            </p>
          </div>

          {/* FORM */}
          <div className="flex-1 overflow-y-auto p-6 space-y-5">

            {/* CONTACT */}
            <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
              <h3 className="font-semibold mb-4 text-slate-900">
                Contact Info
              </h3>

              <div className="grid grid-cols-2 gap-3">
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                  placeholder="First Name"
                />

                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                  placeholder="Last Name"
                />
              </div>

              <textarea
                name="summary"
                value={form.summary}
                onChange={handleChange}
                rows={4}
                className="w-full mt-4 rounded-xl border border-slate-200 px-4 py-2 text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
                placeholder="Summary"
              />
            </div>

            {/* SECTIONS */}
            {["Experience", "Education", "Skills", "Review"].map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl border border-slate-100 p-5 hover:border-emerald-200 hover:shadow-sm transition cursor-pointer"
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-slate-800">
                    {item}
                  </span>
                  <span className="text-emerald-600">›</span>
                </div>
              </div>
            ))}
          </div>

          {/* FOOTER BUTTON */}
          <div className="p-5 border-t bg-white">
            <button className="w-full py-3 rounded-2xl font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:shadow-lg active:scale-[0.98] transition">
              Finalize & Review
            </button>
          </div>
        </aside>

        {/* RIGHT PREVIEW */}
        <section className="flex-1 flex justify-center overflow-y-auto p-10">

          <div className="w-full max-w-[820px]">

            {/* RESUME */}
            <div className="bg-white shadow-xl rounded-xl p-[60px] border border-slate-100">

              {/* HEADER */}
              <div className="flex justify-between mb-10">
                <div>
                  <h1 className="text-4xl font-bold text-slate-900">
                    {form.firstName} {form.lastName}
                  </h1>
                  <p className="text-emerald-600 font-semibold mt-2">
                    Product Designer
                  </p>
                </div>

                <div className="text-right text-xs text-slate-500 space-y-1">
                  <p>julian@example.com</p>
                  <p>+91 00000 00000</p>
                  <p>Noida, India</p>
                </div>
              </div>

              {/* SUMMARY */}
              <div className="mb-8">
                <h3 className="text-xs font-bold text-emerald-600 uppercase tracking-widest border-b pb-2">
                  Summary
                </h3>

                <p className="text-sm text-slate-700 mt-4 leading-relaxed">
                  {form.summary}
                </p>
              </div>

              {/* EXPERIENCE */}
              <div>
                <h3 className="text-xs font-bold text-emerald-600 uppercase tracking-widest border-b pb-2">
                  Experience
                </h3>

                <div className="mt-5 space-y-5">

                  <div className="border-l-2 border-emerald-200 pl-4">
                    <h4 className="font-bold">Lead Designer</h4>
                    <p className="text-xs text-slate-500">
                      Company A • 2021 - Present
                    </p>
                  </div>

                  <div className="border-l-2 border-slate-200 pl-4">
                    <h4 className="font-bold">UI Designer</h4>
                    <p className="text-xs text-slate-500">
                      Company B • 2019 - 2021
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
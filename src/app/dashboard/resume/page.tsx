"use client";

import { useState } from "react";
import { Search, Sparkles, Check, Eye } from "lucide-react";

const templates = [
  {
    id: 1,
    name: "The Executive",
    tag: "ATS Friendly",
    category: "Traditional",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDE2Pgn2Lu1X3ZAlvq7O-YqZ1AxYUmJPK55ighg-JxAgFvPmVLqwFDwzm4uoYSRY2oUisv4ZxaztTXaXHqmQUjMHr9Rh6IXruBXrhsOcJfXYRxtBmrLavBxso_B7cr6Vlo5rpTdN4dCrxQardz5gf2HEAHXSKgWZqb0WNDNTheIe5dwYzeUERTyN91GIC4o56slk5fUeQwI6qpiL8n9gK8judzPbTUaTzzdzMfCGCGsd0Ay_ndV8TexaGEW9XBuR7OaIocFVmXpQjiI",
  },
  {
    id: 2,
    name: "Modern Minimal",
    tag: "Clean Structure",
    category: "Minimal",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCEi17l5-51U1fFxdqt5c2IEdRVKK1w_OLHVjjIuUsxwbl1e_Cl9rAfgv9HpNFuKxlb6zgomfNqmErntJRtpYrw4lpsuL_LeV-bJGaqTax5-5F26uNeHAKguodAYqZ0UchztZcVRes8pEbQcsgk9yDHw6bfNhgBs-7xIyFzR_fOOocSxt9zlzuioqVE63VOVzAzTzOKK7a5_2E8_AUwy6iVnYHa65AuQHU8fmQ2hj2cxvwtL6k_Xwifb76DikU0kP883mZEl2G-jsSD",
  },
  {
    id: 3,
    name: "Creative Director",
    tag: "Bold Editorial",
    category: "Creative",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBTshTIpGBcWS6sRUF2IqCXHu8IpBWd6BOglbgP_dS2UPHQ-2BV_S9u0ZXlYEwRzGhJXlXz5ZQ69qNUfB1nC6efRco5LqEPGnnrUNkUn7rgZ8Cr18FpPTaHQp3tk1JaKVGH_N1hjvka0EDpcw0P4tHT_fiqC5BeJ4dbayuJpPjIofyIqNgV30lWFNo7nkjMY9jjLJc21Bpx37xXoR8uXpBC_U0cc6oieagcPUdR4LisBVAYc_0EU0SyCxVdJxPYGmqxSDLfijDZtnoU",
  },
];

export default function Templates() {
  const [selected, setSelected] = useState(1);

  return (
    <div className="min-h-screen bg-background text-on-surface">
      <main className="max-w-7xl mx-auto px-6 py-16">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">

          <div className="space-y-3">
            <span className="text-emerald-500 font-bold tracking-[0.2em] text-xs uppercase">
              Step 2 of 3
            </span>

            <h1 className="text-3xl md:text-5xl font-bold">
              Select your foundation
            </h1>

            <p className="text-on-surface-variant max-w-xl">
              Choose a template that defines your professional identity.
              You can always change it later.
            </p>
          </div>

          {/* ACTIONS */}
          <div className="flex gap-3">
            <button className="px-5 py-3 rounded-xl bg-surface-container-high hover:bg-surface-container-highest transition">
              Back
            </button>

            {/* 🔥 PRIMARY BUTTON USING YOUR GRADIENT */}
            <button className="px-6 py-3 rounded-xl font-semibold shadow-lg transition active:scale-95 bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:shadow-emerald-500/30">
              Continue
            </button>
          </div>
        </div>

        {/* FILTER + SEARCH */}
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-10">

          <div className="flex bg-surface-container-low p-1 rounded-xl w-fit">
            {["All", "Minimal", "Creative", "Executive"].map((t, i) => (
              <button
                key={i}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition
                  ${
                    i === 0
                      ? "bg-white text-emerald-600 shadow-sm"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" />
            <input
              placeholder="Search templates..."
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-surface-container-low focus:ring-2 focus:ring-emerald-500/20 outline-none"
            />
          </div>
        </div>

        {/* FEATURED */}
        <div className="mb-10 p-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-xl">
          <div className="flex items-center gap-2 text-white/80 text-sm">
            <Sparkles className="w-4 h-4" />
            Recommended for you
          </div>

          <h2 className="text-2xl font-bold mt-1">
            Modern Professional Pro
          </h2>

          <p className="text-white/80 text-sm mt-1">
            Optimized for recruiters, ATS systems & modern tech roles
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {templates.map((t) => {
            const isSelected = selected === t.id;

            return (
              <div
                key={t.id}
                onClick={() => setSelected(t.id)}
                className={`group cursor-pointer rounded-2xl overflow-hidden border transition-all duration-300
                  bg-surface-container-lowest
                  ${
                    isSelected
                      ? "border-emerald-500 shadow-lg scale-[1.02]"
                      : "border-transparent hover:border-emerald-500/30 hover:-translate-y-1"
                  }`}
              >
                {/* IMAGE */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src={t.image} className="w-full h-full object-cover" />

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" />

                  {/* ACTIONS */}
                  <div className="absolute top-3 right-3 flex gap-2">
                    <button className="bg-white/90 px-2 py-1 rounded-lg text-xs flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      Preview
                    </button>

                    {isSelected && (
                      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-2 rounded-lg shadow-lg">
                        <Check className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-4 space-y-1">
                  <p className="text-xs text-on-surface-variant uppercase tracking-wider">
                    {t.category}
                  </p>

                  <h3 className="font-bold text-lg">{t.name}</h3>

                  <p className="text-sm text-on-surface-variant">{t.tag}</p>

                  <button
                    className={`w-full mt-3 py-2 rounded-xl font-semibold transition
                      ${
                        isSelected
                          ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white"
                          : "bg-surface-container-high hover:bg-surface-container-highest"
                      }`}
                  >
                    {isSelected ? "Selected" : "Select"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </main>
    </div>
  );
}
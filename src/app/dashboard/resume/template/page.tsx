"use client";

export default function Templates() {
  return (
    <div className="min-h-screen bg-background font-body text-on-surface">
      <main className="pt-24 pb-24 px-6 max-w-[1440px] mx-auto">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-12">
          <div className="space-y-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-widest bg-emerald-50 text-emerald-700">
              STEP 2 OF 3
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Select your foundation
            </h1>

            <p className="text-on-surface-variant max-w-xl text-lg leading-relaxed">
              Choose a template that defines your professional identity. Each design is optimized for ATS systems and recruiter readability.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="px-6 py-3 rounded-xl font-semibold border border-emerald-200 text-emerald-700 hover:bg-emerald-50 transition">
              Back
            </button>

            <button className="px-7 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-600 shadow-lg hover:shadow-emerald-300/40 transition active:scale-95">
              Continue
            </button>
          </div>
        </div>

        {/* FILTER + SEARCH */}
        <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between mb-10">

          <div className="flex bg-surface-container-low p-1 rounded-2xl w-fit shadow-sm">
            {["All", "Minimal", "Creative", "Executive"].map((tab, i) => (
              <button
                key={tab}
                className={`px-5 py-2 rounded-xl text-sm font-semibold transition ${
                  i === 0
                    ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="relative w-full md:max-w-sm">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-emerald-600 text-sm">
              search
            </span>
            <input
              className="w-full bg-white border border-emerald-100 rounded-xl pl-10 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 shadow-sm"
              placeholder="Search templates..."
            />
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">

          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="group relative rounded-2xl bg-white border border-emerald-50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition overflow-hidden"
            >
              {/* IMAGE */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDE2Pgn2Lu1X3ZAlvq7O-YqZ1AxYUmJPK55ighg-JxAgFvPmVLqwFDwzm4uoYSRY2oUisv4ZxaztTXaXHqmQUjMHr9Rh6IXruBXrhsOcJfXYRxtBmrLavBxso_B7cr6Vlo5rpTdN4dCrxQardz5gf2HEAHXSKgWZqb0WNDNTheIe5dwYzeUERTyN91GIC4o56slk5fUeQwI6qpiL8n9gK8judzPbTUaTzzdzMfCGCGsd0Ay_ndV8TexaGEW9XBuR7OaIocFVmXpQjiI"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                {/* hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center">
                  <button className="opacity-0 group-hover:opacity-100 px-5 py-2 rounded-xl bg-white text-emerald-700 font-semibold transition">
                    Preview
                  </button>
                </div>

                {/* badge */}
                {i === 0 && (
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow">
                    Selected
                  </div>
                )}
              </div>

              {/* CONTENT */}
              <div className="p-4 space-y-1">
                <h3 className="font-bold text-lg">Template {i + 1}</h3>
                <p className="text-xs text-on-surface-variant">
                  Professional • ATS Optimized
                </p>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-emerald-600 font-semibold">
                    Premium
                  </span>

                  <button className="text-xs font-semibold px-3 py-1 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:shadow-md transition">
                    Use
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE FOOTER */}
        <div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-white/90 backdrop-blur border-t border-emerald-100 flex gap-3">
          <button className="flex-1 py-3 rounded-xl border border-emerald-200 text-emerald-700 font-semibold">
            Back
          </button>
          <button className="flex-[2] py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-600 shadow-lg">
            Continue
          </button>
        </div>

      </main>
    </div>
  );
}
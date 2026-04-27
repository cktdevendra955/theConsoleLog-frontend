import {
  Search,
  ChevronDown,
  SlidersHorizontal,
  MapPin,
  Calendar,
  Plus,
  Users,
} from "lucide-react";

export default function HiringDrivePage() {
  return (
    <div className="bg-surface text-on-surface">
      <main className=" min-h-screen">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-10">

          {/* HEADER */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 md:mb-12">

            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
                Hiring Drives
              </h1>

              <p className="text-sm md:text-base text-on-surface-variant max-w-md">
                Explore and apply to opportunities tailored for elite designers and engineers.
              </p>
            </div>

            {/* Recruiters */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex -space-x-2 md:-space-x-3">
                {[1, 2, 3].map((i) => (
                  <img
                    key={i}
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 md:border-4 border-surface"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBd-_9hdj0bgSCImfQVBXDLokLXyGvZpyxRIE5A7IrrcqgftxUiwwrh6MsqeOtGwEL8hlmj5Ced5yzcxhKrYOr-l7GYQ5QSvWbP-fQhm3QWx6MJzKt8SEe_eu7BQtgOVDw9icqfuCBslSQAjZMJPlJY70HKnhPgVJgiNDKzWc1ucptN71HyzIXEqCdBgt4DbDOk9nwUQCPo5NB66gbMvMkUMMF9XZss98BS3F8wAhf2SSfpWKq7eS3uhYTTe41sVA0dyyvQ6AWJxNHB"
                  />
                ))}
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 md:border-4 border-surface bg-primary flex items-center justify-center text-[10px] md:text-xs font-bold">
                  +12
                </div>
              </div>

              <span className="flex items-center gap-2 text-xs md:text-sm text-on-surface-variant">
                <Users className="w-4 h-4" />
                Active recruiters
              </span>
            </div>
          </div>

          {/* FILTERS */}
          <div className="bg-surface-container-low rounded-2xl md:rounded-[2rem] p-4 md:p-8 mb-8 md:mb-10">

            <div className="flex flex-col gap-4">

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-primary w-4 h-4" />
                <input
                  className="w-full pl-10 pr-4 py-3 md:py-4 bg-white rounded-xl md:rounded-2xl shadow-sm text-sm md:text-base focus:ring-4 focus:ring-primary/10"
                  placeholder="Search jobs..."
                />
              </div>

              {/* Filters row */}
              <div className="flex gap-3 overflow-x-auto pb-1">

                {["Role", "Location", "Status"].map((label, i) => (
                  <div key={i} className="relative min-w-[130px]">
                    <select className="w-full appearance-none pl-3 pr-8 py-3 bg-white rounded-xl shadow-sm text-xs md:text-sm">
                      <option>{label}</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant" />
                  </div>
                ))}

                <button className="min-w-[48px] h-[48px] bg-primary rounded-xl flex items-center justify-center shadow-md active:scale-95">
                  <SlidersHorizontal className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">

            {[1, 2].map((_, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-sm hover:shadow-lg transition-all flex flex-col"
              >
                <div className="flex justify-between items-start mb-4 md:mb-6">

                  <div className="w-12 h-12 md:w-14 md:h-14 bg-surface-container-low rounded-xl flex items-center justify-center">
                    <img
                      className="w-8 h-8 md:w-10 md:h-10"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrw9YAkueXhqe-vcK7UQbhuLcReiYofMIStjbNu_eVG2dc8MS9a3y-kaft_C6Etgg9rpFlNUoZINl3-9nBfnHppfE3ygQv0x5HO1aK2ro8zLtVy6YMYCNFsA5GxL8QCKw5g5ygJKXfgACxi3m1Y3rhe-xOBraOYY3BB_vGXTGY83xgyIfJZtm3u2r23oA-fBKV08oVrB0L50ur8X9oU0IDf9rcUno8exwiLHkBaGCJ8LhOSaGQybt3YwqKt_Ro3yeCE6I0mrs7SzHw"
                    />
                  </div>

                  <span className="px-2 py-1 text-[10px] rounded-full bg-primary/10 text-primary">
                    {i === 0 ? "Recommended" : "New"}
                  </span>
                </div>

                <h3 className="text-base md:text-xl font-bold mb-1">
                  {i === 0
                    ? "Senior Product Designer"
                    : "Lead Frontend Engineer"}
                </h3>

                <p className="text-xs md:text-sm text-primary mb-3">
                  Company Name
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs md:text-sm text-on-surface-variant mb-3">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    Location
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Deadline
                  </div>
                </div>

                <p className="text-xs md:text-sm text-on-surface-variant mb-4 line-clamp-2">
                  Job description preview goes here...
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 text-xs rounded-full bg-surface-container-low">
                    Remote
                  </span>
                  <span className="px-3 py-1 text-xs rounded-full bg-surface-container-low">
                    Full-time
                  </span>
                </div>

                <div className="mt-auto grid grid-cols-2 gap-2">
                  <button className="py-2 md:py-3 text-xs md:text-sm bg-surface-container-high text-primary rounded-lg">
                    View
                  </button>
                  <button className="py-2 md:py-3 text-xs md:text-sm primary-gradient rounded-lg">
                    Apply
                  </button>
                </div>
              </div>
            ))}

            {/* EMPTY CARD */}
            <div className="border-2 border-dashed rounded-2xl md:rounded-3xl p-6 flex flex-col items-center justify-center text-center bg-surface-container-low/30">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-surface-container-highest flex items-center justify-center mb-3">
                <Plus className="text-primary" />
              </div>

              <h3 className="text-base md:text-lg font-bold">
                Can't find your match?
              </h3>

              <p className="text-xs md:text-sm text-on-surface-variant mt-2 max-w-[200px]">
                Subscribe to alerts for new hiring drives.
              </p>

              <button className="mt-4 text-primary text-xs md:text-sm font-semibold underline">
                Set Alerts
              </button>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
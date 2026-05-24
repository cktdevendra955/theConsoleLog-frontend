import {
  Search,
  ChevronDown,
  SlidersHorizontal,
  MapPin,
  Calendar,
  Plus,
  Users,
} from "lucide-react";

/* ---------------- DESIGN SYSTEM ---------------- */

const primaryGradient =
  "bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:opacity-90 transition";

const Card = ({ children }: any) => (
  <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-sm transition">
    {children}
  </div>
);

/* ---------------- PAGE ---------------- */

export default function HiringDrivePage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 space-y-10">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">

          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Hiring Drives
            </h1>

            <p className="text-gray-500 mt-2 max-w-md">
              Explore and apply to opportunities tailored for elite designers and engineers.
            </p>
          </div>

          {/* Recruiters */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <img
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBd-_9hdj0bgSCImfQVBXDLokLXyGvZpyxRIE5A7IrrcqgftxUiwwrh6MsqeOtGwEL8hlmj5Ced5yzcxhKrYOr-l7GYQ5QSvWbP-fQhm3QWx6MJzKt8SEe_eu7BQtgOVDw9icqfuCBslSQAjZMJPlJY70HKnhPgVJgiNDKzWc1ucptN71HyzIXEqCdBgt4DbDOk9nwUQCPo5NB66gbMvMkUMMF9XZss98BS3F8wAhf2SSfpWKq7eS3uhYTTe41sVA0dyyvQ6AWJxNHB"
                />
              ))}
              <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold border-2 border-white">
                +12
              </div>
            </div>

            <span className="text-sm text-gray-500 flex items-center gap-2">
              <Users className="w-4 h-4 text-emerald-600" />
              Active recruiters
            </span>
          </div>
        </div>

        {/* FILTERS */}
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 space-y-4">

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-600 w-4 h-4" />
            <input
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-100 rounded-xl focus:ring-4 focus:ring-emerald-100 outline-none"
              placeholder="Search jobs..."
            />
          </div>

          {/* Filters */}
          <div className="flex gap-3 overflow-x-auto">

            {["Role", "Location", "Status"].map((label, i) => (
              <div key={i} className="relative min-w-[140px]">
                <select className="w-full appearance-none px-3 py-3 bg-white border border-gray-100 rounded-xl text-sm">
                  <option>{label}</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            ))}

            <button className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white hover:opacity-90 transition">
              <SlidersHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {[1, 2].map((_, i) => (
            <Card key={i}>

              {/* TOP */}
              <div className="flex justify-between items-start mb-5">

                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center border">
                  <img
                    className="w-8 h-8"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrw9YAkueXhqe-vcK7UQbhuLcReiYofMIStjbNu_eVG2dc8MS9a3y-kaft_C6Etgg9rpFlNUoZINl3-9nBfnHppfE3ygQv0x5HO1aK2ro8zLtVy6YMYCNFsA5GxL8QCKw5g5ygJKXfgACxi3m1Y3rhe-xOBraOYY3BB_vGXTGY83xgyIfJZtm3u2r23oA-fBKV08oVrB0L50ur8X9oU0IDf9rcUno8exwiLHkBaGCJ8LhOSaGQybt3YwqKt_Ro3yeCE6I0mrs7SzHw"
                  />
                </div>

                <span className="text-xs px-3 py-1 rounded-full bg-emerald-50 text-emerald-600">
                  {i === 0 ? "Recommended" : "New"}
                </span>
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold">
                {i === 0
                  ? "Senior Product Designer"
                  : "Lead Frontend Engineer"}
              </h3>

              <p className="text-sm text-emerald-600 font-medium mt-1">
                Company Name
              </p>

              {/* META */}
              <div className="flex gap-4 text-sm text-gray-500 mt-3">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  Location
                </div>

                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-emerald-600" />
                  Deadline
                </div>
              </div>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-500 mt-4 line-clamp-2">
                Job description preview goes here...
              </p>

              {/* TAGS */}
              <div className="flex gap-2 mt-4">
                <span className="text-xs px-3 py-1 bg-gray-50 rounded-full border">
                  Remote
                </span>
                <span className="text-xs px-3 py-1 bg-gray-50 rounded-full border">
                  Full-time
                </span>
              </div>

              {/* ACTIONS */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                <button className="py-2 rounded-xl border hover:bg-gray-50 transition text-sm">
                  View
                </button>

                <button className={primaryGradient + " py-2 rounded-xl text-sm"}>
                  Apply
                </button>
              </div>

            </Card>
          ))}

          {/* EMPTY CARD */}
          <div className="border-2 border-dashed rounded-2xl p-6 flex flex-col items-center justify-center text-center bg-gray-50">

            <div className="w-14 h-14 rounded-full bg-white border flex items-center justify-center mb-3">
              <Plus className="text-emerald-600" />
            </div>

            <h3 className="text-lg font-semibold">Can't find your match?</h3>

            <p className="text-sm text-gray-500 mt-2">
              Subscribe to alerts for new hiring drives.
            </p>

            <button className="mt-4 text-emerald-600 text-sm font-semibold hover:underline">
              Set Alerts
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}
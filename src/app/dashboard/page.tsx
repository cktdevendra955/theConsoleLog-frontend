import {
  Send,
  CalendarCheck,
  BadgeCheck,
  Bookmark,
  Video,
  ExternalLink,
  FileText,
  Pencil,
  Share2,
  BarChart3,
  Plus,
} from "lucide-react";

export default function Page() {
  return (
    <div className="bg-background text-on-surface antialiased">
      <main className=" px-4 sm:px-6 md:px-10 pb-16 min-h-screen">

        {/* HERO */}
        <section className="flex flex-col md:flex-row justify-between md:items-end mb-10 md:mb-12 gap-6">
          <div className="max-w-2xl">
            <p className="text-primary text-[10px] tracking-widest mb-2">
              MONDAY, OCTOBER 24
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-3">
              Welcome back, Devendra.
            </h1>

            <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
              Your profile strength is{" "}
              <span className="text-primary font-semibold">Excellent</span>.
              You have 3 new matching roles and an interview scheduled for tomorrow.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button className="w-full sm:w-auto px-5 py-3 rounded-xl bg-surface-container-high text-primary text-sm">
              Update Resume
            </button>

            <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-br from-primary to-primary-container text-sm shadow-md">
              Quick Apply
            </button>
          </div>
        </section>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6 mb-10 md:mb-12">

          {/* Card */}
          <div className="lg:col-span-3 bg-white p-6 md:p-8 rounded-2xl shadow-sm flex flex-col justify-between">
            <Send className="w-7 h-7 text-primary-container" />
            <div>
              <h3 className="text-3xl md:text-4xl font-bold">24</h3>
              <p className="text-xs text-on-surface-variant mt-1">
                JOBS APPLIED
              </p>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white p-6 md:p-8 rounded-2xl shadow-sm flex flex-col justify-between">
            <CalendarCheck className="w-7 h-7 text-tertiary-container" />
            <div>
              <h3 className="text-3xl md:text-4xl font-bold">03</h3>
              <p className="text-xs text-on-surface-variant mt-1">
                INTERVIEWS
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 bg-white p-6 md:p-8 rounded-2xl relative overflow-hidden">
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Profile Completion
            </h3>

            <p className="text-sm text-on-surface-variant mb-4">
              Complete your portfolio to unlock Premium visibility.
            </p>

            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div className="bg-primary h-full rounded-full w-[85%]"></div>
            </div>

            <p className="text-[10px] font-bold text-primary">
              85% COMPLETE — ALMOST THERE
            </p>

            <BadgeCheck className="absolute -right-6 -bottom-6 w-24 h-24 opacity-10" />
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* LEFT */}
          <div className="lg:col-span-8 space-y-10">

            {/* Recommended */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl md:text-2xl font-bold">
                  Recommended for You
                </h2>
                <button className="text-sm text-primary">View All</button>
              </div>

              <div className="space-y-3">

                {[1, 2].map((_, i) => (
                  <div
                    key={i}
                    className="bg-white p-4 md:p-6 rounded-xl shadow-sm flex items-center gap-3 md:gap-6"
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-surface-container rounded-xl"></div>

                    <div className="flex-1">
                      <h4 className="font-semibold text-base md:text-lg">
                        {i === 0
                          ? "Lead Experience Designer"
                          : "Senior Visual Architect"}
                      </h4>
                      <p className="text-xs md:text-sm text-on-surface-variant">
                        Company • Location
                      </p>
                    </div>

                    <Bookmark className="w-5 h-5" />
                  </div>
                ))}
              </div>
            </div>

            {/* Table */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                Application History
              </h2>

              <div className="bg-white rounded-2xl shadow-sm overflow-x-auto">
                <table className="min-w-[600px] w-full text-left">
                  <thead>
                    <tr>
                      <th className="px-4 md:px-6 py-3 text-xs">COMPANY</th>
                      <th className="px-4 md:px-6 py-3 text-xs">ROLE</th>
                      <th className="px-4 md:px-6 py-3 text-xs">DATE</th>
                      <th className="px-4 md:px-6 py-3 text-xs">STATUS</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td className="px-4 md:px-6 py-4">DesignStudio</td>
                      <td className="px-4 md:px-6 py-4">Product Designer</td>
                      <td className="px-4 md:px-6 py-4">Oct 21</td>
                      <td className="px-4 md:px-6 py-4">Interviewing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          {/* RIGHT */}
          <div className="lg:col-span-4 space-y-6">

            {/* Interview */}
            <div className="bg-primary p-6 md:p-8 rounded-2xl">
              <div className="flex justify-between mb-6">
                <Video className="w-8 h-8" />
                <span className="text-xs">TOMORROW</span>
              </div>

              <h3 className="text-lg md:text-xl font-bold mb-3">
                Interview with Lumina
              </h3>

              <button className="w-full bg-white text-primary py-2 md:py-3 rounded-xl flex items-center justify-center gap-2">
                Join Meeting
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Actions */}
            <div className="bg-white p-4 md:p-6 rounded-2xl">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: FileText, label: "New Resume" },
                  { icon: Pencil, label: "Cover Letter" },
                  { icon: Share2, label: "Share Profile" },
                  { icon: BarChart3, label: "Salaries" },
                ].map((item, i) => (
                  <button
                    key={i}
                    className="p-3 md:p-4 flex flex-col items-center gap-2"
                  >
                    <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    <span className="text-[11px] md:text-xs">
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>

      
    </div>
  );
}
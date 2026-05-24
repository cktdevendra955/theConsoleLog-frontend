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
} from "lucide-react";

/* ---------------- DESIGN SYSTEM ---------------- */

const gradientBtn =
  "bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:opacity-90 transition";

const Card = ({ children }: any) => (
  <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-sm transition">
    {children}
  </div>
);

const Section = ({ title, action, children }: any) => (
  <div className="space-y-4">
    <div className="flex justify-between items-center">
      <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
      {action && (
        <button className="text-sm text-emerald-600 hover:underline">
          {action}
        </button>
      )}
    </div>
    {children}
  </div>
);

const StatCard = ({ icon: Icon, value, label, highlight }: any) => (
  <div
    className={`rounded-2xl p-6 border transition hover:shadow-sm ${
      highlight
        ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-transparent"
        : "bg-white border-gray-100"
    }`}
  >
    <Icon className={`w-5 h-5 ${highlight ? "text-white" : "text-emerald-600"}`} />

    <div className="mt-6">
      <h3 className="text-3xl font-bold">{value}</h3>
      <p
        className={`text-sm mt-1 ${
          highlight ? "text-white/80" : "text-gray-500"
        }`}
      >
        {label}
      </p>
    </div>
  </div>
);

const ActionBtn = ({ icon: Icon, label }: any) => (
  <button className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition">
    <Icon className="w-5 h-5 text-emerald-600" />
    <span className="text-xs text-gray-600">{label}</span>
  </button>
);

/* ---------------- PAGE ---------------- */

export default function Page() {
  return (
    <div className="bg-white min-h-screen text-gray-900">
      <main className="px-6 md:px-10 py-8 space-y-10">

        {/* HERO */}
        <section className="flex flex-col md:flex-row justify-between md:items-end gap-6">
          <div>
            <p className="text-xs tracking-widest text-gray-400">
              MONDAY, OCTOBER 24
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mt-2">
              Welcome back, Devendra
            </h1>

            <p className="text-gray-500 mt-3 max-w-xl">
              Your profile strength is{" "}
              <span className="text-emerald-600 font-medium">Excellent</span>.
              You have new opportunities waiting.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="px-5 py-3 rounded-xl border hover:bg-gray-50 transition">
              Update Resume
            </button>

            <button className={`px-6 py-3 rounded-xl ${gradientBtn}`}>
              Quick Apply
            </button>
          </div>
        </section>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <StatCard icon={Send} value="24" label="Jobs Applied" />
          <StatCard icon={CalendarCheck} value="03" label="Interviews" />

          {/* Highlight Card */}
          <StatCard
            icon={BadgeCheck}
            value="85%"
            label="Profile Completion"
            highlight
          />
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* LEFT */}
          <div className="lg:col-span-8 space-y-10">

            {/* RECOMMENDED */}
            <Section title="Recommended for You" action="View All">
              <div className="space-y-3">
                {[1, 2].map((_, i) => (
                  <Card key={i}>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">
                          {i === 0
                            ? "Lead Experience Designer"
                            : "Senior Visual Architect"}
                        </h4>
                        <p className="text-sm text-gray-500">
                          Company • Location
                        </p>
                      </div>

                      <Bookmark className="w-5 h-5 text-gray-400 hover:text-emerald-600 cursor-pointer" />
                    </div>
                  </Card>
                ))}
              </div>
            </Section>

            {/* TABLE */}
            <Section title="Application History">
              <Card>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="text-left text-gray-400 text-xs">
                      <tr>
                        <th className="py-3">Company</th>
                        <th>Role</th>
                        <th>Date</th>
                        <th>Status</th>
                      </tr>
                    </thead>

                    <tbody className="border-t">
                      <tr className="border-t">
                        <td className="py-4">DesignStudio</td>
                        <td>Product Designer</td>
                        <td>Oct 21</td>
                        <td className="text-emerald-600 font-medium">
                          Interviewing
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card>
            </Section>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-4 space-y-6">

            {/* INTERVIEW */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-2xl p-6">
              <div className="flex justify-between">
                <Video />
                <span className="text-xs opacity-80">Tomorrow</span>
              </div>

              <h3 className="mt-6 text-lg font-semibold">
                Interview with Lumina
              </h3>

              <button className="mt-5 w-full bg-white text-emerald-600 py-3 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition">
                Join Meeting
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>

            {/* QUICK ACTIONS */}
            <Card>
              <div className="grid grid-cols-2 gap-3">
                <ActionBtn icon={FileText} label="Resume" />
                <ActionBtn icon={Pencil} label="Cover Letter" />
                <ActionBtn icon={Share2} label="Share" />
                <ActionBtn icon={BarChart3} label="Salary" />
              </div>
            </Card>

          </div>
        </div>
      </main>
    </div>
  );
}
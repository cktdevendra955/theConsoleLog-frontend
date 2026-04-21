import DashboardContent from "./components/dashboardHome/DashboardHome";
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
      
      <main className=" pt-24 px-10 pb-16 min-h-screen">
        
        <section className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <p className="text-primary font-label text-[10px] tracking-widest mb-3">
              MONDAY, OCTOBER 24
            </p>
            <h1 className="text-5xl font-bold text-editorial-tight text-on-surface mb-4">
              Welcome back, Devendra.
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-lg leading-relaxed">
              Your profile strength is{" "}
              <span className="text-primary font-semibold">Excellent</span>. You
              have 3 new matching roles and an interview scheduled for tomorrow.
            </p>
          </div>
          <div className="mt-8 md:mt-0 flex gap-4">
            <button className="px-6 py-3 rounded-xxl bg-surface-container-high text-primary font-semibold text-sm hover:opacity-80 transition-all">
              Update Resume
            </button>
            <button className="px-8 py-3 rounded-xxl bg-gradient-to-br from-primary to-primary-container  font-semibold text-sm shadow-md hover:shadow-lg transition-all">
              Quick Apply
            </button>
          </div>
        </section>

        {/* STATS */}
        <div className="grid grid-cols-12 gap-6 mb-12">
          
          <div className="col-span-12 md:col-span-3 bg-white p-8 rounded-xxl shadow-sm flex flex-col justify-between h-48">
            <Send className="w-8 h-8 text-primary-container" />
            <div>
              <h3 className="text-4xl font-bold text-editorial-tight text-on-surface">
                24
              </h3>
              <p className="text-xs font-label text-on-surface-variant mt-1">
                JOBS APPLIED
              </p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-3 bg-white p-8 rounded-xxl shadow-sm flex flex-col justify-between h-48">
            <CalendarCheck className="w-8 h-8 text-tertiary-container" />
            <div>
              <h3 className="text-4xl font-bold text-editorial-tight text-on-surface">
                03
              </h3>
              <p className="text-xs font-label text-on-surface-variant mt-1">
                INTERVIEWS
              </p>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 bg-white p-8 rounded-xxl flex flex-col justify-between overflow-hidden relative group">
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-2">Profile Completion</h3>
              <p className="text-sm text-on-surface-variant mb-6">
                Complete your portfolio to unlock Premium visibility.
              </p>
              <div className="w-full bg-white/50 rounded-full h-2 mb-2">
                <div className="bg-primary h-full rounded-full"></div>
              </div>
              <p className="text-[10px] font-bold text-primary">
                85% COMPLETE — ALMOST THERE
              </p>
            </div>

            <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <BadgeCheck className="w-32 h-32" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          
          <div className="col-span-12 lg:col-span-8 space-y-12">
            
            {/* Recommended */}
            <div>
              <div className="flex justify-between items-end mb-6">
                <h2 className="text-2xl font-bold text-editorial-headline">
                  Recommended for You
                </h2>
                <button className="text-sm font-semibold text-primary hover:underline">
                  View All
                </button>
              </div>

              <div className="space-y-4">

                {/* Card 1 */}
                <div className="bg-white p-6 rounded-xl shadow-sm flex items-center gap-6">
                  <div className="w-14 h-14 bg-surface-container rounded-xl"></div>

                  <div className="flex-1">
                    <h4 className="font-bold text-lg">
                      Lead Experience Designer
                    </h4>
                    <p className="text-sm text-on-surface-variant">
                      Lumina Systems • San Francisco
                    </p>
                  </div>

                  <button className="w-10 h-10 flex items-center justify-center">
                    <Bookmark className="w-5 h-5" />
                  </button>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-6 rounded-xl shadow-sm flex items-center gap-6">
                  <div className="w-14 h-14 bg-surface-container rounded-xl"></div>

                  <div className="flex-1">
                    <h4 className="font-bold text-lg">
                      Senior Visual Architect
                    </h4>
                    <p className="text-sm text-on-surface-variant">
                      Prism Creative • Remote
                    </p>
                  </div>

                  <button className="w-10 h-10 flex items-center justify-center">
                    <Bookmark className="w-5 h-5 text-primary" />
                  </button>
                </div>

              </div>
            </div>

            {/* Table */}
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Application History
              </h2>
              <div className="bg-white rounded-xxl overflow-hidden shadow-sm">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-white">
                      <th className="px-6 py-4 text-xs">COMPANY</th>
                      <th className="px-6 py-4 text-xs">ROLE</th>
                      <th className="px-6 py-4 text-xs">DATE</th>
                      <th className="px-6 py-4 text-xs">STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-6 py-5">DesignStudio</td>
                      <td className="px-6 py-5">Product Designer</td>
                      <td className="px-6 py-5">Oct 21</td>
                      <td className="px-6 py-5">Interviewing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="col-span-12 lg:col-span-4 space-y-8">

            <div className="bg-primary  p-8 rounded-xxl relative">
              <div className="flex justify-between items-start mb-8">
                <Video className="w-10 h-10" />
                <span className="text-xs">TOMORROW</span>
              </div>

              <h3 className="text-xl font-bold mb-1">
                Interview with Lumina
              </h3>

              <button className="w-full bg-white text-primary py-3 rounded-xl flex items-center justify-center gap-2">
                Join Meeting
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Actions */}
            <div className="bg-white p-6 rounded-xxl">
              <div className="grid grid-cols-2 gap-3">

                <button className="p-4 flex flex-col items-center gap-2">
                  <FileText className="w-6 h-6 text-primary" />
                  <span className="text-xs">New Resume</span>
                </button>

                <button className="p-4 flex flex-col items-center gap-2">
                  <Pencil className="w-6 h-6 text-primary" />
                  <span className="text-xs">Cover Letter</span>
                </button>

                <button className="p-4 flex flex-col items-center gap-2">
                  <Share2 className="w-6 h-6 text-primary" />
                  <span className="text-xs">Share Profile</span>
                </button>

                <button className="p-4 flex flex-col items-center gap-2">
                  <BarChart3 className="w-6 h-6 text-primary" />
                  <span className="text-xs">Salaries</span>
                </button>

              </div>
            </div>

          </div>
        </div>
      </main>

      {/* FLOAT BUTTON */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-primary  rounded-full flex items-center justify-center">
        <Plus className="w-6 h-6" />
      </button>

    </div>
  );
}
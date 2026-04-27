"use client";
import {
  Plus,
  ChevronDown,
  Info,
  MoreVertical,
  Star,
  CalendarDays,
  Archive,
  FileText,
  Mic,
  ArrowRight,
  LayoutDashboard,
  Briefcase,
  Search,
  MessageCircle,
  User,
  Filter,
  Calendar,
  Activity,
  ArrowRightLeft,
} from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-surface text-on-surface">
      {/* <!-- Main Content Area --> */}
      <main className="min-h-screen">
        {/* <!-- TopNavBar (Shared Component Implementation) --> */}

        {/* <!-- Canvas Body --> */}
        <section className="pt-24 px-8 pb-12 max-w-7xl mx-auto">
          {/* <!-- Page Header --> */}

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <h2 className="text-[3.5rem] font-bold tracking-[-0.04em] leading-[1.1] text-on-surface mb-2">
                Track Application
              </h2>
              <p className="text-body-lg text-on-surface-variant max-w-lg leading-relaxed">
                Managing 12 active opportunities. You have 2 interviews
                scheduled for this week.
              </p>
            </div>

            <div className="flex gap-3">
              <button className="bg-white text-primary px-6 py-3 rounded-full font-semibold text-sm transition-all hover:scale-[0.98] active:opacity-80">
                Export Report
              </button>

              <button className="bg-gradient-to-br from-primary to-primary-container px-8 py-3 rounded-full font-semibold text-sm shadow-premium transition-all hover:scale-[0.98] active:opacity-80 flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Track Manually
              </button>
            </div>
          </div>
          {/* <!-- Filters & Sorting --> */}

          <div className="bg-white rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4 mb-8 border border-gray-200">
            {/* LEFT FILTER TABS */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 md:pb-0">
              <button className="px-5 py-2 rounded-full bg-black text-white text-sm font-semibold shadow-sm whitespace-nowrap">
                All Applications (12)
              </button>

              <button className="px-5 py-2 rounded-full text-gray-500 text-sm font-medium hover:bg-gray-100 transition-all whitespace-nowrap">
                Interviewing (3)
              </button>

              <button className="px-5 py-2 rounded-full text-gray-500 text-sm font-medium hover:bg-gray-100 transition-all whitespace-nowrap">
                Shortlisted (5)
              </button>

              <button className="px-5 py-2 rounded-full text-gray-500 text-sm font-medium hover:bg-gray-100 transition-all whitespace-nowrap">
                Archived (4)
              </button>
            </div>

            {/* RIGHT SORT */}
            <div className="flex items-center gap-3 ml-auto">
              <div className="relative flex items-center">
                {/* Optional filter icon (premium touch) */}
                <Filter className="w-4 h-4 text-gray-400 absolute left-3" />

                <select className="appearance-none bg-gray-50 border border-gray-200 rounded-xl py-2 pl-9 pr-10 text-sm font-medium text-gray-600 focus:ring-2 focus:ring-black/10 cursor-pointer">
                  <option>Date Applied (Newest)</option>
                  <option>Company (A-Z)</option>
                  <option>Status Level</option>
                </select>

                <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 pointer-events-none" />
              </div>
            </div>
          </div>
          {/* <!-- Application Table (Bento/Card Hybrid) --> */}
          <div className="space-y-4">
            {/* <!-- Table Header (Desktop Only) --> */}

            <div className="hidden md:grid grid-cols-12 px-8 py-3 text-[0.75rem] font-bold tracking-[0.05em] uppercase text-outline">
              <div className="col-span-4 flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Job & Company
              </div>

              <div className="col-span-2 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Date Applied
              </div>

              <div className="col-span-2 flex items-center justify-center gap-2">
                <Activity className="w-4 h-4" />
                Status
              </div>

              <div className="col-span-3 flex items-center gap-2">
                <ArrowRightLeft className="w-4 h-4" />
                Next Step / Timeline
              </div>

              <div className="col-span-1 flex justify-end">
                <MoreVertical className="w-4 h-4" />
              </div>
            </div>
            {/* <!-- Row 1: Shortlisted --> */}

            <div className="bg-white rounded-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 items-center gap-6 shadow-premium group transition-all hover:bg-white">
              <div className="col-span-4 flex items-center gap-5">
                <div className="w-14 h-14 bg-surface-container rounded-xl flex items-center justify-center overflow-hidden">
                  <img
                    alt="Company Logo"
                    className="w-8 h-8 object-contain"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAK8WASIMu-xe3zn150XvMWiOb8EeUdi1xz0n7uy9cYkDirsNTSbOusySJ9gx1fpolc56et8oYdrwW1ypBH1SdDXMlFdo9JqiojthD2x_391-FpRwKdY4GLE2EU0sl3a1kFPjZBd2XqbrG-Da9cy1fUC7E6bofXpuC-SNP5VK87LqtJGuSNOxbN9ZkBRC3c9wGwlnVVOVRH_9b7TKm7q1acREoFKR-hlQBld99O8uz6agmhd8FBn1vakV_GcTPA5g5HTyusvM28K95p"
                  />
                </div>

                <div>
                  <h4 className="text-title-lg font-semibold text-on-surface">
                    Senior Product Designer
                  </h4>
                  <p className="text-body-lg text-on-surface-variant">
                    Linear • Hybrid
                  </p>
                </div>
              </div>

              <div className="col-span-2">
                <p className="text-body-lg text-on-surface">Oct 24, 2023</p>
                <p className="text-xs text-on-surface-variant">2 days ago</p>
              </div>

              <div className="col-span-2 flex justify-center">
                <span className="bg-primary/5 text-primary px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  Shortlisted
                </span>
              </div>

              <div className="col-span-3">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-on-surface">Interview Setup</span>
                    <span className="text-primary">60%</span>
                  </div>

                  <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                    <div className="w-[60%] h-full bg-primary rounded-full"></div>
                  </div>

                  <p className="text-[11px] text-on-surface-variant flex items-center gap-1">
                    <Info className="w-3.5 h-3.5" />
                    Waiting for recruiter to confirm slots
                  </p>
                </div>
              </div>

              <div className="col-span-1 text-right">
                <button className="w-10 h-10 rounded-full hover:bg-surface-container transition-colors flex items-center justify-center">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>
            {/* <!-- Row 2: Interview Scheduled --> */}

            <div className="bg-white rounded-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 items-center gap-6 shadow-premium transition-all hover:bg-white ring-2 ring-primary/10">
              <div className="col-span-4 flex items-center gap-5">
                <div className="w-14 h-14 bg-surface-container rounded-xl flex items-center justify-center overflow-hidden">
                  <img
                    alt="Company Logo"
                    className="w-8 h-8 object-contain"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA192iV9kvv7p1nnPQ7TBgvd1NhOBA0aESkpzZe06o_XBXDnZeaH-91m132oDkTjAb-OWIQ01G0oISIX4iyWmqSjVrLlDH8Zs1Br7uHQQcEP6pPcqE6b8VbL-h-2hJ5DmgGwFEs8dMqsGE9ep1Tc24bjE48yM8FYUMZ4WJmiwPsBkAhuL6hYvUK0DuzKtUAgJjptQDyHQWn1QnRnbBtSnEB8_SP2gOEZTCv4YQdKxJwFC52ORPpN8Ls3FllNNh8aro3iqBWZJwpGP_C"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-title-lg font-semibold text-on-surface">
                      Lead UX Researcher
                    </h4>
                    <Star className="w-4 h-4 text-yellow-500" />
                  </div>
                  <p className="text-body-lg text-on-surface-variant">
                    Spotify • Remote
                  </p>
                </div>
              </div>

              <div className="col-span-2">
                <p className="text-body-lg text-on-surface">Oct 20, 2023</p>
                <p className="text-xs text-on-surface-variant">6 days ago</p>
              </div>

              <div className="col-span-2 flex justify-center">
                <span className="bg-tertiary-container/10 text-tertiary px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider whitespace-nowrap">
                  Interview Scheduled
                </span>
              </div>

              <div className="col-span-3">
                <div className="bg-white rounded-xl p-3 flex items-center gap-3 border border-primary/10">
                  <CalendarDays className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-[10px] font-bold uppercase text-primary">
                      TOMORROW • 10:00 AM
                    </p>
                    <p className="text-xs text-on-surface font-medium">
                      Technical Round with Maya Chen
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-span-1 text-right">
                <button className="bg-primary text-[10px] font-bold py-2 px-3 rounded-lg hover:bg-primary-container transition-all">
                  JOIN
                </button>
              </div>
            </div>
            {/* <!-- Row 3: Applied --> */}

            <div className="bg-white rounded-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 items-center gap-6 shadow-premium group transition-all hover:bg-white opacity-80 hover:opacity-100">
              <div className="col-span-4 flex items-center gap-5">
                <div className="w-14 h-14 bg-surface-container rounded-xl flex items-center justify-center overflow-hidden">
                  <img
                    alt="Company Logo"
                    className="w-8 h-8 object-contain"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgZx35Jl7jhdicNC7oExOGllxtGuQe5193Hgy5dbw0kWs0g4BJObWNXi-mRWzsHWozohGYKfmyhUTivcWrd6kUUXTZKfNWGCBUlVoYj30m9HwULnjmEoG46odpSSB0HkNzWDI1sIVE2hKzrCVNOoh-DZ-rXo5O9Yv-YigSLJWB6HWN8xH8ii_XubHVqq4u171In-riehVHcK71nt3iIAMtS5lXGjymTwwesvblTu1q6Zqwy6S-NYeRIVIQfHtmUDG6hL_8s-00cv2v"
                  />
                </div>

                <div>
                  <h4 className="text-title-lg font-semibold text-on-surface">
                    Interface Architect
                  </h4>
                  <p className="text-body-lg text-on-surface-variant">
                    Studio J • On-site
                  </p>
                </div>
              </div>

              <div className="col-span-2">
                <p className="text-body-lg text-on-surface">Oct 18, 2023</p>
                <p className="text-xs text-on-surface-variant">8 days ago</p>
              </div>

              <div className="col-span-2 flex justify-center">
                <span className="bg-outline-variant/20 text-on-surface-variant px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  Applied
                </span>
              </div>

              <div className="col-span-3">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-on-surface">Review Stage</span>
                    <span className="text-on-surface-variant">15%</span>
                  </div>

                  <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                    <div className="w-[15%] h-full bg-outline rounded-full"></div>
                  </div>

                  <p className="text-[11px] text-on-surface-variant">
                    Resume submitted, pending HR review
                  </p>
                </div>
              </div>

              <div className="col-span-1 text-right">
                <button className="w-10 h-10 rounded-full hover:bg-surface-container transition-colors flex items-center justify-center">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>
            {/* <!-- Row 4: Rejected --> */}

            <div className="bg-white rounded-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 items-center gap-6 shadow-premium group transition-all opacity-60">
              <div className="col-span-4 flex items-center gap-5">
                <div className="w-14 h-14 bg-surface-container rounded-xl flex items-center justify-center grayscale">
                  <img
                    alt="Company Logo"
                    className="w-8 h-8 object-contain"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5koLjTIjI3vTMNFvQ9rMEJywu5ASwY4tUKcS_0mMfh0ttOoNa_4DYsonNHymYKRljbOpq_hduDtu8vMCuamfZJCtUY36Q8SG1a0aL4LXmyCibLYkBIbQbWfUdcQOJjo5u5OHCv7Hip1i9ct7tomOT2yPlpIadtk6c2gJIrBYx5mG9WnJKHnGg3pkyU4pBw6M-kQiTVBS2nsAWS32lwSTrOo5nvPyd3xhBlKG-bfL-I41LxlgvEgw7BibSxwTVsdStNGcxE6EQExxE"
                  />
                </div>

                <div>
                  <h4 className="text-title-lg font-semibold text-on-surface line-through">
                    Product Strategist
                  </h4>
                  <p className="text-body-lg text-on-surface-variant">
                    X (Twitter) • Remote
                  </p>
                </div>
              </div>

              <div className="col-span-2">
                <p className="text-body-lg text-on-surface">Oct 12, 2023</p>
                <p className="text-xs text-on-surface-variant">14 days ago</p>
              </div>

              <div className="col-span-2 flex justify-center">
                <span className="bg-error/5 text-error px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  Rejected
                </span>
              </div>

              <div className="col-span-3">
                <p className="text-xs text-error font-medium leading-relaxed italic">
                  "We've decided to move forward with other candidates who more
                  closely align with our current needs."
                </p>
              </div>

              <div className="col-span-1 text-right">
                <button className="w-10 h-10 rounded-full hover:bg-surface-container transition-colors flex items-center justify-center">
                  <Archive className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          {/* <!-- Asymmetric Bento Insights Section --> */}

          <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* LEFT CARD */}
            <div className="lg:col-span-2 bg-gradient-to-br from-primary to-primary-container rounded-[2rem] p-10 relative overflow-hidden">
              <div className="relative z-10">
                <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-[10px] font-bold uppercase tracking-widest mb-6">
                  Weekly Insight
                </span>

                <h3 className="text-4xl font-bold tracking-tight mb-4">
                  Your application speed is{" "}
                  <span className="text-tertiary-fixed">40% faster</span> than
                  the average candidate.
                </h3>

                <p className="max-w-md leading-relaxed mb-8">
                  Data shows that candidates who follow up within 3 days of an
                  interview scheduled status have a 25% higher success rate.
                </p>

                <button className="text-primary px-8 py-4 rounded-full font-bold text-sm shadow-xl transition-transform hover:scale-105 active:scale-95">
                  View Strategy Guide
                </button>
              </div>

              {/* Decorative */}
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
            </div>

            {/* RIGHT CARD */}
            <div className="bg-white rounded-[2rem] p-8 shadow-premium flex flex-col justify-between">
              <div>
                <h4 className="text-label-md text-on-surface-variant mb-6">
                  Upcoming Deadlines
                </h4>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-on-surface">
                        Design Challenge
                      </p>
                      <p className="text-xs text-on-surface-variant">
                        Due in 2 days • Figma
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0">
                      <Mic className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-on-surface">
                        Intro Video Submission
                      </p>
                      <p className="text-xs text-on-surface-variant">
                        Due in 5 days • Loom
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <a
                className="text-primary text-sm font-bold flex items-center gap-2 mt-8 hover:translate-x-1 transition-transform"
                href="#"
              >
                Go to Tasks <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white/90 backdrop-blur-xl border-t border-outline-variant/10 flex items-center justify-around px-4 z-50">
        <button className="flex flex-col items-center gap-1 text-on-surface-variant">
          <LayoutDashboard className="w-5 h-5" />
          <span className="text-[10px] font-medium">Home</span>
        </button>

        <button className="flex flex-col items-center gap-1 text-primary">
          <Briefcase className="w-5 h-5" />
          <span className="text-[10px] font-bold">Applied</span>
        </button>

        <div className="w-12 h-12 bg-primary rounded-full -mt-8 shadow-lg flex items-center justify-center ring-4 ring-surface">
          <Search className="w-5 h-5" />
        </div>

        <button className="flex flex-col items-center gap-1 text-on-surface-variant">
          <MessageCircle className="w-5 h-5" />
          <span className="text-[10px] font-medium">Messages</span>
        </button>

        <button className="flex flex-col items-center gap-1 text-on-surface-variant">
          <User className="w-5 h-5" />
          <span className="text-[10px] font-medium">Profile</span>
        </button>
      </nav>
    </div>
  );
}
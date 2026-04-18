"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Calendar as CalendarIcon,
  Clock,
  Video,
  MapPin,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  User,
} from "lucide-react";

export default function Interviews() {
  return (
    <div className="bg-surface text-on-surface antialiased">
      {/* <!-- Main Content --> */}
      <main className=" mt-16 p-10 bg-surface min-h-screen">
        <div className="max-w-6xl mx-auto">
          {/* <!-- Header Section --> */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
            <div>
              <h2 className="text-[3.5rem] font-bold tracking-[-0.04em] leading-[1.1] text-on-surface">
                Interviews
              </h2>
              <p className="text-body-lg text-on-surface-variant mt-4 max-w-lg">
                Manage your upcoming meetings and technical rounds. Your next
                opportunity is just a click away.
              </p>
            </div>
            <div className="flex p-1 bg-surface-container-low rounded-xl">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-lowest shadow-sm text-primary font-semibold text-sm transition-all">
                <span className="material-symbols-outlined text-[18px]">
                  list
                </span>
                List View
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-on-surface-variant hover:text-on-surface font-medium text-sm transition-all">
                <span className="material-symbols-outlined text-[18px]">
                  calendar_month
                </span>
                Calendar
              </button>
            </div>
          </div>
          {/* <!-- Bento Layout Content --> */}
          <div className="grid grid-cols-12 gap-6">
            {/* <!-- Main Interview List (Column 1-8) --> */}
            <div className="col-span-12 lg:col-span-8 space-y-6">
              {/* <!-- Section Title --> */}
              <div className="flex items-center justify-between px-2">
                <h3 className="text-[0.75rem] font-bold tracking-[0.05em] text-on-surface-variant uppercase">
                  Upcoming Rounds (3)
                </h3>
                <a
                  className="text-sm font-semibold text-primary hover:underline"
                  href="#"
                >
                  View History
                </a>
              </div>
              {/* <!-- Interview Card 1: Featured/Next --> */}
              <div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0_2px_4px_rgba(25,28,30,0.02),0_12px_24px_rgba(25,28,30,0.04)] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-all group-hover:bg-primary/10"></div>
                <div className="flex items-start justify-between relative z-10">
                  <div className="flex gap-5">
                    <div className="w-16 h-16 bg-surface-container-low rounded-2xl flex items-center justify-center p-3">
                      <img
                        alt="Linear Technology"
                        className="w-full h-full object-contain"
                        data-alt="Abstract geometric minimalist logo in deep blue for a high-end technology company"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBd18O1AnOSix461h7rMn3xSNNydZUqcb4uvRpMDna0IoEdyPCwXaTVO0XoogRuiISYuxj_qA-PZoX0V4aHE3LUDdpQZPnchK0xDb-m-3vig-whMeSdBpCMr3HCviEDnAgmOWp25kweuO1R3aB-75R3g_bNJ6hcSQUlJqZLaZ0cIFPebGweA0WERBlKblVA6yZe3wqYSuHN2GRhbBbNaav7zwzUq7v_qE8nmWr_8_xPEj3WBAmDDKGES4oX2S4eluc1Xta18Q8BzmEF"
                      />
                    </div>
                    <div>
                      <h4 className="text-title-lg font-semibold text-on-surface">
                        Senior Product Designer
                      </h4>
                      <p className="text-body-lg text-on-surface-variant">
                        Linear Technology • Technical Round
                      </p>
                      <div className="flex items-center gap-4 mt-4 text-sm font-medium text-on-surface-variant">
                        <div className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[18px] text-primary">
                            calendar_today
                          </span>
                          Tomorrow, Oct 24
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[18px] text-primary">
                            schedule
                          </span>
                          10:00 AM - 11:30 AM
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase">
                    High Priority
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-surface-container-low flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-[#EA4335]/10 flex items-center justify-center text-[#EA4335]">
                      <span className="material-symbols-outlined text-[16px]">
                        videocam
                      </span>
                    </span>
                    <span className="text-sm font-medium text-on-surface-variant">
                      Google Meet • 45 min
                    </span>
                  </div>
                  <button className="bg-primary-gradient text-white px-6 py-2.5 rounded-full font-semibold text-sm shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:-translate-y-0.5 active:translate-y-0">
                    Join Interview
                  </button>
                </div>
              </div>
              {/* <!-- Interview Card 2 --> */}
              <div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0_2px_4px_rgba(25,28,30,0.02)] border border-transparent hover:border-outline-variant/30 transition-all">
                <div className="flex items-start justify-between">
                  <div className="flex gap-5">
                    <div className="w-16 h-16 bg-surface-container-low rounded-2xl flex items-center justify-center p-3">
                      <img
                        alt="Flow Systems"
                        className="w-full h-full object-contain"
                        data-alt="Elegant fluid line logo representing dynamic flow and connectivity for a fintech brand"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8YJfqDogJQvh4wOsKFS8aUsXA08t9x3MSdjmctBwg_ea9GzVZF-n_r5T2KBgt-kDlcx4PjDdJ3_eOvBXFcQC96pGunxQAA2nTD2mjaAJvAIDci6NIycEYPSDU-fF2O4omA8MEm-YfsGexhgLRvZq4rV1e0O7euhFBySkWWvCvpjMiKmV5buac3vkd-D6WGoGffWziKQXe9M9aofZ18Kw4Hk2i0JhdZcbVahgBVGWP9MZL2enuv-pVkmqMTmnqdcJGPaOKPDTBFfaf"
                      />
                    </div>
                    <div>
                      <h4 className="text-title-lg font-semibold text-on-surface">
                        Design Systems Lead
                      </h4>
                      <p className="text-body-lg text-on-surface-variant">
                        Flow Systems • Culture Fit
                      </p>
                      <div className="flex items-center gap-4 mt-4 text-sm font-medium text-on-surface-variant">
                        <div className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[18px]">
                            calendar_today
                          </span>
                          Oct 26, 2023
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[18px]">
                            schedule
                          </span>
                          2:00 PM - 2:45 PM
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="p-2 text-outline hover:text-on-surface transition-colors">
                    <span className="material-symbols-outlined">
                      more_horiz
                    </span>
                  </button>
                </div>
                <div className="mt-6 flex items-center justify-between bg-surface-container-low/50 p-4 rounded-xl">
                  <div className="flex items-center gap-3">
                    <img
                      alt="Interviewer"
                      className="w-8 h-8 rounded-full object-cover"
                      data-alt="Portrait of a smiling professional male interviewer in a light-filled office environment"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGyutfnqxDqgPyJAvPWC3xijMopfPfqAaRONHOCvZvbPnvzWRs9VS-zbFsHKWNv55NMeUy4ozs6LQahBkVlq5gd-vRx2BNNozIbudjuWyidO6oIFmpHfq8xPbR1T-XyzpKlDhf93AjqxylQVEzjjEooEIfu463fuuAKCMJxsgGd8Hngkh3eVFt0wIXvIW84BndfarkvI0amn6dtjwjeK6G2wXIXbwPh0uMOQvdd8jq1fHtvYZ8Hi0npHwx_arDYMmJfw1D-qH-eDR_"
                    />
                    <div className="text-xs">
                      <p className="font-bold text-on-surface">Sarah Jenkins</p>
                      <p className="text-on-surface-variant">
                        Head of Experience
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="text-sm font-semibold text-primary px-4 py-2 hover:bg-white rounded-lg transition-all">
                      Details
                    </button>
                    <button className="bg-surface-container-highest text-on-surface-variant px-6 py-2.5 rounded-full font-semibold text-sm opacity-60 cursor-not-allowed">
                      Link Pending
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- Interview Card 3 --> */}
              <div className="bg-surface-container-lowest rounded-xl p-6 shadow-[0_2px_4px_rgba(25,28,30,0.02)]">
                <div className="flex items-start justify-between">
                  <div className="flex gap-5">
                    <div className="w-16 h-16 bg-surface-container-low rounded-2xl flex items-center justify-center p-3">
                      <img
                        alt="Neura"
                        className="w-full h-full object-contain"
                        data-alt="Modern logo with neural network nodes, high tech aesthetic in violet and white"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs8AN4lMhOMM2G7N3xvW2Sk_TK3q0pP6x-wlnDu8-JWJpqioyVwd6NwNGGmlmDL2c6X4eazky_7gAEWAxuOO3HnT7WfaH6NpIyujGC8Q0MRCmY8AUkGjfGa9w9yAGVNu0Yf5Gfls05_5kPLBPR19tv1jgNPhuW8EQBSByMfxz_LAi19zGtmbQ8SPtkLIkSw0WKo4Dj3NyS0ZHEFR8qoTvGqxTHzNNhB1wOQDahkryMlXbjWRGewWo5XwhN65I9tncY0iLWCSGQ6UJ2"
                      />
                    </div>
                    <div>
                      <h4 className="text-title-lg font-semibold text-on-surface">
                        UI/UX Architect
                      </h4>
                      <p className="text-body-lg text-on-surface-variant">
                        Neura AI • Portfolio Review
                      </p>
                      <div className="flex items-center gap-4 mt-4 text-sm font-medium text-on-surface-variant">
                        <div className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[18px]">
                            calendar_today
                          </span>
                          Oct 30, 2023
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[18px]">
                            schedule
                          </span>
                          4:00 PM - 5:30 PM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center">
                      <span className="material-symbols-outlined text-[16px]">
                        location_on
                      </span>
                    </span>
                    <span className="text-sm font-medium text-on-surface-variant">
                      San Francisco Office • In-Person
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high transition-all">
                      <span className="material-symbols-outlined">map</span>
                    </button>
                    <button className="secondary bg-surface-container-high text-primary px-6 py-2.5 rounded-full font-semibold text-sm hover:opacity-80 transition-all">
                      Add to Calendar
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Sidebar Widgets (Column 9-12) --> */}
            <div className="col-span-12 lg:col-span-4 space-y-6">
              {/* <!-- Prep Checklist Card --> */}
              <div className="bg-surface-container-low rounded-xl p-8 relative overflow-hidden">
                <h3 className="text-title-lg font-semibold text-on-surface mb-2">
                  Preparation Guide
                </h3>
                <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
                  Boost your success rate by following these curated steps for
                  your upcoming rounds.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center bg-white">
                      <span className="material-symbols-outlined text-[12px] text-primary font-bold">
                        check
                      </span>
                    </div>
                    <span className="text-sm text-on-surface font-medium">
                      Research company values
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center bg-white">
                      <span className="material-symbols-outlined text-[12px] text-primary font-bold">
                        check
                      </span>
                    </div>
                    <span className="text-sm text-on-surface font-medium">
                      Review your case studies
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border-2 border-outline-variant flex items-center justify-center"></div>
                    <span className="text-sm text-on-surface-variant">
                      Prepare 3-5 key questions
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border-2 border-outline-variant flex items-center justify-center"></div>
                    <span className="text-sm text-on-surface-variant">
                      Check technical environment
                    </span>
                  </div>
                </div>
                <button className="w-full mt-8 py-3 rounded-xl bg-white text-primary font-bold text-sm shadow-sm hover:shadow-md transition-all">
                  View Full Checklist
                </button>
              </div>
              {/* <!-- Quick Stats Bento Item --> */}
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <span className="text-[0.65rem] font-bold tracking-[0.1em] text-on-surface-variant uppercase">
                  Your Activity
                </span>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-on-surface">
                      12
                    </span>
                    <span className="text-xs text-on-surface-variant mt-1">
                      Interviews completed
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-primary">85%</span>
                    <span className="text-xs text-on-surface-variant mt-1">
                      Acceptance rate
                    </span>
                  </div>
                </div>
                <div className="mt-8">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-xs font-semibold text-on-surface">
                      Preparation Score
                    </span>
                    <span className="text-xs font-bold text-primary">High</span>
                  </div>
                  <div className="w-full h-2 bg-surface-container-low rounded-full overflow-hidden">
                    <div className="h-full bg-primary-gradient w-[78%]"></div>
                  </div>
                </div>
              </div>
              {/* <!-- Tips Widget --> */}
              <div className="p-6 bg-tertiary-fixed rounded-xl flex items-start gap-4">
                <div className="p-2 bg-white/40 rounded-lg">
                  <span className="material-symbols-outlined text-on-tertiary-fixed">
                    lightbulb
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-on-tertiary-fixed">
                    Pro Tip
                  </h4>
                  <p className="text-xs text-on-tertiary-fixed-variant mt-1 leading-relaxed">
                    Candidates who send a thank-you note within 24 hours are 40%
                    more likely to move to the final stage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

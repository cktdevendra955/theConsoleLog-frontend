"use client";

import React from "react";

import {
  LayoutDashboard,
  PlusCircle,
  BriefcaseBusiness,
  Users,
  CalendarDays,
  Mail,
  BarChart3,
  Search,
  Bell,
  ChevronRight,
  Video,
  Sparkles,
  Menu,
} from "lucide-react";

export default function RecruiterDashboardPage() {
  return (
    <div className="bg-background text-on-surface antialiased">
      <aside className="fixed left-0 top-0 z-50 h-screen w-64 bg-slate-50 dark:bg-slate-900 border-r border-slate-200/50 dark:border-slate-800/50 hidden lg:flex flex-col py-8 px-4">
        <div className="mb-10 px-4">
          <h1 className="text-lg font-bold text-indigo-700 dark:text-indigo-300 tracking-tight leading-relaxed">
            The Curator
          </h1>

          <p className="text-xs font-sans tracking-tight text-slate-500">
            Elite Talent Partners
          </p>
        </div>

        <nav className="flex-grow space-y-1">
          <a
            className="flex items-center px-4 py-3 text-indigo-700 dark:text-indigo-400 font-semibold border-r-4 border-indigo-600 dark:border-indigo-400 bg-indigo-50/50 dark:bg-indigo-900/20 transition-all"
            href="#"
          >
            <LayoutDashboard size={18} className="mr-3" />
            <span className="text-sm">Dashboard</span>
          </a>

          <a
            className="flex items-center px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
            href="#"
          >
            <PlusCircle size={18} className="mr-3" />
            <span className="text-sm">Post Job</span>
          </a>

          <a
            className="flex items-center px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
            href="#"
          >
            <BriefcaseBusiness size={18} className="mr-3" />
            <span className="text-sm">Manage Jobs</span>
          </a>

          <a
            className="flex items-center px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
            href="#"
          >
            <Users size={18} className="mr-3" />
            <span className="text-sm">Candidates</span>
          </a>

          <a
            className="flex items-center px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
            href="#"
          >
            <CalendarDays size={18} className="mr-3" />
            <span className="text-sm">Interviews</span>
          </a>

          <a
            className="flex items-center px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
            href="#"
          >
            <Mail size={18} className="mr-3" />
            <span className="text-sm">Messages</span>
          </a>

          <a
            className="flex items-center px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
            href="#"
          >
            <BarChart3 size={18} className="mr-3" />
            <span className="text-sm">Analytics</span>
          </a>
        </nav>

        <div className="mt-auto px-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          <button className="w-full bg-indigo-600 text-white py-3 px-4 rounded-xl font-semibold text-sm scale-95 active:opacity-80 transition-all">
            Quick Post
          </button>
        </div>
      </aside>
      <header className="fixed top-0 right-0 lg:w-[calc(100%-16rem)] w-full h-16 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md flex items-center justify-between px-4 lg:px-8 z-40 shadow-sm dark:shadow-none">
        <div className="flex items-center">
          {/* Mobile Menu Button */}
          <button className="lg:hidden mr-4 text-slate-600 dark:text-slate-300">
            <Menu size={24} />
          </button>

          {/* Search */}
          <div className="hidden md:flex items-center bg-surface-container-low px-4 py-2 rounded-full w-72 lg:w-96 focus-within:ring-2 focus-within:ring-indigo-500/20 transition-all">
            <Search size={16} className="text-slate-400 mr-2" />

            <input
              className="bg-transparent border-none focus:ring-0 outline-none text-sm w-full text-slate-600 dark:text-slate-300"
              placeholder="Search candidates, roles, or insights..."
              type="text"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4 lg:space-x-6">
          {/* Notification */}
          <button className="relative text-slate-500 hover:text-indigo-700 transition-colors">
            <Bell size={20} />

            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Profile */}
          <div className="flex items-center space-x-3">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-bold text-on-surface">Alex Mercer</p>

              <p className="text-[10px] text-slate-400 uppercase tracking-widest">
                Senior Partner
              </p>
            </div>

            <img
              className="w-10 h-10 rounded-full object-cover ring-2 ring-indigo-50"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAc2XD9BrzFUwPy_DwMD7TDnie37hwSJ49GB1JsKwH09INUjtRcbpMuhDZGK3s0I0vDfmHDAM-irZFqEjknNYBeG0V0BaouuTV9h_qd0GRYtvZXjzNtIyuqmGWLyc6mR8INL54zGx__MX81zQnexaC0nDVkoClGwaXnd7IJwGlsus99UfROAaNXZw0McfB1n8yIU795CJ-mzo9CsBLKC82Negh6E5GOHDv7L9bHbgYmJTJeuVizHGSkcQ41jNP0g3-3-G1nJhXDmUUV"
              alt="Profile"
            />
          </div>
        </div>
      </header>
      <main className="ml-64 pt-24 pb-12 px-8 min-h-screen">
        <div className="mb-10 flex flex-col lg:flex-row justify-between lg:items-end gap-4">
          <div>
            <span className="text-primary font-semibold text-xs tracking-widest uppercase mb-2 block">
              Executive Dashboard
            </span>

            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-on-surface">
              Monday, July 15
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button className="bg-surface-container-lowest text-on-surface-variant px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-surface-container-high transition-colors shadow-sm">
              Export Report
            </button>

            <button className="bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-medium shadow-lg shadow-indigo-200 hover:opacity-90 transition-all">
              Post New Job
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-surface-container-lowest p-6 rounded-xl border border-transparent hover:border-indigo-100 transition-all">
            <div className="flex justify-between items-start mb-4">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Active Jobs
              </p>
              <span className="text-emerald-500 bg-emerald-50 text-[10px] px-2 py-0.5 rounded-full font-bold">
                +12%
              </span>
            </div>
            <div className="flex items-end justify-between">
              <h3 className="text-3xl font-extrabold text-on-surface tracking-tighter">
                24
              </h3>
              <div className="w-20 h-10 flex items-end space-x-1">
                <div className="w-1.5 h-4 bg-primary/20 rounded-full"></div>
                <div className="w-1.5 h-6 bg-primary/40 rounded-full"></div>
                <div className="w-1.5 h-8 bg-primary/60 rounded-full"></div>
                <div className="w-1.5 h-10 bg-primary rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-xl border border-transparent hover:border-indigo-100 transition-all">
            <div className="flex justify-between items-start mb-4">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Total Applicants
              </p>
              <span className="text-indigo-500 bg-indigo-50 text-[10px] px-2 py-0.5 rounded-full font-bold">
                +8%
              </span>
            </div>
            <div className="flex items-end justify-between">
              <h3 className="text-3xl font-extrabold text-on-surface tracking-tighter">
                842
              </h3>
              <div className="w-20 h-10 flex items-end space-x-1">
                <div className="w-1.5 h-6 bg-primary/40 rounded-full"></div>
                <div className="w-1.5 h-10 bg-primary rounded-full"></div>
                <div className="w-1.5 h-5 bg-primary/30 rounded-full"></div>
                <div className="w-1.5 h-7 bg-primary/50 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-xl border border-transparent hover:border-indigo-100 transition-all">
            <div className="flex justify-between items-start mb-4">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Interviews
              </p>
              <span className="text-emerald-500 bg-emerald-50 text-[10px] px-2 py-0.5 rounded-full font-bold">
                +4%
              </span>
            </div>
            <div className="flex items-end justify-between">
              <h3 className="text-3xl font-extrabold text-on-surface tracking-tighter">
                56
              </h3>
              <div className="w-20 h-10 flex items-end space-x-1">
                <div className="w-1.5 h-3 bg-primary/20 rounded-full"></div>
                <div className="w-1.5 h-5 bg-primary/40 rounded-full"></div>
                <div className="w-1.5 h-9 bg-primary/80 rounded-full"></div>
                <div className="w-1.5 h-7 bg-primary/60 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-6 rounded-xl border border-transparent hover:border-indigo-100 transition-all">
            <div className="flex justify-between items-start mb-4">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Hires Made
              </p>
              <span className="text-tertiary-container text-tertiary text-[10px] px-2 py-0.5 rounded-full font-bold">
                Premium
              </span>
            </div>
            <div className="flex items-end justify-between">
              <h3 className="text-3xl font-extrabold text-on-surface tracking-tighter">
                12
              </h3>
              <div className="w-20 h-10 flex items-end space-x-1">
                <div className="w-1.5 h-10 bg-tertiary rounded-full"></div>
                <div className="w-1.5 h-8 bg-tertiary/70 rounded-full"></div>
                <div className="w-1.5 h-6 bg-tertiary/50 rounded-full"></div>
                <div className="w-1.5 h-4 bg-tertiary/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8 space-y-8">
            <section className="bg-surface-container-lowest p-8 rounded-xl border-none">
              <div className="flex justify-between items-center mb-10">
                <h4 className="text-lg font-bold tracking-tight">
                  Hiring Funnel{" "}
                  <span className="text-slate-400 font-normal text-sm ml-2">
                    Conversion: 4.2%
                  </span>
                </h4>
                <div className="flex space-x-2">
                  <span className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                    Sourced
                  </span>
                  <span className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    <span className="w-2 h-2 rounded-full bg-indigo-300 mr-2"></span>
                    Interviewed
                  </span>
                  <span className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    <span className="w-2 h-2 rounded-full bg-tertiary mr-2"></span>
                    Hired
                  </span>
                </div>
              </div>
              <div className="relative h-48 w-full flex items-center justify-center">
                <div className="w-full flex items-center h-full px-12">
                  <div className="h-full bg-primary/10 rounded-l-3xl flex-grow flex flex-col items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-primary opacity-5 group-hover:opacity-10 transition-opacity"></div>
                    <span className="text-3xl font-black text-primary">
                      1,240
                    </span>
                    <span className="text-[10px] font-bold text-primary/60 uppercase tracking-widest">
                      Sourced
                    </span>
                  </div>
                  <div className="h-[80%] bg-indigo-600/10 flex-grow flex flex-col items-center justify-center relative -ml-4 rounded-3xl z-10 border-x-4 border-white">
                    <span className="text-2xl font-black text-indigo-700">
                      184
                    </span>
                    <span className="text-[10px] font-bold text-indigo-700/60 uppercase tracking-widest">
                      Interviewed
                    </span>
                  </div>
                  <div className="h-[60%] bg-tertiary/10 rounded-r-3xl flex-grow flex flex-col items-center justify-center relative -ml-4 z-20 border-l-4 border-white">
                    <span className="text-xl font-black text-tertiary">52</span>
                    <span className="text-[10px] font-bold text-tertiary/60 uppercase tracking-widest">
                      Offers
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="flex justify-between items-center mb-6">
                <h4 className="text-lg font-bold tracking-tight">
                  Recent Applicants
                </h4>
                <a
                  className="text-primary text-xs font-bold uppercase tracking-widest hover:underline transition-all"
                  href="#"
                >
                  View All Activity
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-surface-container-lowest p-5 rounded-xl group hover:shadow-xl hover:shadow-indigo-500/5 transition-all cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <img
                      className="w-14 h-14 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      data-alt="portrait of a confident woman professional in a creative studio setting with warm lighting"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBw8vV4X-jcNKK3EO3kQPKihE_UV80M-OOo1EmUuLJ-96t1xZPikf4Og83mnvFauYAomL_hLgVgD1ybPE9OdKm5X5hK_VOoVP9HLAC9tTRfgMJebPd33hPv0EdL5sjOaJ3vXpz-Qk_237TUqenScItvUkrrvpnN9d1eC5FCqtyRv7KIiYBLfUDtMFV8XOkzqlbS-r9r0eIYNSnJv2WM06MDXxbAhHk9ZpuIBPAV6gE4ocJAraQcBBQbC2gDb8ShRjNStL3EfBEM_klK"
                    />
                    <div className="flex-grow">
                      <h5 className="font-bold text-sm text-on-surface">
                        Sophia Chen
                      </h5>
                      <p className="text-xs text-slate-400 font-medium">
                        Lead UX Designer
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-indigo-600 font-black text-lg">
                        98%
                      </div>
                      <div className="text-[9px] uppercase tracking-tighter text-slate-400 font-bold">
                        Match Score
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-50 flex justify-between items-center">
                    <div className="flex space-x-1">
                      <span className="px-2 py-1 bg-surface-container-low text-slate-500 rounded text-[9px] font-bold">
                        Figma
                      </span>
                      <span className="px-2 py-1 bg-surface-container-low text-slate-500 rounded text-[9px] font-bold">
                        React
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">
                      arrow_forward_ios
                    </span>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-5 rounded-xl group hover:shadow-xl hover:shadow-indigo-500/5 transition-all cursor-pointer border border-tertiary-container/30">
                  <div className="flex items-center space-x-4">
                    <img
                      className="w-14 h-14 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      data-alt="headshot of a smiling man with glasses against a minimalist light grey wall"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQupytXcqWmIApMga7JiI1ApCY267dfgouzSEErKcMjrclVnI_GZkXfKAxblXeyp29Rfg1QsLl0m0h0_ox9fiHVUAFqujj6skEYOvTiyIbXcWNVK9QKis8oxV9eRIKGqFCTuUBur_nEEp1wyW-ExdxGLBlLADGW3nn5ULts3w90E0-XdFdPKz50FppAWdFj3IAfmDuO3ZtrvcVClY1t0y00P2JzsBL3KLesfFlQLIPZqSI4t7EEIaq38JyahQ3lJZXK9LFesOmZttG"
                    />
                    <div className="flex-grow">
                      <h5 className="font-bold text-sm text-on-surface">
                        Marcus Thorne
                      </h5>
                      <p className="text-xs text-slate-400 font-medium">
                        VP of Product
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-tertiary font-black text-lg">
                        94%
                      </div>
                      <div className="text-[9px] uppercase tracking-tighter text-slate-400 font-bold">
                        Match Score
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-50 flex justify-between items-center">
                    <div className="flex space-x-1">
                      <span className="px-2 py-1 bg-tertiary-container/10 text-tertiary rounded text-[9px] font-bold">
                        Executive
                      </span>
                      <span className="px-2 py-1 bg-surface-container-low text-slate-500 rounded text-[9px] font-bold">
                        MBA
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-slate-300 group-hover:text-tertiary transition-colors">
                      arrow_forward_ios
                    </span>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-5 rounded-xl group hover:shadow-xl hover:shadow-indigo-500/5 transition-all cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <img
                      className="w-14 h-14 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      data-alt="energetic profile picture of a young woman professional in a bright urban outdoor setting"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-eZ53NW5MYg0cW7wzzi5Q0rF0mOQjKkTjZJncmP7gvhPv7h0mbpBxWchDB4OkTKET2ADZ4mNIhq7NNuS51tDxX8Sznw9Fb2z2n6jbzRIZCgYtSSCU4pMO7BVYw4FEcunOTorzlWFO0IckLGQVB0Qhw4Rr2NsJB_h0a4cNTSmJUgPwpJIv-EA8h7dqwlkt55TU0fSkq9Qmg2FDZnP5qyxIY5xJw_LgqTkDfYCe9eYvqoHdgF1bmB0D2njpBkqpkl9iyAvGATUTxC_h"
                    />
                    <div className="flex-grow">
                      <h5 className="font-bold text-sm text-on-surface">
                        Elena Rodriguez
                      </h5>
                      <p className="text-xs text-slate-400 font-medium">
                        Growth Strategist
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-indigo-600 font-black text-lg">
                        89%
                      </div>
                      <div className="text-[9px] uppercase tracking-tighter text-slate-400 font-bold">
                        Match Score
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-50 flex justify-between items-center">
                    <div className="flex space-x-1">
                      <span className="px-2 py-1 bg-surface-container-low text-slate-500 rounded text-[9px] font-bold">
                        SQL
                      </span>
                      <span className="px-2 py-1 bg-surface-container-low text-slate-500 rounded text-[9px] font-bold">
                        SEO
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">
                      arrow_forward_ios
                    </span>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-5 rounded-xl group hover:shadow-xl hover:shadow-indigo-500/5 transition-all cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-xl bg-surface-container flex items-center justify-center text-on-surface-variant font-bold text-lg">
                      JS
                    </div>
                    <div className="flex-grow">
                      <h5 className="font-bold text-sm text-on-surface">
                        Jordan Smith
                      </h5>
                      <p className="text-xs text-slate-400 font-medium">
                        Backend Engineer
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-indigo-600 font-black text-lg">
                        91%
                      </div>
                      <div className="text-[9px] uppercase tracking-tighter text-slate-400 font-bold">
                        Match Score
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-50 flex justify-between items-center">
                    <div className="flex space-x-1">
                      <span className="px-2 py-1 bg-surface-container-low text-slate-500 rounded text-[9px] font-bold">
                        Go
                      </span>
                      <span className="px-2 py-1 bg-surface-container-low text-slate-500 rounded text-[9px] font-bold">
                        AWS
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">
                      arrow_forward_ios
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="col-span-12 lg:col-span-4 space-y-8">
            <section className="bg-surface-container-low p-8 rounded-xl">
              <div className="flex justify-between items-center mb-8">
                <h4 className="text-lg font-bold tracking-tight">
                  Today's Schedule
                </h4>
                <span className="material-symbols-outlined text-slate-400">
                  calendar_today
                </span>
              </div>
              <div className="space-y-8 relative">
                <div className="absolute left-2.5 top-0 bottom-0 w-0.5 bg-slate-200/50"></div>
                <div className="relative pl-10">
                  <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-white border-4 border-primary z-10"></div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">
                        09:00 AM
                      </p>
                      <h5 className="font-bold text-sm">
                        Product Sync: Creative Lead
                      </h5>
                      <p className="text-xs text-slate-500 mt-1">
                        with Julian Vane (Founder)
                      </p>
                    </div>
                    <div className="flex -space-x-2">
                      <img
                        className="w-6 h-6 rounded-full border border-white"
                        data-alt="closeup profile of a person"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZCvSBfLO8sV0PWbco742vY_Of3b5XR68W_7IkLvJs-OVHJe6josULcYME9SQAZF5SIGDULimSLIlgkopYRO9XkBQZxG1z3M90Kseqtng04rOcqmhozQcQs8eCXG7TXXUCiVbWSlBw0-ODbsnDFbjOGlt40QrY-u6r1tcuov_Oo6eSX4DpJxdt4N0QCdq-1UpT2072Z5LnBbhQVWb6oo1sFUq-oYkDJNH1c-eCL9SOr_pB8ISBKKxi1sfgR9DZf-dC71G6FOms9mvV"
                      />
                      <div className="w-6 h-6 rounded-full bg-slate-100 border border-white flex items-center justify-center text-[8px] font-bold">
                        +2
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative pl-10">
                  <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-indigo-100 border-4 border-indigo-600 z-10 animate-pulse"></div>
                  <div className="flex justify-between items-start bg-white p-4 rounded-xl shadow-sm border-l-4 border-indigo-600">
                    <div>
                      <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-1">
                        11:30 AM
                      </p>
                      <h5 className="font-bold text-sm">
                        Interview: Sophia Chen
                      </h5>
                      <div className="flex items-center mt-2 space-x-2">
                        <span className="text-[10px] bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded font-bold">
                          Round 2
                        </span>
                        <span className="text-[10px] text-slate-400">
                          Google Meet
                        </span>
                      </div>
                    </div>
                    <button className="p-2 bg-indigo-600 text-white rounded-lg">
                      <span className="material-symbols-outlined text-sm">
                        videocam
                      </span>
                    </button>
                  </div>
                </div>
                <div className="relative pl-10">
                  <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-white border-4 border-slate-300 z-10"></div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                        02:00 PM
                      </p>
                      <h5 className="font-bold text-sm text-slate-600">
                        Feedback Review
                      </h5>
                      <p className="text-xs text-slate-400 mt-1">
                        Growth Ops Pipeline
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative pl-10">
                  <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-white border-4 border-slate-300 z-10"></div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                        04:30 PM
                      </p>
                      <h5 className="font-bold text-sm text-slate-600">
                        Interview: Marcus Thorne
                      </h5>
                      <p className="text-xs text-slate-400 mt-1">
                        Final Partner Interview
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="bg-indigo-900 text-white p-8 rounded-xl relative overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-indigo-800 rounded-full blur-3xl opacity-50 group-hover:scale-110 transition-transform"></div>
              <div className="relative z-10">
                <span className="material-symbols-outlined text-tertiary text-4xl mb-4">
                  auto_awesome
                </span>
                <h4 className="text-lg font-bold mb-2">Curator Insight</h4>
                <p className="text-sm text-indigo-200 leading-relaxed">
                  3 candidates from the{" "}
                  <span className="text-white font-bold underline decoration-tertiary">
                    Product Designer
                  </span>{" "}
                  pool have 90%+ match with your company culture values.
                </p>
                <button className="mt-6 w-full py-3 bg-white text-indigo-900 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-indigo-50 transition-colors">
                  Review Matches
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>
      <footer className="w-[calc(100%-16rem)] ml-64 border-t border-slate-100 dark:border-slate-800 py-6 px-8 flex justify-between items-center mt-auto">
        <p className="text-xs font-medium uppercase tracking-widest text-slate-400">
          © 2024 Editorial Executive Recruitment. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a
            className="text-xs font-medium uppercase tracking-widest text-slate-400 hover:text-indigo-500 transition-opacity"
            href="#"
          >
            Legal
          </a>
          <a
            className="text-xs font-medium uppercase tracking-widest text-slate-400 hover:text-indigo-500 transition-opacity"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="text-xs font-medium uppercase tracking-widest text-slate-400 hover:text-indigo-500 transition-opacity"
            href="#"
          >
            Support
          </a>
          <a
            className="text-xs font-medium uppercase tracking-widest text-slate-400 hover:text-indigo-500 transition-opacity"
            href="#"
          >
            Documentation
          </a>
        </div>
      </footer>
    </div>
  );
}

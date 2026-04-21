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
  Camera,
  Mail,
  FileText,
  Globe,
  Link as LinkIcon,
  ArrowRight,
  GraduationCap,
  Pencil,
  Boxes,
  Layers,
  Sparkles,
  Code,
  Wind,
  Lightbulb,
  Activity,
  Users,
  Plus,
} from "lucide-react";

export default function Profile() {
  return (
    <div className="bg-surface text-on-surface antialiased">
      {/* <!-- Main Content Canvas --> */}
      <main className=" pt-16 min-h-screen">
        <div className="max-w-6xl mx-auto p-12 space-y-8">
          {/* <!-- Header Section (Asymmetric Editorial Layout) --> */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-6">
                <div className="relative group">
                  <img
                    alt="User Profile"
                    className="w-32 h-32 rounded-3xl object-cover ring-4 ring-white shadow-lg"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGa4MHF0T0WOO-obQIlkR9BsGm0Do51e1ofxCjeCLgxojRjaH73SA13ofGW4YWX_Xexc7wnVpmZh2dIwlf6zx0YaE8pbH6-RwyA-2_KJJsSpHjDVW5Fstv-k-eKJar7Fjn6hr6NTd_cPbM7p-2rMIH4IXgk0R3zR-rblnS6ptwZjG0ReIF1qy51FQfKuvrB8MfKaslOZc_pUjEgAiyFJhMMJqKdQ4GCKW63MziOgi_btOT8XkzDzBMzR259KlIZLij--SSQHgewmfw"
                  />
                  <button className="absolute -bottom-2 -right-2 bg-white p-2 rounded-xl shadow-md border border-surface-container hover:bg-white transition-colors">
                    <Camera className="text-primary w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-1">
                  <h2 className="text-4xl font-bold tracking-tight text-on-surface">
                    Alex Rivera
                  </h2>
                  <p className="text-xl text-outline font-medium">
                    Senior Product Designer & Systems Architect
                  </p>

                  <div className="flex gap-4 pt-2">
                    <span className="flex items-center gap-1 text-sm text-outline">
                      <MapPin className="w-4 h-4" />
                      San Francisco, CA
                    </span>

                    <span className="flex items-center gap-1 text-sm text-outline">
                      <Mail className="w-4 h-4" />
                      a.rivera@atelier.com
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Completion Widget */}
            <div className="w-full md:w-80 bg-white p-6 rounded-2xl space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-primary" />
                  <span className="text-xs font-semibold text-on-surface uppercase tracking-widest">
                    Profile Integrity
                  </span>
                </div>

                <span className="text-primary font-bold">85%</span>
              </div>

              <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-primary-gradient w-[85%] rounded-full"></div>
              </div>

              <p className="text-xs text-outline leading-relaxed">
                Complete your{" "}
                <span className="font-bold text-on-surface">
                  Portfolio Section
                </span>{" "}
                to reach All-Star status.
              </p>
            </div>
          </div>
          {/* <!-- Bento Grid Content --> */}
          <div className="grid grid-cols-12 gap-8">
            {/* <!-- Left Column: Primary Details (8 Cols) --> */}
            <div className="col-span-12 lg:col-span-8 space-y-8">
              {/* <!-- Bio/About Card (Surface Level 2) --> */}

              <div className="bg-white p-8 rounded-2xl shadow-sm space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold tracking-tight">
                    Professional Narrative
                  </h3>

                  <button className="text-primary hover:opacity-70 flex items-center gap-1 text-sm font-semibold">
                    <Pencil className="w-4 h-4" />
                    Edit
                  </button>
                </div>

                <p className="text-on-surface-variant leading-relaxed body-lg">
                  Design leader with 8+ years of experience building scalable
                  design systems and consumer-facing products. I specialize in
                  bridging the gap between high-level brand strategy and
                  pixel-perfect execution. Currently focused on AI-driven
                  interfaces and minimalist architectural web design.
                </p>
              </div>

              {/* Experience (Editorial List) */}
              <div className="bg-white p-8 rounded-2xl shadow-sm space-y-10">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold tracking-tight">
                    Chronological Journey
                  </h3>

                  <button className="p-2 bg-white rounded-xl text-primary hover:bg-surface-container-high transition-colors">
                    <Plus className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-12">
                  {/* Job 1 */}
                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 bg-surface-container rounded-2xl flex items-center justify-center shrink-0">
                      <Boxes className="w-6 h-6 text-primary" />
                    </div>

                    <div className="space-y-2 flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-lg">
                            Senior Design Systems Architect
                          </h4>
                          <p className="text-primary font-medium">
                            Lumina Tech Group
                          </p>
                        </div>

                        <span className="text-xs font-semibold text-outline uppercase tracking-wider py-1 px-3 bg-white rounded-full">
                          2021 — Present
                        </span>
                      </div>

                      <p className="text-on-surface-variant text-sm leading-relaxed">
                        Led a team of 12 designers in standardizing the global
                        UI framework, reducing engineering hand-off time by 40%.
                      </p>
                    </div>
                  </div>

                  {/* Job 2 */}
                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 bg-surface-container rounded-2xl flex items-center justify-center shrink-0">
                      <Layers className="w-6 h-6 text-primary" />
                    </div>

                    <div className="space-y-2 flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-lg">UI/UX Designer</h4>
                          <p className="text-primary font-medium">
                            Arcade Creative Agency
                          </p>
                        </div>

                        <span className="text-xs font-semibold text-outline uppercase tracking-wider py-1 px-3 bg-white rounded-full">
                          2018 — 2021
                        </span>
                      </div>

                      <p className="text-on-surface-variant text-sm leading-relaxed">
                        Conceptualized and shipped 20+ mobile applications for
                        Fortune 500 clients, winning three Red Dot design
                        awards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills (Tag Cloud) */}
              <div className="bg-white p-8 rounded-2xl shadow-sm space-y-6">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold tracking-tight">
                    Competencies
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span className="flex items-center gap-2 px-5 py-2 bg-primary/5 text-primary rounded-xl text-sm font-semibold">
                    <Sparkles className="w-4 h-4" />
                    Design Systems
                  </span>

                  <span className="flex items-center gap-2 px-5 py-2 bg-primary/5 text-primary rounded-xl text-sm font-semibold">
                    <Code className="w-4 h-4" />
                    React Architecture
                  </span>

                  <span className="flex items-center gap-2 px-5 py-2 bg-primary/5 text-primary rounded-xl text-sm font-semibold">
                    <Wind className="w-4 h-4" />
                    Tailwind CSS
                  </span>

                  <span className="flex items-center gap-2 px-5 py-2 bg-primary/5 text-primary rounded-xl text-sm font-semibold">
                    <Lightbulb className="w-4 h-4" />
                    Product Strategy
                  </span>

                  <span className="flex items-center gap-2 px-5 py-2 bg-primary/5 text-primary rounded-xl text-sm font-semibold">
                    <Activity className="w-4 h-4" />
                    Motion Design
                  </span>

                  <span className="flex items-center gap-2 px-5 py-2 bg-tertiary/10 text-tertiary rounded-xl text-sm font-semibold">
                    <Users className="w-4 h-4" />
                    User Research
                  </span>

                  <span className="flex items-center gap-2 px-5 py-2 bg-surface-container-high text-outline rounded-xl text-sm font-semibold">
                    <Plus className="w-4 h-4" />
                    +8 more
                  </span>
                </div>
              </div>
            </div>
            {/* <!-- Right Column: Metadata & Links (4 Cols) --> */}

            <div className="col-span-12 lg:col-span-4 space-y-8">
              {/* Resume Upload */}
              <div className="bg-primary/5 p-8 rounded-3xl border-2 border-dashed border-primary/20 space-y-4 text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                  <FileText className="w-8 h-8 text-primary" />
                </div>

                <div className="space-y-1">
                  <h4 className="font-bold">Resume_Alex_2024.pdf</h4>
                  <p className="text-xs text-outline">Uploaded Oct 14, 2023</p>
                </div>

                <button className="w-full py-3 bg-white text-primary font-bold rounded-2xl hover:bg-white transition-colors shadow-sm">
                  Replace File
                </button>
              </div>

              {/* External Links */}
              <div className="bg-white p-8 rounded-2xl shadow-sm space-y-6">
                <h3 className="text-xl font-bold tracking-tight">
                  Digital Footprint
                </h3>

                <div className="space-y-4">
                  <a
                    className="flex items-center justify-between p-4 bg-white rounded-2xl hover:bg-surface-container-high transition-colors group"
                    href="#"
                  >
                    <div className="flex items-center gap-3">
                      <Globe className="w-5 h-5 text-primary" />
                      <span className="font-semibold">Portfolio Site</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-outline group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a
                    className="flex items-center justify-between p-4 bg-white rounded-2xl hover:bg-surface-container-high transition-colors group"
                    href="#"
                  >
                    <div className="flex items-center gap-3">
                      <Code className="w-5 h-5 text-primary" />
                      <span className="font-semibold">GitHub</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-outline group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a
                    className="flex items-center justify-between p-4 bg-white rounded-2xl hover:bg-surface-container-high transition-colors group"
                    href="#"
                  >
                    <div className="flex items-center gap-3">
                      <LinkIcon className="w-5 h-5 text-primary" />
                      <span className="font-semibold">LinkedIn</span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-outline group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Education */}
              <div className="bg-white p-8 rounded-2xl shadow-sm space-y-6">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold tracking-tight">
                    Education
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <h4 className="font-bold text-sm">
                      MS in Human-Computer Interaction
                    </h4>
                    <p className="text-xs text-primary font-medium">
                      Stanford University
                    </p>
                    <p className="text-xs text-outline">Class of 2018</p>
                  </div>

                  <div className="h-[1px] bg-white"></div>

                  <div className="space-y-1">
                    <h4 className="font-bold text-sm">
                      BFA in Communication Design
                    </h4>
                    <p className="text-xs text-primary font-medium">RISD</p>
                    <p className="text-xs text-outline">Class of 2016</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* <!-- Edit Profile Modal (Hidden by Default State - Represented as Layer) -->
<!-- Applying Glassmorphism & High-End Shadows --> */}
      <div className="fixed inset-0 bg-on-surface/20 backdrop-blur-md z-[100] flex items-center justify-center p-6 hidden">
        <div className="bg-white w-full max-w-2xl rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[921px]">
          <div className="px-10 py-8 border-b border-surface-container flex justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold tracking-tight">
                Refine Your Profile
              </h3>
              <p className="text-sm text-outline">
                Make adjustments to your professional narrative
              </p>
            </div>
            <button className="w-12 h-12 rounded-full hover:bg-white flex items-center justify-center transition-colors">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <div className="p-10 space-y-8 overflow-y-auto no-scrollbar">
            <div className="space-y-4">
              <label className="label-md text-outline block">
                Professional Headline
              </label>
              <input
                className="w-full bg-white border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                type="text"
                value="Senior Product Designer &amp; Systems Architect"
              />
            </div>
            <div className="space-y-4">
              <label className="label-md text-outline block">Bio</label>
              <textarea className="w-full bg-white border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 transition-all leading-relaxed">
                Design leader with 8+ years of experience building scalable
                design systems and consumer-facing products...
              </textarea>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <label className="label-md text-outline block">Location</label>
                <input
                  className="w-full bg-white border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 transition-all"
                  type="text"
                  value="San Francisco, CA"
                />
              </div>
              <div className="space-y-4">
                <label className="label-md text-outline block">Email</label>
                <input
                  className="w-full bg-white border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 transition-all"
                  type="email"
                  value="a.rivera@atelier.com"
                />
              </div>
            </div>
          </div>
          <div className="px-10 py-8 bg-white flex justify-end gap-4">
            <button className="px-8 py-3 font-bold text-on-surface hover:opacity-70 transition-opacity">
              Cancel
            </button>
            <button className="px-8 py-3 bg-primary-gradient  rounded-2xl font-bold shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition-all">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

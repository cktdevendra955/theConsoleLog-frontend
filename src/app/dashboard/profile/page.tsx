"use client";

import {
  MapPin,
  Mail,
  Camera,
  Activity,
  Pencil,
  Plus,
  Boxes,
  Sparkles,
  Code,
  Wind,
  Lightbulb,
  Users,
  FileText,
  Globe,
  Link as LinkIcon,
  ArrowRight,
  GraduationCap,
} from "lucide-react";

/* ---------------- UI SYSTEM ---------------- */

const primary =
  "bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:opacity-90 transition";

const Card = ({ children }: any) => (
  <div className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition">
    {children}
  </div>
);

/* ---------------- PAGE ---------------- */

export default function Profile() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">

        {/* HEADER */}
        <section className="flex flex-col lg:flex-row justify-between gap-6">

          {/* LEFT */}
          <div className="flex items-center gap-5">
    
            <div className="relative">
              <img
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover shadow-md"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGa4MHF0T0WOO-obQIlkR9BsGm0Do51e1ofxCjeCLgxojRjaH73SA13ofGW4YWX_Xexc7wnVpmZh2dIwlf6zx0YaE8pbH6-RwyA-2_KJJsSpHjDVW5Fstv-k-eKJar7Fjn6hr6NTd_cPbM7p-2rMIH4IXgk0R3zR-rblnS6ptwZjG0ReIF1qy51FQfKuvrB8MfKaslOZc_pUjEgAiyFJhMMJqKdQ4GCKW63MziOgi_btOT8XkzDzBMzR259KlIZLij--SSQHgewmfw"
              />

              <button className="absolute -bottom-2 -right-2 w-9 h-9 bg-white border rounded-xl flex items-center justify-center shadow">
                <Camera className="w-4 h-4 text-emerald-600" />
              </button>
            </div>

            <div>

              <h1 className="text-3xl md:text-4xl font-bold">
                Alex Rivera
              </h1>

              <p className="text-gray-500 mt-1">
                Senior Product Designer & Systems Architect
              </p>

              <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-500">

                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" /> San Francisco
                </span>

                <span className="flex items-center gap-1">
                  <Mail className="w-4 h-4" /> a.rivera@atelier.com
                </span>

              </div>

            </div>

          </div>

          {/* PROFILE STATS */}
          <Card>
            <div className="p-5 w-full lg:w-80">

              <div className="flex justify-between text-sm">
                <span className="flex items-center gap-2 font-semibold">
                  <Activity className="w-4 h-4 text-emerald-600" />
                  Profile Strength
                </span>
                <span className="text-emerald-600 font-bold">85%</span>
              </div>

              <div className="w-full h-2 bg-gray-100 rounded-full mt-3">
                <div className="h-full w-[85%] bg-emerald-500 rounded-full"></div>
              </div>

              <p className="text-xs text-gray-500 mt-3">
                Complete portfolio to unlock premium visibility
              </p>

            </div>
          </Card>

        </section>

        {/* GRID */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* LEFT */}
          <div className="lg:col-span-8 space-y-6">

            {/* BIO */}
            <Card>
              <div className="p-6 space-y-4">

                <div className="flex justify-between">
                  <h2 className="text-xl font-semibold">
                    Professional Summary
                  </h2>

                  <button className="text-emerald-600 flex items-center gap-1 text-sm">
                    <Pencil className="w-4 h-4" /> Edit
                  </button>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Design leader with 8+ years of experience building scalable systems,
                  design systems, and modern digital products.
                </p>

              </div>
            </Card>

            {/* EXPERIENCE */}
            <Card>
              <div className="p-6 space-y-6">

                <div className="flex justify-between">
                  <h2 className="text-xl font-semibold">
                    Experience
                  </h2>
                  <Plus className="w-5 h-5 text-emerald-600" />
                </div>

                <div className="flex gap-4">

                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center">
                    <Boxes className="w-5 h-5 text-emerald-600" />
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      Senior Design Systems Architect
                    </h3>
                    <p className="text-sm text-gray-500">
                      Lumina Tech
                    </p>
                  </div>

                </div>

              </div>
            </Card>

            {/* SKILLS */}
            <Card>
              <div className="p-6 space-y-4">

                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-emerald-600" />
                  Skills
                </h2>

                <div className="flex flex-wrap gap-2">

                  {[
                    ["Design Systems", Sparkles],
                    ["React", Code],
                    ["Tailwind", Wind],
                    ["Strategy", Lightbulb],
                    ["Research", Users],
                  ].map(([label, Icon]: any, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-lg text-sm"
                    >
                      <Icon className="w-4 h-4" />
                      {label}
                    </span>
                  ))}

                </div>

              </div>
            </Card>

          </div>

          {/* RIGHT */}
          <div className="lg:col-span-4 space-y-6">

            {/* RESUME */}
            <Card>
              <div className="p-6 text-center space-y-3">

                <FileText className="mx-auto text-emerald-600" />

                <p className="font-semibold">Resume.pdf</p>

                <button className={`w-full py-2 rounded-xl ${primary}`}>
                  Replace Resume
                </button>

              </div>
            </Card>

            {/* LINKS */}
            <Card>
              <div className="p-6 space-y-4">

                <h3 className="font-semibold">
                  Links
                </h3>

                {[
                  ["Portfolio", Globe],
                  ["GitHub", Code],
                  ["LinkedIn", LinkIcon],
                ].map(([label, Icon]: any, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center p-3 rounded-xl hover:bg-gray-50 transition"
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-emerald-600" />
                      {label}
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                ))}

              </div>
            </Card>

            {/* EDUCATION */}
            <Card>
              <div className="p-6 space-y-3">

                <h3 className="font-semibold flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-emerald-600" />
                  Education
                </h3>

                <p className="text-sm text-gray-600">
                  MS HCI — Stanford University
                </p>

                <p className="text-sm text-gray-600">
                  BFA Design — RISD
                </p>

              </div>
            </Card>

          </div>

        </section>

      </main>
    </div>
  );
}
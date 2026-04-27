"use client";

import {
  MapPin,
  Mail,
  Camera,
  Activity,
  Pencil,
  Plus,
  Boxes,
  Layers,
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

export default function Profile() {
  return (
    <div className="bg-surface text-on-surface antialiased">
      <main className="pt-16 min-h-screen">
        <div className="max-w-6xl mx-auto p-4 md:p-8 lg:p-12 space-y-6 md:space-y-8">
          
          {/* HEADER */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-6 md:gap-8">
            
            {/* LEFT */}
            <div className="space-y-4 w-full">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                
                <div className="relative group">
                  <img
                    className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl md:rounded-3xl object-cover ring-4 ring-white shadow-lg"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGa4MHF0T0WOO-obQIlkR9BsGm0Do51e1ofxCjeCLgxojRjaH73SA13ofGW4YWX_Xexc7wnVpmZh2dIwlf6zx0YaE8pbH6-RwyA-2_KJJsSpHjDVW5Fstv-k-eKJar7Fjn6hr6NTd_cPbM7p-2rMIH4IXgk0R3zR-rblnS6ptwZjG0ReIF1qy51FQfKuvrB8MfKaslOZc_pUjEgAiyFJhMMJqKdQ4GCKW63MziOgi_btOT8XkzDzBMzR259KlIZLij--SSQHgewmfw"
                    alt=""
                  />
                  <button className="absolute -bottom-2 -right-2 bg-white p-2 rounded-xl shadow-md border">
                    <Camera className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </button>
                </div>

                <div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                    Alex Rivera
                  </h2>
                  <p className="text-sm md:text-lg text-outline">
                    Senior Product Designer & Systems Architect
                  </p>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 pt-2 text-sm text-outline">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      San Francisco
                    </span>
                    <span className="flex items-center gap-1">
                      <Mail className="w-4 h-4" />
                      a.rivera@atelier.com
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="w-full lg:w-80 bg-white p-5 md:p-6 rounded-2xl">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-primary" />
                  <span className="text-xs font-semibold uppercase">
                    Profile Integrity
                  </span>
                </div>
                <span className="text-primary font-bold">85%</span>
              </div>

              <div className="h-2 w-full bg-gray-200 rounded-full mt-3">
                <div className="h-full bg-primary w-[85%] rounded-full"></div>
              </div>

              <p className="text-xs text-outline mt-3">
                Complete your <b>Portfolio</b> to reach All-Star status.
              </p>
            </div>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
            
            {/* LEFT */}
            <div className="lg:col-span-8 space-y-6 md:space-y-8">
              
              {/* BIO */}
              <div className="bg-white p-5 md:p-8 rounded-2xl space-y-4">
                <div className="flex justify-between">
                  <h3 className="font-bold text-lg md:text-xl">
                    Professional Narrative
                  </h3>
                  <button className="text-primary flex items-center gap-1 text-sm">
                    <Pencil className="w-4 h-4" /> Edit
                  </button>
                </div>

                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Design leader with 8+ years of experience building scalable
                  systems and modern UI products.
                </p>
              </div>

              {/* EXPERIENCE */}
              <div className="bg-white p-5 md:p-8 rounded-2xl space-y-8">
                <div className="flex justify-between">
                  <h3 className="font-bold text-lg md:text-xl">
                    Chronological Journey
                  </h3>
                  <Plus className="w-5 h-5 text-primary" />
                </div>

                <div className="space-y-8">
                  <div className="flex gap-4 md:gap-6">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-gray-100 rounded-xl flex items-center justify-center">
                      <Boxes className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base md:text-lg">
                        Senior Design Systems Architect
                      </h4>
                      <p className="text-primary text-sm">Lumina Tech</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* SKILLS */}
              <div className="bg-white p-5 md:p-8 rounded-2xl space-y-4">
                <h3 className="font-bold text-lg md:text-xl flex gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Competencies
                </h3>

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
                      className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-xs md:text-sm"
                    >
                      <Icon className="w-4 h-4" />
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-4 space-y-6 md:space-y-8">
              
              {/* RESUME */}
              <div className="bg-primary/5 p-6 rounded-2xl text-center space-y-3">
                <FileText className="mx-auto w-6 h-6 text-primary" />
                <p className="text-sm font-bold">Resume.pdf</p>
                <button className="w-full py-2 bg-white rounded-xl text-primary">
                  Replace
                </button>
              </div>

              {/* LINKS */}
              <div className="bg-white p-6 rounded-2xl space-y-4">
                <h3 className="font-bold">Digital Footprint</h3>

                {[
                  ["Portfolio", Globe],
                  ["GitHub", Code],
                  ["LinkedIn", LinkIcon],
                ].map(([label, Icon]: any, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center p-3 rounded-xl hover:bg-gray-100"
                  >
                    <div className="flex gap-2 items-center">
                      <Icon className="w-4 h-4 text-primary" />
                      {label}
                    </div>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                ))}
              </div>

              {/* EDUCATION */}
              <div className="bg-white p-6 rounded-2xl space-y-3">
                <h3 className="font-bold flex gap-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  Education
                </h3>

                <p className="text-sm">MS HCI - Stanford</p>
                <p className="text-sm">BFA Design - RISD</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
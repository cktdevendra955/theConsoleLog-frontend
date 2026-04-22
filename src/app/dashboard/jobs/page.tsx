"use client";

import {
  LayoutDashboard,
  User,
  Search,
  Briefcase,
  Bookmark,
  Calendar,
  MessageCircle,
  Bell,
  Settings,
  Trash2,
  Sparkles,ArrowRight 
} from "lucide-react";

export default function Page() {
  return (
    <div >
      {/* <!-- Main Content Area --> */}
      <main className=" min-h-screen">
        {/* <!-- Content Canvas --> */}
        <div className="pt-24 pb-12 px-12 max-w-7xl mx-auto">
          {/* <!-- Hero / Header Section --> */}
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase mb-2 block">
                Curation
              </span>
              <h2 className="text-4xl font-bold tracking-tighter text-on-surface leading-tight">
                Saved Jobs
              </h2>
              <p className="text-on-surface-variant mt-2 max-w-md">
                Manage your shortlisted opportunities and track your alignment
                with premium roles.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-2.5 rounded-full bg-surface-container-high text-primary font-semibold text-sm transition-all hover:scale-95 active:opacity-80">
                Filter by Match %
              </button>
              <button className="px-6 py-2.5 rounded-full bg-gradient-to-br from-primary to-primary-container  font-semibold text-sm editorial-shadow transition-all hover:scale-95 active:opacity-80">
                Search New Jobs
              </button>
            </div>
          </div>
          {/* <!-- Bento Grid of Saved Jobs --> */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* <!-- Job Card 1 - Featured/High Match --> */}
            <div className="lg:col-span-8 group relative bg-white p-8 rounded-3xl editorial-shadow transition-all hover:-translate-y-1 duration-300">
              <div className="flex justify-between items-start mb-10">
                <div className="flex gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-surface-container flex items-center justify-center overflow-hidden">
                    <img
                      alt="Company Logo"
                      className="w-10 h-10 object-contain"
                      data-alt="Abstract geometric logo for a modern tech company in monochrome blue and white"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDV7lCc4i8iOXuLSKP9C5TNiz8z44uMGv87CdoWBCky1NtglsqMLfWlIbgWXSTzJsI_nBJwVQ3Ow_mtC5TFGHIS-mM5uJnGhZ6K8ODnC-zo7WdMK72JLAu9ESlJFMfcqpBsCsW_o0VhDR0HdfFfTIkEOd4H9uk4mnljzPbfFoQHj4KUc6CLh_Li831hGSpGR9qIznosFQ3gLyQ_7vjXyO9XBy9fDHdrWIQowMvIUwAe34altj7n6cH4oUd13Jk-7_kS8hrAEb-MRQbY"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight mb-1">
                      Senior Product Designer
                    </h3>
                    <p className="text-on-surface-variant font-medium">
                      Linear · Remote
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="px-4 py-1.5 rounded-full bg-[#3525cd]/10 text-primary text-xs font-bold tracking-wide mb-2">
                    98% MATCH
                  </span>
                  <p className="text-lg font-semibold text-on-surface">
                    $180k – $240k
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mb-10">
                <span className="px-4 py-2 rounded-xl bg-surface-container-low text-on-surface-variant text-sm">
                  Figma Master
                </span>
                <span className="px-4 py-2 rounded-xl bg-surface-container-low text-on-surface-variant text-sm">
                  Design Systems
                </span>
                <span className="px-4 py-2 rounded-xl bg-surface-container-low text-on-surface-variant text-sm">
                  Strategy
                </span>
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-surface-container">
                <p className="text-sm text-on-surface-variant italic">
                  Saved 2 days ago
                </p>
                <div className="flex gap-3">
                  <button className="w-12 h-12 flex items-center justify-center rounded-2xl bg-surface-container-low text-error hover:bg-error/10 transition-colors">
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                  <button className="px-8 py-3 rounded-2xl bg-gradient-to-br from-primary to-primary-container  font-bold tracking-tight editorial-shadow hover:scale-95 transition-transform">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- Match Insight Widget (Asymmetric Element) --> */}

<div className="lg:col-span-4 bg-primary p-8 rounded-3xl editorial-shadow overflow-hidden relative">
  <div className="relative z-10">
    
    <Sparkles className="text-tertiary-fixed-dim mb-4 w-10 h-10" />

    <h4 className="text-xl font-bold tracking-tight mb-3 leading-snug">
      Designer-Role Alignment
    </h4>

    <p className="text-sm mb-6 leading-relaxed">
      Your profile matches 98% of the requirements for the Senior
      Product Designer role at Linear. Your systems thinking and
      portfolio were flagged as strong matches.
    </p>

    <a
      className="inline-flex items-center gap-2 text-sm font-bold border-b border-white/30 pb-1 hover:border-white transition-all"
      href="#"
    >
      View skill gap analysis
      <ArrowRight className="w-4 h-4" />
    </a>
  </div>

  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
</div>
            {/* <!-- Job Card 2 --> */}
            <div className="lg:col-span-4 bg-white p-6 rounded-3xl editorial-shadow transition-all hover:-translate-y-1 duration-300">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center overflow-hidden">
                  <img
                    alt="Company Logo"
                    className="w-8 h-8 object-contain"
                    data-alt="Elegant V shaped logo for a luxury retail brand, gold on white background"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIp8B8geWB1h8YfRfXTNFZN0YuaPlbrX9EbMIUhM1xIPuXxyMjp3pDldNVhCmJwQ0R-cicC4K7vZ1RZVaLq3fMT3uiVxztB3ccATOVxu0ANXwjaT6970RTzlbfhKwrElCnEhxKXkDZpH0nC9c90ehvF0uMdVb8ZFirUSGN_hcPcQUAEa6GX3egvmSiMICppqj5ySEEQ0xIpDeeK4juQuHNUiUvcI7IpoHp2zabzQq5Z7olTO_Frfe9cvVvZSiPx438DBiPegpK9hjj"
                  />
                </div>
                <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant text-[10px] font-bold">
                  85% MATCH
                </span>
              </div>
              <h3 className="text-lg font-bold tracking-tight mb-1">
                Lead UX Researcher
              </h3>
              <p className="text-on-surface-variant text-sm mb-4">
                Vercel · Hybrid (NYC)
              </p>
              <p className="text-primary font-bold text-sm mb-6">
                $165k – $190k
              </p>
              <div className="flex gap-2">
                <button className="flex-1 py-3 rounded-xl bg-surface-container-low text-primary font-bold text-sm transition-all active:scale-95">
                  Apply
                </button>
                <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-low text-on-surface-variant hover:text-error transition-colors">
                  <span className="material-symbols-outlined text-lg">
                    delete
                  </span>
                </button>
              </div>
            </div>
            {/* <!-- Job Card 3 --> */}
            <div className="lg:col-span-4 bg-white p-6 rounded-3xl editorial-shadow transition-all hover:-translate-y-1 duration-300">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center overflow-hidden">
                  <img
                    alt="Company Logo"
                    className="w-8 h-8 object-contain"
                    data-alt="Bold S shaped logo for a creative studio, neon green accents"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGQtZpPN1qCrQ8ENkB9GgeLjg9lwcnmz3SIsm5680zFX974M2iCLKaRgs_fji6EJh4TKH-JOq2RvsEJTZzE2gdNdDHZfO-X3lbm7DRc8dBsVFK6F3PFebLkbnk0Eg7oABdmNazQXfcgLR05WypG4hSY5kZ49vNn4vhKymREoSwGYVsfbPQuXV9TpP8JqhMG2z-Gsp2QByU6ftNb2-RF2kl54N0MOREGYh7Jf3rpMWtGa2iXFiwHSEWl9OcDB_HxKsJkUi83BgB8LjQ"
                  />
                </div>
                <span className="px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant text-[10px] font-bold">
                  92% MATCH
                </span>
              </div>
              <h3 className="text-lg font-bold tracking-tight mb-1">
                Interaction Designer
              </h3>
              <p className="text-on-surface-variant text-sm mb-4">
                Stripe · Dublin
              </p>
              <p className="text-primary font-bold text-sm mb-6">
                €90k – €115k
              </p>
              <div className="flex gap-2">
                <button className="flex-1 py-3 rounded-xl bg-surface-container-low text-primary font-bold text-sm transition-all active:scale-95">
                  Apply
                </button>
                <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-low text-on-surface-variant hover:text-error transition-colors">
                  <span className="material-symbols-outlined text-lg">
                    delete
                  </span>
                </button>
              </div>
            </div>
            {/* <!-- Job Card 4 --> */}
            <div className="lg:col-span-4 bg-white p-6 rounded-3xl editorial-shadow transition-all hover:-translate-y-1 duration-300">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center overflow-hidden">
                  <img
                    alt="Company Logo"
                    className="w-8 h-8 object-contain"
                    data-alt="Minimalist A logo for an architectural visualization studio, sleek black lines"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuADXqoJKdJQMOnjxUevVlwZgo7hLGF9IeKAJx1Kff_6W8b46_GHeFh0d8HPfHigQ3_cTPGk2uGGGyC72BHnOth1tIYIvdQKzboPb0Q2ldAg-vMkNKRdTfYhM0FCai_67cBoCXr1bIYFE2P8bj5ETYEFgUTnvMZ-2fB0zHq3hEgXXS1oxICBdb2xZlQURGRXOGziAfzC-NSXHCtEk-3IqtwDHiCIOPU8RtrWhDl9qclrxfVH7leRiOZiyudAgmP80SlkLBho-drnkWRj"
                  />
                </div>
                <span className="px-3 py-1 rounded-full bg-tertiary/10 text-tertiary text-[10px] font-bold">
                  NEW SALARY
                </span>
              </div>
              <h3 className="text-lg font-bold tracking-tight mb-1">
                3D Visualizer
              </h3>
              <p className="text-on-surface-variant text-sm mb-4">
                Arc·Studio · London
              </p>
              <p className="text-primary font-bold text-sm mb-6">£75k – £95k</p>
              <div className="flex gap-2">
                <button className="flex-1 py-3 rounded-xl bg-surface-container-low text-primary font-bold text-sm transition-all active:scale-95">
                  Apply
                </button>
                <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-low text-on-surface-variant hover:text-error transition-colors">
                  <span className="material-symbols-outlined text-lg">
                    delete
                  </span>
                </button>
              </div>
            </div>
            {/* <!-- Empty State/Suggestion Card --> */}
            <div className="lg:col-span-12 mt-12 bg-surface-container-low/50 p-12 rounded-[2rem] text-center border-2 border-dashed border-outline-variant/30">
              <span className="material-symbols-outlined text-4xl text-outline mb-4">
                add_circle
              </span>
              <h3 className="text-xl font-bold text-on-surface mb-2">
                Want to see more relevant roles?
              </h3>
              <p className="text-on-surface-variant max-w-sm mx-auto mb-8">
                Refine your preferences to get high-accuracy matches sent
                directly to your inbox every morning.
              </p>
              <button className="px-8 py-3 rounded-2xl bg-surface-container-highest text-on-surface font-bold text-sm transition-all hover:bg-surface-container-high active:scale-95">
                Update Job Preferences
              </button>
            </div>
          </div>
        </div>
      </main>
      
    </div>
  );
}

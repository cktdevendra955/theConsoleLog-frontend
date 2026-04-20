export default function Preview() {
  return (
    <div className="overflow-hidden">
      
      <main className="flex h-[calc(100vh-64px)]">
        <aside className="w-[480px] bg-white border-r border-slate-200/20 flex flex-col h-full overflow-hidden">
          <div className="p-6 border-b border-slate-200/10">
            <h2 className="text-lg font-bold tracking-tight text-slate-900">
              Resume Content
            </h2>
            <p className="text-xs text-slate-500 font-medium mt-1 uppercase tracking-wider">
              Editor Mode
            </p>
          </div>
          <div className="flex-1 overflow-y-auto no-scrollbar p-6 space-y-4">
            <div className="bg-whiteest rounded-xl shadow-sm p-5 border border-primary/10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">
                    person
                  </span>
                  <span className="font-bold text-slate-900">Contact Info</span>
                </div>
                <span className="material-symbols-outlined text-slate-400">
                  expand_less
                </span>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-1">
                      First Name
                    </label>
                    <input
                      className="w-full bg-white border-none focus:ring-2 focus:ring-primary/30 rounded-lg text-sm px-4 py-2.5"
                      type="text"
                      value="Julian"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-1">
                      Last Name
                    </label>
                    <input
                      className="w-full bg-white border-none focus:ring-2 focus:ring-primary/30 rounded-lg text-sm px-4 py-2.5"
                      type="text"
                      value="Ames"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-1">
                    Professional Summary
                  </label>
                  <textarea className="w-full bg-white border-none focus:ring-2 focus:ring-primary/30 rounded-lg text-sm px-4 py-2.5 leading-relaxed">
                    Senior Product Designer with 8+ years of experience
                    specializing in high-fidelity digital interfaces and design
                    systems for fintech startups.
                  </textarea>
                </div>
              </div>
            </div>
            <div className="bg-whiteest rounded-xl shadow-sm p-5 hover:bg-slate-50 transition-colors cursor-pointer group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">
                    work
                  </span>
                  <span className="font-bold text-slate-700">Experience</span>
                </div>
                <span className="material-symbols-outlined text-slate-400">
                  expand_more
                </span>
              </div>
            </div>
            <div className="bg-whiteest rounded-xl shadow-sm p-5 hover:bg-slate-50 transition-colors cursor-pointer group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">
                    school
                  </span>
                  <span className="font-bold text-slate-700">Education</span>
                </div>
                <span className="material-symbols-outlined text-slate-400">
                  expand_more
                </span>
              </div>
            </div>
            <div className="bg-whiteest rounded-xl shadow-sm p-5 hover:bg-slate-50 transition-colors cursor-pointer group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">
                    psychology
                  </span>
                  <span className="font-bold text-slate-700">Skills</span>
                </div>
                <span className="material-symbols-outlined text-slate-400">
                  expand_more
                </span>
              </div>
            </div>
            <div className="bg-whiteest rounded-xl shadow-sm p-5 hover:bg-slate-50 transition-colors cursor-pointer group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">
                    visibility
                  </span>
                  <span className="font-bold text-slate-700">Review</span>
                </div>
                <span className="material-symbols-outlined text-slate-400">
                  expand_more
                </span>
              </div>
            </div>
          </div>
          <div className="p-6 bg-white shadow-[0_-4px_24px_rgba(0,0,0,0.02)]">
            <button className="w-full py-4 text-sm font-bold  bg-gradient-to-r from-primary to-primary-container rounded-2xl shadow-lg active:scale-[0.98] transition-all">
              Finalize &amp; Review
            </button>
          </div>
        </aside>
        <section className="flex-1 bg-white overflow-y-auto flex justify-center p-12 no-scrollbar">
          <div className="w-full max-w-[800px] h-fit">
            <div className="flex items-center justify-between mb-6 px-4">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <img
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    data-alt="close-up portrait of a professional woman in a grey blazer with soft office lighting"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCf_8QTNNSZxmenXNCtFNlrnVfgkNbZ21ZZzZYDRH7EGwFObcWI4Bf0lpMCBGSXMM-1UdNbFRLjBCAn1ayXI3KuudyvoyHUlYWw3b0qBQ5OhkCqOqtGb_xuluEPjbH4CdefCayp7E6bnJk5LpkT5_ssKnXoWgYwgd5m4SE_xElnT0Zm0Gv9ita33mdA39Uq6VhmPVeH9sXoKLnbbxFDcsc_bCQz5UqA1ya3hE9OKBb3bFALefX5Nhs5pVCu6DcCIb-cJhRfVKEJx3X2"
                  />
                </div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                  A4 Preview • Scale 85%
                </span>
              </div>
              <div className="flex bg-white rounded-lg p-1 shadow-sm border border-slate-100">
                <button className="p-1.5 hover:bg-slate-100 rounded-md transition-colors">
                  <span className="material-symbols-outlined text-sm text-slate-500">
                    zoom_out
                  </span>
                </button>
                <span className="px-3 text-xs font-bold text-slate-600 flex items-center">
                  85%
                </span>
                <button className="p-1.5 hover:bg-slate-100 rounded-md transition-colors">
                  <span className="material-symbols-outlined text-sm text-slate-500">
                    zoom_in
                  </span>
                </button>
              </div>
            </div>
            <div className="bg-white shadow-[0_32px_64px_rgba(25,28,30,0.08)] rounded-sm p-[60px] resume-preview-container relative origin-top">
              <div className="flex justify-between items-start mb-12">
                <div>
                  <h2 className="text-[42px] font-bold tracking-tighter text-slate-900 leading-none">
                    Julian Ames
                  </h2>
                  <p className="text-lg text-primary font-medium mt-3">
                    Senior Product Designer
                  </p>
                </div>
                <div className="text-right space-y-1">
                  <p className="text-xs text-slate-500 font-medium">
                    julian.ames@example.com
                  </p>
                  <p className="text-xs text-slate-500 font-medium">
                    +1 (555) 000-1234
                  </p>
                  <p className="text-xs text-slate-500 font-medium">
                    Brooklyn, NY
                  </p>
                  <p className="text-xs text-slate-500 font-medium">
                    linkedin.com/in/julianames
                  </p>
                </div>
              </div>
              <div className="mb-10">
                <h3 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] border-b border-primary/10 pb-2 mb-4">
                  Professional Summary
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed max-w-[90%]">
                  Senior Product Designer with 8+ years of experience
                  specializing in high-fidelity digital interfaces and design
                  systems for fintech startups. Proven track record of improving
                  user engagement by 40% through intentional UX strategy and
                  accessible design patterns.
                </p>
              </div>
              <div className="mb-10">
                <h3 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] border-b border-primary/10 pb-2 mb-6">
                  Experience
                </h3>
                <div className="space-y-8">
                  <div className="relative pl-6 border-l-2 border-slate-100">
                    <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-primary shadow-[0_0_0_4px_rgba(53,37,205,0.1)]"></div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-tight">
                          Lead Designer
                        </h4>
                        <p className="text-xs font-semibold text-slate-500 mt-0.5">
                          Stripe • Fintech Solutions
                        </p>
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-md">
                        2020 — PRESENT
                      </span>
                    </div>
                    <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4 leading-relaxed">
                      <li>
                        Redesigned the core checkout experience, resulting in a
                        22% increase in conversion rates for enterprise clients.
                      </li>
                      <li>
                        Architected and maintained the internal "Prism" design
                        system used by 50+ cross-functional teams globally.
                      </li>
                      <li>
                        Mentored junior designers and conducted weekly design
                        critique sessions to improve output quality.
                      </li>
                    </ul>
                  </div>
                  <div className="relative pl-6 border-l-2 border-slate-100">
                    <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-slate-200"></div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-tight">
                          Product Designer
                        </h4>
                        <p className="text-xs font-semibold text-slate-500 mt-0.5">
                          Airbnb • Guest Experience
                        </p>
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-md">
                        2017 — 2020
                      </span>
                    </div>
                    <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4 leading-relaxed">
                      <li>
                        Developed features for the "Online Experiences" platform
                        launched during the global travel restrictions.
                      </li>
                      <li>
                        Streamlined the host onboarding process, reducing the
                        average time to first booking by 15%.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] border-b border-primary/10 pb-2 mb-6">
                  Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-slate-50 text-slate-700 text-[10px] font-bold rounded-full">
                    UI Design
                  </span>
                  <span className="px-3 py-1.5 bg-slate-50 text-slate-700 text-[10px] font-bold rounded-full">
                    UX Research
                  </span>
                  <span className="px-3 py-1.5 bg-slate-50 text-slate-700 text-[10px] font-bold rounded-full">
                    Design Systems
                  </span>
                  <span className="px-3 py-1.5 bg-slate-50 text-slate-700 text-[10px] font-bold rounded-full">
                    Prototyping
                  </span>
                  <span className="px-3 py-1.5 bg-slate-50 text-slate-700 text-[10px] font-bold rounded-full">
                    Product Strategy
                  </span>
                </div>
              </div>
              <div className="absolute bottom-8 right-8 flex items-center gap-2 opacity-20">
                <span className="text-[8px] font-bold uppercase tracking-widest text-slate-400">
                  Crafted with Atelier
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="fixed bottom-8 right-8 z-[60]">
        <button className="flex items-center gap-3 bg-white hover:bg-slate-50 text-slate-900 px-6 py-4 rounded-2xl shadow-xl border border-slate-100 transition-all active:scale-95 group">
          <span className="material-symbols-outlined text-primary">
            auto_awesome
          </span>
          <div className="text-left">
            <p className="text-[10px] font-bold text-primary uppercase tracking-widest leading-none mb-1">
              AI Assistant
            </p>
            <p className="text-sm font-bold text-slate-700">
              Improve your summary
            </p>
          </div>
          <span className="material-symbols-outlined text-slate-300 group-hover:translate-x-1 transition-transform ml-2">
            chevron_right
          </span>
        </button>
      </div>
    </div>
  );
}

"use client";


export default function SimpleResume() {
  

  return (
    <div className="bg-background text-on-surface min-h-screen">
      <main className=" pt-20 pb-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
         
          <div className="flex flex-col gap-8">
            <section className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-primary p-2 bg-primary-fixed rounded-lg">
                  person
                </span>
                <h2 className="title-lg font-semibold text-on-surface">
                  Personal Information
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="label-md text-on-surface-variant font-semibold">
                    Full Name
                  </label>
                  <input
                    className="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/30 focus:bg-white transition-all outline-none"
                    placeholder="e.g. Julianne Sterling"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="label-md text-on-surface-variant font-semibold">
                    Professional Title
                  </label>
                  <input
                    className="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/30 focus:bg-white transition-all outline-none"
                    placeholder="e.g. Senior Product Designer"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="label-md text-on-surface-variant font-semibold">
                    Email Address
                  </label>
                  <input
                    className="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/30 focus:bg-white transition-all outline-none"
                    placeholder="julianne@example.com"
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <label className="label-md text-on-surface-variant font-semibold">
                    Phone Number
                  </label>
                  <input
                    className="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/30 focus:bg-white transition-all outline-none"
                    placeholder="+1 (555) 000-0000"
                    type="tel"
                  />
                </div>
              </div>
            </section>
            <section className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-primary p-2 bg-primary-fixed rounded-lg">
                  description
                </span>
                <h2 className="title-lg font-semibold text-on-surface">
                  Professional Summary
                </h2>
              </div>
              <div className="space-y-2">
                <label className="label-md text-on-surface-variant font-semibold">
                  Highlight your core strengths and career goals
                </label>
                <textarea
                  className="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/30 focus:bg-white transition-all outline-none resize-none"
                  placeholder="Innovative Product Designer with 8+ years of experience in..."
                ></textarea>
                <p className="text-xs text-on-surface-variant mt-2">
                  Pro tip: Use strong action verbs and quantify achievements
                  where possible.
                </p>
              </div>
            </section>
            <section className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary p-2 bg-primary-fixed rounded-lg">
                    work
                  </span>
                  <h2 className="title-lg font-semibold text-on-surface">
                    Work Experience
                  </h2>
                </div>
                <button className="flex items-center gap-1 text-primary label-md font-bold hover:bg-primary-fixed px-3 py-1.5 rounded-lg transition-all">
                  <span className="material-symbols-outlined text-sm">add</span>{" "}
                  Add New
                </button>
              </div>
              <div className="bg-surface-container-low rounded-xl p-6 relative group border-l-4 border-primary/20">
                <button className="absolute top-4 right-4 text-on-surface-variant/40 hover:text-error transition-colors">
                  <span className="material-symbols-outlined">delete</span>
                </button>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="label-md text-on-surface-variant font-semibold">
                      Job Title
                    </label>
                    <input
                      className="w-full bg-white border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/30 transition-all outline-none"
                      placeholder="Senior UX Designer"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="label-md text-on-surface-variant font-semibold">
                      Company
                    </label>
                    <input
                      className="w-full bg-white border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/30 transition-all outline-none"
                      placeholder="Creative Pulse Agency"
                      type="text"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="label-md text-on-surface-variant font-semibold">
                        Start Date
                      </label>
                      <input
                        className="w-full bg-white border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/30 transition-all outline-none"
                        type="month"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="label-md text-on-surface-variant font-semibold">
                        End Date
                      </label>
                      <input
                        className="w-full bg-white border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/30 transition-all outline-none"
                        type="month"
                      />
                    </div>
                  </div>
                  <div className="flex items-center pt-8">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary transition-all"
                        type="checkbox"
                      />
                      <span className="body-lg text-on-surface-variant">
                        I currently work here
                      </span>
                    </label>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="label-md text-on-surface-variant font-semibold">
                      Responsibilities &amp; Achievements
                    </label>
                    <textarea
                      className="w-full bg-white border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/30 transition-all outline-none resize-none"
                      placeholder="• Led the redesign of the mobile app increasing user retention by 25%..."
                    ></textarea>
                  </div>
                </div>
              </div>
            </section>
            <section className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-primary p-2 bg-primary-fixed rounded-lg">
                  psychology
                </span>
                <h2 className="title-lg font-semibold text-on-surface">
                  Skills &amp; Expertise
                </h2>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="bg-primary-fixed px-4 py-2 rounded-full flex items-center gap-2">
                  <span className="label-md text-on-primary-fixed-variant">
                    User Research
                  </span>
                  <span className="material-symbols-outlined text-sm cursor-pointer hover:text-primary">
                    close
                  </span>
                </div>
                <div className="bg-primary-fixed px-4 py-2 rounded-full flex items-center gap-2">
                  <span className="label-md text-on-primary-fixed-variant">
                    Figma
                  </span>
                  <span className="material-symbols-outlined text-sm cursor-pointer hover:text-primary">
                    close
                  </span>
                </div>
                <div className="bg-primary-fixed px-4 py-2 rounded-full flex items-center gap-2">
                  <span className="label-md text-on-primary-fixed-variant">
                    React Architecture
                  </span>
                  <span className="material-symbols-outlined text-sm cursor-pointer hover:text-primary">
                    close
                  </span>
                </div>
                <div className="bg-primary-fixed px-4 py-2 rounded-full flex items-center gap-2">
                  <span className="label-md text-on-primary-fixed-variant">
                    Design Systems
                  </span>
                  <span className="material-symbols-outlined text-sm cursor-pointer hover:text-primary">
                    close
                  </span>
                </div>
                <div className="bg-surface-container-low px-4 py-2 rounded-full border border-dashed border-outline-variant hover:border-primary transition-all">
                  <input
                    className="bg-transparent border-none p-0 label-md w-24 focus:ring-0 placeholder-on-surface-variant/40"
                    placeholder="Add skill..."
                    type="text"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <span className="text-xs text-on-surface-variant font-medium">
                  Suggestions:
                </span>
                <button className="text-xs text-primary hover:underline">
                  Accessibility
                </button>
                <button className="text-xs text-primary hover:underline">
                  Strategic Planning
                </button>
                <button className="text-xs text-primary hover:underline">
                  SEO
                </button>
              </div>
            </section>
            <section className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary p-2 bg-primary-fixed rounded-lg">
                    rocket_launch
                  </span>
                  <h2 className="title-lg font-semibold text-on-surface">
                    Projects
                  </h2>
                </div>
                <button className="flex items-center gap-1 text-primary label-md font-bold hover:bg-primary-fixed px-3 py-1.5 rounded-lg transition-all">
                  <span className="material-symbols-outlined text-sm">add</span>{" "}
                  Add Project
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-surface-container-low p-6 rounded-xl space-y-4">
                  <div className="space-y-1">
                    <label className="label-md text-on-surface-variant font-semibold">
                      Project Name
                    </label>
                    <input
                      className="w-full bg-white border-none rounded-lg py-2 px-3 text-sm focus:ring-2 focus:ring-primary/30 outline-none"
                      placeholder="NeoBank Mobile App"
                      type="text"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="label-md text-on-surface-variant font-semibold">
                      Link
                    </label>
                    <input
                      className="w-full bg-white border-none rounded-lg py-2 px-3 text-sm focus:ring-2 focus:ring-primary/30 outline-none"
                      placeholder="https://github.com/..."
                      type="url"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="label-md text-on-surface-variant font-semibold">
                      Brief Description
                    </label>
                    <textarea
                      className="w-full bg-white border-none rounded-lg py-2 px-3 text-sm focus:ring-2 focus:ring-primary/30 outline-none resize-none"
                      placeholder="Full-scale fintech UX audit and redesign..."
                    ></textarea>
                  </div>
                </div>
                <div className="bg-surface-container-low/50 border border-dashed border-outline-variant rounded-xl flex flex-col items-center justify-center p-6 text-on-surface-variant/40">
                  <span className="material-symbols-outlined text-3xl mb-2">
                    add_circle
                  </span>
                  <p className="label-md font-semibold">Add another project</p>
                </div>
              </div>
            </section>
          </div>
          
        </div>
      </main>
    </div>
  );
}

import React from "react";
import {
  Edit,
  MoreVertical,
  UserPlus,
  CheckCircle,
  Circle,
} from "lucide-react";
const page = () => {
  return (
    <div className="bg-background text-on-surface min-h-screen">
      <aside className="h-screen w-64 fixed left-0 top-0 bg-slate-50 dark:bg-slate-900 border-r border-slate-200/50 dark:border-slate-800/50 flex flex-col py-8 px-4 z-50">
        <div className="mb-10 px-2">
          <h1 className="text-lg font-bold text-indigo-700 dark:text-indigo-300 tracking-tight leading-relaxed">
            The Curator
          </h1>
          <p className="text-xs text-slate-500 font-medium tracking-widest uppercase">
            Elite Talent Partners
          </p>
        </div>
        <nav className="flex-1 space-y-1">
          <a
            className="flex items-center gap-3 px-3 py-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200 rounded-lg"
            href="#"
          >
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm font-medium">Dashboard</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200 rounded-lg"
            href="#"
          >
            <span className="material-symbols-outlined">add_circle</span>
            <span className="text-sm font-medium">Post Job</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200 rounded-lg"
            href="#"
          >
            <span className="material-symbols-outlined">work</span>
            <span className="text-sm font-medium">Manage Jobs</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200 rounded-lg"
            href="#"
          >
            <span className="material-symbols-outlined">group</span>
            <span className="text-sm font-medium">Candidates</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200 rounded-lg"
            href="#"
          >
            <span className="material-symbols-outlined">event</span>
            <span className="text-sm font-medium">Interviews</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200 rounded-lg"
            href="#"
          >
            <span className="material-symbols-outlined">mail</span>
            <span className="text-sm font-medium">Messages</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200 rounded-lg"
            href="#"
          >
            <span className="material-symbols-outlined">insights</span>
            <span className="text-sm font-medium">Analytics</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2 text-indigo-700 dark:text-indigo-400 font-semibold border-r-4 border-indigo-600 dark:border-indigo-400 bg-indigo-50/50 dark:bg-indigo-900/20 transition-all rounded-l-lg scale-95 active:opacity-80"
            href="#"
          >
            <span className="material-symbols-outlined">business</span>
            <span className="text-sm">Company Profile</span>
          </a>
          <a
            className="flex items-center gap-3 px-3 py-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200 rounded-lg"
            href="#"
          >
            <span className="material-symbols-outlined">settings</span>
            <span className="text-sm font-medium">Settings</span>
          </a>
        </nav>
        <div className="mt-auto pt-8 border-t border-slate-200/50 dark:border-slate-800/50">
          <button className="w-full bg-primary text-white py-3 rounded-xl font-semibold shadow-sm hover:opacity-90 transition-opacity">
            Quick Post
          </button>
        </div>
      </aside>
      <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md flex items-center justify-between px-8 z-40">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative w-full max-w-md focus-within:ring-2 focus-within:ring-indigo-500/20 rounded-lg transition-all">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
              search
            </span>
            <input
              className="w-full bg-surface-container-low border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-0"
              placeholder="Search elite candidates..."
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button className="relative text-slate-500 hover:text-indigo-600 transition-colors">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full"></span>
          </button>
          <div className="h-8 w-px bg-slate-200 dark:bg-slate-800"></div>
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-bold text-on-surface">Elena Vance</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest">
                Executive Recruiter
              </p>
            </div>
            <img
              alt="Recruiter profile"
              className="w-10 h-10 rounded-full object-cover border-2 border-primary-fixed"
              data-alt="professional portrait of a confident woman in a business suit against a neutral studio background with soft lighting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi-OtDBN6bFm9x9FcIa8lE1ZlBKQm_KLrAIuGQqNzh9bwdVL3YOqiv7NBX9Nlkf03w_Xln3VdKRWW1RgcFuKRFRf1qLtd3IGYQsBcAnf_VlIX8-7mOLta8r5oXumw9oQLeYOfDiqd6rwij25zY4RS7VZ2TMvuxDOSCIW0yuf25weFHDPd1O5NpHe0C8bTZSegFqZ23Vcw6FR2TXjJLT6Y9BBa_veS5yihKILPuvzDwuxW9rpLEkTy__tytECVxbpuQYCv10hNZ9rCt"
            />
          </div>
        </div>
      </header>
      <main className="ml-0 lg:ml-64 pt-24 pb-12 px-4 sm:px-8 max-w-7xl">
      
      {/* HEADER */}
      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-on-surface mb-2">
          Management Workspace
        </h2>
        <p className="text-on-surface-variant max-w-2xl text-base sm:text-lg leading-relaxed">
          Refine your agency's digital presence and harmonize your recruitment team within a high-performance environment.
        </p>
      </div>

      {/* TABS */}
      <div className="flex gap-6 sm:gap-8 mb-10 border-b border-outline-variant/20 overflow-x-auto">
        <button className="pb-4 text-sm font-semibold text-primary border-b-2 border-primary whitespace-nowrap">
          Company Profile
        </button>
        <button className="pb-4 text-sm font-medium text-slate-500 hover:text-primary whitespace-nowrap">
          Team Management
        </button>
        <button className="pb-4 text-sm font-medium text-slate-500 hover:text-primary whitespace-nowrap">
          Hiring Preferences
        </button>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-12 gap-6 sm:gap-10">

        {/* LEFT */}
        <div className="col-span-12 lg:col-span-8 space-y-10">

          {/* COMPANY IDENTITY */}
          <section className="bg-surface-container-lowest rounded-xl p-6 sm:p-8 editorial-shadow">
            
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-xl font-bold mb-1">Company Identity</h3>
                <p className="text-sm text-on-surface-variant">
                  Manage how your brand appears to top-tier talent.
                </p>
              </div>

              <span className="px-3 py-1 bg-tertiary-container text-on-tertiary-container text-[10px] font-bold uppercase tracking-widest rounded-full">
                Elite Tier
              </span>
            </div>

            <div className="space-y-8">

              {/* LOGO */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 p-6 bg-surface-container-low rounded-xl">

                <div className="relative">
                  <img
                    className="w-20 sm:w-24 h-20 sm:h-24 rounded-lg object-cover shadow-sm bg-white"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDvlDV3xqSLX3NfhGq7gCwxKaufdD6YzS7pFYY3Oeuxcb--FR9T-jLW5uDo2OGeOfy541MSGR_BIco0BN7bagSvURRAqUqHoAxuBUzE3qx1e4w1FKX3dLUwUEnA42wju2DWuZXZohQNoOv9Nxka6rnKoaWropDwcrnk9wrbO3-Q8iiMna_t_mx-f36AVTPm4dr4wmaWeYaB-MIcSWSyGr1sSadx34klRrW4cucld2VjNp_HTUFuXJfV7U317AJ0hVfpA8K6yprJUl1"
                  />

                  <button className="absolute -bottom-2 -right-2 bg-primary text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform">
                    <Edit size={14} />
                  </button>
                </div>

                <div>
                  <h4 className="font-bold text-sm mb-1">Brand Insignia</h4>
                  <p className="text-xs text-on-surface-variant mb-4">
                    Recommended: 512x512px. SVG or high-res PNG.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <button className="text-xs font-semibold px-4 py-2 bg-white border border-outline-variant/30 rounded-lg hover:bg-slate-50">
                      Upload New
                    </button>
                    <button className="text-xs font-semibold px-4 py-2 text-error hover:bg-error/5 rounded-lg">
                      Remove
                    </button>
                  </div>
                </div>
              </div>

              {/* FORM GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    Legal Business Name
                  </label>
                  <input
                    className="w-full bg-transparent border-0 border-b-2 border-outline-variant/20 focus:border-primary px-0 py-2 text-sm font-medium"
                    value="Editorial Executive Partners"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    Industry Vertical
                  </label>
                  <select className="w-full bg-transparent border-0 border-b-2 border-outline-variant/20 focus:border-primary px-0 py-2 text-sm font-medium">
                    <option>Technology High-Growth</option>
                    <option>Fintech Global Finance</option>
                    <option>Healthcare Systems</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    Global Team Size
                  </label>
                  <select className="w-full bg-transparent border-0 border-b-2 border-outline-variant/20 focus:border-primary px-0 py-2 text-sm font-medium">
                    <option>50 - 200 Employees</option>
                    <option>201 - 500 Employees</option>
                    <option>500+ Employees</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    Primary Headquarters
                  </label>
                  <input
                    className="w-full bg-transparent border-0 border-b-2 border-outline-variant/20 focus:border-primary px-0 py-2 text-sm font-medium"
                    value="London, United Kingdom"
                  />
                </div>
              </div>

              {/* ABOUT */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  The Narrative (About Us)
                </label>
                <textarea className="w-full bg-transparent border-0 border-b-2 border-outline-variant/20 focus:border-primary px-0 py-2 text-sm leading-relaxed">
                  We are a boutique executive search firm dedicated to connecting visionary leaders with high-impact roles.
                </textarea>
              </div>

            </div>
          </section>

          {/* TEAM */}
          <section className="bg-surface-container-lowest rounded-xl p-6 sm:p-8 editorial-shadow">

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
              <div>
                <h3 className="text-xl font-bold mb-1">Active Recruiters</h3>
                <p className="text-sm text-on-surface-variant">
                  Your elite core team and their access levels.
                </p>
              </div>

              <button className="bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2">
                <UserPlus size={16} />
                Invite Recruiter
              </button>
            </div>

            {/* MEMBERS */}
            <div className="divide-y divide-outline-variant/10">

              <div className="py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVYe3xI3U49wzDa6W2-bLTptMAfhdt3uZ4DCmxtMGItRKyQ1eU0wZOeWO7Q83ZfOSE7BNL5cfZa6N6RU-iMfkrTMYr6oh8e5_im8YddCvrIM88EK-UuV4MHmzvpdXEZQDkwXQX6ZMYLDlC7LvCyoHlnc287ieIIBimTWKmk6nkVJY6NZXeEkHPfNQwrjei-vvA9nKMO-EOht996hAujapxXGUIjIOMVOhYwPfF9eTs5ix8ztg75FXduhZ81X-_GxeeD97ipMQTbzdM"/>
                  <div>
                    <p className="text-sm font-bold">Marcus Sterling</p>
                    <p className="text-xs text-slate-500">m.sterling@executive.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-8">
                  <span className="text-xs font-bold px-3 py-1 bg-primary/10 text-primary rounded-full uppercase tracking-wider">
                    Admin
                  </span>
                  <MoreVertical size={18} className="text-slate-400" />
                </div>
              </div>

              <div className="py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcTM4OT3rMAn4mypaTw4dNgXbhKQ02a7f-4KA41k7oBjT7uNfcUnTkfGu5XmXJibwQMhBb55WgNpakxl4jnL4NF0Z6j7vrdmdsJhJeEh7RV15ALcM-sHOiOAiGQaIyZWo4YcrwhgGGgOFl9rFGZvF4LCg7u3ZkKOxnG1r6Ulj-CSD4MAmTCtl_ky0B21e1yGF3V460_XQJ-uKg7vbVMmgpW6k0zbe5YEkacm1e8hyEMf-97MO4sumdPgxmI281dQ221SIGdrVjw7_u"/>
                  <div>
                    <p className="text-sm font-bold">Julianne Lowe</p>
                    <p className="text-xs text-slate-500">j.lowe@executive.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-8">
                  <span className="text-xs font-bold px-3 py-1 bg-slate-100 text-slate-600 rounded-full uppercase tracking-wider">
                    Standard
                  </span>
                  <MoreVertical size={18} className="text-slate-400" />
                </div>
              </div>

            </div>
          </section>

          {/* ACTIONS */}
          <div className="flex flex-col sm:flex-row justify-end gap-4">
            <button className="px-8 py-3 rounded-xl border text-sm font-bold text-slate-500">
              Discard Changes
            </button>
            <button className="px-10 py-3 rounded-xl bg-primary text-white text-sm font-bold shadow-lg">
              Publish Profile Update
            </button>
          </div>

        </div>

        {/* RIGHT PANEL (UNCHANGED STRUCTURE, RESPONSIVE FIX ONLY) */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          
          <div className="bg-indigo-900 text-white p-6 sm:p-8 rounded-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h4 className="text-xl font-bold mb-4">Elite Visibility</h4>
              <p className="text-indigo-200 text-sm leading-relaxed mb-6">
                Complete profiles receive 45% more high-quality applications.
              </p>

              <div className="flex items-center gap-4 mb-8">
                <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-[82%] h-full bg-tertiary-container"></div>
                </div>
                <span className="text-xs font-bold">82% Complete</span>
              </div>

              <ul className="space-y-3 text-xs text-indigo-100 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-emerald-400" />
                  Verified Legal Status
                </li>

                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-emerald-400" />
                  Team Seats Assigned (3/5)
                </li>

                <li className="flex items-center gap-2">
                  <Circle size={16} className="text-white/30" />
                  Setup Hiring Preferences
                </li>
              </ul>
            </div>

            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl"></div>
          </div>

        </div>

      </div>
    </main>
      <footer className="w-[calc(100%-16rem)] ml-64 border-t border-slate-100 dark:border-slate-800 py-6 mt-auto flex justify-between items-center px-8">
        <p className="text-xs font-medium uppercase tracking-widest text-slate-400">
          © 2024 Editorial Executive Recruitment. All rights reserved.
        </p>
        <div className="flex gap-8">
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
};

export default page;

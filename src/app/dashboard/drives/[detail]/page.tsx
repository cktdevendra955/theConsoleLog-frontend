import {
  Building2,
  MapPin,
  Clock,
  CheckCircle,
  ShieldCheck,
  Sparkles,
  Brain,
  Code,
  Share2,
  FileText,
  GitBranch,
  Briefcase,
  DollarSign,
  Laptop,
  User,
  Timer,
  Lock,
} from "lucide-react";

export default function HiringDrivePageDatils() {
  return (
    <div className="text-on-surface antialiased">
      <main className="pt-24 pb-12 px-8 max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          {/* Left Section */}
          <div className="flex gap-6 items-start">
            {/* Logo */}
            <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center shadow-sm p-4">
              <img
                className="w-full h-full object-contain"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHSs5pbvdOoP2-I6MoXtAYjk6Z_Wz9PMi2umY3iCSqiTsj8w1a82WfEGI041QudzooNQzBfdL0QJ4iD5fwE7wtYO_kGqjUHpqT3hOTUxBYRoiycpp93H7WcrscBC7Dw-mi2P95Ts9C9wfVZ4Ugvn5GPpbsxRGYatmaphZUtoBoXWpsktH-QTS7wgOgFO2oE3sGyoqsYzR7N4Znr77XHSU1QcbUCN-53MyPtZQM5aVUxm2wLsFU3zl-nc5x-Ow2oFhGF_NYm0QsXErj"
                alt="Company Logo"
              />
            </div>

            {/* Title + Info */}
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-editorial mb-2">
                Senior Product Designer
              </h1>

              <div className="flex flex-wrap gap-4 text-on-surface-variant font-medium text-sm">
                <span className="flex items-center gap-1.5">
                  <Building2 size={16} />
                  Global Tech Systems
                </span>

                <span className="flex items-center gap-1.5">
                  <MapPin size={16} />
                  San Francisco, CA (Hybrid)
                </span>

                <span className="flex items-center gap-1.5">
                  <Clock size={16} />
                  Deadline: Oct 24, 2023
                </span>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-white text-secondary px-4 py-2 rounded-full font-semibold text-sm shadow-sm">
              <CheckCircle size={16} />
              Applied 3 days ago
            </div>

            <button className="px-8 py-3 rounded-full font-semibold bg-surface-dim cursor-not-allowed">
              Apply Now
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-8">
            <section className="bg-surface-container-low p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="text-primary" size={20} />
                <h2 className="text-xl font-bold text-editorial">
                  Job Description
                </h2>
              </div>

              <div className="space-y-4 text-on-surface/80 leading-relaxed body-lg">
                <p>
                  We are seeking a visionary Senior Product Designer to join our
                  "Atelier" design team. In this role, you will lead the
                  evolution of our core recruitment platform, ensuring it
                  remains the gold standard for high-end talent acquisition
                  experiences.
                </p>
                <p>
                  You will collaborate closely with product managers and
                  engineers to translate complex workflows into elegant,
                  intuitive interfaces that prioritize user focus and cognitive
                  ease.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-6 px-2 text-editorial">
                Requirements
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-[0_2px_4px_rgba(25,28,30,0.02)] border-none">
                  <CheckCircle className="text-primary mb-3" />
                  <h3 className="font-bold mb-2">Experience</h3>
                  <p className="text-sm text-on-surface-variant">
                    5+ years of experience in SaaS product design with a strong
                    portfolio of shipped work.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-[0_2px_4px_rgba(25,28,30,0.02)]">
                  <Sparkles className="text-primary mb-3" />
                  <h3 className="font-bold mb-2">Visual Craft</h3>
                  <p className="text-sm text-on-surface-variant">
                    Exceptional eye for typography, layout, and intentional use
                    of whitespace.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-[0_2px_4px_rgba(25,28,30,0.02)]">
                  <Brain className="text-primary mb-3" />
                  <h3 className="font-bold mb-2">Strategy</h3>
                  <p className="text-sm text-on-surface-variant">
                    Ability to conduct user research and translate findings into
                    actionable design solutions.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-[0_2px_4px_rgba(25,28,30,0.02)]">
                  <Code className="text-primary mb-3" />
                  <h3 className="font-bold mb-2">Technical</h3>
                  <p className="text-sm text-on-surface-variant">
                    Familiarity with HTML/CSS and building scalable design
                    systems.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-surface-container-low p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-8">
                <GitBranch className="text-primary" size={20} />
                <h2 className="text-xl font-bold text-editorial">
                  Hiring Process
                </h2>
              </div>

              <div className="relative space-y-8 ml-4">
                <div className="absolute left-[-1.25rem] top-2 w-[2px] h-[calc(100%-1rem)] bg-primary/20"></div>

                <div className="relative flex gap-6 items-start">
                  <div className="absolute left-[-2rem] top-1.5 w-4 h-4 rounded-full bg-primary ring-4 ring-white shadow-sm"></div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider text-primary mb-1">
                      Step 1: Portfolio Review
                    </h4>
                    <p className="text-on-surface-variant">
                      Our design leads will review your past work for craft and
                      impact.
                    </p>
                  </div>
                </div>

                <div className="relative flex gap-6 items-start">
                  <div className="absolute left-[-2rem] top-1.5 w-4 h-4 rounded-full bg-surface-dim ring-4 ring-white shadow-sm"></div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider text-on-surface-variant mb-1">
                      Step 2: Technical Task
                    </h4>
                    <p className="text-on-surface-variant">
                      A 48-hour take-home challenge focused on architectural
                      minimalism.
                    </p>
                  </div>
                </div>

                <div className="relative flex gap-6 items-start">
                  <div className="absolute left-[-2rem] top-1.5 w-4 h-4 rounded-full bg-surface-dim ring-4 ring-white shadow-sm"></div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider text-on-surface-variant mb-1">
                      Step 3: Executive Interview
                    </h4>
                    <p className="text-on-surface-variant">
                      Final round with the Head of Design and Product CEO.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white p-8 rounded-2xl shadow-sm overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="text-primary" size={20} />
                  <h2 className="text-xl font-bold text-editorial">
                    About Global Tech Systems
                  </h2>
                </div>

                <p className="text-on-surface-variant body-lg mb-6 max-w-2xl">
                  Global Tech Systems is a pioneer in editorial-first digital
                  experiences. Founded in 2012, we believe that the tools we use
                  should be as beautiful as the products we build.
                </p>

                <div className="flex gap-4">
                  <div className="bg-surface-container-low px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest text-primary">
                    500+ Employees
                  </div>
                  <div className="bg-surface-container-low px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest text-primary">
                    Est. 2012
                  </div>
                  <div className="bg-surface-container-low px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest text-primary">
                    Publicly Traded
                  </div>
                </div>
              </div>
            </section>
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-bold mb-6 text-editorial">
                Quick Information
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-surface-container-low">
                  <span className="text-on-surface-variant text-sm font-medium flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    Job Type
                  </span>
                  <span className="font-semibold text-primary">Full-time</span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-surface-container-low">
                  <span className="text-on-surface-variant text-sm font-medium flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Salary Range
                  </span>
                  <span className="font-semibold text-primary">
                    $140k - $190k
                  </span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-surface-container-low">
                  <span className="text-on-surface-variant text-sm font-medium flex items-center gap-2">
                    <Laptop className="w-4 h-4" />
                    Remote Policy
                  </span>
                  <span className="font-semibold text-primary">Hybrid</span>
                </div>

                <div className="flex justify-between items-center py-3">
                  <span className="text-on-surface-variant text-sm font-medium flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Experience Level
                  </span>
                  <span className="font-semibold text-primary">Senior</span>
                </div>
              </div>
            </div>

            <div className="bg-tertiary-fixed text-on-tertiary-fixed p-6 rounded-2xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Timer className="w-4 h-4" />
                <h3 className="font-bold uppercase text-xs tracking-widest">
                  Application Deadline
                </h3>
              </div>
              <div className="text-3xl font-extrabold tracking-tighter mb-1">
                04 : 12 : 55
              </div>
              <div className="flex justify-between text-[10px] font-bold uppercase tracking-tighter opacity-70">
                <span>Days</span>
                <span>Hours</span>
                <span>Minutes</span>
              </div>
            </div>

            <div className="sticky top-24">
              <div className="bg-white p-6 rounded-2xl shadow-sm space-y-4">
                <p className="text-xs text-on-surface-variant text-center font-medium">
                  You have already applied for this position. Please check your
                  dashboard for updates.
                </p>

                <button className="w-full py-4 rounded-xl font-bold bg-surface-dim shadow-sm flex items-center justify-center gap-2 cursor-not-allowed">
                  <Lock className="w-4 h-4" />
                  Application Submitted
                </button>

                <button className="w-full py-3 rounded-xl font-semibold text-primary bg-surface-container-low hover:bg-surface-container-high transition-colors text-sm">
                  View Similar Drives
                </button>
              </div>

              <div className="mt-6 p-6 rounded-2xl bg-primary/5 text-primary text-center">
                <Share2 className="w-5 h-5 mx-auto mb-2" />
                <p className="text-sm font-bold">Refer a Colleague</p>
                <p className="text-[11px] opacity-70">
                  Earn a referral bonus if they are hired.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <div className="hidden">
        <aside className="fixed left-0 top-0 h-screen w-64 bg-surface-container-low p-6 flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-xl shadow-sm"></div>
            <div>
              <h2 className="text-lg font-bold text-on-surface">
                Global Hiring
              </h2>
              <p className="text-[10px] uppercase tracking-widest opacity-60">
                Enterprise Drive
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

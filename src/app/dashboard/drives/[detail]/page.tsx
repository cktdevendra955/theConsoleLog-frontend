import { Building2, MapPin, Clock, CheckCircle, ShieldCheck, Sparkles, Brain, Code, Share2, FileText, GitBranch, Briefcase, DollarSign, Laptop, User, Timer, Lock, } from "lucide-react";

export default function HiringDrivePageDatils() {
  return (
    <div className="text-on-surface antialiased">
      <main className="pt-20 pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-8 flex flex-col gap-6">

          {/* Top Section */}
          <div className="flex flex-col sm:flex-row gap-4 sm:items-start sm:justify-between">

            {/* LEFT */}
            <div className="flex gap-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-xl flex items-center justify-center shadow-sm p-2">
                <img
                  className="w-full h-full object-contain"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHSs5pbvdOoP2-I6MoXtAYjk6Z_Wz9PMi2umY3iCSqiTsj8w1a82WfEGI041QudzooNQzBfdL0QJ4iD5fwE7wtYO_kGqjUHpqT3hOTUxBYRoiycpp93H7WcrscBC7Dw-mi2P95Ts9C9wfVZ4Ugvn5GPpbsxRGYatmaphZUtoBoXWpsktH-QTS7wgOgFO2oE3sGyoqsYzR7N4Znr77XHSU1QcbUCN-53MyPtZQM5aVUxm2wLsFU3zl-nc5x-Ow2oFhGF_NYm0QsXErj"
                />
              </div>

              <div>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                  Senior Product Designer
                </h1>

                <div className="flex flex-wrap gap-2 text-xs sm:text-sm mt-2 text-on-surface-variant">
                  <span className="flex items-center gap-1">
                    <Building2 size={14} /> Global Tech Systems
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} /> Hybrid
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} /> Oct 24
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <div className="flex items-center justify-center gap-2 bg-white px-3 py-2 rounded-full text-xs font-medium shadow-sm">
                <CheckCircle size={14} />
                Applied
              </div>

              <button className="w-full sm:w-auto px-6 py-3 rounded-full bg-surface-dim text-sm font-semibold cursor-not-allowed">
                Apply Now
              </button>
            </div>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-8 space-y-6">

            {/* JOB DESCRIPTION */}
            <section className="bg-surface-container-low p-5 sm:p-6 rounded-xl">
              <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
                <FileText size={18} /> Job Description
              </h2>

              <p className="text-sm text-on-surface-variant leading-relaxed">
                We are seeking a visionary Senior Product Designer...
              </p>
            </section>

            {/* REQUIREMENTS */}
            <section>
              <h2 className="text-lg font-bold mb-4">Requirements</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <CheckCircle className="text-primary mb-2" size={18} />
                  <h3 className="font-semibold text-sm">Experience</h3>
                  <p className="text-xs text-on-surface-variant">
                    5+ years SaaS design
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <Sparkles className="text-primary mb-2" size={18} />
                  <h3 className="font-semibold text-sm">Visual Craft</h3>
                  <p className="text-xs text-on-surface-variant">
                    Strong UI/UX sense
                  </p>
                </div>
              </div>
            </section>

            {/* ABOUT */}
            <section className="bg-white p-5 sm:p-6 rounded-xl shadow-sm">
              <h2 className="text-lg font-bold mb-3">
                About Company
              </h2>

              <p className="text-sm text-on-surface-variant">
                Global Tech Systems is a pioneer...
              </p>
            </section>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="lg:col-span-4 space-y-4">

            {/* QUICK INFO */}
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <h3 className="font-bold mb-4 text-sm">Quick Info</h3>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between">
                  <span className="flex gap-1 items-center">
                    <Briefcase size={14} /> Type
                  </span>
                  <span className="font-semibold">Full-time</span>
                </div>

                <div className="flex justify-between">
                  <span className="flex gap-1 items-center">
                    <DollarSign size={14} /> Salary
                  </span>
                  <span className="font-semibold">$140k</span>
                </div>
              </div>
            </div>

            {/* ACTION BOX */}
            <div className="bg-white p-5 rounded-xl shadow-sm space-y-3">
              <button className="w-full py-3 rounded-lg bg-surface-dim text-sm font-semibold cursor-not-allowed">
                Applied
              </button>

              <button className="w-full py-3 rounded-lg bg-surface-container-low text-primary text-sm">
                View Similar
              </button>
            </div>

          </aside>
        </div>
      </main>
    </div>
  );
}
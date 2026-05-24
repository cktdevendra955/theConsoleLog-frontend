import {
  Building2,
  MapPin,
  Clock,
  CheckCircle,
  Sparkles,
  FileText,
  Briefcase,
  DollarSign,
} from "lucide-react";

/* ---------------- DESIGN SYSTEM ---------------- */

const Card = ({ children }: any) => (
  <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-sm transition">
    {children}
  </div>
);

const gradientBtn =
  "bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:opacity-90 transition";

/* ---------------- PAGE ---------------- */

export default function HiringDrivePageDatils() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <main className="pt-24 pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between gap-6">

          {/* LEFT */}
          <div className="flex gap-4">

            <div className="w-14 h-14 bg-gray-50 border rounded-xl flex items-center justify-center p-2">
              <img
                className="w-full h-full object-contain"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHSs5pbvdOoP2-I6MoXtAYjk6Z_Wz9PMi2umY3iCSqiTsj8w1a82WfEGI041QudzooNQzBfdL0QJ4iD5fwE7wtYO_kGqjUHpqT3hOTUxBYRoiycpp93H7WcrscBC7Dw-mi2P95Ts9C9wfVZ4Ugvn5GPpbsxRGYatmaphZUtoBoXWpsktH-QTS7wgOgFO2oE3sGyoqsYzR7N4Znr77XHSU1QcbUCN-53MyPtZQM5aVUxm2wLsFU3zl-nc5x-Ow2oFhGF_NYm0QsXErj"
              />
            </div>

            <div>
              <h1 className="text-2xl md:text-3xl font-bold">
                Senior Product Designer
              </h1>

              <div className="flex flex-wrap gap-3 text-sm text-gray-500 mt-2">
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
          <div className="flex items-center gap-3">

            <div className="flex items-center gap-2 px-4 py-2 rounded-full border bg-gray-50 text-sm">
              <CheckCircle className="text-emerald-600 w-4 h-4" />
              Applied
            </div>

            <button className={`px-6 py-3 rounded-xl ${gradientBtn} cursor-not-allowed`}>
              Apply Now
            </button>

          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* LEFT */}
          <div className="lg:col-span-8 space-y-6">

            {/* DESCRIPTION */}
            <Card>
              <div className="flex items-center gap-2 mb-4">
                <FileText className="text-emerald-600 w-5 h-5" />
                <h2 className="text-lg font-semibold">Job Description</h2>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                We are seeking a visionary Senior Product Designer to create
                scalable, user-centered digital experiences.
              </p>
            </Card>

            {/* REQUIREMENTS */}
            <div className="space-y-4">

              <h2 className="text-lg font-semibold">Requirements</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <Card>
                  <CheckCircle className="text-emerald-600 mb-3" />
                  <h3 className="font-semibold text-sm">Experience</h3>
                  <p className="text-sm text-gray-500">
                    5+ years SaaS design experience
                  </p>
                </Card>

                <Card>
                  <Sparkles className="text-emerald-600 mb-3" />
                  <h3 className="font-semibold text-sm">UI/UX Skills</h3>
                  <p className="text-sm text-gray-500">
                    Strong visual and interaction design
                  </p>
                </Card>

              </div>
            </div>

            {/* ABOUT */}
            <Card>
              <h2 className="text-lg font-semibold mb-3">
                About Company
              </h2>

              <p className="text-sm text-gray-600 leading-relaxed">
                Global Tech Systems is a pioneer in building scalable enterprise
                solutions for modern businesses.
              </p>
            </Card>

          </div>

          {/* RIGHT */}
          <aside className="lg:col-span-4 space-y-6">

            {/* QUICK INFO */}
            <Card>
              <h3 className="font-semibold mb-4">Quick Info</h3>

              <div className="space-y-4 text-sm">

                <div className="flex justify-between">
                  <span className="flex items-center gap-2 text-gray-500">
                    <Briefcase className="w-4 h-4 text-emerald-600" />
                    Type
                  </span>
                  <span className="font-medium">Full-time</span>
                </div>

                <div className="flex justify-between">
                  <span className="flex items-center gap-2 text-gray-500">
                    <DollarSign className="w-4 h-4 text-emerald-600" />
                    Salary
                  </span>
                  <span className="font-medium">$140k</span>
                </div>

              </div>
            </Card>

            {/* ACTION BOX */}
            <Card>
              <button className="w-full py-3 rounded-xl border hover:bg-gray-50 transition mb-3">
                Applied
              </button>

              <button className={`w-full py-3 rounded-xl ${gradientBtn}`}>
                View Similar Jobs
              </button>
            </Card>

          </aside>
        </div>
      </main>
    </div>
  );
}
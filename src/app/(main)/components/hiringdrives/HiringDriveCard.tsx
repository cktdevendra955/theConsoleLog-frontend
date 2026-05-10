
import {
  MapPin,
  Calendar,
  Users,
  Briefcase,
  ArrowUpRight,
} from "lucide-react";

export default function HiringDriveCard() {
  return (
    <div className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 group-hover:underline underline-offset-4">
            Frontend Developer Hiring Drive
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            TechCorp Pvt Ltd
          </p>
        </div>

        <span className="text-xs font-medium border border-gray-300 px-3 py-1 rounded-full text-gray-700">
          Active
        </span>
      </div>

      {/* Info */}
      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-6">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          Remote / Bangalore
        </div>

        <div className="flex items-center gap-2">
          <Briefcase className="w-4 h-4" />
          2–5 Years
        </div>

        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          Closes 25 May
        </div>

        <div className="flex items-center gap-2">
          <Users className="w-4 h-4" />
          120 Applicants
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-100 mb-5" />

      {/* Footer */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold text-gray-900">
          ₹6–12 LPA
        </span>

        <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium primary-gradient-bg hover:bg-gray-900 active:scale-[0.97] transition-all">
          Apply
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
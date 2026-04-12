"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Clock,
  MoreHorizontal,
  Search,
  Filter,
} from "lucide-react";

const appliedJobs = [
  {
    id: 1,
    company: "Google",
    logo: "https://picsum.photos/seed/google/100/100",
    role: "Senior Product Designer",
    status: "Interviewing",
    appliedDate: "Oct 12, 2023",
    lastUpdate: "2 days ago",
  },
  {
    id: 2,
    company: "Airbnb",
    logo: "https://picsum.photos/seed/airbnb/100/100",
    role: "UX Researcher",
    status: "Applied",
    appliedDate: "Oct 10, 2023",
    lastUpdate: "4 days ago",
  },
  {
    id: 3,
    company: "Stripe",
    logo: "https://picsum.photos/seed/stripe/100/100",
    role: "Product Lead",
    status: "Offer",
    appliedDate: "Sep 28, 2023",
    lastUpdate: "1 week ago",
  },
  {
    id: 4,
    company: "Figma",
    logo: "https://picsum.photos/seed/figma/100/100",
    role: "Design Systems Engineer",
    status: "Rejected",
    appliedDate: "Sep 15, 2023",
    lastUpdate: "2 weeks ago",
  },
];

const statusColors: Record<string, string> = {
  Applied: "bg-blue-50 text-blue-600",
  Interviewing: "bg-purple-50 text-purple-600",
  Offer: "bg-green-50 text-green-600",
  Rejected: "bg-red-50 text-red-600",
};

export default function AppliedJobs() {
  return (
    <div className="p-4 md:p-8 space-y-6 lg:space-y-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
            Applied Jobs
          </h2>
          <p className="text-slate-500 mt-1">
            Track and manage your applications.
          </p>
        </div>

        {/* Search + Filter */}
        <div className="flex gap-2 lg:gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              placeholder="Search..."
              className="w-full lg:w-64 pl-10 pr-4 py-2.5 bg-white border rounded-xl focus:ring-2 focus:ring-primary outline-none"
            />
          </div>

          <button className="p-2.5 bg-white border rounded-xl hover:bg-slate-100">
            <Filter size={20} />
          </button>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block bg-white rounded-2xl shadow-sm overflow-hidden border">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50 border-b">
              <th className="px-6 py-4 text-sm font-bold text-slate-500">Company & Role</th>
              <th className="px-6 py-4 text-sm font-bold text-slate-500">Applied</th>
              <th className="px-6 py-4 text-sm font-bold text-slate-500">Status</th>
              <th className="px-6 py-4 text-sm font-bold text-slate-500">Update</th>
              <th className="px-6 py-4 text-right"></th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {appliedJobs.map((job, i) => (
              <motion.tr
                key={job.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="hover:bg-slate-50"
              >
                <td className="px-6 py-5">
                  <div className="flex items-center gap-4">
                    <Image
                      src={job.logo}
                      alt={job.company}
                      width={40}
                      height={40}
                      className="rounded-lg"
                    />
                    <div>
                      <h4 className="font-bold text-slate-900">{job.role}</h4>
                      <p className="text-sm text-slate-500">{job.company}</p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-5 text-sm text-slate-600">
                  {job.appliedDate}
                </td>

                <td className="px-6 py-5">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${statusColors[job.status]}`}>
                    {job.status}
                  </span>
                </td>

                <td className="px-6 py-5 text-sm text-slate-500 flex items-center gap-2">
                  <Clock size={14} />
                  {job.lastUpdate}
                </td>

                <td className="px-6 py-5 text-right">
                  <button className="p-2 hover:bg-slate-100 rounded-lg">
                    <MoreHorizontal size={20} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden space-y-4 pb-20">
        {appliedJobs.map((job, i) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white p-4 rounded-xl border shadow-sm space-y-4"
          >
            <div className="flex justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src={job.logo}
                  alt={job.company}
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <div>
                  <h4 className="font-bold text-sm text-slate-900">
                    {job.role}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {job.company}
                  </p>
                </div>
              </div>

              <MoreHorizontal size={18} />
            </div>

            <div className="flex justify-between items-center border-t pt-3">
              <span className={`px-2 py-1 text-xs rounded-full font-bold ${statusColors[job.status]}`}>
                {job.status}
              </span>

              <div className="text-right">
                <p className="text-[10px] text-slate-400 uppercase">
                  Applied
                </p>
                <p className="text-xs font-bold text-slate-600">
                  {job.appliedDate}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
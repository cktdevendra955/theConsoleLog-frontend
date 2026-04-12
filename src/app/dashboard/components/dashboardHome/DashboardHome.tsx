"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  Clock,
  TrendingUp,
  ChevronRight,
  MapPin,
  DollarSign,
} from "lucide-react";

const stats = [
  {
    label: "Total Applied",
    value: "45",
    icon: Briefcase,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    label: "Interviews",
    value: "12",
    icon: Calendar,
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    label: "Offers",
    value: "3",
    icon: CheckCircle2,
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    label: "Pending",
    value: "30",
    icon: Clock,
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
];

const recentJobs = [
  {
    company: "Google",
    logo: "https://picsum.photos/seed/google/100/100",
    role: "Senior Product Designer",
    location: "Mountain View, CA",
    salary: "$180k - $240k",
    status: "Applied",
    date: "2 days ago",
  },
  {
    company: "Airbnb",
    logo: "https://picsum.photos/seed/airbnb/100/100",
    role: "UX Researcher",
    location: "Remote",
    salary: "$150k - $190k",
    status: "Interviewing",
    date: "5 days ago",
  },
  {
    company: "Stripe",
    logo: "https://picsum.photos/seed/stripe/100/100",
    role: "Product Lead",
    location: "San Francisco, CA",
    salary: "$200k - $280k",
    status: "Applied",
    date: "1 week ago",
  },
];

export default function DashboardContent() {
  return (
    <div className="p-4 md:p-8 space-y-8 max-w-7xl mx-auto">
      
      {/* Welcome */}
      <section>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Welcome back, Devendra! 👋
        </h2>
        <p className="text-slate-500 mt-1">
          Here's what's happening with your job search today.
        </p>
      </section>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-4 lg:p-6 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center justify-between">
              <div className={`${stat.bg} ${stat.color} p-2 lg:p-3 rounded-lg`}>
                <stat.icon size={20} />
              </div>

              <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full flex items-center gap-1">
                <TrendingUp size={12} />
                +12%
              </span>
            </div>

            <div className="mt-4">
              <h3 className="text-2xl font-bold text-slate-900">
                {stat.value}
              </h3>
              <p className="text-sm text-slate-500">{stat.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Recent Applications */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-900">
              Recent Applications
            </h3>

            <button className="text-primary font-semibold text-sm flex items-center gap-1 hover:underline">
              View all <ChevronRight size={16} />
            </button>
          </div>

          <div className="space-y-4">
            {recentJobs.map((job, i) => (
              <motion.div
                key={job.company + job.role}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="bg-white p-4 lg:p-5 rounded-xl flex items-center gap-4 group hover:bg-slate-50 transition"
              >
                <Image
                  src={job.logo}
                  alt={job.company}
                  width={56}
                  height={56}
                  className="rounded-xl object-cover"
                />

                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-slate-900 truncate group-hover:text-primary transition">
                    {job.role}
                  </h4>

                  <div className="flex flex-wrap items-center gap-4 mt-1 text-sm text-slate-500">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} /> {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign size={14} /> {job.salary}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      job.status === "Applied"
                        ? "bg-blue-50 text-blue-600"
                        : "bg-purple-50 text-purple-600"
                    }`}
                  >
                    {job.status}
                  </span>
                  <p className="text-xs text-slate-400 mt-2">{job.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interviews */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-slate-900">
            Upcoming Interviews
          </h3>

          <div className="bg-white p-6 rounded-xl shadow-sm space-y-6">
            
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex flex-col items-center justify-center">
                <span className="text-xs font-bold">OCT</span>
                <span className="text-lg font-bold">24</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-900">
                  Technical Interview
                </h4>
                <p className="text-sm text-slate-500">
                  Airbnb • 10:00 AM
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-slate-100 text-slate-500 rounded-xl flex flex-col items-center justify-center">
                <span className="text-xs font-bold">OCT</span>
                <span className="text-lg font-bold">26</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-900">
                  Design Critique
                </h4>
                <p className="text-sm text-slate-500">
                  Google • 02:30 PM
                </p>
              </div>
            </div>

            <button className="w-full py-3 bg-slate-100 text-slate-900 font-bold rounded-xl hover:bg-slate-200 transition">
              View Calendar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
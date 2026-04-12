"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Calendar as CalendarIcon,
  Clock,
  Video,
  MapPin,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  User,
} from "lucide-react";

const interviews = [
  {
    id: 1,
    company: "Airbnb",
    logo: "https://picsum.photos/seed/airbnb/100/100",
    type: "Technical Interview",
    date: "Oct 24, 2023",
    time: "10:00 AM - 11:00 AM",
    location: "Google Meet",
    interviewer: "Sarah Johnson",
    role: "UX Researcher",
  },
  {
    id: 2,
    company: "Google",
    logo: "https://picsum.photos/seed/google/100/100",
    type: "Design Critique",
    date: "Oct 26, 2023",
    time: "02:30 PM - 03:30 PM",
    location: "Mountain View Office",
    interviewer: "Michael Chen",
    role: "Senior Product Designer",
  },
  {
    id: 3,
    company: "Stripe",
    logo: "https://picsum.photos/seed/stripe/100/100",
    type: "Behavioral Interview",
    date: "Oct 30, 2023",
    time: "11:00 AM - 12:00 PM",
    location: "Zoom",
    interviewer: "Alex Rivera",
    role: "Product Lead",
  },
];

export default function Interviews() {
  return (
    <div className="p-4 md:p-8 space-y-6 lg:space-y-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
            Interviews
          </h2>
          <p className="text-slate-500 mt-1">
            Manage your upcoming interview schedule.
          </p>
        </div>

        <button className="px-6 py-3 bg-primary text-white font-bold rounded-xl shadow-lg hover:scale-[1.02] transition">
          <CalendarIcon size={20} className="inline mr-2" />
          Sync Calendar
        </button>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        
        {/* Calendar */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border">
            
            {/* Month Header */}
            <div className="flex justify-between mb-6">
              <h3 className="font-bold text-slate-900">October 2023</h3>
              <div className="flex gap-2">
                <button className="p-1 hover:bg-slate-100 rounded">
                  <ChevronLeft size={20} />
                </button>
                <button className="p-1 hover:bg-slate-100 rounded">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Days */}
            <div className="grid grid-cols-7 text-center text-xs text-slate-400 mb-3">
              {["SU","MO","TU","WE","TH","FR","SA"].map(d => <span key={d}>{d}</span>)}
            </div>

            {/* Dates */}
            <div className="grid grid-cols-7 gap-2 text-center">
              {Array.from({ length: 31 }).map((_, i) => (
                <div
                  key={i}
                  className={`py-2 rounded-lg text-sm cursor-pointer
                    ${i+1===24 ? "bg-primary text-white" : "hover:bg-slate-100"}
                    ${[26,30].includes(i+1) && "text-primary font-bold"}
                  `}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>

          {/* Tip */}
          <div className="hidden lg:block bg-primary/5 p-6 rounded-2xl border">
            <h4 className="font-bold text-primary mb-2">Interview Tip</h4>
            <p className="text-sm text-slate-600">
              Prepare 3 strong questions before your interview.
            </p>
          </div>
        </div>

        {/* List */}
        <div className="lg:col-span-2 space-y-4 pb-20">
          <h3 className="text-xl font-bold text-slate-900">
            Upcoming Schedule
          </h3>

          {interviews.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-2xl border shadow-sm hover:shadow-md flex flex-col md:flex-row gap-6"
            >
              
              {/* Left */}
              <div className="flex items-center gap-4 md:w-1/3">
                <Image
                  src={item.logo}
                  alt=""
                  width={56}
                  height={56}
                  className="rounded-xl"
                />
                <div>
                  <h4 className="font-bold">{item.company}</h4>
                  <p className="text-sm text-slate-500">{item.role}</p>
                </div>
              </div>

              {/* Middle */}
              <div className="flex-1 grid grid-cols-2 gap-4 text-sm text-slate-600">
                <div>
                  <div className="flex gap-2">
                    <CalendarIcon size={14} />
                    {item.date}
                  </div>
                  <div className="flex gap-2 mt-2">
                    <Clock size={14} />
                    {item.time}
                  </div>
                </div>

                <div>
                  <div className="flex gap-2">
                    {item.location.includes("Zoom") || item.location.includes("Meet") ? (
                      <Video size={14} />
                    ) : (
                      <MapPin size={14} />
                    )}
                    {item.location}
                  </div>
                  <div className="flex gap-2 mt-2">
                    <User size={14} />
                    {item.interviewer}
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="flex justify-end">
                <MoreVertical />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
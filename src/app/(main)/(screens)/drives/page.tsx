"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Users,
  Bookmark,
} from "lucide-react";

type Drive = {
  id: number;
  company: string;
  role: string;
  date: string;
  location: string;
  eligibility: string;
  saved: boolean;
};

export default function DrivesPage() {
  const [drives, setDrives] = useState<Drive[]>([
    {
      id: 1,
      company: "TechNova",
      role: "Software Engineer",
      date: "25 July 2026",
      location: "Online",
      eligibility: "B.Tech / MCA 2024-2026",
      saved: false,
    },
    {
      id: 2,
      company: "CodeCraft",
      role: "Backend Developer",
      date: "30 July 2026",
      location: "Bangalore",
      eligibility: "Any Graduate",
      saved: false,
    },
    {
      id: 3,
      company: "StartupX",
      role: "Frontend Intern",
      date: "5 Aug 2026",
      location: "Delhi",
      eligibility: "Final Year Students",
      saved: false,
    },
  ]);

  const toggleSave = (id: number) => {
    setDrives((prev) =>
      prev.map((d) =>
        d.id === id ? { ...d, saved: !d.saved } : d
      )
    );
  };

  return (
    <div className="min-h-screen bg-white text-black">

      {/* 🔹 Header */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <h1 className="text-lg font-semibold">Mark-43</h1>
          <div className="text-sm text-gray-500">Hiring Drives</div>
        </div>
      </header>

      {/* 🔹 Page Intro */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold tracking-tight">
          Explore Hiring Drives
        </h2>
        <p className="text-gray-500 mt-2 text-sm">
          Apply to upcoming hiring drives and accelerate your career growth.
        </p>
      </section>

      {/* 🔹 Drives Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-16 grid md:grid-cols-2 gap-6">

        {drives.map((drive) => (
          <motion.div
            key={drive.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border rounded-2xl p-6 hover:shadow-md transition"
          >

            {/* Top */}
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium">{drive.role}</h3>
                <p className="text-sm text-gray-500">{drive.company}</p>
              </div>

              <button onClick={() => toggleSave(drive.id)}>
                <Bookmark
                  className={`h-5 w-5 ${
                    drive.saved ? "text-black" : "text-gray-400"
                  }`}
                  fill={drive.saved ? "black" : "none"}
                />
              </button>
            </div>

            {/* Info */}
            <div className="mt-4 space-y-2 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar size={14} /> {drive.date}
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} /> {drive.location}
              </div>
              <div className="flex items-center gap-2">
                <Users size={14} /> {drive.eligibility}
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-between items-center mt-6">
              <span className="text-xs text-gray-400">
                Limited slots available
              </span>

              <button className="bg-black text-white px-4 py-2 rounded-xl text-sm hover:opacity-90">
                Apply Now
              </button>
            </div>
          </motion.div>
        ))}

      </section>

      {/* 🔹 Empty State */}
      {drives.length === 0 && (
        <div className="text-center text-gray-500 py-20">
          No hiring drives available at the moment.
        </div>
      )}
    </div>
  );
}
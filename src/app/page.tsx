"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Briefcase, FileText, User } from "lucide-react";

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Page() {
  return (
    <div className="relative min-h-screen bg-gray-100 text-black overflow-hidden">
      
      {/* 🌫️ Subtle Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-100 to-gray-200" />
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-gray-300/30 rounded-full blur-3xl" />
      <div className="absolute bottom-[-120px] right-[-100px] w-[400px] h-[400px] bg-gray-400/20 rounded-full blur-3xl" />

      {/* MAIN */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl w-full">

          {/* LEFT CONTENT */}
          <motion.div
            variants={item}
            className="space-y-7 text-center md:text-left"
          >
            <motion.h1
              variants={item}
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight"
            >
              Land Your Dream Job
              <span className="block text-gray-500 font-medium">
                Faster & Smarter
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-gray-600 text-base sm:text-lg max-w-lg mx-auto md:mx-0 leading-relaxed"
            >
              Build ATS-friendly resumes, create stunning portfolios, and apply
              to top hiring drives — all in one powerful platform.
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Link href="/dashboard">
                <motion.div
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-black text-white px-7 py-3 font-medium shadow-lg hover:shadow-xl transition cursor-pointer"
                >
                  Enter Dashboard
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                </motion.div>
              </Link>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="rounded-xl border border-gray-300 px-6 py-3 text-gray-700 hover:bg-gray-200 transition"
              >
                Explore Features
              </motion.button>
            </motion.div>

            {/* FEATURES */}
            <motion.div
              variants={item}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4"
            >
              {[
                { icon: FileText, label: "Resume Builder" },
                { icon: User, label: "Portfolio Creator" },
                { icon: Briefcase, label: "Job & Drives" },
              ].map((f, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm text-gray-600 bg-white px-3 py-2 rounded-lg border border-gray-200 shadow-sm"
                >
                  <f.icon size={16} />
                  {f.label}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE – PREMIUM CARD */}
          <motion.div variants={item} className="flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Glow */}
              <div className="absolute inset-0 bg-gray-300/40 blur-2xl rounded-3xl" />

              {/* Card */}
              <div className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-xl">
                
                <div className="space-y-5">
                  
                  {/* Header */}
                  <div className="h-4 w-32 bg-gray-200 rounded" />

                  {/* Chart */}
                  <div className="h-24 bg-gray-100 rounded-xl border border-gray-200 flex items-end gap-1 p-3">
                    {[40, 60, 30, 80, 55, 70].map((h, i) => (
                      <div
                        key={i}
                        className="w-2 bg-black rounded"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-16 bg-gray-100 rounded-lg border border-gray-200" />
                    <div className="h-16 bg-gray-100 rounded-lg border border-gray-200" />
                  </div>

                  {/* Button */}
                  <div className="h-10 bg-black rounded-lg" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}
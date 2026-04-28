"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Briefcase,
  FileText,
  User,
  ArrowRight,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="bg-white text-black min-h-screen">

      {/* 🔹 Header */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
          <h1 className="text-lg font-semibold tracking-tight">
            Mark-43
          </h1>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#features">Features</a>
            <a href="#how">How it works</a>
            <a href="#about">About</a>
          </nav>

          <Link
            href="/jobs"
            className="text-sm bg-black text-white px-4 py-2 rounded-xl hover:opacity-90 transition"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* 🔹 Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold tracking-tight leading-tight"
        >
          Build your career. <br /> All in one place.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-gray-500 max-w-2xl mx-auto"
        >
          Discover jobs, apply to hiring drives, build your portfolio, and generate
          professional resumes — everything you need to grow your career faster.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex justify-center gap-4"
        >
          <Link
            href="/jobs"
            className="bg-black text-white px-6 py-3 rounded-xl text-sm flex items-center gap-2 hover:opacity-90"
          >
            Explore Jobs <ArrowRight size={16} />
          </Link>

          <Link
            href="/resume"
            className="border px-6 py-3 rounded-xl text-sm hover:bg-gray-100"
          >
            Build Resume
          </Link>
        </motion.div>
      </section>

      {/* 🔹 Features */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-6">

          <FeatureCard
            icon={<Briefcase />}
            title="Job Search & Apply"
            desc="Find the best opportunities and apply instantly with a seamless experience."
          />

          <FeatureCard
            icon={<FileText />}
            title="Resume Builder"
            desc="Create professional resumes with structured, modern templates."
          />

          <FeatureCard
            icon={<User />}
            title="Portfolio Generator"
            desc="Build and share your personal portfolio with a clean, modern design."
          />

        </div>
      </section>

      {/* 🔹 How it Works */}
      <section id="how" className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-semibold">
            How Mark-43 helps you grow
          </h2>

          <div className="mt-10 grid md:grid-cols-3 gap-6 text-sm text-gray-600">

            <Step
              step="01"
              title="Create Profile"
              desc="Add your details once and reuse them everywhere."
            />

            <Step
              step="02"
              title="Apply Smartly"
              desc="Apply to jobs and hiring drives with ease."
            />

            <Step
              step="03"
              title="Showcase Yourself"
              desc="Share your portfolio and resume with confidence."
            />

          </div>
        </div>
      </section>

      {/* 🔹 CTA Banner */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-black text-white rounded-2xl p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Ready to take the next step?
          </h2>
          <p className="text-gray-300 mt-3">
            Start building your career with Mark-43 today.
          </p>

          <Link
            href="/jobs"
            className="inline-block mt-6 bg-white text-black px-6 py-3 rounded-xl text-sm"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* 🔹 Footer */}
      <footer className="border-t py-8 px-6 text-sm text-gray-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4">
          <p>© {new Date().getFullYear()} Mark-43. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Contact</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* 🔹 Components */

function FeatureCard({ icon, title, desc }: any) {
  return (
    <div className="border rounded-2xl p-6 hover:shadow-md transition">
      <div className="mb-4 text-gray-700">{icon}</div>
      <h3 className="font-medium text-lg">{title}</h3>
      <p className="text-sm text-gray-500 mt-2">{desc}</p>
    </div>
  );
}

function Step({ step, title, desc }: any) {
  return (
    <div className="bg-white border rounded-xl p-6">
      <p className="text-gray-400 text-xs">{step}</p>
      <h4 className="font-medium mt-2">{title}</h4>
      <p className="mt-2">{desc}</p>
    </div>
  );
}
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function PortfolioPage() {
  const [data, setData] = useState({
    name: "",
    role: "",
    bio: "",
    skills: "",
    project: "",
  });

  const handleChange = (key: string, value: string) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-white text-black">

      {/* 🔹 Header */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <h1 className="text-lg font-semibold">Mark-43</h1>
          <div className="text-sm text-gray-500">Portfolio Generator</div>
        </div>
      </header>

      {/* 🔹 Layout */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-8">

        {/* 🔹 Form */}
        <div className="space-y-6">

          <h2 className="text-xl font-semibold">Enter Your Details</h2>

          <Input
            label="Full Name"
            value={data.name}
            onChange={(v: string) => handleChange("name", v)}
          />

          <Input
            label="Role / Title"
            value={data.role}
            onChange={(v: string) => handleChange("role", v)}
          />

          <Textarea
            label="Short Bio"
            value={data.bio}
            onChange={(v: string) => handleChange("bio", v)}
          />

          <Input
            label="Skills (comma separated)"
            value={data.skills}
            onChange={(v: string) => handleChange("skills", v)}
          />

          <Textarea
            label="Project Description"
            value={data.project}
            onChange={(v: string) => handleChange("project", v)}
          />

          <button className="w-full bg-black text-white py-3 rounded-xl text-sm hover:opacity-90">
            Generate Portfolio
          </button>
        </div>

        {/* 🔥 Live Preview */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="border rounded-2xl p-6 bg-gray-50"
        >
          <h2 className="text-lg font-semibold mb-4">Live Preview</h2>

          <div className="bg-white rounded-xl p-6 shadow-sm">

            <h3 className="text-xl font-bold">
              {data.name || "Your Name"}
            </h3>

            <p className="text-gray-500 text-sm">
              {data.role || "Your Role"}
            </p>

            <p className="mt-4 text-sm text-gray-600">
              {data.bio || "Your short bio will appear here."}
            </p>

            {/* Skills */}
            <div className="mt-4 flex flex-wrap gap-2">
              {(data.skills || "Skill1, Skill2")
                .split(",")
                .map((s, i) => (
                  <span
                    key={i}
                    className="text-xs border px-2 py-1 rounded-lg"
                  >
                    {s.trim()}
                  </span>
                ))}
            </div>

            {/* Project */}
            <div className="mt-6">
              <h4 className="font-medium">Projects</h4>
              <p className="text-sm text-gray-600 mt-2">
                {data.project || "Your project details will appear here."}
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
}

/* 🔹 Reusable Inputs */

function Input({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="text-sm text-gray-600">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full mt-1 border rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/10"
      />
    </div>
  );
}

function Textarea({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="text-sm text-gray-600">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full mt-1 border rounded-xl px-4 py-2 text-sm h-24 focus:outline-none focus:ring-2 focus:ring-black/10"
      />
    </div>
  );
}
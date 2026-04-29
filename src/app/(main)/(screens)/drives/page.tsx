"use client";

import {
  Search,
  MapPin,
  ExternalLink,
  Share2,
  BadgeCheck,
} from "lucide-react";
import { useState } from "react";

const users = [
  {
    name: "Devendra Gupta",
    username: "devendra09",
    email: "devendra@gmail.com",
    location: "Noida",
    role: "Frontend Developer",
    experience: "Fresher",
    available: true,
    match: 92,
    skills: ["React", "Next.js", "Tailwind"],
    projects: ["E-commerce App", "Portfolio Website"],
  },
  {
    name: "Aman Sharma",
    username: "aman_dev",
    email: "aman@gmail.com",
    location: "Delhi",
    role: "Backend Developer",
    experience: "2 Years",
    available: false,
    match: 78,
    skills: ["Java", "Spring Boot", "MySQL"],
    projects: ["Payment API", "Auth System"],
  },
  {
    name: "Priya Singh",
    username: "priya_codes",
    email: "priya@gmail.com",
    location: "Remote",
    role: "Full Stack Developer",
    experience: "1 Year",
    available: true,
    match: 88,
    skills: ["React", "Node.js", "MongoDB"],
    projects: ["Job Portal", "Chat App"],
  },
];

export default function PortfolioPage() {
  const [query, setQuery] = useState("");

  const filteredUsers = users.filter((user) =>
    `${user.name} ${user.username} ${user.email}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <main className="bg-white text-gray-900 min-h-screen">

      {/* HERO */}
      <section className="pt-24 pb-12 px-6 md:px-12 text-center border-b">
        <div className="max-w-3xl mx-auto">

          <h1 className="text-3xl md:text-5xl font-semibold">
            Discover Developers
          </h1>

          <p className="mt-4 text-gray-500">
            Search developers by name, username, or email.
          </p>

          <div className="mt-6 flex items-center gap-3 border rounded-xl px-4 py-3">
            <Search size={18} className="text-gray-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search developers..."
              className="w-full outline-none"
            />
          </div>

        </div>
      </section>

      {/* RESULTS */}
      <section className="px-6 md:px-12 py-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredUsers.map((user, i) => (
            <div
              key={i}
              className="border rounded-2xl p-6 flex flex-col justify-between bg-white"
            >

              {/* TOP */}
              <div className="flex items-start justify-between">

                <div className="flex gap-4">

                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium">
                    {user.name[0]}
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold flex items-center gap-1">
                      {user.name}
                      <BadgeCheck size={14} className="text-green-500" />
                    </h2>

                    <p className="text-sm text-gray-500">
                      @{user.username}
                    </p>

                    <p className="text-xs text-gray-400 flex items-center gap-1 mt-1">
                      <MapPin size={12} />
                      {user.location}
                    </p>
                  </div>

                </div>

                {/* AI MATCH */}
                <div className="text-right">
                  <p className="text-xs text-gray-400">Match</p>
                  <p className="text-sm font-semibold">
                    {user.match}%
                  </p>
                </div>

              </div>

              {/* AVAILABILITY */}
              <div className="mt-3">
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    user.available
                      ? "bg-green-100 text-green-600"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {user.available ? "Open to Work" : "Not Available"}
                </span>
              </div>

              {/* ROLE + EXPERIENCE */}
              <div className="mt-4">
                <p className="text-sm font-medium">
                  {user.role}
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  {user.experience}
                </p>
              </div>

              {/* SKILLS */}
              <div className="flex flex-wrap gap-2 mt-4">
                {user.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 bg-gray-100 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* PROJECT PREVIEW */}
              <div className="mt-5">
                <p className="text-xs text-gray-400 mb-2">
                  Projects
                </p>

                <div className="space-y-1">
                  {user.projects.map((project, idx) => (
                    <p
                      key={idx}
                      className="text-xs text-gray-700 truncate"
                    >
                      • {project}
                    </p>
                  ))}
                </div>
              </div>

              {/* ACTION */}
              <div className="mt-6 flex items-center justify-between">

                {/* ONLY SHARE */}
                <button className="text-gray-500 hover:text-black transition">
                  <Share2 size={16} />
                </button>

                {/* CTA */}
                <button className="px-4 py-2 bg-black text-white rounded-lg text-sm flex items-center gap-1">
                  View Profile <ExternalLink size={14} />
                </button>

              </div>

            </div>
          ))}

          {/* EMPTY */}
          {filteredUsers.length === 0 && (
            <div className="col-span-full text-center text-gray-400 py-20">
              No developers found.
            </div>
          )}

        </div>
      </section>

    </main>
  );
}
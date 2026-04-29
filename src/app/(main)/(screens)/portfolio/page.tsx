"use client";

import {
  Search,
  MapPin,
   ExternalLink,
  Mail,
} from "lucide-react";
import { useState } from "react";

const users = [
  {
    name: "Devendra Gupta",
    username: "devendra09",
    email: "devendra@gmail.com",
    location: "Noida",
    role: "Frontend Developer",
    skills: ["React", "Next.js", "Tailwind"],
  },
  {
    name: "Aman Sharma",
    username: "aman_dev",
    email: "aman@gmail.com",
    location: "Delhi",
    role: "Backend Developer",
    skills: ["Java", "Spring Boot", "MySQL"],
  },
  {
    name: "Priya Singh",
    username: "priya_codes",
    email: "priya@gmail.com",
    location: "Remote",
    role: "Full Stack Developer",
    skills: ["React", "Node.js", "MongoDB"],
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
            Search portfolios by name, username, or email.
          </p>

          {/* SEARCH */}
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
              className="border rounded-2xl p-6 flex flex-col justify-between"
            >

              {/* TOP */}
              <div className="flex items-start gap-4">

                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium">
                  {user.name[0]}
                </div>

                <div>
                  <h2 className="text-lg font-semibold">
                    {user.name}
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

              {/* ROLE */}
              <p className="mt-4 text-sm font-medium">
                {user.role}
              </p>

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

              {/* ACTION */}
              <div className="mt-6 flex items-center justify-between">

                <div className="flex gap-3 text-gray-500">
                  <span >G</span>
                  <Mail size={16} />
                </div>

                <button className="text-sm flex items-center gap-1">
                  View <ExternalLink size={14} />
                </button>

              </div>

            </div>
          ))}

          {/* EMPTY STATE */}
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
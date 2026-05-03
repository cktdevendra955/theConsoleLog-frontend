"use client";

import {
  Search,
  MapPin,
  ExternalLink,
  Share2,
  BadgeCheck,
} from "lucide-react";
import { useState } from "react";
import HiringDriveCard from "../../components/hiringdrives/HiringDriveCard";

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
      <section className="pt-2 pb-12 px-6 md:px-12 text-center border-b">
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

          <HiringDriveCard />
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
"use client";

import Image from "next/image";
import {
  User,
  ChevronRight,
  Bell,
  Shield,
  Sparkles,
  Pencil,
  Lock,
  Smartphone,
} from "lucide-react";
import { useState } from "react";

export default function SettingsPage() {
  const [formData, setFormData] = useState({
    fullName: "Elena Vance",
    title: "Senior UX Designer",
    bio: "Crafting seamless digital experiences with a focus on human-centric design and aesthetic precision.",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-surface text-on-surface">
      <div className="pt-24 px-12 pb-20">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-[3.5rem] font-bold tracking-[-0.04em] leading-[1.1] mb-4">
            Settings
          </h2>
          <p className="text-on-surface-variant max-w-2xl leading-[1.6]">
            Manage your professional presence, preferences, and security
            protocols.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="col-span-12 lg:col-span-4 space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <nav className="flex flex-col gap-6">
                <a className="flex items-center justify-between group" href="#profile">
                  <div className="flex items-center gap-4">
                    <span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      <User />
                    </span>
                    <span className="font-semibold">Profile Identity</span>
                  </div>
                  <ChevronRight className="text-gray-400 group-hover:text-primary" />
                </a>

                <a className="flex items-center justify-between group" href="#notifications">
                  <div className="flex items-center gap-4">
                    <span className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <Bell />
                    </span>
                    <span className="text-gray-600">Communications</span>
                  </div>
                  <ChevronRight className="text-gray-400" />
                </a>

                <a className="flex items-center justify-between group" href="#security">
                  <div className="flex items-center gap-4">
                    <span className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <Shield />
                    </span>
                    <span className="text-gray-600">Security & Privacy</span>
                  </div>
                  <ChevronRight className="text-gray-400" />
                </a>
              </nav>
            </div>

            <div className="bg-purple-100 rounded-2xl p-8 relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-xs font-bold uppercase mb-4 block">
                  Recommended
                </span>
                <h4 className="text-xl font-bold mb-2">
                  Elevate your visibility
                </h4>
                <p className="text-sm mb-6">
                  Complete your profile to increase recruiter visibility.
                </p>
                <button className="bg-black text-white px-6 py-2 rounded-full text-sm">
                  Update Profile
                </button>
              </div>
              <Sparkles className="absolute -bottom-4 -right-4 w-32 h-32 opacity-10" />
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-12 lg:col-span-8 space-y-8">
            {/* Profile */}
            <section className="bg-white rounded-2xl p-10 shadow-xl" id="profile">
              <div className="flex justify-between mb-10">
                <h3 className="text-2xl font-semibold">Profile Identity</h3>
                <span className="px-4 py-1 bg-blue-50 text-blue-600 text-xs rounded-full">
                  Active Member
                </span>
              </div>

              <div className="flex items-center gap-8 mb-12">
                <div className="relative">
                  <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDknMJKl7Mitq7MS4wMhGMFK5Iu23rMH6DxGh-rno_XdOC4HLZbu5eSGVgTBuVKwJBwDejv17krFOsmhL6Sl4cjqlrqZyoQjLjbw-wqEQUJpXequ2PkrDkN-8bcSfGxzBLBFVFgOeGC6Qj2d-l6by1YH6YwdRgvbWKZmHsIhDo8MhuVmfnTCq8fTl7S7j2O50xdSFklztqYEBhwOoU1S5gPKSiK-MtOpoFNhJ-fMOGaYokt6B2F3iEfdPGebHDCPJBWWivgbCcXXL-e"
                    alt="User"
                    width={96}
                    height={96}
                    className="rounded-xl object-cover"
                  />
                  <button className="absolute -bottom-2 -right-2 bg-white p-2 rounded-xl shadow">
                    <Pencil size={16} />
                  </button>
                </div>

                <div>
                  <h4 className="text-xl font-semibold">{formData.fullName}</h4>
                  <p className="text-gray-500">{formData.title}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="col-span-2 md:col-span-1 bg-gray-50 p-3 rounded-xl"
                />
                <input
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="col-span-2 md:col-span-1 bg-gray-50 p-3 rounded-xl"
                />
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  rows={4}
                  className="col-span-2 bg-gray-50 p-3 rounded-xl"
                />
              </div>
            </section>

            {/* Notifications */}
            <section className="bg-white rounded-2xl p-10 shadow-xl">
              <h3 className="text-2xl font-semibold mb-8">Communications</h3>

              {["Job Recommendations", "Direct Messages", "Application Tracking"].map((item, i) => (
                <div key={i} className="flex justify-between mb-6">
                  <span>{item}</span>
                  <input type="checkbox" defaultChecked={false} />
                </div>
              ))}
            </section>

            {/* Security */}
            <section className="bg-white rounded-2xl p-10 shadow-xl">
              <h3 className="text-2xl font-semibold mb-8">Security</h3>

              <div className="space-y-4">
                <div className="flex justify-between bg-gray-100 p-4 rounded-xl">
                  <div className="flex gap-3">
                    <Lock />
                    <span>Password</span>
                  </div>
                  <button>Change</button>
                </div>

                <div className="flex justify-between bg-gray-100 p-4 rounded-xl">
                  <div className="flex gap-3">
                    <Smartphone />
                    <span>2FA</span>
                  </div>
                  <button>Enable</button>
                </div>
              </div>
            </section>

            {/* Actions */}
            <div className="flex justify-end gap-4">
              <button className="px-6 py-3">Cancel</button>
              <button className="px-6 py-3 bg-black text-white rounded-full">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
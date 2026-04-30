"use client";

import { motion } from "framer-motion";
import {
  User,
  ChevronRight,
  Bell,
  Shield,
  Sparkles,
  Pencil,
  Lock,
  Smartphone,
  LayoutDashboard,
  Briefcase,
  Search,
  MessageCircle,
  Settings,
} from "lucide-react";
import { useState } from "react";

export default function SettingsPage() {
  // 1. Initialize state with your default values
  const [formData, setFormData] = useState({
    fullName: "Elena Vance",
    title: "Senior UX Designer",
    bio: "Crafting seamless digital experiences with a focus on human-centric design and aesthetic precision.",
  });

  // 2. Handle change event for all inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="bg-surface text-on-surface">
      <main className=" pt-24 px-12 pb-20">
        <header className="mb-12">
          <h2 className="text-[3.5rem] font-bold tracking-[-0.04em] leading-[1.1] text-on-surface mb-4">
            Settings
          </h2>
          <p className="text-on-surface-variant body-lg max-w-2xl leading-[1.6]">
            Manage your professional presence, preferences, and security
            protocols in your dedicated career atelier.
          </p>
        </header>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-4 space-y-8">
            <div className="bg-white rounded-[1.5rem] p-8 shadow-[0_12px_24px_rgba(25,28,30,0.04)]">
              <nav className="flex flex-col gap-6">
                <a
                  className="flex items-center justify-between group"
                  href="#profile"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      <User />
                    </span>
                    <span className="font-semibold text-on-surface">
                      Profile Identity
                    </span>
                  </div>
                  <ChevronRight className="text-outline-variant group-hover:text-primary transition-colors" />
                </a>

                <a
                  className="flex items-center justify-between group"
                  href="#notifications"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-10 h-10 rounded-full bg-surface-container-low text-on-surface-variant flex items-center justify-center">
                      <Bell />
                    </span>
                    <span className="font-medium text-on-surface-variant">
                      Communications
                    </span>
                  </div>
                  <ChevronRight className="text-outline-variant" />
                </a>

                <a
                  className="flex items-center justify-between group"
                  href="#security"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-10 h-10 rounded-full bg-surface-container-low text-on-surface-variant flex items-center justify-center">
                      <Shield />
                    </span>
                    <span className="font-medium text-on-surface-variant">
                      Security &amp; Privacy
                    </span>
                  </div>
                  <ChevronRight className="text-outline-variant" />
                </a>
              </nav>
            </div>
            <div className="bg-tertiary-fixed rounded-[1.5rem] p-8 relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-[0.75rem] font-bold tracking-[0.05em] uppercase text-on-tertiary-fixed mb-4 block">
                  Recommended
                </span>
                <h4 className="text-xl font-bold text-on-tertiary-fixed mb-2 leading-tight">
                  Elevate your visibility
                </h4>
                <p className="text-sm text-on-tertiary-fixed/80 mb-6">
                  Complete your profile to increase your chances of being
                  spotted by top recruiters by 40%.
                </p>
                <button className="bg-on-tertiary-fixed  px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
                  Update Profile
                </button>
              </div>

              <Sparkles className="absolute -bottom-4 -right-4 w-36 h-36 text-on-tertiary-fixed opacity-10" />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8 space-y-8">
            <section
      className="bg-white rounded-[1.5rem] p-10 shadow-[0_12px_24px_rgba(25,28,30,0.04)]"
      id="profile"
    >
      <div className="flex items-center justify-between mb-10">
        <h3 className="text-[1.75rem] font-semibold tracking-[-0.02em] text-on-surface">
          Profile Identity
        </h3>
        <span className="px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest">
          Active Member
        </span>
      </div>

      <div className="flex items-center gap-8 mb-12">
        <div className="relative group">
          {/* Next.js Optimized Image */}
          <div className="w-24 h-24 relative">
            <img

              alt="User Profile"

              className="w-24 h-24 rounded-[1.5rem] object-cover ring-4 ring-primary/5"

              data-alt="Detailed professional portrait of a smiling woman in a designer studio setting, bright natural lighting, artistic mood"

              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDknMJKl7Mitq7MS4wMhGMFK5Iu23rMH6DxGh-rno_XdOC4HLZbu5eSGVgTBuVKwJBwDejv17krFOsmhL6Sl4cjqlrqZyoQjLjbw-wqEQUJpXequ2PkrDkN-8bcSfGxzBLBFVFgOeGC6Qj2d-l6by1YH6YwdRgvbWKZmHsIhDo8MhuVmfnTCq8fTl7S7j2O50xdSFklztqYEBhwOoU1S5gPKSiK-MtOpoFNhJ-fMOGaYokt6B2F3iEfdPGebHDCPJBWWivgbCcXXL-e"

              />


          </div>

          <button className="absolute -bottom-2 -right-2 bg-white p-2 rounded-xl shadow-lg border border-gray-100 hover:scale-105 transition-transform">
            <Pencil size={18} className="text-blue-600" />
          </button>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-gray-900 mb-1">
            {formData.fullName}
          </h4>
          <p className="text-gray-500 text-sm mb-4">{formData.title}</p>
          <div className="flex gap-3">
            <button className="px-5 py-2 bg-gray-100 rounded-full text-xs font-semibold text-blue-600 hover:bg-gray-200 transition-colors">
              Change Photo
            </button>
            <button className="px-5 py-2 text-red-500 text-xs font-semibold hover:bg-red-50 rounded-full transition-colors">
              Remove
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Full Name Input */}
        <div className="col-span-2 md:col-span-1">
          <label className="text-[0.75rem] font-bold tracking-[0.05em] uppercase text-gray-500 mb-2 block">
            Full Name
          </label>
          <input
            name="fullName"
            className="w-full bg-gray-50 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-blue-500/30 focus:bg-white transition-all text-gray-900 font-medium"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        {/* Title Input */}
        <div className="col-span-2 md:col-span-1">
          <label className="text-[0.75rem] font-bold tracking-[0.05em] uppercase text-gray-500 mb-2 block">
            Professional Title
          </label>
          <input
            name="title"
            className="w-full bg-gray-50 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-blue-500/30 focus:bg-white transition-all text-gray-900 font-medium"
            type="text"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        {/* Bio Textarea */}
        <div className="col-span-2">
          <label className="text-[0.75rem] font-bold tracking-[0.05em] uppercase text-gray-500 mb-2 block">
            Short Bio
          </label>
          <textarea
            name="bio"
            rows={4}
            className="w-full bg-gray-50 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-blue-500/30 focus:bg-white transition-all text-gray-900 font-medium resize-none"
            value={formData.bio}
            onChange={handleChange}
          />
        </div>
      </div>
    </section>
            <section
              className="bg-white rounded-[1.5rem] p-10 shadow-[0_12px_24px_rgba(25,28,30,0.04)]"
              id="notifications"
            >
              <h3 className="text-[1.75rem] font-semibold tracking-[-0.02em] text-on-surface mb-8">
                Communications
              </h3>
              <div className="space-y-8">
                <div className="flex items-start justify-between">
                  <div>
                    <h5 className="font-semibold text-on-surface mb-1">
                      Job Recommendations
                    </h5>
                    <p className="text-sm text-on-surface-variant max-w-md">
                      Weekly digest of roles curated by our AI based on your
                      profile and search history.
                    </p>
                  </div>
                  <div className="relative inline-flex items-center cursor-pointer">
                    <input className="sr-only peer" type="checkbox" />
                    <div className="w-11 h-6 bg-surface-container-high rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </div>
                </div>

                <div className="h-[1px] bg-surface-container-low"></div>

                <div className="flex items-start justify-between">
                  <div>
                    <h5 className="font-semibold text-on-surface mb-1">
                      Direct Messages
                    </h5>
                    <p className="text-sm text-on-surface-variant max-w-md">
                      Real-time alerts when recruiters or connections message
                      you.
                    </p>
                  </div>
                  <div className="relative inline-flex items-center cursor-pointer">
                    <input className="sr-only peer" type="checkbox" />
                    <div className="w-11 h-6 bg-surface-container-high rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </div>
                </div>

                <div className="h-[1px] bg-surface-container-low"></div>

                <div className="flex items-start justify-between">
                  <div>
                    <h5 className="font-semibold text-on-surface mb-1">
                      Application Tracking
                    </h5>
                    <p className="text-sm text-on-surface-variant max-w-md">
                      Instant updates on status changes for jobs you've applied
                      to.
                    </p>
                  </div>
                  <div className="relative inline-flex items-center cursor-pointer">
                    <input className="sr-only peer" type="checkbox" />
                    <div className="w-11 h-6 bg-surface-container-high rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </div>
                </div>
              </div>
            </section>
            <section
              className="bg-white rounded-[1.5rem] p-10 shadow-[0_12px_24px_rgba(25,28,30,0.04)]"
              id="security"
            >
              <h3 className="text-[1.75rem] font-semibold tracking-[-0.02em] text-on-surface mb-8">
                Security &amp; Privacy
              </h3>

              <div className="space-y-6">
                <div className="p-6 bg-surface-container-low rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Lock className="text-primary" />
                    <div>
                      <h5 className="font-semibold text-on-surface text-sm">
                        Update Password
                      </h5>
                      <p className="text-xs text-on-surface-variant">
                        Last changed 3 months ago
                      </p>
                    </div>
                  </div>
                  <button className="bg-white px-5 py-2 rounded-xl text-xs font-bold text-on-surface shadow-sm hover:shadow-md transition-shadow">
                    Change
                  </button>
                </div>

                <div className="p-6 bg-surface-container-low rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Smartphone className="text-primary" />
                    <div>
                      <h5 className="font-semibold text-on-surface text-sm">
                        Two-Factor Authentication
                      </h5>
                      <p className="text-xs text-on-surface-variant">
                        Protect your account with extra security
                      </p>
                    </div>
                  </div>
                  <button className="bg-primary  px-5 py-2 rounded-xl text-xs font-bold shadow-md shadow-primary/20 hover:opacity-90 transition-opacity">
                    Enable
                  </button>
                </div>

                <div className="pt-6 border-t border-surface-container-high">
                  <h5 className="font-semibold text-on-surface text-sm mb-4">
                    Privacy Controls
                  </h5>

                  <div className="flex items-center gap-3 mb-4">
                    <input
                      className="w-5 h-5 rounded-md border-outline-variant text-primary focus:ring-primary/20"
                      type="checkbox"
                    />
                    <span className="text-sm text-on-surface-variant">
                      Show my profile in public search results
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <input
                      className="w-5 h-5 rounded-md border-outline-variant text-primary focus:ring-primary/20"
                      type="checkbox"
                    />
                    <span className="text-sm text-on-surface-variant">
                      Share my activity with employers I follow
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <div className="flex items-center justify-end gap-4 mt-12">
              <button className="px-8 py-3.5 rounded-full text-on-surface-variant font-semibold hover:bg-surface-container-low transition-colors">
                Discard Changes
              </button>
              <button className="px-8 py-3.5 rounded-full bg-gradient-to-br from-primary to-primary-container  font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                Save All Changes
              </button>
            </div>
          </div>
        </div>
      </main>
      
    </div>
  );
}

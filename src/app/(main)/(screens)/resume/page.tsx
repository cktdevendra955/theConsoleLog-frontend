"use client";

import { useState } from "react";
import {
  User,
  GraduationCap,
  Briefcase,
  Code,
  Folder,
  Plus,
  Trash2,
} from "lucide-react";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white text-black">

      {/* 🔹 Header */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <h1 className="text-lg font-semibold">Mark-43</h1>
          <div className="text-sm text-gray-500">Resume Builder</div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-10 space-y-6">

        <PersonalCard />
        <EducationCard />
        <ExperienceCard />
        <SkillsCard />
        <ProjectsCard />

        <button className="w-full bg-black text-white py-3 rounded-xl text-sm hover:opacity-90">
          Generate Resume
        </button>
      </div>
    </div>
  );
}

/* 🔹 Card Wrapper */
function Card({ title, icon, children }: any) {
  return (
    <div className="border rounded-2xl p-6">
      <h2 className="text-lg font-medium flex items-center gap-2 mb-4">
        {icon} {title}
      </h2>
      {children}
    </div>
  );
}

/* 🔹 Personal */
function PersonalCard() {
  return (
    <Card title="Personal Information" icon={<User size={18} />}>
      <div className="grid md:grid-cols-2 gap-4">
        <Input placeholder="Full Name" />
        <Input placeholder="Email" />
        <Input placeholder="Phone" />
        <Input placeholder="LinkedIn / Portfolio" />
        <Input className="md:col-span-2" placeholder="Designation" />
        <textarea className="input md:col-span-2 h-24" placeholder="Summary" />
      </div>
    </Card>
  );
}

/* 🔹 Education */
function EducationCard() {
  const [list, setList] = useState([{ id: 1 }]);

  return (
    <Card title="Education" icon={<GraduationCap size={18} />}>
      {list.map((item) => (
        <div key={item.id} className="grid md:grid-cols-3 gap-4 mb-3">
          <Input placeholder="School" />
          <Input placeholder="Degree" />
          <div className="flex gap-2">
            <Input placeholder="Year" />
            <RemoveBtn onClick={() => setList(list.filter(i => i.id !== item.id))} />
          </div>
        </div>
      ))}
      <AddBtn onClick={() => setList([...list, { id: Date.now() }])} />
    </Card>
  );
}

/* 🔹 Experience */
function ExperienceCard() {
  const [list, setList] = useState([{ id: 1 }]);

  return (
    <Card title="Experience" icon={<Briefcase size={18} />}>
      {list.map((item) => (
        <div key={item.id} className="grid md:grid-cols-3 gap-4 mb-3">
          <Input placeholder="Company" />
          <Input placeholder="Role" />
          <div className="flex gap-2">
            <Input placeholder="Duration" />
            <RemoveBtn onClick={() => setList(list.filter(i => i.id !== item.id))} />
          </div>
        </div>
      ))}
      <AddBtn onClick={() => setList([...list, { id: Date.now() }])} />
    </Card>
  );
}

/* 🔹 Skills */
function SkillsCard() {
  const [skills, setSkills] = useState([""]);

  return (
    <Card title="Skills" icon={<Code size={18} />}>
      {skills.map((_, i) => (
        <div key={i} className="flex gap-2 mb-3">
          <Input placeholder="Skill" />
          <RemoveBtn onClick={() => setSkills(skills.filter((_, idx) => idx !== i))} />
        </div>
      ))}
      <AddBtn onClick={() => setSkills([...skills, ""])} />
    </Card>
  );
}

/* 🔹 Projects */
function ProjectsCard() {
  const [list, setList] = useState([{ id: 1 }]);

  return (
    <Card title="Projects" icon={<Folder size={18} />}>
      {list.map((item) => (
        <div key={item.id} className="border p-4 rounded-xl mb-3">
          <div className="grid md:grid-cols-2 gap-4 mb-2">
            <Input placeholder="Project Title" />
            <Input placeholder="Tech Stack" />
          </div>
          <textarea className="input w-full h-20" placeholder="Description" />
          <div className="flex justify-end mt-2">
            <RemoveBtn onClick={() => setList(list.filter(i => i.id !== item.id))} />
          </div>
        </div>
      ))}
      <AddBtn onClick={() => setList([...list, { id: Date.now() }])} />
    </Card>
  );
}

/* 🔹 Reusable Components */

function Input({ className = "", ...props }: any) {
  return (
    <input
      {...props}
      className={`input ${className}`}
    />
  );
}

function AddBtn({ onClick }: any) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 text-sm mt-2"
    >
      <Plus size={16} /> Add
    </button>
  );
}

function RemoveBtn({ onClick }: any) {
  return (
    <button
      onClick={onClick}
      className="p-2 border rounded-lg hover:bg-gray-100"
    >
      <Trash2 size={16} />
    </button>
  );
}

/* 🔹 Styles */
<style jsx global>{`
  .input {
    width: 100%;
    border-radius: 0.75rem;
    border: 1px solid #e5e7eb;
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    outline: none;
  }
  .input:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.05);
  }
`}</style>
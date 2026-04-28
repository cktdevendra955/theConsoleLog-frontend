"use client";

import { useState } from "react";
import {
  User,
  Mail,
  Briefcase,
  GraduationCap,
  Plus,
  Trash2,
  Code,
  Folder,
} from "lucide-react";

export default function ResumeBuilder() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 md:px-10 py-10">
      <div className="max-w-6xl mx-auto space-y-6">

        {/* Personal Info */}
        <Card title="Personal Information" icon={<User size={18} />}>
          <div className="grid md:grid-cols-2 gap-4">
            <Input icon={<User size={16} />} placeholder="Full Name" />
            <Input icon={<Mail size={16} />} placeholder="Email Address" />
            <Input placeholder="Phone Number" />
            <Input placeholder="LinkedIn / Portfolio" />
            <Input className="md:col-span-2" placeholder="Designation" />
            <textarea className="input md:col-span-2 h-24" placeholder="Summary" />
          </div>
        </Card>

        {/* Education */}
        <EducationCard />

        {/* Experience */}
        <ExperienceCard />

        {/* Skills */}
        <SkillsCard />

        {/* Projects */}
        <ProjectsCard />

        {/* Submit */}
        <button className="w-full bg-black text-white py-3 rounded-xl hover:opacity-90">
          Generate Resume
        </button>

      </div>

      <style jsx>{`
        .input {
          @apply w-full border rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/10;
        }
      `}</style>
    </div>
  );
}

/* 🔹 Card Wrapper */
function Card({ title, icon, children }: any) {
  return (
    <div className="bg-white border rounded-2xl p-6 shadow-sm">
      <h2 className="text-lg font-medium flex items-center gap-2 mb-4">
        {icon} {title}
      </h2>
      {children}
    </div>
  );
}

/* 🔹 Input */
function Input({ icon, ...props }: any) {
  return (
    <div className="flex items-center border rounded-xl px-3">
      {icon && <div className="mr-2 text-gray-400">{icon}</div>}
      <input {...props} className="w-full py-2 text-sm focus:outline-none" />
    </div>
  );
}

/* 🔹 Education Card */
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

/* 🔹 Experience Card */
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

/* 🔹 Skills Card */
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

/* 🔹 Projects Card */
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

/* 🔹 Buttons */
function AddBtn({ onClick }: any) {
  return (
    <button onClick={onClick} className="flex items-center gap-2 text-sm mt-2">
      <Plus size={16} /> Add
    </button>
  );
}

function RemoveBtn({ onClick }: any) {
  return (
    <button onClick={onClick} className="p-2 border rounded-lg hover:bg-gray-100">
      <Trash2 size={16} />
    </button>
  );
}
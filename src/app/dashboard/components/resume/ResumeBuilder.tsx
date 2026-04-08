"use client";

export default function ResumeBuilder() {
  return (
    <main className=" pt-20 px-4 md:px-8 bg-[#f9f9ff] min-h-screen">
      <div className="flex flex-col lg:flex-row gap-6 h-full">

        {/* LEFT SIDE */}
        <section className="w-full lg:w-1/2 space-y-8 overflow-y-auto">
          
          {/* Header */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Resume Architect
            </h2>
            <p className="text-gray-500 text-sm">
              Design your professional profile with AI insights.
            </p>
          </div>

          {/* Personal Info */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
            <h3 className="font-semibold">Personal Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                placeholder="Full Name"
              />
              <input
                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                placeholder="Job Title"
              />
            </div>
          </div>

          {/* Experience */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
            <h3 className="font-semibold">Experience</h3>

            <input
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
              placeholder="Company"
            />
            <input
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
              placeholder="Role"
            />
            <textarea
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm h-28"
              placeholder="Description"
            />
          </div>

          {/* Education */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
            <h3 className="font-semibold">Education</h3>

            <input
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
              placeholder="University"
            />
            <input
              className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
              placeholder="Degree"
            />
          </div>

          {/* Skills */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-4">
            <h3 className="font-semibold">Skills</h3>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs bg-indigo-100 text-indigo-600 rounded-full">
                React
              </span>
              <span className="px-3 py-1 text-xs bg-indigo-100 text-indigo-600 rounded-full">
                Spring Boot
              </span>
              <span className="px-3 py-1 text-xs bg-indigo-100 text-indigo-600 rounded-full">
                MySQL
              </span>
            </div>
          </div>
        </section>

        {/* RIGHT SIDE */}
        <section className="w-full lg:w-1/2 space-y-6">

          {/* ATS Score */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h4 className="font-semibold mb-2">ATS Score</h4>

            <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
              <div className="bg-indigo-500 h-full w-[82%]" />
            </div>

            <p className="text-sm mt-2 text-gray-500">
              Your resume is strong but can improve.
            </p>
          </div>

          {/* Resume Preview */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-bold">Devendra Gupta</h2>
            <p className="text-sm text-gray-500">
              Java Developer • Noida
            </p>

            <hr className="my-4" />

            <h3 className="font-semibold mb-2">Experience</h3>
            <p className="text-sm text-gray-600">
              Built scalable Spring Boot APIs for e-commerce system.
            </p>

            <h3 className="font-semibold mt-4 mb-2">Skills</h3>
            <p className="text-sm text-gray-600">
              Java, Spring Boot, React, MySQL
            </p>
          </div>

          {/* Actions */}
          <div className="flex justify-between">
            <button className="px-6 py-2 bg-gray-100 rounded-xl font-semibold hover:bg-gray-200 transition">
              Export PDF
            </button>

            <button className="px-6 py-2 bg-indigo-600 text-white rounded-xl font-semibold hover:scale-105 transition">
              Finalize
            </button>
          </div>

        </section>
      </div>
    </main>
  );
}
"use client";

import {
  FiCopy,
  FiExternalLink,
  FiDownload,
} from "react-icons/fi";

export default function Portfolio() {
  return (
    <main className="pt-20 px-4 md:px-8 bg-[#f9f9ff] min-h-screen">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Alex Rivera's Portfolio
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Status: <span className="text-green-600 font-semibold">Live & Public</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex items-center bg-white border rounded-xl px-4 py-2 text-sm">
              <span className="text-gray-500 mr-2">
                referedge.io/p/alex-rivera
              </span>
              <button className="flex items-center gap-1 text-indigo-600 text-xs font-semibold">
                <FiCopy /> Copy
              </button>
            </div>

            <button className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2 rounded-xl text-sm hover:scale-105 transition">
              <FiExternalLink /> View Live
            </button>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* ABOUT */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-6 md:p-8 shadow-sm border relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100 rounded-bl-full -mr-16 -mt-16" />

            <div className="flex flex-col md:flex-row gap-6 relative z-10">
              <img
                src="https://via.placeholder.com/120"
                className="w-24 h-24 rounded-xl object-cover"
              />

              <div>
                <h3 className="text-xl md:text-2xl font-bold">
                  Senior Product Designer
                </h3>
                <p className="text-indigo-600 font-medium">
                  Alex Rivera
                </p>

                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-3">
                  <span>📍 San Francisco</span>
                  <span>🌐 alexrivera.design</span>
                </div>
              </div>
            </div>

            <p className="text-gray-600 mt-6 text-sm md:text-base leading-relaxed">
              I craft intentional digital experiences that bridge human needs
              and business goals. Specialized in fintech and design systems.
            </p>
          </div>

          {/* SKILLS */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-6 md:p-8 shadow-sm border">
            <h4 className="text-xs uppercase tracking-widest text-gray-500 mb-4">
              Expertise
            </h4>

            <div className="flex flex-wrap gap-2">
              {[
                "Figma",
                "Framer",
                "React",
                "Design Systems",
                "A/B Testing",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs bg-gray-100 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* FEATURED PROJECT */}
          <div className="lg:col-span-12 bg-white rounded-2xl shadow-sm border overflow-hidden flex flex-col md:flex-row">
            
            <div className="md:w-3/5 h-64 md:h-auto">
              <img
                src="https://via.placeholder.com/800x500"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="md:w-2/5 p-6 md:p-10 flex flex-col justify-center">
              <h3 className="text-xl md:text-2xl font-bold mb-3">
                Stripe Checkout Redesign
              </h3>

              <p className="text-gray-600 text-sm mb-6">
                Redesigned checkout experience improving conversion by 12%.
              </p>

              <div className="flex gap-6 text-sm mb-6">
                <div>
                  <p className="text-gray-400 text-xs">Role</p>
                  <p className="font-semibold">
                    Lead Interaction Designer
                  </p>
                </div>

                <div>
                  <p className="text-gray-400 text-xs">Year</p>
                  <p className="font-semibold">2023</p>
                </div>
              </div>

              <button className="bg-gray-100 py-2 rounded-lg text-sm font-semibold hover:bg-gray-200 transition">
                View Case Study →
              </button>
            </div>
          </div>

          {/* EXPERIENCE */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 md:p-8 shadow-sm border">
            <div className="flex justify-between items-center mb-6">
              <h4 className="font-semibold">Experience History</h4>

              <button className="flex items-center gap-1 text-indigo-600 text-sm">
                <FiDownload /> PDF
              </button>
            </div>

            <div className="space-y-6 text-sm">
              {[
                {
                  role: "Senior Designer • Stripe",
                  year: "2021 - Present",
                },
                {
                  role: "Product Designer • Robinhood",
                  year: "2018 - 2021",
                },
                {
                  role: "Visual Designer • Freelance",
                  year: "2016 - 2018",
                },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between">
                    <h5 className="font-semibold">{item.role}</h5>
                    <span className="text-gray-400 text-xs">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-gray-500">
                    Experience description here...
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* CONTACT */}
            <div className="bg-indigo-600 text-white p-6 md:p-8 rounded-2xl">
              <h4 className="text-lg font-semibold mb-3">
                Work with me
              </h4>

              <p className="text-sm mb-4 opacity-90">
                Open for freelance & full-time roles.
              </p>

              <button className="w-full bg-white text-indigo-600 py-2 rounded-lg font-semibold">
                Contact Me
              </button>
            </div>

            {/* RECOMMENDATION */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border">
              <h4 className="text-sm font-semibold mb-4">
                Recommendation
              </h4>

              <p className="text-sm italic text-gray-600">
                "Alex is one of the rare designers who truly understands
                technical constraints without sacrificing design."
              </p>

              <p className="text-xs mt-3 text-gray-400">
                — Sarah Chen
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
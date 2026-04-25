"use client";

import {
  ArrowRight,
  Bolt,
  Verified,
  TrendingUp,
  Brain,
  Dna,
  CheckCircle,
  Shield,
  Lock,
} from "lucide-react";

export default function Page() {
  return (
    <div className="bg-background text-on-background font-sans">
      
      {/* NAVBAR */}
      
      {/* HERO */}
      <main className="pt-32 pb-24">
        <section className="max-w-[1280px] mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border">
              <span className="w-2 h-2 bg-blue-600 rounded-full" />
              <span className="text-xs uppercase tracking-widest text-slate-500">
                Quantum Matchmaking v2.0
              </span>
            </div>

            <h1 className="text-5xl font-bold leading-tight">
              Experience <span className="text-blue-600">HighSignal</span>{" "}
              Recruitment.
            </h1>

            <p className="text-slate-500 text-lg max-w-md">
              Where technical precision meets human potential. Connect top
              engineers with elite teams.
            </p>

            <div className="flex gap-6">
              <button className="bg-primary text-white px-8 py-4 rounded-xl flex items-center gap-2">
                Find Jobs <ArrowRight size={18} />
              </button>

              <button className="border px-8 py-4 rounded-xl">
                Hire Talent
              </button>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="relative">
            <div className="bg-white p-8 rounded-2xl shadow-xl border">
              
              {/* HEADER */}
              <div className="flex justify-between mb-6">
                <div className="flex gap-3 items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Bolt className="text-blue-600" size={18} />
                  </div>
                  <div>
                    <p className="font-semibold">Matching Engine</p>
                    <p className="text-xs text-slate-400">STATUS: OPTIMAL</p>
                  </div>
                </div>

                <span className="text-green-600 text-xs bg-green-100 px-3 py-1 rounded-full">
                  98% Signal
                </span>
              </div>

              {/* LIST */}
              <div className="space-y-4">
                
                <div className="flex justify-between items-center bg-slate-50 p-4 rounded-xl">
                  <div>
                    <p className="text-sm font-semibold">
                      Lead Systems Architect
                    </p>
                    <p className="text-xs text-slate-400">Rust • K8s</p>
                  </div>
                  <Verified className="text-blue-600" size={18} />
                </div>

                <div className="flex justify-between items-center bg-white p-4 rounded-xl border">
                  <div>
                    <p className="text-sm font-semibold">
                      Product Designer
                    </p>
                    <p className="text-xs text-slate-400">
                      FinTech • Ex-Stripe
                    </p>
                  </div>
                  <Verified className="text-blue-600" size={18} />
                </div>

              </div>
            </div>

            {/* FLOAT CARD */}
            <div className="absolute -bottom-6 -left-6 bg-white shadow-lg p-4 rounded-xl flex items-center gap-2">
              <TrendingUp size={18} className="text-blue-600" />
              <span className="text-sm font-medium">
                Hiring velocity +40%
              </span>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="max-w-[1280px] mx-auto px-8 mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Engineered for Clarity</h2>
            <p className="text-slate-500 mt-2">
              Focus on high-signal hiring.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            
            {/* CARD 1 */}
            <div className="col-span-2 p-8 rounded-3xl border bg-white">
              <Brain className="text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Cognitive Verification
              </h3>
              <p className="text-slate-500">
                Verify skills before interviews.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="p-8 rounded-3xl border bg-white">
              <Dna className="text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Culture DNA
              </h3>

              <div className="space-y-2 text-sm text-slate-500">
                <div className="flex gap-2">
                  <CheckCircle size={16} /> Async-first teams
                </div>
                <div className="flex gap-2">
                  <CheckCircle size={16} /> Product engineers
                </div>
                <div className="flex gap-2">
                  <CheckCircle size={16} /> No micromanagement
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="p-8 rounded-3xl border bg-white">
              <Shield className="text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Private Mode
              </h3>
              <p className="text-slate-500">
                Anonymous job exploration.
              </p>
            </div>

            {/* CARD 4 */}
            <div className="col-span-2 p-8 rounded-3xl border bg-white flex items-center justify-between">
              <div>
                <Shield className="mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold">
                  Stealth Hiring
                </h3>
                <p className="text-slate-500">
                  Reveal identity only after approval.
                </p>
              </div>

              <Lock className="text-slate-300" size={48} />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-[1280px] mx-auto px-8 mt-32">
          <div className="bg-black text-white rounded-3xl p-16 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready for the Quantum Leap?
            </h2>
            <p className="text-slate-400 mb-8">
              Join top engineering teams.
            </p>

            <div className="flex justify-center gap-6">
              <button className="bg-white text-black px-8 py-4 rounded-xl">
                Apply
              </button>
              <button className="border px-8 py-4 rounded-xl">
                View Roles
              </button>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  );
}
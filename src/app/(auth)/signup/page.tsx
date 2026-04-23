"use client";

import {
  ShieldCheck,
  Medal,
  Briefcase,
} from "lucide-react";

export default function SignupPage() {
  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <main className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
        
        {/* Background Blur */}
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[60%] rounded-full bg-primary/5 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[60%] rounded-full bg-tertiary/5 blur-[120px]"></div>

        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SAME */}
          <div className="hidden lg:flex flex-col space-y-8 pr-12">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold tracking-tighter">
                ReferEdge
              </span>
            </div>

            <h1 className="text-display-lg font-bold leading-none">
              Join the <br />
              <span className="text-primary">Referral Network</span>
            </h1>

            <p className="text-body-lg text-on-surface-variant max-w-md">
              Create your account and unlock access to curated opportunities.
            </p>

            <div className="space-y-6 pt-8">
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center">
                  <ShieldCheck className="text-primary" />
                </div>
                <div>
                  <p className="text-label-md font-bold uppercase tracking-widest">
                    Verified Identity
                  </p>
                  <p className="text-body-md text-on-surface-variant">
                    Secure onboarding process.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center">
                  <Medal className="text-tertiary" />
                </div>
                <div>
                  <p className="text-label-md font-bold uppercase tracking-widest">
                    Premium Access
                  </p>
                  <p className="text-body-md text-on-surface-variant">
                    Get access to exclusive opportunities.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-md bg-surface-container-lowest rounded-[2rem] p-10 shadow-[0px_12px_32px_rgba(25,28,30,0.04)] border border-outline-variant/15 relative overflow-hidden">

              <div className="absolute top-0 left-0 w-full h-1 bg-surface-container">
                <div className="h-full bg-primary w-2/3 transition-all duration-500"></div>
              </div>

              <div className="mb-8">
                <h2 className="text-headline-lg font-bold mb-2">
                  Create Account
                </h2>
                <p className="text-body-md text-on-surface-variant">
                  Start your journey with ReferEdge.
                </p>
              </div>

              {/* Social */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                
                <button className="flex items-center justify-center space-x-2 py-3 px-4 rounded-xl border border-outline-variant/30 hover:bg-surface-container-low transition-colors">
                  <img
                    className="w-5 h-5"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuASc4Mhioa7KdYuWnoCGvskGvo372yDCGRqQYvMhImUzA1bmdsSr5tvgP9F4MFZyPWnaNnTgyNb2b0k8aFu-TVLizBM4YWC1ZokXJM1iVUb2HrS9-bg1LcccMiLWHOWkU-r58oMMLYkq--1pIxNZI_O4AU2t-6FiY7yEx0PBGdz7dD1IoJ8DckkdqhLnM333P5lR0dvBNt8kFRGvJvHZRE3OysOenOkXJSfEUCFwPQ6V3o4sdbEUvUyzXIEVC-oCw65jqkzdCIQr0jz"
                  />
                  <span className="font-semibold">Google</span>
                </button>

                <button className="flex items-center justify-center space-x-2 py-3 px-4 rounded-xl border border-outline-variant/30 hover:bg-surface-container-low transition-colors">
                  <Briefcase />
                  <span className="font-semibold">LinkedIn</span>
                </button>

              </div>

              <div className="relative flex items-center mb-8">
                <div className="flex-grow border-t border-outline-variant/20"></div>
                <span className="mx-4 text-label-md text-outline uppercase">
                  Or Continue With
                </span>
                <div className="flex-grow border-t border-outline-variant/20"></div>
              </div>

              {/* FORM */}
              <form className="space-y-5">
                
                <input
                  className="w-full px-5 py-4 rounded-xl bg-surface-container-low outline-none"
                  placeholder="Full Name"
                  type="text"
                />

                <input
                  className="w-full px-5 py-4 rounded-xl bg-surface-container-low outline-none"
                  placeholder="Work Email"
                  type="email"
                />

                <input
                  className="w-full px-5 py-4 rounded-xl bg-surface-container-low outline-none"
                  placeholder="Password"
                  type="password"
                />

                <input
                  className="w-full px-5 py-4 rounded-xl bg-surface-container-low outline-none"
                  placeholder="Confirm Password"
                  type="password"
                />

                <button className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold">
                  Create Account
                </button>
              </form>

              <div className="mt-8 pt-6 border-t text-center">
                <p className="text-body-md text-on-surface-variant">
                  Already have an account?
                  <button className="text-primary font-bold ml-1">
                    Sign In
                  </button>
                </p>
              </div>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
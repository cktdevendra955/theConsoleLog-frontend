"use client";

import {
  ShieldCheck,
  Medal,
  Briefcase,
  X,
  UserSearch,
  Building2,
  ArrowRight,
} from "lucide-react";

export default function Page() {
  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <main className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[60%] rounded-full bg-primary/5 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[60%] rounded-full bg-tertiary/5 blur-[120px]"></div>

        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT */}
          <div className="hidden lg:flex flex-col space-y-8 pr-12">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold tracking-tighter text-on-surface">
                ReferEdge
              </span>
            </div>

            <h1 className="text-display-lg font-bold tracking-tight leading-none text-on-surface">
              The Curated
              <br />
              <span className="text-primary">Referral Network</span>
            </h1>

            <p className="text-body-lg text-on-surface-variant max-w-md">
              Access high-growth opportunities through trusted connections. We
              verify every match to ensure editorial quality in every hire.
            </p>

            <div className="space-y-6 pt-8">
              
              {/* Verified */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center">
                  <ShieldCheck className="text-primary" />
                </div>
                <div>
                  <p className="text-label-md font-bold text-on-surface uppercase tracking-widest">
                    Verified Identity
                  </p>
                  <p className="text-body-md text-on-surface-variant">
                    Bank-grade security for your professional data.
                  </p>
                </div>
              </div>

              {/* Premium */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center">
                  <Medal className="text-tertiary" />
                </div>
                <div>
                  <p className="text-label-md font-bold text-on-surface uppercase tracking-widest">
                    Premium Tiers
                  </p>
                  <p className="text-body-md text-on-surface-variant">
                    Priority access for elite talent and vetted companies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-md bg-surface-container-lowest rounded-[2rem] p-10 shadow-[0px_12px_32px_rgba(25,28,30,0.04)] border border-outline-variant/15 relative overflow-hidden">

              <div className="absolute top-0 left-0 w-full h-1 bg-surface-container">
                <div className="h-full bg-primary w-1/3 transition-all duration-500"></div>
              </div>

              <div id="auth-step-container">
                
                <div className="mb-8">
                  <h2 className="text-headline-lg font-bold text-on-surface mb-2">
                    Welcome Back
                  </h2>
                  <p className="text-body-md text-on-surface-variant">
                    Enter your credentials to access your curated dashboard.
                  </p>
                </div>

                {/* Social */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  
                  <button className="flex items-center justify-center space-x-2 py-3 px-4 rounded-xl border border-outline-variant/30 hover:bg-surface-container-low transition-colors">
                    <img
                      alt="Google"
                      className="w-5 h-5"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuASc4Mhioa7KdYuWnoCGvskGvo372yDCGRqQYvMhImUzA1bmdsSr5tvgP9F4MFZyPWnaNnTgyNb2b0k8aFu-TVLizBM4YWC1ZokXJM1iVUb2HrS9-bg1LcccMiLWHOWkU-r58oMMLYkq--1pIxNZI_O4AU2t-6FiY7yEx0PBGdz7dD1IoJ8DckkdqhLnM333P5lR0dvBNt8kFRGvJvHZRE3OysOenOkXJSfEUCFwPQ6V3o4sdbEUvUyzXIEVC-oCw65jqkzdCIQr0jz"
                    />
                    <span className="text-label-md font-semibold text-on-surface">
                      Google
                    </span>
                  </button>

                  <button className="flex items-center justify-center space-x-2 py-3 px-4 rounded-xl border border-outline-variant/30 hover:bg-surface-container-low transition-colors">
                    <Briefcase className="text-on-surface" />
                    <span className="text-label-md font-semibold text-on-surface">
                      LinkedIn
                    </span>
                  </button>

                </div>

                <div className="relative flex items-center mb-8">
                  <div className="flex-grow border-t border-outline-variant/20"></div>
                  <span className="flex-shrink mx-4 text-label-md text-outline tracking-widest uppercase">
                    Or Continue With
                  </span>
                  <div className="flex-grow border-t border-outline-variant/20"></div>
                </div>

                {/* Form */}
                <form className="space-y-5">
                  <div>
                    <label className="block text-label-md font-bold text-on-surface uppercase tracking-widest mb-2">
                      Work Email
                    </label>
                    <input
                      className="w-full px-5 py-4 bg-surface-container-low border-transparent rounded-xl focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary outline-none"
                      placeholder="name@company.com"
                      type="email"
                    />
                  </div>

                  <div>
                    <label className="block text-label-md font-bold text-on-surface uppercase tracking-widest mb-2">
                      Password
                    </label>
                    <input
                      className="w-full px-5 py-4 bg-surface-container-low border-transparent rounded-xl focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary outline-none"
                      placeholder="••••••••"
                      type="password"
                    />
                  </div>

                  <div className="flex items-center justify-between py-2">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary"
                        type="checkbox"
                      />
                      <span className="text-body-md text-on-surface-variant">
                        Remember me
                      </span>
                    </label>

                    <a className="text-body-md font-semibold text-primary hover:underline">
                      Forgot password?
                    </a>
                  </div>

                  <button className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold">
                    Sign In
                  </button>
                </form>

                <div className="mt-8 pt-6 border-t border-outline-variant/15 text-center">
                  <p className="text-body-md text-on-surface-variant">
                    Don't have an account?
                    <button className="text-primary font-bold ml-1">
                      Create Account
                    </button>
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>

      {/* MODAL */}
      <div className="hidden fixed inset-0 z-[100] flex items-center justify-center p-6 bg-surface/90 backdrop-blur-sm">
        <div className="w-full max-w-2xl bg-surface-container-lowest rounded-[2rem] p-12 shadow-2xl relative">
          
          <button className="absolute top-8 right-8 text-outline hover:text-on-surface">
            <X />
          </button>

          <div className="text-center mb-12">
            <h2 className="text-headline-lg font-bold text-on-surface mb-3">
              Join the Ecosystem
            </h2>
            <p className="text-body-lg text-on-surface-variant">
              Select your path to start your referral journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Job Seeker */}
            <button className="group p-8 rounded-2xl border-2 border-surface-container-high hover:border-primary hover:bg-primary/5 transition-all text-left flex flex-col items-start">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <UserSearch className="text-primary text-3xl" />
              </div>
              <h3 className="text-headline-sm font-bold text-on-surface mb-2">
                Continue as Job Seeker
              </h3>
              <p className="text-body-md text-on-surface-variant">
                Get referred to top-tier roles by industry experts and mentors.
              </p>
              <div className="mt-8 flex items-center text-primary font-bold">
                <span>Get Started</span>
                <ArrowRight className="ml-2 text-sm" />
              </div>
            </button>

            {/* Company */}
            <button className="group p-8 rounded-2xl border-2 border-surface-container-high hover:border-tertiary hover:bg-tertiary/5 transition-all text-left flex flex-col items-start">
              <div className="w-14 h-14 rounded-xl bg-tertiary/10 flex items-center justify-center mb-6">
                <Building2 className="text-tertiary text-3xl" />
              </div>
              <h3 className="text-headline-sm font-bold text-on-surface mb-2">
                Continue as Company
              </h3>
              <p className="text-body-md text-on-surface-variant">
                Build your referral pipeline and hire high-signal candidates.
              </p>
              <div className="mt-8 flex items-center text-tertiary font-bold">
                <span>Register Firm</span>
                <ArrowRight className="ml-2 text-sm" />
              </div>
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
export default function HiringDrivePage() {
  return (
    <div className="bg-surface text-on-surface">
      
      <main className=" pt-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-8 py-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h1 className="text-5xl font-bold tracking-tight text-on-surface mb-2">
                Hiring Drives
              </h1>
              <p className="text-body-lg text-on-surface-variant max-w-md">
                Explore and apply to opportunities tailored for elite designers
                and engineers.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <img
                  alt="User 1"
                  className="w-10 h-10 rounded-full border-4 border-surface"
                  data-alt="close-up of a diverse professional person in an office setting, soft bokeh background"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBd-_9hdj0bgSCImfQVBXDLokLXyGvZpyxRIE5A7IrrcqgftxUiwwrh6MsqeOtGwEL8hlmj5Ced5yzcxhKrYOr-l7GYQ5QSvWbP-fQhm3QWx6MJzKt8SEe_eu7BQtgOVDw9icqfuCBslSQAjZMJPlJY70HKnhPgVJgiNDKzWc1ucptN71HyzIXEqCdBgt4DbDOk9nwUQCPo5NB66gbMvMkUMMF9XZss98BS3F8wAhf2SSfpWKq7eS3uhYTTe41sVA0dyyvQ6AWJxNHB"
                />
                <img
                  alt="User 2"
                  className="w-10 h-10 rounded-full border-4 border-surface"
                  data-alt="professional woman smiling in a creative studio environment, warm cinematic lighting"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKSL8iYRPFohhyeDHQCQs7yUYjs_jLaxiznxwxgLe7KHgAQiFqd7DUo4CD01kXYYyAj7oqy5jUIOlXImVHc_QNQTjZlwUnz3EjP_LTilLMeHLoJ0_1v2fymQ7z-6vuIBBBY8TawH_2axjKTKdm4ata4vHJV-3NKfeVtuKQhdUQ8f004et_Bsg9MNsDzwEulHea-c8iAj-ynh-GYOG9fMWGIlfptzfE-a7jMcp6mW8VyG8q8onJ0-HGbUwMnPkAuMR12IrmVdoFKI7d"
                />
                <img
                  alt="User 3"
                  className="w-10 h-10 rounded-full border-4 border-surface"
                  data-alt="young male professional working on a laptop in a modern co-working space, natural window light"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD31jkqzWvSJJdkQpTH97V2DKNBoXWwtRjOG6gcgGSOSBLQXrM_w5OIWBbmaBka5LCuEwCRmCt3v_WuhOhNurcBFnuT1zjBDMPtxIazJSxFw0nUUmz7I-LP6II_3iHVPps2YcHnfz0AoDAAXC24wVjl5ngi5nGnASgTM_Iu0FE11IPlaceTdxXDPcKafy70XjuQ0K2OZRfkHr6XlUj-3nNZh8z49xkfRKthIMFxRLIF5LjDVCmRCMW-NATTBEm6_sc9c2iVJ9OHodiJ"
                />
                <div className="w-10 h-10 rounded-full border-4 border-surface bg-primary-fixed flex items-center justify-center text-on-primary-fixed text-xs font-bold">
                  +12
                </div>
              </div>
              <span className="text-sm font-medium text-on-surface-variant">
                Active recruiters online
              </span>
            </div>
          </div>
          <div className="bg-surface-container-low rounded-[2rem] p-8 mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-2 relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary group-focus-within:scale-110 transition-transform">
                  search
                </span>
                <input
                  className="w-full pl-12 pr-4 py-4 bg-white border-none rounded-2xl shadow-sm focus:ring-4 focus:ring-primary/10 text-body-lg"
                  placeholder="Search by job title or keyword..."
                  type="text"
                />
              </div>
              <div className="lg:col-span-2 flex flex-wrap items-center gap-3">
                <div className="relative">
                  <select className="appearance-none pl-4 pr-10 py-4 bg-white border-none rounded-2xl shadow-sm text-sm font-medium focus:ring-4 focus:ring-primary/10">
                    <option>Role</option>
                    <option>Design</option>
                    <option>Engineering</option>
                    <option>Product</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">
                    expand_more
                  </span>
                </div>
                <div className="relative">
                  <select className="appearance-none pl-4 pr-10 py-4 bg-white border-none rounded-2xl shadow-sm text-sm font-medium focus:ring-4 focus:ring-primary/10">
                    <option>Location</option>
                    <option>Remote</option>
                    <option>New York</option>
                    <option>London</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">
                    expand_more
                  </span>
                </div>
                <div className="relative">
                  <select className="appearance-none pl-4 pr-10 py-4 bg-white border-none rounded-2xl shadow-sm text-sm font-medium focus:ring-4 focus:ring-primary/10">
                    <option>Status</option>
                    <option>Active</option>
                    <option>Closed</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">
                    expand_more
                  </span>
                </div>
                <button className="bg-primary  p-4 rounded-2xl shadow-lg hover:shadow-primary/20 transition-all active:scale-95">
                  <span className="material-symbols-outlined block">tune</span>
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white rounded-3xl p-6 shadow-[0_2px_4px_rgba(25,28,30,0.02),0_12px_24px_rgba(25,28,30,0.04)] hover:shadow-[0_32px_64px_rgba(25,28,30,0.06)] transition-all duration-300 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-surface-container-low rounded-2xl flex items-center justify-center p-2 group-hover:scale-105 transition-transform">
                  <img
                    alt="Company Logo"
                    className="w-10 h-10"
                    data-alt="clean minimalist logo icon for a technology company on a white background"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrw9YAkueXhqe-vcK7UQbhuLcReiYofMIStjbNu_eVG2dc8MS9a3y-kaft_C6Etgg9rpFlNUoZINl3-9nBfnHppfE3ygQv0x5HO1aK2ro8zLtVy6YMYCNFsA5GxL8QCKw5g5ygJKXfgACxi3m1Y3rhe-xOBraOYY3BB_vGXTGY83xgyIfJZtm3u2r23oA-fBKV08oVrB0L50ur8X9oU0IDf9rcUno8exwiLHkBaGCJ8LhOSaGQybt3YwqKt_Ro3yeCE6I0mrs7SzHw"
                  />
                </div>
                <span className="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold uppercase tracking-widest rounded-full">
                  Recommended
                </span>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                  Senior Product Designer
                </h3>
                <p className="text-sm font-semibold text-primary">
                  Google Inc.
                </p>
              </div>
              <div className="flex items-center gap-4 text-on-surface-variant text-sm mb-4">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-base">
                    location_on
                  </span>
                  Mountain View, CA
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-base">
                    calendar_month
                  </span>
                  Apply by Oct 24
                </div>
              </div>
              <p className="text-on-surface-variant text-sm line-clamp-2 mb-6">
                Leading the future of human-computer interaction in the
                Workspace team. We are looking for visionary designers.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-4 py-1.5 bg-surface-container-low text-on-surface text-xs font-medium rounded-full">
                  Remote
                </span>
                <span className="px-4 py-1.5 bg-surface-container-low text-on-surface text-xs font-medium rounded-full">
                  Full-time
                </span>
              </div>
              <div className="mt-auto grid grid-cols-2 gap-3">
                <button className="py-3 px-4 bg-surface-container-high text-primary font-bold text-sm rounded-xl hover:bg-secondary-fixed transition-colors">
                  View Details
                </button>
                <button className="py-3 px-4 primary-gradient  font-bold text-sm rounded-xl shadow-sm hover:shadow-md transition-all">
                  Apply Now
                </button>
              </div>
            </div>
            <div className="group bg-white rounded-3xl p-6 shadow-[0_2px_4px_rgba(25,28,30,0.02),0_12px_24px_rgba(25,28,30,0.04)] hover:shadow-[0_32px_64px_rgba(25,28,30,0.06)] transition-all duration-300 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-surface-container-low rounded-2xl flex items-center justify-center p-2 group-hover:scale-105 transition-transform">
                  <img
                    alt="Company Logo"
                    className="w-10 h-10"
                    data-alt="abstract geometric logo for a software development firm, professional corporate style"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBY44qwK00ptISwAd7fv_qlyg2K7yUf5JIgoGpharmyfinEyfZNExUGJiM9vQfdV1702DZ08DHuwOkJo1B1yu11jz8HD1F05p8W0gFpPbnPzl6FEqtdSF7yScxkKuktk7Are84HJmD_YhxCn4105nu7jIfIckMe-qPq6Z1gxr2RsuEqSOji_HAtUYsLgvCvAdTOIJlaJjAJLyLevpTVm0FX5BNU12mIj-RiKUdDF6jKlxx1wxOdZxDy5ozRdKG-a4UwREaqgKlyU6fP"
                  />
                </div>
                <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest rounded-full">
                  New Drive
                </span>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                  Lead Frontend Engineer
                </h3>
                <p className="text-sm font-semibold text-primary">
                  Stripe Finance
                </p>
              </div>
              <div className="flex items-center gap-4 text-on-surface-variant text-sm mb-4">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-base">
                    location_on
                  </span>
                  Dublin, Ireland
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-base">
                    calendar_month
                  </span>
                  Apply by Nov 02
                </div>
              </div>
              <p className="text-on-surface-variant text-sm line-clamp-2 mb-6">
                Build the infrastructure for the internet economy. Join our
                high-performance core platform team.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-4 py-1.5 bg-surface-container-low text-on-surface text-xs font-medium rounded-full">
                  Hybrid
                </span>
                <span className="px-4 py-1.5 bg-surface-container-low text-on-surface text-xs font-medium rounded-full">
                  Full-time
                </span>
              </div>
              <div className="mt-auto grid grid-cols-2 gap-3">
                <button className="py-3 px-4 bg-surface-container-high text-primary font-bold text-sm rounded-xl hover:bg-secondary-fixed transition-colors">
                  View Details
                </button>
                <button className="py-3 px-4 primary-gradient  font-bold text-sm rounded-xl shadow-sm hover:shadow-md transition-all">
                  Apply Now
                </button>
              </div>
            </div>
            <div className="group bg-white rounded-3xl p-6 shadow-[0_2px_4px_rgba(25,28,30,0.02),0_12px_24px_rgba(25,28,30,0.04)] hover:shadow-[0_32px_64px_rgba(25,28,30,0.06)] transition-all duration-300 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-surface-container-low rounded-2xl flex items-center justify-center p-2 group-hover:scale-105 transition-transform">
                  <img
                    alt="Company Logo"
                    className="w-10 h-10"
                    data-alt="creative studio logo with bold typography, modern aesthetic"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkiN3p_sXu_FDfhw5BT238Bgyw7nmrwACnnwR7Jj5brLFAKtLTp8spNW3hsEiwNOyWQupa9Z_GHcZt98vQ265iN6W4MYCF-LCx8-PhKZTuATgzwrxHawyqG206ydphEcY1CTqmEKsfVEz180tOgGAcqBYBK6pmMUOcxZfFT35IIdOl4SBYph5lmzgK90ap-FEkoNKrRQsG9jfLkpxcAVmSudAWg5u0WDF298Zoa_t8C8fHmJfz7ZdFIhnDFecNT-TCfD-FfioPqUMs"
                  />
                </div>
                <span className="px-3 py-1 bg-secondary-container/30 text-on-secondary-container text-[10px] font-bold uppercase tracking-widest rounded-full">
                  Urgent
                </span>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                  Creative Director
                </h3>
                <p className="text-sm font-semibold text-primary">
                  Figma Design
                </p>
              </div>
              <div className="flex items-center gap-4 text-on-surface-variant text-sm mb-4">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-base">
                    location_on
                  </span>
                  San Francisco, CA
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-base">
                    calendar_month
                  </span>
                  Apply by Oct 30
                </div>
              </div>
              <p className="text-on-surface-variant text-sm line-clamp-2 mb-6">
                Defining the visual language for the world's best design tool.
                We need a storytelling master.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-4 py-1.5 bg-surface-container-low text-on-surface text-xs font-medium rounded-full">
                  On-site
                </span>
                <span className="px-4 py-1.5 bg-surface-container-low text-on-surface text-xs font-medium rounded-full">
                  Full-time
                </span>
              </div>
              <div className="mt-auto grid grid-cols-2 gap-3">
                <button className="py-3 px-4 bg-surface-container-high text-primary font-bold text-sm rounded-xl hover:bg-secondary-fixed transition-colors">
                  View Details
                </button>
                <button className="py-3 px-4 primary-gradient  font-bold text-sm rounded-xl shadow-sm hover:shadow-md transition-all">
                  Apply Now
                </button>
              </div>
            </div>
            <div className="group bg-white rounded-3xl p-6 shadow-[0_2px_4px_rgba(25,28,30,0.02),0_12px_24px_rgba(25,28,30,0.04)] hover:shadow-[0_32px_64px_rgba(25,28,30,0.06)] transition-all duration-300 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-surface-container-low rounded-2xl flex items-center justify-center p-2 group-hover:scale-105 transition-transform">
                  <img
                    alt="Company Logo"
                    className="w-10 h-10"
                    data-alt="minimalist tech logo with a clean font on a light gray background"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIr9bwEzu3Plvm7hCeqhed01YXY3ZGdJrWXNlcf_5qDskxVidJmpFdpGH6FFOzMmFduYG3nojYfEIQH9hc-DDFaQROItTs4SIFp3jaQQIYk6WJYuofDT7IqDkO4i3qh4djzdZb44srYi4-HBuhfbG8nhI5D8ma78kBIX5sodR6orbY3A0H2cJVA8VAJ2629uPaetRTsmdpBOB64oPbsXTytE14LRD137PkyQVE3SiA2eIJpWQZWz3Gb8HquXkS26b0io6LkSTgV6M-"
                  />
                </div>
                <span className="px-3 py-1 bg-surface-container-highest text-on-surface-variant text-[10px] font-bold uppercase tracking-widest rounded-full">
                  Closing Soon
                </span>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                  Backend Architect
                </h3>
                <p className="text-sm font-semibold text-primary">
                  Netflix Eng
                </p>
              </div>
              <div className="flex items-center gap-4 text-on-surface-variant text-sm mb-4">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-base">
                    location_on
                  </span>
                  Los Gatos, CA
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-base">
                    calendar_month
                  </span>
                  Apply by Oct 20
                </div>
              </div>
              <p className="text-on-surface-variant text-sm line-clamp-2 mb-6">
                Scale the entertainment platform of the future. Handling
                millions of concurrent streams globally.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-4 py-1.5 bg-surface-container-low text-on-surface text-xs font-medium rounded-full">
                  Remote
                </span>
                <span className="px-4 py-1.5 bg-surface-container-low text-on-surface text-xs font-medium rounded-full">
                  Contract
                </span>
              </div>
              <div className="mt-auto grid grid-cols-2 gap-3">
                <button className="py-3 px-4 bg-surface-container-high text-primary font-bold text-sm rounded-xl hover:bg-secondary-fixed transition-colors">
                  View Details
                </button>
                <button className="py-3 px-4 primary-gradient  font-bold text-sm rounded-xl shadow-sm hover:shadow-md transition-all">
                  Apply Now
                </button>
              </div>
            </div>
            <div className="group bg-white rounded-3xl p-6 shadow-[0_2px_4px_rgba(25,28,30,0.02),0_12px_24px_rgba(25,28,30,0.04)] hover:shadow-[0_32px_64px_rgba(25,28,30,0.06)] transition-all duration-300 flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-surface-container-low rounded-2xl flex items-center justify-center p-2 group-hover:scale-105 transition-transform">
                  <img
                    alt="Company Logo"
                    className="w-10 h-10"
                    data-alt="sleek corporate logo for a cloud services company, professional blue tones"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6TspQHD9Wn3jkLp1_x3mA46578Yj1B53ACEPVhXQYZWuu_uS-DCLd5Z11hzSoxdhmJtudDarmzRjhhzV3LY3MmBxDMYKR5vjvQObnkkGoRSgo670i3Vb-fOTMVD0rNe2gL8fkUzq5eh-CEK-nxhPzZsN5H3igwlVf7yklpWKZmEVVWy6_ia3hIPaWenHIIWWW0sjLpimH2e_WzlmJt4PHc3t6OyO1J1BmX953xXv4eWmWB-QALGSoedcVDloNoLkIDF8ZdYCZWlUV"
                  />
                </div>
                <span className="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold uppercase tracking-widest rounded-full">
                  Popular
                </span>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                  UX Research Lead
                </h3>
                <p className="text-sm font-semibold text-primary">
                  Airbnb Design
                </p>
              </div>
              <div className="flex items-center gap-4 text-on-surface-variant text-sm mb-4">
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-base">
                    location_on
                  </span>
                  Remote (Worldwide)
                </div>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-base">
                    calendar_month
                  </span>
                  Apply by Nov 15
                </div>
              </div>
              <p className="text-on-surface-variant text-sm line-clamp-2 mb-6">
                Deep dive into traveler behaviors and host experiences to shape
                the future of connection.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-4 py-1.5 bg-surface-container-low text-on-surface text-xs font-medium rounded-full">
                  Remote
                </span>
                <span className="px-4 py-1.5 bg-surface-container-low text-on-surface text-xs font-medium rounded-full">
                  Full-time
                </span>
              </div>
              <div className="mt-auto grid grid-cols-2 gap-3">
                <button className="py-3 px-4 bg-surface-container-high text-primary font-bold text-sm rounded-xl hover:bg-secondary-fixed transition-colors">
                  View Details
                </button>
                <button className="py-3 px-4 primary-gradient  font-bold text-sm rounded-xl shadow-sm hover:shadow-md transition-all">
                  Apply Now
                </button>
              </div>
            </div>
            <div className="border-2 border-dashed border-outline-variant rounded-3xl p-6 flex flex-col items-center justify-center text-center bg-surface-container-low/30 hover:bg-surface-container-low transition-colors group cursor-pointer">
              <div className="w-16 h-16 rounded-full bg-surface-container-highest flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl text-primary">
                  add
                </span>
              </div>
              <h3 className="text-lg font-bold text-on-surface">
                Can't find your match?
              </h3>
              <p className="text-sm text-on-surface-variant mt-2 max-w-[200px]">
                Subscribe to alerts for new hiring drives in your field.
              </p>
              <button className="mt-6 text-primary font-bold text-sm underline decoration-2 underline-offset-4">
                Set Alert Preferences
              </button>
            </div>
          </div>
        </div>
      </main>
      <button className="fixed bottom-8 right-8 w-16 h-16 primary-gradient  rounded-2xl shadow-2xl shadow-primary/40 flex items-center justify-center group hover:-translate-y-1 transition-all z-50">
        <span className="material-symbols-outlined text-3xl group-hover:rotate-90 transition-transform">
          add
        </span>
      </button>
    </div>
  );
}

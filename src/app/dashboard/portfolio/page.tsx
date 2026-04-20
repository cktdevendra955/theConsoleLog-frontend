"use client";

export default function Portfolio() {
  return (
    <body className="bg-background text-on-background selection:bg-primary/20">
      
      <div className="flex min-h-screen">
       
        <main className="  flex-1 p-12">
          <section className="mb-16">
            <div className="flex justify-between items-end mb-8">
              <div>
                <span className="label-md text-primary font-bold tracking-[0.2em] uppercase mb-4 block">
                  New Arrival
                </span>
                <h1 className="display-lg text-on-background max-w-2xl leading-tight">
                  Choose Your Professional Aesthetic
                </h1>
              </div>
            </div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-ambient group">
              <img
                alt="Featured theme background"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-alt="high-end abstract digital art with fluid shapes in deep blues and purples, professional and sophisticated background texture"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAEg-xaibUbEUrd9T416v1opq_EYC40IIRzx15KkenMsU1_Y7eSU3DAn-Dcq5FfvqDrLkRbvwNCL6OxVKcGjH-WU8NVZ1fpeFAoJEZZl9xOAgg3zi2T4F410RaeezmG-59tED-oxbGfA3A2_xpARhsADYYlTDiuaqK4ZPkW6bO2x4rUABJrTlAawDcT7sfY2QYFWwhqL9yFpHjyaeoX4nCLehhqC-71bSkUWyPVsqW6HnV1sfOynGPeOqhug7RQxI43XPNgwg9j3Ud"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 via-on-background/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-12 w-full flex justify-between items-end">
                <div className="max-w-lg">
                  <div className="flex gap-2 mb-4">
                    <span className="px-3 py-1 bg-tertiary-fixed-dim/20 backdrop-blur-md text-tertiary-fixed-dim rounded-full text-xs font-semibold tracking-wider uppercase border border-tertiary-fixed-dim/30">
                      Editors' Choice
                    </span>
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md  rounded-full text-xs font-semibold tracking-wider uppercase border border-white/20">
                      Editorial
                    </span>
                  </div>
                  <h2 className="headline-md  mb-2">
                    The Architect Pro
                  </h2>
                  <p className="body-lg /80 line-clamp-2">
                    A high-contrast, modernist framework designed for structural
                    designers and high-end creative firms.
                  </p>
                </div>
                <div className="flex gap-4">
                  <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-xl  rounded-xl font-medium transition-all">
                    Live Preview
                  </button>
                  <button className="px-8 py-4 bg-gradient-primary  rounded-xl font-medium shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all active:scale-95">
                    Apply Theme
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="flex items-center justify-between mb-12">
              <h3 className="headline-md font-semibold tracking-tight">
                Curated Designs
              </h3>
              <div className="flex gap-2">
                <button className="p-2 rounded-xl bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high transition-colors">
                  <span className="material-symbols-outlined">filter_list</span>
                </button>
                <button className="p-2 rounded-xl bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high transition-colors">
                  <span className="material-symbols-outlined">sort</span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-ambient transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    alt="Stellar Minimal theme"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    data-alt="clean minimalist living room with a single designer chair, neutral tones and dramatic natural light shadows on a white wall"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkoeQXjW5KYytUsMZoz5pm0QMFlMrh6WypZnZ1iFCZm29UeBPfzC8vi7jyJ2vCk-lLaqkOn75B1B350rYBz44STxhbuNiRAsfMaQ-xTdaTU-0FElwP46VB1uCKItjcPh7Ozh875QabNecVpIS18CENVWerfRG9DI3BB2DW423Fslaumdsc6Fi-Gh5wcxoUDuNkgijadJDDHHOnkv9qMENimOUiwcq0EYX8T1aFWuwSiVM0TfckGQ9gJKPdMGRMBBq3Nj9qSyNdHrSE"
                  />
                  <div className="absolute inset-0 bg-on-background/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-4 right-4">
                    <button className="h-10 w-10 glass-card rounded-full flex items-center justify-center text-on-surface hover:text-primary transition-colors">
                      <span
                        className="material-symbols-outlined"
                        
                      >
                        favorite
                      </span>
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    <span className="text-[10px] font-bold tracking-widest text-primary bg-primary/10 px-2 py-1 rounded">
                      MINIMAL
                    </span>
                    <span className="text-[10px] font-bold tracking-widest text-secondary bg-secondary/10 px-2 py-1 rounded">
                      DARK MODE
                    </span>
                  </div>
                  <h4 className="title-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    Stellar Minimal
                  </h4>
                  <p className="text-sm text-on-surface-variant mb-6 line-clamp-2">
                    Ultra-clean typography meets expansive negative space for
                    the modern individualist.
                  </p>
                  <div className="flex items-center gap-3">
                    <button className="flex-1 py-3 text-sm font-medium bg-surface-container-low text-on-surface rounded-xl hover:bg-surface-container-high transition-colors">
                      Preview
                    </button>
                    <button className="flex-1 py-3 text-sm font-medium bg-gradient-primary  rounded-xl shadow-md shadow-primary/10 hover:shadow-primary/20 transition-all">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
              <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-ambient transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    alt="Vogue Editorial theme"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    data-alt="close up of premium fashion magazine pages with bold serif typography and high contrast black and white photography"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg-ev9FsD5zkXq0KU89d_oFM-oB6uP2Vj6MGs_H7fqPgOU1QIHosfN8286wqO7uYDKiGyN0d0g5y_HuNBBDoUH4DokkV8lX9p84fhLL_9O6ZcRmZagcbKDRNO45S8omYzUOm1Bn6zwqglGD0SU00Y8BkYyroNBtDessg69f2x9BcN5y_1_fyLa2IQbl0zSiMtKpFDUJuXwjFfJjdCOEa9_9nioL6t0kMZpMHxTRZF4pX1RYnVGXLCM8Q-xSiprz-aiJv9Lxoj57sq4"
                  />
                  <div className="absolute inset-0 bg-on-background/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-4 right-4">
                    <button className="h-10 w-10 glass-card rounded-full flex items-center justify-center text-on-surface hover:text-primary transition-colors">
                      <span
                        className="material-symbols-outlined"
                         
                      >
                        favorite
                      </span>
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    <span className="text-[10px] font-bold tracking-widest text-primary bg-primary/10 px-2 py-1 rounded">
                      EDITORIAL
                    </span>
                    <span className="text-[10px] font-bold tracking-widest text-tertiary bg-tertiary/10 px-2 py-1 rounded">
                      PREMIUM
                    </span>
                  </div>
                  <h4 className="title-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    Vogue Editorial
                  </h4>
                  <p className="text-sm text-on-surface-variant mb-6 line-clamp-2">
                    A high-fashion inspired grid system that turns your work
                    into a digital publication.
                  </p>
                  <div className="flex items-center gap-3">
                    <button className="flex-1 py-3 text-sm font-medium bg-surface-container-low text-on-surface rounded-xl hover:bg-surface-container-high transition-colors">
                      Preview
                    </button>
                    <button className="flex-1 py-3 text-sm font-medium bg-gradient-primary  rounded-xl shadow-md shadow-primary/10 hover:shadow-primary/20 transition-all">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
              <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-ambient transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    alt="Nexus Agency theme"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    data-alt="modern glass and steel skyscraper architecture against a clear blue sky, sleek and corporate aesthetic"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkeVjbcLXGnqb29CfMWEnObHAgpTCeRdWG5eKyBF-dCRa7DaMj-rBrZVg20-RN-iarrRdKzzhef9iBH-3fhzZOA2UT6q-D9Qbo_CLXmP3XJLQqbNCRu2jdbX3UKK98CVlPslZ6_9Z_ap9bMFgwJbobwTo6GGJ-3xUsZXv1Hdn_b8Y-eKh125boS_7mJwySgCfIPbX0IRJ7jtGAVXmHakrNIURP4LpV1rBBmmpJHlulATW4-8imYV4uXJTsNRNkQ1Pg0BENk_dmEGGX"
                  />
                  <div className="absolute inset-0 bg-on-background/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-4 right-4">
                    <button className="h-10 w-10 glass-card rounded-full flex items-center justify-center text-on-surface hover:text-primary transition-colors">
                      <span
                        className="material-symbols-outlined"
                        
                      >
                        favorite
                      </span>
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    <span className="text-[10px] font-bold tracking-widest text-primary bg-primary/10 px-2 py-1 rounded">
                      AGENCY
                    </span>
                    <span className="text-[10px] font-bold tracking-widest text-secondary bg-secondary/10 px-2 py-1 rounded">
                      BOLD
                    </span>
                  </div>
                  <h4 className="title-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    Nexus Agency
                  </h4>
                  <p className="text-sm text-on-surface-variant mb-6 line-clamp-2">
                    A powerful multi-column layout for studios managing
                    high-volume diverse projects.
                  </p>
                  <div className="flex items-center gap-3">
                    <button className="flex-1 py-3 text-sm font-medium bg-surface-container-low text-on-surface rounded-xl hover:bg-surface-container-high transition-colors">
                      Preview
                    </button>
                    <button className="flex-1 py-3 text-sm font-medium bg-gradient-primary  rounded-xl shadow-md shadow-primary/10 hover:shadow-primary/20 transition-all">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      
    </body>
  );
}

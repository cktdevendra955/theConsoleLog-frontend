"use client";

export default function Templates() {
  return (
    <div className="bg-background font-body text-on-surface">
     
      <main className="pt-24 pb-20 px-6 max-w-[1440px] mx-auto">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="label-md text-primary tracking-[0.1em] font-bold">
              Step 2 of 3
            </span>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-on-surface">
              Select your foundation.
            </h1>
            <p className="text-lg text-on-surface-variant max-w-xl">
              Choose a template that reflects your professional identity. Each
              one is crafted for maximum readability by both humans and ATS.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="px-6 py-3 rounded-xl font-semibold text-primary bg-surface-container-high hover:bg-surface-container-highest transition-all duration-200">
              Back to Info
            </button>
            <button className="px-8 py-3 rounded-xl font-semibold  bg-gradient-to-br from-primary to-primary-container shadow-lg hover:shadow-primary/20 transition-all duration-200 active:scale-95">
              Continue to Editor
            </button>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4 mb-10">
          <div className="flex bg-surface-container-low p-1 rounded-xl">
            <button className="px-5 py-2 rounded-lg bg-white shadow-sm text-primary font-semibold text-sm">
              All Styles
            </button>
            <button className="px-5 py-2 rounded-lg text-on-surface-variant hover:text-on-surface font-medium text-sm transition-colors">
              Minimal
            </button>
            <button className="px-5 py-2 rounded-lg text-on-surface-variant hover:text-on-surface font-medium text-sm transition-colors">
              Creative
            </button>
            <button className="px-5 py-2 rounded-lg text-on-surface-variant hover:text-on-surface font-medium text-sm transition-colors">
              Executive
            </button>
          </div>
          <div className="relative flex-grow max-w-sm">
            <span
              className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm"
              data-icon="search"
            >
              search
            </span>
            <input
              className="w-full bg-surface-container-low border-none rounded-xl pl-10 py-3 focus:ring-2 focus:ring-primary/20 text-sm"
              placeholder="Search templates..."
              type="text"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div className="group relative active-template bg-surface-container-lowest rounded-xl p-4 transition-all duration-300">
            <div className="aspect-[3/4] rounded-lg overflow-hidden bg-surface-container-low mb-4 relative shadow-sm group-hover:shadow-xl transition-shadow duration-300">
              <img
                className="w-full h-full object-cover"
                data-alt="clean professional resume layout with serif typography and elegant spacing on high-quality cream colored paper texture"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDE2Pgn2Lu1X3ZAlvq7O-YqZ1AxYUmJPK55ighg-JxAgFvPmVLqwFDwzm4uoYSRY2oUisv4ZxaztTXaXHqmQUjMHr9Rh6IXruBXrhsOcJfXYRxtBmrLavBxso_B7cr6Vlo5rpTdN4dCrxQardz5gf2HEAHXSKgWZqb0WNDNTheIe5dwYzeUERTyN91GIC4o56slk5fUeQwI6qpiL8n9gK8judzPbTUaTzzdzMfCGCGsd0Ay_ndV8TexaGEW9XBuR7OaIocFVmXpQjiI"
              />
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white px-6 py-2 rounded-full text-primary font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  Preview
                </div>
              </div>
              <div className="absolute top-3 right-3 bg-primary  w-8 h-8 rounded-full flex items-center justify-center shadow-md">
                <span
                  className="material-symbols-outlined text-sm"
                  data-icon="check"
                  data-weight="fill"
                >
                  check
                </span>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-on-surface">The Executive</h3>
                <p className="text-xs text-on-surface-variant uppercase tracking-wider">
                  Traditional • ATS-Friendly
                </p>
              </div>
              <span className="text-tertiary-container">
                <span
                  className="material-symbols-outlined text-sm"
                  data-icon="star"
                  data-weight="fill"
                >
                  star
                </span>
              </span>
            </div>
          </div>
          <div className="group relative bg-surface-container-lowest rounded-xl p-4 transition-all duration-300 hover:-translate-y-2">
            <div className="aspect-[3/4] rounded-lg overflow-hidden bg-surface-container-low mb-4 relative shadow-sm group-hover:shadow-xl transition-shadow duration-300">
              <img
                className="w-full h-full object-cover"
                data-alt="modern resume template with bold sidebar and sans-serif typography featuring subtle blue accents on white background"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEi17l5-51U1fFxdqt5c2IEdRVKK1w_OLHVjjIuUsxwbl1e_Cl9rAfgv9HpNFuKxlb6zgomfNqmErntJRtpYrw4lpsuL_LeV-bJGaqTax5-5F26uNeHAKguodAYqZ0UchztZcVRes8pEbQcsgk9yDHw6bfNhgBs-7xIyFzR_fOOocSxt9zlzuioqVE63VOVzAzTzOKK7a5_2E8_AUwy6iVnYHa65AuQHU8fmQ2hj2cxvwtL6k_Xwifb76DikU0kP883mZEl2G-jsSD"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white px-6 py-2 rounded-full text-on-surface font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  Select Template
                </div>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-on-surface">Modern Minimal</h3>
                <p className="text-xs text-on-surface-variant uppercase tracking-wider">
                  Clean • Professional
                </p>
              </div>
            </div>
          </div>
          <div className="group relative bg-surface-container-lowest rounded-xl p-4 transition-all duration-300 hover:-translate-y-2">
            <div className="aspect-[3/4] rounded-lg overflow-hidden bg-surface-container-low mb-4 relative shadow-sm group-hover:shadow-xl transition-shadow duration-300">
              <img
                className="w-full h-full object-cover"
                data-alt="creative portfolio-style resume layout with asymmetric column structure and sophisticated typography on textured paper"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTshTIpGBcWS6sRUF2IqCXHu8IpBWd6BOglbgP_dS2UPHQ-2BV_S9u0ZXlYEwRzGhJXlXz5ZQ69qNUfB1nC6efRco5LqEPGnnrUNkUn7rgZ8Cr18FpPTaHQp3tk1JaKVGH_N1hjvka0EDpcw0P4tHT_fiqC5BeJ4dbayuJpPjIofyIqNgV30lWFNo7nkjMY9jjLJc21Bpx37xXoR8uXpBC_U0cc6oieagcPUdR4LisBVAYc_0EU0SyCxVdJxPYGmqxSDLfijDZtnoU"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white px-6 py-2 rounded-full text-on-surface font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  Select Template
                </div>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-on-surface">Creative Director</h3>
                <p className="text-xs text-on-surface-variant uppercase tracking-wider">
                  Editorial • Bold
                </p>
              </div>
            </div>
          </div>
          <div className="group relative bg-surface-container-lowest rounded-xl p-4 transition-all duration-300 hover:-translate-y-2">
            <div className="aspect-[3/4] rounded-lg overflow-hidden bg-surface-container-low mb-4 relative shadow-sm group-hover:shadow-xl transition-shadow duration-300">
              <img
                className="w-full h-full object-cover"
                data-alt="minimalist resume template with wide margins and light gray dividers for a breathable airy professional feel"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBn3DbJLOf5Pq6yBOgeWXXCoffHuH4q8cUdX7SirK84UpE2vlvAGWNoN9mqSaeC_yvMily7QP0D-UU4JUIYQTZL1lyfF0yVp6kAYwS0W6rDcqSOgBKfE3Yei4Q1uI8zVzbvmkSDg70B1VwiTacu5nCHijq7NLazUt8j4x7rFcqI1P5-2Vgzum0rW9KmgfrAt3mebnAuLoFe1O95slAHAoONsTD4XXbkmr6TowHqxjkFWwqdpHfjH0eDG3yCq7OJ6MBoTo0mNXY_KUxt"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white px-6 py-2 rounded-full text-on-surface font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  Select Template
                </div>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-on-surface">The Swiss</h3>
                <p className="text-xs text-on-surface-variant uppercase tracking-wider">
                  Structured • Precise
                </p>
              </div>
            </div>
          </div>
          <div className="group relative bg-surface-container-lowest rounded-xl p-4 transition-all duration-300 hover:-translate-y-2">
            <div className="aspect-[3/4] rounded-lg overflow-hidden bg-surface-container-low mb-4 relative shadow-sm group-hover:shadow-xl transition-shadow duration-300">
              <img
                className="w-full h-full object-cover"
                data-alt="tech-focused resume template with dark accents and sleek line-based layout for software engineering profiles"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsmnuvTqaTgTO0qj8U6bgrivvy0s9ExoobS4sWr0HI3yNj6kDJzkcc3_7PuW3I6ceeWrc0DwajwptK6_B_wpOgCnEuoAxSyzZqxx4K6IS9wPhMUR14ubWfA1yvaILvP7PZrhLCdLQXSN3IhqZ-oR5sjYXu9elzZA2HlQb5UyVTEiHN0ixlDafDrgVpCkOOJq-vt0AyYg0XnpqFVRfCj9mwUCUuU4ocwErtPTOYLn4IoIDsDlTmSuetWNK-kiBQNhLRvaEeRT6ZwVsZ"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white px-6 py-2 rounded-full text-on-surface font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  Select Template
                </div>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-on-surface">The Developer</h3>
                <p className="text-xs text-on-surface-variant uppercase tracking-wider">
                  Functional • Compact
                </p>
              </div>
              <div className="px-2 py-0.5 bg-tertiary-fixed rounded text-[10px] font-bold text-on-tertiary-fixed-variant uppercase tracking-tighter">
                New
              </div>
            </div>
          </div>
          <div className="group relative bg-surface-container-lowest rounded-xl p-4 transition-all duration-300 hover:-translate-y-2">
            <div className="aspect-[3/4] rounded-lg overflow-hidden bg-surface-container-low mb-4 relative shadow-sm group-hover:shadow-xl transition-shadow duration-300">
              <img
                className="w-full h-full object-cover"
                data-alt="academic CV template with multi-page structure and detailed publication sections in classic formal typography"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqSVKxQdzREVXAzotkk5-OAsOWTlo2HnmrlX4KclNkSqhnbeSWqpchFOZLFzrpGod3eiHHJ3Jrn6BFBAXHMa2IbNJtpI7j4qT3JNPW_7Hu8iEjZGi1fgGx8625NP-sCALamu7OJja6QQjopJ8QTDU0zYEY4yRxevsKzHb2R411xWxrOfRgRcclAcz7v_h8sb_rpCr5ChSI-_A6HB0XC7mSfBd0UmKzjiXrhPFMfdU558hFboZUdSuUJk5_YeNLAmC7EHNdPB8RWblU"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white px-6 py-2 rounded-full text-on-surface font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  Select Template
                </div>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-on-surface">Academic CV</h3>
                <p className="text-xs text-on-surface-variant uppercase tracking-wider">
                  Detailed • Elegant
                </p>
              </div>
            </div>
          </div>
          <div className="group relative bg-surface-container-lowest rounded-xl p-4 transition-all duration-300 hover:-translate-y-2">
            <div className="aspect-[3/4] rounded-lg overflow-hidden bg-surface-container-low mb-4 relative shadow-sm group-hover:shadow-xl transition-shadow duration-300">
              <img
                className="w-full h-full object-cover"
                data-alt="legal and professional services resume template with heavy headers and authoritative layout"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu7Qg4qJkwi20uDS17epVVpg3We7ortnr54dLP7U7fEt8HHujDoGn6Pk2LBVU-P2K69OgTwy6XDPxa9oIWEuX_wQKW4GBXks8lEu_we8_NXrT_Zzyz2XohGSMOq4ntAEUWeNexvW-A0lgp6nDUMkfeVqW4y5McK5hJ-LZPox235jlRhOpZz9YdP8c-xvKNbvWxBxvyE2bWJw27DCw5hKPjuO2O_eIpggcC_gLjuq5pPf5QSYazIylrWHavJSrEUjxzxtj0LTVAfBpx"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white px-6 py-2 rounded-full text-on-surface font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  Select Template
                </div>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-on-surface">The Associate</h3>
                <p className="text-xs text-on-surface-variant uppercase tracking-wider">
                  Formal • Trusted
                </p>
              </div>
            </div>
          </div>
          <div className="group relative bg-surface-container-lowest rounded-xl p-4 transition-all duration-300 hover:-translate-y-2">
            <div className="aspect-[3/4] rounded-lg overflow-hidden bg-surface-container-low mb-4 relative shadow-sm group-hover:shadow-xl transition-shadow duration-300">
              <img
                className="w-full h-full object-cover"
                data-alt="startup-ready resume template with vibrant accent colors and energetic modern typeface"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYH5M_wg0779cOMYBGsQjpJkQ7kzZZGpG1s76ZzGR2CEnU2rjMQX1jJPe_Oo-mBN_BD5Qrv_M91cWdbNh71TZOFtRK1zQ1mD2H10R0GN6Np8Wlk2kh1Xv_JzVkww88bw03NaMZzmmzonyYOc93w_9ZDcWIb07vPYkleWWb9QMoQM95X8xKZCOlqCUfuTTAARHEPhsv4GQNsHQacu_PAAENjzVxMt2QLJG28MsFXGuH5oBPCOVz7KmWIDPPufLLkOQE1o6eVZoqB1vT"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white px-6 py-2 rounded-full text-on-surface font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  Select Template
                </div>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-on-surface">Growth Lead</h3>
                <p className="text-xs text-on-surface-variant uppercase tracking-wider">
                  Vibrant • Modern
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden fixed bottom-0 left-0 w-full p-4 bg-white/80 backdrop-blur-lg border-t border-outline-variant/20 flex gap-3">
          <button className="flex-1 py-3 rounded-xl font-semibold text-primary bg-surface-container-high transition-all active:scale-95">
            Previous
          </button>
          <button className="flex-[2] py-3 rounded-xl font-semibold  bg-primary shadow-lg transition-all active:scale-95">
            Continue to Editor
          </button>
        </div>
      </main>
    </div>
  );
}

export default function HiringDrive() {
  return (
    <div className="pt-6 p-6 min-h-screen">
      <div className="max-w-6xl mx-auto">

        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-slate-400 mb-6 text-sm">
          <span>Drives</span>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="text-slate-900 font-medium">
            Senior Product Designer
          </span>
        </div>

        {/* Hero */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 items-end">
          <div className="md:col-span-2 flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center p-3">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1WE76LZevSCc3jQOO_O5sPtav7Bt1ADty9B0D0Dx98P4mONgx4eUu_YEexKaT5wecnR0NYAblmlcQVT5WMRwcOvabPje9gzswb_q5eD-koWwDeJYR8R80xgrv452cPuzvR61aGZ0_Me4UbxMYEM-pbxkeZ6LzI-8SRVBnkwmnH8ACMYjzE3NIyO8aumOn-dxDltYLoGPN_NnfIgAAewIIC2T7e5X_phPPkF1bo9ozGrrVEhsbNZvTKd-NZ5lbDK-1BpZ52aRPbB1J"
                className="w-full h-full object-contain invert"
              />
            </div>

            <div>
              <h2 className="text-3xl font-extrabold">
                Senior Product Designer
              </h2>
              <p className="text-slate-500 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">
                  location_on
                </span>
                Vercel Inc. • Remote
              </p>
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <button className="px-6 py-3 rounded-xl bg-slate-200 font-semibold">
              View JD
            </button>
            <button className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold">
              Message Recruiter
            </button>
          </div>
        </section>

        {/* Timeline */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border mb-6">
          <h3 className="font-bold mb-6">Drive Timeline</h3>

          <div className="flex justify-between">
            {["Applied", "Design Test", "Interview", "Selected"].map(
              (step, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      i === 0
                        ? "bg-green-500 text-white"
                        : i === 1
                        ? "bg-indigo-600 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    {i === 0 ? "✓" : i === 1 ? "!" : "•"}
                  </div>
                  <p className="text-sm font-bold">{step}</p>
                </div>
              )
            )}
          </div>
        </div>

        {/* Bottom Action */}
        <div className="p-6 bg-gray-100 rounded-2xl flex justify-between items-center">
          <div>
            <h4 className="font-bold">Ready to submit?</h4>
            <p className="text-sm text-gray-500">
              Upload your assignment
            </p>
          </div>

          <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl">
            Submit
          </button>
        </div>

      </div>
    </div>
  );
}
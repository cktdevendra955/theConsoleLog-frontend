export default function Footer() {
  return (
    <footer className="border-t bg-white mt-16">
      <div className="max-w-[1280px] mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">

        <div className="text-center md:text-left">
          <p className="font-bold text-slate-900">Signal</p>
          <p>© 2026 Signal Recruitment</p>
        </div>

        <div className="flex gap-6">
          <a className="hover:text-blue-600">Privacy</a>
          <a className="hover:text-blue-600">Terms</a>
          <a className="hover:text-blue-600">API</a>
          <a className="hover:text-blue-600">Status</a>
        </div>

      </div>
    </footer>
  );
}
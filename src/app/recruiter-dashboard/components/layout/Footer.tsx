export default function Footer() {
  return (
    <footer className="ml-0 border-t border-slate-200 px-6 py-5 dark:border-slate-800 lg:ml-64 lg:px-8">
      <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
        <p className="text-xs uppercase tracking-widest text-slate-400">
          © 2026 The Curator. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a
            href="#"
            className="text-xs uppercase tracking-widest text-slate-400 hover:text-indigo-500"
          >
            Privacy
          </a>

          <a
            href="#"
            className="text-xs uppercase tracking-widest text-slate-400 hover:text-indigo-500"
          >
            Support
          </a>

          <a
            href="#"
            className="text-xs uppercase tracking-widest text-slate-400 hover:text-indigo-500"
          >
            Docs
          </a>
        </div>
      </div>
    </footer>
  );
}
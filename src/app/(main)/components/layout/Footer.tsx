export default function Footer() {
  return (
    <footer className="border-t mt-10">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between gap-4 text-sm text-gray-500">
        
        {/* Left */}
        <p>© {new Date().getFullYear()} Mark-43. All rights reserved.</p>

        {/* Right */}
        <div className="flex gap-4">
          <span className="hover:text-black cursor-pointer">Privacy</span>
          <span className="hover:text-black cursor-pointer">Terms</span>
          <span className="hover:text-black cursor-pointer">Contact</span>
        </div>
      </div>
    </footer>
  );
}
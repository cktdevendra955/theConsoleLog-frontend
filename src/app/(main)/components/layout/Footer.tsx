export default function Footer() {
  return (
    <footer className="border-t border-blue-100 ">
  <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
    
    <div className="grid md:grid-cols-4 gap-10 text-sm">
      
      {/* Brand */}
      <div>
        <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          YourBrand
        </h3>
        <p className="mt-4 text-gray-500">
          Helping developers get hired based on skills — not just resumes.
        </p>
      </div>

      {/* Product */}
      <div>
        <h4 className="font-semibold mb-4 text-gray-800">Product</h4>
        <ul className="space-y-3 text-gray-500">
          <li className="hover:text-blue-600 cursor-pointer transition">
            Portfolio Builder
          </li>
          <li className="hover:text-blue-600 cursor-pointer transition">
            AI Job Matching
          </li>
          <li className="hover:text-blue-600 cursor-pointer transition">
            Resume Builder
          </li>
          <li className="hover:text-blue-600 cursor-pointer transition">
            Dashboard
          </li>
        </ul>
      </div>

      {/* Company */}
      <div>
        <h4 className="font-semibold mb-4 text-gray-800">Company</h4>
        <ul className="space-y-3 text-gray-500">
          <li className="hover:text-blue-600 cursor-pointer transition">
            About
          </li>
          <li className="hover:text-blue-600 cursor-pointer transition">
            Careers
          </li>
          <li className="hover:text-blue-600 cursor-pointer transition">
            Contact
          </li>
          <li className="hover:text-blue-600 cursor-pointer transition">
            Blog
          </li>
        </ul>
      </div>

      {/* CTA */}
      <div>
        <h4 className="font-semibold mb-4 text-gray-800">
          Start Your Journey
        </h4>
        <p className="text-gray-500 mb-4">
          Build your portfolio and get discovered by real startups.
        </p>

        <button className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-sm hover:opacity-90 transition">
          Get Started
        </button>
      </div>
    </div>

    {/* Bottom */}
    <div className="mt-16 pt-6 border-t border-blue-100 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
      
      <p>© {new Date().getFullYear()} YourBrand. All rights reserved.</p>

      <div className="flex gap-6 mt-4 md:mt-0">
        <span className="hover:text-blue-600 cursor-pointer transition">
          Privacy Policy
        </span>
        <span className="hover:text-blue-600 cursor-pointer transition">
          Terms
        </span>
        <span className="hover:text-blue-600 cursor-pointer transition">
          Cookies
        </span>
      </div>
    </div>
  </div>
</footer>
  );
}
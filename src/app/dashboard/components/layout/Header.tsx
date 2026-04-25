// "use client";

// import { Menu, Bell } from "lucide-react";

// export default function Header({
//   toggleSidebar,
//   openMobile,
// }: {
//   toggleSidebar: () => void;
//   openMobile: () => void;
// }) {
//   return (
//     <header className="h-16 border-b flex items-center justify-between px-4 md:px-8 bg-white">
      
//       <div className="flex items-center gap-3">
//         {/* Mobile */}
//         <button onClick={openMobile} className="md:hidden">
//           <Menu className="h-5 w-5" /> PROJECT - 43
//         </button>

//         {/* Desktop */}
//         <button onClick={toggleSidebar} className="hidden md:block">
//           <Menu className="h-5 w-5" /> PROJECT - 43
//         </button>
//       </div>

//       <div className="flex items-center gap-4">
//         <Bell className="h-5 w-5" /> 
//       </div>
//     </header>
//   );
// }


// "use client";

// import { Menu, Bell } from "lucide-react";

// export default function Header({
//   toggleSidebar,
//   openMobile,
// }: {
//   toggleSidebar: () => void;
//   openMobile: () => void;
// }) {
//   return (
//     <header className="h-16 border-b flex items-center justify-between px-4 md:px-8 bg-white">
      
//       <div className="flex items-center gap-3">
//         {/* Mobile */}
//         <button onClick={openMobile} className="md:hidden">
//           <Menu className="h-5 w-5" /> PROJECT - 43
//         </button>

//         {/* Desktop */}
//         <button onClick={toggleSidebar} className="hidden md:block">
//           <Menu className="h-5 w-5" /> PROJECT - 43
//         </button>
//       </div>

//       <div className="flex items-center gap-4">
//         <Bell className="h-5 w-5" /> 
//       </div>
//     </header>
//   );
// }





"use client";

import { useState, useRef, useEffect } from "react";
import {
  Menu,
  Bell,
  User,
  Settings,
  LogOut,
  CheckCircle,
} from "lucide-react";

export default function Header({
  toggleSidebar,
  openMobile,
}: {
  toggleSidebar: () => void;
  openMobile: () => void;
}) {
  const [activeDropdown, setActiveDropdown] = useState<
    "notif" | "profile" | null
  >(null);

  const notifRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        notifRef.current &&
        !notifRef.current.contains(e.target as Node) &&
        profileRef.current &&
        !profileRef.current.contains(e.target as Node)
      ) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="h-16 border-b flex items-center justify-between px-4 md:px-8 bg-white">
      
      {/* LEFT */}
      <div className="flex items-center gap-4">
        <button onClick={openMobile} className="md:hidden">
          <Menu className="h-5 w-5 text-gray-700" />
        </button>

        <button onClick={toggleSidebar} className="hidden md:block">
          <Menu className="h-5 w-5 text-gray-700" />
        </button>

        {/* BRAND */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-black text-white flex items-center justify-center font-bold text-sm">
            P
          </div>
          <h1 className="text-lg font-semibold text-gray-900">
            Project<span className="text-gray-400">43</span>
          </h1>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        
        {/* 🔔 NOTIFICATION */}
        <div className="relative" ref={notifRef}>
          <button
            onClick={() =>
              setActiveDropdown(activeDropdown === "notif" ? null : "notif")
            }
            className="relative"
          >
            <Bell className="h-5 w-5 text-gray-600 hover:text-black" />
            <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>

          {activeDropdown === "notif" && (
            <div className="absolute right-0 mt-3 w-80 bg-white border rounded-xl shadow-lg overflow-hidden">
              
              <div className="px-4 py-3 border-b font-medium">
                Notifications
              </div>

              <div className="max-h-72 overflow-y-auto">
                <div className="flex gap-3 px-4 py-3 hover:bg-gray-50">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <div>
                    <p className="text-sm">Payment successful</p>
                    <p className="text-xs text-gray-500">2 min ago</p>
                  </div>
                </div>

                <div className="flex gap-3 px-4 py-3 hover:bg-gray-50">
                  <CheckCircle className="h-5 w-5 text-blue-500 mt-1" />
                  <div>
                    <p className="text-sm">New user registered</p>
                    <p className="text-xs text-gray-500">10 min ago</p>
                  </div>
                </div>
              </div>

              <div className="text-center py-2 border-t text-sm text-gray-600 hover:bg-gray-50 cursor-pointer">
                View all
              </div>
            </div>
          )}
        </div>

        {/* 👤 PROFILE */}
        <div className="relative" ref={profileRef}>
          <button
            onClick={() =>
              setActiveDropdown(
                activeDropdown === "profile" ? null : "profile"
              )
            }
            className="flex items-center gap-2"
          >
            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium">
              D
            </div>
          </button>

          {activeDropdown === "profile" && (
            <div className="absolute right-0 mt-3 w-52 bg-white border rounded-xl shadow-lg p-2">
              
              <div className="px-3 py-2 border-b">
                <p className="text-sm font-medium">Devendra</p>
                <p className="text-xs text-gray-500">dev@example.com</p>
              </div>

              <div className="mt-2 space-y-1">
                <button className="w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg hover:bg-gray-100">
                  <User className="h-4 w-4" /> Profile
                </button>

                <button className="w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg hover:bg-gray-100">
                  <Settings className="h-4 w-4" /> Settings
                </button>

                <button className="w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg hover:bg-red-50 text-red-600">
                  <LogOut className="h-4 w-4" /> Logout
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </header>
  );
}
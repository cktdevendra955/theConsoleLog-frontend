"use client";

import { ArrowRight } from "lucide-react";
import { useState, useRef } from "react";

export default function OTPPage() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // auto move forward
    if (value && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: any, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen flex items-center justify-center px-4">

      <div className="w-full max-w-md border rounded-2xl p-8 shadow-sm">

        {/* HEADER */}
        <div className="text-center">
          <h1 className="text-2xl font-semibold">
            Verify Your Account
          </h1>

          <p className="text-sm text-gray-500 mt-2">
            Enter the 6-digit code sent to your email
          </p>
        </div>

        {/* OTP INPUT */}
        <div className="flex justify-between gap-2 mt-8">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputs.current[index] = el)}
              value={digit}
              onChange={(e) =>
                handleChange(e.target.value, index)
              }
              onKeyDown={(e) => handleKeyDown(e, index)}
              maxLength={1}
              className="w-12 h-14 text-center text-lg border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
            />
          ))}
        </div>

        {/* VERIFY BUTTON */}
        <button className="w-full mt-8 py-3 rounded-xl bg-black text-white text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-800 transition">
          Verify & Continue <ArrowRight size={16} />
        </button>

        {/* RESEND */}
        <div className="text-center mt-6 text-sm text-gray-500">
          Didn’t receive code?
          <button className="ml-1 text-black font-medium">
            Resend
          </button>
        </div>

      </div>
    </div>
  );
}
"use client";

import { useState } from "react";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password, rememberMe });
  };

  return (
    <div className="bg-white box-border flex flex-col gap-[100px] items-center pb-12 pt-24 px-8 min-h-screen">
      {/* Header */}
      <div className="flex gap-2.5 items-center justify-center p-2.5">
        <div className="bg-gradient-to-b from-[#3b05ff] to-[#d507ba] flex flex-col gap-2.5 h-[100px] items-center justify-center overflow-hidden px-5 py-[26px] rounded-[63px] w-[98px]">
          <p className="font-semibold leading-[44px] text-[36px] text-white tracking-[-0.72px]">
            AI
          </p>
        </div>
        <p className="font-semibold leading-[60px] text-[48px] text-black text-center tracking-[-0.96px]">
          Welcome to AI Horizon
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col h-auto max-w-[674px] w-full items-center justify-between pb-[54px]">
        {/* Header Section */}
        <div className="flex flex-col gap-6 items-center w-full mb-6">
          <div className="flex flex-col gap-3 items-start text-center w-full">
            <p className="font-semibold leading-[38px] text-[#181d27] text-[30px] w-full">
              Log in to your account
            </p>
            <p className="font-normal leading-6 text-[#535862] text-base w-full">
              Welcome back! Please enter your details.
            </p>
          </div>
        </div>

        {/* Form Content */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 items-center rounded-xl w-full"
        >
          {/* Form Fields */}
          <div className="flex flex-col gap-5 items-start w-full">
            {/* Email Input */}
            <div className="flex flex-col items-start w-full">
              <div className="flex flex-col gap-1.5 items-start w-full">
                <label
                  htmlFor="email"
                  className="font-medium leading-5 text-[#414651] text-sm"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="bg-white border border-[#d5d7da] rounded-lg px-3.5 py-2.5 w-full text-base leading-6 text-[#181d27] placeholder:text-[#717680] focus:outline-none focus:ring-2 focus:ring-[#6941c6] focus:border-transparent"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="flex flex-col items-start w-full">
              <div className="flex flex-col gap-1.5 items-start w-full">
                <label
                  htmlFor="password"
                  className="font-medium leading-5 text-[#414651] text-sm"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-white border border-[#d5d7da] rounded-lg px-3.5 py-2.5 w-full text-base leading-6 text-[#181d27] placeholder:text-[#717680] focus:outline-none focus:ring-2 focus:ring-[#6941c6] focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Remember Me and Forgot Password Row */}
          <div className="flex items-center justify-between w-full">
            <div className="flex gap-2 items-center">
              <input
                id="remember"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 border border-[#d5d7da] rounded accent-[#6941c6] focus:ring-2 focus:ring-[#6941c6]"
              />
              <label
                htmlFor="remember"
                className="font-medium leading-5 text-[#414651] text-sm"
              >
                Remember for 30 days
              </label>
            </div>
            <button
              type="button"
              className="font-semibold leading-5 text-[#6941c6] text-sm hover:underline"
            >
              Forgot password
            </button>
          </div>

          {/* Sign In Button */}
          <div className="flex flex-col gap-4 items-start w-full max-w-[346px]">
            <button
              type="submit"
              className="bg-[#4607c4] border border-[#f4ebff] rounded-lg px-[18px] py-2.5 w-full font-semibold leading-6 text-base text-white hover:bg-[#3b05ff] transition-colors"
            >
              Sign in
            </button>
          </div>
        </form>

        {/* Sign Up Row */}
        <div className="flex gap-1 items-start justify-center w-full mt-6">
          <p className="font-normal leading-5 text-[#535862] text-sm">
            Don&apos;t have an account?
          </p>
          <button
            type="button"
            className="font-semibold leading-5 text-[#6941c6] text-sm hover:underline"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

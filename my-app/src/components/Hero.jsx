// components/Hero.jsx
import React from "react";

export default function Hero() {
  return (
    <header
      id="home"
      className="relative w-full h-screen overflow-hidden flex flex-col"
    >
      {/* Spline background */}
      <iframe
        src="https://my.spline.design/rollingrectangles-0Fb36sdUKNxi1CUYVsjzUjMw/"
        frameBorder="0"
        className="absolute top-0 left-0 w-full h-full"
        allow="fullscreen"
      ></iframe>

      {/* Navigation Bar */}
      <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-10 py-6 z-20">
        {/* Left: Logo */}
        <div className="text-2xl font-bold text-white">
          Counsel<span className="text-[#bd5e2b]">Mate</span>
        </div>

        {/* Middle: Nav links */}
        <ul className="hidden md:flex gap-10 text-white font-medium">
          <li>
            <a href="#about" className="hover:text-[#bd5e2b] cursor-pointer">
              About
            </a>
          </li>
          <li>
            <a href="#impact" className="hover:text-[#bd5e2b] cursor-pointer">
              Impact
            </a>
          </li>
          <li>
            <a
              href="#scholarship"
              className="hover:text-[#bd5e2b] cursor-pointer"
            >
              Scholarship
            </a>
          </li>
          <li>
            <a
              href="#study-materials" // ✅ matches the ID in StudyMaterialsSection
              className="hover:text-[#bd5e2b] cursor-pointer"
            >
              Study Material
            </a>
          </li>
          <li>
            <a href="#help" className="hover:text-[#bd5e2b] cursor-pointer">
              Help
            </a>
          </li>
        </ul>

        {/* Right: Buttons */}
        <div className="flex gap-4">
          <a
            href="#signin"
            className="px-4 py-2 border border-white text-white rounded-full font-medium hover:bg-white hover:text-[#201942] transition"
          >
            Sign In
          </a>
          <a
            href="#signup"
            className="px-4 py-2 bg-[#bd5e2b] text-white rounded-full font-medium hover:bg-[#a04e25] transition"
          >
            Sign Up
          </a>
        </div>
      </nav>

      {/* Overlay content */}
      <div className="relative flex flex-col items-center justify-center text-center px-6 flex-1 z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          <span className="block text-white">Unlock Your Career</span>
          <span className="block text-[#bd5e2b]">
            Potential with CounselMate
          </span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-[#ffffffcc] max-w-2xl">
          Discover the right path, build your future roadmap, and get
          motivated to achieve success.
        </p>

        <div className="mt-8 flex flex-col md:flex-row gap-4">
          <a
            href="#about"
            className="px-6 py-3 bg-[#bd5e2b] text-white rounded-full font-semibold hover:bg-[#a04e25] transition"
          >
            Start Journey with CounselMate
          </a>
          <a
            href="#impact"
            className="px-6 py-3 border border-white text-white rounded-full font-semibold hover:bg-white hover:text-[#201942] transition"
          >
            Learn More about CounselMate
          </a>
        </div>
      </div>
    </header>
  );
}
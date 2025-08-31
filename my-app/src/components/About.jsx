// components/About.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const cardsRef = useRef([]);
  const shapesRef = useRef([]);

  const aboutPoints = [
    {
      icon: "🎯",
      title: "Our Mission",
      description:
        "To guide students and professionals with clarity, helping them choose the right career path.",
    },
    {
      icon: "🤝",
      title: "Mentorship",
      description:
        "We connect learners with mentors and counselors who provide personalized guidance.",
    },
    {
      icon: "📚",
      title: "Resources",
      description:
        "Curated study materials, scholarship info, and real-world insights to boost success.",
    },
  ];

  useEffect(() => {
    // Animate cards
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.2,
        }
      );
    });

    // Animate gradient inside shapes
    shapesRef.current.forEach((shape, idx) => {
      gsap.to(shape, {
        backgroundPosition: "200% 0%",
        duration: 15 + idx * 5,
        ease: "linear",
        repeat: -1,
      });
    });
  }, []);

  return (
    <section
      id="about"   // 👈 Added for smooth scroll
      className="relative w-full px-6 py-24 flex flex-col items-center overflow-hidden bg-gradient-to-b from-[#201942] to-black"
    >
      <h2 className="text-5xl md:text-6xl font-extrabold text-[#bd5e2b] mb-6 text-center z-10">
        About CounselMate
      </h2>
      <p className="text-white text-lg md:text-xl text-center max-w-3xl mb-16 z-10">
        CounselMate is more than just a career guide. We provide mentorship,
        resources, and opportunities that empower students and professionals
        to build the future they deserve.
      </p>

      {/* Centered Cards */}
      <div className="flex flex-wrap justify-center gap-8 max-w-5xl w-full relative z-10">
        {aboutPoints.map((point, idx) => (
          <div
            key={idx}
            ref={(el) => (cardsRef.current[idx] = el)}
            className="flex flex-col items-center gap-4 p-6 rounded-3xl bg-[#bd5e2b]/20 shadow-lg hover:scale-105 transition-transform cursor-pointer w-72"
          >
            <div className="text-5xl text-[#bd5e2b]">{point.icon}</div>
            <h3 className="text-xl font-semibold text-white text-center">
              {point.title}
            </h3>
            <p className="text-white/80 text-center text-sm">
              {point.description}
            </p>
          </div>
        ))}
      </div>

      {/* Floating shapes */}
      <div
        ref={(el) => (shapesRef.current[0] = el)}
        className="absolute top-10 left-10 w-24 h-24 rounded-full blur-3xl animate-pulse"
        style={{
          background: "linear-gradient(45deg, #bd5e2b, #ffffff, #bd5e2b)",
          backgroundSize: "200% 200%",
        }}
      ></div>
      <div
        ref={(el) => (shapesRef.current[1] = el)}
        className="absolute bottom-20 right-20 w-32 h-32 rounded-full blur-3xl animate-pulse"
        style={{
          background: "linear-gradient(45deg, #bd5e2b, #ffffff, #bd5e2b)",
          backgroundSize: "200% 200%",
        }}
      ></div>
      <div
        ref={(el) => (shapesRef.current[2] = el)}
        className="absolute top-1/2 left-1/2 w-16 h-16 rounded-full blur-3xl animate-pulse -translate-x-1/2 -translate-y-1/2"
        style={{
          background: "linear-gradient(45deg, #bd5e2b, #ffffff, #bd5e2b)",
          backgroundSize: "200% 200%",
        }}
      ></div>
    </section>
  );
}
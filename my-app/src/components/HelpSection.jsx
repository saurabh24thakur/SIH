// components/HelpSection.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HelpSection() {
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const detailsRef = useRef([]);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          },
        }
      );
    }

    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
          },
        }
      );
    }

    detailsRef.current.forEach((el, idx) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: idx * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        }
      );
    });
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-32 md:px-48 py-24 md:py-32 overflow-hidden bg-black">
      {/* Left: Title */}
      <div
        ref={titleRef}
        className="w-full md:w-1/3 mb-8 md:mb-0 flex flex-col items-start"
      >
        <h2 className="text-5xl md:text-6xl font-bold text-[#bd5e2b] mb-4 leading-tight">
          How CounselMate <br /> Helps You
        </h2>
        <p className="text-lg md:text-xl text-[#ffffffcc] leading-relaxed">
          From discovering career interests to planning higher education and achieving your dream goals — we are here to guide you every step of the way.
        </p>
      </div>

      {/* Right: Form + Contact Details */}
      <div className="w-full md:w-2/3 flex flex-col items-center md:items-end gap-12">
        {/* Contact Form */}
        <div
          ref={formRef}
          className="w-full max-w-lg p-10 rounded-3xl shadow-lg border border-[#bd5e2b]/40 backdrop-blur-md bg-white/5 flex flex-col gap-5"
        >
          <h3 className="text-3xl font-bold text-[#bd5e2b] mb-4 text-center md:text-left">
            Contact Us
          </h3>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-[#bd5e2b]/50 focus:outline-none focus:border-[#bd5e2b] text-white placeholder-white/70"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-[#bd5e2b]/50 focus:outline-none focus:border-[#bd5e2b] text-white placeholder-white/70"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-[#bd5e2b]/50 focus:outline-none focus:border-[#bd5e2b] text-white placeholder-white/70"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#bd5e2b] text-black font-semibold rounded-lg hover:bg-yellow-500 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Horizontal Contact Details */}
        <div className="flex flex-wrap justify-center md:justify-end gap-8 w-full">
          {[
            { icon: "📧", label: "Email", value: "info@counselmate.com", link: "mailto:info@counselmate.com" },
            { icon: "📞", label: "Phone", value: "+91 123 456 7890", link: "tel:+911234567890" },
            { icon: "💬", label: "WhatsApp", value: "Chat Now", link: "https://wa.me/911234567890" },
            { icon: "🌐", label: "Website", value: "www.counselmate.com", link: "https://www.counselmate.com" },
          ].map((item, idx) => (
            <a
              key={idx}
              ref={(el) => (detailsRef.current[idx] = el)}
              href={item.link}
              target="_blank"
              className="flex flex-col items-center gap-1 text-white hover:text-[#bd5e2b] transition"
            >
              <div className="text-3xl">{item.icon}</div>
              <p className="text-sm font-semibold">{item.label}</p>
              <p className="text-xs text-gray-300">{item.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
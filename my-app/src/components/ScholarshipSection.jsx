// components/ScholarshipSection.jsx
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScholarshipSection() {
  const cardsRef = useRef([]);
  const [selectedScholarship, setSelectedScholarship] = useState(null);

  const scholarships = [
    {
      title: "National Merit Scholarship",
      description: "Awarded to students with outstanding academic performance and leadership skills.",
      deadline: "30th Sept 2025",
      eligibility: "Students with 90%+ in academics and proven leadership roles.",
      benefits: "Covers full tuition fees and additional living allowance.",
    },
    {
      title: "STEM Excellence Award",
      description: "For students excelling in Science, Technology, Engineering, and Math fields.",
      deadline: "15th Oct 2025",
      eligibility: "Open to undergraduate and postgraduate STEM students.",
      benefits: "50% tuition fee waiver and mentorship opportunities.",
    },
    {
      title: "Global Talent Scholarship",
      description: "Supports students aiming for higher studies abroad with proven potential.",
      deadline: "1st Nov 2025",
      eligibility: "Students applying for Masters/PhD in international universities.",
      benefits: "Partial funding up to $20,000.",
    },
    {
      title: "CounselMate Uplift Grant",
      description: "Special aid for rural and underprivileged students to pursue quality education.",
      deadline: "15th Nov 2025",
      eligibility: "Students from rural areas with family income below ₹3 lakh.",
      benefits: "Full tuition waiver and study material support.",
    },
    {
      title: "Women in Tech Scholarship",
      description: "Encouraging female students to pursue careers in technology and innovation.",
      deadline: "30th Nov 2025",
      eligibility: "Open to female students in CS/IT/AI-related fields.",
      benefits: "Covers 75% tuition fees and internship opportunities.",
    },
    {
      title: "Arts & Culture Fellowship",
      description: "For students excelling in fine arts, literature, and cultural activities.",
      deadline: "10th Dec 2025",
      eligibility: "Students showcasing exceptional talent in arts and culture.",
      benefits: "Scholarship amount up to ₹1.5 lakh annually.",
    },
  ];

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
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
  }, []);

  return (
    <section
      id="scholarship"
      className="relative w-full px-6 py-24 bg-gradient-to-br from-black via-[#201942] to-black flex flex-col items-center overflow-hidden"
    >
      {/* Heading */}
      <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-6">
        <span className="text-white">Explore</span>{" "}
        <span className="text-[#bd5e2b]">Scholarships</span>
      </h2>
      <p className="text-white/80 text-lg md:text-xl text-center max-w-3xl mb-16">
        Find the right financial support to fuel your academic journey with these handpicked scholarships.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full relative z-10">
        {scholarships.map((sch, idx) => (
          <div
            key={idx}
            ref={(el) => (cardsRef.current[idx] = el)}
            className="bg-white/5 border border-white/10 p-8 rounded-3xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-[#bd5e2b] mb-3">{sch.title}</h3>
              <p className="text-white/80 mb-4 text-sm">{sch.description}</p>
              <p className="text-white/60 text-sm">
                <span className="font-semibold text-white">Deadline:</span> {sch.deadline}
              </p>
            </div>
            <button
              onClick={() => setSelectedScholarship(sch)}
              className="mt-6 px-6 py-3 bg-[#bd5e2b] text-white rounded-full font-semibold hover:bg-[#a04e25] transition"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Background floating shapes */}
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full blur-3xl bg-[#bd5e2b]/30 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full blur-3xl bg-white/10 animate-pulse"></div>

      {/* Modal */}
      {selectedScholarship && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-[#1e1b2e] text-white p-8 rounded-2xl max-w-lg w-full relative shadow-xl">
            {/* Close button */}
            <button
              onClick={() => setSelectedScholarship(null)}
              className="absolute top-4 right-4 text-white text-xl hover:text-[#bd5e2b]"
            >
              ✖
            </button>

            <h3 className="text-3xl font-bold text-[#bd5e2b] mb-4">
              {selectedScholarship.title}
            </h3>
            <p className="mb-4 text-white/80">{selectedScholarship.description}</p>
            <p className="mb-2">
              <span className="font-semibold">Deadline:</span> {selectedScholarship.deadline}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Eligibility:</span> {selectedScholarship.eligibility}
            </p>
            <p className="mb-4">
              <span className="font-semibold">Benefits:</span> {selectedScholarship.benefits}
            </p>

            <button className="mt-4 px-6 py-3 bg-[#bd5e2b] text-white rounded-full font-semibold hover:bg-[#a04e25] transition">
              Apply Now
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
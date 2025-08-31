// components/StudyMaterialsSection.jsx
import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Search } from "lucide-react";

export default function StudyMaterialsSection() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [query, setQuery] = useState("");

  const books = [
    {
      title: "Introduction to Algorithms",
      description: "A comprehensive guide to modern algorithms and their applications.",
      download: "/ebooks/algorithms.pdf",
    },
    {
      title: "Digital Logic Design",
      description: "Fundamentals of logic circuits, design, and hardware implementation.",
      download: "/ebooks/digital_logic.pdf",
    },
    {
      title: "Database Management Systems",
      description: "Covers relational models, SQL, and database design techniques.",
      download: "/ebooks/dbms.pdf",
    },
    {
      title: "Operating System Concepts",
      description: "Detailed explanation of OS principles including processes and memory.",
      download: "/ebooks/os.pdf",
    },
    {
      title: "Computer Networks",
      description: "Understanding layers, protocols, and network security basics.",
      download: "/ebooks/networks.pdf",
    },
    {
      title: "Artificial Intelligence Basics",
      description: "Core AI concepts including search, ML, and neural networks.",
      download: "/ebooks/ai.pdf",
    },
  ];

  // Search filter
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section
      id="study-materials" // ✅ Added ID for menu scroll
      className="relative w-full px-6 py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      {/* Heading */}
      <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-4">
        Study <span className="text-[#bd5e2b]">Materials</span>
      </h2>

      {/* Section Description */}
      <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12 text-lg">
        Explore a wide collection of e-books and resources to support your learning.  
        Search by subject, view details, and download materials instantly.
      </p>

      {/* Search bar */}
      <div id="study-materials-search" className="flex justify-center mb-10">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search books..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-[#bd5e2b]"
          />
        </div>
      </div>

      {/* Books grid */}
      <div id="study-materials-list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredBooks.map((book, idx) => (
          <div
            key={idx}
            className="p-6 bg-gray-800/60 rounded-2xl shadow-lg hover:scale-105 transition-transform cursor-pointer"
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              {book.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4">{book.description}</p>
            <button
              onClick={() => setSelectedBook(book)}
              className="px-4 py-2 rounded-lg bg-[#bd5e2b] text-white hover:bg-[#a14d22] transition"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Popup modal */}
      <Dialog
        open={!!selectedBook}
        onClose={() => setSelectedBook(null)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-lg rounded-2xl bg-gray-900 p-6 shadow-xl">
            <Dialog.Title className="text-2xl font-bold text-white mb-4">
              {selectedBook?.title}
            </Dialog.Title>
            <p className="text-gray-300 mb-6">{selectedBook?.description}</p>
            <a
              href={selectedBook?.download}
              download
              className="px-4 py-2 rounded-lg bg-[#bd5e2b] text-white hover:bg-[#a14d22] transition"
            >
              Download
            </a>
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  );
}
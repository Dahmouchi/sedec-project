/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ChaletGalleryProps {
  gallery: {
    chambres: string[];
    salon: string[];
    exterieure: string[];
  };
}

export default function ChaletGallery({ gallery }: ChaletGalleryProps) {
  const [activeTab, setActiveTab] = useState<"chambres" | "salon" | "exterieure">("chambres");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const categories = ["chambres", "salon", "exterieure"] as const;

  const handlePrevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + gallery[activeTab].length) % gallery[activeTab].length
      );
    }
  };

  const handleNextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % gallery[activeTab].length);
    }
  };

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
  };

  // Allow closing modal with "Esc"
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleCloseModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    
    <div className="w-full mt-6 container my-16 ">
      {/* Title */}
      <div className="w-full flex justify-center my-10 text-center">
        <div className="section-title">
          <h2 className="title text-white">Galerie</h2>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-gray-300 pb-2 mb-4 justify-center items-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`capitalize px-4 py-2 text-sm font-medium rounded-t-lg transition-all ${
              activeTab === cat ? "bg-[#BD9A68] text-white" : "text-gray-900 hover:text-[#BD9A68]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {gallery[activeTab].map((img, i) => (
          <img
            key={i}
            onClick={() => handleImageClick(i)}
            src={img}
            alt={`${activeTab} ${i}`}
            className="rounded-lg object-cover w-full h-40 md:h-56 cursor-pointer hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>

      {/* Modal Viewer */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 puts"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-5 right-5 text-white hover:text-gray-300 z-50"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevImage();
              }}
              className="absolute left-5 text-white hover:text-gray-300 z-50"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            {/* Image */}
            <motion.img
              key={selectedImageIndex}
              src={gallery[activeTab][selectedImageIndex]}
              alt={`Image ${selectedImageIndex + 1}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="max-w-7xl max-h-[90vh] object-contain rounded-lg shadow-lg cursor-auto"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNextImage();
              }}
              className="absolute right-5 text-white hover:text-gray-300 z-50"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

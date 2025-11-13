/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion";

export function SolutionsGallerySection({ translations}: any) {
 const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = carouselRef.current;
    if (!container) return;
    const scrollAmount = container.clientWidth * 0.9;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };
  const solutions = [
    {
      id: "proflex",
      image: "/images/SEDEC-Proflex.jpg",
      title: translations.proflex.title,
      description: translations.proflex.description,
      accentColor: "yellow",
    },
    {
      id: "slc",
      image: "/images/slc.jpeg",
      title: translations.slc.title,
      description: translations.slc.description,
      accentColor: "white",
    },
    {
      id: "design",
      image: "/images/design.jpg",
      title: translations.design.title,
      description: translations.design.description,
      accentColor: "white",
    },
    {
      id: "mob",
      image: "/optimized/charpente/mur1.webp",
      title: translations.mob.title,
      description: translations.mob.description,
      accentColor: "white",
    },
    {
      id: "bureaux",
      image: "/images/sedec-bureau.jpg",
      title: translations.bureaux.title,
      description: translations.bureaux.description,
      accentColor: "white",
    },
  ]

  return (
    <section className="bg-[#262523] py-16 md:py-24 lg:px-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-4">{translations.title}</h2>
            <p className="text-white/80 text-lg">{translations.subtitle}</p>
          </div>
          <button className="bg-[#FDB913] hover:bg-[#FDB913]/90 text-black font-medium px-8 py-3 rounded-none transition-colors flex items-center gap-2 w-fit">
            {translations.cta}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Divider Line */}
        <div className="h-px bg-white/20 mb-12" />

        {/* Solutions Grid - Horizontal Scroll */}
        <div className="relative">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-2 hidden md:flex"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="overflow-x-hidden scroll-smooth pb-4 -mx-4 px-4"
      >
        <motion.div
          className="flex gap-6 min-w-max"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className="w-[300px] md:w-[350px] flex-shrink-0 bg-white/5 p-4 rounded-2xl backdrop-blur-md hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] mb-4 rounded-lg overflow-hidden">
                <Image
                  src={solution.image || "/placeholder.svg"}
                  alt={solution.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="font-semibold text-xl text-white">
                  {solution.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {solution.description}
                </p>
                <button
                  className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                    solution.accentColor === "yellow"
                      ? "text-[#FDB913] hover:text-[#FDB913]/80"
                      : "text-white hover:text-white/80"
                  }`}
                >
                  {translations.learnMore}
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center border ${
                      solution.accentColor === "yellow"
                        ? "border-[#FDB913]"
                        : "border-white"
                    }`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-2 hidden md:flex"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </div>
      </div>
    </section>
  )
}

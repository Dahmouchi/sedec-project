/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"


export function FeaturedProjectsSection({ translations }: any) {

  const projects = [
    {
      id: 1,
      image: "/images/fea1.jpg",
      alt: "Modern two-story wooden building with large windows",
      className: "row-span-2",
    },
    {
      id: 2,
      image: "/images/fea2.jpg",
      alt: "Single-story modular building with rust-colored wood",
      className: "row-span-2",
    },
    {
      id: 3,
      image: "/images/fea3.jpg",
      alt: "Modern dark wooden building on hillside",
      className: "row-span-2",
    },
    {
      id: 4,
      image: "/images/fea4.jpg",
      alt: "Mountain chalet with stone and wood",
      className: "row-span-2",
    },
    {
      id: 5,
      image: "/images/fea5.jpg",
      alt: "Modern wooden building with outdoor furniture",
      className: "row-span-2",
    },
    {
      id: 6,
      image: "/images/sedec-bureau.jpg",
      alt: "Black barn-style building in forest",
      className: "row-span-2",
    },
  ]

  return (
    <section className="py-16 md:py-24 lg:px-16 bg-[#F5F1E8]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#8B4513] mb-4">
              {translations.title}
            </h2>
            <p className="text-[#A0522D] text-base md:text-lg leading-relaxed">{translations.subtitle}</p>
          </div>
           <button className="bg-[#FDB913] hover:bg-[#FDB913]/90 text-black font-medium px-8 py-3 rounded-none transition-colors flex items-center gap-2 w-fit">
            {translations.cta}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-[280px]">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`relative overflow-hidden rounded-lg group cursor-pointer ${project.className}`}
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

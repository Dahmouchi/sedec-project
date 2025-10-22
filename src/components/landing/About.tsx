/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
import { Home, Play } from "lucide-react";

interface HeaderProps {
  translations: {
    label: string;
    title: string;
    cta: string;
    description: string;
  };
}

export function AboutSection({ translations }: HeaderProps) {
  return (
    <section className="relative bg-[#F5F1E8] py-20 md:py-20 overflow-hidden lg:px-16">
      {/* Decorative curved lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,50 Q400,20 800,50 T1600,50"
          stroke="#D4C4B0"
          strokeWidth="1"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M0,150 Q500,120 1000,150 T2000,150"
          stroke="#D4C4B0"
          strokeWidth="1"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M0,250 Q600,220 1200,250 T2400,250"
          stroke="#D4C4B0"
          strokeWidth="1"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M0,350 Q400,380 800,350 T1600,350"
          stroke="#D4C4B0"
          strokeWidth="1"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M0,450 Q500,480 1000,450 T2000,450"
          stroke="#D4C4B0"
          strokeWidth="1"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M0,550 Q600,520 1200,550 T2400,550"
          stroke="#D4C4B0"
          strokeWidth="1"
          fill="none"
          opacity="0.5"
        />
      </svg>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="flex items-center gap-2 text-[#8E3921]">
              <Home className="w-5 h-5" />
              <span className="text-sm font-medium tracking-wider">
                {translations.label}
              </span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#2C2C2C] leading-tight">
              {translations.title}
            </h2>

            <Button
              size="lg"
              style={{
                backgroundImage: "url(/images/background1.jpg)",
              }}
              className="bg-[#8E3921] hover:bg-[#6B4423] text-white border-2 border-white rounded-full px-8 py-6 text-lg font-medium"
            >
              {translations.cta}
            </Button>
          </div>

          {/* Right content - Image with play button */}
          <div className="relative">
            <div className="relative  overflow-hidden shadow-xl">
              <img
                src="/images/Bureau-de-ventes.jpg"
                alt="SEDEC modular wooden building"
                className="w-full h-auto"
              />
              {/* Play button overlay */}
              <button
                className="absolute inset-0 flex items-center justify-center group"
                aria-label="Play video"
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                  <Play className="w-8 h-8 text-[#8E3921] fill-[#8E3921] ml-1" />
                </div>
              </button>
            </div>

            {/* Description text below image */}
            <div className="mt-8 text-[#4A4A4A] leading-relaxed">
              <p>{translations.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

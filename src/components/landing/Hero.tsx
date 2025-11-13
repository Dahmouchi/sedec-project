"use client"

import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

interface HeroFeature {
  number: string
  title: string
  description: string
}

interface HeroProps {
  translations: {
    title: string
    subtitle: string
    highlight: string
    cta: string
    features: HeroFeature[]
  }
}

export function SedecHero({ translations }: HeroProps) {
  return (
    <section className="relative  min-h-screen overflow-hidden">
     <div className=" relative ">
         {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center h-full"
        style={{
          backgroundImage:
            "url(/optimized/Bureau-de-ventes.webp)",
        }}
      >
        <div className="absolute inset-0 bg-black/30 "></div>
      </div>

      {/* Content Container */}
      <div className="relative h-full  mx-auto flex flex-col">
        {/* Hero Text */}
        <div className="flex-1 flex items-center">
          <div className="max-w-4xl lg:ml-20 ml-2 text-center lg:text-left">
           
            <Button
              size="lg"
                style={{
          backgroundImage:
            "url(/optimized/background1.webp)",
        }}
              className="bg-[#8E3921] hover:bg-[#6B4423] text-white border-2 border-white rounded-full px-8 py-6 text-lg font-medium"
            >
              {translations.cta}
            </Button>
          </div>
        </div>

        {/* Bottom Features Section */}
        <div className="lg:pt-16 pt-6 rounded-lg">
            <div className=" grid grid-cols-1 rounded-lg md:grid-cols-2 lg:grid-cols-4 lg:gap-6 gap-2 bg-black/40 backdrop-blur-sm">
          {/* Feature Cards */}
          {translations.features.map((feature, index) => (
            <div key={index} className=" p-6 rounded-lg text-white">
              <div className="text-[#D4A574] text-sm font-medium mb-2">{feature.number}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-white/80 leading-relaxed">{feature.description}</p>
            </div>
          ))}

          {/* Video Thumbnail */}
          <div className="relative lg:h-auto h-[200px] bg-black/40 backdrop-blur-sm rounded-br-lg overflow-hidden group cursor-pointer">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(/optimized/pic1.webp)",
              }}
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
            </div>
            <div className="relative h-full flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 text-[#8E3921] " fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
     </div>
    </section>
  )
}

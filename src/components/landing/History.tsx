"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "1948",
    title: "Démarrage de la production",
    description: "Démarrage de la production sur le site de l'entreprise."
  },
  {
    year: "1960",
    title: "Transformation en S.A.",
    description: "La société SEDEC « Société d'Exploitation des Établissements Carrères - Durisol » devient une S.A. elle contribue activement au développement des infrastructures sociales à travers toutes les régions du Maroc par l'édification de milliers d'écoles, de logements, de dispensaires, de villages miniers, de bases vie pour des grands projets de barrages, d'autoroutes, de ports et bien d'autres bâtiments sortis de ses usines de Témara pour être édifiés là où le besoin se fait sentir."
  },
  {
    year: "1996",
    title: "Innovation - Maison en Bois",
    description: "Lancement du concepte de la maison en bois, une innovation majeure alliant esthétique, résistance et confort."
  },
  {
    year: "2000",
    title: "Première Unité Lamellé-collé",
    description: "Implantation de la première unité de fabrication des charpentes, bois lamellé-collé au Maroc. Une technique à haute performance adaptée aux bâtiments de grandes portées et aux architectures très complexes."
  },
  {
    year: "2008",
    title: "Certification ISO 9001",
    description: "Mise en place de système de certification ISO 9001 qui traduit notre engagement à améliorer la satisfaction de nos clients."
  },
  {
    year: "2013",
    title: "Murs à Ossatures Bois",
    description: "Implantation de la première ligne de fabrication des murs à ossatures bois au Maroc. Une technique innovante qui enrichit les solutions SEDEC proposées."
  },
  {
    year: "2015",
    title: "Modernisation & Expansion",
    description: "Modernisation et augmentation de la capacité de production de la ligne de fabrication des éléments des structures bois lamellé collé. Un investissement important qui permet à la SEDEC de compléter ses solutions structurelles proposées. Mise en place d'une nouvelle unité pour la fabrication de menuiserie aluminium. Cet investissement s'inscrit dans l'enrichissement de l'éventail des finitions proposées."
  }
];

export default function SEDECTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextEvent = () => {
    setActiveIndex((prev) => (prev + 1) % timelineEvents.length);
  };

  const prevEvent = () => {
    setActiveIndex((prev) => (prev - 1 + timelineEvents.length) % timelineEvents.length);
  };

  const goToEvent = (index: number) => {
    setActiveIndex(index);
  };

  const activeEvent = timelineEvents[activeIndex];

  return (
    <div
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/optimized/tree.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-[#262523] z-0" />

      {/* Content */}
      <div className="relative z-10 w-full h-screen flex flex-col justify-center px-6 sm:px-12 max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3 font-merriweather italic">
            L&apos;Histoire de SEDEC
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 font-light font-merriweather ">
            Découvrez notre parcours d&apos;innovation et de développement depuis nos débuts
          </p>
        </div>

        {/* Timeline Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-12">
          {/* Year - Large Display */}
          <div className="lg:col-span-1 flex-col justify-between">
             <div className="text-7xl sm:text-8xl font-bold text-amber-400/80 leading-none font-merriweather italic">
              {activeEvent.year}
            </div>
            <div className="mb-8">
          <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto pb-4 px-3">
            {timelineEvents.map((event, index) => (
              <button
                key={index}
                onClick={() => goToEvent(index)}
                className={`flex flex-col items-center gap-2 transition-all duration-300 flex-shrink-0 group`}
              >
                {/* Year Label */}
                <span
                  className={`text-sm font-semibold transition-colors ${
                    index === activeIndex
                      ? "text-amber-400"
                      : "text-gray-400 group-hover:text-gray-300"
                  }`}
                >
                  {event.year}
                </span>
                {/* Dot */}
                <div
                  className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-amber-400 w-6 sm:w-8 scale-125"
                      : "bg-gray-500 hover:bg-amber-300"
                  }`}
                />
                {/* Line */}
                <div
                  className={`h-8 w-0.5 transition-all duration-300 ${
                    index === activeIndex ? "bg-amber-400" : "bg-gray-600"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
           
          </div>

          {/* Event Description */}
          <div className="lg:col-span-2 space-y-4 h-[250px]">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-serif font-merriweather ">
              {activeEvent.title}
            </h2>
            <p className="text-gray-200 text-base sm:text-lg leading-relaxed font-light font-merriweather">
              {activeEvent.description}
            </p>
          </div>
        </div>

        {/* Timeline Bar with Years */}
        

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between font-merriweather italic">
          <button
            onClick={prevEvent}
            className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/20"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Précédent</span>
          </button>

          {/* Counter */}
          <span className="text-white/60 text-sm sm:text-base">
            {activeIndex + 1} / {timelineEvents.length}
          </span>

          <button
            onClick={nextEvent}
            className="flex items-center gap-2 px-4 sm:px-6 rounded-full py-2 sm:py-3 bg-[#B01A14] hover:bg-amber-600 text-white  transition-all duration-300 font-medium"
          >
            <span className="hidden sm:inline">Suivant</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
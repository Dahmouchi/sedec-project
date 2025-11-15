/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperOptions } from "swiper/types";
import { useRef } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowBigRight } from "lucide-react";

const swiperOptions: SwiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 5,
  spaceBetween: 30,
  direction: "horizontal", // ✅ scrolls left to right
  loop: false, // ✅ stop at the last slide
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 30 },
    575: { slidesPerView: 2, spaceBetween: 30 },
    767: { slidesPerView: 3, spaceBetween: 30 },
    991: { slidesPerView: 4, spaceBetween: 30 },
    1199: { slidesPerView: 5, spaceBetween: 30 },
  },
};

const Roadmap = () => {
  const swiperRef = useRef<any>(null);

  const handleNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  const handlePreviesSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <section className="roadmap-area my-8 lg:my-32">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-title text-center mb-50">
              <span className="sub-title">Notre Parcours</span>
              <h2 className="title">L&apos;Histoire de SEDEC</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-0 relative">
        <div className="flex justify-between items-center mt-6 w-full absolute top-1/2 -translate-y-1/2 px-4 puts lg:px-16">
          <div
            onClick={handlePreviesSlide}
            className="bg-[#BD9A68] rounded-full hover:bg-[#d18316] text-white font-medium py-3 px-6  transition-colors duration-200 flex items-center gap-2"
          >
            <ArrowBigRight className="w-4 h-4 rotate-180" />
          </div>
          <div
            onClick={handleNextSlide}
            className="bg-[#BD9A68] hover:bg-[#d18316] text-white font-medium py-3 px-6 rounded-full transition-colors duration-200 flex items-center gap-2"
          >
            <ArrowBigRight className="w-4 h-4" />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="roadmap-wrap">
            <div className="swiper-container roadmap-active">
              <Swiper
                {...swiperOptions}
                ref={swiperRef}
                className="swiper-wrapper py-10"
                onReachEnd={(swiper) => {
                  swiper.autoplay.stop(); // ✅ stop autoplay at last slide
                }}
              >
                {/* === SLIDES === */}
                <SwiperSlide>
                  <div className="roadmap-item lg:ml-16">
                    <h4 className="title">1948</h4>
                    <div className="roadmap-content">
                      <span className="dot" />
                      <p>
                        Démarrage de la production sur le site de
                        l&apos;entreprise.
                      </p>
                      <span>Début de l&apos;aventure SEDEC</span>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="roadmap-item">
                    <h4 className="title">1960</h4>
                    <div className="roadmap-content">
                      <span className="dot" />
                      <p>
                        La société SEDEC devient une S.A. et contribue
                        activement au développement des infrastructures sociales
                        à travers tout le Maroc.
                      </p>
                      <span>Naissance officielle de SEDEC S.A.</span>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="roadmap-item">
                    <h4 className="title">1996</h4>
                    <div className="roadmap-content">
                      <span className="dot" />
                      <p>
                        Lancement du concept de la maison en bois, une
                        innovation majeure alliant esthétique, résistance et
                        confort.
                      </p>
                      <span>Innovation : Maison en bois</span>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="roadmap-item">
                    <h4 className="title">2000</h4>
                    <div className="roadmap-content">
                      <span className="dot" />
                      <p>
                        Implantation de la première unité de fabrication des
                        charpentes en bois lamellé-collé au Maroc, une technique
                        à haute performance.
                      </p>
                      <span>Première unité lamellé-collé</span>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="roadmap-item">
                    <h4 className="title">2008</h4>
                    <div className="roadmap-content">
                      <span className="dot" />
                      <p>
                        Mise en place du système de certification ISO 9001,
                        traduisant notre engagement à améliorer la satisfaction
                        de nos clients.
                      </p>
                      <span>Certification ISO 9001</span>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="roadmap-item">
                    <h4 className="title">2013</h4>
                    <div className="roadmap-content">
                      <span className="dot" />
                      <p>
                        Implantation de la première ligne de fabrication des
                        murs à ossature bois au Maroc, enrichissant les
                        solutions SEDEC proposées.
                      </p>
                      <span>Première ligne murs ossature bois</span>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="roadmap-item">
                    <h4 className="title">2015</h4>
                    <div className="roadmap-content">
                      <span className="dot" />
                      <p>
                        Modernisation et extension de la production bois
                        lamellé-collé, lancement du modulaire métallique et
                        création d&apos;une unité de menuiserie aluminium.
                      </p>
                      <span>Menuiserie aluminium</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="roadmap-item">
                    <h4 className="title">2023</h4>
                    <div className="roadmap-content">
                      <span className="dot" />
                      <p>
                        Auto Nejma a procédé au rachat de SEDEC, renforçant
                        ainsi sa présence sur le marché et consolidant ses
                        activités à travers une nouvelle stratégie de
                        développement.
                      </p>
                      <span>Rachat de SEDEC par Auto Nejma</span>
                    </div>
                  </div>
                </SwiperSlide>
                 <SwiperSlide>
                  <div className="roadmap-item">
                    <h4 className="title">2025</h4>
                    <div className="roadmap-content">
                      <span className="dot" />
                      <p>
                        L&apos;entreprise lance une nouvelle activité dédiée au modulaire métallique.
                      </p>
                      <span>Introduction de l&apos;activité de modulaire métallique</span>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="roadmap-item"></div>
                </SwiperSlide>
              </Swiper>

              {/* Next Slide Button */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;

"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperOptions } from "swiper/types";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiperOptions: SwiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 5,
  spaceBetween: 30,
  direction: "horizontal", // ✅ scrolls left to right
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
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
  return (
    <section className="roadmap-area section-py-140">
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

      <div className="row g-0">
        <div className="col-lg-12">
          <div className="roadmap-wrap">
            <div className="swiper-container roadmap-active">
                           

              <Swiper
                {...swiperOptions}
                className="swiper-wrapper py-10"
                onReachEnd={(swiper) => {
                  swiper.autoplay.stop(); // ✅ stop autoplay at last slide
                }}
              >
                {/* === SLIDES === */}
                <SwiperSlide>
                  <div className="roadmap-item ml-16">
                    <h4 className="title">1948</h4>
                    <div className="roadmap-content">
                      <span className="dot" />
                      <p>
                        Démarrage de la production sur le site de l&apos;entreprise.
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
                        La société SEDEC devient une S.A. et contribue activement
                        au développement des infrastructures sociales à travers
                        tout le Maroc.
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
                          charpentes en bois lamellé-collé au Maroc, une
                          technique à haute performance adaptée aux grandes
                          portées et aux architectures complexes.
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
                          traduisant notre engagement à améliorer la
                          satisfaction de nos clients.
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
                          Modernisation et augmentation de la capacité de
                          production des structures bois lamellé-collé. Mise en
                          place d&apos;une nouvelle unité de menuiserie aluminium,
                          élargissant la gamme de finitions proposées.
                        </p>
                        <span>Modernisation & menuiserie aluminium</span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="roadmap-item">
                     
                    </div>
                  </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;

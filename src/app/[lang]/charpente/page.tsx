/* eslint-disable @next/next/no-img-element */
"use client"
import Layout from "@/components/layouts/Layout";
import Project3 from "@/components/sections/Project3";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Footprints } from "lucide-react";

const Charpente = () => {
  const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    loop: true,
  };
  return (
    <div>
      <Layout headerStyle={7}>
        <section className="banner-area-fivecharpente banner-bg-fourcharpente max-h-[85vh] mb-16">
          <div className="">
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-10">
                <div className="banner-content">
                  <h1
                    className="title wow  fadeInUp  text-white text-center"
                    data-wow-delay=".2s"
                  >
                    <span className="text-2xl lg:text-6xl">
                     Performance structurelle et
                      élégance naturelle.
                    </span>
                  </h1>
                   <div className="text-center text-white">
                  <h2 className="text-3xl text-white font-serif font-bold mb-2">
                    Charpente
                  </h2>
                </div>
                </div>
              </div>
            </div>
          </div>

          <div className="banner-scroll-down">
            <Link href="#contact" className="section-link">
              <span />
              <span />
              <span />
            </Link>
          </div>
        </section>

        {/* SECTION 1 — Projects Showcase */}
        <section className="project-area project-style-three py-16">
          <div className="container">
            <div className="row">
              <div className="col-xl-5">
                <div className="section-title mb-50 text-center md:text-left">
                  <span className="sub-title">Nos réalisations</span>
                  <h2 className="title">
                    Découvrez nos projets de charpente bois lamellée-collée
                  </h2>
                  <Link href="/galerie?category=all" className="btn transparent-btn">
                    <div className="btn_m">
                      <div className="btn_c">
                        <div className="btn_t1">Voir tous les projets</div>
                        <div className="btn_t2">Voir tous les projets</div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-xl-7 lg:block hidden">
                <div className="swiper-container project-active">
                  <Swiper {...swiperOptions} className="swiper-wrapper">
                    <SwiperSlide>
                      <div className="project-item">
                        <div className="project-thumb">
                          <Link href="/project/1">
                            <img
                              className="w-auto h-[45vh]"
                              src="/images/reel/Nos-metiers.jpg"
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="project-content">
                          <h3 className="title">
                            <div>Salle sportive en BLC</div>
                          </h3>
                          <span>Casablanca, Maroc</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="project-item">
                        <div className="project-thumb">
                          <Link href="/project/1">
                            <img
                              className="w-auto h-[45vh]"
                              src="/images/charpente2.jpg"
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="project-content">
                          <h3 className="title">
                            <div >
                              Hangar industriel bois
                            </div>
                          </h3>
                          <span>Tanger, Maroc</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="project-item">
                        <div className="project-thumb">
                          <Link href="/project/1">
                            <img
                              className="w-auto h-[45vh]"
                              src="/images/charpente3.jpg"
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="project-content">
                          <h3 className="title">
                            <div >
                              Structure architecturale BLC
                            </div>
                          </h3>
                          <span>Marrakech, Maroc</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="project-item">
                        <div className="project-thumb">
                          <Link href="/project/1">
                            <img
                              className="w-auto h-[45vh]"
                              src="/images/Durisol.jpg"
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="project-content">
                          <h3 className="title">
                            <Link href="/project/1">
                              Complexe résidentiel bois
                            </Link>
                          </h3>
                          <span>Rabat, Maroc</span>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
             <div className="w-full lg:hidden">
                <div className="swiper-container project-active">
                  <Swiper {...swiperOptions} className="swiper-wrapper">
                    <SwiperSlide>
                      <div className="project-item">
                        <div className="project-thumb">
                          <Link href="/project/1">
                            <img
                              className="w-auto h-[35vh]"
                              src="/images/reel/Nos-metiers.jpg"
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="project-content">
                          <h3 className="title">
                            <div>Salle sportive en BLC</div>
                          </h3>
                          <span>Casablanca, Maroc</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="project-item">
                        <div className="project-thumb">
                          <Link href="/project/1">
                            <img
                              className="w-auto h-[35vh]"
                              src="/images/charpente2.jpg"
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="project-content">
                          <h3 className="title">
                            <div >
                              Hangar industriel bois
                            </div>
                          </h3>
                          <span>Tanger, Maroc</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="project-item">
                        <div className="project-thumb">
                          <Link href="/project/1">
                            <img
                              className="w-auto h-[35vh]"
                              src="/images/charpente3.jpg"
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="project-content">
                          <h3 className="title">
                            <div >
                              Structure architecturale BLC
                            </div>
                          </h3>
                          <span>Marrakech, Maroc</span>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="project-item">
                        <div className="project-thumb">
                          <Link href="/project/1">
                            <img
                              className="w-auto h-[35vh]"
                              src="/images/Durisol.jpg"
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="project-content">
                          <h3 className="title">
                            <Link href="/project/1">
                              Complexe résidentiel bois
                            </Link>
                          </h3>
                          <span>Rabat, Maroc</span>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
          </div>
        </section>

        {/* SECTION 2 — Services */}
        <section className="services-area-two section-pt-140">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="services-img-two text-center">
                  <img src="/images/charpente.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="services-content-two">
                  <div className="section-title mb-50">
                    <span className="sub-title">Nos expertises</span>
                    <h2 className="title">
                      Visualisation, performance & esthétique bois
                    </h2>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — Detailed Projects */}
        <section className="project-area-five section-pt-140 section-pb-lg-40">
          <div className="container">
            <div className="project-item-wrap">
              <div className="project-item-two">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="project-thumb">
                      <Link href="/project/1">
                        <img
                          src="/images/charpente3.jpg"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="project-content-two">
                      <div className="section-title">
                        
                        <h3 className="title">
                          <Link href="/project/1">
                            Salle multisports <br /> en charpente
                            lamellée-collée
                          </Link>
                        </h3>
                      </div>
                      <div className="project-list">
                        <ul className="list-wrap">
                          <li>
                            <div className="icon">
                              <i className="flaticon-018-rescale" />
                            </div>
                            <div className="content">
                              <p>
                                Portée <br /> Jusqu&apos;à 40 m sans appui
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="icon">
                              <i className="flaticon-009-crane-truck" />
                            </div>
                            <div className="content">
                              <p>
                                État <br /> Réalisé en 2024
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="icon">
                              <i className="flaticon-008-money-bag" />
                            </div>
                            <div className="content">
                              <p>
                                Matériaux <br /> BLC certifié PEFC
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="icon">
                              <i className="flaticon-017-apartment" />
                            </div>
                            <div className="content">
                              <p>
                                Type <br /> Structure bois architecturale
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>

              {/* You can duplicate this next item for 2-3 projects with same structure */}
              <div className="project-item-two">
                <div className="row align-items-center">
                   <div className="col-lg-6">
                    <div className="project-thumb">
                      <Link href="/project/1">
                        <img
                          src="/images/reel/place-citoyens-ste-adele-photo05.jpg"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="project-content-two">
                      <div className="section-title">
                       
                        <h2 className="title">
                          <Link href="/project/2">
                            Pavillon éco-bois <br /> à ossature lamellée-collée
                          </Link>
                        </h2>
                      </div>
                      <div className="project-list">
                        <ul className="list-wrap">
                          <li>
                            <div className="icon">
                              <i className="flaticon-018-rescale" />
                            </div>
                            <div className="content">
                              <p>
                                Surface <br /> 1200 m²
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="icon">
                              <i className="flaticon-009-crane-truck" />
                            </div>
                            <div className="content">
                              <p>
                                État <br /> En cours de construction
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="icon">
                              <i className="flaticon-008-money-bag" />
                            </div>
                            <div className="content">
                              <p>
                                Certification <br /> Bois durable FSC
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="icon">
                              <i className="flaticon-017-apartment" />
                            </div>
                            <div className="content">
                              <p>
                                Type <br /> Construction résidentielle
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center lg:mt-36">
                <img
                  src="/images/charpente.jpg"
                  alt="Passerelle"
                  className="w-full rounded-xl shadow-lg"
                />
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <h3 className="text-3xl font-serif text-[#202020]">
                      Charpente bois (BLC)

                    </h3>
                  </div>
                  <p className="text-[#797978] leading-relaxed text-lg">
                    Experts en charpente lamellée-collée (BLC / Glulam), nous réalisons des structures bois de grande portée, adaptées aux bâtiments industriels, sportifs, ou résidentiels.
Nos charpentes associent résistance, légèreté et esthétisme, tout en respectant les normes de qualité les plus exigeantes.
                  </p>
                  <ul className="space-y-2 text-[#797978]">
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-[#BD9A68] rounded-full"></span>
                      Robustesse garantie
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-[#BD9A68] rounded-full"></span>
                      Design esthétique
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-[#BD9A68] rounded-full"></span>
                      Savoir-faire technique
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center lg:mt-36">
  <img
                  src="/images/reel/charpente-ossature-metallique.jpg"
    alt="Charpente métallique"
    className="w-full rounded-xl shadow-lg"
  />
  <div className="space-y-4">
    <div className="flex items-center gap-3">
      <h3 className="text-3xl font-serif text-[#202020]">
        Charpente métallique
      </h3>
    </div>
    <p className="text-[#797978] leading-relaxed text-lg">
      Spécialistes de la conception et de la réalisation de charpentes métalliques, 
      nous fabriquons des structures robustes et durables pour tous types de bâtiments 
      — industriels, commerciaux ou publics.  
      Nos charpentes allient précision, performance et adaptabilité pour répondre aux exigences 
      les plus strictes en matière de solidité et de design architectural.
    </p>
    <ul className="space-y-2 text-[#797978]">
      <li className="flex items-center gap-3">
        <span className="w-2 h-2 bg-[#BD9A68] rounded-full"></span>
        Résistance et durabilité exceptionnelles
      </li>
      <li className="flex items-center gap-3">
        <span className="w-2 h-2 bg-[#BD9A68] rounded-full"></span>
        Précision d&apos;ingénierie et finitions soignées
      </li>
      <li className="flex items-center gap-3">
        <span className="w-2 h-2 bg-[#BD9A68] rounded-full"></span>
        Adaptée à tout type de projet architectural
      </li>
    </ul>
  </div>
</div>

              </div>
            </div>
          </div>
          
        </section>
  
      </Layout>
    </div>
  );
};

export default Charpente;

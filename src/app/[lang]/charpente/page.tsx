/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";
import Layout from "@/components/layouts/Layout";
import Project3 from "@/components/sections/Project3";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Footprints } from "lucide-react";
import { usePathname } from "next/navigation";
const images = [
  {
    src: "/optimized/charpente/charpente2.webp",
    category: "Charpente",
  },

  {
    src: "/optimized/charpente/charpente4.webp",
    category: "Charpente",
  },
  {
    src: "/optimized/charpente/charpente5.webp",
    category: "Charpente",
  },
];
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
  const pathname = usePathname();

  return (
    <div>
      <Layout headerStyle={7}>
        <section className="banner-area-fivecharpente banner-bg-fourcharpente h-[45vh] lg:h-[85vh] mb-16 px-4">
          <div className="w-full h-full flex items-center justify-center">
            <video
              key={pathname}
              className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src="https://pub-afc9974860af4d5aab3484c7d13caccf.r2.dev/video/charpente.mov"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-10">
                <div className="banner-content">
                  <h1
                    className="title wow  fadeInUp  text-white text-center"
                    data-wow-delay=".2s"
                  >
                    <span className="text-2xl lg:text-6xl">
                      Performance structurelle et élégance naturelle.
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
            <div className="">
              <div className="">
                <div className="section-title mb-50 text-center md:text-left">
                  <span className="sub-title">Nos réalisations</span>
                  <h2 className="title">
                    Découvrez nos projets de charpente bois lamellée-collée
                  </h2>
                </div>
              </div>
              <div className=" lg:block hidden">
                <div className=" w-full">
                  <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-16 py-10">
                    {/* Project 1 */}
                    <div className="project-item">
                      <div className="project-thumb">
                        <Link href="#">
                          <img
                            className="w-full h-[65vh] object-cover rounded-2xl shadow-md"
                            src="/optimized/salle-Omni.webp"
                            alt="Salle sportive en BLC Oujda"
                          />
                        </Link>
                      </div>
                      <div className="project-content mt-4">
                        <h3 className="text-xl font-semibold">
                          Salle sportive en BLC
                        </h3>
                        <span className="text-gray-500">Oujda, Maroc</span>
                      </div>
                    </div>

                    {/* Project 2 */}
                    <div className="project-item">
                      <div className="project-thumb">
                        <Link href="#">
                          <img
                            className="w-full h-[65vh] object-cover rounded-2xl shadow-md"
                            src="/optimized/DSC00056.webp"
                            alt="Gare Maritime Guinée"
                          />
                        </Link>
                      </div>
                      <div className="project-content mt-4">
                        <h3 className="text-xl font-semibold">
                          <Link href="#">Gare Maritime Guinée</Link>
                        </h3>
                        <span className="text-gray-500">Guinée</span>
                      </div>
                    </div>

                    {/* Project 3 */}
                    <div className="project-item">
                      <div className="project-thumb">
                        <Link href="#">
                          <img
                            className="w-full h-[65vh] object-cover rounded-2xl shadow-md"
                            src="/optimized/salle-Fes.webp"
                            alt="Salle sportive en BLC Fes"
                          />
                        </Link>
                      </div>
                      <div className="project-content mt-4">
                        <h3 className="text-xl font-semibold">
                          Salle sportive en BLC
                        </h3>
                        <span className="text-gray-500">Fes, Maroc</span>
                      </div>
                    </div>

                    {/* Project 4 */}
                    <div className="project-item">
                      <div className="project-thumb">
                        <Link href="#">
                          <img
                            className="w-full h-[65vh] object-cover rounded-2xl shadow-md"
                            src="/optimized/Amphie.webp"
                            alt="Amphi université ibn zohr agadir"
                          />
                        </Link>
                      </div>
                      <div className="project-content mt-4">
                        <h3 className="text-xl font-semibold">
                          Amphi université Ibn Zohr Agadir
                        </h3>
                        <span className="text-gray-500">Agadir, Maroc</span>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
            <div className="w-full lg:hidden">
              <div className="swiper-container project-active">
                <Swiper {...swiperOptions} className="swiper-wrapper">
                  <SwiperSlide>
                    <div className="project-item">
                      <div className="project-thumb">
                        <Link href="#">
                          <img
                            className="w-auto h-[35vh]"
                            src="/optimized/salle-Omni.webp"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="project-content">
                        <h3 className="title">
                          <div>Salle sportive en BLC</div>
                        </h3>
                        <span>Oujda, Maroc</span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="project-item">
                      <div className="project-thumb">
                        <Link href="#">
                          <img
                            className="w-auto h-[35vh]"
                            src="/optimized/DSC00056.webp"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="project-content">
                        <h3 className="title">
                          <Link href="#">Gare Maritime Guinée</Link>
                        </h3>
                        <span>Guinée</span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="project-item">
                      <div className="project-thumb">
                        <Link href="#">
                          <img
                            className="w-auto h-[35vh]"
                            src="/optimized/salle-Fes.webp"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="project-content">
                        <h3 className="title">
                          <div>Salle sportive en BLC</div>
                        </h3>
                        <span>Fes, Maroc</span>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="project-item">
                      <div className="project-thumb">
                        <Link href="#">
                          <img
                            className="w-auto h-[35vh]"
                            src="/optimized/Amphie.webp"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="project-content">
                        <h3 className="title">
                          <div>Amphi université ibn zohr agadir</div>
                        </h3>
                        <span>Agadir, Maroc</span>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="w-full flex items-center justify-center">
              <Link
                href="/galerie?category=all"
                className="btn transparent-btn"
              >
                <div className="btn_m">
                  <div className="btn_c">
                    <div className="btn_t1">Voir tous les projets</div>
                    <div className="btn_t2">Voir tous les projets</div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 container py-4">
          {images.map((img: any, i: any) => (
            <img
              key={i}
              src={img.src}
              alt={`${img.category} ${i}`}
              className="rounded-lg object-cover w-full h-40 md:h-56 cursor-pointer hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
        {/* SECTION 2 — Services */}
        <section className="services-area-two section-pt-140">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="services-img-two text-center">
                  <img src="/optimized/charpente/B.A5.webp" alt="" />
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
                      <Link href="#">
                        <img src="/optimized/charpente/B.A4.webp" alt="" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="project-content-two">
                      <div className="section-title">
                        <h3 className="title">
                            Hangar à Oujda
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
                                Portée <br /> Jusqu&apos;à 25x100 m sans appui
                              </p>
                            </div>
                          </li>
                          <li>
                            <div className="icon">
                              <i className="flaticon-009-crane-truck" />
                            </div>
                            <div className="content">
                              <p>
                                État <br /> Réalisé en 2006
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
                                Type <br /> Hangar
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
                      <Link href="#">
                        <img
                          src="/optimized/charpente/charpenteP.webp"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="project-content-two">
                      <div className="section-title">
                        <h2 className="title">
                            Salle Assazag
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
                                Surface <br /> +200 m²
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
                                Type <br /> Salle de Sport
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
                    src="/optimized/charpente/charpente2.webp"
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
                      Experts en charpente lamellée-collée (BLC / Glulam), nous
                      réalisons des structures bois de grande portée, adaptées
                      aux bâtiments industriels, sportifs, ou résidentiels. Nos
                      charpentes associent résistance, légèreté et esthétisme,
                      tout en respectant les normes de qualité les
                      plus exigeantes.
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
                
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default Charpente;

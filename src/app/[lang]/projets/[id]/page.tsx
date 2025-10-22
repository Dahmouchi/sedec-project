/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import projectData from "@/lib/project.json";
import { useParams } from "next/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Layout from "@/components/layouts/Layout";
import Banner4 from "@/components/sections/Banner4";
import Video2 from "@/components/sections/Video2";
import { chalets } from "@/lib/projects";
import ChaletGallery from "@/components/elements/ChaletGallery";
import Newsletter from "@/components/sections/Newsletter";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: { slidesPerView: 1 },
    575: { slidesPerView: 2 },
    767: { slidesPerView: 2 },
    991: { slidesPerView: 2 },
    1199: { slidesPerView: 3 },
    1350: { slidesPerView: 3 },
  },
};

const BlogDetails: React.FC = () => {
  const [project, setProject] = useState<any | null>(null);

  const params = useParams();
  const id = params?.id; // <- récupère l'id depuis l'URL

  useEffect(() => {
    if (id) {
      const found = chalets.find((p) => String(p.id) === String(id)) as
        | any
        | undefined;
      if (found) setProject(found);
    }
  }, [id]);

  return (
    <Layout headerStyle={7}>
      <section className="banner-area-five1 banner-bg-four1 max-h-screen">
        <div className="">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="banner-content">
                <h1
                  className="title wow  fadeInUp  text-white text-center"
                  data-wow-delay=".2s"
                >
                  <span className="text-2xl lg:text-6xl">
                    Redéfinir l&apos;art de vivre nordique entre authenticité et
                    modernité
                  </span>
                </h1>
              </div>
             <div className="w-full flex items-center justify-center">
                 <Link
                 download={"/DEVIS-PHASE-01-AHA-CONCEPT.pdf"}
                href="overview"
                className="btn transparent-btn wow fadeInUp border-white text-white"
                data-wow-delay=".4s"
              >
                <div className="btn_m">
                  <div className="btn_c">
                    <div className="btn_t1">Télécharger la brochure</div>
                    <div className="btn_t2 ">Télécharger la brochure</div>
                  </div>
                </div>
              </Link>
             </div>
            </div>
          </div>
        </div>
        <div className="banner-scroll-down">
          <Link href="#matterport" className="section-link">
            <span />
            <span />
            <span />
          </Link>
        </div>
      </section>
      <Video2 />
      {project && (
        <>
          {/* project-details-area */}
          <section className="project-details-area">
            <div className="container">
              <div className="project-details-top">
                <div className="row align-items-end">
                  <div className="col-lg-6">
                    <div className="project-details-title">
                      <span>{project.location}</span>
                      <h2 className="title">{project.title}</h2>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="right-side">
                      <p>{project.description || ""}</p>
                    </div>
                  </div>
                </div>
              </div>

              <section className="features-area">
                <div className="container">
                  <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                    {project.features.map((feacher: any, index: any) => {
                      const Icon = feacher.icon;

                      return (
                        <div className="" key={index}>
                          <div className="features-item">
                            <div className="feature-icon">
                              <Icon className="w-10 h-10 text-white mt-1" />
                            </div>
                            <div className="feature-content">
                              <h2 className="title">{feacher.title}</h2>
                              <p>{feacher.detail}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            </div>

            <ChaletGallery gallery={project.gallery} />
             {/* plan-area */}
                        <div className="plan-area section-py-140">
                            <div className="container">
                             <div className="w-full flex justify-center my-10 text-center ">
                            <div className="section-title">
                                <h2 className="title">Brochure complète du Chalet Scandinave</h2>
                                {/*<Link href="project" className="btn transparent-btn">
                                    <div className="btn_m">
                                        <div className="btn_c">
                                            <div className="btn_t1">D</div>
                                            <div className="btn_t2">Explore all</div>
                                        </div>
                                    </div>
                                </Link>*/}
                            </div>
                        </div>
                                            <div className=" flex items-center justify-center w-full " id="myTabContent">
                                            <img src="/images/maquette.png" className="w-1/2 h-auto" alt="" />
                                            </div>
                                        <div className="file-wrap">
                                            <ul className="list-wrap">
                                                <li><Link href={"#"} download={"/DEVIS-PHASE-01-AHA-CONCEPT.pdf"}><i className="flaticon-010-pdf" />Télécharger La Brochure</Link></li>
                                            </ul>
                                        </div>

                            </div>
                        </div>
            <Newsletter />
          </section>
        </>
      )}
    </Layout>
  );
};

export default BlogDetails;

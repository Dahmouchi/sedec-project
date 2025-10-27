/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Layout from "@/components/layouts/Layout";

import { chalets } from "@/lib/projects";
import ChaletGallery from "@/components/elements/ChaletGallery";
import Newsletter from "@/components/sections/Newsletter";
import { useMemo } from "react";
import { Play } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const BlogDetails: React.FC = () => {
  const [project, setProject] = useState<any | null>(null);
  const [open, setOpen] = useState(false);

  const modelId = "cb3PdBNtPt9"; // Replace with your actual Matterport model ID

  const mpUrl = useMemo(() => {
    const base = "https://my.matterport.com/show/";
    const params = new URLSearchParams({
      m: modelId,
      play: "1",
      brand: "0",
      qs: "1",
      title: "0",
      dh: "1",
    }).toString();
    return `${base}?${params}`;
  }, [modelId]);

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
      <section className={`max-h-screen ${project?.hero}`}>
        <div className="">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="banner-content">
                <h1
                  className="title wow  fadeInUp  text-white text-center"
                  data-wow-delay=".2s"
                >
                  <span className="text-2xl lg:text-6xl">
                    {project?.subtitle}
                  </span>
                </h1>
                <div className="text-center text-white">
                  <h2 className="text-3xl text-white font-serif font-bold mb-2">
                    {project?.title}
                  </h2>
                </div>
              </div>
              <div className="w-full flex items-center justify-center mt-4">
                <Link
                  download={project?.pdf}
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
      {project?.visit &&
      <>
        <div className="video-area-two" id="matterport">
          {" "}
          <div className="container">
            {" "}
            <div className="row">
              {" "}
              <div className="col-12">
                {" "}
                <div className={`${project?.bg3d}`}>
                   <div className="absolute bottom-10 right-50% bg-black/20 lg:px-20 px-8 flex flex-col items-center justify-center py-2 rounded-full">
                <img src="/images/logo.png" alt=""  className="lg:w-24 w-16 h-auto "/>
                  <span className=" text-white text-center text-3xl py-2 font-serif">{project?.title}</span>
                  <h4 className=" text-white text-center">Visite virtuelle </h4>
                </div>

                  <div
                    onClick={() => setOpen(true)}
                    className="flex  items-center justify-center border-white border-4 hover:bg-amber-700 cursor-pointer text-white bg-amber-800/50  rounded-full w-16 h-16 transition-all duration-300"
                  >
                    <Play size={32} />
                  </div>
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>

        {/* Dialog for Matterport Viewer */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className=" !w-[90vw] !max-w-[1200px]  h-[80vh] p-0 overflow-hidden">
            <iframe
              src={mpUrl}
              allowFullScreen
              className="w-full h-full border-0"
            />
          </DialogContent>
        </Dialog>
      </>}
      {project && (
        <>
          {/* project-details-area */}
          <section className="project-details-area">
            <div className="container">
              <div className="project-details-top">
                <div className="grid lg:grid-cols-2 grid-cols-1">
                  <div className="w-full">
                    <div className="project-details-title">
                      
                     <span className=" text-black text-center lg:text-7xl text-4xl py-2 font-serif">{project?.title}</span>

                     <div className="">
                        <h1 className="font-light w-full text-gray-200">
                          À partir de {" "}
                          <span className="ted text-amber-400">{project?.price}</span>
                     
                        </h1>
                        
                      </div>
                    </div>
                    
                  </div>
                  
                  <div className="">
                    <div className="">
                       <h3>{project.location}</h3>
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
                            <div className="feature-content lg:px-8">
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
                    <h2 className="title">
                      Brochure complète de la Villa Scandinavian
                    </h2>
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
                <div
                  className=" flex items-center justify-center w-full "
                  id="myTabContent"
                >
                  <img
                    src={`${project?.maquette}`}
                    className="w-1/2 h-auto"
                    alt=""
                  />
                </div>
                <div className="file-wrap">
                  <ul className="list-wrap">
                    <li>
                      <Link
                        href={"#"}
                       download={project?.pdf}
                      >
                        <i className="flaticon-010-pdf" />
                        Télécharger La Brochure
                      </Link>
                    </li>
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

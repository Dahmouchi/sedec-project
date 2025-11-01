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
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";

interface ChaletGalleryProps {
  gallery: {
    chambres: string[];
    salon: string[];
    exterieure: string[];
  };
}
const BlogDetails: React.FC = () => {
  const [project, setProject] = useState<any | null>(null);
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "chambres" | "salon" | "exterieure"
  >("chambres");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const categories = ["chambres", "salon", "exterieure"] as const;

  const handlePrevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + project.gallery[activeTab].length) %
          project.gallery[activeTab].length
      );
    }
  };

  const handleNextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex + 1) % project.gallery[activeTab].length
      );
    }
  };

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
  };

  // Allow closing modal with "Esc"
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleCloseModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
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
    <div className="relative">
      <Layout headerStyle={7}>
        <section className={`max-h-screen  ${project?.hero}`}>
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
                  <a
                    href={project?.pdf || "/brochure.pdf"} // e.g. /brochure.pdf
                    download
                    target="_blank"
                    className="btn transparent-btn wow fadeInUp border-white text-white"
                    data-wow-delay=".4s"
                  >
                    <div className="btn_m">
                      <div className="btn_c">
                        <div className="btn_t1">Télécharger la brochure</div>
                        <div className="btn_t2">Télécharger la brochure</div>
                      </div>
                    </div>
                  </a>
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
        {project?.visit && (
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
                        <img
                          src="/images/logo.png"
                          alt=""
                          className="lg:w-24 w-16 h-auto "
                        />
                        <h4 className=" text-white text-center text-3xl py-2 font-serif">
                          {project?.title}
                        </h4>
                        <h4 className=" text-white text-center">
                          Visite virtuelle{" "}
                        </h4>
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
          </>
        )}
        {project && (
          <>
            {/* project-details-area */}
            <section className="project-details-area">
              <div className="container">
                <div className="project-details-top">
                  <div className="grid lg:grid-cols-2 grid-cols-1">
                    <div className="w-full">
                      <div className="project-details-title">
                        <span className=" text-black text-center lg:text-7xl text-4xl py-2 font-serif">
                          {project?.title}
                        </span>

                        <div className="">
                          <h3 className="font-light w-full text-gray-200">
                            À partir de{" "}
                            <span className="ted text-amber-400">
                              {project?.price}
                            </span>
                          </h3>
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
              <div className="bg-[#272727] py-4 ">
                <div className="w-full mt-6 container my-16 ">
                  {/* Title */}
                  <div className="w-full flex justify-center my-10 text-center">
                    <div className="section-title">
                      <h2 className="title text-white">Galerie</h2>
                    </div>
                  </div>

                  {/* Tabs */}
                  <div className="flex gap-4 border-b border-gray-300 pb-2 mb-4 justify-center items-center">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveTab(cat)}
                        className={`capitalize px-4 py-2 text-sm font-medium rounded-t-lg transition-all ${
                          activeTab === cat
                            ? "bg-[#BD9A68] text-white"
                            : "text-gray-900 hover:text-[#BD9A68]"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  {/* Gallery Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {project.gallery[activeTab].map((img: any, i: any) => (
                      <img
                        key={i}
                        onClick={() => handleImageClick(i)}
                        src={img}
                        alt={`${activeTab} ${i}`}
                        className="rounded-lg object-cover w-full h-40 md:h-56 cursor-pointer hover:scale-105 transition-transform duration-300"
                      />
                    ))}
                  </div>

                  {/* Modal Viewer */}
                  <AnimatePresence>
                    {selectedImageIndex !== null && (
                      <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 puts"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleCloseModal}
                      >
                        {/* Close Button */}
                        <button
                          onClick={handleCloseModal}
                          className="absolute top-5 right-5 text-white hover:text-gray-300 z-50"
                        >
                          <X className="w-8 h-8" />
                        </button>

                        {/* Prev Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePrevImage();
                          }}
                          className="absolute left-5 text-white hover:text-gray-300 z-50"
                        >
                          <ChevronLeft className="w-10 h-10" />
                        </button>

                        {/* Image */}
                        <motion.img
                          key={selectedImageIndex}
                          src={project.gallery[activeTab][selectedImageIndex]}
                          alt={`Image ${selectedImageIndex + 1}`}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.3 }}
                          className="max-w-7xl max-h-[90vh] object-contain rounded-lg shadow-lg cursor-auto"
                          onClick={(e) => e.stopPropagation()}
                        />

                        {/* Next Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleNextImage();
                          }}
                          className="absolute right-5 text-white hover:text-gray-300 z-50"
                        >
                          <ChevronRight className="w-10 h-10" />
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
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
                      <a
                    href={project?.pdf || "/brochure.pdf"} // e.g. /brochure.pdf
                    download
                    target="_blank"
                    data-wow-delay=".4s"
                  >
                          <i className="flaticon-010-pdf" />
                          Télécharger La Brochure
                        </a>
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
    </div>
  );
};

export default BlogDetails;

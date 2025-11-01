/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Newsletter from "@/components/sections/Newsletter";
import Layout from "@/components/layouts/Layout";
import { ArrowRight } from "lucide-react";
import { bat } from "@/lib/bat";

const Pergola = () => {
  const [project, setProject] = useState<any | null>(null);
  const params = useParams();

  const id = params?.id; // <- récupère l'id depuis l'URL

  useEffect(() => {
    if (id) {
      const found = bat.find((p) => String(p.id) === String(id)) as
        | any
        | undefined;
      if (found) setProject(found);
    }
  }, [id]);
  return (
    <div>
      <Layout headerStyle={7}>
        <section className={`max-h-96 ${project?.hero}`}>
          <div className="">
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-10">
                <div className="banner-content">
                  <h1
                    className=" wow  fadeInUp  text-white text-center"
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
              </div>
            </div>
          </div>
          <div className="banner-scroll-down mt-8">
            <Link href="#about" className="section-link">
              <span />
              <span />
              <span />
            </Link>
          </div>
        </section>
        <section
          id="about"
          className="about-area mt-24"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-10">
                <div className="section-title text-center mb-35">
                  <span className="sub-title">{project?.title}</span>
                  <h2 className="title">
                    {project?.subtitle}
                  </h2>
                </div>
                <div className="about-content text-center">
                  <p>
                   {project?.description}
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="features-area">
                <div className="container">
                  <div className="grid grid-cols-1 lg:grid-cols-3 w-full">
                    {project?.features?.map((feacher: any, index: any) => {
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
              <section className="py-24 bg-[#202020]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#BD9A68] font-semibold tracking-widest uppercase text-sm mb-4">Galerie</p>
            <h2 className="text-5xl md:text-6xl font-serif text-white mb-6">Nos Réalisations</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {project?.gallery?.map((img:any, idx:any) => (
              <div
                key={idx}
                className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition group"
              >
                <img
                  src={img || "/placeholder.svg"}
                  alt={`Projet ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition"></div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href={"/galerie"} className="bg-[#BD9A68] text-white w-fit px-8 py-4 rounded-lg hover:bg-[#A68A5A] transition flex items-center gap-2 font-semibold mx-auto">
              Voir la Galerie Complète <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
        <Newsletter />
      </Layout>
    </div>
  );
};

export default Pergola;

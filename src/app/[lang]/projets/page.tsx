/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import projectData from "@/lib/project.json";
import ProjectFilter from "@/components/elements/ProjectFilter";
import Layout from "@/components/layouts/Layout";
import { usePathname } from "next/navigation";
export default function Project() {
  const pathname = usePathname();

  return (
    <>
      <Layout headerStyle={7}>
        <div
          className="w-full mb-28 lg:h-[85vh] h-[45vh] bg-cover bg-center  relative"
          
        >
         
          <div className="w-full h-full bg-black/40 flex items-center justify-center relative">
           <video
            key={pathname}
            className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://pub-060265d5b1f645428fcbed1375c4fe21.r2.dev/booking/Hero_cropped.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
            <div className="title text-white text-7xl font-serif text-center">
              Nos Villas en Bois
            </div>
          </div>
        </div>
        <ProjectFilter col="col-lg-6 col-md-6" />
      </Layout>
    </>
  );
}

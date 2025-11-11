/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import projectData from "@/lib/project.json";
import BatFilter from "@/components/elements/BatFilter";
import Layout from "@/components/layouts/Layout";
import { usePathname } from "next/navigation";
export default function Project() {
  const pathname = usePathname();

  return (
    <>
      <Layout headerStyle={7}>
        <div className="w-full mb-28 lg:h-[80vh] h-[50vh] bg-cover bg-center relative">
          <video
            key={pathname}
            className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://pub-afc9974860af4d5aab3484c7d13caccf.r2.dev/video/alum.mov"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="w-full h-full bg-black/30 flex items-center justify-center">
            <div className="title text-white text-7xl font-serif text-center">
              Bâtiments modulaires
            </div>
          </div>
        </div>
        <BatFilter col="col-lg-6 col-md-6" />
      </Layout>
    </>
  );
}

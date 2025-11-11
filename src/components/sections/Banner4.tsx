"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function HeroSection() {
  const pathname = usePathname();

  return (
    <section className="banner-area-five banner-bg-four relative max-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        key={pathname}
        className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://pub-afc9974860af4d5aab3484c7d13caccf.r2.dev/video/overview.MOV"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>


      <div className="">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="banner-content text-center">
            
              <h1
                className=" wow fadeInUp text-white lg:pt-24 px-8"
                data-wow-delay=".2s"
              ><span className="text-4xl lg:text-7xl">Ensemble, construisons vos projets en bois et matériaux durables
                
                  
                </span>
              </h1>
      {/* Overlay (optional to improve text contrast) 

              <Link
                href="#about"
                className="btn transparent-btn wow fadeInUp lg:block hidden"
                data-wow-delay=".4s"
              >
                <div className="btn_m">
                  <div className="btn_c">
                    <div className="btn_t1">Découvrez nous</div>
                    <div className="btn_t2">Découvrez nous</div>
                  </div>
                </div>
              </Link>*/}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="banner-scroll-down absolute bottom-20 ">
        <Link href="#matterport" className="section-link">
          <span />
          <span />
          <span />
        </Link>
      </div>
    </section>
  );
}

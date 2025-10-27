"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function HeroSection() {
  const pathname = usePathname();

  return (
    <section className="banner-area-five banner-bg-four relative max-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        key={pathname} // 👈 this forces remount when route changes
        className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/test.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="">
          {" "}
          <div className="row justify-content-center">
            {" "}
            <div className="col-xl-8 col-lg-10">
              {" "}
              <div className="banner-content">
                {" "}
                <h1
                  className="title wow fadeInUp text-white text-center"
                  data-wow-delay=".2s"
                >
                  <span className="text-2xl lg:text-6xl">
                    Ensemble, construisons vos projets en bois et matériaux
                    durables
                  </span>
                </h1>{" "}
                <Link
                  href="#about"
                  className="btn transparent-btn wow fadeInUp lg:block hidden"
                  data-wow-delay=".4s"
                >
                  {" "}
                  <div className="btn_m">
                    {" "}
                    <div className="btn_c">
                      {" "}
                      <div className="btn_t1">Découvrez nous</div>{" "}
                      <div className="btn_t2">Découvrez nous</div>{" "}
                    </div>{" "}
                  </div>{" "}
                </Link>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>

      {/* Scroll Down Indicator */}
      <div className="banner-scroll-down absolute bottom-10 left-1/2 -translate-x-1/2">
        <Link href="#matterport" className="section-link">
          <span />
          <span />
          <span />
        </Link>
      </div>
    </section>
  );
}

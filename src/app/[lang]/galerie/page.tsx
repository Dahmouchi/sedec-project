"use client";

import Gallery from "@/components/Gallery";
import Layout from "@/components/layouts/Layout";
import Link from "next/link";

const images = [

  {
    src: "/optimized/charpente/charpente2.webp",
    category: "Charpente",
  },
  {
    src: "/optimized/charpente/charpente3.webp",
    category: "Charpente",
  },
  {
    src: "/optimized/charpente/charpente4.webp",
    category: "Charpente",
  },

 
  {
    src: "/optimized/autre/atelier6.webp",
    aspect_ratio: 4 / 3,
    category: "Autre",
  },

  {
    src: "/optimized/charpente/charpente5.webp",
    category: "Charpente",
  },
  {
    src: "/optimized/charpente/charpente6.webp",
    category: "Charpente",
  },
  {
    src: "/optimized/charpente/charpente7.webp",
    category: "Charpente",
  },
  {
    src: "/optimized/chalets/scandinave/reel/atelier1.webp",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "/optimized/chalets/scandinave/reel/atelier2.webp",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "/optimized/chalets/scandinave/reel/atelier3.webp",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "/optimized/chalets/scandinave/reel/atelier4.webp",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "/optimized/autre/atelier7.webp",
    aspect_ratio: 4 / 3,
    category: "Autre",
  },
  {
    src: "/optimized/autre/atelier8.webp",
    aspect_ratio: 4 / 3,
    category: "Autre",
  },
 
  {
    src: "/optimized/autre/atelier10.webp",
    aspect_ratio: 4 / 3,
    category: "Autre",
  },
 
  {
    src: "/optimized/autre/atelier12.webp",
    aspect_ratio: 4 / 3,
    category: "Autre",
  },
  {
    src: "/optimized/autre/atelier13.webp",
    aspect_ratio: 4 / 3,
    category: "Autre",
  },
  {
    src: "/optimized/autre/atelier14.webp",
    aspect_ratio: 4 / 3,
    category: "Autre",
  },
 
  {
    src: "/optimized/autre/atelier16.webp",
    aspect_ratio: 4 / 3,
    category: "Autre",
  },
  
  {
    src: "/optimized/chalets/scandinave/reel/atelier6.webp",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "/optimized/chalets/scandinave/reel/atelier7.webp",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "/optimized/chalets/scandinave/reel/atelier8.webp",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "/optimized/chalets/scandinave/reel/atelier9.webp",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "/optimized/chalets/scandinave/reel/atelier10.webp",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "/optimized/chalets/scandinave/reel/atelier11.webp",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "/optimized/chalets/scandinave/reel/atelier12.webp",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "/optimized/chalets/scandinave/reel/atelier13.webp",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "/optimized/chalets/scandinave/reel/atelier14.webp",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "/optimized/chalets/scandinave/reel/atelier15.webp",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "/optimized/chalets/scandinave/reel/atelier16.webp",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "/optimized/chalets/scandinave/reel/atelier17.webp",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "/optimized/chalets/scandinave/reel/atelier18.webp",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "/optimized/chalets/scandinave/reel/atelier19.webp",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "/optimized/chalets/scandinave/reel/atelier20.webp",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "/optimized/chalets/scandinave/reel/atelier21.webp",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "/optimized/chalets/scandinave/reel/atelier22.webp",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "/optimized/chalets/scandinave/reel/atelier23.webp",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "/optimized/chalets/scandinave/reel/atelier24.webp",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "/optimized/chalets/scandinave/reel/atelier25.webp",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  
  {
    src: "/optimized/charpente2.webp",
    aspect_ratio: 16 / 9,
    category: "Charpente",
  },
  { src: "/optimized/pergola/pergola(4).webp", aspect_ratio: 9 / 16, category: "Pergola" },
  { src: "/optimized/5.webp", aspect_ratio: 16 / 9, category: "Villa-Scandinav" },
  { src: "/optimized/bg.webp", aspect_ratio: 9 / 16, category: "Villa-Scandinave" },
  {
    src: "/optimized/reel/r1.webp",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "/optimized/reel/r2.webp",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "/optimized/reel/r3.webp",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "/optimized/reel/r4.webp",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "/optimized/reel/r5.webp",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "/optimized/reel/r6.webp",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "/optimized/reel/r7.webp",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "/optimized/reel/r8.webp",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "/optimized/pergola/pergola(1).webp",
    aspect_ratio: 4 / 3,
    category: "Pergola",
  },
  {
    src: "/optimized/reel/r9.webp",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "/optimized/reel/r10.webp",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "/optimized/charpente3.webp",
    aspect_ratio: 9 / 16,
    category: "Charpente",
  },
  {
    src: "/optimized/pergola/pergola(2).webp",
    aspect_ratio: 21 / 9,
    category: "Pergola",
  },
  {
    src: "/optimized/scondinave.webp",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  
  { src: "/optimized/pergola/pergola(3).webp", aspect_ratio: 4 / 3, category: "Pergola" },

  { src: "/optimized/pergola/pergola(5).webp", aspect_ratio: 4 / 3, category: "Pergola" },
  { src: "/optimized/pergola/pergola(6).webp", aspect_ratio: 4 / 3, category: "Pergola" },
    { src: "/optimized/pergola/pergola(7).webp", aspect_ratio: 4 / 3, category: "Pergola" },

      { src: "/optimized/pergola/pergola(8).webp", aspect_ratio: 4 / 3, category: "Pergola" },

        { src: "/optimized/pergola/pergola(9).webp", aspect_ratio: 4 / 3, category: "Pergola" },

  {
    src: "/optimized/reel/Bureau-1.webp",
    aspect_ratio: 4 / 3,
    category: "Modulaire métalique",
  },

  {
    src: "/optimized/merc/img171.webp",
    aspect_ratio: 4 / 3,
    category: "Modulaire métallique",
  },
  {
    src: "/optimized/merc/img176.webp",
    aspect_ratio: 4 / 3,
    category: "Modulaire métallique",
  },
  {
    src: "/optimized/merc/img43.webp",
    aspect_ratio: 4 / 3,
    category: "Modulaire métallique",
  },
  {
    src: "/optimized/merc/img28.webp",
    aspect_ratio: 4 / 3,
    category: "Modulaire métallique",
  },
  {
    src: "/optimized/merc/img25.webp",
    aspect_ratio: 4 / 3,
    category: "Modulaire métallique",
  },
  {
    src: "/optimized/merc/img31.webp",
    aspect_ratio: 4 / 3,
    category: "Modulaire métallique",
  },
  {
    src: "/optimized/merc/img37.webp",
    aspect_ratio: 4 / 3,
    category: "Modulaire métallique",
  },
  {
    src: "/optimized/merc/img40.webp",
    aspect_ratio: 4 / 3,
    category: "Modulaire métallique",
  },

  {
    src: "/optimized/merc/img86.webp",
    aspect_ratio: 4 / 3,
    category: "Modulaire métallique",
  },

  {
    src: "/optimized/merc/img101.webp",
    aspect_ratio: 4 / 3,
    category: "Modulaire métallique",
  },
  {
    src: "/optimized/merc/img106.webp",
    aspect_ratio: 4 / 3,
    category: "Modulaire métallique",
  },
  {
    src: "/optimized/merc/img111.webp",
    aspect_ratio: 4 / 3,
    category: "Modulaire métallique",
  },
  {
    src: "/optimized/merc/img116.webp",
    aspect_ratio: 4 / 3,
    category: "Modulaire métallique",
  },
  {
    src: "/optimized/merc/img121.webp",
    aspect_ratio: 4 / 3,
    category: "Modulaire métallique",
  },
  {
    src: "/optimized/merc/img126.webp",
    aspect_ratio: 4 / 3,
    category: "Modulaire métallique",
  },
];

const categories = [
  "Charpente",
  "Pergola",
  "Villa-Scandinave",
  "Modulaire métallique",
];

export default function GalleryPage() {
  const selectedCategory = "all";
  console.log(selectedCategory);
  const handleCategoryChange = (category: string) => {
    console.log(category);
  };

  return (
    <Layout headerStyle={7}>
      <section className="banner-area-fivecharpente py-11 banner-bg-fourcharpente h-[45vh] lg:h-[85vh] mb-16">
        <div className="w-full h-full flex items-center justify-center">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="banner-content">
                <h1
                  className="title wow fadeInUp text-white text-center"
                  data-wow-delay=".2s"
                >
                  <span className="text-2xl lg:text-6xl">
                    Quand le bois devient une œuvre d&apos;architecture.
                  </span>
                </h1>
                <div className="text-center text-white">
                  <h2 className="text-3xl text-white font-serif font-bold mb-2">
                    Galerie
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-scroll-down">
          <Link href="#galerie" className="section-link">
            <span /> <span /> <span />
          </Link>
        </div>
      </section>
      <section className="pb-16 container mx-auto" id="galerie">
        <Gallery
          images={images}
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
      </section>
    </Layout>
  );
}

"use client";

import Gallery from "@/components/Gallery";
import Layout from "@/components/layouts/Layout";
import Link from "next/link";

const images = [
  {
    src: "https://pub-afc9974860af4d5aab3484c7d13caccf.r2.dev/charpente/charpente1.jpg",
    category: "Charpente",
  },
  {
    src: "https://pub-afc9974860af4d5aab3484c7d13caccf.r2.dev/charpente/charpente2.jpg",
    category: "Charpente",
  },
  {
    src: "https://pub-afc9974860af4d5aab3484c7d13caccf.r2.dev/charpente/charpente3.jpg",
    category: "Charpente",
  },
  {
    src: "https://pub-afc9974860af4d5aab3484c7d13caccf.r2.dev/charpente/charpente4.jpg",
    category: "Charpente",
  },
  {
    src: "https://pub-afc9974860af4d5aab3484c7d13caccf.r2.dev/autre/atelier1.jpg",
    aspect_ratio: 4 / 3,
    category: "Autre",
  },
 
  {
    src: "https://pub-afc9974860af4d5aab3484c7d13caccf.r2.dev/autre/atelier6.jpg",
    aspect_ratio: 4 / 3,
    category: "Autre",
  },

  {
    src: "https://pub-afc9974860af4d5aab3484c7d13caccf.r2.dev/charpente/charpente5.jpg",
    category: "Charpente",
  },
  {
    src: "https://pub-afc9974860af4d5aab3484c7d13caccf.r2.dev/charpente/charpente6.jpg",
    category: "Charpente",
  },
  {
    src: "https://pub-afc9974860af4d5aab3484c7d13caccf.r2.dev/charpente/charpente7.jpg",
    category: "Charpente",
  },
  {
    src: "https://pub-afc9974860af4d5aab3484c7d13caccf.r2.dev/scandinave/atelier1.jpg",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "https://pub-afc9974860af4d5aab3484c7d13caccf.r2.dev/scandinave/atelier2.jpg",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "https://pub-afc9974860af4d5aab3484c7d13caccf.r2.dev/scandinave/atelier3.jpg",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "https://pub-afc9974860af4d5aab3484c7d13caccf.r2.dev/scandinave/atelier4.jpg",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "https://pub-afc9974860af4d5aab3484c7d13caccf.r2.dev/autre/atelier7.jpg",
    aspect_ratio: 4 / 3,
    category: "Autre",
  },
  {
    src: "https://pub-afc9974860af4d5aab3484c7d13caccf.r2.dev/autre/atelier8.jpg",
    aspect_ratio: 4 / 3,
    category: "Autre",
  },
 
  {
    src: "https://pub-afc9974860af4d5aab3484c7d13caccf.r2.dev/autre/atelier10.jpg",
    aspect_ratio: 4 / 3,
    category: "Autre",
  },
 
  {
    src: "https://pub-afc9974860af4d5aab3484c7d13caccf.r2.dev/autre/atelier12.jpg",
    aspect_ratio: 4 / 3,
    category: "Autre",
  },
  {
    src: "https://pub-afc9974860af4d5aab3484c7d13caccf.r2.dev/autre/atelier13.jpg",
    aspect_ratio: 4 / 3,
    category: "Autre",
  },
  {
    src: "https://pub-afc9974860af4d5aab3484c7d13caccf.r2.dev/autre/atelier14.jpg",
    aspect_ratio: 4 / 3,
    category: "Autre",
  },
 
  {
    src: "https://pub-afc9974860af4d5aab3484c7d13caccf.r2.dev/autre/atelier16.jpg",
    aspect_ratio: 4 / 3,
    category: "Autre",
  },
  {
    src: "https://pub-afc9974860af4d5aab3484c7d13caccf.r2.dev/autre/atelier17.jpg",
    aspect_ratio: 4 / 3,
    category: "Autre",
  },
  {
    src: "https://pub-afc9974860af4d5aab3484c7d13caccf.r2.dev/autre/atelier18.jpg",
    aspect_ratio: 4 / 3,
    category: "Autre",
  },

  {
    src: "https://pub-afc9974860af4d5aab3484c7d13caccf.r2.dev/scandinave/atelier5.jpg",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "https://pub-afc9974860af4d5aab3484c7d13caccf.r2.dev/scandinave/atelier6.jpg",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "https://pub-afc9974860af4d5aab3484c7d13caccf.r2.dev/scandinave/atelier7.jpg",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "https://pub-afc9974860af4d5aab3484c7d13caccf.r2.dev/scandinave/atelier8.jpg",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "https://pub-afc9974860af4d5aab3484c7d13caccf.r2.dev/scandinave/atelier9.jpg",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "https://pub-afc9974860af4d5aab3484c7d13caccf.r2.dev/scandinave/atelier10.jpg",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "https://pub-afc9974860af4d5aab3484c7d13caccf.r2.dev/scandinave/atelier11.jpg",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "https://pub-afc9974860af4d5aab3484c7d13caccf.r2.dev/scandinave/atelier12.jpg",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "https://pub-afc9974860af4d5aab3484c7d13caccf.r2.dev/scandinave/atelier13.jpg",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "https://pub-afc9974860af4d5aab3484c7d13caccf.r2.dev/scandinave/atelier14.jpg",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "https://pub-afc9974860af4d5aab3484c7d13caccf.r2.dev/scandinave/atelier15.jpg",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "https://pub-afc9974860af4d5aab3484c7d13caccf.r2.dev/scandinave/atelier16.jpg",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "https://pub-afc9974860af4d5aab3484c7d13caccf.r2.dev/scandinave/atelier17.jpg",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "https://pub-afc9974860af4d5aab3484c7d13caccf.r2.dev/scandinave/atelier18.jpg",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "https://pub-afc9974860af4d5aab3484c7d13caccf.r2.dev/scandinave/atelier19.jpg",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "https://pub-afc9974860af4d5aab3484c7d13caccf.r2.dev/scandinave/atelier20.jpg",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "https://pub-afc9974860af4d5aab3484c7d13caccf.r2.dev/scandinave/atelier21.jpg",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "https://pub-afc9974860af4d5aab3484c7d13caccf.r2.dev/scandinave/atelier22.jpg",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "https://pub-afc9974860af4d5aab3484c7d13caccf.r2.dev/scandinave/atelier23.jpg",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "https://pub-afc9974860af4d5aab3484c7d13caccf.r2.dev/scandinave/atelier24.jpg",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "https://pub-afc9974860af4d5aab3484c7d13caccf.r2.dev/scandinave/atelier25.jpg",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "https://pub-afc9974860af4d5aab3484c7d13caccf.r2.dev/scandinave/atelier26.jpg",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  { src: "/images/charpente.jpg", category: "Charpente" },
  {
    src: "/images/charpente2.jpg",
    aspect_ratio: 16 / 9,
    category: "Charpente",
  },
  { src: "/images/matterport.jpg", aspect_ratio: 4 / 3, category: "Charpente" },
  { src: "/images/4.jpg", aspect_ratio: 9 / 16, category: "Pergola" },
  { src: "/images/5.jpg", aspect_ratio: 16 / 9, category: "Villa-Scandinav" },
  { src: "/images/bg.jpg", aspect_ratio: 9 / 16, category: "Villa-Scandinave" },
  {
    src: "/images/reel/r1.jpg",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "/images/reel/r2.jpg",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "/images/reel/r3.jpg",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "/images/reel/r4.jpg",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "/images/reel/r5.jpg",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "/images/reel/r6.jpg",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "/images/reel/r7.jpg",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "/images/reel/r8.jpg",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "/images/reel/pergola3.png",
    aspect_ratio: 4 / 3,
    category: "Pergola",
  },
  {
    src: "/images/reel/r9.jpg",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "/images/reel/r10.jpg",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "/images/charpente3.jpg",
    aspect_ratio: 9 / 16,
    category: "Charpente",
  },
  {
    src: "/images/SEDEC-Proflex.jpg",
    aspect_ratio: 21 / 9,
    category: "Pergola",
  },
  {
    src: "/images/scondinave.jpg",
    aspect_ratio: 4 / 3,
    category: "Villa-Scandinave",
  },
  {
    src: "/images/Mots-du-president1.jpg",
    aspect_ratio: 16 / 9,
    category: "Charpente",
  },
  { src: "/images/reel/assila.jpg", aspect_ratio: 4 / 3, category: "Pergola" },

  { src: "/images/reel/GUERITE.jpg", aspect_ratio: 4 / 3, category: "Pergola" },
  {
    src: "/images/reel/Bureau-1.jpg",
    aspect_ratio: 4 / 3,
    category: "Modulaire métalique",
  },
  {
    src: "/images/merc/img166.jpg",
    aspect_ratio: 4 / 3,
    category: "Modulaire métallique",
  },
  {
    src: "/images/merc/img171.jpg",
    aspect_ratio: 4 / 3,
    category: "Modulaire métallique",
  },
  {
    src: "/images/merc/img176.jpg",
    aspect_ratio: 4 / 3,
    category: "Modulaire métallique",
  },
  {
    src: "/images/merc/img43.jpg",
    aspect_ratio: 4 / 3,
    category: "Modulaire métallique",
  },
  {
    src: "/images/merc/img28.jpg",
    aspect_ratio: 4 / 3,
    category: "Modulaire métallique",
  },
  {
    src: "/images/merc/img25.jpg",
    aspect_ratio: 4 / 3,
    category: "Modulaire métallique",
  },
  {
    src: "/images/merc/img31.jpg",
    aspect_ratio: 4 / 3,
    category: "Modulaire métallique",
  },
  {
    src: "/images/merc/img37.jpg",
    aspect_ratio: 4 / 3,
    category: "Modulaire métallique",
  },
  {
    src: "/images/merc/img40.jpg",
    aspect_ratio: 4 / 3,
    category: "Modulaire métallique",
  },
  {
    src: "/images/merc/img71.jpg",
    aspect_ratio: 4 / 3,
    category: "Modulaire métallique",
  },
  {
    src: "/images/merc/img76.jpg",
    aspect_ratio: 4 / 3,
    category: "Modulaire métallique",
  },
  {
    src: "/images/merc/img81.jpg",
    aspect_ratio: 4 / 3,
    category: "Modulaire métallique",
  },
  {
    src: "/images/merc/img86.jpg",
    aspect_ratio: 4 / 3,
    category: "Modulaire métallique",
  },
  {
    src: "/images/merc/img91.jpg",
    aspect_ratio: 4 / 3,
    category: "Modulaire métallique",
  },
  {
    src: "/images/merc/img96.jpg",
    aspect_ratio: 4 / 3,
    category: "Modulaire métallique",
  },
  {
    src: "/images/merc/img101.jpg",
    aspect_ratio: 4 / 3,
    category: "Modulaire métallique",
  },
  {
    src: "/images/merc/img106.jpg",
    aspect_ratio: 4 / 3,
    category: "Modulaire métallique",
  },
  {
    src: "/images/merc/img111.jpg",
    aspect_ratio: 4 / 3,
    category: "Modulaire métallique",
  },
  {
    src: "/images/merc/img116.jpg",
    aspect_ratio: 4 / 3,
    category: "Modulaire métallique",
  },
  {
    src: "/images/merc/img121.jpg",
    aspect_ratio: 4 / 3,
    category: "Modulaire métallique",
  },
  {
    src: "/images/merc/img126.jpg",
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
      <section className="banner-area-fivecharpente banner-bg-fourcharpente max-h-[85vh] mb-16">
        <div className="">
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

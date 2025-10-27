"use client"

import { useSearchParams, useRouter } from "next/navigation"
import Gallery from "@/components/Gallery"
import Layout from "@/components/layouts/Layout"
import Link from "next/link"

const images = [
  { src: "/images/charpente.jpg", category: "charpente" },
  { src: "/images/charpente2.jpg", aspect_ratio: 16 / 9, category: "charpente" },
  { src: "/images/matterport.jpg", aspect_ratio: 4 / 3, category: "charpente" },
  { src: "/images/4.jpg", aspect_ratio: 9 / 16, category: "pergola" },
  { src: "/images/5.jpg", aspect_ratio: 16 / 9, category: "pergola" },
  { src: "/images/bg.jpg", aspect_ratio: 9 / 16, category: "villa-scandinave" },
  { src: "/images/reel/r1.jpg", aspect_ratio: 4 / 3, category: "pergola" },
  { src: "/images/reel/r2.jpg", aspect_ratio: 4 / 3, category: "charpente" },
  { src: "/images/reel/r3.jpg", aspect_ratio: 4 / 3, category: "villa-scandinave" },
  { src: "/images/reel/r4.jpg", aspect_ratio: 4 / 3, category: "pergola" },
  { src: "/images/reel/r5.jpg", aspect_ratio: 4 / 3, category: "charpente" },
  { src: "/images/reel/r6.jpg", aspect_ratio: 4 / 3, category: "villa-scandinave" },
  { src: "/images/reel/r7.jpg", aspect_ratio: 4 / 3, category: "pergola" },
  { src: "/images/reel/r8.jpg", aspect_ratio: 4 / 3, category: "charpente" },
  { src: "/images/reel/r9.jpg", aspect_ratio: 4 / 3, category: "villa-scandinave" },
  { src: "/images/reel/r10.jpg", aspect_ratio: 4 / 3, category: "pergola" },
  { src: "/images/charpente3.jpg", aspect_ratio: 9 / 16, category: "charpente" },
  { src: "/images/slc.jpeg", aspect_ratio: 16 / 9, category: "villa-scandinave" },
  { src: "/images/SEDEC-Proflex.jpg", aspect_ratio: 21 / 9, category: "pergola" },
  { src: "/images/scondinave.jpg", aspect_ratio: 4 / 3, category: "villa-scandinave" },
  { src: "/images/Mots-du-president1.jpg", aspect_ratio: 16 / 9, category: "charpente" },
  { src: "/images/reel/assila.jpg", aspect_ratio: 4 / 3, category: "pergola" },
  { src: "/images/reel/ch.jpeg", aspect_ratio: 16 / 9, category: "charpente" },
  { src: "/images/reel/qui-somme-nous.jpg", aspect_ratio: 16 / 9, category: "villa-scandinave" },
  { src: "/images/reel/villa-étage-1.jpg", aspect_ratio: 16 / 9, category: "villa-scandinave" },
  { src: "/images/reel/panel2.jpg", aspect_ratio: 4 / 3, category: "pergola" },
  { src: "/images/reel/Actualite.jpg", aspect_ratio: 4 / 3, category: "charpente" },
  { src: "/images/reel/GUERITE.jpg", aspect_ratio: 4 / 3, category: "pergola" },
  { src: "/images/reel/Nos-metiers.jpg", aspect_ratio: 4 / 3, category: "villa-scandinave" },
  { src: "/images/reel/Bureau-1.jpg", aspect_ratio: 4 / 3, category: "charpente" },
]

const categories = ["charpente", "pergola", "villa-scandinave"]

export default function GalleryPage() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const selectedCategory = searchParams.get("category") || "all"
  console.log(selectedCategory)
  const handleCategoryChange = (category: string) => {
     console.log(category)
    if (category === "all") {
      router.push("/galerie")
    } else {
      router.push(`/galerie?category=${category}`)
    }
  }

  return (
    <Layout headerStyle={7}>
      <section className="banner-area-fivecharpente banner-bg-fourcharpente max-h-[30vh] mb-16">
        <div className="">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="banner-content">
                <h1 className="title wow fadeInUp text-white text-center" data-wow-delay=".2s">
                  <span className="text-2xl lg:text-6xl">Quand le bois devient une œuvre d&apos;architecture.</span>
                </h1>
                <div className="text-center text-white">
                  <h2 className="text-3xl text-white font-serif font-bold mb-2">Galerie</h2>
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
  )
}

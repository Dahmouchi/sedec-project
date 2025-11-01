/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/layouts/Layout";
import Newsletter from "@/components/sections/Newsletter";
import Roadmap from "@/components/sections/Roadmap";
import Services from "@/components/sections/Services";
import Link from "next/link";
export default function Mission() {
  return (
    <>
      <Layout headerStyle={7}>
        {/* breadcrumb-area */}
        <section className="banner-area-five2 banner-bg-four2  max-h-[85vh] mb-16">
          <div className="">
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-10">
                <div className="banner-content">
                  <h1
                    className="title wow  fadeInUp  text-white text-center"
                    data-wow-delay=".2s"
                  >
                    <span className="text-2xl lg:text-6xl">
                      SEDEC : une histoire, des valeurs, des engagements
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="banner-scroll-down">
            <Link href="#about" className="section-link">
              <span />
              <span />
              <span />
            </Link>
          </div>
        </section>
        <section id="about" className="about-area ">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-10">
                <div className="section-title text-center mb-35">
                  <span className="sub-title">Qui sommes-nous</span>
                  <h2 className="title">
                    Plus de 60 ans de leadership dans la construction en bois
                  </h2>
                </div>
                <div className="about-content text-center">
                  <p>
                    Créée en 1948, la Société d&apos;Exploitation des
                    Établissements Carrères-Durisol (SEDEC) est une société
                    anonyme spécialisée dans la construction de bâtiments
                    préfabriqués à ossature bois et la fabrication de charpentes
                    en bois lamellé-collé ArabOMarocherche. SEDEC a participé
                    activement au développement des infrastructures à travers
                    tout le Maroc par l&apos;édification de milliers
                    d&apos;écoles,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* breadcrumb-area-end */}
        {/* mission-area */}

        {/* mission-area-end */}
        {/* vision-area */}
        <section className="vision-area  ">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 order-0 order-lg-2">
                <div className="vision-img text-center">
                  <img src="/images/m.jpg" alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="mt-8">
                  <div className="section-title">
                    <h2 className="title">Mot du PDG</h2>
                  </div>
                  <p>
                    Depuis sa création, SEDEC n&apos;a cessé de promouvoir la
                    construction à ossature bois au Maroc, elle s&apos;est
                    distinguée par ses multiples solutions de constructions
                    adaptées, rapides et respectueuses de l&apos;environnement.
                    Au fil des années nous avons acquis une grande expertise et
                    nous avons modernisé nos différents systèmes de production,
                    ce qui nous positionne aujourd&apos;hui en tant que leader
                    du secteur de la construction bois sur le marché marocain.
                    <br />
                    Cette position de pionnier n&apos;a jamais été notre
                    principal objectif. Nos efforts sont orientés
                    essentiellement vers l&apos;innovation et la satisfaction de
                    nos clients. Nous sommes convaincus que sans leurs
                    contributions, SEDEC n&apos;aurait jamais pu connaître une
                    histoire aussi riche et exceptionnelle. C&apos;est la raison
                    pour laquelle nous tenons à les remercier pour leur
                    confiance, et nous nous engageons à être toujours à la
                    hauteur de leurs exigences et leurs attentes.
                  </p>
                  <h5>
                    <span className="font-bold">Abdellatif HAKAM</span> <br />
                    <span className="underline">
                      {" "}
                      Président Directeur Général
                    </span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* vision-area-end */}
        <Roadmap />
        <Services />
        <Newsletter />
        {/* testimonial-area */}
      </Layout>
    </>
  );
}

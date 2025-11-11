/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className="services-area section ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div className="section-title text-center mb-55">
                <span className="sub-title">Ce qu&apos;on fait</span>
                <h2 className="title">Nos Solutions</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="services-item">
                <div className=" my-4 flex items-center justify-center">
                   <Link href="/batiments-modulaires/durisol">
                    <div className="w-52 h-52 rounded-full bg-amber-400 bg-center bg-cover" style={{backgroundImage:"url(/images/Durisol.jpg)"}}></div>
                  </Link>
                </div>
                <div className="services-content">
                  <h2 className="title">
                    <Link href="/batiments-modulaires/durisol">Durisol / Ciment de Bois</Link>
                  </h2>
                  <p>
                    Le durisol est un matériau innovant à base de bois
                    minéralisé et de béton. Il combine isolation thermique,
                    résistance et écologie, idéal pour les bâtiments durables.
                    Une solution moderne pour une construction responsable.
                  </p>
                  <Link href="batiments-modulaires/durisol" className="text-btn">
                    En savoir plus
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="services-item">
                <div className=" my-4 flex items-center justify-center">
                  <Link href="/charpente">
                    <div className="w-52 h-52 rounded-full bg-amber-400 bg-center bg-cover" style={{backgroundImage:"url(https://pub-afc9974860af4d5aab3484c7d13caccf.r2.dev/charpente/charpente2.jpg)"}}></div>
                  </Link>
                </div>
                <div className="services-content">
                  <h2 className="title">
                    <Link href="/charpente">Charpente</Link>
                  </h2>
                  <p>
                    Experts en charpente lamellée-collée (BLC / Glulam), nous
                    réalisons des structures bois de grande portée, adaptées aux
                    bâtiments industriels, sportifs, ou résidentiels. Nos
                    charpentes associent résistance, légèreté et esthétisme,
                    tout en respectant les normes de qualité les
                    plus exigeantes.
                  </p>
                  <Link href="/charpente" className="text-btn">
                    En savoir plus
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="services-item">
                <div className=" my-4 flex items-center justify-center">
                   <Link href="/batiments-modulaires/mur-ossature-bois">
                    <div className="w-52 h-52 rounded-full bg-amber-400 bg-center bg-cover" style={{backgroundImage:"url(/images/Mob.jpg)"}}></div>
                  </Link>
                </div>
                <div className="services-content">
                  <h2 className="title">
                    <Link href="/batiments-modulaires/mur-ossature-bois">Mob</Link>
                  </h2>
                  <p>
                    une remarquable technologie d&apos;assemblage caractérisée
                    par une très bonne isolation thermique et phonique, qui
                    permet une grande flexibilité d&apos;usage et une
                    adaptabilité performante pour les tous type de projets.
                  </p>
                  <Link href="/batiments-modulaires/mur-ossature-bois" className="text-btn">
                    En savoir plus
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Services;

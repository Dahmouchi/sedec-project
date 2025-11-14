import Link from "next/link"


const About=()=> {
    return (
        <>
            <section id="about" className="about-area section-pt-135 section-pb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                            <div className="section-title text-center mb-35">
                                <span className="sub-title">Qui sommes-nous</span>
                                <h2 className="title">Plus de 70 ans de leadership dans la construction en bois</h2>
                            </div>
                            <div className="about-content text-center">
                                <p>
                                    Créée en 1948, la Société d&apos;Exploitation des Établissements Carrères-Durisol (SEDEC) est une société anonyme spécialisée dans la construction de bâtiments préfabriqués à Ossature bois, modulaire métallique et fabrication de charpentes en bois lamellé-collé ArabOMarocherche. SEDEC a participé activement au développement des infrastructures à travers tout le Maroc par l&apos;édification de milliers d&apos;écoles, 
                                </p>
                                <Link href="/a-propos" className="btn transparent-btn">
                                    <div className="btn_m">
                                        <div className="btn_c">
                                            <div className="btn_t1">Voir plus</div>
                                            <div className="btn_t2">Voir plus</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default About;   

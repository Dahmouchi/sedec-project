/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

const Project4=()=> {
    return (
        <>
            <section className="project-area project-style-four pt-16 project-pb-70">
                 <div className="w-full flex justify-center mb-10 text-center">
                            <div className="section-title">
                                <span className="sub-title">Nos Villas</span>
                                <h2 className="title">Découvrez nos oeuvres</h2>
                                {/*<Link href="project" className="btn transparent-btn">
                                    <div className="btn_m">
                                        <div className="btn_c">
                                            <div className="btn_t1">D</div>
                                            <div className="btn_t2">Explore all</div>
                                        </div>
                                    </div>
                                </Link>*/}
                            </div>
                        </div>
                <div className="container">
                    <div className="row">
                       
                        <div className="w-full">
                            <div className="project-item-wrap">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="project-item">
                                            <div className="project-thumb">
                                                <Link href="/projets/1"><img src="/images/scondinave.jpg" alt="" /></Link>
                                            </div>
                                            <div className="project-content">
                                                <h2 className="title"><Link href="/project/1">Villa Scandinavian</Link></h2>
                                                <span>Confort Nordique</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="project-item">
                                            <div className="project-thumb">
                                                <Link href="/projets/2"><img src="/images/chalet2.jpg" className="h-full" alt="" /></Link>
                                            </div>
                                            <div className="project-content">
                                                <h2 className="title"><Link href="/project/1">Villa Toubkal</Link></h2>
                                                <span>Refuge Montagnard</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="project-item">
                                            <div className="project-thumb">
                                                <Link href="/projets/3"><img src="/images/10.jpg" alt="" /></Link>
                                            </div>
                                            <div className="project-content">
                                                <h2 className="title"><Link href="/project/1">Villa M&M</Link></h2>
                                                <span>MINIMALIST & MODERN</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="project-item">
                                            <div className="project-thumb">
                                                <Link href="/projets/4"><img src="/images/3.jpg" alt="" /></Link>
                                            </div>
                                            <div className="project-content">
                                                <h2 className="title"><Link href="/project/1">Villa Morrocan Touch</Link></h2>
                                                <span>Histoire et Authenticité</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Project4;    
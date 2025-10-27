import Link from "next/link"

const  Banner4=()=> {
    return (
        <>
            <section className="banner-area-five banner-bg-four max-h-screen">
                <div className="">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                            <div className="banner-content">
                                <h1 className="title wow  fadeInUp  text-white text-center" data-wow-delay=".2s"><span className="text-2xl lg:text-6xl">Ensemble, construisons vos projets en bois et matériaux durables</span></h1>
                                <Link href="#about" className="btn transparent-btn wow fadeInUp" data-wow-delay=".4s">
                                    <div className="btn_m">
                                        <div className="btn_c">
                                            <div className="btn_t1">Découvrez nous</div>
                                            <div className="btn_t2">Découvrez nous</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner-scroll-down">
                    <Link href="#matterport" className="section-link">
                        <span />
                        <span />
                        <span />
                    </Link>
                </div>
            </section>

        </>
    )
}
export default Banner4;

"use client"
/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true
}
const Project3=()=> {
    return (
        <>
            <section className="project-area project-style-three section-pt-140">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5">
                            <div className="section-title mb-50">
                                <span className="sub-title">Featured projects</span>
                                <h2 className="title">Discover our Underconstrution and comple projects</h2>
                                <Link href="project" className="btn transparent-btn">
                                    <div className="btn_m">
                                        <div className="btn_c">
                                            <div className="btn_t1">Explore all</div>
                                            <div className="btn_t2">Explore all</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-7">
                            <div className="swiper-container project-active">
                                <Swiper {...swiperOptions} className="swiper-wrapper">
                                    <SwiperSlide>
                                        <div className="project-item">
                                            <div className="project-thumb">
                                                <Link href="/project/1"><img src="assets/img/project/project_img01.jpg" alt="" /></Link>
                                            </div>
                                            <div className="project-content">
                                                <h3 className="title"><Link href="/project/1">New Central Garden</Link></h3>
                                                <span>Baltimore, MD</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="project-item">
                                            <div className="project-thumb">
                                                <Link href="/project/1"><img src="assets/img/project/project_img02.jpg" alt="" /></Link>
                                            </div>
                                            <div className="project-content">
                                                <h3 className="title"><Link href="/project/1">City Shopping Complex</Link></h3>
                                                <span>Charlottesville, VA</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="project-item">
                                            <div className="project-thumb">
                                                <Link href="/project/1"><img src="assets/img/project/project_img03.jpg" alt="" /></Link>
                                            </div>
                                            <div className="project-content">
                                                <h3 className="title"><Link href="/project/1">Modern Residential Park</Link></h3>
                                                <span>New York, NY</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="project-item">
                                            <div className="project-thumb">
                                                <Link href="/project/1"><img src="assets/img/project/project_img04.jpg" alt="" /></Link>
                                            </div>
                                            <div className="project-content">
                                                <h3 className="title"><Link href="/project/1">Paragon Hotel Concept</Link></h3>
                                                <span>New Orleans, LA</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default Project3

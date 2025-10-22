/* eslint-disable @next/next/no-img-element */
"use client"

import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import type { SwiperOptions } from "swiper/types"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { JSX } from "react/jsx-runtime"

const swiperOptions: SwiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 6,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
    1350: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
}

const Brand = () => {
  return (
    <div className="brand-area">
      <div className="container">
        <Swiper {...swiperOptions} className="brand-active">
          <SwiperSlide className="brand-item">
            <img src="/assets/img/brand/brand_img01.png" alt="Brand 1" />
          </SwiperSlide>
          <SwiperSlide className="brand-item">
            <img src="/assets/img/brand/brand_img02.png" alt="Brand 2" />
          </SwiperSlide>
          <SwiperSlide className="brand-item">
            <img src="/assets/img/brand/brand_img03.png" alt="Brand 3" />
          </SwiperSlide>
          <SwiperSlide className="brand-item">
            <img src="/assets/img/brand/brand_img04.png" alt="Brand 4" />
          </SwiperSlide>
          <SwiperSlide className="brand-item">
            <img src="/assets/img/brand/brand_img05.png" alt="Brand 5" />
          </SwiperSlide>
          <SwiperSlide className="brand-item">
            <img src="/assets/img/brand/brand_img06.png" alt="Brand 6" />
          </SwiperSlide>
          <SwiperSlide className="brand-item">
            <img src="/assets/img/brand/brand_img03.png" alt="Brand 7" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}
export default Brand
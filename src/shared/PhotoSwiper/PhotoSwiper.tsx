import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "./PhotoSwiper.scss";
import type { FC, ReactNode } from "react";

type PhotoSwiperProps = {
  photos: ReactNode[];
};

export const PhotoSwiper: FC<PhotoSwiperProps> = ({ photos }) => {
  return (
    <div className="swiper-container">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        centeredSlides={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          type: "bullets",
          el: ".swiper-pagination",
        }}
        loop={true}
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={index} className="swiper-photo-slide">
            {photo}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>

      <div className="swiper-pagination"></div>
    </div>
  );
};

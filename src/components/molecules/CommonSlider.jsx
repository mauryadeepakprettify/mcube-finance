"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SlideBtn from "../atoms/SlideBtn";
import ServiceCard from "./ServiceCard";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "./ProjectCard";

const CommonSlider = ({
  title = "",
  data = [],
  breakpoints = {
    640: {
      slidesPerView: 1.2,
    },
    768: {
      slidesPerView: 2.2,
    },
    1280: {
      slidesPerView: 3,
    },
  },
  spaceBetween = 20,
  speed = 900,
  loop = false,
  slidesPerView = 1.2,
  centeredSlides = false,
  paginationType = "",
  className = "",
  modules = [],
}) => {
  return (
    <div>
      <div className="flex items-center justify-between gap-4 md:gap-6 lg:gap-10">
        <h2 className="text-[28px] leading-[32px] md:text-[32px] md:leading-[36px] max-[375px]:text-[28px] max-[375px]:leading-[32px] lg:text-5xl lg:leading-[55px]">
          {title}
        </h2>
        <hr className="h-px flex-1 border-none bg-black/20" />
        <div className="flex items-center gap-5">
          <SlideBtn className="swiper-button-prev static!" />
          <SlideBtn className="swiper-button-next static!" />
        </div>
      </div>
      <div className="relative mt-6 md:mt-12">
        <Swiper
          loop={loop}
          slidesPerView={slidesPerView}
          breakpoints={breakpoints}
          spaceBetween={spaceBetween}
          speed={speed}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation]}
        >
          {data?.map((item) => (
            <SwiperSlide className="flex! h-auto!" key={item._id}>
              {title?.includes("Services") ? (
                <ServiceCard {...item} className="bg-white" />
              ) : (
                <ProjectCard {...item} className="bg-white" />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CommonSlider;

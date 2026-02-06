"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Controller, Navigation, Pagination } from "swiper/modules";
import SlideBtn from "@/components/atoms/SlideBtn";
import { useState } from "react";

const TeamMembers = () => {
  const [fraction, setFraction] = useState({ current: 1, total: data?.length });
  const [swiper1, setSwiper1] = useState(null);
  const [swiper2, setSwiper2] = useState(null);
  const [swiper3, setSwiper3] = useState(null);

  return (
    <section className="bg-beta py-8 lg:py-16">
      <div className="container">
        <div className="grid grid-cols-2 gap-18">
          <div>
            <Swiper
              loop={false}
              slidesPerView={1}
              spaceBetween={16}
              allowTouchMove={false}
              speed={900}
              onSwiper={setSwiper2}
            >
              {data?.map(({ _id, img, about }) => (
                <SwiperSlide key={_id}>
                  <figure>
                    <Image
                      className="h-[462px] w-full object-cover"
                      src={`/images/banner/${img}`}
                      alt={about}
                      width={611}
                      height={462}
                    />
                  </figure>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex flex-col justify-between">
            <div className="team-slider relative flex-1">
              <Swiper
                className="h-full"
                loop={false}
                slidesPerView={1}
                spaceBetween={16}
                allowTouchMove={false}
                speed={900}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                pagination={{ type: "progressbar" }}
                modules={[Navigation, Pagination, Controller]}
                controller={{ control: [swiper2, swiper3] }}
                onSwiper={setSwiper1}
                onSlideChange={(swiper) =>
                  setFraction({
                    current: swiper.realIndex + 1,
                    total: swiper.slides.length,
                  })
                }
              >
                {data?.map(({ _id, img, about }) => (
                  <SwiperSlide key={_id}>
                    <>
                      <p className="text-primary mb-8 tracking-widest uppercase">
                        Meet Our Team
                      </p>
                      <h2 className="max-w-[80%] text-[40px] leading-[46px]">
                        {about}
                      </h2>
                    </>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="absolute bottom-6 left-0 flex items-center gap-6">
                <SlideBtn className="swiper-button-prev static!" />
                <span className="text-lambda text-xl leading-[45px]">
                  {fraction.current} / {fraction.total}
                </span>
                <SlideBtn className="swiper-button-next static!" />
              </div>
            </div>
            <div>
              <Swiper
                loop={false}
                slidesPerView={2}
                spaceBetween={64}
                allowTouchMove={false}
                speed={900}
                onSwiper={setSwiper3}
              >
                {data?.map(({ _id, img, about }) => (
                  <SwiperSlide key={_id}>
                    <p className="text-lambda py-5 leading-[24px]">{about}</p>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;

const data = [
  {
    _id: 1,
    img: "discussion.svg",
    about: "Sasha is building new skills and taking on bigger challenges",
    video: "",
  },
  {
    _id: 2,
    img: "discussion.svg",
    about: "Sasha is building new skills and taking on bigger challenges",
    video: "",
  },
  {
    _id: 3,
    img: "discussion.svg",
    about: "Sasha is building new skills and taking on bigger challenges",
    video: "",
  },
];

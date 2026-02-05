"use client";
import ServiceCard from "@/components/molecules/ServiceCard";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SlideBtn from "@/components/atoms/SlideBtn";

const Solutions = () => {
  const offset = `${42 - data.length}%`;

  return (
    <section className="relative container overflow-hidden py-8 lg:py-20">
      <Image
        src="/vector/dot_b.svg"
        alt=""
        width={258}
        height={97}
        className="absolute right-0 bottom-0 hidden lg:block"
      />
      <div className="flex flex-col gap-6 md:flex-row lg:gap-10 xl:gap-28">
        <figure className="h-[300px] w-full shrink-0 md:h-[500px] md:w-[350px] lg:h-[650px] lg:w-[400px]">
          <Image
            className="h-full w-full object-cover"
            src="/images/banner/thinking.svg"
            alt=""
            width={400}
            height={650}
          />
        </figure>
        <div className="w-full pb-8 md:w-[calc(100%-350px)] md:py-8 lg:w-[calc(100%-400px)]">
          <h2 className="mb-4 max-w-[500px] text-center text-[28px] leading-[28px] md:text-left lg:text-5xl lg:leading-[48px]">
            Partnering to Solve Your Business Challenges
          </h2>
          <p className="text-lambda max-w-[620px] text-center md:text-left">
            We offer deep and broad real estate experience through our senior
            managers and the ability to offer scale and flexibility through our
            analysts and associates.
          </p>
        </div>
      </div>

      <div className="service-slider top-[48%] right-0 left-[100px] md:absolute lg:top-[42%] lg:left-[240px]">
        <Swiper
          className="lg:pb-18!"
          loop={false}
          slidesPerView={1.2}
          breakpoints={{
            640: {
              slidesPerView: 1.2,
            },
            768: {
              slidesPerView: 1.9,
            },
            1024: {
              slidesPerView: 2.2,
            },
            1280: {
              slidesPerView: 2.7,
            },
          }}
          spaceBetween={20}
          speed={900}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
        >
          {data?.map((item) => (
            <SwiperSlide className="" key={item._id}>
              <ServiceCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <SlideBtn
          className="swiper-button-prev top-auto! -bottom-2!"
          offset={offset}
        />
        <SlideBtn
          className="swiper-button-next top-auto! -bottom-2!"
          offset={offset}
        />
      </div>
    </section>
  );
};

export default Solutions;

const data = [
  {
    _id: 1,
    label: "Lenders / Financial Institutions",
    description:
      "Expert guidance for lenders and financial institutions across commercial real estate transactions.",
    icon: "fi-rr-handshake",
    route: "/leaders-financial-institutions",
  },
  {
    _id: 2,
    label: "Investors",
    description:
      "Strategic insights enabling investors to make informed and confident real estate decisions.",
    icon: "fi-rr-building",
    route: "/investors",
  },
  {
    _id: 3,
    label: "Brokers",
    description:
      "Strategic insights enabling investors to make informed and confident real estate decisions.",
    icon: "fi-rr-building",
    route: "/investors",
  },
  {
    _id: 4,
    label: "Investors",
    description:
      "Strategic insights enabling investors to make informed and confident real estate decisions.",
    icon: "fi-rr-building",
    route: "/investors",
  },
  {
    _id: 5,
    label: "Brokers",
    description:
      "Strategic insights enabling investors to make informed and confident real estate decisions.",
    icon: "fi-rr-building",
    route: "/investors",
  },
  {
    _id: 6,
    label: "Brokers",
    description:
      "Strategic insights enabling investors to make informed and confident real estate decisions.",
    icon: "fi-rr-building",
    route: "/investors",
  },
  {
    _id: 7,
    label: "Brokers",
    description:
      "Strategic insights enabling investors to make informed and confident real estate decisions.",
    icon: "fi-rr-building",
    route: "/investors",
  },
];

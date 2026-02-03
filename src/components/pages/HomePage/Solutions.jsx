"use client"
import ServiceCard from "@/components/molecules/ServiceCard"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Icon from "@/components/atoms/Icon"

const Solutions = () => {

    const offset = `${42 - data.length}%`;

    return (
        <section className="container lg:py-20 py-8 relative overflow-hidden">
            <Image
                src="/vector/dot_b.svg"
                alt=""
                width={258}
                height={97}
                className="absolute lg:block hidden bottom-0 right-0"
            />
            <div className="flex md:flex-row flex-col xl:gap-28 lg:gap-10 gap-6">
                <figure className="lg:w-[400px] md:w-[350px] w-full md:h-[500px] lg:h-[650px] h-[300px] shrink-0">
                    <Image
                        className="object-cover  h-full w-full"
                        src="/images/banner/thinking.svg"
                        alt=""
                        width={400}
                        height={650}
                    />
                </figure>
                <div className="lg:w-[calc(100%-400px)] md:w-[calc(100%-350px)] w-full md:py-8 pb-8">
                    <h2 className=" text-[28px] leading-[28px] lg:text-5xl text-center md:text-left lg:leading-[48px] mb-4 max-w-[500px]">
                        Partnering to Solve Your Business Challenges
                    </h2>
                    <p className="text-lambda text-center md:text-left max-w-[620px]">
                        We offer deep and broad real estate experience through our senior
                        managers and the ability to offer scale and flexibility through our
                        analysts and associates.
                    </p>
                </div>
            </div>

            <div className="right-0 left-[100px] lg:left-[240px] md:absolute lg:top-[42%] top-[48%] service-slider">
                <Swiper
                    className=" lg:pb-18! "
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
                        }
                    }}
                    spaceBetween={20}
                    speed={900}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
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
                <div className="swiper-button-prev hidden! lg:flex top-auto! -bottom-2!" style={{ 'left': offset }}>
                    <Icon className="fi-rr-angle-right rotate-180 text-lambda" />
                </div>

                <div className="swiper-button-next hidden! lg:flex top-auto! -bottom-2!" style={{ 'right': offset }}>
                    <Icon className="fi-rr-angle-right text-lambda" />
                </div>
            </div>
        </section>
    )
}

export default Solutions

const data = [
    {
        _id: 1,
        label: "Lenders / Financial Institutions",
        description: "Expert guidance for lenders and financial institutions across commercial real estate transactions.",
        icon: "fi-rr-handshake",
        route: "/leaders-financial-institutions"
    },
    {
        _id: 2,
        label: "Investors",
        description: "Strategic insights enabling investors to make informed and confident real estate decisions.",
        icon: "fi-rr-building",
        route: "/investors"
    },
    {
        _id: 3,
        label: "Brokers",
        description: "Strategic insights enabling investors to make informed and confident real estate decisions.",
        icon: "fi-rr-building",
        route: "/investors"
    },
    {
        _id: 4,
        label: "Investors",
        description: "Strategic insights enabling investors to make informed and confident real estate decisions.",
        icon: "fi-rr-building",
        route: "/investors"
    },
    {
        _id: 5,
        label: "Brokers",
        description: "Strategic insights enabling investors to make informed and confident real estate decisions.",
        icon: "fi-rr-building",
        route: "/investors"
    },
    {
        _id: 6,
        label: "Brokers",
        description: "Strategic insights enabling investors to make informed and confident real estate decisions.",
        icon: "fi-rr-building",
        route: "/investors"
    },
    {
        _id: 7,
        label: "Brokers",
        description: "Strategic insights enabling investors to make informed and confident real estate decisions.",
        icon: "fi-rr-building",
        route: "/investors"
    }
]
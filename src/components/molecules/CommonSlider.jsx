"use client"

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import SlideBtn from '../atoms/SlideBtn'
import ServiceCard from './ServiceCard'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const CommonSlider = ({
    data = {},
    breakpoints,
    spaceBetween = 20,
    speed = 900,
    loop = false,
    centeredSlides = false,
    paginationType = "",
    className = "",
    modules = [],
}) => {

    const { title, services } = data

    return (
        <div>
            <div className='flex gap-10 items-center justify-between'>
                <h2 className='text-5xl leading-[100%]' >{title}</h2>
                <hr className='flex-1 h-px bg-black/20 border-none' />
                <div className='flex items-center gap-5'>
                    <SlideBtn className="swiper-button-prev static!" />
                    <SlideBtn className="swiper-button-next static!" />
                </div>
            </div>
            <div className='relative mt-12'>
                <Swiper
                    loop={false}
                    slidesPerView={1.2}
                    breakpoints={{
                        640: {
                            slidesPerView: 1.2,
                        },
                        768: {
                            slidesPerView: 2.5,
                        },
                        1280: {
                            slidesPerView: 3,
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
                    modules={[Navigation]}
                >
                    {services?.map((item) => (
                        <SwiperSlide className="" key={item._id}>
                            <ServiceCard {...item} className='bg-white' />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </div>
    )
}

export default CommonSlider
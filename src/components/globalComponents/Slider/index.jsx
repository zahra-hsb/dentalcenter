import Image from "next/image"
import Container from "../Container"
import implant from '../../../../public/icons/🦆 emoji _tooth_.svg'
import toothClean from '../../../../public/icons/🦆 icon _teeth clean_.svg'
import toothDrill from '../../../../public/icons/🦆 icon _tooth drill_.svg'
import dentist from '../../../../public/icons/Group 3.svg'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';


const Slider = ({ dataArray }) => {
    return (
        <>
            <div className="w-full">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={
                        {
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 50,
                            },
                        }
                    }
                    autoplay={true}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {dataArray?.map(item => (
                        <>
                            <SwiperSlide>
                                <Container style={'mb-10'}>
                                    <div className="bg-green h-24 w-24 flex items-center justify-center rounded-xl p-2 px-5 bg-opacity-50 group-hover:bg-opacity-100">
                                        <Image src={item.icon} alt="" />
                                    </div>
                                    <h3 className='text-xl font-bold group-hover:text-green text-nowrap'>{item.title1}</h3>
                                    <h3 className='group-hover:text-white text-nowrap'>{item.title2}</h3>
                                </Container>
                            </SwiperSlide>
                        </>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default Slider
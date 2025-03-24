import Image from "next/image"
import Container from "../Container"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'; 

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';


const Slider = ({ dataArray, type1, isAboutUs }) => {
    return (
        <>
            <div className="w-full mb-10">
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
                        
                            <SwiperSlide key={item._id ? item._id : item.id}>
                                {isAboutUs ?

                                    <>
                                        <div className=" rounded-lg flex flex-col items-center gap-2 mb-10" title={item.title}>
                                            <Image src={item.image} alt="" />
                                            <h3 className='text-xl group-hover:text-green text-nowrap'>{item.title}</h3>
                                            
                                        </div>
                                    </>

                                    :
                                    <>

                                        {type1 ? <Container style={'mb-10'}>
                                            <div title={item.title1} className="bg-green h-24 w-24 flex items-center justify-center rounded-xl p-2 px-5 bg-opacity-50 group-hover:bg-opacity-100">
                                                <Image src={item.icon} alt="" />
                                            </div>
                                            <h3 className='text-xl font-bold group-hover:text-green text-nowrap'>{item.title1}</h3>
                                            <h3 className='group-hover:text-white text-nowrap'>{item.title2}</h3>
                                        </Container>
                                            :
                                            <Container style={'mb-10'}>
                                                <div title={item.title} className=" text-center h-28 flex flex-col gap-3 items-center lg:justify-start justify-center">
                                                    {item.icon}
                                                    <p className="group-hover:text-green sm:text-xs lg:text-sm">
                                                        {item.title}
                                                    </p>
                                                </div>
                                            </Container>
                                        }
                                    </>
                                }
                            </SwiperSlide>
                       
                    ))}
                </Swiper>
            </div >
        </>
    )
}

export default Slider
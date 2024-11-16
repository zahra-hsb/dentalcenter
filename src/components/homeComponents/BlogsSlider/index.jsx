'use client'
import axios from "axios"
import { useEffect } from "react"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import BlogCard from "@/components/globalComponents/BlogCard";

const BlogSlider = () => {
    const [blogs, setBlogs] = useState([])


    useEffect(() => {
        async function getBlogs() {
            try {
                const res = await axios.get('/api/getBlogs')
                setBlogs(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        getBlogs()
    }, [])
    return (
        <>
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
                {blogs.map(item => (
                    <>
                        <SwiperSlide>
                            <BlogCard author={item.author} blogImg={item.blogImg}
                                date={item.date} title={item.title} />
                        </SwiperSlide>
                    </>
                ))}
            </Swiper>
        </>
    )
}

export default BlogSlider
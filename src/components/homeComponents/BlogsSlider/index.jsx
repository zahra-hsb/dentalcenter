"use client";
import axios from "axios";
import { useEffect } from "react";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import BlogCard from "@/components/globalComponents/BlogCard";

const BlogSlider = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function getBlogs() {
      try {
        const res = await axios.get("/api/getBlogs");
        setBlogs(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getBlogs();
  }, []);
  return (
    <>
      <div className="flex flex-col items-center justify-center mb-10">
        <h1 className="text-base font-bold text-green text-center">
          پاسخ سوالات خود را می توانید از مقالات زیر پیدا کنید
        </h1>
        <h1 className="text-lg font-bold text-center">
          آخرین مقالات
        </h1>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
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
        }}
        autoplay={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {blogs.length > 0 &&
          blogs.map((item) => (
            <SwiperSlide key={item._id}>
              <BlogCard
                author={item.author}
                blogImg={item.blogImg}
                date={item.date}
                summary={item.summary}
                title={item.title}
                id={item._id}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default BlogSlider;

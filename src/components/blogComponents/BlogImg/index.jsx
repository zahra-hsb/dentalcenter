"use client";
import axios from "axios";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const BlogImg = ({ params }) => {
  // const params1 = useSearchParams()
  // const { id } = params1.get('id')
  const [blogImg, setBlogImg] = useState("");

  useEffect(() => {
    async function getBlog() {
      try {
        const response = await axios.post("/api/getBlog", { id: params.slug });
        console.log("blog image response: ", response);
        setBlogImg(response.data.blogImg);
      } catch (error) {
        console.log(error);
      }
    }

    getBlog();
  }, [params.slug]);

  return (
    <>
      <div className="lg:w-1/2 w-full h-52 sm:h-72 rounded relative -z-10">
        <Image
          src={blogImg}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </>
  );
};

export default BlogImg;

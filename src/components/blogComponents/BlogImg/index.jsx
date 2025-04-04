"use client";
import axios from "axios";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BiCalendar } from "react-icons/bi"
import { FaClock } from "react-icons/fa"

const BlogImg = ({ params }) => {
  // const params1 = useSearchParams()
  // const { id } = params1.get('id')
  const [blogContent, setBlogContent] = useState("");
  const [readingTime, setReadingTime] = useState("5 min")
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function getBlog() {
      try {
        setLoading(true);
        const response = await axios.post("/api/getBlog", { id: params.slug });
        console.log("blog image response: ", response);
        setBlogContent(response.data);
        setLoading(false);

         // Calculate reading time (rough estimate)
         const wordCount = response.data.blogContent.replace(/<[^>]*>/g, "").split(/\s+/).length
         const time = Math.ceil(wordCount / 200) // Assuming 200 words per minute
         setReadingTime(`${time} دقیقه`)
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }

    getBlog();
  }, [params.slug]);

  return (
    <>
      <div className="relative w-5/6 h-[40vh] md:h-[50vh] mb-8">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10 rounded-lg" />
          <Image
            src={blogContent.blogImg || "/placeholder.svg?height=600&width=1200"}
            alt={blogContent.title || "Blog post"}
            fill
            className="object-cover rounded-lg"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-20">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">{blogContent.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-white/90">
              <div className="flex items-center gap-2">
                {/* <Avatar className="h-8 w-8 border-2 border-white"> */}
                  {/* <AvatarImage src="/placeholder-user.jpg" /> */}
                  {/* <AvatarFallback>{blogContent.author?.charAt(0)}</AvatarFallback> */}
                {/* </Avatar> */}
                <span>{blogContent.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <BiCalendar className="h-4 w-4" />
                <span>{blogContent.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="h-4 w-4" />
                <span>{readingTime}</span>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default BlogImg;

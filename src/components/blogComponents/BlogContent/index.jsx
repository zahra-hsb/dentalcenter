"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./sytle.module.css";
// import { CalendarIcon, Clock } from "lucide-react"

// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Badge } from "@/components/ui/badge"
// import { Skeleton } from "@/components/ui/skeleton"

const BlogContent = ({ params }) => {
  const [blogContent, setBlogContent] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getBlog(id) {
      try {
        setIsLoading(true);
        if (id) {
          const response = await axios.post("/api/getBlog", { id: id });
          setBlogContent(response.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    // Check if params and params.slug exist before using them
    if (params && params.slug) {
      getBlog(params.slug);
    } else {
      // If no slug is provided, set loading to false
      setIsLoading(false);
    }
  }, [params]);

  // Add this right after the useEffect block
  // Show a message if no slug is provided
  if (!params || !params.slug) {
    return (
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <h1 className="text-2xl font-bold mb-4">No blog post selected</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Please select a blog post to view its content.
        </p>
      </div>
    );
  }

  if (isLoading) {
    return <BlogSkeleton />;
  }

  return (
    <>
      <article className="max-w-7xl mx-auto">
        {/* Hero Section */}

        {/* Summary Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border border-gray-100">
          <h2 className="text-lg font-medium mb-3 text-center">
            خلاصه آنچه در این مقاله می خوانید
          </h2>
          <div
            dangerouslySetInnerHTML={{ __html: blogContent.summary }}
            className="text-gray-600 dark:text-gray-300 leading-relaxed"
          />
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 mb-8 border border-gray-100">
          <div
            dangerouslySetInnerHTML={{ __html: blogContent.blogContent }}
            className={`prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-a:text-blue-600 prose-img:rounded-lg prose-img:mx-auto ${styles.blogLink}`}
          />
        </div>

        {/* Tags */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-16 border border-gray-100">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-medium">تگ ها:</h3>
            <div className="flex flex-wrap gap-2">
              {blogContent.tags?.map((item, index) => (
                <span
                  key={index}
                  className="border-2 border-green rounded-md p-2 hover:bg-darkGreen hover:border-darkGreen hover:text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Related Posts Placeholder - You can implement this later */}
        {/* <div className="mb-16">
          <h3 className="text-xl font-bold mb-6 text-center">مطالب مرتبط</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow overflow-hidden border border-gray-100"
              >
                <div className="relative h-48">
                  <Image
                    src={`/placeholder.svg?height=300&width=500&text=مطلب مرتبط ${i + 1}`}
                    alt="Related post"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-medium mb-2">عنوان مطلب مرتبط {i + 1}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                    این یک متن نمونه برای نمایش خلاصه مطلب مرتبط است. این متن صرفا جهت نمایش طراحی قرار گرفته است.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </article>
    </>
  );
};

// Loading skeleton
const BlogSkeleton = () => (
  <div className="max-w-4xl mx-auto">
    {/* <Skeleton className="w-full h-[40vh] rounded-lg mb-8" />
    <Skeleton className="w-full h-32 rounded-lg mb-8" />
    <div className="space-y-4 mb-8">
      <Skeleton className="w-full h-6" />
      <Skeleton className="w-full h-6" />
      <Skeleton className="w-3/4 h-6" />
    </div>
    <div className="space-y-4 mb-8">
      <Skeleton className="w-full h-6" />
      <Skeleton className="w-full h-6" />
      <Skeleton className="w-5/6 h-6" />
      <Skeleton className="w-full h-6" />
      <Skeleton className="w-4/5 h-6" />
    </div>
    <Skeleton className="w-full h-16 rounded-lg mb-8" /> */}
  </div>
);

export default BlogContent;

'use client'
import axios from "axios"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

const BlogContent = ({ params }) => {

    const [blogContent, setBlogContent] = useState({})

    useEffect(() => {
        async function getBlog(id) {
            console.log("id: ", id)
            try {
                if (id) {
                    const response = await axios.post('/api/getBlog', { id: id })
                    console.log(response);
                    setBlogContent(response)
                } else {
                    return
                }
            } catch (error) {
                console.log(error);
            }
        }
        console.log("params: ", params)
        getBlog(params.slug)
    }, [params])

    return (
        <>
            <section className="sm:px-16 px-5">
                <div className="w-full flex itms-center justify-center lg:-mt-12 sm:-mt-8 -mt-5">
                    <div className="lg:w-1/3 sm:w-full w-full bg-white px-2 lg:px- sm:px-5 sm:py-8 py-5 shadow rounded">
                        <h3 className="text-center text-lg mb-3">{blogContent.title}</h3>
                        <div dangerouslySetInnerHTML={{ __html: blogContent.summary }} className="text-sm text-gray-600 text-justify mb-3"></div>
                        <div className="flex justify-evenly">
                            <h5 className="text-gray-500 text-xs">{blogContent.author}</h5>
                            <h5 className="text-gray-500 text-xs">{blogContent.date}</h5>
                        </div>
                    </div>
                </div>
                <div className="bg-white my-5 py-10 px-10 shadow-lg text-gray-700 rounded" dangerouslySetInnerHTML={{ __html: blogContent.blogContent }}></div>
                <div className="mb-5 shadow p-5 flex gap-5 items-center text-gray-600 rounded">
                    تگ ها:
                    {blogContent.tags?.map(item => (
                        <span key={blogContent._id} className="p-2 border border-green bg-white hover:text-white hover:bg-darkGreen rounded">{item}</span>
                    ))}
                </div>
            </section>
        </>
    )
}

export default BlogContent
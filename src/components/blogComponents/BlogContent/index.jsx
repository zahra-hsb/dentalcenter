'use client'
import axios from "axios"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

const BlogContent = ({ params }) => {


    // const params1 = useSearchParams()
    // const { id } = params1.get('id')

    const [blogContent, setBlogContent] = useState({})

    useEffect(() => {
        async function getBlog(id) {
            try {
                const response = await axios.post('/api/getBlog', { id: id })
                console.log(response.data);
                setBlogContent(response.data)
            } catch (error) {
                console.log(error);
            }
        }

        getBlog(params.slug)
    }, [params.slug])

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
                <div className="bg-white my-5 px-10 shadow-lg text-gray-700" dangerouslySetInnerHTML={{ __html: blogContent.blogContent }}></div>
            </section>
        </>
    )
}

export default BlogContent
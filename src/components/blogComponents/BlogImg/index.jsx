'use client'
import axios from "axios"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

const BlogImg = ({ params }) => {

    // const params1 = useSearchParams()
    // const { id } = params1.get('id')
    const [blogImg, setBlogImg] = useState('')

    useEffect(() => {
        async function getBlog() {
            try {
                const response = await axios.post('/api/getBlog', { id: params.slug })
                setBlogImg(response.data.blogImg)
            } catch (error) {
                console.log(error);
            }
        }

        getBlog()
    }, [params.slug])

    return (
        <>
            <div className="lg:w-1/2">
                <img src={blogImg} alt="" />
            </div>
        </>
    )
}

export default BlogImg
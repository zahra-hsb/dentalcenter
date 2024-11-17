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
            <h3>{blogContent.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: blogContent.blogContent }}></div>
        </>
    )
}

export default BlogContent
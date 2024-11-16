import Image from "next/image"
import Container from "../Container"
import Link from "next/link"

const BlogCard = ({ blogImg, title, author, summary, id }) => {
    return (
        <>
            <Container style={'!items-start'}>
                <Link href={`/blogs/[slug]?title=${title}&id=${id}`}>
                    <img src={blogImg} alt="" />
                </Link>
                <Link href={`/blogs/[slug]?title=${title}&id=${id}`}>
                    <h4 className="group-hover:text-green">{title}</h4>
                </Link>
                <div>
                    <div className="text-gray-600 text-sm group-hover:text-white" dangerouslySetInnerHTML={{ __html: summary }}>
                    </div>
                </div>
                <div className="flex justify-between gap-5">
                    <div className="flex gap-2 text-xs text-gray-500 text-nowrap group-hover:text-gray-300">
                        <h5>نویسنده:</h5>
                        <h5>{author}</h5>
                    </div>
                    {/* <div className="flex gap-2 text-xs text-gray-500 text-nowrap">
                        <h5>تاریخ بارگزاری:</h5>
                        <h5>{date}</h5>
                    </div> */}
                </div>
            </Container>
        </>
    )
}

export default BlogCard
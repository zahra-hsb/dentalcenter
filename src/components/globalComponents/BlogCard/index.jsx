import Image from "next/image"

const BlogCard = ({ blogImg, title, author, summary }) => {
    return (
        <>
            <figure className="bg-white border border-green p-5 rounded-lg">
                <img src={blogImg} alt="" />
                <figcaption>{title}</figcaption>
                <div>
                    <p>
                        {summary}
                    </p>
                </div>
                <div className="flex justify-between gap-5">
                    <div className="flex gap-2 text-xs text-gray-500 text-nowrap">
                        <h5>نویسنده:</h5>
                        <h5>{author}</h5>
                    </div>
                    {/* <div className="flex gap-2 text-xs text-gray-500 text-nowrap">
                        <h5>تاریخ بارگزاری:</h5>
                        <h5>{date}</h5>
                    </div> */}
                </div>
            </figure>
        </>
    )
}

export default BlogCard
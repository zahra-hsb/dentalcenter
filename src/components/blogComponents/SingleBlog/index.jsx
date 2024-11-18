import BlogContent from "../BlogContent"
import BlogImg from "../BlogImg"

const SingleBlog = ({ params }) => {
    return (
        <>
            <section className="">
                <div className="flex items-center justify-center w-full">
                    <BlogImg params={params} />
                </div>
                <BlogContent params={params} />
            </section>
        </>
    )
}

export default SingleBlog
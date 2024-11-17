import BlogContent from "../BlogContent"
import BlogImg from "../BlogImg"

const SingleBlog = ({ params }) => {
    return (
        <>
            <section className="px-16 py-20">
                <BlogImg params={params} />
                <BlogContent params={params} />
            </section>
        </>
    )
}

export default SingleBlog
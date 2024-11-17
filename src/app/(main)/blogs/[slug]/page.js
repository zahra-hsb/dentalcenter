import SingleBlog from "@/components/blogComponents/SingleBlog"

const Page = ({ params }) => {
    return (
        <>
            <SingleBlog params={params} />
        </>
    )
}

export default Page


export async function generateStaticParams() {
    const posts = await fetch('http://localhost:3000/api/getBlogs').then((res) => res.json())

    return posts.map((post) => ({
        slug: post._id,
    }))
}
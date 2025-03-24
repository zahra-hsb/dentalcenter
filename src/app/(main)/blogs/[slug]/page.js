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
    try {  
        const res = await fetch('https://drgomaryan.ir/api/getBlogs');  
        if (!res.ok) {  
            console.error(`HTTP error! status: ${res.status}`);  
            return []; 
        }  
        const posts = await res.json();  
        return posts.map((post) => ({ slug: post._id }));  
    } catch (error) {  
        console.error('Error fetching blog posts:', error);  
        return [];
    }  
}
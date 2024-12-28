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
        const res = await fetch('https://drgomaryan.liara.run/api/getBlogs');  
        if (!res.ok) {  
            // Handle HTTP errors (including 503)  
            console.error(`HTTP error! status: ${res.status}`);  
            // Consider throwing an error or returning an empty array here  
            return []; // Or throw new Error(`Failed to fetch blogs: ${res.status}`);  
        }  
        const posts = await res.json();  
        return posts.map((post) => ({ slug: post._id }));  
    } catch (error) {  
        console.error('Error fetching blog posts:', error);  
        // Consider throwing the error or returning an empty array  
        return []; // Or throw error;  
    }  
}
import SingleBlog from "@/components/blogComponents/SingleBlog"

export async function generateMetaData({ params }) {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_API_URL + 'getBlog', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params._id)
        });
        if (!res.ok) {
            console.error(`HTTP error! status: ${res.status}`);
            return [];
        }
        const post = await res.json();
        return {
            title: post?.title,
            description: post?.summary,
            keywords: post?.keywords
        };
    } catch (error) {
        console.log("error while getting blog data for metadata..", error)
    }
}

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
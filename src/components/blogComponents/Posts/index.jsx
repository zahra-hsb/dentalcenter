'use client'  
import BlogCard from "@/components/globalComponents/BlogCard";  
import axios from "axios";  
import { useEffect, useState } from "react";  

const Posts = () => {  
    const [posts, setPosts] = useState([]);  
    const [currentPage, setCurrentPage] = useState(1);  
    const postsPerPage = 10; // Adjust as needed  

    useEffect(() => {  
        const fetchPosts = async () => {  
            try {  
                const response = await axios.get('/api/getBlogs');  
                setPosts(response.data);  
            } catch (error) {  
                console.error(error);  
            }  
        };  

        fetchPosts();  
    }, []);  

    const indexOfLastPost = currentPage * postsPerPage;  
    const indexOfFirstPost = indexOfLastPost - postsPerPage;  
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);  

    const paginate = (pageNumber) => setCurrentPage(pageNumber);  

    const pageNumbers = [];  
    for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {  
        pageNumbers.push(i);  
    }  

    return (  
        <>  
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">  
                {currentPosts.length > 0 ? (  
                    currentPosts.map((item) => (  
                        <BlogCard  
                            key={item._id}  
                            author={item.author}  
                            blogImg={item.blogImg}  
                            id={item._id}  
                            summary={item.summary}  
                            title={item.title}  
                        />  
                    ))  
                ) : (  
                    <div>موردی برای نمایش وجود ندارد.</div>  
                )}  
            </div>  
            <div className="pagination flex gap-2 w-full items-center justify-center py-5 ">  
                {pageNumbers.map((number) => (  
                    <button className="p-1 bg-white border hover:bg-darkGreen hover:text-white border-green rounded-full px-3" key={number} onClick={() => paginate(number)}>  
                        {number}  
                    </button>  
                ))}  
            </div>  
        </>  
    );  
};  

export default Posts;
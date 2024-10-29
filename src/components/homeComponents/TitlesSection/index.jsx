'use client'
import Slider from "@/components/globalComponents/Slider";
import { mainPageTitlesSlides } from "@/lib/data";
import BlogCard from "@/components/globalComponents/BlogCard";

const TitlesSection = () => {
    return (
        <>
            <section className="px-16 pb-20">
                <Slider dataArray={mainPageTitlesSlides} type1={false} />  
                <BlogCard />
            </section>
        </>
    )
}

export default TitlesSection
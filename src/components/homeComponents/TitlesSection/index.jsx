'use client'
import Container from "@/components/globalComponents/Container"
import { TbDental } from "react-icons/tb";
import { TbDentalBroken, TbFreeRights } from "react-icons/tb";
import { GiToothbrush } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import Slider from "@/components/globalComponents/Slider";
import { mainPageTitlesSlides } from "@/lib/data";

const TitlesSection = () => {
    return (
        <>
            <section className="px-16 pb-20">
                <Slider dataArray={mainPageTitlesSlides} type1={false} />  
            </section>
        </>
    )
}

export default TitlesSection
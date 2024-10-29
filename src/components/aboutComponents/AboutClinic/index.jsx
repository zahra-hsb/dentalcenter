'use client'
import Slider from "@/components/globalComponents/Slider"
import { aboutPageSlides } from "@/lib/data"

const AboutClinic = () => {
    return (
        <>
            <Slider dataArray={aboutPageSlides} isAboutUs={true} />
        </>
    )
}

export default AboutClinic
import AboutClinic from "@/components/aboutComponents/AboutClinic"
import AboutComponent from "@/components/homeComponents/AboutComponent"

export const metadata = {
    title: 'مطب دکتر گماریان | درباره ما',
    description: " ،کلینیک دندانپزشکی و زیبایی دکتر وحید گماریان - خدمات مطب: ایمپلنت اقساطی، روکش دندان، لمینت، ترمیم دندان ها، درمان ریشه، پروتز متحرک و دندانپزشکی اطفال در شهرقدس",
    keywords: "ایمپلنت اقساطی در شهرقدس، روکش دندان در شهرقدس، لمینت در شهرقدس، ترمیم دندان ها در شهرقدس، درمان ریشه در شهرقدس، پروتز متحرک در شهرقدس و دندانپزشکی اطفال در شهرقدس"
}

const about = () => {
    return (
        <>
            <AboutComponent isAboutUs={true} />
            <AboutClinic /> 
        </>
    )
}

export default about
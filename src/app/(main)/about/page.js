import AboutClinic from "@/components/aboutComponents/AboutClinic"
import AboutComponent from "@/components/homeComponents/AboutComponent"

const about = () => {
    return (
        <>
            <AboutComponent isAboutUs={true} />
            <AboutClinic /> 
        </>
    )
}

export default about
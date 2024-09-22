import Image from "next/image"
import IconContainer from "../IconContainer"

const InfoSection = ({ icon, title, info }) => {
    return (
        <>
            <div className="flex gap-3 justify-evenly items-center">
                <IconContainer>
                    <Image src={icon} alt="" />
                </IconContainer>
                <div>
                    <p className="font-bold text-sm mb-1">{title}</p>
                    <p className="text-gray-500 text-sm">{info}</p>
                </div>
            </div>
        </>
    )
}

export default InfoSection
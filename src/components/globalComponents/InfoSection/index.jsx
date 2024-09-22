import Image from "next/image"
import IconContainer from "../IconContainer"

const InfoSection = ({ icon, title, info }) => {
    return (
        <>
            <div className="flex gap-2">
                <IconContainer>
                    <Image src={icon} alt="" />
                </IconContainer>
                <div>
                    <p className="font-bold">{title}</p>
                    <p className="text-gray-500">{info}</p>
                </div>
            </div>
        </>
    )
}

export default InfoSection
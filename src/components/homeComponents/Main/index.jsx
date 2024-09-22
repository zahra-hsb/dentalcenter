import IconContainer from "@/components/globalComponents/IconContainer"
import PhoneButton from "@/components/globalComponents/PhoneButton"
import Image from "next/image"
import { FaPhone } from "react-icons/fa"
import phone from '../../../../public/icons/phone.svg'
import location from '../../../../public/icons/location.svg'
import InfoSection from "@/components/globalComponents/InfoSection"

const Main = () => {
    return (
        <>
            <section className="px-20">
                <div className="flex flex-col gap-10">
                    <h1 className="tetx-darkGreen text-6xl font-bold">دکتر <span className="text-green">وحید گماریان</span></h1>
                    <h5 className="text-3xl">به مطب دندانپزشکی دنتال سنتر خوش آمدید.</h5>
                    <PhoneButton text={
                        <>
                            همین حالا تماس بگیر
                        </>
                    } />
                    <div className="flex gap-5">
                        <InfoSection info={'+989'} title={'شماره تلفن'} icon={phone} />
                        <InfoSection info={'شهرقدس، میدان قدس، خیابان امام خمینی، جنب مسجد جامع، پلاک 67، واحد 1'} title={'آدرس'} icon={location} />
                    </div>
                </div>
                <div></div>
            </section>
        </>
    )
}

export default Main
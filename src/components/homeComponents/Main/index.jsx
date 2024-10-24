import IconContainer from "@/components/globalComponents/IconContainer"
import PhoneButton from "@/components/globalComponents/PhoneButton"
import Image from "next/image"
import { FaPhone } from "react-icons/fa"
import phone from '../../../../public/icons/phone.svg'
import location from '../../../../public/icons/location.svg'
import doctor from '../../../../public/pictures/IMG_6747.png'
import InfoSection from "@/components/globalComponents/InfoSection"

const Main = () => {
    return (
        <>
            <section className="w-full px-10 sm:pt-20 lg:px-28 flex flex-col-reverse sm:flex-row gap-10 justify-between py-10">
                <div className="w-full h-full flex flex-col items-start justify-between lg:gap-16 sm:gap-8 gap-8 text-justify">
                    <h1 className="text-darkGreen lg:text-6xl font-bold text-right sm:text-4xl text-4xl text-nowrap">دکتر
                        <span className="text-green">وحید گماریان</span>
                    </h1>
                    <h5 className="lg:text-3xl text-xl">به مطب دندانپزشکی دنتال سنتر خوش آمدید.</h5>
                    <PhoneButton style={'text-md'} text={
                        <>
                            همین حالا تماس بگیر
                        </>
                    } />
                    <div className="flex gap-5 lg:items-center flex-col items-start lg:flex-row">
                        <InfoSection info={'02146807225'} title={'شماره تلفن'} icon={phone} />
                        <InfoSection info={'شهرقدس، میدان قدس، خیابان امام خمینی، جنب مسجد جامع'} title={'آدرس'} icon={location} />
                    </div>
                </div>
                <div className="w-full h-full flex items-center justify-center sm:justify-end">
                    <div className="bg-green sm:h-[320px] sm:w-[320px] lg:h-[400px] lg:w-[400px] h-[250px] w-[250px] p-10 rounded-[50px] rounded-ee-xl relative">
                        <Image src={doctor} alt="دکتر وحید گماریان" className="lg:w-[325px] sm:w-[280px] w-[210px] absolute bottom-0 left-6 sm:left-5 lg:left-10" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Main
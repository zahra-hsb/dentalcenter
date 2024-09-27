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
            <section className="w-full px-10 sm:px-16 flex flex-col-reverse sm:flex-row gap-10 justify-between py-10">
                <div className="w-full flex flex-col items-start gap-10 text-justify">
                    <h1 className="tetx-darkGreen lg:text-6xl font-bold text-right sm:text-4xl text-4xl">دکتر <span className="text-green">وحید گماریان</span></h1>
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
                <div className="w-full h-full">
                    <div className="bg-green h-[350px] w-full p-10 rounded-[50px] rounded-ee-xl overflow-x-hidden"></div>
                </div>
            </section>
        </>
    )
}

export default Main
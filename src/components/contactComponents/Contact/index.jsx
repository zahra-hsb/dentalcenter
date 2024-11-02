'use client'
import InfoSection from "@/components/globalComponents/InfoSection"
import phone from '../../../../public/icons/phone.svg'
import location from '../../../../public/icons/location.svg'
import Link from "next/link"
import Input from "@/components/globalComponents/Input"
import Button from "@/components/globalComponents/Button"
import ContactForm from "../ContactForm"

const Contact = () => {

    function handleClearForm() {

    }
    return (
        <>
            <div className="p-20 flex flex-col lg:flex-row lg:items-center items-start justify-evenly gap-10">
                <div className="flex flex-col items-center lg:items-start justify-start w-full gap-8 h-full">
                    <h1 className="text-2xl font-bold">تماس با ما</h1>
                    <p>
                        شما میتوانید برای گرفتن ارتباط با ما با شماره های زیر تماس بگیرید.
                    </p>
                    <div className="flex flex-col gap-5">
                        <div className="flex justify-between">
                            <InfoSection info={
                                <>
                                    <Link href={'tel:02146807225'}>
                                        02146807225
                                    </Link>
                                </>
                            } title={'شماره تلفن'} icon={phone} />
                            <InfoSection info={
                                <>
                                    <Link href={'tel:09307709208'}>
                                        09307709208
                                    </Link>
                                </>
                            } title={'شماره تلفن'} icon={phone} />
                        </div>
                        <div className="flex">
                            <InfoSection info={'شهرقدس، میدان قدس، خیابان امام خمینی، جنب مسجد جامع'} title={'آدرس'} icon={location} />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5 w-full items-center lg:items-start">
                    <h1 className="text-2xl font-bold">فرم تماس با ما</h1>
                    <p>
                        برای گرفتن اطلاعات بیشتر میتوانید فرم زیر را پر کنید
                    </p>
                    <ContactForm />
                </div>
            </div>

        </>
    )
}

export default Contact
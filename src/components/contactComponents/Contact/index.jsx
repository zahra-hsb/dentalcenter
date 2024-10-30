import InfoSection from "@/components/globalComponents/InfoSection"
import phone from '../../../../public/icons/phone.svg'
import location from '../../../../public/icons/location.svg'
import Link from "next/link"

const Contact = () => {
    return (
        <>
            <div className="p-20 flex flex-col gap-5">
                <h1 className="text-2xl font-bold">تماس با ما</h1>
                <p>
                    شما میتوانید برای گرفتن ارتباط با ما با شماره های زیر تماس بگیرید.
                </p>
                <div className="flex gap-5">
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
                    <InfoSection info={'شهرقدس، میدان قدس، خیابان امام خمینی، جنب مسجد جامع'} title={'آدرس'} icon={location} />
                </div>
            </div>

        </>
    )
}

export default Contact
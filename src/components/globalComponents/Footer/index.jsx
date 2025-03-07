import Menu from "../Menu"
import phone from '../../../../public/icons/phone.svg'
import insta from '../../../../public/icons/insta.svg'
import Logo from "../Logo"
import Link from "next/link"
import Image from "next/image"
import IconContainer from "../IconContainer"
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="bg-green w-full lg:px-32 py-10 h-full bg-opacity-20 flex justify-between items-center sm:flex-col-reverse lg:flex-row flex-col-reverse gap-10 ">
                <div className="flex flex-col items-center lg:items-start gap-2">
                    <Logo />
                    <h5 className="text- text-md lg:text-xl font- my- text-gray-600">زیبایی را با ما تجربه کنید.</h5>
                    <div className="flex justify-between items-center gap-5 mt-5">
                        <Link href={'#'}>
                            <IconContainer style={'!bg-white hover:!bg-darkGreen transition-all duration-300'}>
                                <Image src={insta} alt="" />
                            </IconContainer>
                        </Link>
                        <Link href={'#'}>
                            <IconContainer style={'!bg-white hover:!bg-darkGreen transition-all duration-300'}>
                                <FaTelegramPlane className="text-green" size={25} />
                            </IconContainer>
                        </Link>

                    </div>

                </div>
                <div className="flex flex-col items-start gap-5">
                    <h4 className="text-lg font-semibold">فهرست</h4>
                    <Menu style={'flex-col !items-start text-gray-600 text-sm !gap-5 !flex'} />
                </div>
                <div className="flex flex-col items-center lg:items-start gap-5 px-5">
                    <h4 className="text-lg font-semibold">تماس با ما</h4>
                    <div className="flex flex-col items-center lg:items-start">
                        <p className="text-sm mb-1">شماره تلفن:</p>
                        <p className="text-gray-500 text-sm">0214807225 - 09307719208</p>
                    </div>
                    <div className="flex flex-col items-center lg:items-start">
                        <p className=" text-sm mb-1">آدرس:</p>
                        <p className="text-gray-500 text-sm text-center lg:text-start">شهرقدس، میدان قدس، خیابان امام خمینی، جنب مسجد جامع</p>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer
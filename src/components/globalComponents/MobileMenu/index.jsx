import Link from "next/link";
import Menu from "../Menu"
import { MdClose } from "react-icons/md";
import { LuInstagram } from "react-icons/lu";
import { FaTelegram } from "react-icons/fa";
import PhoneButton from "../PhoneButton";

const MobileMenu = ({ isShow, closeMenu }) => {
    return (
        <>
            <div className={`w-full h-full p-10 fixed bottom-0 left-0 backdrop-blur-md flex flex-col justify-between gap-10 ${isShow ? 'opacity-100 z-50' : 'opacity-0 -z-10 -translate-x-full'} transition-all duration-300`}>
                <div className="flex flex-col">
                    <span onClick={closeMenu}>
                        <MdClose className={isShow ? `scale-100` : `scale-0`} size={25} color="red" />
                    </span>
                    <Menu style={'!flex-col-reverse !flex items-center justify-center !text-darkBlue'} />
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex gap-5">
                        <Link href={'#'} className="">
                            <LuInstagram size={20} color="#0F2650" className="hover:text-[#01CFC9]" />
                        </Link>
                        <Link href={'#'} className="">
                            <FaTelegram size={20} color="#0F2650" className="hover:text-[#01CFC9]" />
                        </Link>
                    </div>
                    <PhoneButton text={'دریافت نوبت'} />
                </div>
            </div>
        </>
    )
}

export default MobileMenu
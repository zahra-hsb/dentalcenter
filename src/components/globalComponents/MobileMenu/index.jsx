import Link from "next/link";
import Menu from "../Menu"
import { MdClose } from "react-icons/md";
import { LuInstagram } from "react-icons/lu";
import { FaTelegram } from "react-icons/fa";

const MobileMenu = ({ isShow, closeMenu }) => {
    return (
        <>
            <div className={`w-full h-screen p-10 fixed bottom-0 left-0 bg-darkGreen flex flex-col justify-between gap-10 ${isShow ? 'opacity-100 z-50' : 'opacity-0 -z-10 -translate-x-full'} `}>
                <div className="flex flex-col">
                    <span onClick={closeMenu}>
                        <MdClose className={isShow ? `scale-100` : `scale-0`} size={25} color="red" />
                    </span>
                    <Menu style={'!flex-col-reverse !flex items-center justify-center text-white'} />
                </div>
                <div className="flex gap-5">
                    <Link href={'#'} className="">
                        <LuInstagram size={20} color="white" />
                    </Link>
                    <Link href={'#'} className="">
                        <FaTelegram size={20} color="white" />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default MobileMenu
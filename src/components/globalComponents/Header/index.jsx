'use client'
import DesktopMenu from "../DesktopMenu"
import Logo from "../Logo"
import { IoMenu } from "react-icons/io5";
import PhoneButton from "../PhoneButton";
import { useState } from "react";
import MobileMenu from "../MobileMenu";
import Button from "../Button";

const Header = () => {
    const [isShow, setShow] = useState(false)

    function openMenu() {
        setShow(true)
    }

    function closeMenu() {
        setShow(false)
    }
    return (
        <>
            <header className="w-9/10 py-5 sm:py-10 px-3 sm:px-16 lg:px-28 flex justify-between items-center gap-5 bg-opacity-50 sm:bg-opacity-100 m-3 sm:m-0 bg-white sm:bg-bgColor shadow sm:shadow-none">
                <Logo />
                <MobileMenu closeMenu={closeMenu} isShow={isShow} />
                <DesktopMenu />
                <button onClick={openMenu} className={`sm:hidden ${isShow ? `rotate-90` : `rotate-0`} transition-all duration-300`}>
                    <IoMenu size={25} />
                </button>
                {/* <PhoneButton text={'تماس'} style={' hidden sm:block'} /> */}
                <Button link={'/account/login'} style={'py-3 hidden sm:block'}>
                    ورود پرسنل
                </Button>
            </header>
        </>
    )
}

export default Header
'use client'
import DesktopMenu from "../globalComponents/DesktopMenu"
import Logo from "../globalComponents/Logo"
import { IoMenu } from "react-icons/io5";
import PhoneButton from "../globalComponents/PhoneButton";
import { useState } from "react";
import MobileMenu from "../globalComponents/MobileMenu";
import Button from "../globalComponents/Button";

const Header = () => {
    const [isShow, setShow] = useState(false)

    function openMenu() {
        console.log('opened!');
        setShow(true)
    }

    function closeMenu() {
        setShow(false)
    }
    return (
        <>
            <header className="w-9/10 py-5 sm:py-10 px-3 sm:px-12 lg:px-16 flex justify-between items-center gap-5 bg-opacity-50 sm:bg-opacity-100 m-3 sm:m-0 bg-white sm:bg-bgColor shadow sm:shadow-none">
                <Logo />
                <MobileMenu closeMenu={closeMenu} isShow={isShow} />
                <DesktopMenu />
                <button onClick={openMenu} className={`sm:hidden ${isShow ? `rotate-90` : `rotate-0`} transition-all duration-300`}>
                    <IoMenu size={25} />
                </button>
                {/* <PhoneButton text={'تماس'} style={' hidden sm:block'} /> */}
                <Button link={'/login'} style={'py-3 hidden sm:block'}>
                    ورود پرسنل
                </Button>
            </header>
        </>
    )
}

export default Header
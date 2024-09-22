'use client'
import DesktopMenu from "../globalComponents/DesktopMenu"
import Logo from "../globalComponents/Logo"
import { IoMenu } from "react-icons/io5";
import PhoneButton from "../globalComponents/PhoneButton";
import { useState } from "react";
import MobileMenu from "../globalComponents/MobileMenu";

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
            <header className="py-5 sm:py-10 px-3 sm:px-16 lg:px-16 flex justify-between items-center gap-5 bg-opacity-50 sm:bg-opacity-100 m-5 sm:m-0 bg-white sm:bg-bgColor shadow sm:shadow-none">
                <Logo />
                <MobileMenu closeMenu={closeMenu} isShow={isShow} />
                <DesktopMenu />
                <button onClick={openMenu} className={`sm:hidden ${isShow ? `rotate-90` : `rotate-0`}`}>
                    <IoMenu size={25} />
                </button>
                <PhoneButton text={'دریافت نوبت'} style={'hidden sm:block'} />
            </header>
        </>
    )
}

export default Header
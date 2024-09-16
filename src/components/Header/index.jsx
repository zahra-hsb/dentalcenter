import Link from "next/link"
import Button from "../globalComponents/Button"
import DesktopMenu from "../globalComponents/DesktopMenu"
import Logo from "../globalComponents/Logo"
import { IoMenu } from "react-icons/io5";
import PhoneButton from "../globalComponents/PhoneButton";

const Header = () => {
    return (
        <>
            <header className="py-5 sm:py-10 px-3 sm:px-16 lg:px-16 flex justify-between items-center gap-5 bg-opacity-50 sm:bg-opacity-100 m-5 sm:m-0 bg-white sm:bg-bgColor shadow sm:shadow-none">
                <PhoneButton />
                <span>
                    <IoMenu size={25} />
                </span>
                <DesktopMenu />
                <Logo />
            </header>
        </>
    )
}

export default Header
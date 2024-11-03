'use client'
import useScreenSize from "@/customHooks/Screen"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Menu = ({ closeMenu, style }) => {
    const pathname = usePathname()
    const { isMobile } = useScreenSize()

    function handleCloseMenu() {
        if (isMobile) {
            closeMenu()
        }
    }

    return (
        <>
            <ul className={"hidden sm:flex justify-between items-center gap-10 " + style}>
                <li className={`hover:text-green transition-all duration-300 text-nowrap `}>
                    <Link href={'/'} onClick={handleCloseMenu} className={pathname === '/' ? 'text-green' : ''}>
                        صفحه اصلی
                    </Link>
                </li>
                <li className="hover:text-green transition-all duration-300 text-nowrap">
                    <Link href={'/about'} onClick={handleCloseMenu} className={pathname === '/about' ? 'text-green' : ''}>
                        درباره ما
                    </Link>
                </li>
                {/* <li></li> */}
                <li className="hover:text-green transition-all duration-300 text-nowrap">
                    <Link href={'/contact'} onClick={handleCloseMenu} className={pathname === '/contact' ? 'text-green' : ''}>
                        تماس با ما
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default Menu
'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

const Menu = ({ style }) => {
    const pathname = usePathname()

    return (
        <>
            <ul className={"hidden sm:flex justify-between items-center gap-10 " + style}>
                <li className={`hover:text-green transition-all duration-300 text-nowrap `}>
                    <Link href={'/'} className={pathname === '/' ? 'text-green' : ''}>
                        صفحه اصلی
                    </Link>
                </li>
                <li className="hover:text-green transition-all duration-300 text-nowrap">
                    <Link href={'/about'} className={pathname === '/about' ? 'text-green' : ''}>
                        درباره ما
                    </Link>
                </li>
                {/* <li></li> */}
                <li className="hover:text-green transition-all duration-300 text-nowrap">
                    <Link href={'/contact'} className={pathname === '/contact' ? 'text-green' : ''}>
                        تماس با ما
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default Menu
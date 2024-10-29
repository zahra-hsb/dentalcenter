import Link from "next/link"

const Menu = ({ style }) => {
    return (
        <>
            <ul className={"hidden sm:flex justify-between items-center gap-10 " + style}>
                <li className="hover:text-green transition-all duration-300 text-nowrap">
                    <Link href={'/'} >
                        صفحه اصلی
                    </Link>
                </li>
                <li className="hover:text-green transition-all duration-300 text-nowrap">
                    <Link href={'/about'}>
                        درباره ما
                    </Link>
                </li>
                {/* <li></li> */}
                <li className="hover:text-green transition-all duration-300 text-nowrap">
                    <Link href={'#'}>
                        تماس با ما
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default Menu
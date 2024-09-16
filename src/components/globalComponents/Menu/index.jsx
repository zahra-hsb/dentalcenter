import Link from "next/link"

const Menu = ({ style }) => {
    return (
        <>
            <ul className={"hidden sm:flex justify-between items-center gap-10 " + style}>
                <li>
                    <Link href={'#'}>
                        درباره ما
                    </Link>
                </li>
                {/* <li></li> */}
                <li>
                    <Link href={'#'}>
                        تماس با ما
                    </Link>
                </li>
                <li>
                    <Link href={'/'} >
                        صفحه اصلی
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default Menu
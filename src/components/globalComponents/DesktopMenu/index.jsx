import Link from "next/link"

const DesktopMenu = () => {
    return (
        <>
            <nav>
                <ul className="hidden sm:flex justify-between items-center gap-10">
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
            </nav>
        </>
    )
}

export default DesktopMenu
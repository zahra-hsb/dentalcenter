import Link from "next/link"
import Button from "../globalComponents/Button"

const Header = () => {
    return (
        <>
            <header className="py-5 sm:py-10 px-3 sm:px-16 lg:px-16 flex justify-between items-center gap-5 bg-opacity-50 sm:bg-opacity-100 m-5 sm:m-0 bg-white sm:bg-bgColor shadow sm:shadow-none">
                <nav className="">
                    <Button link={'tel:#'}>
                        تماس
                    </Button>
                </nav>
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
                <nav className="">
                    <h3 className="uppercase text-darkGreen font-extrabold text-lg sm:text-3xl">
                        dental
                        <span className="text-green">center</span>
                    </h3>
                </nav>
            </header>
        </>
    )
}

export default Header
import Link from "next/link"
import Button from "../globalComponents/Button"

const Header = () => {
    return (
        <>
            <header className="py-10 px-20 flex justify-between">
                <nav className="">
                    <Button link={'tel:#'}>
                        تماس
                    </Button>
                </nav>
                <nav>
                    <ul className="flex justify-between items-center gap-10">
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
                <nav>
                    <h3 className="uppercase text-darkGreen font-extrabold text-3xl">
                        dental
                        <span className="text-green">center</span>
                    </h3>
                </nav>
            </header>
        </>
    )
}

export default Header
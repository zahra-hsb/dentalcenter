import Image from "next/image"
import logo from '../../../../public/pictures/logo/logo.png'
import Link from "next/link"

const Logo = ({ style, isLoading = false }) => {
    return (
        <>
            <nav className={`flex items-center gap-2 ${style}`}>
                {/* <h3 className={`uppercase text-darkGreen font-extrabold text-lg sm:text-3xl ${style}`}>
                    dental
                    <span className="text-green">center</span>
                </h3> */}
                <Link href={'/'}>
                    <Image className={`w-[50px] ${isLoading && 'animate-pulse w-[100px]'}`} src={logo} alt="" />
                </Link>
                <p className="sm:text-xl font-bold text-nowrap">دکتر وحید گماریان</p>
            </nav>
        </>
    )
}

export default Logo
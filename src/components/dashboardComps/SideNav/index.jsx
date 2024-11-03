'use client'
import Logo from "@/components/globalComponents/Logo"
import Link from "next/link"
import { MdDashboard } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import { RiAdminFill, RiLogoutBoxRLine } from "react-icons/ri";
import { usePathname, useRouter } from "next/navigation";

const menu = [
    { id: 0, title: 'داشبورد', route: '/account/dashboard', icon: <> <MdDashboard size={25} /> </> },
    { id: 1, title: 'مدیریت وبلاگ', route: '/account/dashboard/blog', icon: <> <TiEdit size={25} /> </> },
    { id: 2, title: 'ادمین ها', route: '/account/dashboard/admins', icon: <> <RiAdminFill size={25} /> </> },
    { id: 3, title: 'خروج', route: '', icon: <> <RiLogoutBoxRLine size={25} />  </> },
]

const SideNav = ({ style, isShow, handleCloseMenu }) => {
    const pathname = usePathname()
    const router = useRouter()

    function handleExit() {
        router.push('/')
    }
    return (
        <>
            <div onClick={handleCloseMenu} className={`block lg:hidden w-screen cursor-pointer h-screen absolute top-0 left-0 z-40 bg-darkGreen opacity-20 ${isShow ? 'block' : 'hidden'}`}></div>
            <div className={style}>
                <Logo style={'text-inherit mb-10 !text-lg'} />
                <ul className="flex flex-col items-start gap-8 border-r pr-5 border-r-green">
                    {menu?.map(item => (
                        <li className=" w-full" key={item.id}>
                            {item.id === menu.length - 1 ?
                                <button onClick={handleExit} className={` ${item.route === pathname
                                    && 'text-green'} flex gap-2 items-center justify-start group`}>
                                    {item.icon}
                                    <a
                                        className={`hover:-translate-x-3 transition-all duration-300 group-hover:text-green`}
                                        onClick={
                                            handleCloseMenu
                                        }
                                    >
                                        <>{item.title}</>
                                    </a>
                                </button>
                                :
                                <Link className={` ${item.route === pathname
                                    && 'text-green'} group flex gap-2 items-center justify-start`}
                                    onClick={
                                        handleCloseMenu
                                    }
                                    href={item.route}>
                                    {item.icon}
                                    <p className={`hover:-translate-x-3 group-hover:text-green transition-all duration-300`}>{item.title}</p>
                                </Link>
                            }
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default SideNav
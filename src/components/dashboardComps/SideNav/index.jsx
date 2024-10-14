'use client'
import Logo from "@/components/globalComponents/Logo"
import Link from "next/link"
import { MdDashboard } from "react-icons/md";
import { TiEdit } from "react-icons/ti";
import { RiAdminFill, RiLogoutBoxRLine } from "react-icons/ri";
import { usePathname } from "next/navigation";

const menu = [
    { id: 0, title: 'داشبورد', route: '/dashboard', icon: <> <MdDashboard size={25} /> </> },
    { id: 1, title: 'مدیریت وبلاگ', route: '/dashboard/blog', icon: <> <TiEdit size={25} /> </> },
    { id: 2, title: 'ادمین ها', route: '/dashboard/admins', icon: <> <RiAdminFill size={25} /> </> },
    { id: 3, title: 'خروج', route: '', icon: <> <RiLogoutBoxRLine size={25} />  </> },
]

const SideNav = ({ style }) => {
    const pathname = usePathname()
    return (
        <>
            <div className={style}>
                <Logo style={'text-inherit mb-10 !text-lg'} />
                <ul className="flex flex-col items-start gap-8 border-r pr-5 border-r-green">
                    {menu?.map(item => (
                        <li className=" w-full" key={item.id}>
                            <Link className={` ${item.route === pathname
                                && 'text-green'} flex gap-2 items-center justify-start`} href={item.route}>
                                {item.icon}
                                <p className={`hover:-translate-x-3 transition-all duration-300`}>{item.title}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default SideNav
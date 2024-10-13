import Logo from "@/components/globalComponents/Logo"
import Link from "next/link"

const menu = [
    { id: 1, title: 'داشبورد', route: '/dashboard', icon: '' },
    { id: 2, title: 'مدیریت وبلاگ', route: '/dashboard/blog', icon: '' },
    { id: 3, title: 'ادمین ها', route: '', icon: '' },
    { id: 4, title: 'خروج', route: '', icon: '' },
]

const SideNav = () => {
    return (
        <>
            <Logo style={'!text-white mb-10 !text-lg'} />
            <ul className="flex flex-col items-start gap-5">
                {menu?.map(item => (
                    <>
                        <li>
                            <Link key={item.id} href={item.route}>
                                {item.title}
                                {item.icon}
                            </Link>
                        </li>
                    </>
                ))}
            </ul>
        </>
    )
}

export default SideNav
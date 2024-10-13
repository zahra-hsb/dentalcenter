import Logo from "@/components/globalComponents/Logo"
import Link from "next/link"

const menu = [
    { id: 1, title: 'داشبورد', route: '', icon: '' },
    { id: 2, title: 'مدیریت وبلاگ', route: '', icon: '' },
    { id: 3, title: 'کاربران', route: '', icon: '' },
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
                            <Link href={'#'}>
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
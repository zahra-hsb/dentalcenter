import DashboardBlogList from "@/components/dashboardComps/DashboardBlogList"
import Link from "next/link"
import { FaRegEdit } from "react-icons/fa"

const blog = () => {
    return (
        <section className="px-5 py-10 sm:p-20 relative">
            <h4 className="text-2xl font-semibold text-center sm:text-start mb-10 text-slate-600">لیست بلاگ ها</h4>
            <DashboardBlogList />
            <Link href={'/dashboard/blog/add'} className={'fixed group p-3 hover:text-green pb-3 !text-center flex items-center gap-2 border-4  border-blue-900  rounded-full bottom-10  lg:left-10 z-40'}>
                <FaRegEdit size={25} className="group-hover:text-green" />
            </Link>
        </section>
    )
}

export default blog
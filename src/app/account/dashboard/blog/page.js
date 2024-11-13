import DashboardBlogList from "@/components/dashboardComps/DashboardBlogList"
import Link from "next/link"
import { FaRegEdit } from "react-icons/fa"

const blog = () => {
    return (
        <section className="px-5 py-10 sm:p-20 relative  h-screen overflow-y-auto">
            <h4 className="text-2xl font-semibold text-center sm:text-start mb-10 text-slate-600">لیست بلاگ ها</h4>
            <DashboardBlogList />
        </section>
    )
}

export default blog
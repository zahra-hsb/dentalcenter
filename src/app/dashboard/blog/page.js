import DashboardBlogList from "@/components/dashboardComps/DashboardBlogList"

const blog = () => {
    return (
        <section className="px-5 py-10 sm:p-20">
            <h4 className="text-2xl font-semibold text-center sm:text-start mb-10 text-slate-600">لیست بلاگ ها</h4>
            <DashboardBlogList />
        </section>
    )
}

export default blog
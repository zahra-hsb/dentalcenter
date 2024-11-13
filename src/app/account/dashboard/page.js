import Container from "@/components/globalComponents/Container"
import { PiArticleNyTimesFill } from "react-icons/pi";


const dashboard = () => {
    return (
        <>
            <section className="p-5 sm:p-20 h-screen overflow-y-auto">
                {/* <!-- component --> */}
                <h4 className="text-2xl font-semibold text-center sm:text-start">داشبورد مدیریت</h4>
                <div className="py-10 flex flex-col sm:flex-row gap-5">
                    <Container style={'!w-full sm:!w-1/3'}>
                        {/* <PiArticleNyTimesFill className="group-hover:text-white text-green" size={30} /> */}
                        <span className="text-green group-hover:text-white font-semibold text-3xl">27</span>
                        <h3 className="group-hover:text-green">تعداد مقاله ها</h3>
                    </Container>
                    <Container style={'!w-full sm:!w-1/3'}>
                        {/* <PiArticleNyTimesFill className="group-hover:text-white text-green" size={30} /> */}
                        <span className="text-green group-hover:text-white font-semibold text-3xl">2</span>
                        <h3 className="group-hover:text-green">تعداد ادمین ها</h3>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default dashboard
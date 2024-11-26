import EditPersonalInfo from "@/components/dashboardComps/EditPersonalInfo";
import InfoBox from "@/components/dashboardComps/InfoBox";
import InfoSectionDashboard from "@/components/dashboardComps/InfoSectionDashboard";
import Container from "@/components/globalComponents/Container"
import { PiArticleNyTimesFill } from "react-icons/pi";


const dashboard = () => {
    return (
        <>
            <section className="p-5 sm:p-20 h-screen overflow-y-auto">
                {/* <!-- component --> */}
                <h4 className="text-2xl font-semibold text-center sm:text-start">داشبورد مدیریت</h4>
                <hr className="my-5" />
                <EditPersonalInfo />
                <InfoSectionDashboard />
            </section>
        </>
    )
}

export default dashboard
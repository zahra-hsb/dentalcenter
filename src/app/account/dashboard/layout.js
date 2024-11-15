import ShowMenuButton from "@/components/dashboardComps/ShowMenuButton";
import SideNav from "@/components/dashboardComps/SideNav";
import UserInfo from "@/components/dashboardComps/UserInfo";

export default function Layout({ children }) {
    
    return (
        <>
            <section className="w-screen h-full flex gap-2 flex-col lg:flex-row">
                <div className="hidden w-full lg:flex flex-col justify-between md:w-1/5 bg-darkGreen text-white h-screen p-5 lg:p-8">
                    <SideNav />
                    <UserInfo />
                </div>
                <ShowMenuButton />
                <div className="w-full">
                    {children}
                </div>
            </section>
        </>
    )
}
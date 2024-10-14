import ShowMenuButton from "@/components/dashboardComps/ShowMenuButton";
import SideNav from "@/components/dashboardComps/SideNav";

export default function Layout({ children }) {
    
    return (
        <>
            <section className="w-screen h-full flex gap-2 flex-col lg:flex-row">
                <div className="hidden lg:block w-full flex-none md:w-1/4 bg-darkGreen text-white h-screen p-5 sm:p-5 lg:p-10">
                    <SideNav />
                </div>
                <ShowMenuButton />
                <div className="w-full">
                    {children}
                </div>
            </section>
        </>
    )
}
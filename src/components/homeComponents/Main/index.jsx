import PhoneButton from "@/components/globalComponents/PhoneButton"
import { FaPhone } from "react-icons/fa"

const Main = () => {
    return (
        <>
            <section className="px-20">
                <div className="flex flex-col gap-10">
                    <h1 className="tetx-darkGreen text-6xl font-bold">دکتر <span className="text-green">وحید گماریان</span></h1>
                    <h5 className="text-3xl">به مطب دندانپزشکی دنتال سنتر خوش آمدید.</h5>
                    <PhoneButton text={
                        <>
                            همین حالا تماس بگیر
                        </>
                    } />
                </div>
                <div></div>
            </section>
        </>
    )
}

export default Main
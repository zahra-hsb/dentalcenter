import Container from "@/components/globalComponents/Container"
import { TbDental } from "react-icons/tb";
import { TbDentalBroken, TbFreeRights } from "react-icons/tb";
import { GiToothbrush } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";

const TitlesSection = () => {
    return (
        <>
            <section className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-1 gap-10 px-16 pb-20">
                <Container>
                    <div className=" text-center h-28 flex flex-col gap-3 items-center lg:justify-start justify-center">
                        <GiToothbrush size={40} className="group-hover:text-white text-green" />
                        <p className="group-hover:text-green sm:text-xs lg:text-sm">
                            آموزش مراقبت‌های پیشگیرانه بیماری‌های لثه و دندان
                        </p>
                    </div>
                </Container>
                <Container>
                    <div className=" text-center h-28 flex flex-col gap-3 items-center lg:justify-start justify-center ">
                        <TbDentalBroken size={40} className="group-hover:text-white text-green" />
                        <p className="group-hover:text-green">
                            کنترل پلاک و جرم
                        </p>
                    </div>
                </Container>
                <Container>
                    <div className="text-center h-28 flex flex-col gap-3 items-center lg:justify-start justify-center ">
                        <TbDental size={40} className="group-hover:text-white text-green" />
                        <p className="group-hover:text-green">
                            ارائه بهترین روش‌های معاینه و تشخیص
                        </p>
                    </div>
                </Container>
                <Container>
                    <div className="text-center h-28 flex flex-col gap-3 items-center lg:justify-start justify-center ">
                        <FaUserDoctor size={40} className="group-hover:text-white text-green" />
                        <p className="group-hover:text-green sm:text-sm">
                            درمان بیماران با نهایت احترام و توجه به حساسیت‌ها
                        </p>
                    </div>
                </Container>
                <Container>
                    <div className="text-center h-28 flex flex-col gap-3 items-center lg:justify-start justify-center ">
                        <TbFreeRights size={40} className="group-hover:text-white text-green" />
                        <p className="group-hover:text-green">
                            ویزیت و مشاوره رایگان
                        </p>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default TitlesSection
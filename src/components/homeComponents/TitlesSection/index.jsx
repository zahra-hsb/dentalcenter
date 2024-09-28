import Container from "@/components/globalComponents/Container"
import { TbDental } from "react-icons/tb";
import { TbDentalBroken } from "react-icons/tb";
import { GiToothbrush } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";

const TitlesSection = () => {
    return (
        <>
            <section className="flex gap-10 px-28 items-center justify-between">
                <Container>
                    <div className=" text-center h-24 flex flex-col gap-3 items-center justify-center">
                        <GiToothbrush size={40} className="group-hover:text-white text-green" />
                        <p className="group-hover:text-green">
                            آموزش مراقبت‌های پیشگیرانه بیماری‌های لثه و دندان
                        </p>
                    </div>
                </Container>
                <Container>
                    <div className=" text-center h-24 flex flex-col gap-3 items-center justify-center">
                        <TbDentalBroken size={40} className="group-hover:text-white text-green" />
                        <p className="group-hover:text-green">
                            کنترل پلاک و جرم
                        </p>
                    </div>
                </Container>
                <Container>
                    <div className="text-center h-28 flex flex-col gap-3 items-center justify-center">
                        <TbDental size={40} className="group-hover:text-white text-green" />
                        <p className="group-hover:text-green">
                            ارائه بهترین روش‌های معاینه و تشخیص
                        </p>
                    </div>
                </Container>
                <Container>
                    <div className="text-center h-28 flex flex-col gap-3 items-center justify-center">
                        <FaUserDoctor size={40} className="group-hover:text-white text-green" />
                        <p className="group-hover:text-green">
                            درمان بیماران با نهایت احترام و توجه به حساسیت‌ها
                        </p>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default TitlesSection
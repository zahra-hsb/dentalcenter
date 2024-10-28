import Image from "next/image"
import clock from '../../../../public/icons/clock.svg'
import terms from '../../../../public/icons/🦆 icon _terms of delivery_.svg'
import DentalSlider from "../DentalSlider"

const AboutComponent = () => {
    return (
        <>
            <section className="w-full px-10 sm:px-16 lg:px-28 flex flex-col-reverse sm:flex-col-reverse lg:flex-row gap- justify-between items-center py-12">
                <div className="w-full">
                    <p className="text-green font-semibold text-2xl mb-2">
                        درباره
                    </p>
                    <h3 className="text-3xl font-bold text-darkGreen">دنتال کلینیک</h3>
                    <p className="text-justify text-lg leading-7 py-5">
                        کلینیک ما متعهد به ارائه تجربیات و خدمات و مواد مصرفی و همچنین بهداشت با کیفیت به بیماران می‌باشد و همچنین به صورت رایگان آماده  ارائه راهنمایی‌ها و آموزش‌های  لازم به بیماران در زمینه بهداشت دهان و دندان می‌باشد

                        این مرکز متعهد است در تشخیص بیماری‌های دهان و دندان، ترمیم و درمان ریشه دندان، پروتزهای دندانی روکش دندانی ، اقدامات زیبایی و ایمپلنت و ...کمک رسانی کند.
                    </p>

                    <div className="flex flex-col sm:items-start items-center gap-8 my-8">
                        <div className="flex sm:flex-row flex-col items-center justify-start gap-5">
                            {/* icon */}
                            <div className="p-4 rounded-lg bg-green bg-opacity-30">
                                <Image src={clock} alt="" />
                            </div>
                            {/* texts */}
                            <div className="h-full flex flex-col justify-between items-center sm:items-start gap-3 w-2/3">
                                <h4 className="font-semibold text-lg ">جدول زمانی کامل برای همه</h4>
                                <h6 className="text-justify">ما همه روزه در از ساعت 9 صبح تا 9 شب آماده خدمات رسانی هستیم</h6>
                            </div>
                        </div>
                        <div className="flex sm:flex-row flex-col items-center justify-start gap-5">
                            {/* icon */}
                            <div className="p-4 rounded-lg bg-green bg-opacity-30">
                                <Image src={terms} alt="" width={50} />
                            </div>
                            {/* texts */}
                            <div className="h-full flex flex-col justify-between items-center sm:items-start  gap-3 w-2/3">
                                <h4 className="font-semibold text-lg ">شرایط پرداخت</h4>
                                <h6 className="text-justify">DentalCenter یک طرح پرداخت سفارشی ارائه می دهد، سلامت بیمار همیشه باید اولین هدف ما باشد.</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[80%] lg:w-1/2 lg:pr-0 pb-10">
                    <div className="w-full h-full flex items-center justify-end">
                        {/* <div className="bg-green rounded-[50px] rounded-ee-xl w-[300px] h-[300px]"></div> */}
                        <DentalSlider />
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutComponent
'use client'
import implant from '../../../../public/icons/🦆 emoji _tooth_.svg'
import toothClean from '../../../../public/icons/🦆 icon _teeth clean_.svg'
import toothDrill from '../../../../public/icons/🦆 icon _tooth drill_.svg'
import dentist from '../../../../public/icons/Group 3.svg'
import Container from "@/components/globalComponents/Container"
import Image from "next/image"
import Button from '@/components/globalComponents/Button'

const Services = () => {
    return (
        <>
            <section className="w-full px-5 sm:px-16 flex flex-col items-center gap-5 justify-between py-10">
                <div className='text-center mb-5'>
                    <h5 className="text-green text-md lg:text-2xl font-bold my-1">زیبایی را با ما تجربه کنید.</h5>
                    <h3 className="text-darkGreen text-2xl sm:text-4xl font-bold my-2">خدمات دنتال کلینیک</h3>
                </div>
                <div className='w-full grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 px-10 lg:px-0'>
                    <Container>
                        <div className="bg-green h-24 w-24 flex items-center justify-center rounded-xl p-2 px-5 bg-opacity-50 group-hover:bg-opacity-100">
                            <Image src={toothDrill} alt="" /> 
                        </div>
                        <h3 className='text-xl font-bold group-hover:text-green'>ایمپلنت اقساطی</h3>
                        <h3 className='group-hover:text-white'>پرداخت تا 6 ماه</h3>
                    </Container>
                    <Container>
                        <div className="bg-green h-24 w-24 flex rounded-xl p-2  bg-opacity-50 group-hover:bg-opacity-100">
                            <Image src={toothClean} alt="" /> 
                        </div>
                        <h3 className='text-xl font-bold group-hover:text-green'>روکش</h3>
                        <h3 className='group-hover:text-white'>پروتز ثابت</h3>
                    </Container>
                    <Container>
                        <div className="bg-green h-24 w-24 flex items-center justify-center rounded-xl p-2 bg-opacity-50 group-hover:bg-opacity-100">
                            <Image src={implant} alt="" /> 
                        </div>
                        <h3 className='text-xl font-bold group-hover:text-green'>ترمیم، لمینت</h3>
                        <h3 className='group-hover:text-white'>کامپوزیت زیبایی</h3>
                    </Container>
                    <Container>
                        <div className="bg-green h-24 w-24 flex items-center justify-center rounded-xl p-2 bg-opacity-50 group-hover:bg-opacity-100">
                            <Image src={dentist} alt="" /> 
                        </div>
                        <h3 className='text-xl font-bold group-hover:text-green'>درمان ریشه</h3>
                        <h3 className='group-hover:text-white'>عصب کشی</h3>
                    </Container>
                </div>
                <div className='py-5'>
                    <Button link={'/contact'}>
                        تماس با ما
                    </Button>
                </div>
            </section>
        </>
    )
}

export default Services
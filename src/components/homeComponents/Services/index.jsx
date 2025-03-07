'use client'

import Button from '@/components/globalComponents/Button'
import Slider from '@/components/globalComponents/Slider'
import { mainPageSlides } from '@/lib/data'

const Services = () => {
    return (
        <>
            <section className="w-full px-5 sm:px-16 flex flex-col items-center gap-5 justify-between py-10">
                <div className='text-center mb-5'>
                    <h5 className="text-green text-md lg:text-2xl font-bold my-1">زیبایی را با ما تجربه کنید.</h5>
                    <h3 className="text-darkGreen text-2xl sm:text-4xl font-bold my-2">خدمات دنتال کلینیک</h3>
                </div>
                <div className='w-full px-10 lg:px-0'>
                    <Slider dataArray={mainPageSlides} type1={true} />
                </div>
                <div className='text-center'>
                    <h2 className='text-lg'>نیاز به مشاوره و معاینه رایگان دارید؟</h2>
                    <h3 className='py-2'>شما می توانید با ما تماس گرفته و مشاوره بگیرید. کلینیک ما با ارائه راه‌حل ها می تواند بهترین خدمات را به شما ارائه دهد.</h3>
                </div>
                <div className=''>
                    <Button link={'/contact'}>
                        تماس با ما
                    </Button>
                </div>
                <div>

                </div>
            </section>
        </>
    )
}

export default Services
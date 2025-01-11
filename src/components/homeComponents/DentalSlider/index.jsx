'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import { Autoplay, EffectCube, Pagination } from 'swiper/modules';
import Image from 'next/image';

import pic from '../../../../public/pictures/slides/photo_2024-10-24_12-01-41.jpg'
import pic1 from '../../../../public/pictures/slides/photo_2024-10-24_12-02-20.jpg'
import pic2 from '../../../../public/pictures/slides/photo_2024-10-24_12-30-44.jpg'
import pic3 from '../../../../public/pictures/slides/1.jpg'
import pic4 from '../../../../public/pictures/slides/2.jpg'
import pic5 from '../../../../public/pictures/slides/3.jpg'
import { useRef } from 'react';

const picsArray = [
    // { id: 1, src: pic, alt: '' },
    // { id: 2, src: pic1, alt: '' },
    // { id: 3, src: pic2, alt: '' },
    { id: 4, src: pic3, alt: '' },
    { id: 5, src: pic4, alt: '' },
    { id: 6, src: pic5, alt: '' },
]

const DentalSlider = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <div className='w-full pt- lg:max-w-[75%] lg:min-w-[70%]'>
                <Swiper
                    effect={'cube'}
                    grabCursor={true}
                    cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                    }}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    pagination={true}
                    modules={[EffectCube, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {picsArray.length > 0 ? picsArray?.map(item =>

                        <SwiperSlide key={item.id}>
                            <div className='lg:w-[350] flex items-center justify-end'>
                                <Image className={'w-full'} width={200} height={200} src={item.src} alt={item.alt} key={item.id} />
                            </div>
                        </SwiperSlide>

                    )
                        :
                        <div>موردی برای نمایش وجود ندارد...</div>}
                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>

            </div>
        </>
    )
}

export default DentalSlider
'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import content_main from '../assets/contentMain.png'
// Import Swiper styles
import 'swiper/css/bundle';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function Main() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='flex justify-between items-center w-[80%]'>
                        <div>
                            <h1 className='text-[#bdbdbd] text-[30px] md:text-[42px] lg:text-[62px] text-start leading-none'>PROJECT <span className='text-[#333333] font-[800]'>NURTOWN</span></h1>
                        </div>
                        <div className="img-main">
                            <Image src={content_main} alt='photo of skyscraper' className='max-w-[550px] min-h-[500px]' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-between items-center w-[80%]'>
                        <div>
                            <h1 className='text-[#bdbdbd] text-[30px] md:text-[42px] lg:text-[62px] text-start leading-none'>PROJECT <span className='text-[#333333] font-[800]'>NURTOWN</span></h1>
                        </div>
                        <div className="img-main">
                            <Image src={content_main} alt='photo of skyscraper' className='max-w-[550px] min-h-[500px]' />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-between items-center w-[80%]'>
                        <div>
                            <h1 className='text-[#bdbdbd] text-[30px] md:text-[42px] lg:text-[62px] text-start leading-none'>PROJECT <span className='text-[#333333] font-[800]'>NURTOWN</span></h1>
                        </div>
                        <div className="img-main">
                            <Image src={content_main} alt='photo of skyscraper' className='max-w-[550px] min-h-[500px]' />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

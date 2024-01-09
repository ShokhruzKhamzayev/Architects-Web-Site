'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import content_main from '../assets/contentMain.png'
// Import Swiper styles
import 'swiper/css/bundle';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import arrow_right from '../assets/arrow-right.svg'

export default function Main() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='flex justify-between items-center w-[80%] flex-col lg:flex-row gap-[30px]'>
                        <div>
                            <h1 className='text-[#bdbdbd] text-[30px] md:text-[42px] lg:text-[62px] text-start leading-none'>PROJECT <span className='text-[#333333] font-[800]'>NURTOWN</span></h1>
                        </div>
                        <div className="img-main relative">
                            <Image src={content_main} alt='photo of skyscraper' className='max-w-[550px] min-h-[200px] lg:min-h-[450px] custom-img' />
                            <div className="float-screen-main absolute bottom-[10px] left-[50%] -translate-x-[50%] lg:-translate-x-0 lg:left-0 lg:bottom-0">
                                <Link href={'/'} className='flex justify-center items-center bg-white min-w-[222px] h-[61px] gap-[10px]'>
                                    <p className='text-[12px]'>ВЗГЛЯНУТЬ</p>
                                    <Image src={arrow_right} alt='icon of arrow' className='w-[30px]' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-between items-center w-[80%] flex-col lg:flex-row gap-[30px]'>
                        <div>
                            <h1 className='text-[#bdbdbd] text-[30px] md:text-[42px] lg:text-[62px] text-start leading-none'>PROJECT <span className='text-[#333333] font-[800]'>NURTOWN</span></h1>
                        </div>
                        <div className="img-main relative">
                            <Image src={content_main} alt='photo of skyscraper' className='max-w-[550px] min-h-[200px] lg:min-h-[450px] custom-img' />
                            <div className="float-screen-main absolute bottom-[10px] left-[50%] -translate-x-[50%] lg:-translate-x-0 lg:left-0 lg:bottom-0">
                                <Link href={'/'} className='flex justify-center items-center bg-white min-w-[222px] h-[61px] gap-[10px]'>
                                    <p className='text-[12px]'>ВЗГЛЯНУТЬ</p>
                                    <Image src={arrow_right} alt='icon of arrow' className='w-[30px]'/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-between items-center w-[80%] flex-col lg:flex-row gap-[30px]'>
                        <div>
                            <h1 className='text-[#bdbdbd] text-[30px] md:text-[42px] lg:text-[62px] text-start leading-none'>PROJECT <span className='text-[#333333] font-[800]'>NURTOWN</span></h1>
                        </div>
                        <div className="img-main relative">
                            <Image src={content_main} alt='photo of skyscraper' className='max-w-[550px] min-h-[200px] lg:min-h-[450px] custom-img' />
                            <div className="float-screen-main absolute bottom-[10px] left-[50%] -translate-x-[50%] lg:-translate-x-0 lg:left-0 lg:bottom-0">
                                <Link href={'/'} className='flex justify-center items-center bg-white min-w-[222px] h-[61px] gap-[10px]'>
                                    <p className='text-[12px]'>ВЗГЛЯНУТЬ</p>
                                    <Image src={arrow_right} alt='icon of arrow' className='w-[30px]' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

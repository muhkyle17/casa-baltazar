import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper'
import 'swiper/css/bundle'
import placeholder from '../../public/placeholder-image.png'
import Image from 'next/image'

const Carousel = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='h-screen'
      >
        <SwiperSlide className='bg-teal//'>
          <Image src={placeholder} alt={'Carousel Image'} layout='responsive' />
        </SwiperSlide>
        <SwiperSlide className='bg-teal//'>
          <Image src={placeholder} alt={'Carousel Image'} layout='responsive' />
        </SwiperSlide>
        <SwiperSlide className='bg-teal//'>
          <Image src={placeholder} alt={'Carousel Image'} layout='responsive' />
        </SwiperSlide>
        <SwiperSlide className='bg-teal//'>
          <Image src={placeholder} alt={'Carousel Image'} layout='responsive' />
        </SwiperSlide>
        <SwiperSlide className='bg-teal//'>
          <Image src={placeholder} alt={'Carousel Image'} layout='responsive' />
        </SwiperSlide>
        <SwiperSlide className='bg-teal//'>
          <Image src={placeholder} alt={'Carousel Image'} layout='responsive' />
        </SwiperSlide>
        <SwiperSlide className='bg-teal//'>
          <Image src={placeholder} alt={'Carousel Image'} layout='responsive' />
        </SwiperSlide>
        <SwiperSlide className='bg-teal//'>
          <Image src={placeholder} alt={'Carousel Image'} layout='responsive' />
        </SwiperSlide>
        <SwiperSlide className='bg-teal//'>
          <Image src={placeholder} alt={'Carousel Image'} layout='responsive' />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Carousel

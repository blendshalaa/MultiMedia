/* eslint-disable no-unused-vars */
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import img1 from '../assets/me6.jpg'
import img2 from '../assets/me5.jpeg'
import img3 from '../assets/me4.jpg'
import img4 from '../assets/me3.jpg'
import img5 from '../assets/me2.jpg'
import img6 from '../assets/me1.jpeg'

function SliderClass() {
  return (
    <div>
        <div className='classes-wrapper'>


      <Swiper
          cssMode={false}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
          style={{width:"100%",height:"auto", display:"flex",
             justifyContent:"center",alignItems:"center"
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1524: {
              slidesPerView: 2,
              spaceBetween: 60,
            },
          }}
        >
          <SwiperSlide>
           <img style={{width:"600px"}}  src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
          <img style={{width:"600px"}} src={img2} alt="" />

          </SwiperSlide>
          <SwiperSlide>
          <img style={{width:"600px"}} src={img3} alt="" />

          </SwiperSlide>
          <SwiperSlide>
          <img style={{width:"600px"}} src={img4} alt="" />

          </SwiperSlide>
          <SwiperSlide>
          <img style={{width:"600px"}} src={img5} alt="" />

          </SwiperSlide> 
          <SwiperSlide>
          <img style={{width:"600px"}} src={img6} alt="" />

          </SwiperSlide>
        </Swiper>
      
      
      </div>
    </div>
  )
}

export default SliderClass
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Data } from "../data";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
    <h2>Infinite Slider</h2>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
            Data.map((item) => {
                return(
                    <SwiperSlide style={{
                        backgroundColor:'#ff2321',
                        height:'200px'
                    }} key={item.id}>{item.name}</SwiperSlide>
                )
            })
        }
      </Swiper>
    </>
  );
}

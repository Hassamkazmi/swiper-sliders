import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { Data } from "../data";


// import required modules
import { EffectCards } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
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

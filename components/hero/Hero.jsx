import "./hero.css";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

export const Hero = () => {
  const swiperRef = useRef(null);

  return (
    <div className="hero_wrapper">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        speed={700}
        onSlideChangeTransitionStart={() => {
          if (swiperRef.current) {
            swiperRef.current.wrapperEl.style.transitionTimingFunction =
              "cubic-bezier(.76,.29,.19,.83)";
          }
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        direction={"vertical"}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide style={{ backgroundColor: "black" }}>
          <p>Slide 1</p>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: "yellow" }}>
          <p>Slide 2</p>
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: "blue" }}>
          <p>Slide 3</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

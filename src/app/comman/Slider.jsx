"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";


export default function Slider() {
  return (
    <>
      <div className="max-w-[100vw] -z-50 mx-auto ">
        <div className=" -z-50 ">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Image
                src="/HomePageImgs/648e23d4-5e5d-4fd0-b0f7-856ee45c6629-1671388137.png"
                className="object-cover w-full -z-50"
                alt="Slide 1"
                width={800}
                height={300}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/HomePageImgs/541928cd-e696-4c09-9f1c-bc9d7127c451-1671388153.png"
                className="object-cover w-full -z-50"
                alt="Slide 2"
                width={800}
                height={300}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/HomePageImgs/add8f1ce-ae5a-4d6b-b573-8c208b6745d5-1671388062.png"
                className="object-cover w-full -z-50"
                alt="Slide 3"
                width={800}
                height={300}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

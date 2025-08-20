"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";

import { Heart, Star } from "lucide-react";
import { Pagination } from "swiper/modules";

export default function Slider3() {

    // array for star rating
  const starRating = [1, 2, 3, 4, 5];
  return (
    <>
      <Swiper slidesPerView={1} spaceBetween={10} className="mySwiper"
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}>
        <SwiperSlide>
          <div className=" px-4">
            <div className="max-w-4xl mx-auto text-center">
              {/* Heading */}
              <h2 className="text-2xl  text text-gray-800 mb-5 font-bold">
                What Our Customers Say ?
              </h2>

              {/* Testimonial Text */}
              <p className="text-[16px] text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
                These guys have been absolutely outstanding. Perfect Themes and
                the best of all that you have many options to choose! Best
                Support team ever! Very fast responding! Thank you very much! I
                highly recommend this theme and these people!
              </p>

              {/* Customer Profile */}
              <div className="flex flex-col items-center">
                {/* Profile Image */}
                <div className="w-24 h-24 mb-6">
                  <Image
                    src="/HomePageImgs/3023f95a-ce85-434c-b9c5-2b0943b865e2-1670161621.png"
                    alt="Kathy Young"
                    width={96}
                    height={96}
                    className="rounded-full object-cover"
                  />
                </div>

                {/* Customer Name */}
                <span className="block text-[16px] font-bold text-gray-800 mb-2 tracking-wider">
                  KATHY YOUNG
                </span>

                {/* Customer Title */}
                <p className="text-gray-600 text-[14px] mb-4">CEO of SunPark</p>

                {/* Star Rating */}
                <div className="flex gap-1">
                  {starRating.map((v, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#CA8A8A] text-[#CA8A8A]"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
         <SwiperSlide>
          <div className=" px-4">
            <div className="max-w-4xl mx-auto text-center">
              {/* Heading */}
              <h2 className="text-2xl  text text-gray-800 mb-5 font-bold">
                What Our Customers Say ?
              </h2>

              {/* Testimonial Text */}
              <p className="text-[16px] text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
                These guys have been absolutely outstanding. Perfect Themes and
                the best of all that you have many options to choose! Best
                Support team ever! Very fast responding! Thank you very much! I
                highly recommend this theme and these people!
              </p>

              {/* Customer Profile */}
              <div className="flex flex-col items-center">
                {/* Profile Image */}
                <div className="w-24 h-24 mb-6">
                  <Image
                    src="/HomePageImgs/3023f95a-ce85-434c-b9c5-2b0943b865e2-1670161621.png"
                    alt="Kathy Young"
                    width={96}
                    height={96}
                    className="rounded-full object-cover"
                  />
                </div>

                {/* Customer Name */}
                <span className="block text-[16px] font-bold text-gray-800 mb-2 tracking-wider">
                  KATHY YOUNG
                </span>

                {/* Customer Title */}
                <p className="text-gray-600 text-[14px] mb-4">CEO of SunPark</p>

                {/* Star Rating */}
                <div className="flex gap-1">
                  {starRating.map((v, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#CA8A8A] text-[#CA8A8A]"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
         <SwiperSlide>
          <div className=" px-4">
            <div className="max-w-4xl mx-auto text-center">
              {/* Heading */}
              <h2 className="text-2xl  text text-gray-800 mb-5 font-bold">
                What Our Customers Say ?
              </h2>

              {/* Testimonial Text */}
              <p className="text-[16px] text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
                These guys have been absolutely outstanding. Perfect Themes and
                the best of all that you have many options to choose! Best
                Support team ever! Very fast responding! Thank you very much! I
                highly recommend this theme and these people!
              </p>

              {/* Customer Profile */}
              <div className="flex flex-col items-center">
                {/* Profile Image */}
                <div className="w-24 h-24 mb-6">
                  <Image
                    src="/HomePageImgs/3023f95a-ce85-434c-b9c5-2b0943b865e2-1670161621.png"
                    alt="Kathy Young"
                    width={96}
                    height={96}
                    className="rounded-full object-cover"
                  />
                </div>

                {/* Customer Name */}
                <span className="block text-[16px] font-bold text-gray-800 mb-2 tracking-wider">
                  KATHY YOUNG
                </span>

                {/* Customer Title */}
                <p className="text-gray-600 text-[14px] mb-4">CEO of SunPark</p>

                {/* Star Rating */}
                <div className="flex gap-1">
                  {starRating.map((v, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#CA8A8A] text-[#CA8A8A]"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

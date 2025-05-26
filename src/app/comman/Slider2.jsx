"use client";
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart } from 'lucide-react';

export default function Slider2() {
  return (
    <>
     <div className='pt-4 px-4 max-w-[1100px] mx-auto'>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              400: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
           
            className="mySwiper"
          >
            <SwiperSlide>
              <Card
                image={"/HomePageImgs/1608312103476Dorian Shoe Rack_.png"}
                title="Dorian Shoe Rack"
                price="Rs. 99"
                oldPrice="$149"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                image={
                  "/HomePageImgs/1615225341228Ganthur Sheesham Wood Sofa Set___.png"
                }
                title="Ganthur Sofa Set"
                price="Rs. 99"
                oldPrice="$149"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                image={"/HomePageImgs/1615277326496Sapien Sofa Cum Bed__.png"}
                title="Sapien Sofa Cum Bed"
                price="Rs. 99"
                oldPrice="$149"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                image={"/HomePageImgs/1617816851291Calina Swing Jhula__.png"}
                title="Calina Swing Jhula"
                price="Rs. 99"
                oldPrice="$149"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                image={
                  "/HomePageImgs/1617828302132Godfrey Coffee Table Set__.png"
                }
                title="Godfrey Coffee Table Set"
                price="Rs. 99"
                oldPrice="$149"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                image={
                  "/HomePageImgs/1615225341228Ganthur Sheesham Wood Sofa Set___.png"
                }
                title="Ganthur Sofa Set"
                price="Rs. 99"
                oldPrice="$149"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                image={
                  "/HomePageImgs/1615225341228Ganthur Sheesham Wood Sofa Set___.png"
                }
                title="Ganthur Sofa Set"
                price="Rs. 99"
                oldPrice="$149"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                image={"/HomePageImgs/1617828789760Rex Console Table__.png"}
                title="Rex Console Table"
                price="Rs. 99"
                oldPrice="$149"
              />
            </SwiperSlide>
          </Swiper>
        </div>
    </>

    
  )
}


const Card = ({ image, title, price, oldPrice }) => {
  return (
    <div>
      <div className=" bg-white mb-1 shadow-lg  flex flex-col items-center pb-4">
        <Image
          src={image}
          alt="Product"
          width={180}
          height={180}
          className="w-full object-cover mb-4"
        />
        <div className="flex flex-col items-center justify-center">
          <span className="text-xs text-black uppercase tracking-wide mb-1">
            Nest Tables
          </span>
          <h2 className="text-lg font-semibold text mb-2 text-center">
            Modern Chair
          </h2>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm line-through text-black">$149</span>
            <span className="text-[18px] font-bold text-[#C09578] font-sans ">
              Rs. 99
            </span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <Button className="w-full rounded-[0px] bg-gray-200 text-black hover:bg-[#C09578] ">
              <Heart />
            </Button>
            <Button className="w-full rounded-[0px] bg-gray-200 text-black hover:bg-[#C09578] ">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};


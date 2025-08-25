"use client";
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart } from 'lucide-react';
import { ProductCard } from '../ProductCard';

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
              <ProductCard
                image={"/HomePageImgs/1608312103476Dorian Shoe Rack_.png"}
                title="Dorian Shoe Rack"
                price="Rs. 99"
                oldPrice="$149"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                image={
                  "/HomePageImgs/1615225341228Ganthur Sheesham Wood Sofa Set___.png"
                }
                title="Ganthur Sofa Set"
                price="Rs. 99"
                oldPrice="$149"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                image={"/HomePageImgs/1615277326496Sapien Sofa Cum Bed__.png"}
                title="Sapien Sofa Cum Bed"
                price="Rs. 99"
                oldPrice="$149"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                image={"/HomePageImgs/1617816851291Calina Swing Jhula__.png"}
                title="Calina Swing Jhula"
                price="Rs. 99"
                oldPrice="$149"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                image={
                  "/HomePageImgs/1617828302132Godfrey Coffee Table Set__.png"
                }
                title="Godfrey Coffee Table Set"
                price="Rs. 99"
                oldPrice="$149"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                image={
                  "/HomePageImgs/1615225341228Ganthur Sheesham Wood Sofa Set___.png"
                }
                title="Ganthur Sofa Set"
                price="Rs. 99"
                oldPrice="$149"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                image={
                  "/HomePageImgs/1615225341228Ganthur Sheesham Wood Sofa Set___.png"
                }
                title="Ganthur Sofa Set"
                price="Rs. 99"
                oldPrice="$149"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
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



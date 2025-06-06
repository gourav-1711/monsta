"use client";
import Image from "next/image";
import React, { useState } from "react";
import BestSelling from "@/app/comman/BestSelling";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';
import styles from './ProductDetails.module.css';
import ImageZoom from "@/app/zoom/ImageZoom";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

// Main page component
export default function ProductPage() {
  // image gallery
  const [activeImage, setActiveImage] = useState("/HomePageImgs/16253167208651620078433247Louise Cabinet_.png");

  // image array
  const imageArray = [
    "/HomePageImgs/16253167208651620078433247Louise Cabinet_.png",
    "/HomePageImgs/1621171973378Isaac Chest of Drawer_.png",
    "/HomePageImgs/1619988418966Leo TV Cabinets.png",
    "/HomePageImgs/1615225341228Ganthur Sheesham Wood Sofa Set___.png",
    "/HomePageImgs/16253167208651620078433247Louise Cabinet_.png",
    "/HomePageImgs/1621171973378Isaac Chest of Drawer_.png",
    "/HomePageImgs/1619988418966Leo TV Cabinets.png",
  ];

  return (
    <>


      <div className="max-w-[1100px] mx-auto">
        {/* product details */}
        <div className="mt-[15px]">
          {/* thumbnail and details */}
          <div className="grid md:grid-cols-2  grid-cols-1">
            <div className="p-[15px]">
              {/* active image */}
              <div className="mb-4">
                <ImageZoom
                  src={activeImage}
                  alt="Main product image"
                />
              </div>
              {/* image array */}
              <div className="relative">
                <Swiper
                  modules={[Navigation, FreeMode]}
                  navigation={true}
                  spaceBetween={10}
                  slidesPerView="auto"
                  freeMode={true}
                  watchSlidesProgress={true}
                  className={styles['product-thumbs-slider']}
                  breakpoints={{
                    320: {
                      slidesPerView: 2,
                    },
                    480: {
                      slidesPerView: 3,
                    },
                    768: {
                      slidesPerView: 4,
                    }
                  }}
                >
                  {imageArray.map((img, index) => (
                    <SwiperSlide key={`thumb-${index}`}>
                      <Image
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        width={80}
                        height={80}
                        className={`${activeImage === img ? 'border-2 border-[rgb(192,149,120)]' : 'border-2 border-transparent'}`}
                        onClick={() => setActiveImage(img)}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <div className="p-[15px]">
              <h1 className="text-[22px] font-semibold font-serif">
                Caroline Study Tables
              </h1>

              <div className="grid grid-cols-2 w-[180px] items-center pt-[15px] font-sans">
                <p className="line-through text-[rgb(164,164,164)]">
                  Rs. 3,000
                </p>
                <p className="text-[18px] font-bold  text-[rgb(192,149,120)]">
                  Rs. 2,500
                </p>
              </div>

              <p className="mt-[25px] text-[rgb(90,90,90)] border-b-[1px] border-gray-200 pb-2">
                Hrithvik Stool is sturdy and great for placing in any area of
                the house
              </p>

              <button className="border p-[7px_75px] duration-300 rounded text-white bg-[rgb(192,149,120)] hover:bg-black font-bold mt-3 cursor-pointer">
                Add to Cart
              </button>

              <div className="mt-[25px] leading-[30px] ">
                <p>Code: jodST0011</p>
                <p>Dimension: 72L * 32H * 30W</p>
                <p>Estimate Delivery Days: "40-45" Days</p>
                <p>Category: Nest Of Tables</p>
                <p>Color: Cobalt Blue</p>
                <p>Material: Deodar Wood</p>
              </div>
            </div>
          </div>
        </div>
        {/* description */}
        <div className="p-[15px_30px] ">
          <div className="mt-[25px] font-semibold text-[25px] text-[rgb(192,149,120)] border-b-[1px] border-gray-200 pb-2  ">
            Description
          </div>

          <p className="mt-[30px] text-sm leading-[25px] tracking-wider text-[rgb(90,90,90)] font-normal">
            Hrithvik Stool is sturdy and great for placing in any area of the
            house. There are days when we make our living area the dining area
            and on days like that instead of cradling the plate on the knees why
            not create a comfortable seating area with the help of this Sheesham
            stool, so go ahead watch some tv and enjoy the downtime without
            troubling yourself. The stool does not take up much space which
            makes it multifunctional.
          </p>
        </div>
      </div>

      {/* related products */}
      <div className="max-w-[1100px] mx-auto">
        <BestSelling heading={"related products"} />
      </div>

      {/* upsell products */}
      <div className="max-w-[1100px] mx-auto">
        <BestSelling heading={"upsell products"} />
      </div>
    </>
  );
}

// Client component for image interaction
function ImageGallery({ initialImage }) {


  return <div className=""></div>;
}

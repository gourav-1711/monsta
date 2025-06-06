"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Footer from "./comman/Footer";
import ScrollTop from "./comman/ScrollTop";
import Header from "./comman/Header";
import Slider from "./comman/Home/Slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Clock, Earth, Heart, RotateCcw, Truck } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Slider2 from "./comman/Home/Slider2";
import Slider3 from "./comman/Home/Slider3";
import BestSelling from "./comman/BestSelling";
export default function Home() {
  return (
    <>
      {/* slider */}
      <Slider />

      {/* banner section */}
      {/* Responsive 3-column grid section */}
      <section className="px-4 pt-6 max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white  shadow relative flex flex-col items-center overflow-hidden">
            <Image
              src="/HomePageImgs/08e20925-4e58-4ad3-bbb9-b037d6da2466-1670180400.png"
              alt="Grid 1"
              width={80}
              height={80}
              className="w-full object-cover hover:scale-110 transition-transform duration-300 "
            />
            <div className=" absolute top-0 left-0 p-4  capitalize font-semibold">
              <h3 className="text-[15px] font-mono">design creative</h3>
              <p className=" text-2xl text">chair collection</p>
            </div>
          </div>
          <div className="bg-white  shadow relative flex flex-col items-center overflow-hidden">
            <Image
              src="/HomePageImgs/0d588bec-d9a0-4645-8e7a-b49ef67b34be-1670180400.png"
              alt="Grid 1"
              width={80}
              height={80}
              className="w-full object-cover hover:scale-110 transition-transform duration-300 "
            />
            <div className=" absolute top-0 left-0 p-4  capitalize font-semibold">
              <h3 className="text-[15px] font-mono">design creative</h3>
              <p className=" text-2xl text">chair collection</p>
            </div>
          </div>
          <div className="bg-white  shadow relative flex flex-col items-center overflow-hidden">
            <Image
              src="/HomePageImgs/08e20925-4e58-4ad3-bbb9-b037d6da2466-1670180400.png"
              alt="Grid 1"
              width={80}
              height={80}
              className="w-full object-cover hover:scale-110 transition-transform duration-300 "
            />
            <div className=" absolute top-0 left-0 p-4  capitalize font-semibold">
              <h3 className="text-[15px] font-mono">design creative</h3>
              <p className=" text-2xl text">chair collection</p>
            </div>
          </div>
        </div>
      </section>

      {/* tabbing section */}
      <section className="px-8 md:px-4 py-4 md:py-12 max-w-[1100px] mx-auto">
        <Tabs defaultValue="account" className="w-full">
          {/* tab heading */}
          <TabsList className="flex justify-center w-full">
            {/* tab triggers 1 */}
            <TabsTrigger value="account">Account</TabsTrigger>
            {/* tab triggers 2 */}
            <TabsTrigger value="password">Password</TabsTrigger>
            {/* tab triggers 3 */}
            <TabsTrigger value="email">Email</TabsTrigger>
          </TabsList>
          {/* <TabsContent 1 /> */}
          <TabsContent value="account">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-6">
              <Card
                image={"/HomePageImgs/1608312103476Dorian Shoe Rack_.png"}
              />
              <Card
                image={
                  "/HomePageImgs/1615225341228Ganthur Sheesham Wood Sofa Set___.png"
                }
              />
              <Card
                image={"/HomePageImgs/1615277326496Sapien Sofa Cum Bed__.png"}
              />
              <Card
                image={"/HomePageImgs/1617816851291Calina Swing Jhula__.png"}
              />
              <Card
                image={
                  "/HomePageImgs/1617828302132Godfrey Coffee Table Set__.png"
                }
              />
              <Card
                image={
                  "/HomePageImgs/1615225341228Ganthur Sheesham Wood Sofa Set___.png"
                }
              />
              <Card
                image={
                  "/HomePageImgs/1615225341228Ganthur Sheesham Wood Sofa Set___.png"
                }
              />
            </div>
          </TabsContent>
          {/* <TabsContent 2 /> */}
          <TabsContent value="password">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-6">
              <Card
                image={"/HomePageImgs/1617828789760Rex Console Table__.png"}
              />
              <Card
                image={"/HomePageImgs/1617829052195Caroline Study Tables__.png"}
              />
              <Card
                image={"/HomePageImgs/1617829892944Evan Coffee Table__.png"}
              />
              <Card image={"/HomePageImgs/1617981904164Hrithvik Stool__.png"} />
              <Card
                image={
                  "/HomePageImgs/1617828302132Godfrey Coffee Table Set__.png"
                }
              />
              <Card image={"/HomePageImgs/1619988418966Leo TV Cabinets.png"} />
              <Card image={"/HomePageImgs/1617989633213Winona Mirror__.png"} />
            </div>
          </TabsContent>
          {/* <TabsContent 3 /> */}
          <TabsContent value="email">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-6">
              <Card
                image={"/HomePageImgs/1608312103476Dorian Shoe Rack_.png"}
              />
              <Card
                image={
                  "/HomePageImgs/1615225341228Ganthur Sheesham Wood Sofa Set___.png"
                }
              />
              <Card
                image={"/HomePageImgs/1615277326496Sapien Sofa Cum Bed__.png"}
              />
              <Card
                image={"/HomePageImgs/1617816851291Calina Swing Jhula__.png"}
              />
              <Card
                image={
                  "/HomePageImgs/1617828302132Godfrey Coffee Table Set__.png"
                }
              />
              <Card
                image={
                  "/HomePageImgs/1615225341228Ganthur Sheesham Wood Sofa Set___.png"
                }
              />
              <Card
                image={
                  "/HomePageImgs/1615225341228Ganthur Sheesham Wood Sofa Set___.png"
                }
              />
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* trending collection */}
      <section className="py-4 md:py-12 max-w-[100vw] mx-auto [background-image:url('/HomePageImgs/e9234fa4-3ff6-4a6e-a00e-0c9ff26e7b20-1670180400.png')] bg-cover bg-center bg-no-repeat">
        <div className="text-black py-16 px-6 max-w-[1100px] mx-auto group lg:hover:scale-105  duration-300 ">
          <h2 className="text-2xl md:text-4xl lg:text-6xl text font-bold ">
            New Trending Collection
          </h2>
          <p className=" text-gray-700 py-4">
            We Believe That Good Design is Always in Season
          </p>
          <Button className=" mt-10 md:mt-16 lg:mt-20 bg-[transparent] hover:bg-[#C09578] text-[#C09578] hover:text-white duration-500 border-2 border-[#C09578] rounded-none uppercase py-5 px-8">
            shopping now
          </Button>
        </div>
      </section>

      <BestSelling heading={"best selling products"} />

      {/* featured section */}
      <section className="px-4 py-4 max-w-[100%] bg-gray-50 mx-auto my-10">
        <div className=" py-5 px-4 max-w-[1100px] mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {/* Free Shipping */}
              <div className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 border-2 group-hover:border-[#C09578] duration-100 border-gray-800 rounded-full flex items-center justify-center">
                  <Earth className="size-6 text-gray-800 group-hover:text-[#C09578]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Free Shipping
                </h3>
                <p className="text-gray-600">Free shipping on all order</p>
              </div>

              {/* Money Return */}
              <div className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 border-2 group-hover:border-[#C09578] duration-100 border-gray-800 rounded-full flex items-center justify-center">
                  <Check className="size-6 text-gray-800 group-hover:text-[#C09578]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Money Return
                </h3>
                <p className="text-gray-600">Back guarantee under 7 days</p>
              </div>

              {/* Online Support */}
              <div className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 border-2 group-hover:border-[#C09578] duration-100 border-gray-800 rounded-full flex items-center justify-center">
                  <Clock className="size-6 text-gray-800 group-hover:text-[#C09578]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Online Support
                </h3>
                <p className="text-gray-600">Support online 24 hours a day</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* review section */}
      <Slider3 />

      {/* newsletter  */}

      <section className="px-4 py-12 max-w-[100%] mx-auto bg-gray-50">
        <div className="text-center max-w-[1100px] mx-auto">
          <div className=" bg-[rgb(248,249,249)] ">
            <div className="max-w-[1050px] mx-auto  text-center">
              <h1 className="text-[22px] font-semibold font-serif">
                Our Newsletter
              </h1>
              <p className="text-[rgb(90,90,90)] mt-[5px]">
                Get E-mail updates about our latest shop and special offers.
              </p>
              <div className="flex justify-center mt-[20px] mx-auto max-w-[60%]">
                <input
                  type="text"
                  placeholder="Email Address....."
                  className="border p-[7px_15px] rounded-[5px_0px_0px_5px] max-w-[70%] outline-none"
                />
                <button className=" border p-[5px_50px] rounded-[0px_5px_5px_0px]  border-[rgb(192,149,120)] bg-[rgb(192,149,120)] text-white font-semibold cursor-pointer text-[14px] hover:text-white duration-150 hover:bg-black max-w-[30%]">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const Card = ({ image, title, price, oldPrice }) => {
  return (
    <div>
      <div className=" bg-white shadow-lg  flex flex-col items-center pb-4">
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

"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart, ChevronDown } from "lucide-react";
import { CategoryData } from "@/app/Data";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../(redux)/features/cart/cart";
import { addToWishlist } from "../../(redux)/features/wishlist/wishlist";
import { toast } from "sonner";
import { ProductCard } from "@/app/comman/ProductCard";
import axios from "axios";
export default function page() {
  const {
    tables,
    LivingStorage,
    Mirrors,
    SofaCumBed,
    SofaSets,
    SwingJhula,
    Material,
    Color,
  } = CategoryData;

  let dummyData = [
    {
      id: 1,
      image: "/HomePageImgs/1621171973378Isaac Chest of Drawer_.png",
      title: "Isaac Chest of Drawer",
      category: "Nest of Tables",
      price: 2500,
      originalPrice: 3000,
      category: "featured",
      quantity: 1,
    },
    {
      id: 2,
      image: "/HomePageImgs/1619988418966Leo TV Cabinets.png",
      title: "Leo TV Cabinets",
      category: "Nest of Tables",
      price: 2500,
      originalPrice: 3000,
      category: "featured",
      quantity: 1,
    },
  ];

  // product data
  const [productData, setProductData] = useState([]);

  // const [tabData, setTabData] = useState(dummyData);
  const [activeTab, setActiveTab] = useState("featured");
  const [priceRange, setPriceRange] = useState([0, 1000000]);

  useEffect(() => {
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/products`)
      .then((res) => {
        setProductData(res.data._data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(productData);

  return (
    <div>
      <div className="max-w-[1100px] mx-auto">
        {/* Breadcrumb */}
        <div className="mt-[15px]  p-[35px_0px] border-t border-t-gray-200 border-b border-gray-200 text-center">
          <h1 className="text-[32px] font-bold mb-[5px] font-serif text">
            Categories
          </h1>
          <Breadcrumb>
            <BreadcrumbList className="justify-center font-semibold">
              <BreadcrumbItem className="text-center text-black">
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem className="text-center">
                <BreadcrumbLink className=" text-[#C09578]" href="/categories">
                  Categories
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="grid md:grid-cols-[20%_auto] grid-cols-1 mt-[30px] ">
          <div className=" order-2 md:order-1 px-8 md:px-0">
            {/* Categories */}
            <div className="my-[15px] h-[300px] overflow-y-scroll scroll-color">
              <h1 className="text-[22px] font-serif font-bold">Categories</h1>
              {/* Tables */}
              <div className="mt-[20px]">
                <p className="text-[18px] font-semibold font-serif mt-[25px] text-[rgb(90,90,90)]">
                  Tables
                </p>
                <ul className="leading-[35px] text-[rgb(90,90,90)] space-y-3 mt-[10px]">
                  {tables.map((v, i) => {
                    return (
                      <li className="flex items-center gap-2 " key={i}>
                        <Checkbox
                          className="  accent-[rgb(192,149,120)] checked:bg-[rgb(192,149,120)]"
                          key={v.id}
                          id={v.title}
                          label={v.title}
                        />
                        <Label
                          htmlFor={v.title}
                          className="text-[rgb(90,90,90)] text-[14px]"
                        >
                          {v.title}
                        </Label>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Living Storage */}
              <div className="mt-[20px]">
                <p className="text-[18px] font-semibold font-serif mt-[25px] text-[rgb(90,90,90)]">
                  Living Storage
                </p>
                <ul className="leading-[35px] text-[rgb(90,90,90)] space-y-3 mt-[10px]">
                  {LivingStorage.map((v, i) => {
                    return (
                      <li className="flex items-center gap-2 " key={i}>
                        <Checkbox
                          className="  accent-[rgb(192,149,120)] checked:bg-[rgb(192,149,120)]"
                          key={v.id}
                          id={v.title}
                          label={v.title}
                        />
                        <Label
                          htmlFor={v.title}
                          className="text-[rgb(90,90,90)] text-[14px]"
                        >
                          {v.title}
                        </Label>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Mirrors */}
              <div className="mt-[20px]">
                <p className="text-[18px] font-semibold font-serif mt-[25px] text-[rgb(90,90,90)]">
                  Mirrors
                </p>
                <ul className="leading-[35px] text-[rgb(90,90,90)] space-y-3 mt-[10px]">
                  {Mirrors.map((v, i) => {
                    return (
                      <li className="flex items-center gap-2 " key={i}>
                        <Checkbox
                          className="  accent-[rgb(192,149,120)] checked:bg-[rgb(192,149,120)]"
                          key={v.id}
                          id={v.title}
                          label={v.title}
                        />
                        <Label
                          htmlFor={v.title}
                          className="text-[rgb(90,90,90)] text-[14px]"
                        >
                          {v.title}
                        </Label>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Sofa Cum Bed */}
              <div className="mt-[20px]">
                <p className="text-[18px] font-semibold font-serif mt-[25px] text-[rgb(90,90,90)]">
                  Sofa Cum Bed
                </p>
                <ul className="leading-[35px] text-[rgb(90,90,90)] space-y-3 mt-[10px]">
                  {SofaCumBed.map((v, i) => {
                    return (
                      <li className="flex items-center gap-2 " key={i}>
                        <Checkbox
                          className="  accent-[rgb(192,149,120)] checked:bg-[rgb(192,149,120)]"
                          key={v.id}
                          id={v.title}
                          label={v.title}
                        />
                        <Label
                          htmlFor={v.title}
                          className="text-[rgb(90,90,90)] text-[14px]"
                        >
                          {v.title}
                        </Label>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Sofa Sets */}
              <div className="mt-[20px]">
                <p className="text-[18px] font-semibold font-serif mt-[25px] text-[rgb(90,90,90)]">
                  Sofa Sets
                </p>
                <ul className="leading-[35px] text-[rgb(90,90,90)] space-y-3 mt-[10px]">
                  {SofaSets.map((v, i) => {
                    return (
                      <li className="flex items-center gap-2 " key={i}>
                        <Checkbox
                          className="  accent-[rgb(192,149,120)] checked:bg-[rgb(192,149,120)]"
                          key={v.id}
                          id={v.title}
                          label={v.title}
                        />
                        <Label
                          htmlFor={v.title}
                          className="text-[rgb(90,90,90)] text-[14px]"
                        >
                          {v.title}
                        </Label>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Swing Jhula */}
              <div className="mt-[20px]">
                <p className="text-[18px] font-semibold font-serif mt-[25px] text-[rgb(90,90,90)]">
                  Swing Jhula
                </p>
                <ul className="leading-[35px] text-[rgb(90,90,90)] space-y-3 mt-[10px]">
                  {SwingJhula.map((v, i) => {
                    return (
                      <li className="flex items-center gap-2 " key={i}>
                        <Checkbox
                          className="  accent-[rgb(192,149,120)] checked:bg-[rgb(192,149,120)]"
                          key={v.id}
                          id={v.title}
                          label={v.title}
                        />
                        <Label
                          htmlFor={v.title}
                          className="text-[rgb(90,90,90)] text-[14px]"
                        >
                          {v.title}
                        </Label>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            {/* color and material */}
            <div className="my-[15px] h-[350px] overflow-y-scroll scroll-color">
              {/* Material */}
              <div className="mt-[20px]">
                <p className="text-[18px] font-semibold font-serif mt-[25px] text-[rgb(90,90,90)]">
                  Material
                </p>
                <ul className="leading-[35px] text-[rgb(90,90,90)] space-y-3 mt-[10px]">
                  {Material.map((v, i) => {
                    return (
                      <li className="flex items-center gap-2 " key={i}>
                        <Checkbox
                          className="  accent-[rgb(192,149,120)] checked:bg-[rgb(192,149,120)]"
                          key={v.id}
                          id={v.title}
                          label={v.title}
                        />
                        <Label
                          htmlFor={v.title}
                          className="text-[rgb(90,90,90)] text-[14px]"
                        >
                          {v.title}
                        </Label>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* colors */}
              <div className="mt-[20px]">
                <p className="text-[18px] font-semibold font-serif mt-[25px] text-[rgb(90,90,90)]">
                  Colors
                </p>
                <ul className="leading-[35px] text-[rgb(90,90,90)] space-y-3 mt-[10px]">
                  {Color.map((v, i) => {
                    return (
                      <li className="flex items-center gap-2 " key={i}>
                        <Checkbox
                          className="  accent-[rgb(192,149,120)] checked:bg-[rgb(192,149,120)]"
                          key={v.id}
                          id={v.title}
                          label={v.title}
                        />
                        <Label
                          htmlFor={v.title}
                          className="text-[rgb(90,90,90)] text-[14px]"
                        >
                          {v.title}
                        </Label>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* price range */}
            <div className="mt-[20px] pb-[20px]">
              <p className="text-[18px] font-semibold font-serif mt-[25px] text-[rgb(90,90,90)]">
                Price Range
              </p>
            </div>
            <div className=" pb-[20px]">
              <Slider
                onValueChange={setPriceRange}
                value={priceRange}
                defaultValue={[0, 100000]}
                max={100000}
                min={0}
                step={1}
              />
            </div>
            <div className="flex gap-[10px] justify-center items-center">
              <p>Rs. {priceRange[0]}</p>
              <span className="text-[18px] font-semibold font-serif  text-[rgb(90,90,90)]">
                -
              </span>
              <p>Rs. {priceRange[1]}</p>
            </div>

            <Button className=" py-3 ">Filter</Button>
          </div>

          {/* Filter and Sorting products */}
          <div className=" order-1 md:order-2 px-[15px]">
            <div className="flex justify-end items-center border px-3 gap-4 border-gray-200 py-2">
              <div className=" flex items-center gap-2 justify-end   text-center mt-[10px]">
                <span>Sort By :</span>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-2 border border-gray-200 px-2 py-1 rounded-md outline-none">
                    <span>Sort By</span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className=" px-2 py-2">
                    <DropdownMenuItem>Featured</DropdownMenuItem>
                    <DropdownMenuItem>New Arrivals</DropdownMenuItem>
                    <DropdownMenuItem>On Sale</DropdownMenuItem>
                    <DropdownMenuItem>Best Selling</DropdownMenuItem>
                    <DropdownMenuItem>Price: Low to High</DropdownMenuItem>
                    <DropdownMenuItem>Price: High to Low</DropdownMenuItem>
                    <DropdownMenuItem>Name: A to Z</DropdownMenuItem>
                    <DropdownMenuItem>Name: Z to A</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <p className=" mt-[10px]">Showing 1-1 of 1 Results</p>
            </div>

            <div className="grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-[20px] max-w-[1450px] mx-auto p-[20px_50px]">
              {productData.map((v) => {
                return <ProductCard key={v._id} data={v} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

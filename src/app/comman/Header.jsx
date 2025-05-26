"use client";
import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { ChevronDown, Heart, Menu, Search, ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Header() {
  const [auth, setAuth] = React.useState(false);

  const [header, setHeader] = useState(false);

  // window scroll

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    });
  }, []);

  console.log(header);
  

  return (
    <>
      {/* desktop header 1st */}
      {/* mobile also */}
      <header className=" max-w-[1100px] mx-auto relative z-[50]   bg-white shadow-sm">
        {/* contact and account details */}
        <div className="hidden lg:block">
          <div className=" flex justify-between items-center py-2 border-b border-gray-200">
            <span>
              <h1 className="text-[12px] font-light capitalize">
                Contact us 24/7 : +91-9781234560 / furniture@gmail.com
              </h1>
            </span>
            <span>
              {/* login and register */}
              <button
                className={`${
                  auth ? "hidden" : "block"
                } duration-200 hover:text-[#C09578] text-[12px] font-light capitalize`}
              >
                Login/register
              </button>
              {/* dropdown */}
              <div className={`${auth ? "block" : "hidden"} duration-200`}>
                <DropdownMenu>
                  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </span>
          </div>
        </div>

        {/* logo and others */}
        {/* mobile responsive part */}
        <div className=" px-2 lg:px-0  flex justify-between items-center py-4  border-b border-gray-200">
          {/* logo */}
          <div className="flex items-center">
            <Link href={"/"}>
              <Image
                src="/HomePageImgs/cccfbdab-3bec-439f-88b9-5694698cd302-1670132652.png"
                width={100}
                height={100}
                alt="logo"
                className="w-full h-auto"
              />
            </Link>
          </div>
          {/* add to cart and other actions */}
          <div className=" flex space-x-4">
            {/* search input */}
            <div className="search hidden lg:block">
              <div className="  flex items-center space-x-2 border-[1px] border-[#e0e0e0] py-1 px-2">
                <input
                  type="text"
                  className=" placeholder:capitalize outline-none border-0"
                  placeholder="search your product"
                />
                <Search className=" text-2xl " name="search" />
              </div>
            </div>

            <div className="border-[1px] border-[#e0e0e0] flex items-center px-2">
              <button className="text-[12px] font-light capitalize">
                <Heart
                  className=" bg-background hover:text-[#C09578]"
                  size={28}
                  color="#000000"
                  strokeWidth={0.75}
                  absoluteStrokeWidth
                />
              </button>
            </div>
            <Sheet>
              <SheetTrigger>
                {" "}
                <div className=" border-[1px] border-[#e0e0e0] group duration-300 ">
                  <button className="text-[12px] font-bold capitalize flex items-center py-1 gap-2 px-2 ">
                    <ShoppingCart
                      className=" bg-background group-hover:text-[#C09578] border-r pr-1"
                      size={28}
                      //   color="#000000"
                      strokeWidth={0.75}
                      absoluteStrokeWidth
                    />
                    <span className=" text-[15px] group-hover:text-[#C09578]">
                      {/* price here */}
                      Rs 0.00
                    </span>
                    <span>
                      <ChevronDown
                        size={28}
                        // color="#000000"
                        strokeWidth={0.75}
                        absoluteStrokeWidth
                        className=" bg-background group-hover:text-[#C09578]"
                      />
                    </span>
                    {/* offcanvas */}
                  </button>
                </div>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Are you absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
          {/* offcanvas in mobile */}
          <div className="block lg:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu />
              </SheetTrigger>
              <SheetContent side="left" style={{ width: "60vw" }}>
                <SheetHeader>
                  <SheetTitle className=" text-sm">
                    Contact us 24/7 : +91-9781234560
                  </SheetTitle>
                  <SheetDescription>
                    {/* gmail */}
                    <p className=" py-2"> furniture@gmail.com</p>
                    {/* menues */}
                    <div className=" py-2 border-b border-gray-200 text-left font-semibold capitalize">
                      <h1>home</h1>
                    </div>

                    <Accordion
                      type="single"
                      collapsible
                      className="font-semibold capitalize"
                    >
                      {/* living */}
                      <AccordionItem value="item-1">
                        <AccordionTrigger className=" font-semibold capitalize">
                          living
                        </AccordionTrigger>
                        <AccordionContent>
                          {/* Yes. It adheres to the WAI-ARIA design pattern. */}
                        </AccordionContent>
                      </AccordionItem>
                      {/* sofa */}
                      <AccordionItem value="item-2">
                        <AccordionTrigger className=" font-semibold capitalize">
                          sofa
                        </AccordionTrigger>
                        <AccordionContent>
                          {/* Yes. It adheres to the WAI-ARIA design pattern. */}
                        </AccordionContent>
                      </AccordionItem>
                      {/* pages */}
                      <AccordionItem value="item-3">
                        <AccordionTrigger className=" font-semibold capitalize">
                          pages
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className=" space-y-2 text-left px-6">
                            <li>About Us</li>
                            <li>Cart</li>
                            <li>checkout</li>
                            <li>frequently asked questions</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    {/* login / register */}
                    <div className=" py-2 border-b border-gray-200 text-left font-semibold capitalize">
                      <h1>login / register</h1>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* navigation menu */}
        <nav className="hidden md:flex justify-center space-x-8 py-4 z-50"> 
          <Link
            href=""
            className="text-[14px] font-semibold text-gray-700 hover:text-[#C09578]"
          >
            Home
          </Link>
          <Link
            href=""
            className=" relative group flex capitalize text-[14px] font-semibold text-gray-700 hover:text-[#C09578]"
          >
            {/* nav item */}
            <span> living </span>
            <span>
              <ChevronDown
                size={16}
                className="inline-block ml-1"
                strokeWidth={0.75}
                absoluteStrokeWidth
              />
            </span>
            {/* nav dropdown */}
            <div
              className="dropdown [transform:_perspective(600px)_rotateX(-90deg)] duration-500 skew-x-2 origin-top group-hover:[transform:_perspective(600px)_rotateX(0deg)] 
             absolute left-0 top-full mt-2 w-[600px] bg-white shadow-lg rounded-md py-8 px-4 "
            >
              {/* dropdown content */}
              <div className=" grid grid-cols-3 justify-evenly">
                <div aria-label="drop-col-1">
                  <div>
                    <h1 className=" font-bold text-[18px] text-foreground py-3 ">
                      Table
                    </h1>
                  </div>

                  <ul className="space-y-4">
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Side and End Tables
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Nest Of Tables
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Console Table
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Coffee Table Sets
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Coffee Tables
                      </p>
                    </li>
                  </ul>
                </div>
                <div aria-label="drop-col-2">
                  <div>
                    <h1 className=" font-bold text-[18px] text-foreground py-3 ">
                      Table
                    </h1>
                  </div>

                  <ul className="space-y-4">
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Side and End Tables
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Nest Of Tables
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Console Table
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Coffee Table Sets
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Coffee Tables
                      </p>
                    </li>
                  </ul>
                </div>
                <div aria-label="drop-col-3">
                  <div>
                    <h1 className=" font-bold text-[18px] text-foreground py-3 ">
                      Table
                    </h1>
                  </div>

                  <ul className="space-y-4">
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Side and End Tables
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Nest Of Tables
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Console Table
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Coffee Table Sets
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Coffee Tables
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Link>
          <Link
            href=""
            className="group relative flex items-center  capitalize text-[14px] font-semibold text-gray-700 hover:text-[#C09578]"
          >
            <span>sofa</span>
            <span>
              <ChevronDown
                size={16}
                // color="#000000"
                strokeWidth={0.75}
                absoluteStrokeWidth
                className=" bg-background group-hover:text-[#C09578]"
              />
            </span>
            {/* nav dropdown */}
            <div
              className="dropdown [transform:_perspective(600px)_rotateX(-90deg)] duration-500 skew-x-2 origin-top group-hover:[transform:_perspective(600px)_rotateX(0deg)] 
             absolute left-0 top-full mt-2 w-[600px] bg-white shadow-lg rounded-md py-8 px-4 "
            >
              {/* dropdown content */}
              <div className=" grid grid-cols-3 justify-evenly">
                <div aria-label="drop-col-1">
                  <div>
                    <h1 className=" font-bold text-[18px] text-foreground py-3 ">
                      Table
                    </h1>
                  </div>

                  <ul className="space-y-4">
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Side and End Tables
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Nest Of Tables
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Console Table
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Coffee Table Sets
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Coffee Tables
                      </p>
                    </li>
                  </ul>
                </div>
                <div aria-label="drop-col-2">
                  <div>
                    <h1 className=" font-bold text-[18px] text-foreground py-3 ">
                      Table
                    </h1>
                  </div>

                  <ul className="space-y-4">
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Side and End Tables
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Nest Of Tables
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Console Table
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Coffee Table Sets
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Coffee Tables
                      </p>
                    </li>
                  </ul>
                </div>
                <div aria-label="drop-col-3">
                  <div>
                    <h1 className=" font-bold text-[18px] text-foreground py-3 ">
                      Table
                    </h1>
                  </div>

                  <ul className="space-y-4">
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Side and End Tables
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Nest Of Tables
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Console Table
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Coffee Table Sets
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Coffee Tables
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Link>
          <Link
            href=""
            className="group relative flex items-center  capitalize text-[14px] font-semibold text-gray-700 hover:text-[#C09578]"
          >
            <span>pages</span>
            <span>
              <ChevronDown
                size={16}
                // color="#000000"
                strokeWidth={0.75}
                absoluteStrokeWidth
                className=" bg-background group-hover:text-[#C09578]"
              />
            </span>
            {/* nav dropdown */}
            <div
              className="dropdown [transform:_perspective(600px)_rotateX(-90deg)] duration-500 skew-x-2 origin-top group-hover:[transform:_perspective(600px)_rotateX(0deg)] 
             absolute left-0 top-full mt-2 w-[200px] bg-white shadow-lg rounded-md py-8 px-4 "
            >
              {/* dropdown content */}
              <div className=" grid grid-cols-1 justify-evenly">
                <div aria-label="drop-col-1">
                  <div>
                    <h1 className=" font-bold text-[18px] text-foreground py-3 ">
                      Table
                    </h1>
                  </div>

                  <ul className="space-y-4">
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Side and End Tables
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Nest Of Tables
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Console Table
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Coffee Table Sets
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Coffee Tables
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Link>
          <Link
            href=""
            className="text-[14px] flex items-center  capitalize font-semibold text-gray-700 hover:text-[#C09578]"
          >
            <span>contact us</span>
          </Link>
        </nav>
      </header>

      {/* desktop header 2nd visible on scroll */}
      <header
        className={` hidden lg:block   sticky top-0  z-[999] text-white`}
      >
        <nav className={`${header ? "block animate-slideIn slideIn" : "hidden"}  bg-[#ffffffb5] shadow-md w-full  p-4 flex justify-center space-x-8 py-4`}>
          <Link href={"/"}>
            <Image
              src={
                "/HomePageImgs/cccfbdab-3bec-439f-88b9-5694698cd302-1670132652.png"
              }
              width={100}
              height={100}
              alt="logo"
            />
          </Link>
          <Link
            href=""
            className="text-[14px] font-semibold text-gray-700 hover:text-[#C09578]"
          >
            Home
          </Link>
          <Link
            href=""
            className=" relative group flex capitalize text-[14px] font-semibold text-gray-700 hover:text-[#C09578]"
          >
            {/* nav item */}
            <span> living </span>
            <span>
              <ChevronDown
                size={16}
                className="inline-block ml-1"
                strokeWidth={0.75}
                absoluteStrokeWidth
              />
            </span>
            {/* nav dropdown */}
            <div
              className="dropdown [transform:_perspective(600px)_rotateX(-90deg)] duration-500 skew-x-2 origin-top group-hover:[transform:_perspective(600px)_rotateX(0deg)] 
             absolute left-0 top-full mt-2 w-[600px] bg-white shadow-lg rounded-md py-8 px-4 "
            >
              {/* dropdown content */}
              <div className=" grid grid-cols-3 justify-evenly">
                <div aria-label="drop-col-1">
                  <div>
                    <h1 className=" font-bold text-[18px] text-foreground py-3 ">
                      Table
                    </h1>
                  </div>

                  <ul className="space-y-4">
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Side and End Tables
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Nest Of Tables
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Console Table
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Coffee Table Sets
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Coffee Tables
                      </p>
                    </li>
                  </ul>
                </div>
                <div aria-label="drop-col-2">
                  <div>
                    <h1 className=" font-bold text-[18px] text-foreground py-3 ">
                      Table
                    </h1>
                  </div>

                  <ul className="space-y-4">
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Side and End Tables
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Nest Of Tables
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Console Table
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Coffee Table Sets
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Coffee Tables
                      </p>
                    </li>
                  </ul>
                </div>
                <div aria-label="drop-col-3">
                  <div>
                    <h1 className=" font-bold text-[18px] text-foreground py-3 ">
                      Table
                    </h1>
                  </div>

                  <ul className="space-y-4">
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Side and End Tables
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Nest Of Tables
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Console Table
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Coffee Table Sets
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Coffee Tables
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Link>
          <Link
            href=""
            className="group relative flex items-center  capitalize text-[14px] font-semibold text-gray-700 hover:text-[#C09578]"
          >
            <span>sofa</span>
            <span>
              <ChevronDown
                size={16}
                // color="#000000"
                strokeWidth={0.75}
                absoluteStrokeWidth
                className="  group-hover:text-[#C09578]"
              />
            </span>
            {/* nav dropdown */}
            <div
              className="dropdown [transform:_perspective(600px)_rotateX(-90deg)] duration-500 skew-x-2 origin-top group-hover:[transform:_perspective(600px)_rotateX(0deg)] 
             absolute left-0 top-full mt-2 w-[600px] bg-white shadow-lg rounded-md py-8 px-4 "
            >
              {/* dropdown content */}
              <div className=" grid grid-cols-3 justify-evenly">
                <div aria-label="drop-col-1">
                  <div>
                    <h1 className=" font-bold text-[18px] text-foreground py-3 ">
                      Table
                    </h1>
                  </div>

                  <ul className="space-y-4">
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Side and End Tables
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Nest Of Tables
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Console Table
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Coffee Table Sets
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Coffee Tables
                      </p>
                    </li>
                  </ul>
                </div>
                <div aria-label="drop-col-2">
                  <div>
                    <h1 className=" font-bold text-[18px] text-foreground py-3 ">
                      Table
                    </h1>
                  </div>

                  <ul className="space-y-4">
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Side and End Tables
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Nest Of Tables
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Console Table
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Coffee Table Sets
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Coffee Tables
                      </p>
                    </li>
                  </ul>
                </div>
                <div aria-label="drop-col-3">
                  <div>
                    <h1 className=" font-bold text-[18px] text-foreground py-3 ">
                      Table
                    </h1>
                  </div>

                  <ul className="space-y-4">
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Side and End Tables
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Nest Of Tables
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Console Table
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Coffee Table Sets
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Coffee Tables
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Link>
          <Link
            href=""
            className="group relative flex items-center  capitalize text-[14px] font-semibold text-gray-700 hover:text-[#C09578]"
          >
            <span>pages</span>
            <span>
              <ChevronDown
                size={16}
                // color="#000000"
                strokeWidth={0.75}
                absoluteStrokeWidth
                className=" group-hover:text-[#C09578]"
              />
            </span>
            {/* nav dropdown */}
            <div
              className="dropdown [transform:_perspective(600px)_rotateX(-90deg)] duration-500 skew-x-2 origin-top group-hover:[transform:_perspective(600px)_rotateX(0deg)] 
             absolute left-0 top-full mt-2 w-[200px] bg-white shadow-lg rounded-md py-8 px-4 "
            >
              {/* dropdown content */}
              <div className=" grid grid-cols-1 justify-evenly">
                <div aria-label="drop-col-1">
                  <div>
                    <h1 className=" font-bold text-[18px] text-foreground py-3 ">
                      Table
                    </h1>
                  </div>

                  <ul className="space-y-4">
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Side and End Tables
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Nest Of Tables
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Console Table
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Coffee Table Sets
                      </p>
                    </li>
                    <li>
                      <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                        Coffee Tables
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Link>
          <Link
            href=""
            className="text-[14px] flex items-center  capitalize font-semibold text-gray-700 hover:text-[#C09578]"
          >
            <span>contact us</span>
          </Link>
        </nav>
      </header>
    </>
  );
}

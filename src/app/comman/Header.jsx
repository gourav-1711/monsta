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
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useDispatch, useSelector } from "react-redux";
import { totalAmount } from "@/lib/features/cart/cart";
import { usePathname } from "next/navigation";

export default function Header() {
  // Initialize auth state from localStorage if available, otherwise false
  const [auth, setAuth] = useState(true);

  // header scroll
  const [header, setHeader] = useState(false);

  // for sheets pages
  const [open1, setOpen1] = useState(false)
  // for cart sheet
  const [open2, setOpen2] = useState(false)

  // navigation
  const navigation = usePathname()

  // window scroll
  useEffect(() => {
    const handleScroll = () => {
      setHeader(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // get total amount from redux
  const dispatch = useDispatch();

  // cart items
  const cartItems = useSelector((state) => state.cart.cartItems);
  // total price
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  // wishlist items
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

  // total amount when cart items change
  useEffect(() => {
    dispatch(totalAmount());
  }, [cartItems]);

  // close sheets when navigation changes to other pages
  useEffect(() => {
    setOpen1(false)
    setOpen2(false)
  }, [navigation])

  return (
    <>
      {/* desktop header 1st */}
      {/* mobile also */}
      <header className=" max-w-[1100px] mx-auto relative z-[50]   bg-white ">
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
              <Link
                href="/login-register"
                className={`${
                  auth ? "hidden" : "block"
                } duration-200 hover:text-[#C09578] text-[12px] font-light capitalize`}
              >
                Login/register
              </Link>
              {/* dropdown */}
              <div className={`${auth ? "block" : "hidden"} duration-200`}>
                <DropdownMenu>
                  <DropdownMenuTrigger className=" flex items-center gap-2 text-sm hover:text-[#C09578]">My Account <ChevronDown className=" hover:text-[#C09578]" size={16} /></DropdownMenuTrigger>
                  <DropdownMenuContent className=" bg-white shadow-md rounded-md w-40">
                    <DropdownMenuItem>
                      <Link href="/my-dashboard">My Dashboard</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => setAuth(false)}>Logout</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </span>
          </div>
        </div>

        {/* logo and others */}
        {/* mobile responsive part */}
        <div className=" px-2 lg:px-0 sticky bg-white/90 shadow-md w-full md:shadow-none top-0 z-[9999] lg:static flex justify-between items-center py-4  border-b border-gray-200">
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
                {/* search icon */}
                <Link href="/search">
                  <Search className=" text-2xl " name="search" />
                </Link>
              </div>
            </div>

            <div className="border-[1px] border-[#e0e0e0] flex items-center px-2">
              <Link
                href="/wishlist"
                className="text-[12px] font-light capitalize"
              >
                <Heart
                  className=" bg-background hover:text-[#C09578]"
                  size={28}
                  color="#000000"
                  strokeWidth={wishlistItems.length > 0 ? 0 : 0.75}
                  absoluteStrokeWidth
                  fill={wishlistItems.length > 0 ? "#C09578" : "#fff"}
                />
              </Link>
            </div>
            {/* cart */}
            <Sheet open={open2} onOpenChange={setOpen2} className=" w-full">
              <SheetTrigger>
                <div className="relative border-[1px] border-[#e0e0e0] group duration-300 ">
                  {/* cart items number */}
                  <div className="absolute top-[30%] -left-3 bg-[#C09578] text-white text-[10px] font-bold rounded-full size-5 flex items-center justify-center">
                    {cartItems.length}
                  </div>
                  <button className="text-[12px] font-bold capitalize flex items-center py-1 gap-2 px-2 ">
                    <ShoppingCart
                      className=" bg-background group-hover:text-[#C09578] border-r pr-1"
                      size={28}
                      //   color="#000000"
                      strokeWidth={0.75}
                      absoluteStrokeWidth
                    />
                    <span className=" text-[15px] group-hover:text-[#C09578] hidden md:block">
                      {/* price here */}
                      Rs {totalPrice}
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
              <SheetContent side="right" style={{ width: "95vw" }}>
                <SheetHeader>
                  <SheetTitle>Cart</SheetTitle>
                  <SheetDescription>
                    <div className="">
                      {cartItems.length > 0 ? (
                        cartItems.map((item, index) => (
                          <div className="flex-1 p-6" key={index}>
                            <div className="flex gap-4 pb-6 border-b border-gray-100">
                              {/* Product Image */}
                              <div className="w-20 h-20 flex-shrink-0">
                                <Image
                                  src={item.image}
                                  alt="Hrithvik Stool"
                                  width={80}
                                  height={80}
                                  className="w-full h-full object-cover rounded"
                                />
                              </div>

                              {/* Product Details */}
                              <div className="flex-1">
                                <div className="flex items-start justify-between">
                                  <div>
                                    <h3 className="font-medium text-gray-800 mb-1">
                                      {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 mb-2">
                                      Qty: {item.quantity}
                                    </p>
                                    <p
                                      className="text-lg font-medium"
                                      style={{ color: "#B8956A" }}
                                    >
                                      Rs. {item.price}
                                    </p>
                                  </div>
                                  <button className="p-1">
                                    <X className="w-5 h-5 text-gray-400" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div>
                          <Image
                            src="/HomePageImgs/my-Order.png"
                            alt="No items in cart"
                            width={100}
                            height={100}
                            className="w-full h-full object-cover"
                          />
                          <p className="text-center text-gray-500 font-semibold text-lg text">
                            No items in cart
                          </p>
                        </div>
                      )}

                      {/* Subtotal */}
                      <div className="flex items-center justify-between py-6">
                        <span className="text-md font-medium text-gray-800">
                          Subtotal:
                        </span>
                        <span className="text-md font-medium text-gray-800">
                          Rs. {totalPrice}
                        </span>
                      </div>

                      {/* Action Buttons */}
                      <div className="p-6 bg-black space-y-3">
                        <Link href={"/cart"} className="w-full">
                        <Button
                          className="w-full bg-transparent border-white hover:border-[#B8956A] text-white hover:bg-[#B8956A] hover:text-gray-900"
                          variant={"outline"}
                        >
                          VIEW CART
                        </Button>
                        </Link>
                        <Link href={"/checkout"} className="w-full mt-3">
                        <Button
                          className="w-full text-white hover:opacity-90"
                          style={{ backgroundColor: "#B8956A" }}
                          >
                          CHECKOUT
                        </Button>
                        </Link>
                      </div>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
          {/* offcanvas in mobile */}
          <div className="block lg:hidden">
            <Sheet open={open1} onOpenChange={setOpen1}>
              <SheetTrigger>
                <Menu />
              </SheetTrigger>
              <SheetContent side="left" style={{ width: "65vw" }}>
                <SheetHeader>
                  <SheetTitle className=" text-sm">
                    Contact us 24/7 : +91-9781234560
                  </SheetTitle>
                  <SheetDescription>
                    {/* gmail */}
                    <p className=" py-2"> furniture@gmail.com</p>
                    {/* menues */}
                    <div className=" py-2 border-b border-gray-200 text-left font-semibold capitalize">
                      <Link href="/">home</Link>
                    </div>

                    <Accordion
                      type="single"
                      collapsible
                      className="font-semibold capitalize"
                    >
                      {/* living */}
                      <AccordionItem value="item-1">
                        <AccordionTrigger className=" font-semibold capitalize">
                          <Link href="/categories/living">living</Link>
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
                         <div className="flex flex-col gap-2 text-left ms-3">
                          <Link href="/about-us">About Us</Link>
                          <Link href="/cart">Cart</Link>
                          <Link href="/checkout">checkout</Link>
                          <Link href="/frequently-questions">frequently asked questions</Link>
                         </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    {/* login / register */}
                    <div className=" py-2 border-b border-gray-200 text-left font-semibold capitalize">
                      {
                        auth ? (
                          <Link href="/my-dashboard">My Dashboard</Link>
                        ) : (
                          <Link href="/login-register">login / register</Link>
                        )
                      }
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* navigation menu */}
        {/* visible on scroll */}
        <nav
          className={`${
            header
              ? "fixed top-0 left-0 animate-slideIn slideIn z-[9999] bg-white/90 shadow-md "
              : "z-[50] "
          } hidden md:flex justify-center space-x-8 py-4 max-w-[100%] w-full`}
        >
          {/* logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/HomePageImgs/cccfbdab-3bec-439f-88b9-5694698cd302-1670132652.png"
              alt="logo"
              width={80}
              height={80}
              className={`${header ? "block" : "hidden"}`}
            />
          </Link>
          {/* home */}
          <Link
            href="/"
            className="text-[14px] font-semibold text-gray-700 hover:text-[#C09578]"
          >
            Home
          </Link>
          {/* living */}
          <Link
            href=""
            className=" relative group flex capitalize text-[14px] font-semibold text-gray-700 hover:text-[#C09578]"
          >
            {/* nav item */}
            <span> living </span>
            <span>
              <ChevronDown
                size={16}
                className="inline-block ml-1 bg-transparent"
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
                      <Link href="/categories/living/side-and-end-tables">
                        <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                          Side and End Tables
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link href="/categories/living/nest-of-tables">
                        <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                          Nest Of Tables
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link href="/categories/living/console-table">
                        <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                          Console Table
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link href="/categories/living/coffee-table-sets">
                        <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                          Coffee Table Sets
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link href="/categories/living/coffee-tables">
                        <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                          Coffee Tables
                        </p>
                      </Link>
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
                      <Link href="/categories/living/side-and-end-tables">
                        <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                          Side and End Tables
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link href="/categories/living/nest-of-tables">
                        <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                          Nest Of Tables
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link href="/categories/living/console-table">
                        <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                          Console Table
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link href="/categories/living/coffee-table-sets">
                        <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                          Coffee Table Sets
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link href="/categories/living/coffee-tables">
                        <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                          Coffee Tables
                        </p>
                      </Link>
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
                      <Link href="/categories/living/side-and-end-tables">
                        <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                          Side and End Tables
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link href="/categories/living/nest-of-tables">
                        <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                          Nest Of Tables
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link href="/categories/living/console-table">
                        <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                          Console Table
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link href="/categories/living/coffee-table-sets">
                        <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                          Coffee Table Sets
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link href="/categories/living/coffee-tables">
                        <p className="block text-gray-500 hover:text-[#C09578] text-xs">
                          Coffee Tables
                        </p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Link>
          {/* sofa */}
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
                className=" bg-transparent group-hover:text-[#C09578]"
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
          {/* pages */}
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
                className=" bg-transparent group-hover:text-[#C09578]"
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
                  <ul className="space-y-4 font-normal">
                    <li>
                      <Link href="/about-us">
                        <p className="block text-gray-500 hover:text-[#C09578] text-[13px]">
                          About Us
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link className="my-2" href="/cart">
                        <p className="block text-gray-500 hover:text-[#C09578] text-[13px]">
                          Cart
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link className="my-2" href="/checkout">
                        <p className="block text-gray-500 hover:text-[#C09578] text-[13px]">
                          Checkout
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link className="my-2" href="/frequently-questions">
                        <p className="block text-gray-500 hover:text-[#C09578] text-[13px]">
                          Frequently Asked Questions
                        </p>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Link>
          {/* contact us */}
          <Link
            href="/contact-us"
            className="text-[14px] flex items-center  capitalize font-semibold text-gray-700 hover:text-[#C09578]"
          >
            <span>contact us</span>
          </Link>
        </nav>
      </header>

   
    </>
  );
}

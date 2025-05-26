"use client"
import React from "react";
import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Send, ArrowUp } from "lucide-react"

export default function Footer() {
  return (
    <>
      <footer className=" pt-12 pb-6 md:px-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Contact Us Column */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Contact Us
              </h2>
              <div className="space-y-3 text-gray-600">
                <p>
                  <span className="font-medium">Address:</span> Claritas est
                  etiam processus dynamicus
                </p>
                <p>
                  <span className="font-medium">Phone:</span> 9781234560
                </p>
                <p>
                  <span className="font-medium">Email:</span>{" "}
                  furniture@gmail.com
                </p>
              </div>
              <div className="flex space-x-3 mt-6">
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:border-gray-400 transition-colors"
                >
                  <Facebook size={18} />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:border-gray-400 transition-colors"
                >
                  <Instagram size={18} />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:border-gray-400 transition-colors"
                >
                  <Twitter size={18} />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:border-gray-400 transition-colors"
                >
                  <Linkedin size={18} />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:border-gray-400 transition-colors"
                >
                  <Youtube size={18} />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:border-gray-400 transition-colors"
                >
                  <Send size={18} />
                </Link>
              </div>
            </div>

            {/* Information Column */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Information
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <Link
                    href="#"
                    className="hover:text-gray-800 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-gray-800 transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-gray-800 transition-colors"
                  >
                    Frequently Questions
                  </Link>
                </li>
              </ul>
            </div>

            {/* My Account Column */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                My Account
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <Link
                    href="#"
                    className="hover:text-gray-800 transition-colors"
                  >
                    My Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-gray-800 transition-colors"
                  >
                    Wishlist
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-gray-800 transition-colors"
                  >
                    Cart
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-gray-800 transition-colors"
                  >
                    Checkout
                  </Link>
                </li>
              </ul>
            </div>

            {/* Top Rated Products Column */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Top Rated Products
              </h2>
              <div className="space-y-6">
                {/* Product 1 */}
                <div className="flex gap-4">
                  <div className="w-20 h-20 flex-shrink-0 border border-gray-200 rounded overflow-hidden">
                    <Image
                      src="/HomePageImgs/16253179270591620747711033Hardwell Temple Prayer Unit__.png"
                      alt="Calina Swing Jhula"
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Wooden Jhula</p>
                    <h3 className="text-lg font-medium text-gray-800">
                      Calina Swing Jhula
                    </h3>
                    <div className="mt-1">
                      <span className="text-gray-400 line-through mr-2">
                        Rs. 65,000
                      </span>
                      <span className="text-orange-500 font-medium">
                        Rs. 58,000
                      </span>
                    </div>
                  </div>
                </div>

                {/* Product 2 */}
                <div className="flex gap-4">
                  <div className="w-20 h-20 flex-shrink-0 border border-gray-200 rounded overflow-hidden">
                    <Image
                      src="/HomePageImgs/16253167208651620078433247Louise Cabinet_.png"
                      alt="Hardwell Temple Prayer Unit"
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Side and End Tables</p>
                    <h3 className="text-lg font-medium text-gray-800">
                      Hrithvik Stool
                    </h3>
                    <div className="mt-1">
                      <span className="text-gray-400 line-through mr-2">
                        Rs. 7,000
                      </span>
                      <span className="text-orange-500 font-medium">
                        Rs. 6,000
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="border-t border-b border-gray-200 py-6 mb-6">
            <div className="flex flex-wrap justify-center gap-8 text-gray-600">
              <Link href="#" className="hover:text-gray-800 transition-colors">
                Home
              </Link>
              <Link href="#" className="hover:text-gray-800 transition-colors">
                Online Store
              </Link>
              <Link href="#" className="hover:text-gray-800 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-gray-800 transition-colors">
                Terms Of Use
              </Link>
            </div>
          </div>

          {/* Copyright and Payment Methods */}
          <div className="text-center text-gray-600 mb-6">
            All Rights Reserved By Furniture | © 2025
          </div>

          <div className="w-[60%] md:w-[30%] lg:w-[20%] mx-auto flex justify-center gap-4 mb-6">
            <Image
              src="/HomePageImgs/papyel2.png"
              alt="Visa"
              width={50}
              height={30}
              className="object-cover w-full h-full"
            />
          </div>

         
        </div>
      </footer>
    </>
  );
}

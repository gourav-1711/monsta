"use client";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function page() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <>
      <div className="max-w-[1100px] w-[95%] md:w-[90%] lg:w-[100%] mx-auto px-2 md:px-4">
        <div className="mt-[30px] p-[45px_0px] border-t border-t-gray-200 border-b border-gray-200 text-center">
          <h1 className="text-[40px] font-bold mb-[10px] font-serif text tracking-tight">
            Contact Us
          </h1>
          <Breadcrumb>
            <BreadcrumbList className="justify-center font-medium">
              <BreadcrumbItem className="text-center text-black hover:text-[#C09578] transition-colors">
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem className="text-center">
                <BreadcrumbLink className="text-[#C09578]" href="/contact-us">
                  Contact Us
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        {/* Contact Us Form and map */}
        <div className=" mx-auto px-4 py-12">
          <div className="">
            {/* Map Section */}
            <div className=" w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.5784663962504!2d73.0151612!3d26.2794795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c5ea068dd97%3A0x9fc834f4025c9f5b!2sLaxmi%20Dairy%20%26%20Provision%20Store!5e0!3m2!1sen!2sin!4v1710400517044!5m2!1sen!2sin"
                className="w-full h-full rounded-lg"
                style={{ border: 0 }}
                allowFullScreen="yes"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 mt-12">
            {/* contact details */}
            <div className="space-y-8">
              <h2 className="text-2xl  mb-6 text font-bold border-b border-gray-200 pb-2">Contact Us</h2>
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-3 border-b border-gray-200 pb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <div className="flex gap-2">
                    <h3 className=" mb-1">Address :</h3>
                    <p className="text-gray-600">Claritas est etiam processus dynamicus</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3 border-b border-gray-200 pb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <div className="flex gap-2 ">
                    <h3 className=" mb-1">Phone :</h3>
                    <p className="text-gray-600">1234567890</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3 border-b border-gray-200 pb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <div className="flex gap-2">
                    <h3 className=" mb-1">Email :</h3>
                    <p className="text-gray-600">furniture@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold mb-6 text-black">Tell Us Your Question</h2>
              <form  action="" onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-semibold">
                    Your Name (required)
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    className="focus-visible:ring-[#C09578]"
                    
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-semibold">
                    Your Email (required)
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="focus-visible:ring-[#C09578]"
                    
                  />
                </div>

                {/* Mobile Number */}
                <div className="space-y-2">
                  <Label htmlFor="mobile" className="text-sm font-semibold">
                    Your Mobile Number (required)
                  </Label>
                  <Input
                    id="mobile"
                    type="tel"
                    placeholder="Enter your mobile number"
                    className="focus-visible:ring-[#C09578]"
                    
                  />
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm font-semibold">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    placeholder="Enter subject"
                    className="focus-visible:ring-[#C09578]"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-semibold">
                    Your Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Write your message here"
                    className="min-h-[150px] focus-visible:ring-[#C09578]"
                  />
                </div>

                {/* Submit Button */}
                <Button className=" bg-black hover:bg-gray-800 text-white transition-colors">
                  Send 
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

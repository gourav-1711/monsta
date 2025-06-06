import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import Slider3 from "../comman/Home/Slider3";

export default function page() {
  return (
    <>
      <div className="max-w-[1100px] w-[70%] md:w-[80%] lg:w-[100%] mx-auto">
        {/* Breadcrumb */}
        <div className="mt-[15px]  p-[35px_0px] border-t border-t-gray-200 border-b border-gray-200 text-center">
          <h1 className="text-[32px] font-bold mb-[5px] font-serif text">
            About Us
          </h1>
          <Breadcrumb>
            <BreadcrumbList className="justify-center font-semibold">
              <BreadcrumbItem className="text-center text-black">
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem className="text-center">
                <BreadcrumbLink className=" text-[#C09578]" href="/about-us">
                  About Us
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* about us */}
        <div className="w-full">
          <Image
            src="/AboutUsImgs/983cc349-1718-4290-b7cd-c8eb20459536-1671213069.jpg"
            alt="about us"
            className="w-full h-full object-cover"
            width={1000}
            height={1000}
          />
          <h1 className="text-3xl capitalize py-3 font-bold mb-[5px] font-serif text text-center">
            Welcome to monsta !
          </h1>
          <p className="text-[14px] font-[500] py-2  text-gray-500 text-center">
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore eu feugiat nulla facilisis at
            vero eros et accumsan et iusto odio dignissim qui blandit praesent
            luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
            Nam liber tempor cum soluta nobis eleifend option congue nihil
            imperdiet doming id quod mazim placerat facer possim assum. Typi non
            habent claritatem insitam, est usus legentis in iis qui facit eorum
            claritatem.
          </p>
          <h2 className="text-[17px] font-[450] italic text-center text-[#C09578]">
            “There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.”
          </h2>
        </div>

        {/* why choose us */}
        <div className="w-full py-5">
          <h1 className="text-3xl capitalize py-3 font-bold mb-[5px] font-serif text text-center">
            Why Choose Us
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full h-auto">
            <div className="w-full h-auto flex flex-col items-center justify-center">
              <Image
                src="/AboutUsImgs/c65c4789-c1eb-4cfc-9961-3ab025317e08-1670161041.jpg"
                alt="about us"
                className=""
                width={100}
                height={100}
              />
              <h1 className="text-[16px] font-bold capitalize py-1 font-serif text text-center">
                Creative Design
              </h1>
              <p className="text-[14px] font-[500] py-2  text-gray-500 text-center text">
                Erat metus sodales eget dolor consectetuer, porta ut purus at et
                alias, nulla ornare velit amet enim
              </p>
            </div>
            <div className="w-full h-auto flex flex-col items-center justify-center">
              <Image
                src="/AboutUsImgs/eb6a7519-f0f9-469f-af25-4ba0536060fd-1670161090.jpg"
                alt="about us"
                className=""
                width={100}
                height={100}
              />
              <h1 className="text-[16px] font-bold capitalize py-1 font-serif text text-center">
                Creative Design
              </h1>
              <p className="text-[14px] font-[500] py-2  text-gray-500 text-center text">
                Erat metus sodales eget dolor consectetuer, porta ut purus at et
                alias, nulla ornare velit amet enim
              </p>
            </div>
            <div className="w-full h-auto flex flex-col items-center justify-center">
              <Image
                src="/AboutUsImgs/89df96b6-b70d-463b-affb-58a74d49ed6b-1670161065.jpg"
                alt="about us"
                className=""
                width={100}
                height={100}
              />
              <h1 className="text-[16px] font-bold capitalize py-1 font-serif text text-center">
                Creative Design
              </h1>
              <p className="text-[14px] font-[500] py-2  text-gray-500 text-center text">
                Erat metus sodales eget dolor consectetuer, porta ut purus at et
                alias, nulla ornare velit amet enim
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full h-auto py-5">
            <div className="w-full h-auto flex flex-col items-center justify-center">
              <Image
                src="/AboutUsImgs/dbfbc372-1550-40ef-a372-19566e1776b2-1671213170.jpg"
                alt="about us"
                className="w-full h-full object-cover"
                width={100}
                height={100}
              />
              <h1 className="text-[16px] font-bold capitalize py-1 font-serif text text-center">
                What Do We Do?
              </h1>
              <p className="text-[14px] font-[500] py-2  text-gray-500 text-center text">
                Mirum est notare quam littera gothica, quam nunc putamus parum
                claram, anteposuerit litterarum formas humanitatis per seacula
                quarta decima et quinta decima.
              </p>
            </div>
            <div className="w-full h-auto flex flex-col items-center justify-center">
              <Image
                src="/AboutUsImgs/0eb1dffc-23c4-4a66-bb02-f5028e3658d3-1671213170.jpg"
                alt="about us"
                className="w-full h-full object-cover"
                width={100}
                height={100}
              />
              <h1 className="text-[16px] font-bold capitalize py-1 font-serif text text-center">
                Our Mission
              </h1>
              <p className="text-[14px] font-[500] py-2  text-gray-500 text-center text">
                Mirum est notare quam littera gothica, quam nunc putamus parum
                claram, anteposuerit litterarum formas humanitatis per seacula
                quarta decima et quinta decima.
              </p>
            </div>
            <div className="w-full h-auto flex flex-col items-center justify-center">
              <Image
                src="/AboutUsImgs/028a3c98-0fb9-4fc0-8e7c-0076d254de41-1671213170.jpg"
                alt="about us"
                className="w-full h-full object-cover"
                width={100}
                height={100}
              />
              <h1 className="text-[16px] font-bold capitalize py-1 font-serif text text-center">
                History Of Us
              </h1>
              <p className="text-[14px] font-[500] py-2  text-gray-500 text-center text">
                Mirum est notare quam littera gothica, quam nunc putamus parum
                claram, anteposuerit litterarum formas humanitatis per seacula
                quarta decima et quinta decima.
              </p>
            </div>
          </div>
        </div>

        {/* our customers */}
        <Slider3 />
      </div>
    </>
  );
}

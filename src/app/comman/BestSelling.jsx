import React from "react";
import Slider2 from "./Home/Slider2";

export default function BestSelling({heading}) {
  return (
    <>
      {/* best selling products */}
      <section className="px-4 py-12 max-w-[1100px] mx-auto ">
        {/* title */}
        <div className="relative">
          <h1 className="text-2xl font-bold capitalize bg-white z-[15] w-fit">
            {heading}
          </h1>
          <div className=" absolute top-[25%] left-0 z-[-1] right-0 border-b-2 ms-6 w-[90%] flex justify-end border-gray-200 py-1"></div>
        </div>
        {/* slider here */}
        <Slider2 />
      </section>
    </>
  );
}

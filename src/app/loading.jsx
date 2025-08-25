import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-white fixed top-0 left-0 right-0 bottom-0 z-[99999999]">
      <div
        className="w-12 h-12 rounded-full animate-spin
    border-x-2 border-solid border-[#B8956A] border-t-transparent"
      ></div>
    </div>
  );
}

import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div
        className="w-12 h-12 rounded-full animate-spin
    border-x-2 border-solid border-[#B8956A] border-t-transparent"
      ></div>
    </div>
  );
}

import React from "react";
import Link from "next/link";
export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-[180px] md:text-[220px] font-serif leading-none text-[#c9a287]">
        404
      </h1>
      <h2 className="text-2xl md:text-3xl font-serif tracking-wide mt-4 mb-6">
        OPPS! PAGE NOT BE FOUND
      </h2>
      <p className="max-w-md text-gray-600 mb-10">
        Sorry but the page you are looking for does not exist, have been
        removed, name changed or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="bg-[#c9a287] text-white px-8 py-3 font-medium hover:bg-[black] transition-colors"
      >
        BACK TO HOME PAGE
      </Link>
    </div>
  );
}

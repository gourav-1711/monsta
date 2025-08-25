"use client";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../(redux)/features/cart/cart";
import { addToWishlist } from "../(redux)/features/wishlist/wishlist";
import { toast } from "sonner";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export const ProductCard = ({ data }) => {
  if (!data) return <div>loading...</div>;
  const { image, name, price, discount_price, category_ids, _id } = data;

  const baseUrl = process.env.NEXT_PUBLIC_IMAGE;



  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const cartObject = {
    id: _id,
    image: `${baseUrl}/${image}`, // ✅ build full URL
    title: name,
    price: discount_price || price,
    oldPrice: price,
    quantity: 1,
  };

  const addItem = () => { 
    dispatch(addToCart(cartObject));
  };

  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);


  // useEffect(() => {
  //   const check = 
  //   if (check) {
  //     setIsInCart(true);
  //   }
  // }, [cartItems]);
  // console.log(cartItems);

  return (
    <div className="bg-white shadow-lg flex flex-col items-center pb-4">
      <Link className="w-full" href={`/product-details/${_id}`}>
        <Image
          src={`${baseUrl}/${image}`} // ✅ full image path
          alt={name}
          width={180}
          height={180}
          className="w-full object-cover mb-4"
        />
      </Link>
      <div className="flex flex-col items-center justify-center">
        <span className="text-xs text-black uppercase tracking-wide mb-1">
          {category_ids?.[0]?.name || "Uncategorized"}
        </span>
        <h2 className="text-lg font-semibold mb-2 text-center">{name}</h2>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm line-through text-black">Rs. {price}</span>
          <span className="text-[18px] font-bold text-[#C09578] font-sans">
            Rs. {discount_price || price}
          </span>
        </div>
        <div className="flex items-center gap-2 mb-4 w-full">
          <Button
          disabled={wishlistItems.some((item) => item.id === cartObject.id)}
          
            onClick={() => dispatch(addToWishlist(cartObject))}
            className="w-full rounded-[0px] bg-gray-200 text-black hover:bg-[#C09578]"
          >
            <Heart />
          </Button>
          <Button
            onClick={addItem}
            className={`w-full rounded-[0px] ${
              cartItems.some((item) => item.id === cartObject.id)
                ? "bg-[#C09578] text-white hover:bg-gray-200 hover:text-black"
                : "bg-gray-200 text-black hover:bg-[#C09578]"
            }`}
          >
            {cartItems.some((item) => item.id === cartObject.id) ? "In Cart" : "Add to Cart"}
          </Button>
        </div>
      </div>
    </div>
  );
};

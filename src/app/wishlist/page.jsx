"use client";
import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Trash2, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "@/lib/features/cart/cart";
import { removeFromWishlist } from "@/lib/features/wishlist/wishlist";
import { toast } from "sonner";
import { Dialog } from "@/components/ui/dialog";
import { DialogContent } from "@/components/ui/dialog";
export default function page() {
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  return (
    <>
      <div className="max-w-[1100px] w-[70%] md:w-[80%] lg:w-[100%] mx-auto px-4">
        <div className="mt-[30px] py-[40px] border-t border-t-gray-200 border-b border-gray-200 text-center">
          <h1 className="text-[40px] font-bold mb-[10px] font-serif text animate-fade-in">
            My Wishlist
          </h1>
          <Breadcrumb>
            <BreadcrumbList className="justify-center font-medium text-[15px]">
              <BreadcrumbItem className="text-center text-gray-600 hover:text-black transition-colors">
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem className="text-center">
                <BreadcrumbLink className="text-[#C09578] hover:text-[#a37a5c] transition-colors" href="/wishlist">
                  My Wishlist
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Cart Table */}
        <div className="mt-10 mb-16">
          <Table className="w-full border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <TableHeader>
              <TableRow className="border-b border-[#C09578] bg-[#f8f5f3]">
                <TableHead className="text-center py-5 text font-semibold text-gray-800 text-[16px]">
                  Delete
                </TableHead>
                <TableHead className="text-center py-5 text font-semibold text-gray-800 text-[16px]">
                  Image
                </TableHead>
                <TableHead className="text-center py-5 text font-semibold text-gray-800 text-[16px]">
                  Product
                </TableHead>
                <TableHead className="text-center py-5 text font-semibold text-gray-800 text-[16px]">
                  Price
                </TableHead>
                <TableHead className="text-center py-5 text font-semibold text-gray-800 text-[16px]">
                  Stock
                </TableHead>
                <TableHead className="text-center py-5 text font-semibold text-gray-800 text-[16px]">
                  Add To Cart
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {wishlistItems.length > 0 ? (
                wishlistItems.map((item) => (
                <CartItem
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  quantity={item.quantity}
                  total={item.price * item.quantity}
                  id={item.id}
                />
              ))
              ) : (
                <TableRow className="hover:bg-[transparent] transition-colors duration-200">
                  <TableCell colSpan={6} className="text-center">
                    <div className="flex flex-col items-center justify-center">
                      <Image src="/HomePageImgs/my-Order.png" alt="No items in wishlist" width={100} height={100} className="w-[40%] lg:w-[20%]   object-cover" />
                      <p className="text-center text-gray-500 font-semibold text-lg text">
                        No items in wishlist
                      </p>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}

const CartItem = ({ image, title, price, quantity, total, id }) => {
  const [open, setOpen] = useState();
  const item = {
    id: id,
    title: title,
    price: price,
    quantity: quantity,
    total: total,
  }

  const [loading, setLoading] = useState("ADD TO CART");

  const dispatch = useDispatch();
  const sendItemToCart = () => {
    setLoading("LOADING...");
    dispatch(addToCart(item));
    // remove from wishlist after adding to cart
    // dispatch(removeFromWishlist(item));
    toast.success("Item added to cart");
    setLoading("ADD TO CART");
  }
  return (
    <TableRow className="hover:bg-gray-50 transition-colors group">
      <TableCell className="py-6 text-center border border-gray-200">
        <Button 
          variant="ghost" 
          size="icon" 
          className="hover:bg-red-50 transition-all duration-300"
          onClick={() => setOpen(true)}
        >
          <Trash2 className="h-5 w-5 text-gray-400 hover:text-red-500 transition-colors" />
        </Button>
      </TableCell>
      <TableCell className="py-6 h-[120px] text-center flex justify-center border border-gray-200">
        <Link href="/product-details/stools" className="overflow-hidden rounded-md">
          <Image
            src={image}
            alt={title}
            width={120}
            height={120}
            className="object-cover w-[120px] h-[120px] transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
      </TableCell>
      <TableCell className="py-6 text-center border font-medium text-gray-800 border-gray-200 hover:text-[#C09578] transition-colors">
        <Link href="/product-details/stools">
          {title}
        </Link>
      </TableCell>
      <TableCell className="py-6 text-center border font-semibold text-[#C09578] border-gray-200">
        Rs. {price}
      </TableCell>
      <TableCell className="py-6 text-center border border-gray-200">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
          Out of Stock
        </span>
      </TableCell>
      <TableCell className="border font-semibold text-black border-gray-200">
        <Button 
          onClick={sendItemToCart}
          variant="ghost" 
          size="icon" 
          className="hover:bg-black hover:text-white bg-[#C09578] flex items-center justify-center gap-2 px-6 py-2.5 transition-all duration-300 hover:shadow-lg w-full"
        >
          <ShoppingCart className="h-4 w-4" />
          <span className="font-medium">
            {loading}
          </span>
        </Button>
      </TableCell>

      <Dialog open={open} onOpenChange={() => setOpen(false)}>
        <DialogContent className="sm:max-w-[700px]">
          <div className="flex flex-col items-center gap-6 py-4">
            <Image
              src="/HomePageImgs/my-Order.png"
              alt="Monsta Logo"
              width={200}
              height={80}
              priority
            />
            <h2 className="text-2xl font-semibold text-center">
              Are you sure you want to remove this product from Wishlist ?
            </h2>
            <div className="flex gap-4">
              <Button
                className="bg-[#C69B7B] hover:bg-[#b38a6d] px-8"
                onClick={() => {
                  dispatch(removeFromWishlist(item));
                  setOpen(false);
                  toast.success("Product removed from wishlist");
                }}
              >
                YES
              </Button>
              <Button
                onClick={() => {
                  setOpen(false);
                }}
                variant="secondary"
                className="bg-[#C69B7B] hover:bg-[#b38a6d] px-8"
              >
                NO
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </TableRow>
  );
};

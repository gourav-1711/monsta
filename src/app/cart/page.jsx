"use client";
import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
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
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity } from "@/lib/features/cart/cart";
import { Dialog } from "@/components/ui/dialog";
import { DialogContent } from "@/components/ui/dialog";
import { removeFromCart } from "@/lib/features/cart/cart";
import { toast } from "sonner";

export default function page() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <>
      <div className="max-w-[1100px] w-[95%] md:w-[80%] lg:w-[100%] mx-auto px-4">
        <div className="mt-[30px] p-[45px_0px] border-t border-t-gray-200 border-b border-gray-200 text-center">
          <h1 className="text-[40px] font-bold mb-[10px] font-serif text tracking-tight">
            Shopping Cart
          </h1>
          <Breadcrumb>
            <BreadcrumbList className="justify-center font-medium">
              <BreadcrumbItem className="text-center text-black hover:text-[#C09578] transition-colors">
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem className="text-center">
                <BreadcrumbLink className="text-[#C09578]" href="/cart">
                  Shopping Cart
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Cart Table */}
        <div className="mt-12">
          <Table className="w-full border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <TableHeader>
              <TableRow className="border-b border-[#C09578] bg-gray-50">
                <TableHead className="text-center py-5 text font-semibold text-black text-[16px]">
                  Delete
                </TableHead>
                <TableHead className="text-center py-5 text font-semibold text-black text-[16px]">
                  Image
                </TableHead>
                <TableHead className="text-center py-5 text font-semibold text-black text-[16px]">
                  Product
                </TableHead>
                <TableHead className="text-center py-5 text font-semibold text-black text-[16px]">
                  Price
                </TableHead>
                <TableHead className="text-center py-5 text font-semibold text-black text-[16px]">
                  Quantity
                </TableHead>
                <TableHead className="text-center py-5 text font-semibold text-black text-[16px]">
                  Total
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cartItems.length > 0 ? (
                cartItems.map((item, index) => (
                  <CartItem
                    key={index}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    quantity={item.quantity}
                    total={item.price * item.quantity}
                    id={item.id}
                    oldPrice={item.oldPrice}
                  />
                ))
              ) : (
                <TableRow className="hover:bg-[transparent] transition-colors duration-200">
                  <TableCell colSpan={6} className="text-center">
                    <div className="flex flex-col items-center justify-center">
                      <Image
                        src="/HomePageImgs/my-Order.png"
                        alt="No items in cart"
                        width={100}
                        height={100}
                        className="w-[40%] lg:w-[20%]   object-cover"
                      />
                      <p className="text-center text-gray-500 font-semibold text-lg text">
                        No items in cart
                      </p>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>

          <div className="flex justify-end border border-gray-200 p-6 mt-4 rounded-lg bg-gray-50">
            <Button
              variant="default"
              className="bg-black text-white hover:bg-gray-800 transition-colors duration-300 px-8"
            >
              UPDATE CART
            </Button>
          </div>

          {/* Coupon and Cart Totals */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* Coupon Section */}
            <div className="bg-[#F8F8F8] rounded-lg overflow-hidden shadow-sm transition-transform hover:scale-[1.01] duration-300">
              <h2 className="text-lg font-bold mb-4 bg-black text-white p-4">
                COUPON
              </h2>
              <p className="text-sm mb-6 px-6 text-gray-600">
                Enter your coupon code if you have one.
              </p>
              <div className="flex gap-3 p-6 pt-0">
                <Input
                  placeholder="Coupon code"
                  className="flex-grow focus:ring-2 focus:ring-[#C09578]"
                />
                <Button className="bg-black text-white hover:bg-gray-800 transition-colors duration-300">
                  APPLY COUPON
                </Button>
              </div>
            </div>

            {/* Cart Totals */}
            <div className="bg-[#F8F8F8] rounded-lg overflow-hidden shadow-sm transition-transform hover:scale-[1.01] duration-300">
              <h2 className="text-lg font-bold mb-4 bg-black text-white p-4">
                CART TOTALS
              </h2>
              <div className="space-y-5 p-6">
                <div className="flex justify-between border-b pb-3">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">Rs. {totalPrice}</span>
                </div>
                <div className="flex justify-between border-b pb-3">
                  <span className="text-gray-600">Discount(-)</span>
                  <span className="font-medium">Rs. 0</span>
                </div>
                <div className="flex justify-between font-bold pt-2">
                  <span>Total</span>
                  <span className="text-[#C09578] text-xl">
                    Rs. {totalPrice}
                  </span>
                </div>
                <Button className="w-full bg-[#C09578] hover:bg-[#b08968] text-white mt-6 py-6 text-lg font-medium transition-all duration-300 hover:shadow-lg">
                  Proceed To Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const CartItem = ({ image, title, price, quantity, total, id, oldPrice }) => {
  const [open, setOpen] = useState();
  const dispatch = useDispatch();
  // update quantity
  const handleQuantityChange = (e) => {
    dispatch(updateQuantity({ id, quantity: e.target.value }));
  };

  return (
    <TableRow className="hover:bg-gray-50 transition-colors duration-200">
      <TableCell className="py-6 text-center border border-gray-200">
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-red-50 transition-colors duration-200"
          onClick={() => setOpen(true)}
        >
          <Trash2 className="h-5 w-5 text-red-500 hover:text-red-600" />
        </Button>
      </TableCell>
      <TableCell className="py-6 h-[120px] text-center flex justify-center border border-gray-200">
        <Link
          href="/product-details/stools"
          className="transition-transform hover:scale-105 duration-300"
        >
          <Image
            src={image}
            alt={title}
            width={120}
            height={120}
            className="object-cover w-[120px] h-[100%] rounded-md shadow-sm"
          />
        </Link>
      </TableCell>
      <TableCell className="py-6 text-center border font-medium text-gray-800 border-gray-200 hover:text-[#C09578] transition-colors duration-200">
        <Link href="/product-details/stools">{title}</Link>
      </TableCell>
      <TableCell className="py-6 text-center border font-medium text-gray-800 border-gray-200">
        Rs. {price}
      </TableCell>
      <TableCell className="py-6 h-full text-center border border-gray-200 flex justify-center items-center">
        <Input
          type="number"
          defaultValue={quantity}
          className="w-24 text-center focus:ring-2 focus:ring-[#C09578]"
          min={1}
          onChange={handleQuantityChange}
        />
      </TableCell>
      <TableCell className="py-6 text-center border font-semibold text-[#C09578] border-gray-200">
        Rs. {total}
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
              Are you sure you want to remove this product from Cart ?
            </h2>
            <div className="flex gap-4">
              <Button
                className="bg-[#C69B7B] hover:bg-[#b38a6d] px-8"
                onClick={() => {
                  dispatch(removeFromCart({ id: id }));
                  setOpen(false);
                  toast.success("Product removed from cart");
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

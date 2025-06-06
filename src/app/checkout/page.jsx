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
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function page() {
  return (
    <div className="max-w-[1100px] mx-auto">
      <div className="mt-[30px] p-[45px_0px] border-t border-t-gray-200 border-b border-gray-200 text-center">
        <h1 className="text-[40px] font-bold mb-[10px] font-serif text tracking-tight">
         Checkout
        </h1>
        <Breadcrumb>
          <BreadcrumbList className="justify-center font-medium">
            <BreadcrumbItem className="text-center text-black hover:text-[#C09578] transition-colors">
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem className="text-center">
              <BreadcrumbLink className="text-[#C09578]" href="/checkout">
               Checkout
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* billing details */}
      <div className="mt-8 mb-12">
        <h2 className="text-2xl font-serif font-bold mb-6 bg-black text-white p-3 w-[50%]">BILLING DETAILS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[50%]">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-md font-semibold text ">
              Name*
            </Label>
            <Input 
              id="name" 
              placeholder="Enter your name"
              className="focus-visible:ring-[#C09578]" 
            />
          </div>

          {/* Mobile Number */}
          <div className="space-y-2">
            <Label htmlFor="mobile" className="text-md font-semibold text ">
              Mobile Number*
            </Label>
            <Input 
              id="mobile" 
              placeholder="Enter your mobile number"
              className="focus-visible:ring-[#C09578]" 
            />
          </div>

          {/* Billing Name */}
          <div className="space-y-2">
            <Label htmlFor="billing-name" className="text-md font-semibold text ">
              Billing Name*
            </Label>
            <Input 
              id="billing-name" 
              placeholder="Enter billing name"
              className="focus-visible:ring-[#C09578]" 
            />
          </div>

          {/* Billing Email */}
          <div className="space-y-2">
            <Label htmlFor="billing-email" className="text-md font-semibold text ">
              Billing Email*
            </Label>
            <Input 
              id="billing-email" 
              type="email"
              placeholder="Enter billing email"
              className="focus-visible:ring-[#C09578]" 
            />
          </div>

          {/* Billing Mobile Number */}
          <div className="space-y-2">
            <Label htmlFor="billing-mobile" className="text-md font-semibold text ">
              Billing Mobile Number*
            </Label>
            <Input 
              id="billing-mobile" 
              placeholder="Enter billing mobile number"
              className="focus-visible:ring-[#C09578]" 
            />
          </div>

          {/* Country */}
          <div className="space-y-2">
            <Label htmlFor="country" className="text-md font-semibold text ">
              Country*
            </Label>
            <Select>
              <SelectTrigger id="country" className="focus-visible:ring-[#C09578]">
                <SelectValue placeholder="Select your country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="au">Australia</SelectItem>
                <SelectItem value="de">Germany</SelectItem>
                <SelectItem value="fr">France</SelectItem>
                <SelectItem value="in">India</SelectItem>
                <SelectItem value="jp">Japan</SelectItem>
                <SelectItem value="cn">China</SelectItem>
                <SelectItem value="br">Brazil</SelectItem>
                <SelectItem value="mx">Mexico</SelectItem>
                <SelectItem value="it">Italy</SelectItem>
                <SelectItem value="es">Spain</SelectItem>
                <SelectItem value="kr">South Korea</SelectItem>
                <SelectItem value="ru">Russia</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Billing Address */}
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="billing-address" className="text-md font-semibold text ">
              Billing Address*
            </Label>
            <Input 
              id="billing-address" 
              placeholder="Enter billing address"
              className="focus-visible:ring-[#C09578]" 
            />
          </div>

          {/* state */}
          <div className="space-y-2">
            <Label htmlFor="state" className="text-md font-semibold text ">
              State*
            </Label>
            <Input 
              id="state" 
              placeholder="Enter your state"
              className="focus-visible:ring-[#C09578]" 
            />
          </div>

          {/* city */}
          <div className="space-y-2">
            <Label htmlFor="city" className="text-md font-semibold text ">
              City*
            </Label>
            <Input 
              id="city" 
              placeholder="Enter your city"
              className="focus-visible:ring-[#C09578]" 
            />
          </div>

          {/* check box */}
          <div className="flex items-center space-x-2 md:col-span-2 mt-4">
            <Checkbox id="shipping" className="border-[#C09578] data-[state=checked]:bg-[#C09578] data-[state=checked]:text-primary-foreground" />
            <Label
              htmlFor="shipping"
              className="text text-lg bg-black text-white py-2 px-4 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Ship to a different address?
            </Label>
          </div>

          {/* table */}
          <div className="md:col-span-2 mt-8">
            <h2 className="text-[20px] font-serif font-bold mb-6 bg-black text-white p-3">YOUR ORDER</h2>
            
            <div className="border border-gray-200">
              {/* Table Header */}
              <div className="grid grid-cols-2 bg-gray-50 p-4 font-semibold">
                <div>Product</div>
                <div className="text-right">Total</div>
              </div>

              {/* Product Row */}
              <div className="grid grid-cols-2 p-4 border-t border-gray-200">
                <div>Hrithvik Stool × 1</div>
                <div className="text-right">Rs. 6,000</div>
              </div>

              {/* Cart Subtotal */}
              <div className="grid grid-cols-2 p-4 border-t border-gray-200">
                <div className="font-medium">Cart Subtotal</div>
                <div className="text-right">Rs. 6,000</div>
              </div>

              {/* Discount */}
              <div className="grid grid-cols-2 p-4 border-t border-gray-200">
                <div className="font-medium">Discount (-)</div>
                <div className="text-right">Rs. 0</div>
              </div>

              {/* Order Total */}
              <div className="grid grid-cols-2 p-4 border-t border-gray-200 bg-gray-50">
                <div className="font-bold">Order Total</div>
                <div className="text-right font-bold">Rs. 6,000</div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <Button className="w-full md:w-auto bg-[#C09578] hover:bg-[#A67D63] text-white">
              Place Order
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

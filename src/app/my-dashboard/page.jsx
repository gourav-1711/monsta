"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../(redux)/features/auth/auth";
import { useRouter } from "next/navigation";

export default function page() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { details } = useSelector((state) => state.auth);

  const profileUpdate = (e) => {
    e.preventDefault();

    const obj = {
      gender: e.target.gender.value,
      name: e.target.name.value,
      mobile: e.target.mobile.value,
      address: e.target.address.value,
    };
  };

  const removeAuth = () => {
    dispatch(logout());
    router.push("/");
  };

  return (
    <>
      <div className="max-w-[1100px] mx-auto">
        <div className="mt-[30px] p-[45px_0px] border-t border-t-gray-200 border-b border-gray-200 text-center">
          <h1 className="text-[40px] font-bold mb-[10px] font-serif text tracking-tight">
            My Dashboard
          </h1>
          <Breadcrumb>
            <BreadcrumbList className="justify-center font-medium">
              <BreadcrumbItem className="text-center text-black hover:text-[#C09578] transition-colors">
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem className="text-center">
                <BreadcrumbLink className="text-[#C09578]" href="/my-dashboard">
                  My Dashboard
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Dashboard Content */}
        <div className="py-12">
          <Tabs
            defaultValue="profile"
            className="w-[95%] md:w-[90%] lg:w-[100%] mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-[30%_70%] justify-center gap-8">
              {/* tabs list */}
              <TabsList className="grid grid-cols-1 gap-2 space-y-1 bg-transparent h-fit">
                <TabsTrigger
                  value="dashboard"
                  className="w-full justify-start px-4 py-2 text-left text-lg font-medium bg-black text-white hover:bg-[#C09578] hover:text-white transition-colors data-[state=active]:bg-[#C09578] data-[state=active]:text-white"
                >
                  My Dashboard
                </TabsTrigger>
                <TabsTrigger
                  value="orders"
                  className="w-full justify-start px-4 py-2 text-left text-lg font-medium bg-black text-white hover:bg-[#C09578] hover:text-white transition-colors data-[state=active]:bg-[#C09578] data-[state=active]:text-white"
                >
                  Orders
                </TabsTrigger>
                <TabsTrigger
                  value="addresses"
                  className="w-full justify-start px-4 py-2 text-left text-lg font-medium bg-black text-white hover:bg-[#C09578] hover:text-white transition-colors data-[state=active]:bg-[#C09578] data-[state=active]:text-white"
                >
                  Addresses
                </TabsTrigger>
                <TabsTrigger
                  value="profile"
                  className="w-full justify-start px-4 py-2 text-left text-lg font-medium bg-black text-white hover:bg-[#C09578] hover:text-white transition-colors data-[state=active]:bg-[#C09578] data-[state=active]:text-white"
                >
                  My Profile
                </TabsTrigger>
                <TabsTrigger
                  value="password"
                  className="w-full justify-start px-4 py-2 text-left text-lg font-medium bg-black text-white hover:bg-[#C09578] hover:text-white transition-colors data-[state=active]:bg-[#C09578] data-[state=active]:text-white"
                >
                  Change Password
                </TabsTrigger>
                <TabsTrigger
                  value="logout"
                  className="w-full justify-start px-4 py-2 text-left text-lg font-medium bg-black text-white hover:bg-[#C09578] hover:text-white transition-colors data-[state=active]:bg-[#C09578] data-[state=active]:text-white"
                >
                  Logout
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="w-full">
                {/* dashboard */}
                <TabsContent value="dashboard" className="mt-0">
                  <div className="p-6 bg-white border border-gray-200 shadow-sm rounded-lg w-full">
                    <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
                    <p className="text-gray-600 mb-8">
                      From your account dashboard, you can easily check & view
                      your recent orders, manage your shipping and billing
                      addresses and Edit your password and account details.
                    </p>
                  </div>
                </TabsContent>
                {/* order table */}
                <TabsContent value="orders" className="mt-0">
                  <div className="p-6 bg-white border border-gray-200 shadow-sm rounded-lg w-full">
                    <h2 className="text-2xl font-bold mb-4">Orders</h2>
                    <div className="text ">
                      <Table>
                        <TableCaption>
                          A list of your recent orders.
                        </TableCaption>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="border border-gray-200 font-semibold text-center text-sm md:text-lg text-black">
                              Order
                            </TableHead>
                            <TableHead className="border border-gray-200 font-semibold text-center text-sm md:text-lg text-black">
                              Date
                            </TableHead>
                            <TableHead className="border border-gray-200 font-semibold text-center text-sm md:text-lg text-black">
                              Status
                            </TableHead>
                            <TableHead className="border border-gray-200 font-semibold text-center text-sm md:text-lg text-black">
                              Total
                            </TableHead>
                            <TableHead className="border border-gray-200 font-semibold text-center text-sm md:text-lg text-black">
                              Action
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium text-center text-sm md:text-lg border border-gray-200">
                              INV001
                            </TableCell>
                            <TableCell className="font-medium text-center text-sm md:text-lg border border-gray-200">
                              2023-01-01
                            </TableCell>
                            <TableCell className="font-medium text-center text-sm md:text-lg border border-gray-200">
                              Paid
                            </TableCell>
                            <TableCell className="font-medium text-center text-sm md:text-lg border border-gray-200">
                              $250.00
                            </TableCell>
                            <TableCell className="text-center border border-gray-200">
                              <Button className="font-medium text-sm md:text-lg text-[#C09578] bg-transparent shadow-none hover:bg-transparent px-8 py-2 rounded-full">
                                View
                              </Button>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </TabsContent>
                {/* Addresses */}
                <TabsContent value="addresses" className="mt-0">
                  <div className="p-6 bg-white border border-gray-200 shadow-sm rounded-lg w-full">
                    <p>
                      The following addresses will be used on the checkout page
                      by default.
                    </p>
                    <div className="mt-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Billing Address */}
                        <div className="border border-gray-200 rounded-lg p-4 space-y-4">
                          <h1 className="text-2xl mb-4 text">
                            Billing Address
                          </h1>
                          <form action="" className="space-y-4">
                            <div className="">
                              <Label htmlFor="billing-name">
                                Billing Name *
                              </Label>
                              <Input
                                type="text"
                                name="billing-name"
                                id="billing-name"
                              />
                            </div>
                            <div className="">
                              <Label htmlFor="billing-email">
                                Billing Email *
                              </Label>
                              <Input
                                type="email"
                                name="billing-email"
                                id="billing-email"
                              />
                            </div>
                            <div className="">
                              <Label htmlFor="billing-phone">
                                Billing Phone *
                              </Label>
                              <Input
                                type="number"
                                name="billing-phone"
                                id="billing-phone"
                              />
                            </div>
                            <div className="">
                              <Label htmlFor="billing-address">
                                Billing Address *
                              </Label>
                              <Input
                                type="text"
                                name="billing-address"
                                id="billing-address"
                              />
                            </div>
                            <div className="mt-4">
                              <Label htmlFor="billing-country">
                                {" "}
                                Country *
                              </Label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a country" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="United States">
                                    United States
                                  </SelectItem>
                                  <SelectItem value="Canada">Canada</SelectItem>
                                  <SelectItem value="United Kingdom">
                                    United Kingdom
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="mt-4">
                              <Label htmlFor="billing-state"> State *</Label>
                              <Input
                                type="text"
                                name="billing-state"
                                id="billing-state"
                              />
                            </div>
                            <div className="mt-4">
                              <Label htmlFor="billing-city"> City *</Label>
                              <Input
                                type="text"
                                name="billing-city"
                                id="billing-city"
                              />
                            </div>

                            <Button
                              type="submit"
                              className="bg-[#C09578] hover:bg-[#ab8468] text-white px-8 py-2 rounded-full"
                            >
                              Update
                            </Button>
                          </form>
                        </div>
                        {/* Shipping Address */}
                        <div className="border border-gray-200 rounded-lg p-4 space-y-4">
                          <h1 className="text-2xl mb-4 text">
                            Shipping Address
                          </h1>
                          <form action="" className="space-y-4">
                            <div className="">
                              <Label htmlFor="shipping-name">
                                Shipping Name *
                              </Label>
                              <Input
                                type="text"
                                name="billing-name"
                                id="billing-name"
                              />
                            </div>
                            <div className="">
                              <Label htmlFor="shipping-email">
                                Shipping Email *
                              </Label>
                              <Input
                                type="email"
                                name="shipping-email"
                                id="shipping-email"
                              />
                            </div>
                            <div className="">
                              <Label htmlFor="shipping-phone">
                                Shipping Phone *
                              </Label>
                              <Input
                                type="number"
                                name="shipping-phone"
                                id="shipping-phone"
                              />
                            </div>
                            <div className="">
                              <Label htmlFor="shipping-address">
                                Shipping Address *
                              </Label>
                              <Input
                                type="text"
                                name="shipping-address"
                                id="shipping-address"
                              />
                            </div>
                            <div className="mt-4">
                              <Label htmlFor="shipping-country">
                                {" "}
                                Country *
                              </Label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a country" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="United States">
                                    United States
                                  </SelectItem>
                                  <SelectItem value="Canada">Canada</SelectItem>
                                  <SelectItem value="United Kingdom">
                                    United Kingdom
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="mt-4">
                              <Label htmlFor="shipping-state"> State *</Label>
                              <Input
                                type="text"
                                name="shipping-state"
                                id="shipping-state"
                              />
                            </div>
                            <div className="mt-4">
                              <Label htmlFor="shipping-city"> City *</Label>
                              <Input
                                type="text"
                                name="shipping-city"
                                id="shipping-city"
                              />
                            </div>

                            <Button
                              type="submit"
                              className="bg-[#C09578] hover:bg-[#ab8468] text-white px-8 py-2 rounded-full"
                            >
                              Update
                            </Button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* Profile Form */}
                <TabsContent value="profile" className="mt-0">
                  <div className="p-6 bg-white border border-gray-200 shadow-sm rounded-lg w-full">
                    {/* Profile Form */}
                    <form
                      onSubmit={profileUpdate}
                      action=""
                      className="space-y-4"
                    >
                      <div className="">
                        <RadioGroup
                          defaultValue={"mr"}
                          className="flex items-center space-x-2"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="mr" id="mr" />
                            <Label htmlFor="mr">Mr</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="mrs" id="mrs" />
                            <Label htmlFor="mrs">Mrs</Label>
                          </div>
                        </RadioGroup>
                      </div>
                      <div className="">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          type="text"
                          defaultValue={details.name}
                          name="name"
                          id="name"
                        />
                      </div>
                      <div className="">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          type="email"
                          defaultValue={details.email}
                          name="email"
                          id="email"
                        />
                      </div>
                      <div className="">
                        <Label htmlFor="mobile">Phone Number</Label>
                        <Input
                          type="number"
                          name="mobile"
                          id="mobile"
                          defaultValue={details.mobile}
                        />
                      </div>
                      <div className="">
                        <Label htmlFor="address">Address</Label>
                        <Input
                          type="text"
                          defaultValue={details.address || ""}
                          name="address"
                          id="address"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="bg-[#C09578] hover:bg-[#ab8468] text-white px-8 py-2 rounded-full flex mt-4 justify-end"
                      >
                        Update Profile
                      </Button>
                    </form>
                  </div>
                </TabsContent>
                {/* Change Password Form */}
                <TabsContent value="password" className="mt-0">
                  <div className="p-6 bg-white border border-gray-200 shadow-sm rounded-lg w-full">
                    <form action="" className="space-y-4">
                      <div className="">
                        <Label htmlFor="old-password">Current Password</Label>
                        <Input
                          type="password"
                          name="old-password"
                          id="old-password"
                        />
                      </div>
                      <div className="">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input
                          type="password"
                          name="new-password"
                          id="new-password"
                        />
                      </div>
                      <div className="">
                        <Label htmlFor="confirm-password">
                          Confirm Password
                        </Label>
                        <Input
                          type="password"
                          name="confirm-password"
                          id="confirm-password"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="bg-[#C09578] hover:bg-[#ab8468] text-white px-8 py-2 rounded-full flex mt-4 justify-end"
                      >
                        Change Password
                      </Button>
                    </form>
                  </div>
                </TabsContent>
                {/* Logout */}
                <TabsContent value="logout" className="mt-0">
                  <div className="p-6 bg-white border border-gray-200 shadow-sm rounded-lg w-full">
                    <h2 className="text-2xl font-bold mb-4">Logout</h2>
                    <p>Are you sure you want to logout?</p>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button className="bg-[#C09578] hover:bg-[#ab8468] text-white px-8 py-2 rounded-full flex mt-4 justify-end">
                          Logout
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete your account and remove your data from our
                            servers.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction
                            className="bg-[#cf3131] hover:bg-[#b01e1e] text-white "
                            onClick={removeAuth}
                          >
                            Continue
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </TabsContent>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </>
  );
}

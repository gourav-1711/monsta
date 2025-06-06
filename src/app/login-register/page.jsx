"use client";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function page() {
  const [loginError, setLoginError] = useState("");
  const [registerError, setRegisterError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError("");

    const email = e.target.email.value;
    const password = e.target.password.value;

    // Basic validation
    if (!email || !password) {
      setLoginError("Please fill in all fields");
      return;
    }

    if (!email.includes("@")) {
      setLoginError("Please enter a valid email address");
      return;
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setRegisterError("");

    const email = e.target["register-email"].value;
    const password = e.target["register-password"].value;

    // Basic validation
    if (!email || !password) {
      setRegisterError("Please fill in all fields");
      return;
    }

    if (!email.includes("@")) {
      setRegisterError("Please enter a valid email address");
      return;
    }

    if (password.length < 6) {
      setRegisterError("Password must be at least 6 characters long");
      return;
    }
  };

  return (
    <>
      <div className="max-w-[1100px] w-[95%] md:w-[90%] lg:w-[100%] mx-auto px-4">
        <div className="mt-[30px] p-[45px_0px] border-t border-t-gray-200 border-b border-gray-200 text-center">
          <h1 className="text-[40px] font-bold mb-[10px] font-serif text tracking-tight">
            My Account
          </h1>
          <Breadcrumb>
            <BreadcrumbList className="justify-center font-medium">
              <BreadcrumbItem className="text-center text-black hover:text-[#C09578] transition-colors">
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem className="text-center">
                <BreadcrumbLink
                  className="text-[#C09578]"
                  href="/login-register"
                >
                  My Account
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        {/* login and register form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16">
          {/* Login Form */}
          <div className="space-y-6 border border-gray-200 rounded-lg p-8">
            <h2 className="text-3xl font-serif mb-8">Login</h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full p-3"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password *</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="w-full p-3"
                />
              </div>
              {loginError && (
                <p className="text-red-500 text-sm">{loginError}</p>
              )}
              <div className="flex items-center justify-between">
                <a href="#" className="text-[#C09578] hover:underline">
                  Lost your password?
                </a>
                <Button
                  type="submit"
                  className="bg-[#C09578] hover:bg-[#ab8468] text-white px-8 py-2 rounded-full"
                >
                  LOGIN
                </Button>
              </div>
            </form>
          </div>

          {/* Register Form */}
          <div className="space-y-6 border border-gray-200 rounded-lg p-8">
            <h2 className="text-3xl font-serif mb-8">Register</h2>
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="register-email">Email address *</Label>
                <Input
                  type="email"
                  id="register-email"
                  name="register-email"
                  placeholder="Email Address"
                  className="w-full p-3"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="register-password">Password *</Label>
                <Input
                  type="password"
                  id="register-password"
                  name="register-password"
                  placeholder="Password"
                  className="w-full p-3"
                />
              </div>
              {registerError && (
                <p className="text-red-500 text-sm">{registerError}</p>
              )}
              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="bg-[#C09578] hover:bg-[#ab8468] text-white px-8 py-2 rounded-full"
                >
                  REGISTER
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

"use client";
import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function page() {
  const { token } = useParams();
  const [passwordError, setPasswordError] = useState("");
  const [resetPassPageAccess, setResetPassPageAccess] = useState(true);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      e.target.password.value == "" ||
      e.target.confirm_password.value == ""
    ) {
      setPasswordError("Please fill in all fields");
      return;
    }

    setPasswordError("");
    axios
      .post(
        process.env.NEXT_PUBLIC_API_URL + "/user/reset-password",
        {
          token,
          password: e.target.password.value,
          confirm_password: e.target.confirm_password.value,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
       
        toast.success("Password reset successfully");
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
        setPasswordError(
          err.response?.data?._message || err.message || "Something went wrong"
        );
        if (err.response?.data?._message == "Invalid token" || "Invalid URL") {
          resetPassPageAccess(false);
          setTimeout(() => {
            router.push("/");
          }, 4000);
        }
      });
  };

  return (
    <div>
      {!resetPassPageAccess && (
        <div>
          <h1 className="text-3xl font-bold text-center underline">
            THIS PAGE DOES NOT EXIST
          </h1>
        </div>
      )}
      {resetPassPageAccess && (
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
          <Card className="w-full max-w-md">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-semibold text-center">
                Reset Password
              </CardTitle>
              <CardDescription className="text-center">
                Enter your new password below
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input
                    id="new-password"
                    name="password"
                    type="password"
                    placeholder="Enter your new password"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input
                    id="confirm-password"
                    name="confirm_password"
                    type="password"
                    placeholder="Confirm your new password"
                  />
                </div>
                {passwordError && (
                  <p className="text-red-500 text-sm mt-2">{passwordError}</p>
                )}
                <Button className="w-full mt-4">Reset Password</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}

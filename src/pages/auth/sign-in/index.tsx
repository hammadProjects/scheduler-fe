import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section className="py-20">
      <Card className="md:mx-auto md:max-w-1/3">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Sign In
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="text"
              placeholder="example@mail.com"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <div className="flex relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
              />
              {showPassword ? (
                <Eye
                  onClick={() => setShowPassword(false)}
                  className="absolute right-4 top-[6px]"
                />
              ) : (
                <EyeOff
                  onClick={() => setShowPassword(true)}
                  className="absolute right-4 top-[6px]"
                />
              )}
            </div>
          </div>
          <Button className="w-full mt-4">Login</Button>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-center w-full">
            Don&apos;t have an account?{" "}
            <Link href={"/auth/sign-up"} className="text-blue-600 underline">
              Register
            </Link>
          </p>
        </CardFooter>
      </Card>
    </section>
  );
};

export default SignIn;

import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="px-2 py-20 items-center">
      <div className="flex justify-between">
        <div className="max-w-1/2">
          <h2 className="capitalize text-6xl text-blue-500 font-bold max-w-1/2 mb-2">
            Simplify your scheduling
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Schedulrr helps you manage your time effectively. Create events, set
            your availability, and let others book time with you seamlessly.
          </p>
          <Button size={"lg"}>
            Get Started
            <ArrowRightIcon />
          </Button>
        </div>

        <div className="w-1/2">
          <Image
            src={"/images/poster.png"}
            alt="Hero-poster"
            width={450}
            height={450}
            style={{ margin: "0 auto" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="py-8 md:py-20 items-center">
      <div className="flex flex-col gap-6 md:gap-0 md:flex-row justify-between items-center md:items-start text-center md:text-start">
        <div className="md:max-w-1/2">
          <h2 className="capitalize text-3xl md:text-6xl text-blue-500 font-bold md:max-w-8/12 mb-2">
            Simplify your scheduling
          </h2>
          <p className="text-base md:text-xl text-gray-600 mb-6">
            Schedulrr helps you manage your time effectively. Create events, set
            your availability, and let others book time with you seamlessly.
          </p>
          <Button size={"lg"}>
            Get Started
            <ArrowRightIcon />
          </Button>
        </div>

        <div className="md:w-1/2">
          <Image
            src={"/images/poster.png"}
            alt="Hero-poster"
            width={450}
            height={450}
            className="mx-auto h-80"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

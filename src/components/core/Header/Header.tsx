import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="bg-white flex justify-between py-2 px-2 shadow-md">
        <Link href={"/"}>
          <Image
            src={"/images/logo.png"}
            alt="Scheduler-logo"
            width={160}
            height={100}
          />
        </Link>

        <div className="flex items-center gap-4">
          <Button>
            <Edit size={"sm"} />
            Create Event
          </Button>
          <Button variant={"outline"} className="bg-white text-black">
            Login
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

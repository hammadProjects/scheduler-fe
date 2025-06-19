import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar1, Clock, Link } from "lucide-react";
import Image from "next/image";
import React from "react";

const Testimonials = () => {
  const users = [
    {
      image: "/images/user-1.jpg",
      name: "Sarah Johnson",
      designation: "Marketing Manager",
      description:
        "Schedulrr has transformed how I manage my team’s meetings. It’s intuitive and saves us hours every week!",
    },
    {
      image: "/images/user-1.jpg",
      name: "David Lee",
      designation: "Freelance Designer",
      description:
        "As a freelancer, Schedulrr helps me stay organized and professional. My clients love how easy it is to book time with me.",
    },
    {
      image: "/images/user-1.jpg",
      name: "Emily Chen",
      designation: "Startup Founder",
      description:
        "Schedulrr streamlined our hiring process. Setting up interviews has never been easier!",
    },
  ];

  return (
    <section>
      <h2 className="capitalize text-center text-3xl text-blue-500 font-bold">
        what our users says
      </h2>
      <div className="grid grid-cols-3 gap-6 py-8">
        {users.map((user, index) => (
          <Card className="gap-12 justify-between" key={index}>
            <CardContent>
              <p className="text-gray-700">"{user.description}"</p>
            </CardContent>
            <CardFooter>
              <div className="flex gap-4">
                <div className="max-w-16 max-h-16 overflow-hidden rounded-full">
                  <Image
                    src={user.image}
                    alt={user.name}
                    width={40}
                    height={40}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[18px]">{user.name}</h4>
                  <p className="text-base text-gray-600">{user.designation}</p>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

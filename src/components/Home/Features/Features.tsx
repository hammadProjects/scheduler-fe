import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar1, Clock, Link } from "lucide-react";
import React from "react";

const Features = () => {
  const features = [
    {
      title: "Create Events",
      description: "Easily setup and customize your event types",
      icon: <Calendar1 className="text-blue-400" size={50} />,
    },
    {
      title: "Manage Availability",
      description: "Define your availability to streamline scheduling",
      icon: <Clock className="text-blue-400" size={50} />,
    },
    {
      title: "Custom Links",
      description: "Share your personalized scheduling link",
      icon: <Link className="text-blue-400" size={50} />,
    },
  ];

  return (
    <section className="py-20">
      <h2 className="text-center text-3xl text-blue-500 font-bold">
        Key Features
      </h2>
      <div className="grid grid-cols-3 gap-6 py-8">
        {features.map((feature, index) => (
          <Card className="gap-4" key={index}>
            <CardHeader className="flex flex-col justify-center items-center gap-4">
              <CardTitle className="order-2 text-blue-400 text-[18px]">
                {feature.title}
              </CardTitle>
              <div>{feature.icon}</div>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-700">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;

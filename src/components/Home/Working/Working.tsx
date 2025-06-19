import React from "react";

const Working = () => {
  const stepsOfWorking = [
    { title: "Sign Up", description: "Create your free Scheduler account" },
    {
      title: "Set Availability",
      description: "Define when you are available for meetings",
    },
    {
      title: "Share Your Links",
      description: "Send your schedulling link to client or colleagues",
    },
    {
      title: "Get Booked",
      description: "Receive confirmations for new appointments automatically",
    },
  ];

  return (
    <section className="py-20 space-y-10">
      <h2 className="capitalize text-center text-3xl text-blue-500 font-bold">
        How it works?
      </h2>
      <div className="grid grid-cols-4">
        {stepsOfWorking.map((step, index) => (
          <div key={index} className="text-center flex flex-col gap-2">
            <div className="w-12 h-12 mx-auto rounded-full bg-blue-200 flex items-center justify-center">
              <p className="text-blue-600 text-xl">{index + 1}</p>
            </div>
            <h4 className="font-bold text-base">{step.title}</h4>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Working;

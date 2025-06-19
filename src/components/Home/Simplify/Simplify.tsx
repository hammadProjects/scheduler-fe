import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

const Simplify = () => {
  return (
    <section className="pb-10">
      <div className="bg-blue-700 rounded-sm text-white text-center py-8 space-y-2">
        <h6 className="font-bold text-3xl">
          Ready to simplify your scheduling?
        </h6>
        <p>
          Join thousands of professionals who trust Scheduler for efficient time
          management.
        </p>
        <Button
          size={"lg"}
          className="bg-white text-blue-600 hover:bg-blue-100"
        >
          Start for free <ArrowRight />
        </Button>
      </div>
    </section>
  );
};

export default Simplify;

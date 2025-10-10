import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className=" bg-white text-gray-800 py-16 px-4 md:px-8 lg:px-16">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <div className="mb-4 bg-blue-50 p-1 rounded-2xl inline-flex items-center justify-center">
          <span className=" text-white px-3 py-0.5 rounded-full font-medium bg-blue-600">
            New
          </span>
          <span className="ml-2 text-gray-800 px-1 py-0.5">
            We&#39;ve just released this new feature
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Your Restaurant&#39;s
          <span className="text-blue-600"> AI Command Center</span> <br />
          <span className=" text-blue-600 mb-6"> Data In, </span> Insights Out.
        </h1>

        <p className="md:text-lg text-gray-600 font-medium mb-8 max-w-2xl mx-auto">
          Boost sales. Cut expenses. Run smarter. EateryIQ combines AI with
          proven restaurant expertise to optimize marketing, streamline labor
          and HR, and deliver actionable insights — all from one powerful
          platform.
        </p>
        <div className="space-x-4">
          <Button className="bg-blue-600 text-white hover:bg-blue-700">
            Get Started Free
          </Button>
          <Button
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            Book a Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

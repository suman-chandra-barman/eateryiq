import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const FeatureHeroSection = () => {
  return (
    <section className=" bg-white text-gray-800 my-16 md:my-24">
      {/* Content */}
      <div className="relative z-10 max-w-xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-[40px]  md:leading-13 font-bold text-gray-900 mb-4">
          Run Your
          <span className="text-blue-600"> Restaurant With Data, </span> Not
          Guesswork.
        </h1>

        <p className="text-gray-600 italic font-medium mb-8">
          Unite operations, marketing, and executive insights in one powerful
          platform. From multi-location management to sales analytics,
          promotions, and financial forecasting EateryIQ helps you cut costs,
          boost sales, and scale with confidence.
        </p>
        <div className="space-x-4">
          <Button className="bg-blue-600 text-white hover:bg-blue-700">
            <Link target="_blank" href={`${process.env.NEXT_PUBLIC_DASHBOARD_URL}/sign-up`}>Get Started Free</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeatureHeroSection;

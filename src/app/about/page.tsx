import { FaqSection } from "@/components/Home/FAQ";
import { MissionVision } from "@/components/Home/MissionVision";
import React from "react";
import img from "@/assets/about-hero.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function AboutPage() {
  return (
    <div className="container mx-auto px-4">
      <section className="my-12 md:my-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* left side - Content */}
          <div className="space-y-6 max-w-xl">
            <h1 className="text-3xl md:text-4xl lg:text-[40px]  leading-13 font-bold tracking-tight max-w-2xl">
              AI-Powered Insights
              <span className="text-blue-600"> for Every Part of Your </span>
              Restaurant Business.
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              EateryIQ is your always-on restaurant partner. From compliance
              checks to sales insights, it helps operators, managers, and
              franchisees stay ahead with real-time intelligence.
            </p>
            <div>
              <Button className="mr-2">Get Started</Button>
              <Button variant="outline">How it work</Button>
            </div>
          </div>
          {/* right side - Image */}
          <div className="rounded-lg overflow-hidden p-2 bg-blue-50">
            <Image
              src={img}
              alt="Schedule"
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>
      <MissionVision />
      <FaqSection />
    </div>
  );
}

export default AboutPage;

"use client";

import { useEffect, useRef, useState } from "react";
import { Upload, Brain, FileText, Bell, Bot, TrendingUp, UserCogIcon } from "lucide-react";

const steps = [
  {
    title: "Upload Your Data",
    description:
      "Easily upload your restaurant data — including sales, menus, marketing campaigns, labor, and financial metrics. EateryIQ securely ingests your data to start generating real-time insights.",
    icon: Upload,
    side: "right",
  },
  {
    title: "AI Processes & Benchmarks",
    description:
      "Easily upload your restaurant data — including sales, menus, marketing campaigns, labor, and financial metrics. EateryIQ securely ingests your data to start generating real-time insights.",
    icon: Brain,
    side: "left",
  },
  {
    title: "Reports & Graphs",
    description:
      "Access intuitive dashboards and detailed reports and graphs that highlight key metrics, track performance, and provide AI-powered recommendations — all in one place.",
    icon: FileText,
    side: "right",
  },
  {
    title: "Notifications via SMS & Email",
    description:
      "Stay informed in real time. EateryIQ sends critical alerts, performance updates, and recommended actions directly to your inbox or phone, keeping you one step ahead.",
    icon: Bell,
    side: "left",
  },
  {
    title: " Ask EateryGPT for Insights",
    description:
      "Your AI-powered assistant, built on a custom restaurant data model. Ask specific questions about operations, marketing, finance, menu strategy, or customer trends — and get instant, data-driven answers. ",
    icon: Bot,
    side: "right",
  },
  {
    title: "Get Forecasts & Recommendations",
    description:
      "Receive customized forecasts and smart recommendations to optimize menu pricing, staffing, marketing campaigns, and delivery performance for maximum profitability.",
    icon: TrendingUp ,
    side: "left",
  },
  {
    title: "Use Admin Tools for Strategy",
    description:
      "Take your planning further with advanced executive tools: site selection analysis, contract review, HR and operations assessments, and strategic growth roadmaps — all powered by AI insights.",
    icon: UserCogIcon,
    side: "right",
  },
];

export default function HowItWorksPage() {
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRect.height;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
        const scrolled = windowHeight - sectionTop;
        const total = sectionHeight + windowHeight;
        const percentage = Math.min(Math.max((scrolled / total) * 100, 0), 100);
        setProgress(percentage);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="container mx-auto px-4 py-12 md:py-24">
      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-4xl lg:text-[40px] leading-13 font-bold text-gray-900 mb-4">
          How <span className="text-blue-600">EateryIQ</span> Works
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          From operations to marketing to executive strategy, EateryIQ automates
          the details so you can focus on growth.
        </p>
      </div>

      <div className="relative">
        {/* Centered Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2 hidden md:block">
          {/* Animated Progress Line */}
          <div
            className="absolute top-0 left-0 w-full bg-blue-600 transition-all duration-300 ease-out"
            style={{ height: `${progress}%` }}
          />
        </div>

        {/* Steps */}
        <div className="space-y-20 md:space-y-40">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isRight = step.side === "right";

            return (
              <div key={index} className="relative">
                {/* Desktop Layout */}
                <div className="hidden md:grid md:grid-cols-2 md:gap-16 items-center">
                  {/* Left Side Content */}
                  {!isRight && (
                    <div className="text-right pr-8">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed max-w-lg ml-auto">
                        {step.description}
                      </p>
                    </div>
                  )}
                  {isRight && <div />}

                  {/* Right Side Content */}
                  {isRight && (
                    <div className="text-left pl-8">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed max-w-lg mr-auto">
                        {step.description}
                      </p>
                    </div>
                  )}
                  {!isRight && <div />}
                </div>

                {/* Icon Circle on Center Line - Desktop */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white rounded-full items-center justify-center shadow-xl border-4 border-blue-100 z-10">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-blue-100">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

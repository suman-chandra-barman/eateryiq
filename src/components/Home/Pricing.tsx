import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import badge from "@/assets/badge.svg";
import rocket from "@/assets/rocket.svg";
import Image from "next/image";
import arrow from "@/assets/arrow.svg";

export function Pricing() {
  const plans = [
    {
      name: "Free To Try",
      icon: badge,
      price: "$0",
      period: "/30 Days",
      description: "Get started with essential tools at no cost.",
      features: [
        "Access to the dashboard",
        "Pay-as-you-go access to premium tools",
        "Menu analysis, marketing planner, and delivery insights on demand",
        "Limited EateryGPT access",
      ],
      buttonText: "Talk to Sales",
      buttonVariant: "outline" as const,
      popular: false,
    },
    {
      name: "Professional",
      icon: rocket,
      price: "$199",
      period: "/month",
      description:
        "Comprehensive insights and tools for operators who want to manage smarter and grow faster.",
      features: [
        "Monthly business reports & detailed reports",
        "Custom report generation from uploaded data",
        "Tools for Menu, Marketing, Delivery, and Finance management",
        "Industry benchmarking & performance comparison",
        "Unlimited document uploads",
        "Expanded EateryGPT access",
      ],
      buttonText: "Upgrade to Professional",
      buttonVariant: "default" as const,
      popular: true,
    },
    {
      name: "Enterprise",
      icon: badge,
      price: "$1,999",
      period: "/month",
      description:
        "The all-in-one solution for multi-unit operators, franchisees, and owners seeking advanced strategic insights.",
      features: [
        "Maximum EateryGPT access",
        "1:1 live review sessions & custom growth roadmap",
        "Advanced admin tools: site selection, contract review, operations analysis, HR insights",
        "Priority support & dedicated success manager",
        "Unlimited document uploads and data integrations",
      ],
      buttonText: "Talk to Sales",
      buttonVariant: "outline" as const,
      popular: false,
    },
  ];

  return (
    <section className="my-16 md:my-24">
      {/* Header */}
      <div className="text-center mb-12 md:mb-24">
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-blue-600" />
          <span className="text-sm font-medium uppercase tracking-wider text-gray-600">
            PRICING PLAN
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-[40px]  md:leading-13 font-bold max-w-4xl mx-auto">
          Scale Seamlessly with{" "}
          <span className="text-blue-600">
            EATERYIQ Affordable Packages Designed
          </span>{" "}
          to Grow with You
        </h2>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-6 lg:gap-12">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className={`relative flex flex-col bg-blue-50 border-blue-200 ${
              plan.popular ? "scale-105 md:scale-110" : ""
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-0 left-0 right-0 rounded-t-lg overflow-hidden">
                <div className="bg-blue-600 text-white text-sm font-semibold py-2.5 px-4 text-center">
                  Most Popular
                </div>
              </div>
            )}

            <CardHeader className="space-y-4 pt-8">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl flex items-center justify-center p-2 bg-white">
                  <Image
                    src={plan.icon}
                    alt={plan.name}
                    width={45}
                    height={45}
                  />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold">{plan.name}</h3>
                </div>
              </div>
              <p className="text-sm text-gray-600">{plan.description}</p>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl md:text-4xl lg:text-[40px]  md:leading-13 font-bold">
                  {plan.price}
                </span>
                <span className="text-gray-600">{plan.period}</span>
              </div>
            </CardHeader>

            <CardContent className="flex-1">
              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex gap-3">
                    <Image src={arrow} alt="Check" width={24} height={24} />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter>
              <Button
                variant={plan.buttonVariant}
                className={`w-full ${
                  plan.popular ? "bg-blue-600 hover:bg-blue-700" : ""
                }`}
              >
                {plan.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

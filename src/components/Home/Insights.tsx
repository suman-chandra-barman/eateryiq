import { Card, CardContent } from "@/components/ui/card";
import instant from "@/assets/instant.svg";
import contract from "@/assets/contract.svg";
import data from "@/assets/data.svg";
import hr from "@/assets/hr.svg";
import Image from "next/image";

const features = [
  {
    icon: instant,
    title: "Instant, Expert-Level Answers",
    description: "Built-in Prompt AI",
  },
  {
    icon: data,
    title: "Data-Driven Reports & Projections",
    description:
      "Upload your data and let EateryGPT generate detailed reports, trend analysis, and future forecasts.",
  },
  {
    icon: contract,
    title: "Smart Marketing & Sales Optimization",
    description:
      "Automatically build optimized promotional calendars, digital ad schedules, and third-party delivery campaigns.",
  },
  {
    icon: hr,
    title: "Executive-Level Insights",
    description: "Turnover & staffing model recommendations.",
  },
];

const stats = [
  { value: "30%", label: "templates" },
  { value: "2000+", label: "Marketing plans" },
  { value: "30+ Years", label: "Operator Experience Data" },
];

export function Insights() {
  return (
    <section className="w-full my-12 md:my-24 bg-background">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
        {/* Left side - Content */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-[40px]  md:leading-13 font-bold tracking-tight max-w-2xl">
            Executive-Level <span className="text-blue-600"> Insights </span>
            with EateryGPT.
          </h2>

          <p className="text-muted-foreground leading-relaxed">
            Industry database is standby a large custom-trained restaurant data
            model. It&#39;s built to answer questions, generate insights, and
            guide decision-making across Operations, Marketing Campaigns, and
            Administration.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-4">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-1 relative">
                <div className="text-3xl md:text-4xl lg:text-[40px]  md:leading-13 font-bold">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Feature Cards */}
        <div className="space-y-4 bg-blue-50 p-4 md:p-6 rounded-lg">
          {features.map((feature, index) => (
            <Card key={index} className="border-none p-2">
              <CardContent className="flex items-start gap-4 p-2">
                <div className="bg-gray-100 p-2 rounded-lg">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    className="w-14 h-14"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

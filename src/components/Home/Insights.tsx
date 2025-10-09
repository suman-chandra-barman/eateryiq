import { Card, CardContent } from "@/components/ui/card";
import site from "@/assets/site.svg";
import contract from "@/assets/contract.svg";
import operation from "@/assets/operation.svg";
import hr from "@/assets/hr.svg";
import Image from "next/image";

const features = [
  {
    icon: site,
    title: "New Site Selection",
    description: "Location analysis using traffic/demographics data.",
  },
  {
    icon: contract,
    title: "Contract Review",
    description: "AI flagging risks & clauses.",
  },
  {
    icon: operation,
    title: "Operations Review",
    description: "Deep dive on efficiency & compliance.",
  },
  {
    icon: hr,
    title: "HR Analysis",
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
    <section className="w-full py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
              Executive-Level <span className="text-blue-600">Insights</span>
              <br />
              with EateryGPT.
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Industry database is standby a large custom-trained restaurant
              data model. It&#39;s built to answer questions, generate insights,
              and guide decision-making across Operations, Marketing Campaigns,
              and Administration.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-1 relative">
                  <div className="text-3xl md:text-4xl font-bold">
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
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

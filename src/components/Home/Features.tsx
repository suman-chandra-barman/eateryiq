import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import feature1 from "@/assets/feature_1.png";
import feature2 from "@/assets/feature_2.png";
import feature3 from "@/assets/feature_3.png";

export function Features() {
  const features = [
    {
      title: "Instant Insights",
      description:
        "See your restaurant's performance in real time. From sales and delivery trends to labor efficiency, EateryIQ surfaces what matters most — and alerts you instantly when costs rise or opportunities appear.",
      image: feature1,
    },
    {
      title: "AI-Powered Assistant",
      description:
        "Think of it as a digital restaurant strategist. Ask EateryGPT anything — 'Which promo will drive the most sales this weekend?' or 'How do I cut labor costs 5%?' — and get AI-powered answers backed by data and industry expertise.",
      image: feature2,
    },
    {
      title: "Executive Intelligence",
      description:
        "Go beyond daily ops. EateryIQ gives owners and franchisees financial forecasts, contract reviews, and new site selection analysis — the kind of executive-level insights that drive growth and expansion.",
      image: feature3,
    },
  ];

  return (
    <section className="my-16 md:my-24">
      {/* Header */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-balance max-w-xl mx-auto">
          Specially Designed For{" "}
          <span className="text-blue-600">Smarter Restaurant</span> Operations.
        </h2>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="overflow-hidden border-none shadow-none py-0"
          >
            <div className="bg-blue-100 p-1 rounded-2xl">
              <div className="relative aspect-video w-full ">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
            <CardContent className="p-6 space-y-3">
              <h3 className="text-xl md:text-2xl font-bold">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

import FeatureHeroSection from "@/components/Features/FeatureHeroSection";
import { AISportlight } from "@/components/Home/AISportlisht";
import { Features } from "@/components/Home/Features";
import { Insights } from "@/components/Home/Insights";
import { Schedule } from "@/components/Home/Schedule";
import WhyEateryIQ from "@/components/Home/WhyEateryIQ";

const FeaturesPage = () => {
  return (
    <div className="container mx-auto px-4">
      <FeatureHeroSection />
      <WhyEateryIQ />
      <Insights />
      <AISportlight />
      <Schedule />
      <Features />
    </div>
  );
};

export default FeaturesPage;

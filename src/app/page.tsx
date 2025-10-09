import { AISportlight } from "@/components/Home/AISportlisht";
import DashboardSection from "@/components/Home/DashboardSection";
import HeroSection from "@/components/Home/HeroSection";
import { Insights } from "@/components/Home/Insights";
import { Schedule } from "@/components/Home/Schedule";
import SponsorSlider from "@/components/Home/SponsorSlider";
import WhyEateryIQ from "@/components/Home/WhyEateryIQ";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <HeroSection />
      <DashboardSection />
      <SponsorSlider />
      <WhyEateryIQ />
      <Insights />
      <AISportlight />
      <Schedule />
    </div>
  );
}

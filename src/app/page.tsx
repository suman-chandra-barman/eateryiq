import { AISportlight } from "@/components/Home/AISportlisht";
import DashboardSection from "@/components/Home/DashboardSection";
import { Features } from "@/components/Home/Features";
import HeroSection from "@/components/Home/HeroSection";
import { Insights } from "@/components/Home/Insights";
import { MissionVision } from "@/components/Home/MissionVision";
import { Pricing } from "@/components/Home/Pricing";
import { Schedule } from "@/components/Home/Schedule";
import SponsorSlider from "@/components/Home/SponsorSlider";
import { Testimonials } from "@/components/Home/Testimonials";
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
      <Features />
      <Pricing />
      <Testimonials />
      <MissionVision />
    </div>
  );
}

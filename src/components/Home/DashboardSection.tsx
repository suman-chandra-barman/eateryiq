import React from "react";
import dashboardImg from "@/assets/dashboard.png";
import Image from "next/image";
import SponsorSlider from "@/components/Home/SponsorSlider";

const DashboardSection = () => {
  return (
    <section className="relative max-w-7xl mx-auto">
      <Image
        src={dashboardImg}
        alt="Operator Dashboard"
        className="w-full h-auto"
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/100">
        <SponsorSlider />
      </div>
    </section>
  );
};

export default DashboardSection;

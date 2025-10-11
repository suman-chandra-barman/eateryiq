import { FaqSection } from "@/components/Home/FAQ";
import { Pricing } from "@/components/Home/Pricing";
import React from "react";

function PricingPage() {
  return (
    <div className="container mx-auto px-4">
      <Pricing />
      <FaqSection />
    </div>
  );
}

export default PricingPage;

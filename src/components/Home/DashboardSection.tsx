import React from "react";
import dashboardImg from "@/assets/dashboard.png";
import Image from "next/image";

const DashboardSection = () => {
  return (
    <section>
      <div className="relative max-w-7xl mx-auto">
        <Image
          src={dashboardImg}
          alt="Operator Dashboard"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default DashboardSection;

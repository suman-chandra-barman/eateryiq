import Image from "next/image";
import dasboardImage from "@/assets/ChefGPT.png";

export function AISportlight() {
  return (
    <section className="w-full my-12 md:my-24">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
        {/* Left side - Dashboard Image */}
        <div className="order-2 lg:order-1 rounded-lg overflow-hidden p-4 bg-blue-50">
          <Image
            src={dasboardImage}
            alt="Operator Dashboard"
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Right side - Content */}
        <div className="order-1 lg:order-2 space-y-6 max-w-xl">
          <div className="inline-flex items-center gap-2 text-sm font-medium">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            AI Spotlight EateryGPT
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-[40px]  leading-13 max-w-2xl font-bold tracking-tight">
            More Than Chat;{" "}
            <span className="text-blue-600">Your AI Partner</span> in Strategy
          </h1>

          <p className="text-muted-foreground leading-relaxed">
            From inventory tracking and menu optimization to customer behavior
            insights, EateryIQ helps restaurant owners make faster, smarter, and
            more profitable decisions every day.
          </p>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import shedule from "@/assets/shedule.png";

export function Schedule() {
  return (
    <section className="w-full my-12 md:my-24">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
        {/* left side - Content */}
        <div className="space-y-6 max-w-xl">
          <div className="inline-flex items-center gap-2 text-sm font-medium">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            Schedule
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-[40px]  leading-13 font-bold tracking-tight max-w-2xl">
            Smarter Marketing.
            <span className="text-blue-600">Higher Returns.</span>
          </h1>

          <p className="text-muted-foreground leading-relaxed">
            EateryIQ’s AI-powered marketing planner helps you optimize
            promotions, schedule campaigns across digital and delivery
            platforms, and drive more sales with less wasted spend.
          </p>
        </div>
        {/* right side - Image */}
        <div className="rounded-lg overflow-hidden p-4 bg-blue-50">
          <Image
            src={shedule}
            alt="Schedule"
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}

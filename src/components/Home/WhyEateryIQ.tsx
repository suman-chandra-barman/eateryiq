import headphone from "@/assets/headphone.svg";
import marketing from "@/assets/marketing.svg";
import Image from "next/image";

const WhyEateryIQ = () => {
  return (
    <section className="my-12 md:my-24 bg-background">
      {/* Header */}
      <div className="text-center mb-16 md:mb-20">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-blue-600" />
          <span className="font-semibold text-muted-foreground uppercase tracking-wider">
            WHY EATERYIQ
          </span>
        </div>
        <h2 className="max-w-2xl mx-auto text-3xl md:text-4xl lg:text-[40px]  md:leading-13 font-bold">
          {"Designed to "}
          <span className="text-blue-600">Empower Every Role</span>
          {" in Your Restaurant"}
        </h2>
      </div>

      {/* Three Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {/* Operations Column */}
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-blue-100 flex items-center justify-center mb-6">
            <Image
              src={headphone}
              alt="Operations"
              className="w-8 h-8 md:w-12 md:h-12 text-blue-600"
            />
          </div>
          <h3 className="text-2xl font-bold mb-3">Operations</h3>
          <p className="text-muted-foreground italic mb-6 text-balance">
            Smarter shifts, tighter costs, smoother operations.
          </p>
          <div className="space-y-4 text-left w-full">
            <p className="font-semibold text-sm">
              Focus: Increase restaurant ops efficiency
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-foreground">•</span>
                <span>
                  AI-driven labor scheduling to cut costs without hurting
                  service
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-foreground">•</span>
                <span>
                  Compliance alerts for food safety, fridge logs, and shift
                  checklists
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-foreground">•</span>
                <span>
                  Task automation (daily reports, reminders, shift alerts)
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-foreground">•</span>
                <span>
                  Operational insights to reduce waste and streamline processes
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Marketing Column */}
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-blue-100 flex items-center justify-center mb-6">
            <Image
              src={marketing}
              alt="Marketing"
              className="w-8 h-8 md:w-12 md:h-12 text-blue-600"
            />
          </div>
          <h3 className="text-2xl font-bold mb-3">Marketing</h3>
          <p className="text-muted-foreground italic mb-6 text-balance">
            Smarter campaigns, stronger delivery, higher ROI.
          </p>
          <div className="space-y-4 text-left w-full">
            <p className="font-semibold text-sm">
              Focus: Promotions, Delivery, Digital Media
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-foreground">•</span>
                <span>
                  AI-optimized marketing schedules across digital channels
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-foreground">•</span>
                <span>
                  Third-party delivery promo planner (Uber Eats, DoorDash, etc.)
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-foreground">•</span>
                <span>Automated ROI tracking for ads & campaigns</span>
              </li>
              <li className="flex gap-2">
                <span className="text-foreground">•</span>
                <span>Forecasting tools to project sales lift</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Executive Column */}
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-blue-100 flex items-center justify-center mb-6">
            <Image
              src={headphone}
              alt="Operations"
              className="w-8 h-8 md:w-12 md:h-12 text-blue-600"
            />
          </div>
          <h3 className="text-2xl font-bold mb-3">Executive</h3>
          <p className="text-muted-foreground italic mb-6 text-balance">
            Your AI-powered advisor for financial growth and expansion.
          </p>
          <div className="space-y-4 text-left w-full">
            <p className="font-semibold text-sm">
              Focus: Finance, Growth Strategy, and Oversight
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-foreground">•</span>
                <span>AI-generated business analysis</span>
              </li>
              <li className="flex gap-2">
                <span className="text-foreground">•</span>
                <span>Contract and vendor review with risk flagging</span>
              </li>
              <li className="flex gap-2">
                <span className="text-foreground">•</span>
                <span>
                  New site selection insights (traffic, demographics,
                  competition)
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-foreground">•</span>
                <span>
                  Operations review with AI-generated efficiency recommendations
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-foreground">•</span>
                <span>Strategic growth roadmap and benchmarking</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyEateryIQ;

import Image from "next/image";
import banner from "@/assets/team-banner.svg";
import eye from "@/assets/eye.svg";
import target from "@/assets/target.svg";

export function MissionVision() {
  return (
    <section className="relative my-12 md:my-24 overflow-hidden bg-white">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6">
          <div className="w-2 h-2 bg-blue-600 rounded-full" />
          <span className="text-sm font-medium text-gray-700">
            OUR MISSION AND VISION
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-[40px]  md:leading-13 max-w-4xl mx-auto font-bold text-gray-900 mb-4">
          Built by Operators. Powered by AI.{" "}
          <span className="text-blue-600">Designed for Your Growth.</span>{" "}
          Don&apos;t get left behind.
        </h2>
      </div>

      {/* Content Grid */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left: Image */}
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={banner}
              alt="Restaurant team collaborating"
              width={600}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right: Mission & Vision */}
        <div className="space-y-8 lg:space-y-12">
          {/* Our Mission */}
          <div className="relative">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src={target} alt="Mission Icon" width={40} height={40} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To revolutionize how restaurants operate by combining AI with
                over 30 years of real-world operating experience. EateryIQ helps
                restaurants cut costs, boost sales, and make smarter decisions —
                turning everyday challenges into opportunities for growth.
              </p>
            </div>
          </div>

          {/* Our Vision */}
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Image src={eye} alt="Vision Icon" width={40} height={40} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              A future where every restaurant — from single-unit operators to
              global brands — has an AI partner driving growth, efficiency, and
              innovation. With EateryIQ, restaurants don&apos;t just keep up
              with change — they lead it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

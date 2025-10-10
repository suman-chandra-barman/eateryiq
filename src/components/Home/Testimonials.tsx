"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useRef, useState } from "react";
import Image from "next/image";
import user from "@/assets/user.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ShareThoughtModal } from "../Modals/ShareThoughtModal";

const testimonials = [
  {
    role: "Digital Media Manager - QSR",
    quote:
      "EateryIQ has completely changed how I plan campaigns. The AI builds optimized digital ad schedules and delivery promos that consistently boost sales — I finally have marketing insights I can act on, not just data.",
    name: "Roman Bhargav",
    location: "Miami, Florida",
    avatar: user,
  },
  {
    role: "General Manager - Fast Casual Mex Food",
    quote:
      "As a GM, I need to see sales and labor performance in real time. EateryIQ shows me exactly where costs are running high and where I can adjust staffing. It's like having an extra set of eyes on the restaurant 24/7.",
    name: "John Danburry",
    location: "Portland, OR",
    avatar: user,
  },
  {
    role: "Franchisee/Owner - National QSR",
    quote:
      "EateryIQ gives me what I've always needed as an owner: clarity. From financial forecasts to benchmarking and even site selection, it's like having a strategic advisor that helps me grow smarter and faster across all my locations.",
    name: "Daniele Farnedi",
    location: "Saudi Arabia",
    avatar: user,
  },
  {
    role: "Digital Media Manager - QSR",
    quote:
      "EateryIQ has completely changed how I plan campaigns. The AI builds optimized digital ad schedules and delivery promos that consistently boost sales — I finally have marketing insights I can act on, not just data.",
    name: "Roman Bhargav",
    location: "Miami, Florida",
    avatar: user,
  },
  {
    role: "General Manager - Fast Casual Mex Food",
    quote:
      "As a GM, I need to see sales and labor performance in real time. EateryIQ shows me exactly where costs are running high and where I can adjust staffing. It's like having an extra set of eyes on the restaurant 24/7.",
    name: "John Danburry",
    location: "Portland, OR",
    avatar: user,
  },
  {
    role: "Franchisee/Owner - National QSR",
    quote:
      "EateryIQ gives me what I've always needed as an owner: clarity. From financial forecasts to benchmarking and even site selection, it's like having a strategic advisor that helps me grow smarter and faster across all my locations.",
    name: "Daniele Farnedi",
    location: "Saudi Arabia",
    avatar: user,
  },
];

export function Testimonials() {
  const swiperRef = useRef<SwiperType>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative my-12 md:my-24 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 mb-6">
          <div className="w-2 h-2 bg-blue-600 rounded-full" />
          <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
            TESTIMONIALS
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-[40px] leading-13 font-bold text-gray-900 max-w-3xl mx-auto">
          How EateryIQ Transforms{" "}
          <span className="text-blue-600">Restaurants From Operations</span> to
          Ownership
        </h2>
      </div>

      {/* Testimonials Carousel */}
      <div className="relative px-4 md:px-12">
        <Swiper
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="!pb-4"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Card className="bg-blue-50 border-blue-100 p-8 h-[450px] flex flex-col">
                <div className="mb-6">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
                    {testimonial.role}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </div>

                <div className="mt-auto flex items-center gap-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-blue-600 hover:text-blue-600 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <Button
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full"
          onClick={() => setIsModalOpen(true)}
        >
          Share Your Thought
        </Button>
      </div>

      <ShareThoughtModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </section>
  );
}

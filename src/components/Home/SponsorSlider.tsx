"use client";

import React from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import doordash from "@/assets/doordash_logo.svg";
import uber from "@/assets/uber_eats_logo.svg";
import google_ads from "@/assets/Google Ads.svg";
import toaster from "@/assets/Group.svg";
import amazon from "@/assets/amazon.svg";
import reveleer from "@/assets/reveleer.svg";

function SponsorSlider() {
  const sponsors = [
    { src: doordash, alt: "DoorDash" },
    { src: toaster, alt: "Toast" },
    { src: uber, alt: "Uber" },
    { src: google_ads, alt: "Google Ads" },
    { src: amazon, alt: "Amazon" },
    { src: reveleer, alt: "Reveleer" },
    { src: doordash, alt: "DoorDash" },
    { src: toaster, alt: "Toast" },
    { src: uber, alt: "Uber" },
    { src: google_ads, alt: "Google Ads" },
    { src: amazon, alt: "Amazon" },
    { src: reveleer, alt: "Reveleer" },
  ];
  return (
    <section className="my-12">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 4 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 6 },
        }}
        className="w-full"
      >
        {sponsors.map((sponsor, index) => (
          <SwiperSlide key={index}>
            <Image
              src={sponsor.src}
              alt={sponsor.alt}
              className="w-40 h-10 mx-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default SponsorSlider;

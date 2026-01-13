"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useGetAllFaqQuery } from "@/redux/features/faq/faqApi";
import Loader from "../Shared/Loader";

export type TFAQ = {
  id: number;
  question: string;
  answer: string;
  is_active: boolean;
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
};



export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const {data: faqsData, isLoading} = useGetAllFaqQuery(undefined);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="relative my-12 md:my-24">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-2 h-2 bg-blue-600 rounded-full" />
            <span className="text-sm font-medium text-gray-700">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[40px]  md:leading-13  font-bold text-gray-900 mb-4 text-balance">
            How <span className="text-blue-600">EateryIQ</span> Helps{" "}
            <span className="text-blue-600">You Cut Costs, Boost Sales,</span>{" "}
            and Run Smarter.
          </h2>
          <p className="text-gray-600 mt-6 italic leading-relaxed">
            EateryIQ isn&apos;t just software — it&apos;s your AI-powered
            partner for growth. Here you&apos;ll find answers to the most common
            questions about features, pricing, reporting, and how our tools cut
            costs, increase sales, and streamline decisions across every part of
            your restaurant business.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqsData?.data.map((faq: TFAQ, index: number) => (
            <div
              key={index}
              className="relative bg-blue-50 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-blue-100 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-gray-600 transition-transform duration-300 flex-shrink-0",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>

              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openIndex === index ? "max-h-96" : "max-h-0"
                )}
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

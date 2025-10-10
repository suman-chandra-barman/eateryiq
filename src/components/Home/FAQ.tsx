"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Can I Use EateryIQ For Free?",
    answer:
      "Yes! EateryIQ offers a free 30-day trial with à la carte access to tools and reporting functions. During your trial, you can explore menu analysis, marketing planners, delivery insights, financial reporting, and AI-powered EateryGPT prompts — all designed to help you cut costs, boost sales, and make smarter decisions before committing.",
  },
  {
    question: "What's Included In Professional Vs Enterprise?",
    answer:
      "Professional ($199/month): Includes a monthly business analysis & report, custom report generation from uploaded data, and full access to tools for menu, marketing, delivery, and financial management. It also unlocks industry benchmarking and EateryGPT with a set number of searches/prompts each month. Enterprise (starting at $499/month): Everything in Professional plus unlimited EateryGPT access, advanced admin tools like site selection, contract review, and HR/operations analysis, as well as a 1:1 live review and strategic roadmap session with our team. Designed for franchisees and multi-location operators who want deep insights and growth planning.",
  },
  {
    question: "What Integrations Are Supported?",
    answer:
      "EateryIQ integrates with major POS systems, delivery platforms, and restaurant management tools to provide seamless data synchronization and comprehensive insights across your entire operation.",
  },
  {
    question: "How Do Notifications Work?",
    answer:
      "EateryIQ sends real-time alerts and notifications when important metrics change, costs rise, or opportunities appear. You can customize notification preferences to stay informed about what matters most to your business.",
  },
  {
    question: "Can EateryIQ Help With Site Selection Or Contracts?",
    answer:
      "Yes! EateryIQ provides advanced tools for site selection analysis using traffic and demographics data, as well as AI-powered contract review to flag risks and clauses that need attention.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="relative my-12 md:my-24">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-2 h-2 bg-blue-600 rounded-full" />
            <span className="text-sm font-medium text-gray-700">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl  font-bold text-gray-900 mb-4 text-balance">
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
          {faqs.map((faq, index) => (
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

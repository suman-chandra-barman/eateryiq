"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Phone, MapPin, ChevronRight } from "lucide-react";
import pointer from "@/assets/lsicon_pointer.svg";
import Image from "next/image";

export default function ContactUsPage() {
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <div className="container mx-auto py-12 md:py-24 px-4">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-[40px] leading-13 font-bold text-gray-900 mb-4">
          We&#39;d Love <span className="text-blue-600">to Hear</span> from You
        </h2>
        <p className="text-gray-600 max-w-lg mx-auto">
          Whether you&#39;re a single outlet or a growing franchise, let&#39;s
          talk about how ChefGPT can help.
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Column - Contact Form */}
        <div className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Full Name
              </label>
              <Input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                className="w-full bg-blue-50/50 focus:border-blue-500 focus:ring-blue-500 h-13"
                required
              />
            </div>

            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                className="w-full bg-blue-50/50 focus:border-blue-500 focus:ring-blue-500 h-13"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Enter Messages"
                rows={6}
                className="w-full bg-blue-50/50 focus:border-blue-500 focus:ring-blue-500 resize-none h-26"
                required
              />
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-2">
              <Checkbox
                id="terms"
                checked={agreed}
                onCheckedChange={(checked) => setAgreed(checked as boolean)}
                className="mt-1"
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree with{" "}
                <a
                  href="#"
                  className="text-blue-600 underline hover:text-blue-700"
                >
                  terms & conditions
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-semibold rounded-lg"
              //   disabled={!agreed}
            >
              Send Your Message
            </Button>
          </form>

          {/* Contact Info */}
          <div className="pt-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              You can also contact us via
            </h3>
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="mailto:info@eateryiq.com"
                className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <span className="font-medium">info@eateryiq.com</span>
              </a>
              <a
                href="tel:+107924561907"
                className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <span className="font-medium">+1 079 2456 1907</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Benefits */}
        <div>
          <div className="bg-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              With EateryIQ, you can
            </h3>

            <div className="space-y-6">
              {/* Benefit 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Image src={pointer} alt="pointer" className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Optimize Operations
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Track sales, labor, and delivery performance in real-time
                    with AI-driven insights.
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Image src={pointer} alt="pointer" className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Boost Marketing Impact
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Create optimized campaigns, track promotions, and maximize
                    ROI with data-backed recommendations.
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Image src={pointer} alt="pointer" className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Strengthen Executive Strategy
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Forecast revenue, benchmark performance, and use advanced
                    tools for site selection, contract review, and long-term
                    planning.
                  </p>
                </div>
              </div>

              {/* Benefit 4 */}
              <div className="flex gap-4 relative">
                <div className="flex-shrink-0 mt-1">
                  <Image src={pointer} alt="pointer" className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Automate Reports & Alerts
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Generate detailed business reports and get instant
                    notifications via SMS or email, so you never miss a critical
                    update.
                  </p>
                </div>
              </div>
            </div>

            {/* Locations */}
            <div className="grid sm:grid-cols-2 gap-6 mt-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-gray-700" />
                  <h4 className="font-semibold text-gray-900">USA</h4>
                </div>
                <p className="text-gray-600 text-sm">Seattle, WA 98119</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-gray-700" />
                  <h4 className="font-semibold text-gray-900">Canada</h4>
                </div>
                <p className="text-gray-600 text-sm">Seattle, WA 98119</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

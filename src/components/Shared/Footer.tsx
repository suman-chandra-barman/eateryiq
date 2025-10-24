import React from "react";
import logo from "@/assets/logo.svg";
import Image from "next/image";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Link from "next/link";
import doordash from "@/assets/doordash_logo.svg";
import uber from "@/assets/uber_eats_logo.svg";
import google_ads from "@/assets/Google Ads.svg";
import toaster from "@/assets/Group.svg";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#F2F7FF] p-4 sm:px-6 lg:px-8 text-[#535F72]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:justify-items-center gap-8">
        {/* Logo and Description */}
        <div className="mb-6 md:mb-0">
          <Image src={logo} alt="EateryIQ Logo" width={172} />
          <p className="my-4">
            Discover delicious meals crafted with love. Your culinary journey
            starts here.
          </p>
          <div className="mt-4 flex space-x-2 border border-blue-600 p-1.5 rounded-md bg-white">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="border-none focus:ring-0 shadow-none h-9"
            />
            <Button>Subscribe</Button>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-xl font-semibold text-[#3B3B3B] mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className=" hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/features" className=" hover:text-blue-600">
                Features
              </Link>
            </li>
            <li>
              <Link href="/about" className=" hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/how-it-works" className=" hover:text-blue-600">
                How it works
              </Link>
            </li>
            <li>
              <Link href="/pricing" className=" hover:text-blue-600">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/contact" className=" hover:text-blue-600">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal & Policies */}
        <div>
          <h3 className="text-xl font-semibold text-[#3B3B3B] mb-4">
            Legal & Policies
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/privacy-policy" className=" hover:text-blue-600">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms-and-conditions"
                className=" hover:text-blue-600"
              >
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h3 className="text-xl font-semibold text-[#3B3B3B] mb-4">
            Get in Touch
          </h3>
          <div className="mb-2 flex items-center gap-2">
            <MapPin />
            Seattle, WA 98119
          </div>
          <div className="mb-2 flex items-center gap-2">
            <Phone />
            (91) 98765 4321 54
          </div>
          <div className="mb-2 flex items-center gap-2">
            <Mail />
            info@eateryiq.com
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between flex-wrap border-t border-gray-200 pt-4">
        <p className="font-medium text-[#3B3B3B]">SOC2 AES-256 GDPR</p>
        <p>© 2025 EateryIQ. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link href="#" className="hover:opacity-75">
            <Image src={doordash} alt="DoorDash" className="h-5" />
          </Link>
          <Link href="#" className="hover:opacity-75">
            <Image src={google_ads} alt="Google Ads" className="h-5" />
          </Link>
          <Link href="#" className="hover:opacity-75">
            <Image src={toaster} alt="Toaster" className="h-5" />
          </Link>

          <Link href="#" className="hover:opacity-75">
            <Image src={uber} alt="Uber Eats" className="h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

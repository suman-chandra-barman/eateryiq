"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle scroll effect for background change
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Normalize path to handle trailing slashes, query params, and hash
  const normalizePath = (path: string | null) => {
    if (!path) return "/";
    let normalized = path;
    // Remove query and hash
    const qIdx = normalized.indexOf("?");
    if (qIdx !== -1) normalized = normalized.slice(0, qIdx);
    const hIdx = normalized.indexOf("#");
    if (hIdx !== -1) normalized = normalized.slice(0, hIdx);
    // Remove trailing slash except for root
    if (normalized !== "/" && normalized.endsWith("/")) {
      normalized = normalized.slice(0, -1);
    }
    return normalized;
  };

  // Generate link classes with active state
  const linkClass = (href: string, base: string = "font-medium") => {
    const normalizedPath = normalizePath(pathname);
    const normalizedHref = normalizePath(href);
    const isActive =
      normalizedPath === normalizedHref ||
      (normalizedHref !== "/" && normalizedPath.startsWith(normalizedHref));
    return `${base} ${isActive ? "text-blue-600 font-semibold" : ""}`;
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        scrolled ? "bg-[#F2F7FF] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-stone-900">
              <Image src={logo} alt="EateryIQ Logo" className="max-w-[206px]" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            <Link href="/" className={linkClass("/")}>
              Home
            </Link>
            <Link href="/features" className={linkClass("/features")}>
              Features
            </Link>
            <Link href="/how-it-works" className={linkClass("/how-it-works")}>
              How it Works
            </Link>
            <Link href="/pricing" className={linkClass("/pricing")}>
              Pricing
            </Link>
            <Link href="/about" className={linkClass("/about")}>
              About
            </Link>
            <Link href="/contact-us" className={linkClass("/contact-us")}>
              Contact Us
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button size="sm" variant="outline" className="mr-2">
              <Link href="/login">Sign in</Link>
            </Button>
            <Button>
              <Link href="/sign-up">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-stone-700 hover:text-stone-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className={linkClass("/", "block py-2")}
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="/features"
                className={linkClass("/features", "block py-2")}
                onClick={toggleMenu}
              >
                Features
              </Link>
              <Link
                href="/how-it-works"
                className={linkClass("/how-it-works", "block py-2")}
                onClick={toggleMenu}
              >
                How it Works
              </Link>
              <Link
                href="/pricing"
                className={linkClass("/pricing", "block py-2")}
                onClick={toggleMenu}
              >
                Pricing
              </Link>
              <Link
                href="/about"
                className={linkClass("/about", "block py-2")}
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                href="/contact-us"
                className={linkClass("/contact-us", "block py-2")}
                onClick={toggleMenu}
              >
                Contact Us
              </Link>
              {/* CTA Buttons */}
              <div className="flex space-x-2">
                <Button size="sm" variant="outline" onClick={toggleMenu}>
                  Sign in
                </Button>
                <Button onClick={toggleMenu}>Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

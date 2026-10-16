"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import Logo from "@/components/Logo";

export default function TestimonialsNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/", active: false },
    { name: "About", href: "/about", active: false },
    { name: "Treatments", href: "/treatments", active: false },
    { name: "Panchakarma", href: "/panchakarma", active: false },
    { name: "Products", href: "/products", active: false },
    { name: "Contact", href: "/contact", active: false },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#EAE5DA]/70 bg-[#FAF8F3]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[80px] max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left: Brand Logo */}
        <Link href="/" className="transition-opacity hover:opacity-95">
          <Logo variant="dark" />
        </Link>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center space-x-7 lg:space-x-9">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative inline-flex flex-col items-center py-1 transition-colors"
            >
              <span
                className={`text-[15px] sm:text-[15.5px] leading-normal transition-colors ${
                  item.active
                    ? "font-bold text-[#0A291F]"
                    : "font-semibold text-[#4A5950] hover:text-[#0A291F]"
                }`}
              >
                {item.name}
              </span>
              {item.active && (
                <span className="absolute -bottom-2 h-[2px] w-full rounded-full bg-[#4F7363]" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right: CTA Button */}
        <div className="hidden sm:flex items-center">
          <Link
            href="/#book"
            className="group inline-flex items-center gap-2 rounded-md bg-[#0A3527] px-6 py-2.5 text-[15px] font-bold text-white shadow-xs transition-all hover:bg-[#124534]"
          >
            <span>Book Appointment</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden rounded-md p-2 text-[#2F4439] hover:bg-[#EFE9DF]"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#EAE5DA] bg-[#FAF8F3] px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-1.5 text-[13.5px] ${
                item.active
                  ? "font-medium text-[#123E30]"
                  : "font-medium text-[#62645F]"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/#book"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-md bg-[#0A3527] py-2.5 text-[13.5px] font-semibold text-white"
            >
              <span>Book Appointment</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

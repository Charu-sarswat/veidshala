"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomeHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAF7F2]">
      {/* Panoramic Hero Background Image: /home/h1.png */}
      <div className="absolute inset-0 z-0">
        <img
          src="/home/h1.png"
          alt="Vaidhyashala Clinic Reception and Lounge - Your care. Our Ayurvedic approach."
          className="h-full w-full object-cover object-right"
        />
        {/* Soft responsive fade on smaller screens to ensure pristine text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/90 to-transparent sm:via-[#FAF7F2]/40 md:hidden" />
      </div>

      {/* Hero Content Container aligned with Navbar */}
      <div className="relative z-10 mx-auto flex min-h-[440px] sm:min-h-[500px] lg:min-h-[540px] xl:min-h-[580px] max-w-[1400px] flex-col justify-center px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Eyebrow */}
          <span className="text-[12.5px] sm:text-[13px] lg:text-[13.5px] font-bold tracking-[2px] uppercase text-[#A58351]">
            Rooted in Ayurveda. Focused on you.
          </span>

          {/* Main Editorial Heading */}
          <h1 className="mt-2.5 font-serif text-[44px] sm:text-[54px] lg:text-[60px] xl:text-[68px] font-medium leading-[1.06] tracking-[-0.02em] text-[#0F382B]">
            Your care.
            <br />
            Our Ayurvedic
            <br />
            <span className="italic font-medium">approach.</span>
          </h1>

          {/* Subtitle description */}
          <p className="mt-3.5 sm:mt-4 text-[16px] sm:text-[17px] lg:text-[18px] font-medium leading-[1.6] text-[#4A5950] max-w-[520px]">
            Doctor consultations, Panchakarma therapies
            <br className="hidden sm:inline" /> and Ayurvedic medicines, with care tailored to you.
          </p>

          {/* Two Action Buttons */}
          <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/#consultation"
              className="group inline-flex items-center gap-3 rounded-md bg-[#0A3527] px-7 sm:px-8 py-3.5 sm:py-4 text-[15px] sm:text-[16px] font-semibold text-white shadow-xs transition-all hover:bg-[#124534]"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="h-4.5 w-4.5 sm:h-5 sm:w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/treatments"
              className="inline-flex items-center rounded-md border border-[#D0C9BD] bg-[#FAF7F2]/80 backdrop-blur-xs px-7 sm:px-8 py-3.5 sm:py-4 text-[15px] sm:text-[16px] font-semibold text-[#0E382B] transition-all hover:border-[#0E382B] hover:bg-[#F2ECE1]"
            >
              <span>Explore Therapies</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

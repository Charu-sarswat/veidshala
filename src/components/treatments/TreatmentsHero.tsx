"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function TreatmentsHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAF7F2]">
      {/* Panoramic Hero Background Image: /treatment/r1.png */}
      <div className="absolute inset-0 z-0">
        <img
          src="/treatment/r1.png"
          alt="Ayurvedic Treatments Consultation - Care tailored to your needs"
          className="h-full w-full object-cover object-right"
        />
        {/* Soft responsive fade on small mobile screens to guarantee pristine text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/90 to-transparent sm:via-[#FAF7F2]/50 md:hidden" />
      </div>

      {/* Hero Content Container aligned with Navbar */}
      <div className="relative z-10 mx-auto flex min-h-[440px] sm:min-h-[500px] lg:min-h-[540px] xl:min-h-[580px] max-w-[1400px] flex-col justify-center px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Eyebrow */}
          <span className="text-[12px] sm:text-[12.5px] font-bold tracking-[1.8px] uppercase text-[#A58351]">
            AYURVEDIC TREATMENTS
          </span>

          {/* Main Editorial Heading */}
          <h1 className="mt-2.5 font-serif text-[44px] sm:text-[54px] lg:text-[60px] xl:text-[68px] font-medium leading-[1.08] tracking-[-0.018em] text-[#0F382B]">
            Care tailored
            <br />
            <span className="italic font-medium">to your needs.</span>
          </h1>

          {/* Subtitle description */}
          <p className="mt-4 text-[16px] sm:text-[17px] lg:text-[18px] font-medium leading-[1.6] text-[#4A5950] max-w-[500px]">
            Explore consultation-led Ayurvedic care, traditional therapies and
            lifestyle guidance. Your doctor will recommend a plan after
            assessment.
          </p>

          {/* Action Button */}
          <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/#consultation"
              className="group inline-flex items-center gap-2.5 rounded-md bg-[#0A3527] px-7 sm:px-8 py-3.5 text-[15px] font-semibold text-white shadow-xs transition-all hover:bg-[#124534]"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="h-4.5 w-4.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

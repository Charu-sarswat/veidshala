"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PanchakarmaHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAF7F2] border-b border-[#ECE6DB]">
      {/* Panoramic Hero Background Image: /panchakarma/i1.png */}
      <div className="absolute inset-0 z-0">
        <img
          src="/panchakarma/i1.png"
          alt="Traditional therapies. Personalised care. - Panchakarma at Vaidhyashala"
          className="h-full w-full object-cover object-right"
        />
        {/* Soft responsive fade on small mobile screens to guarantee pristine text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/90 to-transparent sm:via-[#FAF7F2]/50 md:hidden" />
      </div>

      {/* Hero Content Container aligned with Navbar */}
      <div className="relative z-10 mx-auto flex min-h-[340px] sm:min-h-[390px] lg:min-h-[430px] max-w-[1400px] flex-col justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-4 sm:mb-5">
          <ol className="flex items-center space-x-2 text-[12.5px] font-normal">
            <li>
              <Link
                href="/home"
                className="text-[#A3733F] transition-colors hover:text-[#0E3528]"
              >
                Home
              </Link>
            </li>
            <li className="text-[#9FA9A2]">/</li>
            <li className="text-[#516157] font-normal" aria-current="page">
              Panchakarma
            </li>
          </ol>
        </nav>

        {/* Headline, Subtitle & CTA Button */}
        <div className="max-w-xl lg:max-w-2xl">
          <h1 className="font-serif text-[42px] sm:text-[50px] lg:text-[58px] xl:text-[64px] font-medium leading-[1.08] tracking-[-0.018em] text-[#0F382B]">
            Traditional therapies.
            <br />
            <span className="italic font-medium">Personalised care.</span>
          </h1>

          <p className="mt-3.5 sm:mt-4 text-[16px] sm:text-[17.5px] lg:text-[18.5px] font-medium leading-[1.5] text-[#4A5950] max-w-[500px]">
            Explore Panchakarma and supporting Ayurvedic therapies, guided by a doctor&apos;s assessment.
          </p>

          <div className="mt-6 sm:mt-7">
            <Link
              href="#consultation"
              className="group inline-flex items-center gap-2.5 rounded-md bg-[#0A3527] px-6 sm:px-7 py-3 sm:py-3.5 text-[14px] font-semibold text-white shadow-xs transition-all hover:bg-[#124534]"
            >
              <span>Discuss Your Therapy Plan</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProductsBanner() {
  return (
    <section className="w-full bg-[#FAF7F2] py-14 sm:py-18 lg:py-20 border-b border-[#ECE6DB]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          {/* Left Column: Description & Action */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-[12.5px] sm:text-[13px] font-bold tracking-[0.18em] uppercase text-[#A38146]">
              Authentic Ayurvedic Products
            </span>

            <h2 className="mt-3 font-serif text-[32px] sm:text-[38px] lg:text-[44px] font-normal leading-[1.15] text-[#0D3226]">
              Ayurveda beyond
              <br />
              your consultation.
            </h2>

            <p className="mt-4 text-[16px] sm:text-[17.5px] font-normal leading-[1.65] text-[#55645B] max-w-md">
              A range of authentic Ayurvedic medicines, therapy oils and
              wellness products to support your health journey.
            </p>

            <div className="mt-8">
              <Link
                href="/#products"
                className="group inline-flex items-center gap-2.5 rounded-md bg-[#0A3527] px-7 py-3.5 text-[14.5px] font-medium text-white shadow-xs transition-all hover:bg-[#124534]"
              >
                <span>Explore Products</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Products Display Photo */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-2xl border border-[#E3DDCF] bg-[#FAF8F3] shadow-sm">
              <img
                src="/a5.png"
                alt="Range of authentic Ayurvedic medicines, therapy oils, and wellness formulations"
                className="w-full h-auto max-h-[460px] object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

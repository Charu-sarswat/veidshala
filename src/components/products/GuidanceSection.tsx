"use client";

import React, { useState } from "react";

export default function GuidanceSection() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="w-full bg-[#FAF8F3] py-5 sm:py-6 border-b border-[#ECE6DB]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Doctor Consultation Image */}
          <div className="lg:col-span-6 flex items-stretch">
            <div className="relative aspect-[16/9] lg:aspect-auto w-full h-full min-h-[220px] overflow-hidden rounded-xl border border-[#E5DFD3] bg-[#FAF8F3] shadow-2xs">
              {!imageError ? (
                <img
                  src="/product/vaidhyashala_product_page_images/14_product_guidance_consultation.webp"
                  alt="Doctor consultation for Ayurvedic medicine"
                  className="h-full w-full object-cover object-[center_30%]"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-full p-6 text-center text-[#7A8A80]">
                  <span className="text-[13px] font-bold tracking-[1.5px] uppercase text-[#A58351]">
                    Ayurvedic Consultation
                  </span>
                  <span className="mt-2 text-[16px] font-semibold text-[#0A3024]">
                    Qualified Ayurvedic Doctors &amp; Practitioners
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Guidance Section with pr1.png Image Badges */}
          <div className="lg:col-span-6 flex flex-col justify-start pt-2 sm:pt-3 lg:pt-4 pb-0">
            <div>
              <h2 className="font-serif text-[32px] sm:text-[38px] lg:text-[42px] font-medium leading-[1.14] text-[#0D3226]">
                Choose with the right
                <br />
                <span className="italic font-medium">guidance.</span>
              </h2>

              <p className="mt-2.5 text-[14.5px] sm:text-[15px] font-medium leading-[1.65] text-[#4A5950] max-w-lg">
                Our team can help with product information,
                <br className="hidden sm:inline" /> availability and appropriate consultation.
              </p>
            </div>

            {/* Feature Badges Image: pr1.png (Tight Gap) */}
            <div className="mt-3 sm:mt-3.5 w-full">
              <img
                src="/product/vaidhyashala_product_page_images/pr1.webp"
                alt="Product information, Pack & availability, Doctor guidance"
                className="w-full h-auto object-contain block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

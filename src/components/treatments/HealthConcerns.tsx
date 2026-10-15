"use client";

import React from "react";

export default function HealthConcerns() {
  return (
    <section className="w-full bg-white pt-2.5 sm:pt-3 pb-2.5 sm:pb-3 border-b border-[#ECE6DB]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-[11.5px] sm:text-[12px] font-bold tracking-[1.5px] uppercase text-[#A58351]">
            Explore by Health Concern
          </span>
          <h2 className="mt-1.5 font-serif text-[32px] sm:text-[38px] lg:text-[42px] font-medium leading-[1.14] text-[#0D3226]">
            Start with your health concern.
          </h2>
          <p className="mt-2 text-[14.5px] sm:text-[15px] font-medium leading-[1.6] text-[#4A5950]">
            Discuss your concerns with our doctor to understand suitable care
            options.
          </p>
        </div>

        {/* Health Concerns Image */}
        <div className="mt-3.5 sm:mt-4 w-full flex justify-center items-center">
          <img
            src="/treatment/t1.webp"
            alt="Explore our approach to common health concerns with Ayurvedic care and lifestyle guidance"
            className="w-full h-auto object-contain max-w-[1360px]"
          />
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { ArrowRight, FileText, Search } from "lucide-react";
import JobModal from "./JobModal";

export default function ShareProfileBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative w-full bg-[#FAF8F3] py-4 sm:py-5 lg:py-6">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 rounded-xl border border-[#E3DDCF] bg-[#FAF7F2] p-4 sm:p-5 lg:p-6 shadow-xs">
            {/* Left: Icon and Copy */}
            <div className="flex items-center gap-4 sm:gap-5">
              {/* Document + Magnifying Glass Icon */}
              <div className="relative shrink-0 flex items-center justify-center h-12 w-12 sm:h-13 sm:w-13 rounded-full bg-[#EAE2D5] text-[#0D3226]">
                <FileText className="h-6 w-6 stroke-[1.8]" />
                <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-white border border-[#DFD7CB] text-[#0D3226] shadow-2xs">
                  <Search className="h-3 w-3 stroke-[2.2]" />
                </div>
              </div>

              <div>
                <h3 className="font-serif text-[19px] sm:text-[21px] font-medium text-[#0D3226]">
                  Don’t See the Right Role?
                </h3>
                <p className="mt-1 text-[13px] sm:text-[13.5px] font-medium leading-[1.55] text-[#4A5950] max-w-2xl">
                  We are always open to connecting with passionate and talented professionals. Share your profile with us and we will get in touch when a suitable opportunity arises.
                </p>
              </div>
            </div>

            {/* Right: CTA Button */}
            <div className="shrink-0 w-full md:w-auto">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="group flex w-full md:w-auto items-center justify-center gap-2 rounded-md bg-[#0A3527] px-5 py-2.5 text-[13.5px] font-semibold text-white shadow-xs transition-colors hover:bg-[#124534] cursor-pointer"
              >
                <span>Share Your Profile</span>
                <ArrowRight className="h-4 w-4 text-[#D8B45D] transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <JobModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        isGeneralProfile={true}
      />
    </>
  );
}

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ConsultationCTA() {
  return (
    <section className="relative overflow-hidden bg-[#E2E8DF] border-t border-[#D3DCD4]">
      {/* Background Banner Image: a7.png */}
      <div className="absolute inset-0 z-0">
        <img
          src="/a7_cropped.png"
          alt="Have a question about your care background"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-11 sm:py-13">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Left Text */}
          <div className="max-w-2xl">
            <h2 className="font-serif text-[29px] sm:text-[34px] lg:text-[38px] font-normal text-[#123E30] leading-[1.15] tracking-[-0.015em]">
              Have a question about your care?
            </h2>
            <p className="mt-2.5 text-[15.5px] sm:text-[16px] text-[#62645F] font-normal leading-relaxed">
              Our team is here to help you choose the right next step.
            </p>
          </div>

          {/* Right Action Button */}
          <div className="flex-shrink-0 sm:mr-10 md:mr-16 lg:mr-24">
            <Link
              href="/#consultation"
              className="group inline-flex items-center gap-2.5 rounded-md bg-[#123E30] px-7 py-3.5 text-[14px] font-semibold text-white shadow-xs transition-all hover:bg-[#1b5341]"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

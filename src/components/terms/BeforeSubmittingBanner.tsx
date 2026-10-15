import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BeforeSubmittingBanner() {
  return (
    <section className="w-full bg-[#FAF8F3] pb-12 sm:pb-16">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Main Banner Image */}
        <div className="w-full">
          <img
            src="/privicy/01_before_submitting_request.webp"
            alt="Before submitting a request - A few things to keep in mind when using our website forms"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* RELATED LINKS Row */}
        <div className="mt-8 flex items-center justify-between border-t border-[#E8E2D4] pt-5">
          <span className="text-[11.5px] font-bold tracking-[1.5px] uppercase text-[#A58351]">
            Related Links
          </span>

          <Link
            href="/privacy"
            className="group inline-flex items-center gap-1.5 text-[13.5px] font-medium text-[#123E30] transition-colors hover:text-[#0D3226]"
          >
            <span>Privacy Policy</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

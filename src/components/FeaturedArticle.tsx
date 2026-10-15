import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredArticle } from "@/data/articles";

export default function FeaturedArticle() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 pt-2.5 sm:pt-3 pb-2.5 sm:pb-3">
      <div className="relative overflow-hidden rounded-2xl border border-[#E3DDCF] bg-[#FAF8F3] shadow-xs transition-shadow duration-300 hover:shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[380px] lg:min-h-[420px]">
          {/* Left Column: Doctor Consultation Image (h2.png) */}
          <div className="relative lg:col-span-6 xl:col-span-6 h-full min-h-[300px] lg:min-h-full overflow-hidden">
            <img
              src="/h2.webp"
              alt="Ayurvedic doctor consultation with patient"
              className="h-full w-full object-cover rounded-t-2xl lg:rounded-tr-none lg:rounded-l-2xl"
            />
          </div>

          {/* Right Column: Article Details with cont.png positioned gracefully in bottom-right */}
          <div className="relative flex flex-col justify-center p-8 sm:p-10 lg:p-12 lg:col-span-6 xl:col-span-6 overflow-hidden bg-[#FAF8F3]">
            {/* Decorative Leaves: cont.png aligned to bottom right matching reference */}
            <img
              src="/cont.webp"
              alt="Decorative leaves illustration"
              className="pointer-events-none absolute -bottom-2 -right-2 w-[280px] sm:w-[340px] lg:w-[400px] max-w-[65%] h-auto object-contain mix-blend-multiply select-none"
            />

            {/* Article Content */}
            <div className="relative z-10">
              {/* Eyebrow */}
              <span className="text-[11.5px] font-bold tracking-[1.4px] uppercase text-[#A58351]">
                Featured Article
              </span>

              {/* Title */}
              <h2 className="mt-3 font-serif text-[29px] sm:text-[36px] lg:text-[40px] font-normal leading-[1.15] tracking-[-0.015em] text-[#123E30]">
                Your first Ayurvedic
                <br className="hidden sm:inline" />{" "}
                consultation: what to prepare
              </h2>

              {/* Excerpt */}
              <p className="mt-4 text-[15px] sm:text-[16px] font-normal leading-[1.6] text-[#62645F] max-w-[560px]">
                {featuredArticle.excerpt}
              </p>

              {/* Read Button */}
              <div className="mt-7">
                <Link
                  href={`/#article-${featuredArticle.id}`}
                  className="group inline-flex items-center gap-2.5 rounded-md bg-[#123E30] px-7 py-3 text-[14px] font-semibold text-white transition-all hover:bg-[#1b5341]"
                >
                  <span>Read Article</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

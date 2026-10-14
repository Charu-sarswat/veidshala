import React from "react";
import Breadcrumb from "./Breadcrumb";

export default function HeroJournal() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAF7F2] border-b border-[#ECE5D9]/70">
      {/* Panoramic Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.png"
          alt="The Vaidhyashala Health Journal - Ayurveda herbs, brass mortar, pestle, and journal"
          className="h-full w-full object-cover object-right"
        />
        {/* Soft responsive fade on small mobile viewports to ensure 100% crisp text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/90 to-transparent sm:via-[#FAF7F2]/40 md:hidden" />
      </div>

      {/* Hero Content Container aligned with Navbar - shifted lower while preserving overall height */}
      <div className="relative z-10 mx-auto flex min-h-[380px] sm:min-h-[420px] lg:min-h-[460px] max-w-[1400px] flex-col justify-start px-4 sm:px-6 lg:px-8 pt-11 sm:pt-14 lg:pt-16 pb-6 sm:pb-8 lg:pb-10">
        {/* Top: Breadcrumb */}
        <div>
          <Breadcrumb />
        </div>

        {/* Headline & Subtitle sitting directly under Breadcrumb with decreased gap */}
        <div className="mt-2.5 sm:mt-3 max-w-xl lg:max-w-2xl">
          <h1 className="font-serif text-[48px] sm:text-[56px] lg:text-[62px] xl:text-[66px] font-normal leading-[1.06] tracking-[-0.018em] text-[#0F382B]">
            The Vaidhyashala
            <br />
            Health Journal
            <span className="text-[#BA8842]">.</span>
          </h1>
          <p className="mt-4 sm:mt-5 text-[22px] sm:text-[25px] lg:text-[28px] font-normal leading-[1.4] text-[#526359] max-w-[580px] lg:max-w-[640px]">
            Explore Ayurveda, therapies and
            <br className="hidden sm:inline" />{" "}
            thoughtful everyday routines.
          </p>
        </div>
      </div>
    </section>
  );
}

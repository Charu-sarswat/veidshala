import React from "react";

export default function VideoStories() {
  return (
    <section className="relative overflow-hidden w-full bg-[#FAF8F3] border-b border-[#ECE6DB]">
      <div className="relative w-full">
        <img
          src="/testimonial/te2.png"
          alt="Patient stories, in their own words - A space for consented patient video feedback"
          className="w-full h-auto block"
        />
        {/* Positioned text in the reserved left-center space */}
        <div className="absolute inset-y-0 left-[7%] sm:left-[8%] md:left-[9%] lg:left-[10%] w-[32%] sm:w-[28%] md:w-[26%] flex flex-col justify-center pointer-events-none select-none">
          <h2 className="font-serif text-[14px] sm:text-[24px] md:text-[32px] lg:text-[40px] xl:text-[46px] font-bold leading-[1.12] text-[#0A291F]">
            Patient stories,
            <br />
            in their own words.
          </h2>
          <p className="mt-1 sm:mt-2.5 md:mt-3.5 text-[9.5px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-semibold leading-[1.4] sm:leading-[1.5] text-[#33463C]">
            A space for consented patient
            <br className="hidden sm:inline" /> video feedback.
          </p>
        </div>
      </div>
    </section>
  );
}



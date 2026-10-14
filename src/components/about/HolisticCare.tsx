import React from "react";

export default function HolisticCare() {
  return (
    <section className="w-full bg-[#FAF8F3] pt-2.5 sm:pt-3 pb-2.5 sm:pb-3 border-b border-[#ECE6DB]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-14 items-center">
          {/* Left Column: Eyebrow + Heading + 2 Paragraphs stacked tightly together */}
          <div className="lg:col-span-6 xl:col-span-6">
            <span className="text-[11.5px] sm:text-[12px] font-bold tracking-[1.5px] uppercase text-[#A58351]">
              About Vaidhyashala
            </span>
            <h2 className="mt-1.5 font-serif text-[32px] sm:text-[38px] lg:text-[42px] font-medium leading-[1.14] text-[#0D3226]">
              Holistic care for a healthier, more
              <br className="hidden sm:inline" />{" "}
              balanced life.
            </h2>
            <div className="mt-3.5 space-y-3 text-[14.5px] sm:text-[15px] font-medium leading-[1.65] text-[#4A5950]">
              <p>
                Vaidhyashala is an Ayurvedic clinic and Panchakarma centre dedicated to
                thoughtful, personalised care. We combine classical Ayurvedic wisdom with
                individualised consultations, Panchakarma therapies, yoga and lifestyle guidance
                to support your unique health journey.
              </p>
              <p>
                Our approach focuses on understanding your concerns, identifying the root causes
                and creating a care plan that is practical, sustainable and aligned with your
                lifestyle.
              </p>
            </div>
          </div>

          {/* Right Column: i7.png Image as requested */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-center items-center">
            <img
              src="/about/i7.png"
              alt="Listen with care, Plan for the individual, Guide at every step"
              className="w-full h-auto max-h-[320px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

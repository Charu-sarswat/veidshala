import React from "react";

export default function ClinicAtmosphere() {
  return (
    <section className="w-full bg-[#FAF8F3] py-14 sm:py-18 lg:py-20 border-b border-[#ECE6DB]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Heading & Text */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <span className="text-[12.5px] sm:text-[13px] font-bold tracking-[0.18em] uppercase text-[#A38146]">
              A Calm Space for Thoughtful Care
            </span>

            <h2 className="mt-2.5 font-serif text-[30px] sm:text-[36px] lg:text-[40px] font-normal leading-[1.15] text-[#0D3226]">
              Our clinic atmosphere.
            </h2>

            <p className="mt-3 text-[15px] sm:text-[16px] font-normal leading-[1.6] text-[#55645B] max-w-sm">
              A warm, peaceful and welcoming environment designed to support
              your healing journey.
            </p>
          </div>

          {/* Right Column: 3 Clinic Atmosphere Images in a Row */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
              <div className="overflow-hidden rounded-xl border border-[#E3DDCF] bg-[#FAF8F3] aspect-[4/3] shadow-2xs">
                <img
                  src="/lp.png"
                  alt="Vaidhyashala Clinic Reception"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-xl border border-[#E3DDCF] bg-[#FAF8F3] aspect-[4/3] shadow-2xs">
                <img
                  src="/a6.png"
                  alt="Vaidhyashala Panchakarma Therapy Suite"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-xl border border-[#E3DDCF] bg-[#FAF8F3] aspect-[4/3] shadow-2xs">
                <img
                  src="/h2.png"
                  alt="Vaidhyashala Consultation Lounge"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

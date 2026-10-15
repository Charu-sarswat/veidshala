import React from "react";

export default function ClinicAtmosphere() {
  return (
    <section className="w-full bg-[#FAF8F3] pt-2.5 sm:pt-3 pb-6 sm:pb-8 lg:pb-9 border-b border-[#ECE6DB]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Heading & Text */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <span className="text-[11.5px] sm:text-[12px] font-bold tracking-[1.5px] uppercase text-[#A58351]">
              A Calm Space for Thoughtful Care
            </span>

            <h2 className="mt-1.5 font-serif text-[30px] sm:text-[36px] lg:text-[40px] font-medium leading-[1.14] text-[#0D3226]">
              Our clinic atmosphere.
            </h2>

            <p className="mt-2 text-[14.5px] sm:text-[15px] font-medium leading-[1.6] text-[#4A5950] max-w-sm">
              A warm, peaceful and welcoming environment designed
              <br className="hidden sm:inline" /> to support your healing journey.
            </p>
          </div>

          {/* Right Column: 3 Clinic Atmosphere Images in a Row */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
              <div className="overflow-hidden rounded-xl border border-[#E3DDCF] bg-[#FAF8F3] aspect-[4/3] shadow-2xs">
                <img
                  src="/about/i8.webp"
                  alt="Vaidhyashala Clinic Reception and Lounge"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-xl border border-[#E3DDCF] bg-[#FAF8F3] aspect-[4/3] shadow-2xs">
                <img
                  src="/about/i5.webp"
                  alt="Vaidhyashala Panchakarma Therapy Suite"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-xl border border-[#E3DDCF] bg-[#FAF8F3] aspect-[4/3] shadow-2xs">
                <img
                  src="/about/i6.webp"
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

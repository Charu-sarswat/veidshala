import React from "react";

export default function DedicatedTeam() {
  return (
    <section className="w-full bg-[#FAF7F2] py-14 sm:py-18 lg:py-20 border-b border-[#ECE6DB]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          {/* Left Column: Heading and Text */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-[12.5px] sm:text-[13px] font-bold tracking-[0.18em] uppercase text-[#A38146]">
              The People Behind Your Care
            </span>

            <h2 className="mt-3 font-serif text-[32px] sm:text-[38px] lg:text-[42px] font-normal leading-[1.15] text-[#0D3226]">
              A dedicated team,
              <br />
              by your side.
            </h2>

            <p className="mt-4 text-[15.5px] sm:text-[16px] font-normal leading-[1.65] text-[#55645B] max-w-lg">
              Our team of Ayurvedic doctors, Panchakarma therapists and yoga &
              care professionals work together to provide integrated and
              compassionate care. We take time to understand your needs and
              support you at every step of your health journey.
            </p>
          </div>

          {/* Right Column: Clinical Team Photo */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-2xl border border-[#E3DDCF] bg-[#FAF8F3] shadow-sm">
              <img
                src="/lp.png"
                alt="The Vaidhyashala Clinical Team of Ayurvedic Doctors and Practitioners"
                className="w-full h-auto max-h-[480px] object-cover object-center"
              />
            </div>
            <div className="mt-1.5 text-right text-[11px] italic text-[#8C988F]">
              Illustrative Imagery
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

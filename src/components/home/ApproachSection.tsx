import React from "react";

export default function ApproachSection() {
  const steps = [
    {
      number: "01",
      title: "Consultation & assessment",
      description: "Discuss your health concerns and lifestyle.",
    },
    {
      number: "02",
      title: "Individual care plan",
      description: "A personalised treatment plan suited to you.",
    },
    {
      number: "03",
      title: "Follow-up & guidance",
      description: "Ongoing support to track your progress.",
    },
  ];

  return (
    <section className="w-full bg-[#FAF7F2] py-14 sm:py-18 lg:py-20 border-b border-[#ECE6DB]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          {/* Left Column: Shirodhara photo */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-2xl border border-[#E3DDCF] bg-[#FAF8F3] shadow-sm">
              <img
                src="/a1.png"
                alt="Traditional Ayurvedic Shirodhara Therapy and Treatment"
                className="w-full h-auto max-h-[520px] object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Steps & Philosophy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Eyebrow */}
            <span className="text-[12.5px] sm:text-[13px] font-bold tracking-[0.18em] uppercase text-[#A38146]">
              Our Approach
            </span>

            {/* Heading */}
            <h2 className="mt-3 font-serif text-[32px] sm:text-[40px] lg:text-[44px] font-normal leading-[1.15] text-[#0D3226]">
              Traditional therapies.
              <br />
              <span className="italic font-normal">Personal attention.</span>
            </h2>

            {/* Description */}
            <p className="mt-4 text-[16px] sm:text-[17px] font-normal leading-[1.65] text-[#55645B] max-w-xl">
              We combine classical Ayurvedic wisdom with individualised care,
              supported by experienced doctors, therapies and ongoing guidance.
            </p>

            {/* 3 Step Cards */}
            <div className="mt-7 space-y-3 sm:space-y-3.5">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="flex items-start sm:items-center gap-4 rounded-xl border border-[#E6E0D3] bg-[#FAF8F3] px-4 py-3 sm:px-5 sm:py-3.5 transition-all hover:border-[#CFC4B3]"
                >
                  {/* Number Badge */}
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#EAE2D4] text-[12px] font-bold text-[#0D3226]">
                    {step.number}
                  </div>

                  {/* Text Details */}
                  <div>
                    <h3 className="text-[14.5px] sm:text-[15.5px] font-medium text-[#0D3226] leading-tight">
                      {step.title}
                    </h3>
                    <p className="mt-0.5 text-[13px] sm:text-[13.5px] font-normal text-[#5A6860] leading-normal">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

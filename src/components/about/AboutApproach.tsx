import React from "react";

export default function AboutApproach() {
  const steps = [
    {
      number: "01",
      title: "Consultation & assessment",
      description:
        "A detailed discussion of your health concerns, lifestyle and medical history.",
    },
    {
      number: "02",
      title: "Personalised care planning",
      description:
        "A treatment plan tailored to your individual condition, constitution and lifestyle.",
    },
    {
      number: "03",
      title: "Follow-up & guidance",
      description:
        "Ongoing support to track your progress and make adjustments as needed.",
    },
  ];

  return (
    <section className="w-full bg-[#FAF7F2] py-14 sm:py-18 lg:py-20 border-b border-[#ECE6DB]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          {/* Left Column: Doctor consultation image */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-2xl border border-[#E3DDCF] bg-[#FAF8F3] shadow-sm">
              <img
                src="/h2.png"
                alt="Ayurvedic doctor in consultation with patient"
                className="w-full h-auto max-h-[500px] object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Approach steps */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-[12.5px] sm:text-[13px] font-bold tracking-[0.18em] uppercase text-[#A38146]">
              Our Approach
            </span>

            <h2 className="mt-3 font-serif text-[32px] sm:text-[38px] lg:text-[42px] font-normal leading-[1.15] text-[#0D3226]">
              Our approach to
              <br />
              your well-being.
            </h2>

            <p className="mt-4 text-[15.5px] sm:text-[16.5px] font-normal leading-[1.65] text-[#55645B] max-w-xl">
              We combine consultation, Panchakarma therapies, yoga and lifestyle
              guidance to support your overall well-being in a way that is
              personalised, practical and sustainable.
            </p>

            <div className="mt-8 space-y-4 sm:space-y-4.5">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="flex items-start gap-4 rounded-xl border border-[#E5DFD4] bg-[#FAF8F3] p-4 sm:p-4.5 transition-all hover:border-[#CFC4B3]"
                >
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#EFE9DF] text-[13px] font-bold text-[#0D3226]">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-[15.5px] sm:text-[16px] font-medium text-[#0D3226] leading-tight">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-[13.5px] sm:text-[14px] font-normal text-[#5A6860] leading-normal">
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

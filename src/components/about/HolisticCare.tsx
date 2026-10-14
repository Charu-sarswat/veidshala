import React from "react";
import { Flower2, Sprout, Heart } from "lucide-react";

export default function HolisticCare() {
  const pillars = [
    {
      icon: Flower2,
      title: "Listen with care",
      description:
        "We take time to understand your health concerns, lifestyle and personal goals.",
    },
    {
      icon: Sprout,
      title: "Plan for the individual",
      description:
        "We create personalised treatment plans that suit your unique needs.",
    },
    {
      icon: Heart,
      title: "Guide at every step",
      description:
        "We provide ongoing support and guidance to help you stay on track.",
    },
  ];

  return (
    <section className="w-full bg-[#FAF8F3] py-14 sm:py-18 lg:py-20 border-b border-[#ECE6DB]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Eyebrow & Main Section Heading */}
        <div className="max-w-3xl">
          <span className="text-[12.5px] sm:text-[13px] font-bold tracking-[0.18em] uppercase text-[#A38146]">
            About Vaidhyashala
          </span>
          <h2 className="mt-2.5 font-serif text-[32px] sm:text-[38px] lg:text-[42px] font-normal leading-[1.15] text-[#0D3226]">
            Holistic care for a healthier, more
            <br />
            balanced life.
          </h2>
        </div>

        {/* 2-Column Split: Story on Left, 3 Value Pillars on Right */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14 items-start">
          {/* Left: About Text */}
          <div className="lg:col-span-6 space-y-4 text-[15px] sm:text-[16px] font-normal leading-[1.7] text-[#55645B]">
            <p>
              Vaidhyashala is an Ayurvedic clinic and Panchakarma centre
              dedicated to thoughtful, personalised care. We combine classical
              Ayurvedic wisdom with individualised consultations, Panchakarma
              therapies, yoga and lifestyle guidance to support your unique
              health journey.
            </p>
            <p>
              Our approach focuses on understanding your concerns, identifying
              the root causes and creating a care plan that is practical,
              sustainable and aligned with your lifestyle.
            </p>
          </div>

          {/* Right: 3 Value Pillars in Connected Panel */}
          <div className="lg:col-span-6 rounded-xl border border-[#E3DDCF] bg-[#FAF8F3] p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#E3DDCF]">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className={`flex flex-col items-start ${
                    idx === 0
                      ? "sm:pr-4 lg:pr-5 pb-5 sm:pb-0"
                      : idx === 1
                      ? "sm:px-4 lg:px-5 py-5 sm:py-0"
                      : "sm:pl-4 lg:pl-5 pt-5 sm:pt-0"
                  }`}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EFEAE0] text-[#0D3226] mb-3">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-[14.5px] sm:text-[15px] font-medium text-[#0D3226] leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-[12.5px] sm:text-[13px] font-normal leading-[1.6] text-[#5A6860]">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SupportingTherapies() {
  const therapies = [
    {
      title: "Abhyanga",
      description: "Ayurvedic oil massage.",
      imageSrc: "/panchakarma/01_Abhyanga_Oil_Massage.png",
      fallbackSrc: "/a6.png",
      alt: "Abhyanga - Ayurvedic whole body oil massage",
    },
    {
      title: "Shirodhara",
      description: "Steady flow of liquid over the forehead.",
      imageSrc: "/panchakarma/02_Shirodhara.png",
      fallbackSrc: "/a1.png",
      alt: "Shirodhara - Steady flow of herbal oil over forehead",
    },
    {
      title: "Swedana",
      description: "Guided fomentation therapy.",
      imageSrc: "/panchakarma/03_Swedana_Steam_Therapy.png",
      fallbackSrc: "/about/i5.png",
      alt: "Swedana - Herbal steam box fomentation therapy",
    },
    {
      title: "Pizhichil",
      description: "Warm oil application with massage.",
      imageSrc: "/panchakarma/04_Pizhichil_Warm_Oil_Therapy.png",
      fallbackSrc: "/about/i8.png",
      alt: "Pizhichil - Medicated oil bath and synchronized massage",
    },
    {
      title: "Udvartana",
      description: "Herbal powder massage.",
      imageSrc: "/panchakarma/05_Udvartana_Herbal_Powder_Massage.png",
      fallbackSrc: "/about/i3.png",
      alt: "Udvartana - Herbal powder lymphatic scrub massage",
    },
    {
      title: "Patra Pinda Sweda",
      description: "Herbal leaf bolus fomentation.",
      imageSrc: "/panchakarma/06_Patra_Pinda_Sweda.png",
      fallbackSrc: "/about/i6.png",
      alt: "Patra Pinda Sweda - Medicinal leaf bolus massage",
    },
    {
      title: "Shashtika Shali Pinda Sweda",
      description: "Prepared rice bolus fomentation.",
      imageSrc: "/panchakarma/07_Shashtika_Shali_Pinda_Sweda.png",
      fallbackSrc: "/treatment/t3.png",
      alt: "Shashtika Shali Pinda Sweda - Cooked medicinal rice bolus massage",
    },
    {
      title: "Kati Basti",
      description: "Localised oil application around lower back.",
      imageSrc: "/panchakarma/08_Kati_Basti.png",
      fallbackSrc: "/about/i7.png",
      alt: "Kati Basti - Herbal oil reservoir for lower back support",
    },
    {
      title: "Shiro Abhyanga",
      description: "Ayurvedic head massage.",
      imageSrc: "/panchakarma/09_Shiro_Abhyanga_Head_Massage.png",
      fallbackSrc: "/a1.png",
      alt: "Shiro Abhyanga - Therapeutic Ayurvedic head and scalp massage",
    },
  ];

  return (
    <section className="w-full bg-[#FAF8F3] pt-2.5 sm:pt-3 pb-4 sm:pb-5 border-b border-[#ECE6DB]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Section Header with decorative horizontal accents */}
        <div className="max-w-4xl lg:max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 sm:gap-5 lg:gap-6">
            <span className="hidden md:block h-[1px] w-8 lg:w-16 bg-[#D8CFBF]" />
            <h2 className="font-serif text-[28px] sm:text-[34px] md:text-[38px] lg:text-[40px] font-medium leading-[1.14] text-[#0D3226] whitespace-normal sm:whitespace-nowrap">
              Explore supporting Ayurvedic therapies
            </h2>
            <span className="hidden md:block h-[1px] w-8 lg:w-16 bg-[#D8CFBF]" />
          </div>

          <p className="mt-2 text-[14.5px] sm:text-[15px] font-medium leading-[1.6] text-[#4A5950] max-w-3xl mx-auto">
            A range of traditional therapies that may be suggested as part of your individual care plan, based on the doctor&apos;s assessment.
          </p>
        </div>

        {/* 3x3 Therapy Cards Grid */}
        <div className="mt-5 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {therapies.map((therapy) => (
            <div
              key={therapy.title}
              className="group flex flex-col transition-all duration-200"
            >
              {/* Therapy Photo */}
              <div className="overflow-hidden rounded-xl aspect-[16/10] bg-[#EAE4D8] border border-[#ECE5D9]">
                <img
                  src={therapy.imageSrc}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = therapy.fallbackSrc;
                  }}
                  alt={therapy.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-104"
                />
              </div>

              {/* Title */}
              <h3 className="mt-3 font-serif text-[18px] sm:text-[19px] font-medium leading-tight text-[#0D3226]">
                {therapy.title}
              </h3>

              {/* Description */}
              <p className="mt-1 text-[13px] sm:text-[13.5px] font-medium leading-[1.5] text-[#5A6860]">
                {therapy.description}
              </p>

              {/* Action Link */}
              <div className="mt-2.5">
                <Link
                  href="#consultation"
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#0D3226] transition-colors hover:text-[#185340]"
                >
                  <span>Ask about suitability</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="mt-5 sm:mt-6 text-center text-[12px] sm:text-[12.5px] font-medium text-[#718277]">
          Therapy selection and availability are confirmed during consultation.
        </p>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AyurvedicConsultationModal from "@/components/consultation/AyurvedicConsultationModal";

interface Pillar {
  number: string;
  title: React.ReactNode;
  description: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

export default function CarePillars() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const pillars: Pillar[] = [
    {
      number: "01 /",
      title: (
        <>
          Ayurvedic
          <br />
          Consultation
        </>
      ),
      description: (
        <>
          A detailed discussion of your
          <br className="hidden sm:inline" /> health concerns, lifestyle and
          <br className="hidden sm:inline" /> medical history to understand
          <br className="hidden sm:inline" /> your individual needs.
        </>
      ),
      imageSrc: "/a2.webp",
      imageAlt: "Ayurvedic doctor consulting patient in clinic",
      href: "/#consultation",
    },
    {
      number: "02 /",
      title: (
        <>
          Panchakarma
          <br />
          Therapies
        </>
      ),
      description: (
        <>
          Personalised Panchakarma
          <br className="hidden sm:inline" /> therapies planned as per your
          <br className="hidden sm:inline" /> health condition and
          <br className="hidden sm:inline" /> suitability.
        </>
      ),
      imageSrc: "/a1.webp",
      imageAlt: "Traditional Panchakarma Shirodhara therapy",
      href: "/panchakarma",
    },
    {
      number: "03 /",
      title: (
        <>
          Yoga &
          <br />
          Lifestyle Care
        </>
      ),
      description: (
        <>
          Guidance with yoga,
          <br className="hidden sm:inline" /> meditation and daily routines
          <br className="hidden sm:inline" /> to support long-term
          <br className="hidden sm:inline" /> well-being.
        </>
      ),
      imageSrc: "/a3.webp",
      imageAlt: "Calm yoga and meditation guidance",
      href: "/#yoga",
    },
    {
      number: "04 /",
      title: (
        <>
          Medicines &
          <br />
          Products
        </>
      ),
      description: (
        <>
          Authentic Ayurvedic
          <br className="hidden sm:inline" /> formulations and wellness
          <br className="hidden sm:inline" /> products to support your
          <br className="hidden sm:inline" /> treatment and daily health.
        </>
      ),
      imageSrc: "/a5.webp",
      imageAlt: "Authentic Ayurvedic herbal formulations and oils",
      href: "/products",
    },
  ];

  return (
    <section className="w-full bg-[#FAF8F3] pt-2.5 sm:pt-3 pb-4 sm:pb-5 border-b border-[#ECE6DB]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl lg:max-w-5xl">
          <span className="text-[11.5px] sm:text-[12px] font-bold tracking-[1.5px] uppercase text-[#A58351]">
            Care at Vaidhyashala
          </span>
          <h2 className="mt-1.5 font-serif text-[30px] sm:text-[34px] md:text-[38px] lg:text-[40px] xl:text-[42px] font-medium leading-[1.14] text-[#0D3226] whitespace-normal sm:whitespace-nowrap">
            Care that begins with understanding you.
          </h2>
          <p className="mt-2 text-[14.5px] sm:text-[15px] font-medium leading-[1.6] text-[#4A5950] max-w-4xl">
            A thoughtful combination of consultation, therapies, lifestyle guidance and authentic Ayurvedic products,
            <br className="hidden sm:inline" /> designed to support your unique health journey.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-5 sm:mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="group flex flex-col justify-between transition-all duration-200"
            >
              <div>
                {/* Image */}
                <div
                  className={`overflow-hidden rounded-xl aspect-[16/11] bg-[#EAE4D8] ${
                    pillar.number === "01 /" ? "cursor-pointer" : ""
                  }`}
                  onClick={() => {
                    if (pillar.number === "01 /") setIsConsultationModalOpen(true);
                  }}
                >
                  <img
                    src={pillar.imageSrc}
                    alt={pillar.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Number Eyebrow */}
                <div className="mt-3 text-[12px] font-bold tracking-wider text-[#A58351]">
                  {pillar.number}
                </div>

                {/* Title */}
                <h3
                  className={`mt-1 font-serif text-[17.5px] sm:text-[18px] font-medium leading-[1.25] text-[#0D3226] group-hover:text-[#185340] transition-colors ${
                    pillar.number === "01 /" ? "cursor-pointer" : ""
                  }`}
                  onClick={() => {
                    if (pillar.number === "01 /") setIsConsultationModalOpen(true);
                  }}
                >
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="mt-1.5 text-[13px] sm:text-[13.5px] font-medium leading-[1.55] text-[#4A5950]">
                  {pillar.description}
                </p>
              </div>

              {/* Link CTA */}
              <div className="mt-3.5 pt-0.5">
                {pillar.number === "01 /" ? (
                  <button
                    type="button"
                    onClick={() => setIsConsultationModalOpen(true)}
                    className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#0D3226] transition-colors hover:text-[#195642] cursor-pointer"
                  >
                    <span className="border-b-[1.5px] border-[#A58351] pb-0.5">Learn more</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                ) : (
                  <Link
                    href={pillar.href}
                    className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#0D3226] transition-colors hover:text-[#195642]"
                  >
                    <span className="border-b-[1.5px] border-[#A58351] pb-0.5">Learn more</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ayurvedic Consultation Popup Modal */}
      <AyurvedicConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        onRequestAppointment={() => {
          setIsConsultationModalOpen(false);
          const element = document.getElementById("appointment");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }}
        onBackToWebsite={() => setIsConsultationModalOpen(false)}
      />
    </section>
  );
}

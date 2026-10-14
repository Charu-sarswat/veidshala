"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ExploreCareServices() {
  const services = [
    {
      number: "01 /",
      title: (
        <>
          Ayurvedic
          <br />
          Consultation
        </>
      ),
      description:
        "A detailed discussion of your health concerns, lifestyle and medical history to understand your individual needs.",
      imageSrc: "/about/i3.png",
      imageAlt: "Ayurvedic Doctor Consultation",
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
      description:
        "Personalised Panchakarma therapies planned as per your health condition and suitability.",
      imageSrc: "/a1.png",
      imageAlt: "Panchakarma Shirodhara Therapy",
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
      description:
        "Guidance with yoga, meditation and daily routines to support long-term well-being.",
      imageSrc: "/a3.png",
      imageAlt: "Yoga and Meditation Practice",
      href: "/#yoga",
    },
    {
      number: "04 /",
      title: (
        <>
          Ayurvedic
          <br />
          Medicines
        </>
      ),
      description:
        "Authentic Ayurvedic formulations and wellness products to support your treatment and daily health.",
      imageSrc: "/a5.png",
      imageAlt: "Authentic Ayurvedic Medicines and Products",
      href: "/#products",
    },
  ];

  return (
    <section className="w-full bg-[#FAF8F3] pt-2.5 sm:pt-3 pb-2.5 sm:pb-3 border-b border-[#ECE6DB]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-[11.5px] sm:text-[12px] font-bold tracking-[1.5px] uppercase text-[#A58351]">
            OUR TREATMENTS
          </span>
          <h2 className="mt-1.5 font-serif text-[32px] sm:text-[38px] lg:text-[42px] font-medium leading-[1.14] text-[#0D3226]">
            Explore our care services.
          </h2>
          <p className="mt-2 text-[14.5px] sm:text-[15px] font-medium leading-[1.6] text-[#4A5950] max-w-[860px]">
            A combination of consultation, traditional therapies, lifestyle
            guidance and authentic Ayurvedic products, designed to support your
            unique health journey.
          </p>
        </div>

        {/* 2x2 Horizontal Cards Grid */}
        <div className="mt-4 sm:mt-4.5 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group flex flex-col sm:flex-row overflow-hidden rounded-xl border border-[#DFD8CC] bg-[#FAF8F3] transition-all duration-200 hover:border-[#0D3226] hover:shadow-xs"
            >
              {/* Card Image: 42% proportion matching reference image */}
              <div className="w-full sm:w-[42%] md:w-[44%] lg:w-[42%] shrink-0 bg-[#EAE4D8] overflow-hidden relative min-h-[200px] sm:min-h-[230px] lg:min-h-[240px]">
                <img
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card Content: 58% proportion */}
              <div className="flex flex-1 flex-col justify-between p-5 sm:p-6 lg:p-6">
                <div>
                  <span className="text-[12px] sm:text-[13px] font-bold tracking-wider text-[#A58351]">
                    {service.number}
                  </span>
                  <h3 className="mt-1 font-serif text-[18px] sm:text-[19px] lg:text-[20px] font-medium leading-[1.25] text-[#0D3226]">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] sm:text-[13.5px] font-medium leading-[1.5] text-[#4A5950] max-w-[340px]">
                    {service.description}
                  </p>
                </div>

                <div className="mt-4 pt-1">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-[13px] sm:text-[13.5px] font-semibold text-[#0D3226] transition-colors hover:text-[#185340]"
                  >
                    <span>Explore care</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

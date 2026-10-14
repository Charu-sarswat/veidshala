import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Pillar {
  number: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

export default function CarePillars() {
  const pillars: Pillar[] = [
    {
      number: "01 /",
      title: "Ayurvedic Consultation",
      description:
        "A detailed discussion of your health concerns, lifestyle and medical history to understand your individual needs.",
      imageSrc: "/a2.png",
      imageAlt: "Ayurvedic doctor consulting patient in clinic",
      href: "/#consultation",
    },
    {
      number: "02 /",
      title: "Panchakarma Therapies",
      description:
        "Personalised Panchakarma therapies planned as per your health condition and suitability.",
      imageSrc: "/a1.png",
      imageAlt: "Traditional Panchakarma Shirodhara therapy",
      href: "/#panchakarma",
    },
    {
      number: "03 /",
      title: "Yoga & Lifestyle Care",
      description:
        "Guidance with yoga, meditation and daily routines to support long-term well-being.",
      imageSrc: "/a3.png",
      imageAlt: "Calm yoga and meditation guidance",
      href: "/#yoga",
    },
    {
      number: "04 /",
      title: "Medicines & Products",
      description:
        "Authentic Ayurvedic formulations and wellness products to support your treatment and daily health.",
      imageSrc: "/a5.png",
      imageAlt: "Authentic Ayurvedic herbal formulations and oils",
      href: "/#products",
    },
  ];

  return (
    <section className="w-full bg-[#FAF8F3] py-14 sm:py-18 lg:py-20 border-b border-[#ECE6DB]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-[12.5px] sm:text-[13px] font-bold tracking-[0.18em] uppercase text-[#A38146]">
            Care at Vaidhyashala
          </span>
          <h2 className="mt-2.5 font-serif text-[32px] sm:text-[40px] lg:text-[44px] font-normal leading-[1.15] text-[#0D3226]">
            Care that begins with understanding you.
          </h2>
          <p className="mt-3.5 text-[16px] sm:text-[17px] font-normal leading-[1.6] text-[#55645B]">
            A thoughtful combination of consultation, therapies, lifestyle
            guidance and authentic Ayurvedic products, designed to support your
            unique health journey.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="group flex flex-col justify-between transition-all duration-200"
            >
              <div>
                {/* Image */}
                <div className="overflow-hidden rounded-xl aspect-[16/11] bg-[#EAE4D8]">
                  <img
                    src={pillar.imageSrc}
                    alt={pillar.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Number Eyebrow */}
                <div className="mt-4 text-[13px] font-bold tracking-wider text-[#A38146]">
                  {pillar.number}
                </div>

                {/* Title */}
                <h3 className="mt-1.5 font-serif text-[21px] sm:text-[23px] font-medium leading-[1.25] text-[#0D3226] group-hover:text-[#185340] transition-colors">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-[14px] sm:text-[14.5px] font-normal leading-[1.6] text-[#55645B]">
                  {pillar.description}
                </p>
              </div>

              {/* Link CTA */}
              <div className="mt-4 pt-1">
                <Link
                  href={pillar.href}
                  className="inline-flex items-center gap-1.5 text-[13.5px] sm:text-[14px] font-semibold text-[#0E382B] transition-colors hover:text-[#195642]"
                >
                  <span className="border-b-[1.5px] border-[#C5A969] pb-0.5">Learn more</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

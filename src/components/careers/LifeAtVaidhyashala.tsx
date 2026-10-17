import React from "react";
import Image from "next/image";

export default function LifeAtVaidhyashala() {
  const gallery = [
    {
      src: "/career/02_ayurvedic_herbal_tools.png",
      alt: "Authentic Ayurvedic preparation tools and herbs",
    },
    {
      src: "/career/03_doctor_patient_consultation.png",
      alt: "Ayurvedic doctor consulting with patient",
    },
    {
      src: "/career/04_clinic_team_collaboration.png",
      alt: "Healthcare professionals collaborating at Vaidhyashala",
    },
    {
      src: "/career/09_herbal_oils_and_ingredients.png",
      alt: "Traditional Ayurvedic herbal oils, turmeric and bronze vessels",
    },
  ];

  return (
    <section className="w-full bg-[#FAF7F2] py-5 sm:py-6 lg:py-8 border-b border-[#ECE6DB]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Header: Title Left, Description Right */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3 lg:gap-6 mb-3 sm:mb-4">
          <div>
            <span className="text-[11.5px] sm:text-[12px] font-bold tracking-[1.5px] uppercase text-[#A58351]">
              Life at Vaidhyashala
            </span>
            <h2 className="mt-1 font-serif text-[24px] sm:text-[30px] md:text-[34px] lg:text-[38px] font-medium leading-[1.14] text-[#0D3226] sm:whitespace-nowrap">
              Work in a Culture of Care and Learning
            </h2>
          </div>

          <div className="max-w-md lg:shrink-0">
            <p className="text-[13.5px] sm:text-[14px] font-medium leading-[1.6] text-[#4A5950]">
              We foster a respectful, balanced and inspiring work environment where traditional knowledge meets modern wellness.
            </p>
          </div>
        </div>

        {/* 5 Photo Gallery Cards */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5 lg:gap-4">
          {gallery.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl border border-[#E3DDCF] bg-[#FAF8F3] shadow-2xs aspect-[4/3] sm:aspect-[3/4] lg:aspect-[4/5] group"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                unoptimized
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}

          {/* 5th Card: Wellness Interior with 'Healing People Enriching Lives' Calligraphy */}
          <div className="relative overflow-hidden rounded-xl border border-[#E3DDCF] bg-[#FAF8F3] shadow-2xs aspect-[4/3] sm:aspect-[3/4] lg:aspect-[4/5] col-span-2 sm:col-span-1 group">
            <Image
              src="/career/06_wellness_interior.png"
              alt="Healing People Enriching Lives wellness space"
              fill
              unoptimized
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              className="object-cover object-[75%_center] transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#FAF7F2]/85 via-[#FAF7F2]/35 to-transparent flex flex-col justify-center items-end pr-5 sm:pr-6 text-right pointer-events-none">
              <p className="font-serif italic text-[18px] sm:text-[20px] font-medium leading-[1.2] text-[#0D3226]">
                Healing
                <br />
                People
                <br />
                Enriching
                <br />
                Lives
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

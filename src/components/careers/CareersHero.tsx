import React from "react";
import Image from "next/image";

export default function CareersHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAF7F2] border-b border-[#ECE6DB] min-h-[400px] lg:min-h-[460px] xl:min-h-[500px] flex items-center">
      {/* Background panoramic image: he1.png */}
      <div className="absolute inset-0 select-none pointer-events-none">
        <Image
          src="/career/he1.png"
          alt="Careers at Vaidhyashala"
          fill
          priority
          unoptimized
          className="object-cover object-[78%_center] sm:object-[72%_center] lg:object-center"
        />
        {/* Soft readable gradient overlay on smaller screens */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2]/95 via-[#FAF7F2]/85 to-transparent lg:hidden" />
      </div>

      {/* Wall Typography on Top Right: Ancient Wisdom Modern Wellness */}
      <div className="hidden lg:block absolute right-8 sm:right-12 xl:right-16 top-6 sm:top-8 text-right select-none pointer-events-none z-20 drop-shadow-xs">
        <p className="font-serif text-[18px] xl:text-[21px] font-semibold tracking-tight text-[#243E32]">
          Ancient
        </p>
        <p className="font-serif text-[18px] xl:text-[21px] font-semibold tracking-tight text-[#243E32] -mt-1">
          Wisdom
        </p>
        <p className="font-serif text-[18px] xl:text-[21px] font-semibold tracking-tight text-[#243E32] -mt-1">
          Modern
        </p>
        <p className="font-serif text-[18px] xl:text-[21px] font-semibold tracking-tight text-[#243E32] -mt-1">
          Wellness
        </p>
      </div>

      {/* Left Column Content */}
      <div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 py-5 sm:py-6 lg:py-8 z-20">
        <div className="max-w-xl lg:max-w-2xl pl-2 sm:pl-4">
          <span className="text-[11.5px] sm:text-[12px] font-bold tracking-[1.5px] uppercase text-[#A58351]">
            Careers at Vaidhyashala
          </span>

          <h1 className="mt-2 font-serif text-[38px] sm:text-[46px] lg:text-[52px] xl:text-[56px] font-medium leading-[1.08] tracking-[-0.018em] text-[#0F382B]">
            Build a Purposeful
            <br />
            Career in Ayurveda
          </h1>

          <p className="mt-2.5 sm:mt-3 text-[15px] sm:text-[16.5px] lg:text-[17.5px] font-medium leading-[1.5] text-[#4A5950] max-w-lg">
            Be a part of a dedicated team committed to authentic Ayurvedic care, holistic healing and healthier lives.
          </p>

          {/* 4 Feature Badges using he2.png */}
          <div className="mt-4 sm:mt-5 max-w-[480px]">
            <Image
              src="/career/he2.png"
              alt="Meaningful Work, Collaborative Team, Growth Opportunities, Real Impact on Lives"
              width={520}
              height={170}
              unoptimized
              className="w-full h-auto object-contain mix-blend-multiply"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

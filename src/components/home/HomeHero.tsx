import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomeHero() {
  return (
    <section className="relative w-full bg-[#FAF7F2] border-b border-[#EAE5DA]/70 py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center">
            {/* Eyebrow */}
            <span className="text-[12.5px] sm:text-[13px] font-bold tracking-[0.18em] uppercase text-[#B78B45]">
              Rooted in Ayurveda. Focused on you.
            </span>

            {/* Main Editorial Heading */}
            <h1 className="mt-4 font-serif text-[46px] sm:text-[54px] lg:text-[60px] xl:text-[66px] font-normal leading-[1.08] tracking-[-0.015em] text-[#0F382B]">
              Your care.
              <br />
              Our Ayurvedic
              <br />
              <span className="italic font-normal">approach.</span>
            </h1>

            {/* Subtitle description */}
            <p className="mt-5 text-[16.5px] sm:text-[18px] font-normal leading-[1.6] text-[#55645B] max-w-[480px]">
              Doctor consultations, Panchakarma therapies and Ayurvedic medicines,
              with care tailored to you.
            </p>

            {/* Two Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <Link
                href="/#consultation"
                className="group inline-flex items-center gap-2.5 rounded-md bg-[#0A3527] px-6 sm:px-7 py-3 sm:py-3.5 text-[14.5px] font-medium text-white shadow-xs transition-all hover:bg-[#124534]"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/#treatments"
                className="inline-flex items-center rounded-md border border-[#D0C9BD] bg-transparent px-6 sm:px-7 py-3 sm:py-3.5 text-[14.5px] font-medium text-[#0E382B] transition-all hover:border-[#0E382B] hover:bg-[#F2ECE1]"
              >
                <span>Explore Therapies</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Interior Image */}
          <div className="lg:col-span-6 xl:col-span-7">
            <div className="relative overflow-hidden rounded-2xl border border-[#E3DDCF] bg-[#FAF8F3] shadow-sm">
              <img
                src="/lp.png"
                alt="Vaidhyashala Clinic Interior with Practitioners and Ayurvedic Formulations"
                className="w-full h-auto max-h-[500px] object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

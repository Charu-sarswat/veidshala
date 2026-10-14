import React from "react";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative w-full bg-[#FAF7F2] border-b border-[#EAE5DA]/70 py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* Left Column: Breadcrumb, Title & Subtitle */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex items-center space-x-2 text-[12.5px] font-normal">
                <li>
                  <Link
                    href="/home"
                    className="text-[#A3733F] transition-colors hover:text-[#0E3528]"
                  >
                    Home
                  </Link>
                </li>
                <li className="text-[#9FA9A2]">/</li>
                <li className="text-[#516157] font-normal" aria-current="page">
                  About Us
                </li>
              </ol>
            </nav>

            {/* Main Editorial Heading */}
            <h1 className="font-serif text-[42px] sm:text-[48px] lg:text-[54px] xl:text-[60px] font-normal leading-[1.1] tracking-[-0.015em] text-[#0F382B]">
              Rooted in Ayurveda.
              <br />
              <span className="italic font-normal">Dedicated to your care.</span>
            </h1>

            {/* Subtitle description */}
            <p className="mt-4 sm:mt-5 text-[16px] sm:text-[17.5px] font-normal leading-[1.6] text-[#55645B] max-w-[500px]">
              Get to know Vaidhyashala and our approach to personalised Ayurvedic
              care.
            </p>
          </div>

          {/* Right Column: Reception & Clinic Image */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-2xl border border-[#E3DDCF] bg-[#FAF8F3] shadow-sm">
              <img
                src="/lp.png"
                alt="Vaidhyashala Clinic Reception and Atmosphere"
                className="w-full h-auto max-h-[460px] object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import {
  Apple,
  Activity,
  Sparkles,
  Flower2,
  Wind,
  Moon,
} from "lucide-react";

export default function ConcernCategories() {
  const concerns = [
    {
      name: "Digestive Health",
      icon: Apple,
    },
    {
      name: "Joint & Mobility",
      icon: Activity,
    },
    {
      name: "Skin & Hair",
      icon: Sparkles,
    },
    {
      name: "Women's Health",
      icon: Flower2,
    },
    {
      name: "Respiratory Concerns",
      icon: Wind,
    },
    {
      name: "Stress & Sleep",
      icon: Moon,
    },
  ];

  return (
    <section className="w-full bg-[#FAF8F3] py-14 sm:py-18 lg:py-20 border-b border-[#ECE6DB]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <span className="text-[12.5px] sm:text-[13px] font-bold tracking-[0.18em] uppercase text-[#A38146]">
            Explore Care by Concern
          </span>
          <h2 className="mt-2.5 font-serif text-[32px] sm:text-[38px] lg:text-[42px] font-normal leading-[1.15] text-[#0D3226]">
            Find support for what matters to you.
          </h2>
          <p className="mt-3 text-[16px] sm:text-[17px] font-normal leading-[1.6] text-[#55645B]">
            Explore our approach to common health concerns with Ayurvedic care
            and lifestyle guidance.
          </p>
        </div>

        {/* 6 Concern Cards */}
        <div className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-3.5">
          {concerns.map((concern) => {
            const Icon = concern.icon;
            return (
              <div
                key={concern.name}
                className="group flex items-center justify-center gap-2.5 rounded-lg border border-[#DFD8CC] bg-[#F7F4EE] px-3 py-3 text-center transition-all duration-200 hover:border-[#0D3226] hover:bg-white hover:shadow-2xs cursor-pointer"
              >
                <Icon className="h-4 w-4 flex-shrink-0 text-[#2F4439] group-hover:text-[#0D3226] transition-colors" />
                <span className="text-[12.5px] sm:text-[13px] font-medium text-[#273830] whitespace-nowrap">
                  {concern.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

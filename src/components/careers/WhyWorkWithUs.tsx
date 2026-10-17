import React from "react";
import { Leaf, Users, TrendingUp, Heart } from "lucide-react";

export default function WhyWorkWithUs() {
  const values = [
    {
      icon: Leaf,
      title: "Purpose-Driven Work",
      description: "Contribute to authentic Ayurveda and holistic wellness.",
    },
    {
      icon: Users,
      title: "Supportive Team Environment",
      description: "Work with experienced doctors and wellness professionals.",
    },
    {
      icon: TrendingUp,
      title: "Learning & Growth",
      description: "Enhance your skills with continuous learning and opportunities.",
    },
    {
      icon: Heart,
      title: "Positive Impact",
      description: "Be a part of a mission that improves lives naturally.",
    },
  ];

  return (
    <section
      className="relative w-full overflow-hidden py-5 sm:py-6 lg:py-8 text-[#FFFDF6]"
      style={{
        background:
          "radial-gradient(circle at 10% 20%, rgba(9, 72, 45, 0.45), transparent 30%), linear-gradient(180deg, #093728 0%, #062B1F 55%, #042218 100%)",
      }}
    >
      {/* Decorative ambient leaf silhouettes on borders */}
      <img
        src="/leaf.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-10 w-72 rotate-[25deg] opacity-[0.14] mix-blend-screen"
      />
      <img
        src="/leaf.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-10 w-72 -rotate-[30deg] opacity-[0.14] mix-blend-screen"
      />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header: 2 Columns */}
        <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-12 mb-4 sm:mb-5 lg:mb-6">
          <div className="lg:col-span-6">
            <span className="text-[11.5px] sm:text-[12px] font-bold tracking-[1.5px] uppercase text-[#D8B45D]">
              Why Work With Vaidhyashala
            </span>
            <h2 className="mt-1 font-serif text-[30px] sm:text-[36px] lg:text-[40px] font-medium leading-[1.14] text-[#FFFDF6]">
              A Meaningful Career,
              <br />
              A Healthier Tomorrow
            </h2>
            <div className="mt-2.5 h-[2px] w-24 bg-[#D8B45D]" />
          </div>

          <div className="lg:col-span-6 lg:pt-5">
            <p className="text-[14px] sm:text-[14.5px] font-medium leading-[1.65] text-[#E0ECE5] max-w-xl">
              At Vaidhyashala, you will be part of a compassionate and professional environment that values traditional wisdom, continuous learning and the well-being of both our team and our patients.
            </p>
          </div>
        </div>

        {/* 4 White Value Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {values.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center rounded-xl bg-[#FFFDF9] p-6 text-center text-[#172D24] shadow-xs border border-[#E3DDCF] transition-transform duration-200 hover:-translate-y-1"
              >
                {/* Circle Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EAE2D5] text-[#0D3226]">
                  <IconComponent className="h-5 w-5 stroke-[1.8]" />
                </div>

                <h3 className="mt-3.5 font-serif text-[17px] sm:text-[17.5px] font-medium leading-[1.25] text-[#0D3226]">
                  {item.title}
                </h3>

                <p className="mt-1.5 text-[12.5px] sm:text-[13px] font-medium leading-[1.5] text-[#4A5950]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

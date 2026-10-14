import React from "react";

export default function HighlightsBar() {
  const highlights = [
    "Ayurvedic doctor consultation",
    "Panchakarma therapies",
    "Individual treatment plans",
    "Ayurvedic medicines & products",
  ];

  return (
    <section className="w-full bg-[#0D3226] text-[#E0ECE5] py-4 sm:py-4.5 border-y border-[#184838]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-y-3 sm:grid-cols-4 sm:gap-4 items-center justify-between text-center">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="text-[13.5px] sm:text-[14.5px] font-normal sm:font-medium tracking-wide text-[#E3EDE8]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: "Do I need a consultation before starting treatment?",
      answer:
        "Yes, an initial doctor consultation is essential. It enables our physicians to assess your unique constitution (Prakriti), current imbalances (Vikriti), lifestyle, and medical history to create an effective and safe treatment plan.",
    },
    {
      question: "Are the treatments suitable for all age groups?",
      answer:
        "Yes, Ayurvedic therapies and wellness guidance are individually tailored. Treatments for seniors, adults, and younger individuals are carefully adjusted in intensity, duration, and formulation according to individual suitability.",
    },
    {
      question: "How long does a typical treatment plan take?",
      answer:
        "Treatment plans vary based on individual health objectives. Single rejuvenation or stress-relief therapies can be experienced in one session, while structured therapeutic programs and Panchakarma typically span 7, 14, or 21 days.",
    },
    {
      question:
        "Can I take Ayurvedic medicines along with my current medication?",
      answer:
        "In most cases, yes. Our Ayurvedic doctors carefully review your existing prescriptions and treatments to ensure full compatibility and prevent any herb-drug interactions.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="w-full bg-[#FAF7F2] py-14 sm:py-18 lg:py-20 border-b border-[#ECE6DB]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-16">
          {/* Left Column: Heading and Description */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <span className="text-[12.5px] sm:text-[13px] font-bold tracking-[0.18em] uppercase text-[#A38146]">
              FAQs
            </span>
            <h2 className="mt-2.5 font-serif text-[32px] sm:text-[38px] lg:text-[42px] font-normal leading-[1.15] text-[#0D3226]">
              Before your consultation.
            </h2>
            <p className="mt-3 text-[15.5px] sm:text-[16.5px] font-normal leading-[1.6] text-[#55645B] max-w-sm">
              Find quick answers to common questions about our consultations,
              therapies and products.
            </p>
          </div>

          {/* Right Column: Accordion Items */}
          <div className="lg:col-span-7 divide-y divide-[#E2DCCE] border-t border-b border-[#E2DCCE]">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="py-4.5 sm:py-5">
                  <button
                    onClick={() => toggle(idx)}
                    className="flex w-full items-center justify-between gap-4 text-left cursor-pointer transition-colors hover:text-[#0D3226]"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[15px] sm:text-[16px] font-medium text-[#0D3226] leading-snug">
                      {faq.question}
                    </span>
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#EFEAE0] text-[#0D3226] transition-transform">
                      {isOpen ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-3 pr-8 text-[14.5px] font-normal leading-[1.65] text-[#55645B] animate-fadeIn">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

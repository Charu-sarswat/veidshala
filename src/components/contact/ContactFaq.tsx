"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function ContactFaq() {
  // First item open by default as in reference image
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How can I request an appointment?",
      answer:
        "Use the appointment form or contact our team. The clinic will confirm your request and available timings.",
    },
    {
      question: "Can I enquire about therapy availability?",
      answer:
        "Yes, you can enquire about specific therapies such as Panchakarma, Shirodhara, or Abhyanga directly through WhatsApp, phone, or our enquiry form.",
    },
    {
      question: "Can I ask about a product?",
      answer:
        "Yes, our team can guide you on authentic Ayurvedic medicines, wellness formulations, dosage recommendations, and availability at our clinic counter.",
    },
  ];

  return (
    <section className="w-full bg-[#FAF7F2] py-4 sm:py-5 lg:py-6 border-b border-[#ECE6DB]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Heading and Subtitle */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <span className="text-[11.5px] sm:text-[12px] font-bold tracking-[1.5px] uppercase text-[#A58351]">
              Frequently Asked Questions
            </span>
            <h2 className="mt-1.5 font-serif text-[34px] sm:text-[40px] font-medium leading-[1.12] text-[#0D3226]">
              Common questions.
            </h2>
            <p className="mt-2 text-[14px] sm:text-[14.5px] font-medium leading-[1.6] text-[#55675D] max-w-sm">
              Find quick answers to help you get in touch with us.
            </p>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className="rounded-xl border border-[#E3DDCF] bg-white transition-all overflow-hidden shadow-2xs"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between px-5 sm:px-6 py-4 text-left transition-colors hover:bg-[#FAF8F3]"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-[16px] sm:text-[17px] font-medium text-[#0D3226] pr-4">
                      {faq.question}
                    </span>
                    <span className="flex-shrink-0 text-[#0D3226]">
                      {isOpen ? (
                        <Minus className="h-4.5 w-4.5 stroke-[2]" />
                      ) : (
                        <Plus className="h-4.5 w-4.5 stroke-[2]" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-4.5 pt-0 border-t border-[#F0EBE0]">
                      <p className="text-[13.5px] sm:text-[14px] font-medium leading-[1.65] text-[#4A5950] pt-3">
                        {faq.answer}
                      </p>
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

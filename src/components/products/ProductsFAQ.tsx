"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plus, Minus, Leaf, ArrowRight } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Are all products available at the clinic?",
    answer: "Contact our team to confirm the current product range and availability.",
  },
  {
    question: "How can I get product information?",
    answer: "Our Ayurvedic doctors and clinic staff can provide detailed formulation information, usage, and dosage guidance.",
  },
  {
    question: "Do I need advice before using Ayurvedic medicines?",
    answer: "Yes, we always recommend consulting an Ayurvedic physician before beginning any classical medicines or treatments.",
  },
];

export default function ProductsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#FAF8F3] py-6 sm:py-8">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* FAQs Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 pb-6 sm:pb-8">
          {/* Left Column: Heading */}
          <div className="lg:col-span-5">
            <span className="text-[11.5px] sm:text-[12px] font-bold tracking-[1.5px] uppercase text-[#A58351]">
              FAQs
            </span>
            <h2 className="mt-1.5 font-serif text-[32px] sm:text-[38px] lg:text-[42px] font-medium leading-[1.14] text-[#0D3226]">
              Common questions
              <br />
              about our products.
            </h2>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 divide-y divide-[#ECE5D8] border-y border-[#ECE5D8]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="py-3.5 sm:py-4">
                  <button
                    onClick={() => toggle(index)}
                    className="flex w-full items-center justify-between text-left text-[16px] sm:text-[17px] font-medium text-[#0D3226] transition-colors hover:text-[#184838]"
                  >
                    <span>{faq.question}</span>
                    <span className="ml-4 flex h-6 w-6 flex-shrink-0 items-center justify-center text-[#7A8880]">
                      {isOpen ? (
                        <Minus className="h-4.5 w-4.5 stroke-[2]" />
                      ) : (
                        <Plus className="h-4.5 w-4.5 stroke-[2]" />
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="mt-2 text-[14px] sm:text-[14.5px] font-medium leading-[1.6] text-[#4A5950] pr-8">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Card: "Looking for a specific product?" */}
        <div className="rounded-xl border border-[#ECE5D8] bg-[#F7F4EC] p-5 sm:p-6 shadow-2xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-[#D5CDC0] bg-[#E8E0D0] text-[#052119]">
              <Leaf className="h-5.5 w-5.5 stroke-[2.2] text-[#052119]" />
            </div>
            <div>
              <h3 className="font-serif text-[18px] sm:text-[20px] font-medium text-[#0D3226] leading-tight">
                Looking for a specific product?
              </h3>
              <p className="mt-1 text-[13.5px] sm:text-[14px] font-medium text-[#4A5950]">
                Ask our team for information on availability and suitability.
              </p>
            </div>
          </div>

          <div className="flex-shrink-0">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-md bg-[#0A3527] px-6 py-2.5 text-[14px] font-semibold text-white shadow-xs transition-all hover:bg-[#124534]"
            >
              <span>Ask Our Team</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProductEnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    product: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="enquire" className="w-full bg-[#FAF8F3] py-6 sm:py-8 border-b border-[#ECE6DB]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-[#ECE5D8] bg-[#F7F4EC] p-5 sm:p-7 shadow-2xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            {/* Left Column: Heading and info */}
            <div className="lg:col-span-4">
              <h2 className="font-serif text-[30px] sm:text-[34px] lg:text-[38px] font-medium text-[#0D3226] leading-tight">
                Enquire about a product.
              </h2>
              <p className="mt-2 text-[14.5px] sm:text-[15px] font-medium leading-[1.6] text-[#4A5950]">
                Share your details and our team will get back to you with
                <br className="hidden sm:inline" /> information about the product, packs and availability.
              </p>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-8">
              {submitted ? (
                <div className="rounded-lg bg-[#EFE9DF] p-6 text-center">
                  <h3 className="font-serif text-[18px] sm:text-[20px] font-medium text-[#0D3226]">
                    Thank you for your enquiry.
                  </h3>
                  <p className="mt-1.5 text-[14px] sm:text-[14.5px] font-medium text-[#4A5950]">
                    Our team will contact you shortly with product information and availability.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[13px] sm:text-[13.5px] font-medium text-[#384A40] mb-1.5">
                        Your name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-md border border-[#D5CDC0] bg-white px-4 py-2 text-[13.5px] sm:text-[14px] text-[#22332A] placeholder-[#8C988F] focus:border-[#0D3226] focus:outline-none shadow-2xs"
                      />
                    </div>

                    <div>
                      <label className="block text-[13px] sm:text-[13.5px] font-medium text-[#384A40] mb-1.5">
                        Mobile number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Enter your mobile number"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        className="w-full rounded-md border border-[#D5CDC0] bg-white px-4 py-2 text-[13.5px] sm:text-[14px] text-[#22332A] placeholder-[#8C988F] focus:border-[#0D3226] focus:outline-none shadow-2xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[13px] sm:text-[13.5px] font-medium text-[#384A40] mb-1.5">
                        Product of interest *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ayurvedic Tablets, Hair Care Oil"
                        value={formData.product}
                        onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                        className="w-full rounded-md border border-[#D5CDC0] bg-white px-4 py-2 text-[13.5px] sm:text-[14px] text-[#22332A] placeholder-[#8C988F] focus:border-[#0D3226] focus:outline-none shadow-2xs"
                      />
                    </div>

                    <div>
                      <label className="block text-[13px] sm:text-[13.5px] font-medium text-[#384A40] mb-1.5">
                        Message (optional)
                      </label>
                      <input
                        type="text"
                        placeholder="Tell us what you would like to know..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-md border border-[#D5CDC0] bg-white px-4 py-2 text-[13.5px] sm:text-[14px] text-[#22332A] placeholder-[#8C988F] focus:border-[#0D3226] focus:outline-none shadow-2xs"
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-1.5">
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-2 rounded-md bg-[#0A3527] px-6 py-2.5 text-[14px] font-semibold text-white shadow-xs transition-all hover:bg-[#124534]"
                    >
                      <span>Send Product Enquiry</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </button>

                    <Link
                      href="/contact"
                      className="inline-flex items-center rounded-md border border-[#D0C7B8] bg-white px-5 py-2.5 text-[14px] font-medium text-[#123E30] transition-colors hover:bg-[#FAF8F3]"
                    >
                      Contact the Clinic
                    </Link>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { ArrowRight, Calendar } from "lucide-react";

export default function RequestConsultationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    therapy: "",
    date: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="consultation" className="w-full bg-[#FAF8F3] pt-2.5 sm:pt-3 pb-2.5 sm:pb-3 border-b border-[#ECE6DB]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[#E3DDCF] bg-white p-6 sm:p-8 lg:p-9 shadow-2xs">
          {/* Form Header */}
          <div className="max-w-2xl">
            <h2 className="font-serif text-[26px] sm:text-[30px] font-medium leading-tight text-[#0D3226]">
              Request a Consultation
            </h2>
            <p className="mt-1 text-[13.5px] sm:text-[14px] font-medium text-[#5A6860]">
              Share a few details and we&apos;ll get back to you to discuss your therapy plan.
            </p>
          </div>

          {submitted ? (
            <div className="mt-6 rounded-lg bg-[#F2F7F3] border border-[#C5DDCB] p-5 text-center">
              <h3 className="font-serif text-[18px] font-medium text-[#0D3226]">
                Thank you for your request!
              </h3>
              <p className="mt-1 text-[13.5px] text-[#4A5950]">
                Our clinical coordinator will get back to you shortly to discuss your therapy plan.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
                {/* Name */}
                <div>
                  <label className="block text-[12px] font-semibold uppercase tracking-wider text-[#4A5950] mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-md border border-[#D5CEC0] bg-[#FAF8F3]/60 px-3.5 py-2.5 text-[13.5px] text-[#1F3327] placeholder-[#8A958D] focus:border-[#0D3226] focus:bg-white focus:outline-none transition-colors"
                  />
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-[12px] font-semibold uppercase tracking-wider text-[#4A5950] mb-1.5">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Your mobile number"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full rounded-md border border-[#D5CEC0] bg-[#FAF8F3]/60 px-3.5 py-2.5 text-[13.5px] text-[#1F3327] placeholder-[#8A958D] focus:border-[#0D3226] focus:bg-white focus:outline-none transition-colors"
                  />
                </div>

                {/* Therapy of interest */}
                <div>
                  <label className="block text-[12px] font-semibold uppercase tracking-wider text-[#4A5950] mb-1.5">
                    Therapy of interest
                  </label>
                  <select
                    value={formData.therapy}
                    onChange={(e) => setFormData({ ...formData, therapy: e.target.value })}
                    className="w-full rounded-md border border-[#D5CEC0] bg-[#FAF8F3]/60 px-3.5 py-2.5 text-[13.5px] text-[#1F3327] focus:border-[#0D3226] focus:bg-white focus:outline-none transition-colors"
                  >
                    <option value="">Select a therapy</option>
                    <option value="Consultation">Ayurvedic Consultation</option>
                    <option value="Shirodhara">Shirodhara</option>
                    <option value="Abhyanga">Abhyanga</option>
                    <option value="Swedana">Swedana</option>
                    <option value="Pizhichil">Pizhichil</option>
                    <option value="Udvartana">Udvartana</option>
                    <option value="Patra Pinda Sweda">Patra Pinda Sweda</option>
                    <option value="Shashtika Shali Pinda Sweda">Shashtika Shali Pinda Sweda</option>
                    <option value="Kati Basti">Kati Basti</option>
                    <option value="Shiro Abhyanga">Shiro Abhyanga</option>
                    <option value="Full Panchakarma Program">Full Panchakarma Program</option>
                  </select>
                </div>

                {/* Preferred date */}
                <div>
                  <label className="block text-[12px] font-semibold uppercase tracking-wider text-[#4A5950] mb-1.5">
                    Preferred date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full rounded-md border border-[#D5CEC0] bg-[#FAF8F3]/60 px-3.5 py-2.5 text-[13.5px] text-[#1F3327] focus:border-[#0D3226] focus:bg-white focus:outline-none transition-colors"
                    />
                    <Calendar className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#8A958D]" />
                  </div>
                </div>
              </div>

              {/* Submit Button Row */}
              <div className="mt-5 flex justify-end">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 rounded-md bg-[#0A3527] px-6 sm:px-7 py-3 text-[14px] font-semibold text-white shadow-xs transition-all hover:bg-[#124534]"
                >
                  <span>Request a Consultation</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

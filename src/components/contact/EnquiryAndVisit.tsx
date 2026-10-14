"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function EnquiryAndVisit() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    enquiryAbout: "",
    message: "",
    agree: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="w-full bg-[#FAF7F2] py-4 sm:py-5 lg:py-6 border-b border-[#ECE6DB]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8 xl:gap-10 items-stretch">
          {/* Left Column: Send us an enquiry form */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl border border-[#E3DDCF] bg-white p-5 sm:p-7 lg:p-8 shadow-2xs">
            <div>
              <span className="text-[11.5px] sm:text-[12px] font-bold tracking-[1.5px] uppercase text-[#A58351]">
                Send Us an Enquiry
              </span>
              <h2 className="mt-1 font-serif text-[28px] sm:text-[32px] lg:text-[36px] font-medium leading-[1.14] text-[#0D3226]">
                Send us an enquiry.
              </h2>
              <p className="mt-1 text-[13.5px] sm:text-[14px] font-medium text-[#5A6860]">
                Share a few details and our team will get back to you.
              </p>

              {submitted ? (
                <div className="mt-6 rounded-lg bg-[#F2F7F3] border border-[#C5DDCB] p-6 text-center">
                  <h3 className="font-serif text-[18px] font-medium text-[#0D3226]">
                    Thank you for your enquiry!
                  </h3>
                  <p className="mt-1.5 text-[13.5px] text-[#4A5950]">
                    Our team has received your message and will get back to you promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
                  {/* Row 1: Full name & Mobile number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[12px] font-semibold text-[#4A5950] mb-1">
                        Full name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-md border border-[#D5CEC0] bg-[#FAF8F3]/60 px-3.5 py-2.5 text-[13.5px] text-[#1F3327] placeholder-[#8A958D] focus:border-[#0D3226] focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[12px] font-semibold text-[#4A5950] mb-1">
                        Mobile number <span className="text-red-500">*</span>
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
                  </div>

                  {/* Row 2: Email & Enquiry about */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[12px] font-semibold text-[#4A5950] mb-1">
                        Email <span className="text-[#8A958D] font-normal">(optional)</span>
                      </label>
                      <input
                        type="email"
                        placeholder="Your email address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-md border border-[#D5CEC0] bg-[#FAF8F3]/60 px-3.5 py-2.5 text-[13.5px] text-[#1F3327] placeholder-[#8A958D] focus:border-[#0D3226] focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[12px] font-semibold text-[#4A5950] mb-1">
                        Enquiry about <span className="text-red-500">*</span>
                      </label>
                      <select
                        required
                        value={formData.enquiryAbout}
                        onChange={(e) => setFormData({ ...formData, enquiryAbout: e.target.value })}
                        className="w-full rounded-md border border-[#D5CEC0] bg-[#FAF8F3]/60 px-3.5 py-2.5 text-[13.5px] text-[#1F3327] focus:border-[#0D3226] focus:bg-white focus:outline-none transition-colors"
                      >
                        <option value="">Select an option</option>
                        <option value="Consultation">Doctor Consultation</option>
                        <option value="Panchakarma">Panchakarma Therapies</option>
                        <option value="Products">Ayurvedic Medicines & Products</option>
                        <option value="General">General Enquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Your message */}
                  <div>
                    <label className="block text-[12px] font-semibold text-[#4A5950] mb-1">
                      Your message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={3}
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-md border border-[#D5CEC0] bg-[#FAF8F3]/60 px-3.5 py-2.5 text-[13.5px] text-[#1F3327] placeholder-[#8A958D] focus:border-[#0D3226] focus:bg-white focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Row 4: Agreement Checkbox & Submit Button */}
                  <div className="pt-1.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3.5">
                    <label className="flex items-center gap-2.5 cursor-pointer text-[12.5px] text-[#4A5950]">
                      <input
                        type="checkbox"
                        checked={formData.agree}
                        onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                        className="h-4 w-4 rounded border-[#D5CEC0] text-[#0A3527] focus:ring-[#0A3527]"
                      />
                      <span>I agree to be contacted about my enquiry.</span>
                    </label>

                    <button
                      type="submit"
                      className="group inline-flex items-center justify-center gap-2 rounded-md bg-[#0A3527] px-6 py-2.5 text-[13.5px] font-semibold text-white shadow-xs transition-all hover:bg-[#124534]"
                    >
                      <span>Send Enquiry</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Plan your visit card using /contct/c3.png */}
          <div className="lg:col-span-5 flex flex-col rounded-2xl border border-[#E3DDCF] bg-[#FAF8F3] shadow-2xs overflow-hidden">
            <img
              src="/contct/c3.png"
              alt="Plan your visit - Here's what you need to know before coming to the clinic"
              className="w-full h-full object-cover object-center block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

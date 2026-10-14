"use client";

import React, { useState } from "react";
import { ArrowRight, Calendar, ChevronDown, CheckCircle2 } from "lucide-react";

export default function AppointmentBooking() {
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState<"clinic" | "online">("clinic");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="appointment" className="w-full bg-[#FAF8F3] py-14 sm:py-18 lg:py-20 border-b border-[#ECE6DB]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <span className="text-[12.5px] sm:text-[13px] font-bold tracking-[0.18em] uppercase text-[#A38146]">
            Appointment
          </span>
          <h2 className="mt-2.5 font-serif text-[32px] sm:text-[38px] lg:text-[42px] font-normal leading-[1.15] text-[#0D3226]">
            Plan your first visit.
          </h2>
          <p className="mt-3 text-[15.5px] sm:text-[16.5px] font-normal leading-[1.6] text-[#55645B]">
            Choose a service, pick a date and let us know if you'd prefer to visit
            the clinic or consult online. We'll get back to you to confirm your
            appointment.
          </p>
        </div>

        {/* Interactive Booking Form Strip */}
        <div className="mt-8 rounded-xl border border-[#DFD8CC] bg-[#F7F4EE] p-5 sm:p-6 shadow-2xs">
          {submitted ? (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-3 px-2 text-[#0D3226]">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-[#164D3C]" />
                <span className="text-[15px] font-medium">
                  Thank you! Your appointment request has been received. Our team will contact you shortly.
                </span>
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="text-[13.5px] font-medium underline text-[#0E382B] hover:text-[#185340]"
              >
                Book another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:items-end">
              {/* Field 1: Service */}
              <div className="lg:col-span-3">
                <label className="block text-[11.5px] font-bold uppercase tracking-wider text-[#67776E] mb-1.5">
                  Service
                </label>
                <div className="relative">
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    required
                    className="h-[44px] w-full appearance-none rounded-md border border-[#D6CFC3] bg-white px-3.5 pr-9 text-[13.5px] text-[#2C3B32] outline-none transition-all focus:border-[#0E382B] focus:ring-1 focus:ring-[#0E382B]"
                  >
                    <option value="">Select a service</option>
                    <option value="consultation">Ayurvedic Consultation</option>
                    <option value="panchakarma">Panchakarma Therapy</option>
                    <option value="yoga">Yoga & Lifestyle Session</option>
                    <option value="followup">Follow-up Consultation</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-3.5 h-4 w-4 text-[#75847B]" />
                </div>
              </div>

              {/* Field 2: Preferred Date */}
              <div className="lg:col-span-3">
                <label className="block text-[11.5px] font-bold uppercase tracking-wider text-[#67776E] mb-1.5">
                  Preferred date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    className="h-[44px] w-full rounded-md border border-[#D6CFC3] bg-white px-3.5 pr-9 text-[13.5px] text-[#2C3B32] outline-none transition-all focus:border-[#0E382B] focus:ring-1 focus:ring-[#0E382B]"
                  />
                  <Calendar className="pointer-events-none absolute right-3 top-3.5 h-4 w-4 text-[#75847B]" />
                </div>
              </div>

              {/* Field 3: Consultation Type */}
              <div className="lg:col-span-3">
                <label className="block text-[11.5px] font-bold uppercase tracking-wider text-[#67776E] mb-1.5">
                  Consultation type
                </label>
                <div className="flex h-[44px] items-center gap-4 px-1">
                  <label className="inline-flex items-center gap-2 cursor-pointer text-[13.5px] font-normal text-[#2C3B32]">
                    <input
                      type="radio"
                      name="consultationType"
                      checked={type === "clinic"}
                      onChange={() => setType("clinic")}
                      className="h-4 w-4 text-[#0E382B] focus:ring-[#0E382B] accent-[#0E382B]"
                    />
                    <span>Clinic visit</span>
                  </label>
                  <label className="inline-flex items-center gap-2 cursor-pointer text-[13.5px] font-normal text-[#2C3B32]">
                    <input
                      type="radio"
                      name="consultationType"
                      checked={type === "online"}
                      onChange={() => setType("online")}
                      className="h-4 w-4 text-[#0E382B] focus:ring-[#0E382B] accent-[#0E382B]"
                    />
                    <span>Online consultation</span>
                  </label>
                </div>
              </div>

              {/* Field 4: Submit Button */}
              <div className="lg:col-span-3">
                <button
                  type="submit"
                  className="group flex h-[44px] w-full items-center justify-center gap-2 rounded-md bg-[#0A3527] px-6 text-[13.5px] sm:text-[14px] font-medium text-white shadow-xs transition-all hover:bg-[#124534] cursor-pointer"
                >
                  <span>Request Appointment</span>
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

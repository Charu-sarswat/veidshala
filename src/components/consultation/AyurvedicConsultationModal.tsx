"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ArrowRight } from "lucide-react";

export interface AyurvedicConsultationModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  onRequestAppointment?: () => void;
  onBackToWebsite?: () => void;
}

export default function AyurvedicConsultationModal({
  isOpen = true,
  onClose = () => {},
  onRequestAppointment,
  onBackToWebsite,
}: AyurvedicConsultationModalProps) {
  // Handle ESC key press to close modal
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackToWebsite = () => {
    if (onBackToWebsite) {
      onBackToWebsite();
    } else {
      onClose();
    }
  };

  const handleRequestAppointment = () => {
    if (onRequestAppointment) {
      onRequestAppointment();
    } else {
      onClose();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="relative w-full max-w-[800px] max-h-[96vh] overflow-y-auto sm:overflow-hidden rounded-[22px] bg-[#FAF8F5] border border-[#E8E2D7] shadow-2xl p-5 sm:p-7 md:p-8 text-[#22332A] transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top-Right Decorative Foliage / Leaf Watermark */}
        <div className="absolute -top-10 -right-8 w-44 h-44 sm:w-56 sm:h-56 pointer-events-none select-none z-0 opacity-25 mix-blend-multiply rotate-[155deg]">
          <Image
            src="/consultation/consultation_leaf.webp"
            alt=""
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Top-Right Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 sm:top-5 sm:right-5 z-20 p-1.5 text-[#1F382B] hover:text-[#0D241A] transition-colors rounded-full hover:bg-black/5"
        >
          <X className="w-5 h-5 stroke-[1.6]" />
        </button>

        {/* Top Header Section */}
        <div className="relative z-10 pr-8">
          <p className="text-[10.5px] sm:text-[11px] font-bold tracking-[0.18em] uppercase text-[#A06E3B]">
            CARE BEGINS WITH UNDERSTANDING.
          </p>
          <h2 className="font-serif text-[28px] sm:text-[34px] md:text-[37px] font-medium leading-[1.12] text-[#0A291E] mt-0.5">
            Ayurvedic Consultation
          </h2>
          <p className="text-[13.5px] sm:text-[14.5px] text-[#55665C] font-normal mt-0.5">
            A thoughtful first step towards personalised care.
          </p>
        </div>

        {/* Middle Content Section (2 Columns) */}
        <div className="mt-4 sm:mt-5 grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 items-start relative z-10">
          {/* Left Column: Consultation Image */}
          <div className="md:col-span-6 flex flex-col">
            <div className="relative w-full aspect-[4/2.88] rounded-[13px] overflow-hidden bg-[#ECE6DC] border border-[#E2DBD0]/70 shadow-xs">
              <Image
                src="/consultation/ayurvedic_consultation_doctor.webp"
                alt="Ayurvedic consultation session with doctor and patient"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
                priority
              />
            </div>
            <span className="text-[10.5px] sm:text-[11px] text-[#7E8D83] mt-1.5 font-normal">
              Illustrative consultation image.
            </span>
          </div>

          {/* Right Column: What to expect */}
          <div className="md:col-span-6 flex flex-col pt-0.5">
            <h3 className="font-serif text-[20px] sm:text-[22px] font-medium text-[#0A291E] mb-3">
              What to expect
            </h3>

            <div className="space-y-3">
              {/* Step 01 */}
              <div className="flex items-start gap-2.5 sm:gap-3">
                <span className="h-6 w-9 rounded-full bg-[#F2EDE3] text-[#22382B] text-[11px] font-medium flex items-center justify-center shrink-0 mt-0.5">
                  01
                </span>
                <span className="w-[1.5px] h-6 bg-[#C8BBA5] shrink-0 self-start mt-0.5 opacity-75" />
                <div className="flex flex-col">
                  <h4 className="font-serif text-[13.5px] sm:text-[14px] font-semibold text-[#0A291E] leading-tight">
                    Discuss your concerns
                  </h4>
                  <p className="text-[11.5px] sm:text-[12px] text-[#55665C] leading-snug mt-0.5">
                    Share your symptoms, goals and medical history.
                  </p>
                </div>
              </div>

              {/* Step 02 */}
              <div className="flex items-start gap-2.5 sm:gap-3">
                <span className="h-6 w-9 rounded-full bg-[#F2EDE3] text-[#22382B] text-[11px] font-medium flex items-center justify-center shrink-0 mt-0.5">
                  02
                </span>
                <span className="w-[1.5px] h-6 bg-[#C8BBA5] shrink-0 self-start mt-0.5 opacity-75" />
                <div className="flex flex-col">
                  <h4 className="font-serif text-[13.5px] sm:text-[14px] font-semibold text-[#0A291E] leading-tight">
                    Review your routine
                  </h4>
                  <p className="text-[11.5px] sm:text-[12px] text-[#55665C] leading-snug mt-0.5">
                    Talk about eating habits, sleep, activity and current medicines.
                  </p>
                </div>
              </div>

              {/* Step 03 */}
              <div className="flex items-start gap-2.5 sm:gap-3">
                <span className="h-6 w-9 rounded-full bg-[#F2EDE3] text-[#22382B] text-[11px] font-medium flex items-center justify-center shrink-0 mt-0.5">
                  03
                </span>
                <span className="w-[1.5px] h-6 bg-[#C8BBA5] shrink-0 self-start mt-0.5 opacity-75" />
                <div className="flex flex-col">
                  <h4 className="font-serif text-[13.5px] sm:text-[14px] font-semibold text-[#0A291E] leading-tight">
                    Plan suitable care
                  </h4>
                  <p className="text-[11.5px] sm:text-[12px] text-[#55665C] leading-snug mt-0.5">
                    Your doctor discusses recommendations based on the assessment.
                  </p>
                </div>
              </div>

              {/* Step 04 */}
              <div className="flex items-start gap-2.5 sm:gap-3">
                <span className="h-6 w-9 rounded-full bg-[#F2EDE3] text-[#22382B] text-[11px] font-medium flex items-center justify-center shrink-0 mt-0.5">
                  04
                </span>
                <span className="w-[1.5px] h-6 bg-[#C8BBA5] shrink-0 self-start mt-0.5 opacity-75" />
                <div className="flex flex-col">
                  <h4 className="font-serif text-[13.5px] sm:text-[14px] font-semibold text-[#0A291E] leading-tight">
                    Understand the next steps
                  </h4>
                  <p className="text-[11.5px] sm:text-[12px] text-[#55665C] leading-snug mt-0.5">
                    Discuss follow-up, any further assessment and practical guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Card: Prepare for your visit */}
        <div className="mt-4 sm:mt-5 bg-[#EEF4EC] border border-[#D5E1D3] rounded-[14px] p-3.5 sm:p-4 md:p-4.5 relative z-10">
          <div>
            <h3 className="font-serif text-[18px] sm:text-[19px] font-semibold text-[#0A291E] leading-tight">
              Prepare for your visit
            </h3>
            <p className="text-[11.5px] sm:text-[12px] text-[#526357] mt-0.5">
              Bringing a few details can help make your consultation more meaningful.
            </p>
          </div>

          <div className="mt-3 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#D0DDCF] gap-2.5 md:gap-0">
            {/* Column 1: Recent medical reports */}
            <div className="flex items-start gap-2.5 md:pr-3.5 pt-1.5 md:pt-0">
              <svg
                className="w-7 h-7 sm:w-8 sm:h-8 text-[#0D3022] shrink-0 stroke-[1.6]"
                viewBox="0 0 28 32"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M5 2H18L24 8V28C24 29.1046 23.1046 30 22 30H5C3.89543 30 3 29.1046 3 28V4C3 2.89543 3.89543 2 5 2Z"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M17 2V8H23" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.5 14H18.5" strokeWidth="1.7" strokeLinecap="round" />
                <path d="M7.5 19H18.5" strokeWidth="1.7" strokeLinecap="round" />
                <path d="M7.5 24H14.5" strokeWidth="1.7" strokeLinecap="round" />
              </svg>
              <div className="flex flex-col">
                <h4 className="font-serif text-[12.5px] sm:text-[13px] font-semibold text-[#0A291E] leading-tight">
                  Recent medical reports
                </h4>
                <p className="text-[10.5px] sm:text-[11px] text-[#55665B] leading-[1.3] mt-0.5">
                  Bring any relevant test reports or previous medical records.
                </p>
              </div>
            </div>

            {/* Column 2: Current medicine list */}
            <div className="flex items-start gap-2.5 md:px-3.5 pt-2 md:pt-0">
              <svg
                className="w-7 h-7 sm:w-8 sm:h-8 text-[#0D3022] shrink-0"
                viewBox="0 0 32 32"
                fill="none"
                stroke="currentColor"
              >
                <rect
                  x="8.5"
                  y="4.5"
                  width="11"
                  height="22"
                  rx="5.5"
                  transform="rotate(45 14 15.5)"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <line
                  x1="9"
                  y1="19.5"
                  x2="19.5"
                  y2="9"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
              <div className="flex flex-col">
                <h4 className="font-serif text-[12.5px] sm:text-[13px] font-semibold text-[#0A291E] leading-tight">
                  Current medicine list
                </h4>
                <p className="text-[10.5px] sm:text-[11px] text-[#55665B] leading-[1.3] mt-0.5">
                  A list of all medicines, supplements or therapies you are currently taking.
                </p>
              </div>
            </div>

            {/* Column 3: Questions for your doctor */}
            <div className="flex items-start gap-2.5 md:pl-3.5 pt-2 md:pt-0">
              <svg
                className="w-7 h-7 sm:w-8 sm:h-8 text-[#0D3022] shrink-0"
                viewBox="0 0 30 30"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M15 3C8.92487 3 4 7.47715 4 13C4 16.3262 5.75338 19.2678 8.48911 21.0544L7 27L13.123 24.3756C13.7335 24.5103 14.3601 24.5802 15 24.5802C21.0751 24.5802 26 20.103 26 14.5802C26 9.05736 21.0751 3 15 3Z"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <text
                  x="15"
                  y="17"
                  textAnchor="middle"
                  fill="currentColor"
                  stroke="none"
                  fontSize="13"
                  fontWeight="600"
                  fontFamily="sans-serif"
                >
                  ?
                </text>
              </svg>
              <div className="flex flex-col">
                <h4 className="font-serif text-[12.5px] sm:text-[13px] font-semibold text-[#0A291E] leading-tight">
                  Questions for your doctor
                </h4>
                <p className="text-[10.5px] sm:text-[11px] text-[#55665B] leading-[1.3] mt-0.5">
                  Note down any questions or concerns you would like to discuss.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-4 sm:mt-5 pt-1 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 relative z-10">
          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={handleRequestAppointment}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#0D3022] px-4 sm:px-5 py-2.5 text-[12.5px] sm:text-[13px] font-medium text-white shadow-xs hover:bg-[#082218] transition-colors cursor-pointer"
            >
              Request an Appointment
              <ArrowRight className="w-4 h-4 stroke-[2]" />
            </button>

            <button
              type="button"
              onClick={handleBackToWebsite}
              className="inline-flex items-center justify-center rounded-md border border-[#2C493B] bg-[#FAF8F5] px-4 sm:px-5 py-2.5 text-[12.5px] sm:text-[13px] font-medium text-[#1B3B2B] hover:bg-[#EFE8DD] transition-colors cursor-pointer"
            >
              Back to Website
            </button>
          </div>

          {/* Right Disclaimer Note */}
          <div className="flex items-center sm:pl-4 border-t sm:border-t-0 sm:border-l border-[#DFD8CC] pt-2 sm:pt-0">
            <p className="text-[10.5px] sm:text-[11px] text-[#697A6F] leading-[1.35] max-w-[210px]">
              Appointment timing and doctor availability are confirmed by the clinic.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

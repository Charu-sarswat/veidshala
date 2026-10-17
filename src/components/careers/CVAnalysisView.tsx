"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Home,
  Check,
  FileText,
  Search,
  Briefcase,
  GraduationCap,
  Settings,
  BarChart2,
  Clock,
  Sparkles,
  Lightbulb,
  MapPin,
  Stethoscope,
  Loader2,
  Leaf,
} from "lucide-react";
import CareersNavbar from "@/components/careers/CareersNavbar";
import Footer from "@/components/Footer";

interface CVAnalysisViewProps {
  fileName?: string;
  fileSize?: string;
  roleTitle?: string;
  location?: string;
  employmentType?: string;
  qualification?: string;
}

export default function CVAnalysisView({
  fileName = "Vijay_Sharma_CV.pdf",
  fileSize = "2.4 MB",
  roleTitle = "Ayurvedic Doctor",
  location = "Delhi NCR",
  employmentType = "Full Time",
  qualification = "BAMS / MD (Ayurveda)",
}: CVAnalysisViewProps) {
  const [progress, setProgress] = useState(68);

  // Subtle realistic progress ticks
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev < 96 ? prev + 1 : prev));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Compact radius for compact card height
  const radius = 58;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * progress) / 100;

  return (
    <div className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-[#FAF7F2] text-[#22332A] flex flex-col font-sans">
      {/* 1. TOP NAVIGATION */}
      <CareersNavbar />

      {/* 2. COMPACT HERO BANNER: Clean and unobstructed matching Phase 3 */}
      <section className="relative w-full overflow-hidden bg-[#FAF7F2] border-b border-[#ECE6DB] min-h-[96px] sm:min-h-[110px] lg:min-h-[120px] flex items-center z-10">
        {/* Full-bleed Background Image on Right using 01_ayurvedic_hero_banner.png */}
        <div className="absolute right-0 top-0 bottom-0 w-full sm:w-4/5 lg:w-3/5 xl:w-[58%] select-none pointer-events-none">
          <Image
            src="/car2/01_ayurvedic_hero_banner.png"
            alt="Careers at Vaidhyashala"
            fill
            priority
            unoptimized
            className="object-cover object-right"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/90 to-transparent sm:via-[#FAF7F2]/60 lg:via-[#FAF7F2]/20" />
        </div>

        {/* Script Slogan on Far Right: Healing People Enriching Lives */}
        <div className="hidden lg:block absolute right-8 sm:right-12 xl:right-16 top-1/2 -translate-y-1/2 text-right select-none pointer-events-none z-20">
          <p className="font-serif italic text-[14px] xl:text-[16px] font-medium leading-[1.2] text-[#0D3226]">
            Healing
            <br />
            People
            <br />
            Enriching
            <br />
            Lives
          </p>
        </div>

        {/* Banner Left Content */}
        <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 z-20">
          <div className="max-w-xl lg:max-w-2xl">
            {/* Breadcrumb row */}
            <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-[11px] sm:text-[11.5px] font-normal text-[#5A6C60] mb-0.5">
              <Link href="/" className="text-[#A3733F] transition-colors hover:text-[#0E3528]">
                Home
              </Link>
              <span className="text-[#A3733F]">&gt;</span>
              <Link href="/careers" className="text-[#A3733F] transition-colors hover:text-[#0E3528]">
                Careers
              </Link>
              <span className="text-[#A3733F]">&gt;</span>
              <Link href="/careers/apply" className="text-[#A3733F] transition-colors hover:text-[#0E3528]">
                Apply for Position
              </Link>
              <span className="text-[#A3733F]">&gt;</span>
              <span className="font-semibold text-[#0E3528]">
                CV Analysis
              </span>
            </nav>

            {/* Back to Job Details Link */}
            <Link
              href="/careers/apply"
              className="inline-flex items-center gap-1 text-[11.5px] sm:text-[12px] font-semibold text-[#0E5C3D] hover:underline"
            >
              <ArrowLeft className="w-3 h-3 stroke-[2.4]" />
              <span>Back to Job Details</span>
            </Link>

            <h1 className="font-serif text-[22px] sm:text-[26px] lg:text-[28px] font-bold tracking-[-0.015em] text-[#0D3226] leading-tight mt-0.5">
              Application in Progress
            </h1>
            <p className="text-[11.5px] sm:text-[12px] font-medium text-[#4A5E52] max-w-lg">
              We are analyzing your profile to find the best match for this position.
            </p>
          </div>
        </div>
      </section>

      {/* 3. MAIN CONTENT TWO-COLUMN GRID: Process Stepper & Left Cards align with Right Card */}
      <main className="relative flex-1 z-10 pb-4 pt-1 sm:pt-1.5">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-2.5 sm:gap-3 items-stretch">
            {/* -----------------------------------------------------------------
                LEFT COLUMN (8 cols): Process Stepper + Top CV Status Card + AI Analysis Card
                ----------------------------------------------------------------- */}
            <div className="lg:col-span-8 flex flex-col justify-between gap-2.5 sm:gap-3">
              {/* Process Stepper: Matches AIScreeningResultView exactly in width, arrangement, labels, and heights */}
              <div className="w-full pt-0.5 pb-0.5 px-3 sm:px-4">
                <div className="flex items-center justify-between w-full">
                  {/* Step 1: Upload CV (Completed) */}
                  <Link
                    href={`/careers/apply?role=${encodeURIComponent(roleTitle)}`}
                    className="flex flex-col items-center text-center group cursor-pointer shrink-0"
                  >
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#0E5C3D] flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
                      <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.8]" />
                    </div>
                    <div className="mt-1 text-center">
                      <span className="block font-bold text-[12px] sm:text-[12.5px] text-[#0D3226] group-hover:text-[#0E5C3D]">
                        Upload CV
                      </span>
                      <span className="block text-[10.5px] text-[#697A70] font-normal">
                        Completed
                      </span>
                    </div>
                  </Link>

                  {/* Connecting Bar 1 -> 2 (Green) */}
                  <div className="flex-1 min-w-[28px] sm:min-w-[44px] mx-2 sm:mx-3 mb-4.5 h-[2px] bg-[#0E5C3D]" />

                  {/* Step 2: AI Analysis (In Progress - Active) */}
                  <div className="flex flex-col items-center text-center shrink-0">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#0E5C3D] flex items-center justify-center text-white font-bold text-[11.5px] sm:text-[12px] shadow-xs ring-4 ring-[#0E5C3D]/15">
                      2
                    </div>
                    <div className="mt-1 text-center">
                      <span className="block font-bold text-[12px] sm:text-[12.5px] text-[#0D3226]">
                        AI Analysis
                      </span>
                      <span className="block text-[10.5px] font-semibold text-[#0E5C3D]">
                        In Progress
                      </span>
                    </div>
                  </div>

                  {/* Connecting Bar 2 -> 3 (Gray) */}
                  <div className="flex-1 min-w-[28px] sm:min-w-[44px] mx-2 sm:mx-3 mb-4.5 h-[2px] bg-[#D4DCD7]" />

                  {/* Step 3: Eligibility Result */}
                  <Link
                    href={`/careers/ai-screening-result?role=${encodeURIComponent(roleTitle)}&fileName=${encodeURIComponent(fileName)}&fileSize=${encodeURIComponent(fileSize)}`}
                    className="flex flex-col items-center text-center shrink-0 group cursor-pointer"
                  >
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-[#C8D3CC] bg-white flex items-center justify-center text-[#788880] font-semibold text-[11.5px] sm:text-[12px] group-hover:border-[#0E5C3D] group-hover:text-[#0E5C3D] transition-colors">
                      3
                    </div>
                    <div className="mt-1 text-center">
                      <span className="block font-medium text-[12px] sm:text-[12.5px] text-[#6E7F75] group-hover:text-[#0E5C3D] transition-colors">
                        Eligibility Result
                      </span>
                      <span className="block text-[10.5px] text-[#93A198] font-normal">
                        Next
                      </span>
                    </div>
                  </Link>

                  {/* Connecting Bar 3 -> 4 (Gray) */}
                  <div className="flex-1 min-w-[28px] sm:min-w-[44px] mx-2 sm:mx-3 mb-4.5 h-[2px] bg-[#D4DCD7]" />

                  {/* Step 4: Apply for Job */}
                  <div className="flex flex-col items-center text-center shrink-0">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-[#C8D3CC] bg-white flex items-center justify-center text-[#788880] font-semibold text-[11.5px] sm:text-[12px]">
                      4
                    </div>
                    <div className="mt-1 text-center">
                      <span className="block font-medium text-[12px] sm:text-[12.5px] text-[#6E7F75]">
                        Apply for Job
                      </span>
                      <span className="block text-[10.5px] text-[#93A198] font-normal">
                        Pending
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 1: CV Received Bar (Compact) */}
              <div className="rounded-2xl border border-[#E5DFD3] bg-white p-2.5 sm:p-3 px-3.5 sm:px-4 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 shrink-0">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-[#0E5C3D] flex items-center justify-center shrink-0 shadow-xs">
                    <FileText className="w-4 h-4 text-white stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[14px] sm:text-[14.5px] text-[#0D3226]">
                      {fileName}
                    </h3>
                    <p className="text-[11.5px] font-medium text-[#63756A] flex items-center gap-2 mt-0.5">
                      <span>Uploaded successfully</span>
                      <span className="text-[#C5D0C9]">|</span>
                      <span>PDF</span>
                      <span className="text-[#C5D0C9]">|</span>
                      <span>{fileSize}</span>
                    </p>
                  </div>
                </div>

                {/* Right Badge: CV Received */}
                <div className="flex items-center gap-2 bg-[#EAF5EF] border border-[#CFE6D8] rounded-full px-3 py-1 self-start sm:self-center">
                  <div className="w-4.5 h-4.5 rounded-full bg-[#0E5C3D] flex items-center justify-center shrink-0 text-white">
                    <Check className="w-2.5 h-2.5 stroke-[2.8]" />
                  </div>
                  <div>
                    <span className="block font-bold text-[12px] sm:text-[12.5px] text-[#0D3226] leading-tight">
                      CV Received
                    </span>
                    <span className="block text-[10.5px] text-[#3D5E4C] leading-none mt-0.5">
                      Our AI is now analysing your profile
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 2: Main AI Analysis in Progress Card (Compact) */}
              <div className="rounded-2xl border border-[#E5DFD3] bg-white p-3 sm:p-3.5 px-3.5 sm:px-4.5 shadow-xs relative flex-1 flex flex-col justify-between">
                <div>
                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pb-2 border-b border-[#EFE9DF]">
                    <div>
                      <div className="flex items-center gap-2">
                        {/* 4-point golden star sparkle */}
                        <svg className="w-5 h-5 text-[#C4933F] fill-current shrink-0" viewBox="0 0 24 24">
                          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                        </svg>
                        <h2 className="font-serif text-[17.5px] sm:text-[18.5px] font-bold text-[#0D3226]">
                          AI Analysis in Progress
                        </h2>
                      </div>
                      <p className="mt-0.5 text-[12px] sm:text-[12.5px] font-medium text-[#55695D]">
                        Please wait while we analyze your profile against the job requirements.
                      </p>
                    </div>

                    {/* Estimated time pill */}
                    <div className="flex items-center gap-1.5 text-[#5B6D62] text-[11px] sm:text-[11.5px] font-medium border border-[#E2DCCE] rounded-full px-2.5 py-0.5 bg-[#FAF8F3] self-start sm:self-auto shrink-0 shadow-2xs">
                      <Clock className="w-3.5 h-3.5 text-[#55695D] stroke-[2.4]" />
                      <span>This usually takes 10 – 20 seconds</span>
                    </div>
                  </div>

                  {/* Central Analysis Workspace: 3 Columns (Left steps, Center gauge, Right steps) */}
                  <div className="mt-2.5 sm:mt-3 grid grid-cols-1 md:grid-cols-12 gap-2.5 items-center">
                    {/* Left 3 items (md:col-span-4) */}
                    <div className="md:col-span-4 flex flex-col gap-1.5 sm:gap-2">
                      {/* Item 1: Reading Your CV (Completed) */}
                      <div className="rounded-xl border border-[#E8E3D8] bg-[#FAF8F3] p-1.5 sm:p-2 px-2 sm:px-2.5 flex items-center justify-between shadow-2xs">
                        <div className="flex items-center gap-2 min-w-0">
                          {/* Bold Document Icon in Circular Green Container */}
                          <div className="w-8 h-8 rounded-full bg-[#E5F4EC] flex items-center justify-center shrink-0">
                            <svg
                              className="w-4 h-4 text-[#0E5C3D]"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                              <polyline points="14 2 14 8 20 8" />
                              <line x1="16" y1="13" x2="8" y2="13" />
                              <line x1="16" y1="17" x2="8" y2="17" />
                              <line x1="10" y1="9" x2="8" y2="9" />
                            </svg>
                          </div>
                          <div className="min-w-0">
                            <h4 className="font-bold text-[12px] sm:text-[12.5px] text-[#0D3226] truncate">
                              Reading Your CV
                            </h4>
                            <p className="text-[10px] sm:text-[10.5px] text-[#63756A] truncate">
                              Extracting key information from your profile...
                            </p>
                          </div>
                        </div>
                        <div className="w-4 h-4 rounded-full bg-[#0E5C3D] flex items-center justify-center text-white shrink-0 ml-1">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                      </div>

                      {/* Item 2: Matching Skills (Active) */}
                      <div className="rounded-xl border border-[#D0E6DA] bg-[#F2F8F4] p-1.5 sm:p-2 px-2 sm:px-2.5 flex items-center justify-between shadow-2xs">
                        <div className="flex items-center gap-2 min-w-0">
                          {/* Bold Magnifying Glass with target center in Circular Green Container */}
                          <div className="w-8 h-8 rounded-full bg-[#E5F4EC] flex items-center justify-center shrink-0">
                            <svg
                              className="w-4 h-4 text-[#0E5C3D]"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <circle cx="10.5" cy="10.5" r="7.5" />
                              <line x1="21" y1="21" x2="16" y2="16" />
                              <circle cx="10.5" cy="10.5" r="2.5" fill="currentColor" />
                            </svg>
                          </div>
                          <div className="min-w-0">
                            <h4 className="font-bold text-[12px] sm:text-[12.5px] text-[#0D3226] truncate">
                              Matching Skills
                            </h4>
                            <p className="text-[10px] sm:text-[10.5px] text-[#63756A] truncate">
                              Comparing with job requirements...
                            </p>
                          </div>
                        </div>
                        <div className="w-4 h-4 rounded-full border-2 border-[#0E5C3D] border-t-transparent animate-spin shrink-0 ml-1" />
                      </div>

                      {/* Item 3: Checking Experience (Pending) */}
                      <div className="rounded-xl border border-[#E8E3D8] bg-[#FAF8F3] p-1.5 sm:p-2 px-2 sm:px-2.5 flex items-center justify-between shadow-2xs">
                        <div className="flex items-center gap-2 min-w-0">
                          {/* Solid Bold Briefcase in Circular Green Container */}
                          <div className="w-8 h-8 rounded-full bg-[#E5F4EC] flex items-center justify-center shrink-0">
                            <svg
                              className="w-4 h-4 text-[#0E5C3D]"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M9 3a2 2 0 0 0-2 2v1H4a2 2 0 0 0-2 2v3h20V8a2 2 0 0 0-2-2h-3V5a2 2 0 0 0-2-2H9zm2 2h2v1h-2V5zM2 13v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6h-7v1.5a1.5 1.5 0 0 1-3 0V13H2z" />
                            </svg>
                          </div>
                          <div className="min-w-0">
                            <h4 className="font-bold text-[12px] sm:text-[12.5px] text-[#0D3226] truncate">
                              Checking Experience
                            </h4>
                            <p className="text-[10px] sm:text-[10.5px] text-[#63756A] truncate">
                              Analyzing relevant work experience...
                            </p>
                          </div>
                        </div>
                        <div className="w-4 h-4 rounded-full border-2 border-[#CCD6D0] shrink-0 ml-1" />
                      </div>
                    </div>

                    {/* Center Circle Gauge (md:col-span-4) - Compact & Clean without outside leaves */}
                    <div className="md:col-span-4 flex flex-col items-center justify-center py-0.5 relative">
                      {/* Subtle dashed curved connector lines */}
                      <svg
                        className="hidden md:block absolute -left-3 top-8 w-5 h-8 pointer-events-none stroke-[#A0C0AE]"
                        fill="none"
                      >
                        <path d="M 0 0 C 8 0, 12 10, 18 20" strokeDasharray="3 3" strokeWidth="1.2" />
                      </svg>
                      <svg
                        className="hidden md:block absolute -right-3 top-8 w-5 h-8 pointer-events-none stroke-[#A0C0AE]"
                        fill="none"
                      >
                        <path d="M 18 0 C 10 0, 6 10, 0 20" strokeDasharray="3 3" strokeWidth="1.2" />
                      </svg>

                      {/* SVG Gauge with Green-to-Gold Gradient */}
                      <div className="relative w-[155px] h-[155px] sm:w-[165px] sm:h-[165px] flex items-center justify-center">
                        <svg
                          className="w-full h-full -rotate-90 transform"
                          viewBox="0 0 150 150"
                        >
                          <defs>
                            <linearGradient id="analysisGaugeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#15803D" />
                              <stop offset="55%" stopColor="#22C55E" />
                              <stop offset="100%" stopColor="#EAB308" />
                            </linearGradient>
                          </defs>

                          {/* Background ring */}
                          <circle
                            cx="75"
                            cy="75"
                            r={radius}
                            stroke="#E6EFE9"
                            strokeWidth="7"
                            fill="transparent"
                          />

                          {/* Foreground animated progress ring */}
                          <circle
                            cx="75"
                            cy="75"
                            r={radius}
                            stroke="url(#analysisGaugeGrad)"
                            strokeWidth="7"
                            strokeDasharray={circumference}
                            strokeDashoffset={strokeDashoffset}
                            strokeLinecap="round"
                            fill="transparent"
                            className="transition-all duration-1000 ease-out"
                          />
                        </svg>

                        {/* Content inside circle */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-2">
                          <div className="flex items-center justify-center gap-0.5 text-[#0E5C3D] mb-0.5">
                            <Leaf className="w-3.5 h-3.5 fill-[#0E5C3D] -rotate-45" />
                            <Leaf className="w-3 h-3 fill-[#0E5C3D] rotate-45 scale-x-[-1]" />
                          </div>
                          <span className="font-serif text-[28px] sm:text-[32px] font-bold text-[#0D3226] leading-none tracking-tight">
                            {progress}%
                          </span>
                          <span className="font-bold text-[12.5px] sm:text-[13px] text-[#0E5C3D] mt-0.5">
                            Analyzing...
                          </span>
                          <span className="text-[9.5px] sm:text-[10px] font-medium text-[#65766C] leading-tight max-w-[115px] mt-0.5">
                            Extracting skills, experience and qualifications
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right 3 items (md:col-span-4) */}
                    <div className="md:col-span-4 flex flex-col gap-1.5 sm:gap-2">
                      {/* Item 4: Verifying Education (Pending) */}
                      <div className="rounded-xl border border-[#E8E3D8] bg-[#FAF8F3] p-1.5 sm:p-2 px-2 sm:px-2.5 flex items-center justify-between shadow-2xs">
                        <div className="flex items-center gap-2 min-w-0">
                          {/* Solid Bold Graduation Cap in Circular Green Container */}
                          <div className="w-8 h-8 rounded-full bg-[#E5F4EC] flex items-center justify-center shrink-0">
                            <svg
                              className="w-4 h-4 text-[#0E5C3D]"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
                            </svg>
                          </div>
                          <div className="min-w-0">
                            <h4 className="font-bold text-[12px] sm:text-[12.5px] text-[#0D3226] truncate">
                              Verifying Education
                            </h4>
                            <p className="text-[10px] sm:text-[10.5px] text-[#63756A] truncate">
                              Checking qualifications and certifications...
                            </p>
                          </div>
                        </div>
                        <div className="w-4 h-4 rounded-full border-2 border-[#CCD6D0] shrink-0 ml-1" />
                      </div>

                      {/* Item 5: Analyzing Competencies (Pending) */}
                      <div className="rounded-xl border border-[#E8E3D8] bg-[#FAF8F3] p-1.5 sm:p-2 px-2 sm:px-2.5 flex items-center justify-between shadow-2xs">
                        <div className="flex items-center gap-2 min-w-0">
                          {/* Solid Bold Gear/Cog in Circular Green Container */}
                          <div className="w-8 h-8 rounded-full bg-[#E5F4EC] flex items-center justify-center shrink-0">
                            <Settings className="w-4 h-4 text-[#0E5C3D] fill-[#0E5C3D] stroke-[2.2]" />
                          </div>
                          <div className="min-w-0">
                            <h4 className="font-bold text-[12px] sm:text-[12.5px] text-[#0D3226] truncate">
                              Analyzing Competencies
                            </h4>
                            <p className="text-[10px] sm:text-[10.5px] text-[#63756A] truncate">
                              Assessing role-specific skills and expertise...
                            </p>
                          </div>
                        </div>
                        <div className="w-4 h-4 rounded-full border-2 border-[#CCD6D0] shrink-0 ml-1" />
                      </div>

                      {/* Item 6: Calculating Match Score (Pending) */}
                      <div className="rounded-xl border border-[#E8E3D8] bg-[#FAF8F3] p-1.5 sm:p-2 px-2 sm:px-2.5 flex items-center justify-between shadow-2xs">
                        <div className="flex items-center gap-2 min-w-0">
                          {/* Solid Bold 3-Bar Chart in Circular Green Container */}
                          <div className="w-8 h-8 rounded-full bg-[#E5F4EC] flex items-center justify-center shrink-0">
                            <svg
                              className="w-4 h-4 text-[#0E5C3D]"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <rect x="3" y="13" width="4.5" height="8" rx="1.5" />
                              <rect x="9.75" y="8" width="4.5" height="13" rx="1.5" />
                              <rect x="16.5" y="3" width="4.5" height="18" rx="1.5" />
                            </svg>
                          </div>
                          <div className="min-w-0">
                            <h4 className="font-bold text-[12px] sm:text-[12.5px] text-[#0D3226] truncate">
                              Calculating Match Score
                            </h4>
                            <p className="text-[10px] sm:text-[10.5px] text-[#63756A] truncate">
                              Generating eligibility score...
                            </p>
                          </div>
                        </div>
                        <div className="w-4 h-4 rounded-full border-2 border-[#CCD6D0] shrink-0 ml-1" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Alert Banner: Please keep this page open (Compact) */}
                <div className="mt-3 rounded-xl border border-[#CCE2D4] bg-[#EBF6EF] p-2.5 sm:p-2.5 px-3 sm:px-3.5 flex items-start sm:items-center justify-between gap-2.5 relative overflow-hidden">
                  <div className="flex items-start sm:items-center gap-2.5 z-10">
                    <div className="w-7 h-7 rounded-full bg-[#FCECD0] border border-[#F5DCAC] flex items-center justify-center shrink-0 shadow-2xs">
                      <Lightbulb className="w-3.5 h-3.5 text-[#D4881A]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[12.5px] sm:text-[13px] text-[#0E5C3D]">
                        Please keep this page open
                      </h4>
                      <p className="text-[11px] sm:text-[11.5px] font-medium text-[#406150] leading-snug">
                        Do not refresh or close this page while the analysis is in progress. You will be automatically redirected to the next step once the analysis is complete.
                      </p>
                    </div>
                  </div>

                  {/* Corner leaf sprig decoration */}
                  <div className="absolute -bottom-3 -right-2 w-12 sm:w-14 pointer-events-none select-none opacity-80">
                    <Image
                      src="/car2/03_botanical_leaf_decoration.png"
                      alt=""
                      width={60}
                      height={60}
                      unoptimized
                      className="w-full h-auto object-contain rotate-12"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* -----------------------------------------------------------------
                RIGHT COLUMN (4 cols): Unified Card (Top Banner + Middle + Timeline + Zen Stones)
                Decreased height & matches bottom baseline with Left Column
                ----------------------------------------------------------------- */}
            <div className="lg:col-span-4 flex flex-col h-full">
              {/* Unified Right Sidebar Card */}
              <div className="rounded-2xl border border-[#E5DFD3] bg-white shadow-xs flex flex-col justify-between h-full relative overflow-visible">
                <div>
                  {/* 1. Header Banner (Image 2): Together for a Healthier Tomorrow (Compact height) */}
                  <div className="h-[120px] sm:h-[135px] w-full relative overflow-hidden rounded-t-2xl bg-[#092B1F] shrink-0">
                    <Image
                      src="/car2/02_dark_herbal_mortar_banner.png"
                      alt="Together for a Healthier Tomorrow"
                      fill
                      unoptimized
                      priority
                      className="object-cover object-right sm:object-center"
                    />
                    {/* Dark green gradient overlay on left for typography readability */}
                    <div className="absolute inset-y-0 left-0 w-3/5 bg-gradient-to-r from-[#07241A] via-[#07241A]/85 to-transparent flex flex-col justify-center pl-3.5 sm:pl-4 z-10">
                      <p className="font-serif italic text-white text-[16.5px] sm:text-[18.5px] font-semibold leading-[1.15] drop-shadow-sm tracking-wide">
                        Together
                        <br />
                        <span className="text-[12px] sm:text-[13px] font-normal italic">for a</span>{" "}
                        Healthier
                        <br />
                        Tomorrow
                      </p>
                      <div className="mt-0.5 h-[2px] w-8 bg-gradient-to-r from-[#D4AF37] to-transparent rounded-full" />
                    </div>
                  </div>

                  {/* 2. Position Applied For Section */}
                  <div className="p-3 px-3.5 sm:px-4 pb-2 flex flex-col gap-1.5 relative z-20">
                    <div className="flex items-center gap-2">
                      {/* Doctor avatar badge */}
                      <div className="w-8 h-8 rounded-full bg-[#EAF5EF] border border-[#CCE2D4] flex items-center justify-center shrink-0 shadow-2xs">
                        <Stethoscope className="w-4 h-4 text-[#0E5C3D]" />
                      </div>
                      <div>
                        <span className="block text-[10.5px] sm:text-[11px] font-medium text-[#65766C]">
                          Position Applied For
                        </span>
                        <h3 className="font-serif text-[16px] sm:text-[17px] font-bold text-[#0D3226] leading-tight">
                          {roleTitle}
                        </h3>
                      </div>
                    </div>

                    {/* Meta items row */}
                    <div className="flex flex-wrap items-center gap-2 text-[11px] sm:text-[11.5px] font-medium text-[#4D6054] pt-0.5">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#A37B4D]" />
                        {location}
                      </span>
                      <span className="text-[#D0DBD3]">•</span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-3 h-3 text-[#A37B4D]" />
                        {employmentType}
                      </span>
                      <span className="text-[#D0DBD3]">•</span>
                      <span className="flex items-center gap-1">
                        <BarChart2 className="w-3 h-3 text-[#A37B4D]" />
                        {qualification}
                      </span>
                    </div>
                  </div>

                  {/* Divider Line */}
                  <div className="mx-3.5 sm:mx-4 h-[1px] bg-[#EFE9DF]" />

                  {/* 3. What Happens Next? Section */}
                  <div className="p-3 px-3.5 sm:px-4 pt-2 flex flex-col relative z-20">
                    <h3 className="font-serif text-[16px] sm:text-[17px] font-bold text-[#0D3226] mb-2">
                      What Happens Next?
                    </h3>

                    {/* Vertical Timeline */}
                    <div className="space-y-1.5 sm:space-y-2 max-w-[200px] sm:max-w-[220px]">
                      {/* Step 1: AI Profile Analysis (Active) */}
                      <div className="flex items-start gap-2 relative">
                        <div className="flex flex-col items-center">
                          <div className="w-4.5 h-4.5 rounded-full bg-[#0E5C3D] text-white text-[10px] font-bold flex items-center justify-center shrink-0 z-10 shadow-2xs">
                            1
                          </div>
                          <div className="w-[1.5px] h-6 border-l-2 border-dashed border-[#8EB29E] mt-0.5" />
                        </div>
                        <div className="pt-0">
                          <h4 className="font-bold text-[12px] sm:text-[12.5px] text-[#0D3226]">
                            AI Profile Analysis
                          </h4>
                          <p className="text-[10.5px] sm:text-[11px] text-[#55695D] leading-snug mt-0.5">
                            We analyze your CV for relevant skills, qualifications and experience.
                          </p>
                        </div>
                      </div>

                      {/* Step 2: Review Your Details */}
                      <div className="flex items-start gap-2 relative">
                        <div className="flex flex-col items-center">
                          <div className="w-4.5 h-4.5 rounded-full bg-[#B1BCB6] text-white text-[10px] font-bold flex items-center justify-center shrink-0 z-10">
                            2
                          </div>
                          <div className="w-[1.5px] h-6 border-l-2 border-dashed border-[#C5D3CB] mt-0.5" />
                        </div>
                        <div className="pt-0">
                          <h4 className="font-bold text-[12px] sm:text-[12.5px] text-[#0D3226]">
                            Review Your Details
                          </h4>
                          <p className="text-[10.5px] sm:text-[11px] text-[#55695D] leading-snug mt-0.5">
                            You may be asked to verify or add additional information if required.
                          </p>
                        </div>
                      </div>

                      {/* Step 3: Application Submission */}
                      <div className="flex items-start gap-2 relative">
                        <div className="flex flex-col items-center">
                          <div className="w-4.5 h-4.5 rounded-full bg-[#B1BCB6] text-white text-[10px] font-bold flex items-center justify-center shrink-0 z-10">
                            3
                          </div>
                          <div className="w-[1.5px] h-6 border-l-2 border-dashed border-[#C5D3CB] mt-0.5" />
                        </div>
                        <div className="pt-0">
                          <h4 className="font-bold text-[12px] sm:text-[12.5px] text-[#0D3226]">
                            Application Submission
                          </h4>
                          <p className="text-[10.5px] sm:text-[11px] text-[#55695D] leading-snug mt-0.5">
                            Once confirmed, your application will be submitted to our team.
                          </p>
                        </div>
                      </div>

                      {/* Step 4: Confirmation */}
                      <div className="flex items-start gap-2">
                        <div className="flex flex-col items-center">
                          <div className="w-4.5 h-4.5 rounded-full bg-[#B1BCB6] text-white text-[10px] font-bold flex items-center justify-center shrink-0 z-10">
                            4
                          </div>
                        </div>
                        <div className="pt-0">
                          <h4 className="font-bold text-[12px] sm:text-[12.5px] text-[#0D3226]">
                            Confirmation
                          </h4>
                          <p className="text-[10.5px] sm:text-[11px] text-[#55695D] leading-snug mt-0.5">
                            You will receive a confirmation email with your application details.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. Zen Stones & Botanical Leaves Graphic on Page Right Side */}
                <div className="absolute -bottom-4 -right-10 sm:-bottom-5 sm:-right-12 lg:-bottom-6 lg:-right-16 xl:-right-20 w-[180px] sm:w-[210px] md:w-[235px] lg:w-[250px] pointer-events-none select-none z-10">
                  <Image
                    src="/car2/04_zen_stones_and_leaves.png"
                    alt="Authentic Ayurveda Zen Stones and Leaves"
                    width={260}
                    height={330}
                    unoptimized
                    priority
                    className="w-full h-auto object-contain object-right-bottom drop-shadow-xs"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 6. FOOTER */}
      <Footer />
    </div>
  );
}

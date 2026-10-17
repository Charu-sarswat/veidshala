"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Download,
  Eye,
  RotateCw,
  Edit2,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Building,
  Briefcase,
  GraduationCap,
  Bookmark,
  Lock,
  Leaf,
  Users,
  FileText,
  Target,
  Sparkles,
  BarChart2,
  CheckCircle2,
  User,
} from "lucide-react";
import CareersNavbar from "@/components/careers/CareersNavbar";
import Footer from "@/components/Footer";

interface AIScreeningResultViewProps {
  candidateName?: string;
  candidateRole?: string;
  email?: string;
  phone?: string;
  location?: string;
  dob?: string;
  gender?: string;
  linkedin?: string;
  fileName?: string;
  fileSize?: string;
  uploadDate?: string;
  jobTitle?: string;
  organization?: string;
  employmentType?: string;
  experienceRequired?: string;
  qualification?: string;
  joiningPreference?: string;
  matchScore?: number;
}

export default function AIScreeningResultView({
  candidateName = "Vijay Sharma",
  candidateRole = "Ayurvedic Doctor",
  email = "vijay.sharma@gmail.com",
  phone = "+91 98765 43210",
  location = "Delhi NCR",
  dob = "14 Nov 1995",
  gender = "Male",
  linkedin = "linkedin.com/in/vijay-sharma",
  fileName = "Vijay_Sharma_CV.pdf",
  fileSize = "842 KB",
  uploadDate = "17 Oct 2026, 10:24 AM",
  jobTitle = "Ayurvedic Doctor",
  organization = "Vaidhyashala Clinic",
  employmentType = "Full Time",
  experienceRequired = "2 – 5 Years",
  qualification = "BAMS / MD (Ayurveda)",
  joiningPreference = "Within 1 Month",
  matchScore = 85,
}: AIScreeningResultViewProps) {
  const [savedForLater, setSavedForLater] = useState(false);

  // SVG Gauge Calculations for compact 78px gauge (radius 32)
  const radius = 32;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * matchScore) / 100;

  return (
    <div className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-[#FAF7F2] text-[#22332A] flex flex-col font-sans">
      {/* 1. TOP NAVBAR (Matches Image2 with leaves & gold underline) */}
      <CareersNavbar />

      {/* 2. COMPACT HERO BANNER: Application in Progress / Screening Result */}
      <section className="relative w-full overflow-hidden bg-[#FAF7F2] border-b border-[#ECE6DB] min-h-[96px] sm:min-h-[110px] lg:min-h-[120px] flex items-center z-10">
        {/* Full-bleed Background Image on Right */}
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

        {/* Script Slogan on Far Right */}
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
                AI Screening Result
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
              AI Screening Result
            </h1>
            <p className="text-[11.5px] sm:text-[12px] font-medium text-[#4A5E52] max-w-lg">
              Here is your profile match and analysis for the applied position.
            </p>
          </div>
        </div>
      </section>

      {/* 3. MAIN TWO-COLUMN CONTENT GRID: Stepper & Left Cards align with Right Card */}
      <main className="relative flex-1 z-10 pb-4 pt-1 sm:pt-1.5">
        <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-2.5 sm:gap-3 items-start">
            {/* =================================================================
                LEFT COLUMN (8 cols):
                1. Process Stepper (Exact same width & arrangement as previous page)
                2. Eligibility Banner Card ("Great News, Dr. Ananya!" with ai1.png)
                3. Mid Row: Your Profile Match Card + Key Requirements Card
                4. Match Breakdown Card
                ================================================================= */}
            <div className="lg:col-span-8 flex flex-col gap-2.5 sm:gap-3">
              {/* Process Stepper: Matches Previous Page in Width, Spacing, and Alignment */}
              <div className="w-full pt-0.5 pb-0.5 px-3 sm:px-4">
                <div className="flex items-center justify-between w-full">
                  {/* Step 1: Upload CV (Completed) */}
                  <Link
                    href={`/careers/apply?role=${encodeURIComponent(jobTitle)}`}
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

                  {/* Step 2: AI Analysis (Completed) */}
                  <Link
                    href={`/careers/apply/cv-analysis?role=${encodeURIComponent(jobTitle)}`}
                    className="flex flex-col items-center text-center group cursor-pointer shrink-0"
                  >
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#0E5C3D] flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
                      <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.8]" />
                    </div>
                    <div className="mt-1 text-center">
                      <span className="block font-bold text-[12px] sm:text-[12.5px] text-[#0D3226] group-hover:text-[#0E5C3D]">
                        AI Analysis
                      </span>
                      <span className="block text-[10.5px] text-[#697A70] font-normal">
                        Completed
                      </span>
                    </div>
                  </Link>

                  {/* Connecting Bar 2 -> 3 (Green) */}
                  <div className="flex-1 min-w-[28px] sm:min-w-[44px] mx-2 sm:mx-3 mb-4.5 h-[2px] bg-[#0E5C3D]" />

                  {/* Step 3: Eligibility Result (Current Step - Active) */}
                  <div className="flex flex-col items-center text-center shrink-0">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#0E5C3D] flex items-center justify-center text-white font-bold text-[11.5px] sm:text-[12px] shadow-xs ring-4 ring-[#0E5C3D]/15">
                      3
                    </div>
                    <div className="mt-1 text-center">
                      <span className="block font-bold text-[12px] sm:text-[12.5px] text-[#0D3226]">
                        Eligibility Result
                      </span>
                      <span className="block text-[10.5px] font-semibold text-[#0E5C3D]">
                        Current Step
                      </span>
                    </div>
                  </div>

                  {/* Connecting Bar 3 -> 4 (Gray) */}
                  <div className="flex-1 min-w-[28px] sm:min-w-[44px] mx-2 sm:mx-3 mb-4.5 h-[2px] bg-[#D4DCD7]" />

                  {/* Step 4: Apply for Job (Next) */}
                  <div className="flex flex-col items-center text-center shrink-0">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border border-[#C8D3CC] bg-white flex items-center justify-center text-[#788880] font-semibold text-[11.5px] sm:text-[12px]">
                      4
                    </div>
                    <div className="mt-1 text-center">
                      <span className="block font-medium text-[12px] sm:text-[12.5px] text-[#6E7F75]">
                        Apply for Job
                      </span>
                      <span className="block text-[10.5px] text-[#93A198] font-normal">
                        Next
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 1: Eligibility Banner ("Great News, Dr. Ananya!") with ai1.png as WHOLE BACKGROUND */}
              <div className="rounded-2xl border border-[#E5DFD3] shadow-xs overflow-hidden relative min-h-[195px] sm:min-h-[210px] flex items-center">
                {/* Full Card Background Image: ai1.png */}
                <Image
                  src="/aisc/ai1.png"
                  alt="Dr. Ananya"
                  fill
                  priority
                  unoptimized
                  className="object-cover object-left select-none pointer-events-none"
                />

                {/* Soft gradient overlay: Clear over Dr. Ananya on left, soft readable cream on right */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FAF8F3]/75 to-[#FAF8F3]/95 sm:via-[#FAF8F3]/65 sm:to-[#FAF8F3]/95 select-none pointer-events-none" />

                {/* VERIFIED DOCTOR badge on bottom-left */}
                <div className="absolute bottom-2.5 left-3 sm:left-4 z-20">
                  <span className="inline-block bg-[#0E5C3D] text-white text-[9px] sm:text-[9.5px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                    VERIFIED DOCTOR
                  </span>
                </div>

                {/* Card Content Right Aligned */}
                <div className="relative z-20 w-full p-3 sm:p-3.5 px-3.5 sm:px-5 flex flex-col justify-between ml-auto md:max-w-[66%] lg:max-w-[62%]">
                  {/* Slogan top-right */}
                  <div className="flex justify-between items-start gap-2">
                    <h2 className="font-serif text-[20px] sm:text-[23px] font-bold text-[#0D3226] leading-tight">
                      Great News,
                      <br />
                      <span className="text-[#0E5C3D]">Dr. Ananya!</span>
                    </h2>
                    <div className="text-right select-none pl-2 shrink-0">
                      <p className="font-serif italic text-[13.5px] sm:text-[14.5px] font-semibold text-[#0E5C3D] leading-tight flex items-center justify-end gap-1">
                        <span>Together</span>
                        <Leaf className="w-3.5 h-3.5 fill-[#0E5C3D] -rotate-12 inline-block" />
                      </p>
                      <p className="font-serif italic text-[10.5px] sm:text-[11px] text-[#55695D]">
                        for a Healthier Tomorrow
                      </p>
                    </div>
                  </div>

                  <p className="font-bold text-[12.5px] sm:text-[13px] text-[#0E5C3D] mt-1">
                    You are eligible to apply for this position.
                  </p>

                  <p className="text-[11px] sm:text-[11.5px] text-[#55695D] leading-snug mt-1 max-w-xl">
                    Your profile meets the key requirements for Ayurvedic Doctor at Vaidhyashala. We encourage you to complete your application and join our mission of making authentic Ayurveda accessible to more people.
                  </p>

                  {/* Buttons Row */}
                  <div className="flex flex-wrap items-center gap-2 mt-2 pt-0.5">
                    <Link
                      href="/careers/apply"
                      className="bg-[#0E5C3D] hover:bg-[#0A472E] text-white px-4 py-1.5 rounded-xl font-bold text-[11.5px] sm:text-[12px] flex items-center gap-1.5 shadow-xs transition-colors"
                    >
                      <span>Continue &amp; Apply for This Job</span>
                      <ArrowRight className="w-3.5 h-3.5 stroke-[2.4]" />
                    </Link>

                    <button
                      type="button"
                      onClick={() => alert("Downloading screening report...")}
                      className="border border-[#CCD6D0] bg-white/90 hover:bg-white text-[#0D3226] px-3 py-1.5 rounded-xl font-semibold text-[11px] sm:text-[11.5px] flex items-center gap-1.5 shadow-2xs transition-colors cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5 text-[#0E5C3D] stroke-[2.2]" />
                      <span>Download Result (PDF)</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 2: Mid Row (Your Profile Match + Key Requirements) - Compact */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 sm:gap-3">
                {/* 2A: Your Profile Match (5 cols) */}
                <div className="md:col-span-5 rounded-2xl border border-[#E5DFD3] bg-white p-2.5 sm:p-3 px-3 sm:px-3.5 shadow-xs flex flex-col justify-between">
                  <div className="flex items-center gap-2 border-b border-[#EFE9DF] pb-1.5">
                    <div className="w-6 h-6 rounded-full bg-[#E5F4EC] flex items-center justify-center shrink-0">
                      <BarChart2 className="w-3 h-3 text-[#0E5C3D] stroke-[2.4]" />
                    </div>
                    <h3 className="font-bold text-[13px] sm:text-[13.5px] text-[#0D3226]">
                      Your Profile Match
                    </h3>
                  </div>

                  {/* Gauge and Legend */}
                  <div className="flex items-center justify-between gap-2 pt-1.5">
                    {/* Circular Score Gauge (Compact 78px) */}
                    <div className="relative w-[78px] h-[78px] shrink-0 flex items-center justify-center">
                      <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 80 80">
                        <circle
                          cx="40"
                          cy="40"
                          r={radius}
                          stroke="#E6EFE9"
                          strokeWidth="7"
                          fill="transparent"
                        />
                        <circle
                          cx="40"
                          cy="40"
                          r={radius}
                          stroke="#0E5C3D"
                          strokeWidth="7"
                          strokeDasharray={circumference}
                          strokeDashoffset={strokeDashoffset}
                          strokeLinecap="round"
                          fill="transparent"
                          className="transition-all duration-1000 ease-out"
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                        <span className="font-serif text-[19px] font-bold text-[#0D3226] leading-none">
                          {matchScore}%
                        </span>
                        <span className="text-[8.5px] font-bold text-[#65766C] mt-0.5">
                          Match Score
                        </span>
                      </div>
                    </div>

                    {/* Legend */}
                    <div className="space-y-1 text-[10px] sm:text-[10.5px]">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0E5C3D] shrink-0" />
                        <span className="text-[#55695D]">70 – 100%</span>
                        <span className="font-bold text-[#0D3226]">Strong Match</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#EAB308] shrink-0" />
                        <span className="text-[#55695D]">50 – 69%</span>
                        <span className="font-medium text-[#55695D]">Moderate Match</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] shrink-0" />
                        <span className="text-[#55695D]">Below 50%</span>
                        <span className="font-medium text-[#55695D]">Not Eligible</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2B: You Meet the Key Requirements (7 cols) - Compact */}
                <div className="md:col-span-7 rounded-2xl border border-[#E5DFD3] bg-white p-2.5 sm:p-3 px-3 sm:px-3.5 shadow-xs flex flex-col justify-between">
                  <div className="flex items-center gap-2 border-b border-[#EFE9DF] pb-1.5">
                    <div className="w-6 h-6 rounded-full bg-[#E5F4EC] flex items-center justify-center shrink-0">
                      <Target className="w-3 h-3 text-[#0E5C3D] stroke-[2.4]" />
                    </div>
                    <h3 className="font-bold text-[13px] sm:text-[13.5px] text-[#0D3226]">
                      You Meet the Key Requirements
                    </h3>
                  </div>

                  {/* Checklist items */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2.5 gap-y-1 pt-1.5">
                    {[
                      "Relevant Ayurvedic clinical experience",
                      "Knowledge of Panchkarma therapies",
                      "Patient consultation and treatment planning skills",
                      "Good communication and counseling skills",
                      "Documentation and medical record keeping",
                      "Willing to work from Delhi NCR",
                    ].map((req, idx) => (
                      <div key={idx} className="flex items-start gap-1.5">
                        <div className="w-3.5 h-3.5 rounded-full bg-[#0E5C3D] flex items-center justify-center text-white shrink-0 mt-0.5">
                          <Check className="w-2 h-2 stroke-[3]" />
                        </div>
                        <span className="text-[10px] sm:text-[10.5px] font-medium text-[#3D5045] leading-snug">
                          {req}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card 3: Match Breakdown (Compact) */}
              <div className="rounded-2xl border border-[#E5DFD3] bg-white p-2.5 sm:p-3 px-3 sm:px-4 shadow-xs">
                <div className="flex items-center gap-2 border-b border-[#EFE9DF] pb-1.5">
                  <div className="w-6 h-6 rounded-full bg-[#E5F4EC] flex items-center justify-center shrink-0">
                    <BarChart2 className="w-3 h-3 text-[#0E5C3D] stroke-[2.4]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[13px] sm:text-[13.5px] text-[#0D3226]">
                      Match Breakdown
                    </h3>
                    <p className="text-[10px] sm:text-[10.5px] text-[#63756A]">
                      Here&apos;s how your profile aligns with the job requirements:
                    </p>
                  </div>
                </div>

                {/* 2-Column Progress Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-1.5 pt-2">
                  {/* Item 1: Educational Qualification (100%) */}
                  <div>
                    <div className="flex items-center justify-between text-[11.5px] sm:text-[12px]">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5.5 h-5.5 rounded-full bg-[#E5F4EC] flex items-center justify-center text-[#0E5C3D] shrink-0">
                          <GraduationCap className="w-3 h-3 stroke-[2.4]" />
                        </div>
                        <div>
                          <span className="font-bold text-[#0D3226] block leading-tight">Educational Qualification</span>
                          <span className="text-[9.5px] text-[#63756A]">BAMS / MD (Ayurveda)</span>
                        </div>
                      </div>
                      <span className="font-bold text-[11.5px] text-[#0D3226]">100%</span>
                    </div>
                    <div className="mt-1 h-1.5 w-full bg-[#EAE5DA] rounded-full overflow-hidden">
                      <div className="h-full bg-[#0E5C3D] rounded-full" style={{ width: "100%" }} />
                    </div>
                  </div>

                  {/* Item 2: Patient Counselling Skills (90%) */}
                  <div>
                    <div className="flex items-center justify-between text-[11.5px] sm:text-[12px]">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5.5 h-5.5 rounded-full bg-[#E5F4EC] flex items-center justify-center text-[#0E5C3D] shrink-0">
                          <Users className="w-3 h-3 stroke-[2.4]" />
                        </div>
                        <div>
                          <span className="font-bold text-[#0D3226] block leading-tight">Patient Counselling Skills</span>
                          <span className="text-[9.5px] text-[#63756A]">Lifestyle &amp; Diet Guidance</span>
                        </div>
                      </div>
                      <span className="font-bold text-[11.5px] text-[#0D3226]">90%</span>
                    </div>
                    <div className="mt-1 h-1.5 w-full bg-[#EAE5DA] rounded-full overflow-hidden">
                      <div className="h-full bg-[#0E5C3D] rounded-full" style={{ width: "90%" }} />
                    </div>
                  </div>

                  {/* Item 3: Relevant Experience (85%) */}
                  <div>
                    <div className="flex items-center justify-between text-[11.5px] sm:text-[12px]">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5.5 h-5.5 rounded-full bg-[#E5F4EC] flex items-center justify-center text-[#0E5C3D] shrink-0">
                          <Briefcase className="w-3 h-3 stroke-[2.4]" />
                        </div>
                        <div>
                          <span className="font-bold text-[#0D3226] block leading-tight">Relevant Experience</span>
                          <span className="text-[9.5px] text-[#63756A]">Ayurvedic Consultation &amp; Treatment</span>
                        </div>
                      </div>
                      <span className="font-bold text-[11.5px] text-[#0D3226]">85%</span>
                    </div>
                    <div className="mt-1 h-1.5 w-full bg-[#EAE5DA] rounded-full overflow-hidden">
                      <div className="h-full bg-[#0E5C3D] rounded-full" style={{ width: "85%" }} />
                    </div>
                  </div>

                  {/* Item 4: Documentation (75%) */}
                  <div>
                    <div className="flex items-center justify-between text-[11.5px] sm:text-[12px]">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5.5 h-5.5 rounded-full bg-[#E5F4EC] flex items-center justify-center text-[#0E5C3D] shrink-0">
                          <FileText className="w-3 h-3 stroke-[2.4]" />
                        </div>
                        <div>
                          <span className="font-bold text-[#0D3226] block leading-tight">Documentation</span>
                          <span className="text-[9.5px] text-[#63756A]">Medical Records &amp; Reporting</span>
                        </div>
                      </div>
                      <span className="font-bold text-[11.5px] text-[#0D3226]">75%</span>
                    </div>
                    <div className="mt-1 h-1.5 w-full bg-[#EAE5DA] rounded-full overflow-hidden">
                      <div className="h-full bg-[#0E5C3D] rounded-full" style={{ width: "75%" }} />
                    </div>
                  </div>

                  {/* Item 5: Panchkarma Knowledge (80%) */}
                  <div>
                    <div className="flex items-center justify-between text-[11.5px] sm:text-[12px]">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5.5 h-5.5 rounded-full bg-[#E5F4EC] flex items-center justify-center text-[#0E5C3D] shrink-0">
                          <Leaf className="w-3 h-3 stroke-[2.4]" />
                        </div>
                        <div>
                          <span className="font-bold text-[#0D3226] block leading-tight">Panchkarma Knowledge</span>
                          <span className="text-[9.5px] text-[#63756A]">Therapies &amp; Procedures</span>
                        </div>
                      </div>
                      <span className="font-bold text-[11.5px] text-[#0D3226]">80%</span>
                    </div>
                    <div className="mt-1 h-1.5 w-full bg-[#EAE5DA] rounded-full overflow-hidden">
                      <div className="h-full bg-[#0E5C3D] rounded-full" style={{ width: "80%" }} />
                    </div>
                  </div>

                  {/* Item 6: Role Fit (80%) */}
                  <div>
                    <div className="flex items-center justify-between text-[11.5px] sm:text-[12px]">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5.5 h-5.5 rounded-full bg-[#E5F4EC] flex items-center justify-center text-[#0E5C3D] shrink-0">
                          <Target className="w-3 h-3 stroke-[2.4]" />
                        </div>
                        <div>
                          <span className="font-bold text-[#0D3226] block leading-tight">Role Fit</span>
                          <span className="text-[9.5px] text-[#63756A]">Clinical Knowledge, Empathy, Communication</span>
                        </div>
                      </div>
                      <span className="font-bold text-[11.5px] text-[#0D3226]">80%</span>
                    </div>
                    <div className="mt-1 h-1.5 w-full bg-[#EAE5DA] rounded-full overflow-hidden">
                      <div className="h-full bg-[#0E5C3D] rounded-full" style={{ width: "80%" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================================
                RIGHT COLUMN (4 cols):
                1. Your Profile Card (Photo + Contact Info) - Compact
                2. Your CV Card (File + View/Upload actions) - Compact
                3. Job Summary Card (Details + CTAs + Security lock footer) - Compact
                ================================================================= */}
            <div className="lg:col-span-4 flex flex-col gap-2.5 sm:gap-3">
              {/* Card 1: Your Profile (Compact) */}
              <div className="rounded-2xl border border-[#E5DFD3] bg-white p-2.5 sm:p-3 px-3 sm:px-3.5 shadow-xs">
                <div className="flex items-center justify-between border-b border-[#EFE9DF] pb-1.5">
                  <h3 className="font-bold text-[13px] sm:text-[13.5px] text-[#0D3226]">
                    Your Profile
                  </h3>
                  <Link
                    href="/careers/apply"
                    className="flex items-center gap-1 text-[10.5px] font-semibold text-[#0E5C3D] hover:underline"
                  >
                    <Edit2 className="w-2.5 h-2.5" />
                    <span>Edit</span>
                  </Link>
                </div>

                <div className="flex items-start gap-2.5 pt-2">
                  {/* Candidate Avatar Slot */}
                  <div className="w-12 h-12 rounded-xl overflow-hidden bg-[#E2ECE5] shrink-0 border border-[#CCD6D0] flex items-center justify-center relative">
                    <User className="w-6 h-6 text-[#8AA898]" />
                  </div>

                  {/* Profile info fields */}
                  <div className="space-y-0.5 min-w-0 flex-1">
                    <h4 className="font-serif font-bold text-[14px] sm:text-[14.5px] text-[#0D3226] leading-tight truncate">
                      {candidateName}
                    </h4>

                    <div className="space-y-0.5 text-[10px] sm:text-[10.5px] text-[#55695D] pt-0.5">
                      <p className="flex items-center gap-1.5 truncate">
                        <Mail className="w-2.5 h-2.5 text-[#0E5C3D] shrink-0" />
                        <span className="truncate">{email}</span>
                      </p>
                      <p className="flex items-center gap-1.5 truncate">
                        <Phone className="w-2.5 h-2.5 text-[#0E5C3D] shrink-0" />
                        <span>{phone}</span>
                      </p>
                      <p className="flex items-center gap-1.5 truncate">
                        <MapPin className="w-2.5 h-2.5 text-[#0E5C3D] shrink-0" />
                        <span>{location}</span>
                      </p>
                      <p className="flex items-center gap-1.5 truncate">
                        <Calendar className="w-2.5 h-2.5 text-[#0E5C3D] shrink-0" />
                        <span>{dob}</span>
                        <span className="text-[#C5D0C9]">|</span>
                        <span>{gender}</span>
                      </p>
                      <p className="flex items-center gap-1.5 truncate">
                        <svg className="w-2.5 h-2.5 fill-[#0E5C3D] shrink-0" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.738-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                        <span className="truncate">{linkedin}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Your CV (Compact) */}
              <div className="rounded-2xl border border-[#E5DFD3] bg-white p-2.5 sm:p-3 px-3 sm:px-3.5 shadow-xs">
                <h3 className="font-bold text-[13px] sm:text-[13.5px] text-[#0D3226] mb-1.5">
                  Your CV
                </h3>

                <div className="rounded-xl border border-[#E8E3D8] bg-[#FAF8F3] p-2 flex items-start gap-2">
                  <div className="w-8 h-8 rounded-lg bg-white border border-[#CFE6D8] flex items-center justify-center text-[#0E5C3D] shrink-0 relative shadow-2xs">
                    <FileText className="w-4 h-4 stroke-[2.2]" />
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#0E5C3D] flex items-center justify-center text-white">
                      <Check className="w-1.5 h-1.5 stroke-[3]" />
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-[12px] sm:text-[12.5px] text-[#0D3226] truncate">
                      {fileName}
                    </h4>
                    <p className="text-[9.5px] text-[#63756A] mt-0.5">
                      {fileSize} &nbsp;|&nbsp; {uploadDate}
                    </p>

                    <div className="flex items-center gap-2.5 mt-1 text-[10px] sm:text-[10.5px] font-semibold text-[#0E5C3D]">
                      <button
                        type="button"
                        onClick={() => alert(`Opening ${fileName}`)}
                        className="flex items-center gap-1 hover:underline cursor-pointer"
                      >
                        <Eye className="w-2.5 h-2.5 stroke-[2.2]" />
                        <span>View File</span>
                      </button>

                      <Link
                        href={`/careers/apply?role=${encodeURIComponent(jobTitle)}`}
                        className="flex items-center gap-1 hover:underline cursor-pointer"
                      >
                        <RotateCw className="w-2.5 h-2.5 stroke-[2.2]" />
                        <span>Upload Different CV</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Job Summary (Compact) */}
              <div className="rounded-2xl border border-[#E5DFD3] bg-white p-2.5 sm:p-3 px-3 sm:px-3.5 shadow-xs">
                <div className="flex items-center justify-between border-b border-[#EFE9DF] pb-1.5">
                  <h3 className="font-bold text-[13px] sm:text-[13.5px] text-[#0D3226]">
                    Job Summary
                  </h3>
                  <Link
                    href="/careers"
                    className="flex items-center gap-1 text-[10.5px] font-semibold text-[#0E5C3D] hover:underline"
                  >
                    <Edit2 className="w-2.5 h-2.5" />
                    <span>Edit</span>
                  </Link>
                </div>

                {/* Job meta fields */}
                <div className="space-y-1 pt-1.5 text-[10.5px] sm:text-[11px]">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-1.5 text-[#55695D]">
                      <Building className="w-2.5 h-2.5 text-[#0E5C3D] shrink-0" />
                      <span>Position</span>
                    </div>
                    <span className="font-bold text-[#0D3226] text-right">{jobTitle}</span>
                  </div>

                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-1.5 text-[#55695D]">
                      <Building className="w-2.5 h-2.5 text-[#0E5C3D] shrink-0" />
                      <span>Organization</span>
                    </div>
                    <span className="font-medium text-[#0D3226] text-right">{organization}</span>
                  </div>

                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-1.5 text-[#55695D]">
                      <MapPin className="w-2.5 h-2.5 text-[#0E5C3D] shrink-0" />
                      <span>Location</span>
                    </div>
                    <span className="font-medium text-[#0D3226] text-right">{location}</span>
                  </div>

                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-1.5 text-[#55695D]">
                      <Briefcase className="w-2.5 h-2.5 text-[#0E5C3D] shrink-0" />
                      <span>Employment Type</span>
                    </div>
                    <span className="font-medium text-[#0D3226] text-right">{employmentType}</span>
                  </div>

                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-1.5 text-[#55695D]">
                      <Briefcase className="w-2.5 h-2.5 text-[#0E5C3D] shrink-0" />
                      <span>Experience Required</span>
                    </div>
                    <span className="font-medium text-[#0D3226] text-right">{experienceRequired}</span>
                  </div>

                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-1.5 text-[#55695D]">
                      <GraduationCap className="w-2.5 h-2.5 text-[#0E5C3D] shrink-0" />
                      <span>Qualification</span>
                    </div>
                    <span className="font-medium text-[#0D3226] text-right">{qualification}</span>
                  </div>

                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-1.5 text-[#55695D]">
                      <Calendar className="w-2.5 h-2.5 text-[#0E5C3D] shrink-0" />
                      <span>Joining Preference</span>
                    </div>
                    <span className="font-medium text-[#0D3226] text-right">{joiningPreference}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-2 pt-0.5 space-y-1.5">
                  <Link
                    href="/careers/apply"
                    className="w-full bg-[#0E5C3D] hover:bg-[#0A472E] text-white py-1.5 rounded-xl font-bold text-[11.5px] sm:text-[12px] flex items-center justify-center gap-1.5 shadow-xs transition-colors"
                  >
                    <span>Continue &amp; Apply for This Job</span>
                    <ArrowRight className="w-3 h-3 stroke-[2.4]" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => setSavedForLater(!savedForLater)}
                    className="w-full border border-[#CCD6D0] bg-white hover:bg-[#FAF8F3] text-[#0D3226] py-1.5 rounded-xl font-semibold text-[11px] sm:text-[11.5px] flex items-center justify-center gap-1.5 shadow-2xs transition-colors cursor-pointer"
                  >
                    <Bookmark
                      className={`w-3 h-3 ${
                        savedForLater ? "fill-[#0E5C3D] text-[#0E5C3D]" : "text-[#55695D]"
                      }`}
                    />
                    <span>{savedForLater ? "Saved to Applications" : "Save for Later"}</span>
                  </button>
                </div>

                {/* Security Disclaimer */}
                <div className="flex items-center justify-center gap-1 text-[9px] sm:text-[9.5px] text-[#63756A] mt-1.5">
                  <Lock className="w-2.5 h-2.5 text-[#0E5C3D] shrink-0" />
                  <span>Your data is secure and used only for recruitment purposes.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 5. FOOTER */}
      <Footer />
    </div>
  );
}

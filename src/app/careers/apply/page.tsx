"use client";

import React, { useState, useRef, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import {
  Home,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  MapPin,
  Briefcase,
  BarChart2,
  GraduationCap,
  CheckCircle2,
  UploadCloud,
  Lock,
  Sparkles,
  Users,
  Leaf,
  TrendingUp,
} from "lucide-react";
import CareersNavbar from "@/components/careers/CareersNavbar";
import Footer from "@/components/Footer";
import JobModal from "@/components/careers/JobModal";

function CareerApplyContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const roleTitle = searchParams.get("role") || "Ayurvedic Doctor";

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analyzed, setAnalyzed] = useState(true);
  const [matchScore, setMatchScore] = useState(85);
  const [isJobModalOpen, setIsJobModalOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setIsAnalyzing(true);
      const sizeMB = (file.size / (1024 * 1024)).toFixed(1) + " MB";
      setTimeout(() => {
        router.push(
          `/careers/apply/cv-analysis?role=${encodeURIComponent(roleTitle)}&fileName=${encodeURIComponent(file.name)}&fileSize=${encodeURIComponent(sizeMB)}`
        );
      }, 500);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setSelectedFile(file);
      setIsAnalyzing(true);
      const sizeMB = (file.size / (1024 * 1024)).toFixed(1) + " MB";
      setTimeout(() => {
        router.push(
          `/careers/apply/cv-analysis?role=${encodeURIComponent(roleTitle)}&fileName=${encodeURIComponent(file.name)}&fileSize=${encodeURIComponent(sizeMB)}`
        );
      }, 500);
    }
  };

  return (
    <div className="relative min-h-screen w-full max-w-full overflow-x-clip bg-[#FAF7F2] text-[#22332A] flex flex-col font-sans">
      {/* 1. Top Navigation */}
      <CareersNavbar />

      {/* 2. Hero Section: Compact full bleed banner */}
      <section className="relative w-full overflow-hidden bg-[#FAF7F2] border-b border-[#ECE6DB] min-h-[135px] sm:min-h-[150px] lg:min-h-[165px] flex items-center">
        {/* Full-width edge-to-edge Background Image on Right */}
        <div className="absolute right-0 top-0 bottom-0 w-full sm:w-4/5 lg:w-3/5 xl:w-[58%] select-none pointer-events-none">
          <Image
            src="/car2/01_hero_ayurvedic_banner_background.png"
            alt="Careers at Vaidhyashala"
            fill
            priority
            unoptimized
            className="object-cover object-right"
          />
          {/* Soft fade into background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/90 to-transparent sm:via-[#FAF7F2]/50 lg:via-[#FAF7F2]/20" />
        </div>

        {/* Calligraphy on Far Right: Healing People Enriching Lives */}
        <div className="hidden lg:block absolute right-8 sm:right-12 xl:right-16 top-1/2 -translate-y-1/2 text-right select-none pointer-events-none z-20">
          <p className="font-serif italic text-[16px] xl:text-[18px] font-medium leading-[1.2] text-[#0D3226] drop-shadow-2xs">
            Healing
            <br />
            People
            <br />
            Enriching
            <br />
            Lives
          </p>
        </div>

        {/* Hero Content Left aligned in standard 1400px container */}
        <div className="relative mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 z-20">
          <div className="max-w-xl lg:max-w-2xl pl-2 sm:pl-4">
            <h1 className="font-serif text-[28px] sm:text-[34px] lg:text-[38px] font-medium leading-[1.1] tracking-[-0.015em] text-[#0F382B]">
              Careers at Vaidhyashala
            </h1>
            <p className="mt-1 sm:mt-1.5 text-[13.5px] sm:text-[14px] font-medium leading-[1.45] text-[#4A5950] max-w-lg">
              Be a part of a purpose-driven team dedicated to authentic Ayurvedic care, holistic healing and healthier lives.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Breadcrumbs Row: Styled matching About Page Breadcrumb */}
      <div className="relative w-full z-10 bg-[#FAF7F2]">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 pt-2 pb-0.5 sm:pt-2.5 sm:pb-1">
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-[12.5px] font-normal">
            <Link
              href="/"
              className="text-[#A3733F] transition-colors hover:text-[#0E3528] flex items-center gap-1"
            >
              <Home className="h-3.5 w-3.5" />
              <span>Home</span>
            </Link>
            <span className="text-[#9FA9A2]">/</span>
            <Link
              href="/careers"
              className="text-[#516157] transition-colors hover:text-[#0E3528]"
            >
              Careers
            </Link>
            <span className="text-[#9FA9A2]">/</span>
            <span className="text-[#516157] font-semibold" aria-current="page">
              Apply for Position
            </span>
          </nav>
        </div>
      </div>

      {/* 4. Main Content: Matching About Page Card, Typography, and Palette Tokens */}
      <main className="relative flex-1 pt-1 sm:pt-1.5 pb-6 sm:pb-8 z-10">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-12 lg:gap-5 items-stretch">
            
            {/* LEFT CARD: Job Details + Vertical Ayurvedic Poster */}
            <div className="lg:col-span-7 xl:col-span-8 rounded-2xl border border-[#E3DDCF] bg-[#FAF8F3] p-4 sm:p-5 lg:p-6 shadow-xs flex flex-col justify-between">
              <div>
                {/* Back to Careers Link */}
                <Link
                  href="/careers"
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#4A5950] hover:text-[#0D3226] transition-colors"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>Back to Careers</span>
                </Link>

                {/* 2-Column Split: Content on Left, Poster on Right */}
                <div className="mt-3 grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
                  
                  {/* Left: Role Info & Responsibilities */}
                  <div className="md:col-span-7 flex flex-col justify-between">
                    <div>
                      {/* Employment Type Tag */}
                      <div>
                        <span className="inline-block rounded-full bg-[#E8F1EC] px-3 py-0.5 text-[10.5px] font-bold tracking-[1.2px] uppercase text-[#1E5C41]">
                          Full Time
                        </span>
                      </div>

                      {/* Role Title in Playfair Display */}
                      <h2 className="mt-1.5 font-serif text-[28px] sm:text-[32px] font-medium leading-[1.14] text-[#0D3226]">
                        {roleTitle}
                      </h2>

                      {/* Meta Badges */}
                      <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] sm:text-[13.5px] font-semibold text-[#4A5950]">
                        <span className="flex items-center gap-1.5 text-[#A58351]">
                          <MapPin className="h-3.5 w-3.5" />
                          Delhi NCR
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Briefcase className="h-3.5 w-3.5 text-[#1E5C41]" />
                          Full Time
                        </span>
                        <span className="flex items-center gap-1.5">
                          <BarChart2 className="h-3.5 w-3.5 text-[#1E5C41]" />
                          2 - 5 Years
                        </span>
                        <span className="flex items-center gap-1.5">
                          <GraduationCap className="h-3.5 w-3.5 text-[#1E5C41]" />
                          BAMS / MD (Ayurveda)
                        </span>
                      </div>

                      {/* Summary Paragraph */}
                      <p className="mt-3.5 text-[15px] sm:text-[15.5px] font-medium leading-[1.65] text-[#3B4C42]">
                        Join Vaidhyashala as an {roleTitle} and be part of our mission to make authentic Ayurveda accessible for healthier, happier lives.
                      </p>

                      {/* Key Responsibilities */}
                      <div className="mt-4 sm:mt-5">
                        <div className="flex items-center gap-2">
                          <Leaf className="h-4.5 w-4.5 text-[#2E7D32]" />
                          <h3 className="font-serif text-[18px] sm:text-[19.5px] font-medium leading-[1.25] text-[#0D3226]">
                            Key Responsibilities
                          </h3>
                        </div>
                        <ul className="mt-2.5 space-y-2">
                          {[
                            "Consult patients and understand their health concerns.",
                            "Prepare personalised Ayurvedic treatment plans.",
                            "Guide patients on diet, lifestyle and wellness practices.",
                            "Maintain accurate patient records and follow-up care.",
                          ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-[13.5px] sm:text-[14.5px] font-medium leading-[1.55] text-[#37473F]">
                              <CheckCircle2 className="h-4 w-4 shrink-0 text-[#1E5C41] mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Qualifications & Experience */}
                      <div className="mt-4 sm:mt-5">
                        <div className="flex items-center gap-2">
                          <Leaf className="h-4.5 w-4.5 text-[#2E7D32]" />
                          <h3 className="font-serif text-[18px] sm:text-[19.5px] font-medium leading-[1.25] text-[#0D3226]">
                            Qualifications & Experience
                          </h3>
                        </div>
                        <ul className="mt-2.5 space-y-2">
                          {[
                            "BAMS or equivalent recognised degree.",
                            "Minimum 2–5 years of clinical experience (freshers with strong knowledge may also apply).",
                            "Good communication and counselling skills.",
                            "Passion for holistic and preventive healthcare.",
                          ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-[13.5px] sm:text-[14.5px] font-medium leading-[1.55] text-[#37473F]">
                              <CheckCircle2 className="h-4 w-4 shrink-0 text-[#1E5C41] mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* View Full Job Details CTA Button */}
                    <div className="mt-5 pt-1">
                      <button
                        type="button"
                        onClick={() => setIsJobModalOpen(true)}
                        className="group inline-flex items-center justify-center gap-2 rounded-md bg-[#0A3527] px-6 py-2.5 text-[13.5px] font-semibold text-white shadow-xs transition-colors hover:bg-[#124534] cursor-pointer"
                      >
                        <span>View Full Job Details</span>
                        <ArrowRight className="h-4 w-4 text-[#D8B45D] transition-transform duration-200 group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>

                  {/* Right: Vertical Ayurvedic Poster with 3 Circle Pillars */}
                  <div className="md:col-span-5 flex flex-col items-center justify-between">
                    <div className="relative w-full aspect-[9/16] min-h-[460px] sm:min-h-[490px] lg:min-h-[510px] overflow-hidden rounded-2xl border border-[#E3DDCF] bg-[#FAF8F3] shadow-xs">
                      <Image
                        src="/car2/02_ayurvedic_mortar_pestle_portrait.png"
                        alt="Together for a Healthier Tomorrow"
                        fill
                        unoptimized
                        priority
                        className="object-cover"
                      />
                    </div>

                    {/* People, Ideas, Partnerships graphic using cr1.png */}
                    <div className="mt-3 w-full max-w-[185px] sm:max-w-[195px] flex items-center justify-center">
                      <Image
                        src="/car2/cr1.png"
                        alt="People, Ideas, Partnerships - For a Greener Tomorrow"
                        width={195}
                        height={98}
                        unoptimized
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT CARD: Check Your Eligibility with AI */}
            <div className="lg:col-span-5 xl:col-span-4 rounded-2xl border border-[#E3DDCF] bg-[#FAF8F3] p-4 sm:p-5 lg:p-6 shadow-xs relative overflow-hidden flex flex-col justify-between">
              <div>
                {/* Cute 3D AI Robot Mascot positioned on top-right - increased size as requested */}
                <div className="absolute right-1 -top-1 w-28 sm:w-32 lg:w-36 pointer-events-none select-none z-10">
                  <Image
                    src="/car2/03_ai_wellness_assistant_robot.png"
                    alt="AI Wellness Assistant"
                    width={140}
                    height={140}
                    unoptimized
                    className="w-full h-auto object-contain mix-blend-multiply"
                  />
                </div>

                {/* Top Eyebrow in About Page Gold Style */}
                <div className="flex items-center gap-1.5">
                  <span className="text-[11.5px] sm:text-[12px] font-bold tracking-[1.5px] uppercase text-[#A58351]">
                    Let AI Help You
                  </span>
                  <Sparkles className="h-3.5 w-3.5 text-[#D8B45D]" />
                </div>

                {/* Title */}
                <h2 className="mt-1.5 font-serif text-[24px] sm:text-[26px] font-medium leading-[1.14] text-[#0D3226] max-w-[220px]">
                  Check Your Eligibility with AI
                </h2>

                {/* Description */}
                <p className="mt-2 text-[13.5px] sm:text-[14px] font-medium leading-[1.55] text-[#4A5950] max-w-[260px]">
                  Upload your CV and get an instant analysis of how well your profile matches this position.
                </p>

                {/* CV Upload Dropzone Box */}
                <div
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className="mt-3.5 rounded-xl border-2 border-dashed border-[#DCD5C5] bg-[#FFFDF9] p-4 text-center cursor-pointer transition-colors hover:border-[#1E5C41] hover:bg-[#F4F9F6]"
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                  />

                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF2EC] text-[#1E5C41]">
                    <UploadCloud className="h-5 w-5 stroke-[1.8]" />
                  </div>

                  <p className="mt-2 text-[14.5px] sm:text-[15px] font-semibold text-[#0D3226]">
                    {selectedFile ? selectedFile.name : "Upload Your CV"}
                  </p>

                  <p className="mt-0.5 text-[12px] sm:text-[12.5px] font-medium text-[#4A5950]">
                    Drag & drop your file here or click to browse
                  </p>
                  <p className="text-[11.5px] font-medium text-[#7A8880]">
                    PDF, DOC or DOCX (Max 5 MB)
                  </p>

                  <div className="mt-2.5">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        fileInputRef.current?.click();
                      }}
                      className="rounded-md bg-[#0A3527] px-4 py-1.5 text-[12.5px] font-semibold text-white shadow-2xs transition-colors hover:bg-[#124534] cursor-pointer"
                    >
                      Choose File
                    </button>
                  </div>
                </div>

                {/* Simulated Loading State */}
                {isAnalyzing && (
                  <div className="mt-2.5 flex items-center justify-center gap-2 text-[12.5px] font-semibold text-[#1E5C41] animate-pulse">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>AI is analyzing your CV against role criteria...</span>
                  </div>
                )}

                {/* AI will check: list */}
                <div className="mt-4">
                  <p className="text-[13.5px] sm:text-[14px] font-bold text-[#0D3226]">
                    AI will check:
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {[
                      "Relevant clinical experience",
                      "Ayurvedic qualification (BAMS/MD)",
                      "Key skills (patient consultation, treatment planning)",
                      "Communication & counselling skills",
                      "Overall profile match",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-[13px] sm:text-[13.5px] font-medium text-[#37473F]">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-[#1E5C41]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Your Profile Match Result Card */}
                {analyzed && (
                  <div className="mt-4 flex items-center gap-3.5 rounded-xl border border-[#D1E6DC] bg-[#F1F7F4] p-3 sm:p-3.5">
                    {/* Circular 85% Progress Indicator */}
                    <div className="relative shrink-0 flex h-13 w-13 items-center justify-center">
                      <svg className="h-full w-full -rotate-90" viewBox="0 0 36 36">
                        <path
                          className="text-[#D3E8DE]"
                          strokeWidth="3.2"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                          className="text-[#1E5C41] transition-all duration-1000 ease-out"
                          strokeDasharray={`${matchScore}, 100`}
                          strokeWidth="3.2"
                          strokeLinecap="round"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                      <span className="absolute font-serif text-[14px] sm:text-[14.5px] font-bold text-[#0D3226]">
                        {matchScore}%
                      </span>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-serif text-[15px] sm:text-[15.5px] font-bold text-[#0D3226]">
                          Your Profile Match
                        </h4>
                        <Link
                          href={`/careers/apply/cv-analysis?role=${encodeURIComponent(roleTitle)}`}
                          className="text-[11.5px] font-bold text-[#1E5C41] hover:underline flex items-center gap-0.5"
                        >
                          <span>View Analysis</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                      <p className="mt-0.5 text-[12px] sm:text-[12.5px] font-medium leading-[1.4] text-[#4A5950]">
                        Based on your experience, skills and qualification, you are a strong match for this position.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Security Privacy Notice - anchored at bottom */}
              <div className="mt-4 pt-1 flex items-center gap-1.5 text-[11.5px] sm:text-[12px] font-medium text-[#6A7970]">
                <Lock className="h-3.5 w-3.5 shrink-0 text-[#4A5950]" />
                <span>Your data is secure and will only be used for recruitment purposes.</span>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* 5. Footer - remains exactly the same */}
      <Footer />

      {/* Interactive Application Modal */}
      <JobModal
        isOpen={isJobModalOpen}
        onClose={() => setIsJobModalOpen(false)}
        jobTitle={roleTitle}
      />
    </div>
  );
}

export default function CareerApplyPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FAF7F2]" />}>
      <CareerApplyContent />
    </Suspense>
  );
}

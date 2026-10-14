"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import TreatmentsHero from "@/components/treatments/TreatmentsHero";
import TreatmentsHighlightsBar from "@/components/treatments/TreatmentsHighlightsBar";
import ExploreCareServices from "@/components/treatments/ExploreCareServices";
import HealthConcerns from "@/components/treatments/HealthConcerns";
import TreatmentsApproach from "@/components/treatments/TreatmentsApproach";
import ConsultationPreparation from "@/components/treatments/ConsultationPreparation";
import TreatmentsFaq from "@/components/treatments/TreatmentsFaq";
import ConsultationCTA from "@/components/ConsultationCTA";
import Footer from "@/components/Footer";

export default function TreatmentsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FBF9F5] text-[#22332A]">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero: Care tailored to your needs. */}
        <TreatmentsHero />

        {/* 2. Highlights Strip: Consultation | Panchakarma | Yoga & Lifestyle | Medicines */}
        <TreatmentsHighlightsBar />

        {/* 3. Our Treatments: Explore our care services. (2x2 Horizontal Cards) */}
        <ExploreCareServices />

        {/* 4. Health Concerns: Start with your health concern. (6 Concern Cards) */}
        <HealthConcerns />

        {/* 5. Our Approach: A plan begins with understanding you. */}
        <TreatmentsApproach />

        {/* 6. First Consultation: Prepare a few details. (3 Preparation Cards) */}
        <ConsultationPreparation />

        {/* 7. FAQs: Before you choose a treatment. */}
        <TreatmentsFaq />

        {/* 8. Pre-Footer Banner: Same ConsultationCTA as Health Journal page */}
        <ConsultationCTA />
      </main>

      {/* Shared Global Footer */}
      <Footer />
    </div>
  );
}

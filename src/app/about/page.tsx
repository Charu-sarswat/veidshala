"use client";

import React from "react";
import AboutNavbar from "@/components/about/AboutNavbar";
import AboutHero from "@/components/about/AboutHero";
import HolisticCare from "@/components/about/HolisticCare";
import AboutApproach from "@/components/about/AboutApproach";
import CoreServices from "@/components/about/CoreServices";
import DedicatedTeam from "@/components/about/DedicatedTeam";
import ClinicAtmosphere from "@/components/about/ClinicAtmosphere";
import AboutCTA from "@/components/about/AboutCTA";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FBF9F5] text-[#22332A]">
      {/* Top Navigation with About marked active */}
      <AboutNavbar />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero: Rooted in Ayurveda. Dedicated to your care. */}
        <AboutHero />

        {/* 2. Holistic Care: Holistic care for a healthier, more balanced life. */}
        <HolisticCare />

        {/* 3. Our Approach: Our approach to your well-being. */}
        <AboutApproach />

        {/* 4. Our Services: A complete approach to your health journey. */}
        <CoreServices />

        {/* 5. The People Behind Your Care: A dedicated team, by your side. */}
        <DedicatedTeam />

        {/* 6. Clinic Atmosphere: Our clinic atmosphere. */}
        <ClinicAtmosphere />

        {/* 7. Pre-Footer Banner: Begin with a conversation. */}
        <AboutCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

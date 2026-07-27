import React from "react";
import Hero from "../components/home/Hero";
import AboutSection from "../components/home/AboutSection";
import Features from "../components/home/Features";
import AcademicsPreview from "../components/home/AcademicsPreview";
import FacilitiesGrid from "../components/home/FacilitiesGrid";
import StatsSection from "../components/home/StatsSection";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 1. Hero & Quick Stats Section */}
      <Hero />

      {/* 2. About School Section */}
      <AboutSection />

      {/* 3. Why Choose KIS Feature Cards Section */}
      <Features />

      {/* 4. Academics & Curriculum Showcase Section */}
      <AcademicsPreview />

      {/* 5. Quintessential Facilities Grid Section */}
      <FacilitiesGrid />

      {/* 6. Achievements, Statistics & Testimonials Section */}
      <StatsSection />
    </div>
  );
}

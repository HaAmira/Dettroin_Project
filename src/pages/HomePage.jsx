import React from "react";
import Hero from "../components/home/Hero";
import AboutSection from "../components/home/AboutSection";
import Features from "../components/home/Features";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 1. Hero & Quick Stats Section */}
      <Hero />

      {/* 2. About School Section */}
      <AboutSection />

      {/* 3. Why Choose KIS Feature Cards Section */}
      <Features />
    </div>
  );
}

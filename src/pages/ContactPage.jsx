import React from "react";
import ContactSection from "../components/home/ContactSection";

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* Banner */}
      <div className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="bg-emerald-500/10 text-emerald-400 text-xs font-extrabold uppercase px-3 py-1 rounded-full border border-emerald-500/20">
            Contact & Location
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading">
            Contact Krishna International School
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Reach out to our admission counselors or visit our 5-acre campus at Delhi G.T. Road, Aligarh.
          </p>
        </div>
      </div>

      {/* Contact Form & Info */}
      <ContactSection />
    </div>
  );
}

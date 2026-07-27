import React from "react";
import FacilitiesGrid from "../components/home/FacilitiesGrid";

export default function FacilitiesPage() {
  return (
    <div className="w-full">
      {/* Banner */}
      <div className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="bg-emerald-500/10 text-emerald-400 text-xs font-extrabold uppercase px-3 py-1 rounded-full border border-emerald-500/20">
            Quintessential Infrastructure
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading">
            Campus Facilities & Infrastructure
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Discover our 5-acre pollution-free campus equipped with state-of-the-art laboratories, digital library, theatre, and sports complexes.
          </p>
        </div>
      </div>

      {/* Facilities Grid */}
      <FacilitiesGrid />
    </div>
  );
}

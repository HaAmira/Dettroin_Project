import React from "react";
import GalleryPreview from "../components/home/GalleryPreview";

export default function GalleryPage() {
  return (
    <div className="w-full">
      {/* Gallery Hero Banner */}
      <div className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="bg-emerald-500/10 text-emerald-400 text-xs font-extrabold uppercase px-3 py-1 rounded-full border border-emerald-500/20">
            Media & Campus Gallery
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading">
            Life At Krishna International School
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            A visual journey through our 5-acre campus, academic laboratories, annual sports meets, and co-curricular celebrations.
          </p>
        </div>
      </div>

      {/* Full Gallery Grid (Unlimited) */}
      <GalleryPreview limit={null} showFilter={true} />
    </div>
  );
}

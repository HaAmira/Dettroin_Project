import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Sparkles,
  Camera
} from "lucide-react";
import SectionHeader from "../common/SectionHeader";
import { galleryCategories, galleryItems } from "../../data/galleryData";

export default function GalleryPreview({ limit = 6, showFilter = true }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Filter items
  const filteredItems = activeCategory === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const displayedItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  const handlePrev = (e) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
    }
  };

  const handleNext = (e) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader 
          badge="Campus Life & Events"
          title="Capturing Moments Of Joy, Learning & Achievement"
          subtitle="Explore our vibrant school environment, sports competitions, science labs, and cultural celebrations."
        />

        {/* Category Filter Tabs */}
        {showFilter && (
          <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-4 mb-8 gap-2 no-scrollbar">
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm whitespace-nowrap transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-emerald-600 text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        {/* Photo Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {displayedItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setLightboxIndex(idx)}
                className="relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-slate-100 bg-slate-900 h-64 sm:h-72"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Badge */}
                <span className="absolute top-3 left-3 bg-slate-900/90 text-emerald-400 text-xs font-semibold px-2.5 py-1 rounded-lg border border-slate-700 uppercase tracking-wider">
                  {item.category}
                </span>

                {/* Hover Zoom Icon */}
                <div className="absolute top-3 right-3 w-9 h-9 rounded-xl bg-emerald-500/90 text-slate-950 flex items-center justify-center opacity-0 group-hover:opacity-100 transform group-hover:scale-100 scale-75 transition-all">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Caption Details */}
                <div className="absolute bottom-3 left-3 right-3 p-3 bg-slate-900/80 backdrop-blur-xs rounded-xl border border-slate-800">
                  <h4 className="text-white font-heading font-bold text-sm leading-tight group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-1">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View Full Gallery CTA */}
        {limit && (
          <div className="mt-12 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5"
            >
              <Camera className="w-4 h-4 text-emerald-400" />
              <span>Browse Full Photo & Video Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredItems[lightboxIndex] && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="fixed inset-0 bg-slate-950/90 backdrop-blur-md"
            />

            {/* Lightbox Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-4xl w-full bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-950/80 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Prev/Next Buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-950/80 text-white hover:bg-emerald-600 transition-colors shadow-lg"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-slate-950/80 text-white hover:bg-emerald-600 transition-colors shadow-lg"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image View */}
              <div className="relative max-h-[70vh] flex items-center justify-center bg-black">
                <img 
                  src={filteredItems[lightboxIndex].image} 
                  alt={filteredItems[lightboxIndex].title}
                  className="max-h-[70vh] w-auto max-w-full object-contain"
                />
              </div>

              {/* Lightbox Footer */}
              <div className="p-6 bg-slate-900 border-t border-slate-800 flex items-center justify-between flex-wrap gap-4">
                <div>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    {filteredItems[lightboxIndex].category}
                  </span>
                  <h3 className="text-xl font-bold font-heading text-white">
                    {filteredItems[lightboxIndex].title}
                  </h3>
                  <p className="text-sm text-slate-400 mt-0.5">
                    {filteredItems[lightboxIndex].description}
                  </p>
                </div>
                
                <span className="text-xs font-mono text-slate-400 bg-slate-800 px-3 py-1.5 rounded-full border border-slate-700">
                  {lightboxIndex + 1} of {filteredItems.length}
                </span>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

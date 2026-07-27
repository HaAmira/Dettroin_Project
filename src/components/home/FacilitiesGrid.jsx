import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Trees, 
  FlaskConical, 
  Library, 
  Trophy, 
  Drama, 
  Bus, 
  ArrowRight, 
  Sparkles,
  X,
  CheckCircle2,
  Building2
} from "lucide-react";
import SectionHeader from "../common/SectionHeader";
import { facilitiesData } from "../../data/schoolData";

const iconMap = {
  Trees: Trees,
  FlaskConical: FlaskConical,
  Library: Library,
  Trophy: Trophy,
  Drama: Drama,
  Bus: Bus
};

export default function FacilitiesGrid() {
  const [activeFacility, setActiveFacility] = useState(null);

  return (
    <section className="py-16 sm:py-24 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader 
          badge="Quintessential Campus"
          title="World-Class Facilities For Holistic Growth"
          subtitle="Equipped with modern infrastructure across 5 acres of green land to foster academic excellence, sports mastery, and artistic creation."
          dark={true}
        />

        {/* Facilities 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilitiesData.map((facility, idx) => {
            const IconComp = iconMap[facility.icon] || Building2;

            return (
              <motion.div
                key={facility.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setActiveFacility(facility)}
                className="bg-slate-800/80 border border-slate-700/80 rounded-2xl overflow-hidden shadow-lg hover:border-emerald-500/50 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img 
                      src={facility.image} 
                      alt={facility.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    
                    {/* Category Badge */}
                    <span className="absolute top-3 left-3 bg-slate-900/90 text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full border border-slate-700">
                      {facility.category}
                    </span>

                    {/* Icon */}
                    <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center font-bold shadow-md">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-2">
                    <h3 className="text-xl font-bold font-heading text-white group-hover:text-emerald-400 transition-colors">
                      {facility.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
                      {facility.description}
                    </p>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs font-semibold text-emerald-400 group-hover:text-emerald-300">
                  <span>Click to view details</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Facilities CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/facilities"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-slate-950 font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            <span>Explore All Campus Facilities</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

      {/* Facility Detail Modal Lightbox */}
      <AnimatePresence>
        {activeFacility && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveFacility(null)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveFacility(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-950/80 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image Header */}
              <div className="relative h-64 sm:h-72">
                <img 
                  src={activeFacility.image} 
                  alt={activeFacility.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="bg-emerald-500 text-slate-950 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                    {activeFacility.category}
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-white mt-1">
                    {activeFacility.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-4">
                <p className="text-slate-300 text-base leading-relaxed">
                  {activeFacility.description}
                </p>

                <div className="pt-2 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-emerald-400 font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Maintained under KIS Safety & Quality Standards</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Accessible for all grade levels under expert faculty supervision</span>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={() => setActiveFacility(null)}
                    className="bg-slate-800 hover:bg-slate-700 text-white font-semibold px-5 py-2.5 rounded-xl border border-slate-700 text-sm transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

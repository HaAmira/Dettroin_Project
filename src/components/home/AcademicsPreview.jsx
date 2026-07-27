import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  GraduationCap, 
  CheckCircle2, 
  ArrowRight, 
  BookOpen, 
  Award, 
  Compass, 
  Users 
} from "lucide-react";
import SectionHeader from "../common/SectionHeader";
import { academicLevelsData } from "../../data/schoolData";

export default function AcademicsPreview() {
  const [selectedTab, setSelectedTab] = useState(0);

  const activeLevel = academicLevelsData[selectedTab];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader 
          badge="Academic Offerings"
          title="Comprehensive Curriculum From Foundation To Senior Secondary"
          subtitle="Structured academic pathways aligned with CBSE standards, preparing students for competitive examinations and lifelong intellectual growth."
        />

        {/* Level Selector Tabs */}
        <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-4 mb-8 gap-2 no-scrollbar">
          {academicLevelsData.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedTab(idx)}
              className={`px-5 py-3 rounded-xl font-semibold text-sm whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                selectedTab === idx
                  ? "bg-slate-900 text-white shadow-md shadow-slate-950/20"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              <GraduationCap className={`w-4 h-4 ${selectedTab === idx ? "text-emerald-400" : "text-slate-400"}`} />
              <span>{item.level}</span>
            </button>
          ))}
        </div>

        {/* Selected Academic Level Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-xs font-bold px-3.5 py-1.5 rounded-full">
                  <span>Grade Range: {activeLevel.grades}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">
                  {activeLevel.level}
                </h3>

                <p className="text-slate-600 text-base leading-relaxed">
                  {activeLevel.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Key Focus Areas</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeLevel.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span className="text-xs sm:text-sm font-semibold text-slate-800">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Explore Link */}
                <div className="pt-4 flex items-center gap-4">
                  <Link
                    to="/academics"
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5"
                  >
                    <span>View Academic Structure</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>

              {/* Right Image Preview */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 group">
                  <img 
                    src={activeLevel.image} 
                    alt={activeLevel.level} 
                    className="w-full h-64 sm:h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white p-3 bg-slate-900/80 backdrop-blur-xs rounded-xl border border-slate-700">
                    <p className="text-xs text-emerald-400 font-semibold">Krishna International School</p>
                    <p className="text-sm font-bold">{activeLevel.level} Learning Environment</p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* Academic Highlights Bottom Banner */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 flex items-center gap-4">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h5 className="font-bold text-slate-900 text-sm">CBSE Curriculum</h5>
              <p className="text-xs text-slate-500">NCERT aligned syllabus</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 flex items-center gap-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h5 className="font-bold text-slate-900 text-sm">Small Class Ratios</h5>
              <p className="text-xs text-slate-500">Personalized attention</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 flex items-center gap-4">
            <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <h5 className="font-bold text-slate-900 text-sm">Career Guidance</h5>
              <p className="text-xs text-slate-500">JEE/NEET & college prep</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 flex items-center gap-4">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h5 className="font-bold text-slate-900 text-sm">Roll of Honour</h5>
              <p className="text-xs text-slate-500">100% CBSE Pass Record</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

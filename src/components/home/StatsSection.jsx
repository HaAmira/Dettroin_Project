import React from "react";
import { motion } from "framer-motion";
import { 
  Trophy, 
  Award, 
  Star, 
  CheckCircle2, 
  Quote, 
  Sparkles,
  ShieldCheck,
  TrendingUp
} from "lucide-react";
import SectionHeader from "../common/SectionHeader";
import { achievementsData, testimonialsData, statisticsData } from "../../data/schoolData";

export default function StatsSection() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* 1. Achievements & Recognitions Grid */}
        <div>
          <SectionHeader 
            badge="Awards & Recognitions"
            title="A Tradition Of Outstanding Achievement"
            subtitle="Honored across national and international forums for academic excellence, sports championships, and green campus infrastructure."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {achievementsData.map((award, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300 relative group overflow-hidden"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold mb-6 group-hover:scale-110 transition-transform">
                  <Trophy className="w-6 h-6" />
                </div>

                <span className="text-xs font-extrabold font-mono text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {award.year}
                </span>

                <h3 className="text-xl font-bold font-heading text-slate-900 mt-3 mb-2 group-hover:text-amber-700 transition-colors">
                  {award.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {award.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. Parent Testimonials & Satisfaction Section */}
        <div className="pt-8 border-t border-slate-200">
          <SectionHeader 
            badge="Parental Trust"
            title="What Parents Say About Krishna International"
            subtitle="Genuine feedback from parents and students experiencing the KIS commitment to academic excellence."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {testimonialsData.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between relative"
              >
                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(testimonial.rating)].map((_, sIdx) => (
                      <Star key={sIdx} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  {/* Quote text */}
                  <Quote className="w-8 h-8 text-emerald-200 mb-2" />
                  <p className="text-slate-700 text-sm italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{testimonial.author}</h4>
                    <p className="text-xs text-emerald-600 font-semibold">{testimonial.role}</p>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

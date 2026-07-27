import React from "react";
import { motion } from "framer-motion";
import { 
  BookOpenCheck, 
  UserCheck, 
  Building2, 
  BrainCircuit, 
  ShieldCheck, 
  Sparkles,
  ArrowUpRight
} from "lucide-react";
import SectionHeader from "../common/SectionHeader";
import { whyChooseUsData } from "../../data/schoolData";

const iconComponents = {
  BookOpenCheck,
  UserCheck,
  Building2,
  BrainCircuit,
  ShieldCheck,
  Sparkles
};

const colorStyles = {
  blue: {
    bg: "bg-blue-50 text-blue-600 border-blue-100",
    hoverBorder: "hover:border-blue-300",
    badge: "bg-blue-100 text-blue-800"
  },
  emerald: {
    bg: "bg-emerald-50 text-emerald-600 border-emerald-100",
    hoverBorder: "hover:border-emerald-300",
    badge: "bg-emerald-100 text-emerald-800"
  },
  amber: {
    bg: "bg-amber-50 text-amber-600 border-amber-100",
    hoverBorder: "hover:border-amber-300",
    badge: "bg-amber-100 text-amber-800"
  },
  purple: {
    bg: "bg-purple-50 text-purple-600 border-purple-100",
    hoverBorder: "hover:border-purple-300",
    badge: "bg-purple-100 text-purple-800"
  },
  rose: {
    bg: "bg-rose-50 text-rose-600 border-rose-100",
    hoverBorder: "hover:border-rose-300",
    badge: "bg-rose-100 text-rose-800"
  },
  indigo: {
    bg: "bg-indigo-50 text-indigo-600 border-indigo-100",
    hoverBorder: "hover:border-indigo-300",
    badge: "bg-indigo-100 text-indigo-800"
  }
};

export default function Features() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader 
          badge="Why Choose KIS"
          title="Empowering Every Student For Future Success"
          subtitle="Here is how we create a supportive, progressive, and safe educational environment for holistic student growth."
        />

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUsData.map((feature, idx) => {
            const IconComponent = iconComponents[feature.icon] || Sparkles;
            const style = colorStyles[feature.color] || colorStyles.blue;

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group ${style.hoverBorder}`}
              >
                <div>
                  {/* Icon Container */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border shadow-xs transition-transform group-hover:scale-110 ${style.bg}`}>
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold font-mono text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-heading text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Card Footer Indicator */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-emerald-700">
                  <span>Krishna International Standard</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

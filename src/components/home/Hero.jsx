import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Users, 
  Trophy, 
  HeartHandshake, 
  Award,
  CreditCard
} from "lucide-react";
import { schoolInfo, statisticsData } from "../../data/schoolData";

const iconMap = {
  Users: Users,
  Trophy: Trophy,
  HeartHandshake: HeartHandshake,
  GraduationCap: GraduationCap
};

export default function Hero() {
  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800",
      caption: "5-Acre Eco Green Campus"
    },
    {
      url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
      caption: "CBSE Curriculum & Interactive Labs"
    },
    {
      url: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=800",
      caption: "Sports & Holistic Life Skills"
    }
  ];

  return (
    <div className="relative bg-slate-950 text-white overflow-hidden pt-8 pb-16 lg:pb-24 border-b border-slate-800">
      {/* Background Decorative Glow Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: Content & Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline, Copy & CTAs */}
          <motion.div 
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 bg-slate-900/90 border border-slate-800 text-emerald-400 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full shadow-inner">
              <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>{schoolInfo.affiliation}</span>
              <span className="hidden sm:inline text-slate-600">•</span>
              <span className="hidden sm:inline text-slate-300">Est. {schoolInfo.established}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight">
              Let's explore the{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">
                limitless possibilities
              </span>{" "}
              of knowledge
            </h1>

            {/* Paragraph Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Committed to providing high-quality teaching and nurturing intellectually curious, 
              self-motivated young minds amidst a serene <strong className="text-white">5-acre pollution-free campus</strong> in Aligarh.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-slate-950 font-bold text-base px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-950/50 hover:shadow-emerald-900/80 transition-all transform hover:-translate-y-0.5"
              >
                <GraduationCap className="w-5 h-5" />
                <span>Admissions 2026-27</span>
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 font-semibold text-base px-6 py-3.5 rounded-xl transition-all"
              >
                <span>Explore School</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={schoolInfo.portalLinks.feePayment}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-300 hover:text-emerald-400 text-sm font-semibold py-2 px-3 transition-colors"
              >
                <CreditCard className="w-4 h-4 text-emerald-400" />
                <span>Pay School Fee</span>
              </a>
            </div>

            {/* Key Bullet Highlights */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300 font-medium">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>CBSE Syllabus Curriculum</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>CCTV & GPS Security</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>60+ Awards & Honors</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Visual Image Cards Showcase */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Featured Image Card */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group">
                <img 
                  src={heroImages[0].url} 
                  alt="Krishna International School Campus" 
                  className="w-full h-72 sm:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-slate-900/90 backdrop-blur-md rounded-xl border border-slate-800">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">Campus Showcase</p>
                      <h4 className="text-white font-heading font-bold text-sm sm:text-base">{heroImages[0].caption}</h4>
                    </div>
                    <span className="bg-emerald-500/20 text-emerald-300 text-xs px-2.5 py-1 rounded-full font-bold">
                      KIS Aligarh
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Mini Overlay Card */}
              <motion.div 
                className="absolute -bottom-6 -left-4 sm:-left-8 bg-slate-900/95 backdrop-blur-md p-4 rounded-2xl border border-slate-700 shadow-xl max-w-xs hidden sm:flex items-center gap-3"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Dedicated to Excellence</p>
                  <p className="text-[11px] text-slate-400">Recognized top CBSE school in Aligarh</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* Quick Stats Bar Section */}
        <motion.div 
          className="mt-16 bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {statisticsData.map((stat, idx) => {
              const IconComp = iconMap[stat.icon] || GraduationCap;
              return (
                <div 
                  key={stat.id} 
                  className={`text-center sm:text-left ${idx !== statisticsData.length - 1 ? "lg:border-r lg:border-slate-800/80 pr-4" : ""}`}
                >
                  <div className="flex items-center justify-center sm:justify-start gap-3 mb-1">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-2xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
                      {stat.value}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-slate-200">{stat.label}</h4>
                  <p className="text-xs text-slate-400 mt-0.5">{stat.sublabel}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </div>
  );
}

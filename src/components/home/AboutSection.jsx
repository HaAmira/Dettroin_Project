import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  CheckCircle, 
  ArrowRight, 
  Award, 
  ShieldCheck, 
  Trees, 
  GraduationCap 
} from "lucide-react";
import SectionHeader from "../common/SectionHeader";
import { schoolInfo } from "../../data/schoolData";

export default function AboutSection() {
  const highlights = [
    "5-Acre pollution-free campus set amidst serene greenery",
    "Promoting sound moral values & scientific temperament",
    "Equipped digital library, science labs & sports complex",
    "Regular counseling for competitive exams & career readiness",
    "Social awareness & pride in rich cultural heritage",
    "Dedicated staff committed to the motto 'Dedicated to Excellence'"
  ];

  const campusPhotos = [
    {
      url: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600",
      title: "Eco Campus"
    },
    {
      url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600",
      title: "Interactive Classroom"
    },
    {
      url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600",
      title: "Science Laboratory"
    },
    {
      url: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=600",
      title: "Digital Library"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader 
          badge="About KIS Aligarh"
          title="Nurturing Excellence in Education & Character"
          subtitle="Amongst the best CBSE schools in Aligarh, providing an ideal environment for academic and co-curricular development."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-8">
          
          {/* Left Grid: 4-Photo Masonry Grid */}
          <motion.div 
            className="lg:col-span-6 grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {campusPhotos.map((photo, idx) => (
              <div 
                key={idx}
                className={`relative rounded-2xl overflow-hidden shadow-md border border-slate-100 group ${
                  idx === 1 ? "mt-6" : ""
                }`}
              >
                <img 
                  src={photo.url} 
                  alt={photo.title}
                  className="w-full h-44 sm:h-52 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-90" />
                <span className="absolute bottom-3 left-3 text-xs font-semibold text-white bg-slate-900/80 backdrop-blur-xs px-2.5 py-1 rounded-lg">
                  {photo.title}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Right Column: Detailed Narrative & Features */}
          <motion.div 
            className="lg:col-span-6 space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              <p>
                Set amidst <strong className="text-slate-900">5 acres of green land</strong> away from the city's pollution, 
                <strong className="text-slate-900"> Krishna International School</strong> provides an ideal environment for academic and co-curricular excellence. 
                The school has all modern facilities required for the overall development of children.
              </p>
              <p>
                Under the canopy of our school motto, <em className="text-emerald-700 font-semibold font-heading text-lg">"{schoolInfo.motto}"</em>, 
                our staff and management endeavour not only to help students excel in CBSE academics, but also imbue them with social awareness, pride in their rich cultural heritage, and a strong sense of responsibility towards the nation.
              </p>
            </div>

            {/* Checklist Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-slate-800">{item}</span>
                </div>
              ))}
            </div>

            {/* Action CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5"
              >
                <span>Read Chairman & Principal's Message</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

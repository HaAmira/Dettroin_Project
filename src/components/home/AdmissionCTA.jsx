import React from "react";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  PhoneCall, 
  CreditCard, 
  ArrowRight, 
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { schoolInfo } from "../../data/schoolData";

export default function AdmissionCTA() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-royal text-white relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Admissions Open For Academic Session 2026-27</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white leading-tight">
              Begin Your Child's Journey To{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">
                Excellence & Success
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              We welcome young learners from Nursery to Class XII. Give your child the advantage of a 5-acre green campus, CBSE curriculum, and holistic sports & arts education.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-semibold text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Admission Hassle</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Individualized Attention</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Scholarships Available</span>
              </div>
            </div>
          </div>

          {/* Right Action Buttons Card */}
          <div className="lg:col-span-4 bg-slate-950/80 p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
            <h3 className="text-lg font-bold font-heading text-white">Apply Or Inquire Today</h3>
            
            <Link
              to="/admissions"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-slate-950 font-bold py-3.5 px-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 text-sm"
            >
              <GraduationCap className="w-5 h-5" />
              <span>Apply For Admission</span>
            </Link>

            <a
              href={schoolInfo.portalLinks.feePayment}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-4 rounded-xl border border-slate-700 text-sm transition-colors"
            >
              <CreditCard className="w-4 h-4 text-emerald-400" />
              <span>Pay Fees Online</span>
            </a>

            <div className="pt-2 text-center border-t border-slate-800/80">
              <p className="text-xs text-slate-400">Admission Helpline:</p>
              <a 
                href={`tel:${schoolInfo.phoneNumbers[0]}`}
                className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-bold text-sm mt-1"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{schoolInfo.phoneNumbers[0]}</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

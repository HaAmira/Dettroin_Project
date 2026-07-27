import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  GraduationCap, 
  CheckCircle2, 
  Award, 
  Compass, 
  BrainCircuit, 
  FlaskConical, 
  Users, 
  ArrowRight 
} from "lucide-react";
import SectionHeader from "../components/common/SectionHeader";
import { academicLevelsData } from "../data/schoolData";

export default function AcademicsPage() {
  const [activeTab, setActiveTab] = useState(0);

  const streams = [
    {
      title: "Science Stream (PCM / PCB)",
      subjects: ["Physics", "Chemistry", "Mathematics / Biology", "English Core", "Physical Education / Computer Science"],
      description: "Designed for engineering, medical, research, and technical career pathways."
    },
    {
      title: "Commerce Stream",
      subjects: ["Accountancy", "Business Studies", "Economics", "English Core", "Mathematics / Informatics Practices"],
      description: "Ideal for business administration, chartered accountancy, finance, and commerce management."
    },
    {
      title: "Humanities / Arts Stream",
      subjects: ["History", "Political Science", "Psychology / Sociology", "English Core", "Fine Arts / Physical Education"],
      description: "Focusing on civil services, law, journalism, design, and liberal arts."
    }
  ];

  return (
    <div className="w-full bg-slate-50">
      
      {/* Hero Banner */}
      <div className="bg-slate-900 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800 text-center relative">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="bg-emerald-500/10 text-emerald-400 text-xs font-extrabold uppercase px-3.5 py-1.5 rounded-full border border-emerald-500/20">
            Academic Excellence
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading">
            CBSE Curriculum & Academic Structure
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Fostering critical thinking, scientific temperament, and holistic development from foundational years to Senior Secondary.
          </p>
        </div>
      </div>

      {/* Academic Structure Section */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            badge="Academic Stages"
            title="Educational Levels At KIS Aligarh"
            subtitle="Explore our comprehensive grade levels designed to support developmental milestones."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
            {/* Left Nav */}
            <div className="lg:col-span-4 space-y-2">
              {academicLevelsData.map((level, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between ${
                    activeTab === idx 
                      ? "bg-slate-900 text-white border-slate-900 shadow-md" 
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  <div>
                    <h4 className="font-bold text-base font-heading">{level.level}</h4>
                    <p className={`text-xs ${activeTab === idx ? "text-emerald-400" : "text-slate-500"}`}>{level.grades}</p>
                  </div>
                  <GraduationCap className={`w-5 h-5 ${activeTab === idx ? "text-emerald-400" : "text-slate-400"}`} />
                </button>
              ))}
            </div>

            {/* Right Display */}
            <div className="lg:col-span-8 bg-slate-50 p-8 rounded-3xl border border-slate-200 space-y-6">
              <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">
                {academicLevelsData[activeTab].grades}
              </span>
              <h3 className="text-2xl font-bold font-heading text-slate-900">
                {academicLevelsData[activeTab].level}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {academicLevelsData[activeTab].description}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Key Pedagogical Focus</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {academicLevelsData[activeTab].highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white p-3 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Senior Secondary Streams (Class XI & XII) */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            badge="Senior Secondary Wings"
            title="Class XI & XII Academic Streams"
            subtitle="Specialized streams preparing students for competitive examinations (JEE, NEET, CUET) and higher university studies."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {streams.map((stream, sIdx) => (
              <div key={sIdx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading text-slate-900">{stream.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{stream.description}</p>
                
                <div className="pt-3 border-t border-slate-100">
                  <h4 className="text-xs font-bold text-slate-400 uppercase mb-2">Subjects Offered</h4>
                  <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                    {stream.subjects.map((sub, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}

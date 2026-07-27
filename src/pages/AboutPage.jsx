import React from "react";
import { Link } from "react-router-dom";
import { 
  Award, 
  Target, 
  Heart, 
  Users, 
  GraduationCap, 
  CheckCircle2,
  Quote,
  Sparkles,
  Trees
} from "lucide-react";
import SectionHeader from "../components/common/SectionHeader";
import { schoolInfo } from "../data/schoolData";

export default function AboutPage() {
  return (
    <div className="w-full bg-slate-50">
      
      {/* Hero Banner */}
      <div className="bg-slate-900 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800 text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-4 relative z-10">
          <span className="bg-emerald-500/10 text-emerald-400 text-xs font-extrabold uppercase px-3.5 py-1.5 rounded-full border border-emerald-500/20">
            About Krishna International School
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading">
            Dedicated To Educational Excellence & Character Building
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Set amidst a 5-acre green eco-friendly campus in Aligarh, committed to developing intellectually curious, self-motivated young learners.
          </p>
        </div>
      </div>

      {/* Overview & Campus Vision */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">
                <Trees className="w-4 h-4" /> 5-Acre Eco-Campus in Aligarh
              </div>
              <h2 className="text-3xl font-extrabold font-heading text-slate-900 leading-tight">
                Empowering Students To Reach Their Full Potential
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Amongst the best CBSE schools in Aligarh, the school is set amidst 5 acres of land, away from the city's pollution. The school provides an ideal environment for academic and co-curricular excellence. The school has all facilities required for the overall development of children.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Facilities such as an equipped library, theatre, science laboratories and sports for students enable them to excel in academics and enhance their co-curricular skills and talents.
              </p>
              
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                <p className="text-sm font-semibold text-slate-900 italic">
                  "Under the canopy of our school motto, 'Dedicated to Excellence', the staff and management of K.I.S. endeavour to give students social awareness, pride in their rich cultural heritage, and a sense of responsibility towards the nation."
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=600" 
                alt="KIS Green Campus" 
                className="rounded-2xl shadow-md h-64 object-cover w-full"
              />
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=600" 
                alt="Student Classroom" 
                className="rounded-2xl shadow-md h-64 object-cover w-full mt-6"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            badge="Our Guiding Philosophy"
            title="Vision & Mission"
            subtitle="Guiding our academic framework to foster intellectual growth and moral integrity."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-slate-900">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                To be a premier institution recognized for academic rigor, ethical values, and holistic development. We aim to prepare self-reliant global citizens capable of leadership and positive social impact.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-slate-900">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                To nurture scientific temperament, promote moral values, provide state-of-the-art infrastructure, and inspire continuous self-motivation in every child through personalized guidance and experiential learning.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Leadership Messages */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <SectionHeader 
            badge="School Leadership"
            title="Messages From School Leadership"
            subtitle="Inspiring words from the management guiding Krishna International School."
          />

          {/* Chairman's Message */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 text-center">
              <div className="w-32 h-32 rounded-full bg-slate-800 border-2 border-emerald-400 mx-auto overflow-hidden flex items-center justify-center">
                <Users className="w-16 h-16 text-slate-400" />
              </div>
              <h4 className="text-xl font-bold font-heading text-white mt-4">Chairman's Message</h4>
              <p className="text-xs text-emerald-400 font-semibold uppercase">Krishna International School</p>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <Quote className="w-8 h-8 text-emerald-400" />
              <p className="text-slate-300 text-base leading-relaxed italic">
                "Welcome to Krishna International School. Education is not merely acquiring knowledge, but building character, confidence, and resilience. We strive to provide our students with a nurturing environment where they can discover their unique talents and excel in every sphere of life."
              </p>
            </div>
          </div>

          {/* Principal's Message */}
          <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4 order-2 lg:order-1">
              <Quote className="w-8 h-8 text-emerald-600" />
              <p className="text-slate-700 text-base leading-relaxed italic">
                "Our dedicated faculty members focus on personalized student guidance, innovative teaching methodologies, and continuous assessment. We foster an inquisitive mind and encourage curiosity, enabling every child to step forward into the world with confidence."
              </p>
            </div>

            <div className="lg:col-span-4 text-center order-1 lg:order-2">
              <div className="w-32 h-32 rounded-full bg-slate-200 border-2 border-emerald-600 mx-auto overflow-hidden flex items-center justify-center">
                <GraduationCap className="w-16 h-16 text-slate-500" />
              </div>
              <h4 className="text-xl font-bold font-heading text-slate-900 mt-4">Principal's Message</h4>
              <p className="text-xs text-emerald-700 font-semibold uppercase">Krishna International School</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

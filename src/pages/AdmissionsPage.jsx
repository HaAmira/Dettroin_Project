import React, { useState } from "react";
import { 
  GraduationCap, 
  CreditCard, 
  CheckCircle2, 
  ClipboardList, 
  UserCheck, 
  FileCheck, 
  HelpCircle, 
  ChevronDown, 
  Send 
} from "lucide-react";
import SectionHeader from "../components/common/SectionHeader";
import { schoolInfo, faqsData } from "../data/schoolData";

export default function AdmissionsPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    phone: "",
    email: "",
    grade: "Nursery",
    prevSchool: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const steps = [
    {
      num: "01",
      title: "Online Registration",
      desc: "Fill out the registration form online via Accevate or visit the school admission desk at Delhi G.T. Road campus.",
      icon: ClipboardList
    },
    {
      num: "02",
      title: "Student Interaction",
      desc: "An informal interaction/evaluation appropriate for the child's age group to assess readiness.",
      icon: UserCheck
    },
    {
      num: "03",
      title: "Document Submission",
      desc: "Submit birth certificate, previous report cards, transfer certificate (TC), and passport photographs.",
      icon: FileCheck
    },
    {
      num: "04",
      title: "Fee Payment & Seat Lock",
      desc: "Complete fee payment online via Accevate portal to confirm enrollment and receive student portal ID.",
      icon: CreditCard
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.studentName || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-slate-50">
      
      {/* Hero Banner */}
      <div className="bg-slate-900 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="bg-emerald-500/10 text-emerald-400 text-xs font-extrabold uppercase px-3.5 py-1.5 rounded-full border border-emerald-500/20">
            Admissions Session 2026-2027
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading">
            Join Krishna International School
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Admissions open for Nursery to Class XII. Secure your child's seat at Aligarh's top CBSE affiliated green campus.
          </p>
        </div>
      </div>

      {/* Admission Steps */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            badge="Simple 4-Step Process"
            title="How To Apply For Admission"
            subtitle="Follow our transparent and straightforward admission process."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div key={idx} className="bg-slate-50 p-6 rounded-3xl border border-slate-200 space-y-3 relative">
                  <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-100 px-2.5 py-1 rounded-full">
                    Step {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold mt-2">
                    <IconComp className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h4 className="font-bold text-lg font-heading text-slate-900">{step.title}</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <a
              href={schoolInfo.portalLinks.feePayment}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md text-sm"
            >
              <CreditCard className="w-4 h-4" />
              <span>Click Here To Pay Fees Online (Accevate Portal)</span>
            </a>
          </div>

        </div>
      </section>

      {/* Admission Application Form */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-md space-y-6">
            <div className="text-center space-y-2">
              <span className="bg-emerald-100 text-emerald-800 text-xs font-extrabold px-3 py-1 rounded-full uppercase">
                Online Registration Form
              </span>
              <h2 className="text-3xl font-extrabold font-heading text-slate-900">
                Submit Admission Application
              </h2>
              <p className="text-slate-600 text-sm">
                Provide student and parent details below. Our team will verify and contact you.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-2xl font-bold font-heading text-slate-900">Application Submitted!</h4>
                <p className="text-slate-600 text-sm">
                  We have received the application for <strong>{formData.studentName}</strong> (Grade: {formData.grade}). Our team will contact you at <strong>{formData.phone}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 bg-slate-900 text-white text-xs font-semibold px-5 py-2.5 rounded-xl"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Student Full Name *
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formData.studentName}
                      onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                      placeholder="e.g. Aarav Sharma"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Parent / Guardian Name *
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formData.parentName}
                      onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Contact Mobile Number *
                    </label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+91 98370 00000"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Grade Seeking Admission
                    </label>
                    <select
                      value={formData.grade}
                      onChange={(e) => setFormData({...formData, grade: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm bg-white focus:ring-2 focus:ring-emerald-500"
                    >
                      <option>Nursery / LKG / UKG</option>
                      <option>Class I - V (Primary)</option>
                      <option>Class VI - VIII (Middle)</option>
                      <option>Class IX - X (Secondary)</option>
                      <option>Class XI Science (PCM/PCB)</option>
                      <option>Class XI Commerce</option>
                      <option>Class XI Humanities</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Previous School Attended (If Any)
                  </label>
                  <input 
                    type="text" 
                    value={formData.prevSchool}
                    onChange={(e) => setFormData({...formData, prevSchool: e.target.value})}
                    placeholder="Name of previous school in Aligarh or outside"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 rounded-xl shadow-md text-sm transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-emerald-400" />
                  <span>Submit Admission Registration</span>
                </button>
              </form>
            )}

          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            badge="Admission FAQs"
            title="Frequently Asked Questions"
            subtitle="Find quick answers to common queries regarding KIS Aligarh admissions."
          />

          <div className="space-y-4 mt-8">
            {faqsData.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left font-bold text-slate-900 font-heading text-base flex items-center justify-between gap-4"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-emerald-600 transform transition-transform ${openFaq === idx ? "rotate-180" : ""}`} />
                </button>

                {openFaq === idx && (
                  <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-200/60 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}

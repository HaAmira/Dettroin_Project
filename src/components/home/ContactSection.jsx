import React, { useState } from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  ExternalLink 
} from "lucide-react";
import SectionHeader from "../common/SectionHeader";
import { schoolInfo } from "../../data/schoolData";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    grade: "General Enquiry",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader 
          badge="Get In Touch"
          title="We Are Here To Assist You"
          subtitle="Have questions about admissions, school transport, or academics? Visit our 5-acre campus or drop us a message."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8 items-start">
          
          {/* Left Column: Direct Contact Details & Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Campus Address Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base font-heading">School Address</h4>
                <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                  {schoolInfo.address}
                </p>
                <a
                  href={schoolInfo.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 hover:text-emerald-700 mt-2"
                >
                  <span>View Location Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Phone Contacts Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base font-heading">Phone Helplines</h4>
                <div className="text-slate-600 text-sm mt-1 space-y-1">
                  {schoolInfo.phoneNumbers.map((phone, idx) => (
                    <p key={idx}>
                      <a href={`tel:${phone}`} className="hover:text-emerald-600 transition-colors font-medium">
                        {phone}
                      </a>
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Email & Hours Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex items-start gap-4">
              <div className="p-3 bg-purple-50 text-purple-600 rounded-xl shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base font-heading">Email & Office Hours</h4>
                <p className="text-slate-600 text-sm mt-1">
                  <a href={`mailto:${schoolInfo.email}`} className="hover:text-emerald-600 transition-colors font-medium">
                    {schoolInfo.email}
                  </a>
                </p>
                <p className="text-xs text-slate-500 mt-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{schoolInfo.officeHours}</span>
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Quick Enquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-md">
            <h3 className="text-2xl font-bold font-heading text-slate-900 mb-2">Send An Enquiry</h3>
            <p className="text-slate-600 text-sm mb-6">
              Fill out the form below and our admission counselor will respond shortly.
            </p>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 font-heading">Thank You!</h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Your enquiry has been received. The KIS Aligarh administration team will reach out to you at <strong>{formData.phone}</strong> soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 bg-slate-900 text-white text-xs font-semibold px-4 py-2 rounded-xl"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Parent / Guardian Name *
                    </label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="e.g. Rajesh Kumar"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Contact Phone *
                    </label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+91 98370 00000"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Grade Seeking Admission
                    </label>
                    <select
                      value={formData.grade}
                      onChange={(e) => setFormData({...formData, grade: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 text-sm bg-white"
                    >
                      <option>General Enquiry</option>
                      <option>Pre-Primary (Nursery - UKG)</option>
                      <option>Primary (Class I - V)</option>
                      <option>Middle (Class VI - VIII)</option>
                      <option>Secondary (Class IX - X)</option>
                      <option>Senior Secondary (XI - XII)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Your Message / Question
                  </label>
                  <textarea 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Ask us anything about admissions, transport routes, or fees..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl shadow-md transition-all text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Quick Enquiry</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  MapPin, 
  CreditCard, 
  ExternalLink, 
  ArrowUp,
  Smartphone,
  Globe
} from "lucide-react";
import { schoolInfo } from "../../data/schoolData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-sm">
      
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: School Info & Motto (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-blue-700 p-0.5 shadow-md">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-white font-bold text-base font-heading">
                  KIS
                </div>
              </div>
              <div>
                <span className="font-heading font-extrabold text-lg text-white tracking-tight">
                  KRISHNA <span className="text-emerald-400 font-light">INTERNATIONAL</span>
                </span>
                <p className="text-xs text-slate-400">{schoolInfo.motto}</p>
              </div>
            </Link>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Amongst the top CBSE schools in Aligarh, set amidst a 5-acre green pollution-free campus dedicated to academic excellence, sound moral values, and co-curricular development.
            </p>

            {/* CBSE Affiliation Badge */}
            <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-400">
              <span>{schoolInfo.affiliation}</span>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-heading">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-emerald-400 transition-colors">About KIS</Link></li>
              <li><Link to="/academics" className="hover:text-emerald-400 transition-colors">Academics</Link></li>
              <li><Link to="/admissions" className="hover:text-emerald-400 transition-colors">Admissions</Link></li>
              <li><Link to="/facilities" className="hover:text-emerald-400 transition-colors">Campus Facilities</Link></li>
              <li><Link to="/gallery" className="hover:text-emerald-400 transition-colors">Photo Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact & Location (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-heading">Contact Details</h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{schoolInfo.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${schoolInfo.phoneNumbers[0]}`} className="hover:text-emerald-400">
                  {schoolInfo.phoneNumbers[0]}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${schoolInfo.email}`} className="hover:text-emerald-400">
                  {schoolInfo.email}
                </a>
              </p>
              <div className="pt-1">
                <a 
                  href={schoolInfo.mapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300 font-semibold"
                >
                  <span>Google Maps Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Student App & Portals (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-heading">Portals & Mobile App</h4>
            
            <a
              href={schoolInfo.portalLinks.feePayment}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between bg-emerald-950/40 hover:bg-emerald-900/50 text-emerald-300 border border-emerald-800/60 px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors"
            >
              <span className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-emerald-400" />
                <span>Online Fee Payment</span>
              </span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {/* Mobile App Download Box */}
            <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300 font-medium flex items-center gap-1.5">
                  <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
                  Accevate Student App
                </span>
                <span className="bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded-md text-[10px]">
                  {schoolInfo.portalLinks.schoolCode}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-2 text-[11px] font-semibold pt-1">
                <a 
                  href={schoolInfo.portalLinks.androidApp} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 py-1.5 px-2 rounded-lg text-center transition-colors"
                >
                  Android App
                </a>
                <a 
                  href={schoolInfo.portalLinks.iosApp} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 py-1.5 px-2 rounded-lg text-center transition-colors"
                >
                  iOS App
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={schoolInfo.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-emerald-600 hover:text-white border border-slate-800 flex items-center justify-center transition-colors text-slate-400"
                aria-label="Facebook Page"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a
                href={schoolInfo.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-emerald-600 hover:text-white border border-slate-800 flex items-center justify-center transition-colors text-slate-400"
                aria-label="Instagram Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a
                href={schoolInfo.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-emerald-600 hover:text-white border border-slate-800 flex items-center justify-center transition-colors text-slate-400"
                aria-label="YouTube Channel"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-slate-950 py-6 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            KRISHNA INTERNATIONAL SCHOOL © 2026. All rights reserved. (CBSE Affiliated, Aligarh)
          </p>

          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-slate-300">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-slate-300">Terms & Conditions</Link>
            
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 flex items-center justify-center transition-colors border border-slate-800"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
}

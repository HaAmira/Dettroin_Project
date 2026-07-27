import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Phone, 
  Mail, 
  CreditCard, 
  Menu, 
  X, 
  GraduationCap, 
  ChevronRight,
  Sparkles,
  MapPin
} from "lucide-react";
import { schoolInfo } from "../../data/schoolData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Admissions", path: "/admissions" },
    { name: "Facilities", path: "/facilities" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header className="w-full relative z-50">
      {/* Top Announcement & Utility Bar */}
      <div className="bg-slate-950 text-slate-300 py-2 px-4 text-xs border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          {/* Left: Admissions & Affiliation Badge */}
          <div className="flex items-center gap-3">
            <span className="bg-gradient-gold text-slate-950 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-xs">
              <Sparkles className="w-3 h-3 fill-slate-950" /> Admissions Open 2026-27
            </span>
            <span className="hidden sm:inline-block text-slate-400 text-xs">
              CBSE Affiliated Senior Secondary School • Delhi G.T. Road, Aligarh
            </span>
          </div>

          {/* Right: Direct Contacts & Fee Portal Button */}
          <div className="flex items-center gap-4 text-xs font-medium ml-auto sm:ml-0">
            <a 
              href={`tel:${schoolInfo.phoneNumbers[0]}`} 
              className="hidden md:flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{schoolInfo.phoneNumbers[0]}</span>
            </a>
            <a 
              href={`mailto:${schoolInfo.email}`} 
              className="hidden lg:flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>{schoolInfo.email}</span>
            </a>
            <a
              href={schoolInfo.portalLinks.feePayment}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white px-2.5 py-1 rounded-md transition-all font-semibold shadow-xs"
            >
              <CreditCard className="w-3.5 h-3.5" />
              <span>Pay School Fee</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav 
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled 
            ? "bg-slate-900/95 backdrop-blur-md shadow-xl py-3 border-b border-slate-800" 
            : "bg-slate-900 py-4 border-b border-slate-800/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & School Branding */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-blue-700 p-0.5 shadow-md group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-white font-bold text-lg font-heading tracking-wider">
                KIS
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-extrabold text-lg sm:text-xl text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                  KRISHNA
                </span>
                <span className="font-heading font-light text-lg sm:text-xl text-emerald-400 tracking-tight">
                  INTERNATIONAL
                </span>
              </div>
              <p className="text-[11px] text-slate-400 tracking-wide font-medium flex items-center gap-1">
                <span>Aligarh</span>
                <span>•</span>
                <span className="text-emerald-400 font-semibold">{schoolInfo.motto}</span>
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? "text-emerald-400 font-semibold bg-slate-800/70"
                      : "text-slate-200 hover:text-white hover:bg-slate-800/40"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-3 right-3 h-0.5 bg-emerald-400 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/admissions"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold text-sm px-4 py-2.5 rounded-xl shadow-md hover:shadow-emerald-900/30 transition-all transform hover:-translate-y-0.5"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Apply Now</span>
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-200 hover:text-white hover:bg-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 transition-colors"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs z-40 md:hidden"
            />

            {/* Mobile Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-5/6 max-w-sm bg-slate-900 z-50 shadow-2xl flex flex-col justify-between border-l border-slate-800 p-6 overflow-y-auto md:hidden"
            >
              <div>
                {/* Header inside drawer */}
                <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500 text-slate-950 flex items-center justify-center font-bold font-heading">
                      KIS
                    </div>
                    <div>
                      <h4 className="text-white font-heading font-bold text-base leading-tight">
                        KIS Aligarh
                      </h4>
                      <p className="text-xs text-emerald-400 font-medium">{schoolInfo.motto}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Nav links list */}
                <div className="py-6 space-y-1">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-4 py-3 rounded-xl font-medium text-base transition-colors ${
                          isActive
                            ? "bg-emerald-600/20 text-emerald-400 font-semibold border-l-4 border-emerald-400"
                            : "text-slate-300 hover:bg-slate-800 hover:text-white"
                        }`
                      }
                    >
                      <span>{link.name}</span>
                      <ChevronRight className="w-4 h-4 opacity-60" />
                    </NavLink>
                  ))}
                </div>
              </div>

              {/* Bottom Drawer Actions */}
              <div className="pt-6 border-t border-slate-800 space-y-3">
                <Link
                  to="/admissions"
                  className="w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold py-3 rounded-xl shadow-md transition-colors"
                >
                  <GraduationCap className="w-5 h-5" />
                  <span>Admissions 2026-27</span>
                </Link>

                <a
                  href={schoolInfo.portalLinks.feePayment}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold py-2.5 rounded-xl border border-slate-700 transition-colors text-sm"
                >
                  <CreditCard className="w-4 h-4 text-emerald-400" />
                  <span>Pay School Fee Online</span>
                </a>

                {/* Quick Info */}
                <div className="pt-3 text-xs text-slate-400 space-y-1">
                  <p className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{schoolInfo.phoneNumbers[0]}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Delhi G.T. Road, Aligarh</span>
                  </p>
                </div>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

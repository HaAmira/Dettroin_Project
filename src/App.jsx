import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import ScrollToTop from "./components/common/ScrollToTop";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";

// Temp placeholder view for remaining inner pages
function PlaceholderPage({ title }) {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-8">
      <div className="text-center max-w-md bg-white p-8 rounded-2xl shadow-md border border-slate-200">
        <h1 className="text-3xl font-bold font-heading text-slate-900 mb-2">{title}</h1>
        <p className="text-slate-600 text-sm">
          Krishna International School (KIS Aligarh) - Page view under development.
        </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 selection:bg-emerald-500 selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<PlaceholderPage title="About KIS" />} />
            <Route path="/academics" element={<PlaceholderPage title="Academics" />} />
            <Route path="/admissions" element={<PlaceholderPage title="Admissions" />} />
            <Route path="/facilities" element={<PlaceholderPage title="Facilities" />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<PlaceholderPage title="Contact Us" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

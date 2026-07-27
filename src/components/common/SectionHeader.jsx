import React from "react";
import { Sparkles } from "lucide-react";

export default function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
  dark = false
}) {
  return (
    <div className={`space-y-3 mb-12 ${centered ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}`}>
      {badge && (
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
          dark 
            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
            : "bg-emerald-100 text-emerald-800 border border-emerald-200"
        }`}>
          <Sparkles className="w-3.5 h-3.5" />
          <span>{badge}</span>
        </div>
      )}

      <h2 className={`text-2xl sm:text-4xl font-extrabold font-heading tracking-tight ${
        dark ? "text-white" : "text-slate-900"
      }`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`text-base sm:text-lg leading-relaxed font-normal ${
          dark ? "text-slate-300" : "text-slate-600"
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

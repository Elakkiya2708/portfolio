import React from 'react';
import { GraduationCap, CheckCircle2 } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Education & Academic Background
          </h2>
          <p className="text-slate-400 max-w-xl text-sm sm:text-base mt-2">
            Formal engineering education combining rigorous computer science foundations with business system workflows.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-4"></div>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {EDUCATION_DATA.map((edu, idx) => (
            <div
              key={idx}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-blue-500/40 transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                {/* Top Badge & Duration */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-3 rounded-2xl bg-blue-600/15 text-blue-400 border border-blue-500/20">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-cyan-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                    {edu.duration}
                  </span>
                </div>

                {/* Degree & Institution */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 leading-snug">
                  {edu.degree}
                </h3>
                <div className="text-sm font-medium text-cyan-400 font-mono mt-1">
                  {edu.institution}
                </div>

                {/* Score Pill */}
                <div className="mt-4 p-3 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">
                    {edu.gradeLabel}
                  </span>
                  <span className="text-sm font-extrabold font-mono text-amber-400 dark:text-amber-400 light:text-amber-600">
                    {edu.gradeValue}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed mt-4">
                  {edu.description}
                </p>

                {/* Highlights List */}
                {edu.highlights && (
                  <div className="mt-5 space-y-2">
                    {edu.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 text-xs text-slate-400 flex items-center justify-between">
                <span>Verified Academic Record</span>
                <span className="text-blue-400 font-mono">Easwari Eng. / SDMS</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

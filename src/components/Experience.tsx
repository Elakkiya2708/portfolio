import React from 'react';
import { Calendar, MapPin, CheckCircle2, Clock } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
            <span>CAREER TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Internships & Professional Training
          </h2>
          <p className="text-slate-400 max-w-xl text-sm sm:text-base mt-2">
            Practical hands-on industry programs, enterprise training, and software development internships.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-4"></div>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-slate-800 dark:border-slate-800 light:border-slate-300 ml-4 md:ml-32 space-y-12">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative pl-6 md:pl-10 group">
              
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-500 group-hover:scale-125 group-hover:bg-blue-500 transition-all duration-300 shadow-sm shadow-blue-500/50"></div>

              {/* Date tag floating on left for wider screens */}
              <div className="hidden md:block absolute -left-36 top-1 text-right w-28">
                <span className="text-xs font-mono font-semibold text-blue-400 bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">
                  {exp.year}
                </span>
              </div>

              {/* Experience Card */}
              <div className="glass-card p-6 sm:p-7 rounded-2xl border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 group-hover:border-blue-500/40 transition-all duration-300">
                
                {/* Header: Role & Organization */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800/60 dark:border-slate-800/60 light:border-slate-200">
                  <div>
                    <span className="md:hidden inline-block text-xs font-mono font-semibold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20 mb-2">
                      {exp.year}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-medium text-cyan-400 font-mono">
                      {exp.organization} {exp.program && `— ${exp.program}`}
                    </div>
                  </div>

                  {/* Status Pill */}
                  <div className="flex items-center gap-2">
                    {exp.status === 'Ongoing' ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                        <Clock className="w-3.5 h-3.5 animate-spin" />
                        <span>Ongoing Experience</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Completed</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Duration & Location details */}
                <div className="flex flex-wrap items-center gap-4 py-3 text-xs sm:text-sm text-slate-400 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-rose-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Description Bullets */}
                <div className="space-y-2 pt-1 text-slate-300 dark:text-slate-300 light:text-slate-700 text-xs sm:text-sm leading-relaxed">
                  {exp.description.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Associated Technologies */}
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="flex flex-wrap items-center gap-1.5 pt-4 mt-2 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200">
                    <span className="text-[11px] font-mono text-slate-400 mr-1">Focus:</span>
                    {exp.technologies.map(t => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-700/50 dark:border-slate-700/50 light:border-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

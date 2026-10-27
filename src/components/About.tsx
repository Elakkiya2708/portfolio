import React from 'react';
import { Cloud, Code2, Shield, Brain, User } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-blue-500/10 text-blue-400 dark:text-blue-400 light:text-blue-700 border border-blue-500/25 mb-3 shadow-sm">
            <User className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Background & Technical Focus
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 rounded-full mt-4"></div>
        </div>

        {/* Two-column layout: Bio & Competencies */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed text-base sm:text-lg">
            {PERSONAL_INFO.aboutParagraphs.map((para, idx) => (
              <p key={idx} className="glass-card p-5 rounded-2xl border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200/90 shadow-md">
                {para}
              </p>
            ))}

            {/* Quick stats grid */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="glass-card p-4 rounded-2xl text-center border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                <div className="text-2xl sm:text-3xl font-black text-amber-400 dark:text-amber-400 light:text-amber-600 font-mono">
                  {PERSONAL_INFO.cgpa}
                </div>
                <div className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1 font-medium">B.Tech CGPA</div>
              </div>

              <div className="glass-card p-4 rounded-2xl text-center border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                <div className="text-2xl sm:text-3xl font-black text-cyan-400 dark:text-cyan-400 light:text-cyan-700 font-mono">
                  3x
                </div>
                <div className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1 font-medium">AWS Certified</div>
              </div>

              <div className="glass-card p-4 rounded-2xl text-center border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
                <div className="text-2xl sm:text-3xl font-black text-blue-400 dark:text-blue-400 light:text-blue-700 font-mono">
                  3rd
                </div>
                <div className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1 font-medium">Year (2024–28)</div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Focus Areas Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            
            <div className="glass-card p-5 rounded-2xl flex items-start gap-4 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-blue-500/40 transition-all">
              <div className="p-3 rounded-xl bg-blue-600/15 text-blue-400 border border-blue-500/20 shrink-0">
                <Code2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-1">
                  Full-Stack Web Engineering
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                  Engineering complete web applications using React, TypeScript, Node.js, Express, and modern styling with clean, maintainable patterns.
                </p>
              </div>
            </div>

            <div className="glass-card p-5 rounded-2xl flex items-start gap-4 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-blue-500/40 transition-all">
              <div className="p-3 rounded-xl bg-cyan-600/15 text-cyan-400 border border-cyan-500/20 shrink-0">
                <Brain className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-1">
                  AI & Computer Vision
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                  Applying OpenCV for structural surface defect detection and leveraging AI APIs for automated evaluation systems.
                </p>
              </div>
            </div>

            <div className="glass-card p-5 rounded-2xl flex items-start gap-4 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-blue-500/40 transition-all">
              <div className="p-3 rounded-xl bg-amber-600/15 text-amber-400 border border-amber-500/20 shrink-0">
                <Cloud className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-1">
                  Cloud Infrastructure (AWS)
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                  Holder of AWS AI Practitioner, Cloud Practitioner, and Developer Associate credentials with hands-on architecture experience.
                </p>
              </div>
            </div>

            <div className="glass-card p-5 rounded-2xl flex items-start gap-4 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-blue-500/40 transition-all">
              <div className="p-3 rounded-xl bg-emerald-600/15 text-emerald-400 border border-emerald-500/20 shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-1">
                  Cybersecurity Awareness
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
                  Trained through Cisco BOOST 6.0 in defensive network concepts, vulnerability assessment, and secure protocol enforcement.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

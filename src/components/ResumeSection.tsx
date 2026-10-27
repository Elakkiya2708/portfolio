import React from 'react';
import { FileText, Download, Eye, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeSectionProps {
  onOpenResumeModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResumeModal }) => {
  return (
    <section id="resume" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
            <span>OFFICIAL CURRICULUM VITAE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Original Resume & Credentials
          </h2>
          <p className="text-slate-400 max-w-xl text-sm sm:text-base mt-2">
            View or download the exact, unmodified curriculum vitae in original PDF format.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-4"></div>
        </div>

        {/* Featured Resume Card */}
        <div className="max-w-4xl mx-auto glass-card rounded-3xl p-6 sm:p-10 border border-blue-500/25 relative overflow-hidden shadow-2xl">
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left: Document Icon & Verified Badges */}
            <div className="md:col-span-4 flex flex-col items-center text-center p-6 rounded-2xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200">
              <div className="relative mb-4">
                <div className="w-20 h-24 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 p-0.5 shadow-xl shadow-blue-600/20">
                  <div className="w-full h-full bg-[#0a1128] dark:bg-[#0a1128] light:bg-white rounded-[10px] flex flex-col items-center justify-center p-3">
                    <FileText className="w-8 h-8 text-blue-400 mb-1" />
                    <span className="text-[10px] font-mono font-bold text-cyan-400">PDF</span>
                  </div>
                </div>
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-cyan-500 items-center justify-center text-[9px] text-black font-bold">✓</span>
                </span>
              </div>

              <h4 className="text-sm font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                {PERSONAL_INFO.resumeFileName}
              </h4>
              <p className="text-[11px] font-mono text-slate-400 mt-1">
                Verified Original File
              </p>

              <div className="mt-4 pt-4 border-t border-slate-800 dark:border-slate-800 light:border-slate-200 w-full space-y-1.5 text-left text-xs text-slate-400">
                <div className="flex items-center justify-between">
                  <span>Format:</span>
                  <span className="font-mono text-slate-200 dark:text-slate-200 light:text-slate-800">Adobe PDF</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Pages:</span>
                  <span className="font-mono text-slate-200 dark:text-slate-200 light:text-slate-800">1 Page Complete</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Integrity:</span>
                  <span className="font-mono text-emerald-400">100% Unmodified</span>
                </div>
              </div>
            </div>

            {/* Right: Key Details & Action Buttons */}
            <div className="md:col-span-8 space-y-5">
              
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-blue-500/10 text-blue-400 mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Verified Candidate Profile</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                  {PERSONAL_INFO.name} — Resume Overview
                </h3>
                <p className="text-xs sm:text-sm text-cyan-400 font-mono">
                  {PERSONAL_INFO.headline}
                </p>
              </div>

              {/* Snapshot grid */}
              <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="p-3 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Education</span>
                  <span className="font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
                    B.Tech CSBS (9.0 CGPA)
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Certifications</span>
                  <span className="font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
                    3x AWS Certified
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Featured Projects</span>
                  <span className="font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
                    VisionInspect AI & RenewGuard
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Experience</span>
                  <span className="font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
                    Cisco BOOST 6.0 & Internships
                  </span>
                </div>
              </div>

              {/* Two Priority Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-3">
                {/* View Resume Button */}
                <button
                  onClick={onOpenResumeModal}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Resume</span>
                </button>

                {/* Download Resume Button */}
                <a
                  href={PERSONAL_INFO.resumePdfPath}
                  download={PERSONAL_INFO.resumeFileName}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold rounded-xl bg-slate-800/90 dark:bg-slate-800/90 light:bg-white hover:bg-slate-700 dark:hover:bg-slate-700 light:hover:bg-slate-100 text-slate-100 dark:text-slate-100 light:text-slate-900 border border-slate-700 dark:border-slate-700 light:border-slate-300 shadow-sm transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <Download className="w-4 h-4 text-cyan-400" />
                  <span>Download Resume</span>
                </a>
              </div>

              <p className="text-[11px] text-slate-400 leading-normal pt-1">
                Note: Directly serves the authentic, original PDF file uploaded by Elakkiya V. No synthetic generation or rewriting applied.
              </p>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

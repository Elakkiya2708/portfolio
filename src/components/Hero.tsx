import React from 'react';
import { ArrowRight, FileText, Mail, MapPin, Award, GraduationCap, CheckCircle2, Sparkles, Code2, Cpu, Briefcase } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[350px] bg-gradient-to-tr from-blue-600/20 via-cyan-500/10 to-indigo-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute -bottom-20 right-10 w-96 h-96 bg-blue-700/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Subtle background tech grid */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)`,
          backgroundSize: '36px 36px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Introduction */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 border border-blue-500/20 text-blue-400 dark:text-blue-300 light:text-blue-700 shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Software Engineering Internships & Roles</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900 leading-[1.12]">
                Hi, I'm{' '}
                <span className="gradient-text font-black">
                  {PERSONAL_INFO.name}
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-blue-400 dark:text-blue-400 light:text-blue-600 font-mono tracking-tight">
                {PERSONAL_INFO.headline}
              </p>
            </div>

            {/* Official Introduction */}
            <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {PERSONAL_INFO.heroIntroduction}
            </p>

            {/* Meta tags: College, CGPA, Location */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>{PERSONAL_INFO.college} (CSBS '28)</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200 font-mono">
                <Award className="w-4 h-4 text-amber-400" />
                <span>CGPA: <strong className="text-amber-300 light:text-amber-600">{PERSONAL_INFO.cgpa}</strong></span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200">
                <MapPin className="w-4 h-4 text-rose-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-3 w-full sm:w-auto">
              {/* Explore My Projects */}
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* View My Resume */}
              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold rounded-xl bg-slate-800/80 dark:bg-slate-800/80 light:bg-white text-slate-200 dark:text-slate-200 light:text-slate-800 hover:text-white dark:hover:text-white hover:bg-slate-700/80 border border-slate-700/60 dark:border-slate-700/60 light:border-slate-300 shadow-sm transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View My Resume</span>
              </button>

              {/* Contact Me */}
              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm sm:text-base font-medium rounded-xl text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white dark:hover:text-white hover:bg-slate-800/40 dark:hover:bg-slate-800/40 light:hover:bg-slate-100 transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-mono">Connect:</span>
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white hover:border-blue-500/50 hover:bg-blue-600/10 transition-all duration-200 transform hover:scale-110"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white hover:border-blue-500/50 hover:bg-blue-600/10 transition-all duration-200 transform hover:scale-110"
              >
                <LinkedinIcon className="w-5 h-5 text-blue-400" />
              </a>
            </div>

          </div>

          {/* Right Column: Profile Photo in Circular Frame with Floating Badges */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group">
              
              {/* Outer pulsing gradient glow */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 opacity-60 group-hover:opacity-90 blur-xl transition-all duration-500 -z-10 animate-soft-pulse"></div>
              
              {/* Secondary subtle ring */}
              <div className="absolute -inset-4 rounded-full border border-blue-500/25 group-hover:border-blue-500/50 transition-all duration-500 pointer-events-none"></div>

              {/* Circular Photo Container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full p-2 bg-[#0a1128] dark:bg-[#0a1128] light:bg-white shadow-2xl overflow-hidden border-2 border-blue-500/35">
                <img
                  src={PERSONAL_INFO.profilePhotoPath}
                  alt={`Profile photograph of ${PERSONAL_INFO.name}`}
                  className="w-full h-full object-cover object-top rounded-full filter contrast-[1.03] brightness-[1.01] transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />
              </div>

              {/* Floating Badge 1: Top Left - Full-Stack */}
              <div className="hidden sm:flex absolute -top-3 -left-6 items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0a1128]/95 dark:bg-[#0a1128]/95 light:bg-white/95 border border-blue-500/30 shadow-xl backdrop-blur-md animate-soft-pulse">
                <Code2 className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
                  Full-Stack Dev
                </span>
              </div>

              {/* Floating Badge 2: Top Right - AI & Vision */}
              <div className="hidden sm:flex absolute -top-3 -right-6 items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0a1128]/95 dark:bg-[#0a1128]/95 light:bg-white/95 border border-cyan-500/30 shadow-xl backdrop-blur-md">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
                  Computer Vision AI
                </span>
              </div>

              {/* Floating Badge 3: Bottom Right - 3x AWS Certified */}
              <div className="absolute -bottom-2 right-0 sm:bottom-2 sm:-right-4 flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#0a1128]/95 dark:bg-[#0a1128]/95 light:bg-white/95 border border-amber-500/35 shadow-xl backdrop-blur-md">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
                  3x AWS Certified
                </span>
              </div>

              {/* Floating Badge 4: Bottom Left - CGPA */}
              <div className="hidden sm:flex absolute -bottom-2 -left-4 items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0a1128]/95 dark:bg-[#0a1128]/95 light:bg-white/95 border border-emerald-500/30 shadow-xl backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">
                  9.0 CGPA
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Quick Highlights Stats Strip beneath Hero */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200/90 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="glass-card p-4 sm:p-5 rounded-2xl border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-blue-500/30 transition-all flex items-center gap-3.5">
            <div className="p-2.5 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/25 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-slate-100 dark:text-slate-100 light:text-slate-900 font-mono">
                {PERSONAL_INFO.cgpa}
              </div>
              <div className="text-[11px] sm:text-xs text-slate-400 font-medium">
                B.Tech CSBS CGPA
              </div>
            </div>
          </div>

          <div className="glass-card p-4 sm:p-5 rounded-2xl border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-blue-500/30 transition-all flex items-center gap-3.5">
            <div className="p-2.5 rounded-xl bg-blue-600/15 text-blue-400 border border-blue-500/25 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-slate-100 dark:text-slate-100 light:text-slate-900 font-mono">
                3x AWS
              </div>
              <div className="text-[11px] sm:text-xs text-slate-400 font-medium">
                Official Certifications
              </div>
            </div>
          </div>

          <div className="glass-card p-4 sm:p-5 rounded-2xl border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-blue-500/30 transition-all flex items-center gap-3.5">
            <div className="p-2.5 rounded-xl bg-cyan-600/15 text-cyan-400 border border-cyan-500/25 shrink-0">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-slate-100 dark:text-slate-100 light:text-slate-900 font-mono">
                3 Projects
              </div>
              <div className="text-[11px] sm:text-xs text-slate-400 font-medium">
                Production-Grade Builds
              </div>
            </div>
          </div>

          <div className="glass-card p-4 sm:p-5 rounded-2xl border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-blue-500/30 transition-all flex items-center gap-3.5">
            <div className="p-2.5 rounded-xl bg-emerald-600/15 text-emerald-400 border border-emerald-500/25 shrink-0">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-slate-100 dark:text-slate-100 light:text-slate-900 font-mono">
                6 Roles
              </div>
              <div className="text-[11px] sm:text-xs text-slate-400 font-medium">
                Internships & Industry
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

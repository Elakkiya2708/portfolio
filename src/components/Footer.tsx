import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'education', label: 'Education' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-[#030712] dark:bg-[#030712] light:bg-slate-100 border-t border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-400 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between pb-8 border-b border-slate-800/80 dark:border-slate-800/80 light:border-slate-300">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 text-white font-bold flex items-center justify-center text-sm shadow-md shadow-blue-500/20">
                EV
              </div>
              <span className="text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Software Developer | Third-year B.Tech CSBS student at Easwari Engineering College, Chennai. 3x AWS Certified.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="hover:text-blue-400 dark:hover:text-blue-400 light:hover:text-blue-600 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Social Icons & Back to top */}
          <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-3">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white hover:border-blue-500/50 hover:bg-blue-600/10 transition-all"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white hover:border-blue-500/50 hover:bg-blue-600/10 transition-all"
            >
              <LinkedinIcon className="w-4 h-4 text-blue-400" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              aria-label="Email Elakkiya"
              className="p-2.5 rounded-xl bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white hover:border-blue-500/50 hover:bg-blue-600/10 transition-all"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
            </a>
            <button
              onClick={() => scrollTo('home')}
              aria-label="Back to top"
              className="p-2.5 rounded-xl bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-400 hover:text-white transition-all ml-1"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1 font-mono text-[11px]">
            <span>Designed for Placement & Professional Engineering</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

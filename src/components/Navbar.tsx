import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Download, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

const NAV_ITEMS = [
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

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(NAV_ITEMS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#060b18]/90 dark:bg-[#060b18]/90 light:bg-white/90 backdrop-blur-md border-b border-blue-500/15 py-3 shadow-lg shadow-blue-950/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#home"
            onClick={e => {
              e.preventDefault();
              scrollTo('home');
            }}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white font-bold text-lg shadow-md shadow-blue-500/25 group-hover:shadow-blue-500/50 transition-all duration-300 transform group-hover:scale-105">
              <span>EV</span>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-[#060b18] dark:border-[#060b18] light:border-white rounded-full"></span>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight text-base sm:text-lg flex items-center gap-1.5">
                {PERSONAL_INFO.name}
                <Sparkles className="w-3.5 h-3.5 text-blue-400 inline opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </span>
              <span className="text-xs text-blue-400 dark:text-blue-400 light:text-blue-600 font-mono tracking-wider">
                {PERSONAL_INFO.professionalTitle}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_ITEMS.map(item => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-blue-400 dark:text-blue-400 light:text-blue-600 bg-blue-500/10'
                      : 'text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-slate-800/40 dark:hover:bg-slate-800/40 light:hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-fadeIn" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Controls: Theme Toggle & Resume Action */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Dark / Light Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="p-2 rounded-xl text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 bg-slate-800/60 dark:bg-slate-800/60 light:bg-slate-100 hover:bg-slate-700/60 dark:hover:bg-slate-700/60 light:hover:bg-slate-200 transition-all duration-200 border border-slate-700/40 dark:border-slate-700/40 light:border-slate-300"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 animate-spin-once" />
              ) : (
                <Moon className="w-4 h-4 text-blue-600" />
              )}
            </button>

            {/* Quick Resume Button */}
            <button
              onClick={onOpenResumeModal}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-cyan-500 text-white shadow-md shadow-blue-600/25 hover:shadow-blue-500/40 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2 rounded-xl text-slate-300 dark:text-slate-300 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 bg-slate-800/60 dark:bg-slate-800/60 light:bg-slate-100 border border-slate-700/40 dark:border-slate-700/40 light:border-slate-300"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl glass-panel shadow-2xl border border-blue-500/20 animate-fadeIn">
            <div className="flex flex-col gap-1.5">
              {NAV_ITEMS.map(item => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 ${
                      isActive
                        ? 'text-blue-400 dark:text-blue-400 light:text-blue-600 bg-blue-500/15 font-semibold'
                        : 'text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white dark:hover:text-white hover:bg-slate-800/50 dark:hover:bg-slate-800/50 light:hover:bg-slate-100'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>}
                  </button>
                );
              })}
              <div className="pt-3 mt-2 border-t border-slate-700/50 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResumeModal();
                  }}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-blue-500/20"
                >
                  <Download className="w-4 h-4" />
                  <span>View Original Resume</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Layers, AlertCircle, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Project } from '../types/portfolio';
import { GithubIcon } from './SocialIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % project.screenshots.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + project.screenshots.length) % project.screenshots.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#0a1128] dark:bg-[#0a1128] light:bg-white border border-blue-500/25 shadow-2xl text-slate-100 dark:text-slate-100 light:text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-5 sm:p-6 bg-[#0a1128]/95 dark:bg-[#0a1128]/95 light:bg-white/95 backdrop-blur-md border-b border-slate-800 dark:border-slate-800 light:border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-blue-500/15 text-blue-400 mb-1.5">
              <span>{project.category}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              {project.subtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-xl text-slate-400 hover:text-white dark:hover:text-white light:hover:text-slate-900 bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-100 hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 sm:p-8 space-y-8">
          
          {/* Screenshots Gallery / Carousel */}
          {project.screenshots && project.screenshots.length > 0 && (
            <div className="space-y-3">
              <div className="relative rounded-2xl overflow-hidden bg-slate-950/80 border border-slate-800/80 flex items-center justify-center min-h-[260px] sm:min-h-[380px]">
                <img
                  src={project.screenshots[activeImageIndex].url}
                  alt={project.screenshots[activeImageIndex].caption}
                  className="max-h-[420px] w-auto max-w-full object-contain mx-auto"
                />

                {project.screenshots.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      aria-label="Previous screenshot"
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-sm border border-white/10 transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      aria-label="Next screenshot"
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-sm border border-white/10 transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 px-1">
                <span>{project.screenshots[activeImageIndex].caption}</span>
                <span className="font-mono text-[11px] shrink-0 ml-2">
                  {activeImageIndex + 1} / {project.screenshots.length}
                </span>
              </div>

              {/* Thumbnail Strip */}
              {project.screenshots.length > 1 && (
                <div className="flex gap-2 overflow-x-auto py-2">
                  {project.screenshots.map((s, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                        activeImageIndex === idx ? 'border-blue-500 scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={s.url} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Action Links Bar */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-md shadow-blue-600/30 transition-all duration-200"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open Live Demo</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-slate-800 dark:bg-slate-800 light:bg-slate-100 hover:bg-slate-700 dark:hover:bg-slate-700 light:hover:bg-slate-200 text-slate-100 dark:text-slate-100 light:text-slate-800 border border-slate-700/60 dark:border-slate-700/60 light:border-slate-300 transition-all duration-200"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View GitHub Repository</span>
              </a>
            )}
            {project.statusNote && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-slate-800/60 dark:bg-slate-800/60 light:bg-slate-100 text-slate-400 border border-slate-700/50">
                <AlertCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{project.statusNote}</span>
              </div>
            )}
          </div>

          {/* Tech Stack Badges */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-mono text-slate-400 mb-2.5">
              Technologies Implemented
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-5 rounded-2xl bg-rose-500/5 border border-rose-500/20 space-y-2">
              <h4 className="text-sm font-bold text-rose-400 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                <span>Problem Statement</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-2">
              <h4 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Proposed Solution</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture Overview if present */}
          {project.architectureOverview && (
            <div className="p-5 rounded-2xl bg-blue-500/5 border border-blue-500/20 space-y-2">
              <h4 className="text-sm font-bold text-blue-400 flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>Technical Architecture Overview</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
                {project.architectureOverview}
              </p>
            </div>
          )}

          {/* Key Features List */}
          <div>
            <h4 className="text-sm font-bold text-slate-200 dark:text-slate-200 light:text-slate-800 mb-3">
              Key Features & Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/50 dark:bg-slate-900/50 light:bg-slate-50 border border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-5 sm:p-6 bg-[#0a1128]/95 dark:bg-[#0a1128]/95 light:bg-white/95 border-t border-slate-800 dark:border-slate-800 light:border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-sm font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};

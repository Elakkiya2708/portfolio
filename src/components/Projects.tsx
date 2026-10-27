import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight, Eye, CheckCircle2, Layers, Globe, Shield } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../types/portfolio';
import { GithubIcon } from './SocialIcons';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Track selected screenshot index per project for interactive tab switching
  const [activeScreenshotIdx, setActiveScreenshotIdx] = useState<Record<string, number>>({
    'renewguard': 0,
    'visioninspect-ai': 0,
    'interviewiq': 0,
  });

  const handleSelectScreenshot = (projectId: string, idx: number) => {
    setActiveScreenshotIdx(prev => ({ ...prev, [projectId]: idx }));
  };

  const getProjectUrlBadge = (project: Project) => {
    switch (project.id) {
      case 'renewguard':
        return 'https://renewguard.app/dashboard';
      case 'visioninspect-ai':
        return 'https://visioninspect-ai.internal/qc-control';
      case 'interviewiq':
        return 'https://interviewiq.dev/assessment-portal';
      default:
        return 'https://portfolio-showcase.local';
    }
  };

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-blue-500/10 text-blue-400 dark:text-blue-400 light:text-blue-700 border border-blue-500/25 mb-3 shadow-sm">
            <Layers className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Featured Software Projects
          </h2>
          <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 max-w-2xl text-sm sm:text-base mt-3 leading-relaxed">
            Production-grade full-stack web applications and AI systems addressing manufacturing quality assurance, automated renewal compliance, and placement preparation.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 rounded-full mt-4"></div>
        </div>

        {/* Featured Projects Showcase List */}
        <div className="space-y-16">
          {PROJECTS.map((project, index) => {
            const isReversed = index % 2 === 1;
            const currentImgIdx = activeScreenshotIdx[project.id] ?? 0;
            const currentScreenshot = project.screenshots[currentImgIdx] || project.screenshots[0];
            const primaryScreenshotUrl = currentScreenshot?.url || '/projects/visioninspect_screen.png';
            const projectNumber = String(index + 1).padStart(2, '0');

            return (
              <div
                key={project.id}
                className="glass-card rounded-3xl overflow-hidden border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200/90 shadow-2xl light:shadow-xl light:shadow-slate-200/50 transition-all duration-300 hover:border-blue-500/40 relative group"
              >
                {/* Subtle top card glow line */}
                <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 opacity-80 group-hover:opacity-100 transition-opacity"></div>

                <div className="p-6 sm:p-8 lg:p-10">
                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}>
                    
                    {/* Visual Preview with Browser Mockup Frame */}
                    <div className={`lg:col-span-6 relative ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                      
                      {/* Browser / App Window Container */}
                      <div className="rounded-2xl overflow-hidden bg-slate-950 dark:bg-slate-950 light:bg-slate-900 border border-slate-800/90 shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-300">
                        
                        {/* Browser Top Window Header */}
                        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/95 dark:bg-slate-900/95 light:bg-slate-800/95 border-b border-slate-800/80">
                          {/* macOS Traffic Light Buttons */}
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
                          </div>

                          {/* Address Bar Mockup */}
                          <div className="flex-1 max-w-[280px] mx-3 px-3 py-1 rounded-md bg-slate-950/80 dark:bg-slate-950/80 light:bg-slate-900/90 border border-slate-800 flex items-center justify-center gap-1.5 text-[11px] font-mono text-slate-400 truncate">
                            <Globe className="w-3 h-3 text-cyan-400 shrink-0" />
                            <span className="truncate">{getProjectUrlBadge(project)}</span>
                          </div>

                          {/* Status Pill */}
                          <div className="flex items-center gap-1 text-[10px] font-mono font-medium text-emerald-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span className="hidden sm:inline">Active</span>
                          </div>
                        </div>

                        {/* Screenshot Display Frame */}
                        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#0a1128] dark:bg-[#0a1128] light:bg-slate-950 flex items-center justify-center">
                          <img
                            src={primaryScreenshotUrl}
                            alt={`${project.title} - ${currentScreenshot?.caption || 'Preview'}`}
                            className="w-full h-full object-contain p-1 sm:p-2 transform group-hover:scale-[1.01] transition-transform duration-500"
                            loading="lazy"
                          />

                          {/* Interactive Hover Action: Full Screen Inspector */}
                          <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                            <button
                              onClick={() => setSelectedProject(project)}
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-600/40 transition-transform transform hover:scale-105"
                            >
                              <Eye className="w-4 h-4" />
                              <span>Inspect Technical Architecture & Gallery</span>
                            </button>
                          </div>
                        </div>

                        {/* Interactive Screenshot Switcher Tabs */}
                        {project.screenshots.length > 1 && (
                          <div className="p-2 bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-800/90 border-t border-slate-800/70 flex items-center gap-1.5 overflow-x-auto">
                            <span className="text-[10px] font-mono uppercase text-slate-400 pl-1.5 pr-1 hidden sm:inline">
                              Views:
                            </span>
                            {project.screenshots.map((s, sIdx) => {
                              const isActive = currentImgIdx === sIdx;
                              return (
                                <button
                                  key={sIdx}
                                  onClick={() => handleSelectScreenshot(project.id, sIdx)}
                                  className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all truncate max-w-[150px] sm:max-w-none ${
                                    isActive
                                      ? 'bg-blue-600 text-white font-semibold shadow-sm'
                                      : 'bg-slate-800/60 dark:bg-slate-800/60 light:bg-slate-700/60 text-slate-300 hover:text-white hover:bg-slate-700/80'
                                  }`}
                                  title={s.caption}
                                >
                                  {sIdx === 0 && 'Main Dashboard'}
                                  {sIdx === 1 && (project.id === 'renewguard' ? 'Alert Audit Logs' : 'Defect Heatmap')}
                                  {sIdx === 2 && (project.id === 'renewguard' ? 'Auth & Setup' : 'Batch QC Metrics')}
                                  {sIdx > 2 && `View ${sIdx + 1}`}
                                </button>
                              );
                            })}
                          </div>
                        )}

                      </div>

                      {/* Micro-caption below screenshot */}
                      <div className="flex items-center justify-between mt-2.5 px-1 text-xs text-slate-400">
                        <span className="font-mono text-[11px] text-blue-400 dark:text-blue-400 light:text-blue-600">
                          {currentScreenshot?.caption ? currentScreenshot.caption.slice(0, 55) + '...' : `${project.screenshots.length} Screenshots`}
                        </span>
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="text-xs text-slate-400 hover:text-cyan-400 inline-flex items-center gap-1 font-medium"
                        >
                          <span>Full Modal</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                    </div>

                    {/* Right (or Left): Project Content & Technical Specs */}
                    <div className={`lg:col-span-6 space-y-4 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                      
                      {/* Project Index & Category Badges */}
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-blue-600/20 text-blue-400 dark:text-blue-300 light:text-blue-700 border border-blue-500/30">
                          PROJECT {projectNumber} / 03
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 dark:text-cyan-400 light:text-cyan-700 border border-cyan-500/20">
                          {project.category}
                        </span>
                        {project.liveUrl && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-400 dark:text-emerald-400 light:text-emerald-700 border border-emerald-500/30">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            Live Deployed
                          </span>
                        )}
                      </div>

                      {/* Project Title & Subtitle */}
                      <div>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-cyan-400 dark:text-cyan-400 light:text-blue-600 font-mono mt-1 font-semibold">
                          {project.subtitle}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 text-sm sm:text-base leading-relaxed">
                        {project.description}
                      </p>

                      {/* Key Features Bullets (Top 3) */}
                      <div className="space-y-2 pt-1">
                        {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 dark:text-slate-200 light:text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 dark:text-emerald-400 light:text-emerald-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technology Badges */}
                      <div className="pt-2">
                        <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-500 mb-2 font-semibold">
                          Engineered With:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map(t => (
                            <span
                              key={t}
                              className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 text-slate-200 dark:text-slate-200 light:text-slate-800 border border-slate-700/60 dark:border-slate-700/60 light:border-slate-300 hover:border-blue-500/40 transition-colors"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap items-center gap-3 pt-3">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-md shadow-blue-600/30 hover:shadow-blue-500/50 transition-all duration-200 transform hover:-translate-y-0.5"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>Live System</span>
                          </a>
                        )}

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-800 dark:bg-slate-800 light:bg-slate-100 hover:bg-slate-700 dark:hover:bg-slate-700 light:hover:bg-slate-200 text-slate-200 dark:text-slate-200 light:text-slate-800 border border-slate-700/60 dark:border-slate-700/60 light:border-slate-300 transition-all duration-200 transform hover:-translate-y-0.5"
                          >
                            <GithubIcon className="w-4 h-4" />
                            <span>Source Code</span>
                          </a>
                        )}

                        {/* View Architecture Blueprint */}
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-blue-400 dark:text-blue-400 light:text-blue-700 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/25 transition-all duration-200 transform hover:-translate-y-0.5"
                        >
                          <Eye className="w-4 h-4" />
                          <span>System Architecture</span>
                        </button>
                      </div>

                      {/* Production Status Note */}
                      {project.statusNote && !project.liveUrl && (
                        <p className="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-500 font-mono flex items-center gap-1.5 pt-1">
                          <Shield className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                          <span>{project.statusNote}</span>
                        </p>
                      )}

                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

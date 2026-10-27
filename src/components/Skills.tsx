import React, { useState } from 'react';
import { 
  Terminal, 
  Layout, 
  Server, 
  Database, 
  Cpu, 
  Wrench, 
  ShieldCheck, 
  Languages, 
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Programming Languages':
        return <Terminal className="w-5 h-5 text-blue-400" />;
      case 'Frontend Development':
        return <Layout className="w-5 h-5 text-cyan-400" />;
      case 'Backend Development':
        return <Server className="w-5 h-5 text-emerald-400" />;
      case 'Cloud and Database':
        return <Database className="w-5 h-5 text-amber-400" />;
      case 'AI and Machine Learning':
        return <Cpu className="w-5 h-5 text-purple-400" />;
      case 'Development Tools':
        return <Wrench className="w-5 h-5 text-indigo-400" />;
      case 'Security':
        return <ShieldCheck className="w-5 h-5 text-rose-400" />;
      case 'Spoken Languages':
        return <Languages className="w-5 h-5 text-teal-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-blue-400" />;
    }
  };

  const filteredCategories =
    selectedCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter(cat => cat.title === selectedCategory);

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
            <span>TECHNICAL EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Verified Technical Skills
          </h2>
          <p className="text-slate-400 max-w-xl text-sm sm:text-base mt-2">
            Technologies, frameworks, and programming tools applied across academic coursework and full-stack software projects.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-4"></div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold'
                : 'glass-panel text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-slate-900'
            }`}
          >
            All Skills ({SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0)})
          </button>
          {SKILL_CATEGORIES.map(cat => (
            <button
              key={cat.title}
              onClick={() => setSelectedCategory(cat.title)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                selectedCategory === cat.title
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold'
                  : 'glass-panel text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white dark:hover:text-white light:hover:text-slate-900'
              }`}
            >
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCategories.map(category => (
            <div
              key={category.title}
              className="glass-card p-6 rounded-2xl flex flex-col justify-between hover:border-blue-500/40 transition-all duration-300 group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-300 group-hover:scale-110 transition-transform duration-200">
                    {getCategoryIcon(category.title)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-4 line-clamp-2">
                  {category.description}
                </p>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <div
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 text-slate-200 dark:text-slate-200 light:text-slate-800 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-blue-500/50 hover:bg-blue-500/10 transition-colors duration-150"
                    >
                      <CheckCircle className="w-3 h-3 text-cyan-400 shrink-0" />
                      <span className="font-semibold">{skill.name}</span>
                      {skill.tag && (
                        <span className="text-[10px] text-slate-400 dark:text-slate-400 light:text-slate-500 font-mono">
                          • {skill.tag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>{category.skills.length} Competencies</span>
                <span className="text-blue-400">Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

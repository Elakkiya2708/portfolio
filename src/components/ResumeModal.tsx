import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-5xl h-[94vh] flex flex-col rounded-3xl bg-[#0a1128] dark:bg-[#0a1128] light:bg-white border border-blue-500/30 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 bg-[#0a1128]/95 dark:bg-[#0a1128]/95 light:bg-white/95 backdrop-blur-md border-b border-slate-800 dark:border-slate-800 light:border-slate-200">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue-600/15 text-blue-400 border border-blue-500/20">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                  Original Resume — {PERSONAL_INFO.name}
                </h3>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Exact Supplied PDF</span>
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono">
                {PERSONAL_INFO.resumeFileName}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Open in New Window */}
            <a
              href={PERSONAL_INFO.resumePdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 dark:bg-slate-800 light:bg-slate-100 hover:bg-slate-700 text-slate-200 dark:text-slate-200 light:text-slate-800 border border-slate-700/60 dark:border-slate-700/60 light:border-slate-300 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open in New Tab</span>
            </a>

            {/* Download Button */}
            <a
              href={PERSONAL_INFO.resumePdfPath}
              download={PERSONAL_INFO.resumeFileName}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-md shadow-blue-500/25 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close resume viewer"
              className="p-2 rounded-xl text-slate-400 hover:text-white dark:hover:text-white light:hover:text-slate-900 bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-100 hover:bg-slate-700 transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embedded PDF Viewer Container */}
        <div className="flex-1 w-full h-full bg-slate-950 relative overflow-hidden flex flex-col">
          <object
            data={PERSONAL_INFO.resumePdfPath}
            type="application/pdf"
            className="w-full h-full"
            aria-label={`PDF view of ${PERSONAL_INFO.name}'s original resume`}
          >
            {/* Fallback if browser inline PDF disabled */}
            <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-4">
              <FileText className="w-16 h-16 text-blue-400" />
              <h4 className="text-lg font-bold text-slate-100">
                Original Resume PDF Ready
              </h4>
              <p className="text-sm text-slate-400 max-w-md">
                Your browser may not support inline PDF previews. You can view or download the exact original PDF directly.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={PERSONAL_INFO.resumePdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-blue-600 text-white hover:bg-blue-500 transition-colors"
                >
                  Open in New Tab
                </a>
                <a
                  href={PERSONAL_INFO.resumePdfPath}
                  download={PERSONAL_INFO.resumeFileName}
                  className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors"
                >
                  Download PDF
                </a>
              </div>
            </div>
          </object>
        </div>

        {/* Modal Bottom Bar */}
        <div className="p-3 bg-[#0a1128]/95 dark:bg-[#0a1128]/95 light:bg-white/95 border-t border-slate-800 dark:border-slate-800 light:border-slate-200 flex items-center justify-between text-xs text-slate-400 px-5">
          <span>Preserving original contents and formatting without modification.</span>
          <span className="font-mono text-[11px] text-blue-400">Verified Original File</span>
        </div>
      </div>
    </div>
  );
};

import React, { useEffect } from 'react';
import { X, ExternalLink, Download, ShieldCheck } from 'lucide-react';
import type { Certification } from '../types/portfolio';

interface CertificateModalProps {
  certification: Certification | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certification, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (certification) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [certification, onClose]);

  if (!certification) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#0a1128] dark:bg-[#0a1128] light:bg-white border border-blue-500/25 shadow-2xl text-slate-100 dark:text-slate-100 light:text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 bg-[#0a1128]/95 dark:bg-[#0a1128]/95 light:bg-white/95 backdrop-blur-md border-b border-slate-800 dark:border-slate-800 light:border-slate-200">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-mono font-semibold bg-blue-500/15 text-blue-400 mb-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Credential</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-100 dark:text-slate-100 light:text-slate-900">
              {certification.name}
            </h3>
            <p className="text-xs text-slate-400">
              Issued by {certification.issuingOrg}
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

        {/* Modal Content */}
        <div className="p-5 sm:p-7 space-y-6">
          
          {/* Certificate Preview Frame */}
          {certification.fileUrl && (
            <div className="rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-xl flex items-center justify-center min-h-[300px]">
              {certification.fileType === 'image' ? (
                <img
                  src={certification.fileUrl}
                  alt={certification.name}
                  className="max-h-[500px] w-auto max-w-full object-contain mx-auto p-2"
                />
              ) : (
                <div className="w-full h-[450px]">
                  <iframe
                    src={`${certification.fileUrl}#page=${certification.page || 1}&toolbar=0&navpanes=0`}
                    title={certification.name}
                    className="w-full h-full border-0"
                  />
                </div>
              )}
            </div>
          )}

          {/* Validation & Verification Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-50 border border-slate-800 dark:border-slate-800 light:border-slate-200 space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div>
                <span className="text-slate-400 block text-[11px] font-mono uppercase">Issue Date</span>
                <span className="font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">{certification.issueDate}</span>
              </div>
              {certification.expirationDate && (
                <div>
                  <span className="text-slate-400 block text-[11px] font-mono uppercase">Valid Through</span>
                  <span className="font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800">{certification.expirationDate}</span>
                </div>
              )}
              {certification.validationNumber && (
                <div className="sm:col-span-2">
                  <span className="text-slate-400 block text-[11px] font-mono uppercase">Credential Validation Number</span>
                  <span className="font-mono text-xs sm:text-sm text-cyan-400 break-all bg-slate-950 px-2 py-1 rounded inline-block mt-0.5 border border-slate-800">
                    {certification.validationNumber}
                  </span>
                </div>
              )}
            </div>

            {certification.description && (
              <p className="text-xs sm:text-sm text-slate-400 pt-2 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200">
                {certification.description}
              </p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            {certification.validationUrl && (
              <a
                href={certification.validationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-md shadow-blue-600/25 transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Verify on Official Portal</span>
              </a>
            )}

            {certification.fileUrl && (
              <a
                href={certification.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-800 dark:bg-slate-800 light:bg-slate-100 hover:bg-slate-700 text-slate-200 dark:text-slate-200 light:text-slate-800 border border-slate-700/60 dark:border-slate-700/60 light:border-slate-300 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Open Full Original File</span>
              </a>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

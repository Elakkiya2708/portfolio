import React, { useState } from 'react';
import { Award, ExternalLink, Eye, Shield, Sparkles, Copy, Check } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import type { Certification } from '../types/portfolio';
import { CertificateModal } from './CertificateModal';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyId = (validationNumber: string) => {
    navigator.clipboard.writeText(validationNumber);
    setCopiedId(validationNumber);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  return (
    <section id="certifications" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-blue-500/10 text-blue-400 dark:text-blue-400 light:text-blue-700 border border-blue-500/25 mb-3 shadow-sm">
            <Shield className="w-3.5 h-3.5" />
            <span>OFFICIAL CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Certifications & Industry Credentials
          </h2>
          <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 max-w-2xl text-sm sm:text-base mt-3 leading-relaxed">
            Verified credentials including 3 Amazon Web Services (AWS) certifications, Cisco cybersecurity training, and specialized technical honors.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 rounded-full mt-4"></div>
        </div>

        {/* AWS Featured Certifications Spotlight */}
        <div className="mb-14">
          <div className="flex items-center justify-between gap-2 mb-6 flex-wrap">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/25">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                Amazon Web Services (AWS) Credentials
              </h3>
            </div>
            <span className="text-xs font-mono font-semibold text-cyan-400 dark:text-cyan-400 light:text-blue-700 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/25">
              3x Officially Verified
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CERTIFICATIONS.filter(c => c.issuingOrg === 'Amazon Web Services').map(cert => (
              <div
                key={cert.id}
                className="glass-card p-6 sm:p-7 rounded-3xl border border-blue-500/25 hover:border-blue-500/50 flex flex-col justify-between transition-all duration-300 relative group shadow-xl"
              >
                {/* Glow accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl group-hover:bg-blue-600/20 transition-all pointer-events-none"></div>

                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-bold bg-amber-500/15 text-amber-300 dark:text-amber-300 light:text-amber-700 border border-amber-500/30">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>AWS Certified</span>
                    </div>
                    <span className="text-xs font-mono text-slate-400 font-medium">
                      {cert.issueDate}
                    </span>
                  </div>

                  {/* Cert Name */}
                  <h4 className="text-xl font-black text-slate-100 dark:text-slate-100 light:text-slate-900 group-hover:text-blue-400 transition-colors leading-snug">
                    {cert.name}
                  </h4>
                  <p className="text-xs text-blue-400 dark:text-blue-400 light:text-blue-600 font-mono mt-1 font-semibold">
                    {cert.issuingOrg}
                  </p>

                  {/* Validation ID Box with 1-Click Copy */}
                  {cert.validationNumber && (
                    <div className="mt-4 p-3 rounded-xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-300 flex items-center justify-between gap-2">
                      <div className="min-w-0">
                        <span className="text-[10px] text-slate-400 uppercase font-mono block">Validation ID</span>
                        <span className="text-xs font-mono text-cyan-300 dark:text-cyan-300 light:text-blue-700 font-bold truncate block select-all">
                          {cert.validationNumber}
                        </span>
                      </div>
                      <button
                        onClick={() => handleCopyId(cert.validationNumber!)}
                        className="p-1.5 rounded-lg bg-slate-800 dark:bg-slate-800 light:bg-slate-200 text-slate-300 hover:text-white transition-colors shrink-0"
                        title="Copy Validation ID"
                        aria-label="Copy Validation ID"
                      >
                        {copiedId === cert.validationNumber ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5 text-slate-400" />
                        )}
                      </button>
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 mt-4 leading-relaxed line-clamp-3">
                    {cert.description}
                  </p>
                </div>

                {/* Bottom Action Buttons */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 dark:text-blue-300 light:text-blue-700 hover:text-white border border-blue-500/30 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Certificate</span>
                  </button>

                  {cert.validationUrl && (
                    <a
                      href={cert.validationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-cyan-400 transition-colors font-medium"
                    >
                      <span>Verify Online</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cisco, NPTEL & Partner Certifications */}
        <div>
          <div className="flex items-center gap-2.5 mb-6">
            <div className="p-2 rounded-xl bg-cyan-600/15 text-cyan-400 border border-cyan-500/25">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
              Cybersecurity, Academic & Professional Honors
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTIFICATIONS.filter(c => c.issuingOrg !== 'Amazon Web Services').map(cert => (
              <div
                key={cert.id}
                className="glass-card p-6 rounded-3xl border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 hover:border-blue-500/40 flex flex-col justify-between transition-all duration-300 shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="p-2 rounded-xl bg-blue-500/10 text-cyan-400">
                      <Award className="w-4 h-4" />
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {cert.issueDate}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-100 dark:text-slate-100 light:text-slate-900 mb-1 leading-snug">
                    {cert.name}
                  </h4>
                  <p className="text-xs text-blue-400 dark:text-blue-400 light:text-blue-600 font-semibold mb-2">
                    {cert.issuingOrg}
                  </p>

                  {cert.description && (
                    <p className="text-xs text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed line-clamp-3">
                      {cert.description}
                    </p>
                  )}
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200 flex items-center justify-between">
                  {cert.fileUrl ? (
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 dark:text-blue-400 light:text-blue-700 hover:text-cyan-300 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Proof</span>
                    </button>
                  ) : (
                    <span className="text-[11px] font-mono text-slate-400">Verified Program</span>
                  )}

                  {cert.validationUrl && (
                    <a
                      href={cert.validationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-slate-400 hover:text-cyan-400 inline-flex items-center gap-1"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Certificate Preview Modal */}
      <CertificateModal
        certification={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
};

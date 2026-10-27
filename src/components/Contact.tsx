import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2, Copy, Check, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // Spam bot protection
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2000);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Please provide a subject.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }
    return errs;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('idle');
    setStatusMessage('');

    if (formData.honeypot) {
      console.warn('Spam submission detected');
      return;
    }

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        `[Portfolio Inquiry] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
      )}`;

      await new Promise(resolve => setTimeout(resolve, 800));

      window.location.href = mailtoUrl;

      setSubmitStatus('success');
      setStatusMessage(
        `Thank you ${formData.name}! Your default email client has been launched with your inquiry addressed directly to ${PERSONAL_INFO.email}.`
      );
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        honeypot: '',
      });
    } catch {
      setSubmitStatus('error');
      setStatusMessage(`Unable to open email client automatically. Please write directly to ${PERSONAL_INFO.email}.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-blue-500/10 text-blue-400 dark:text-blue-400 light:text-blue-700 border border-blue-500/25 mb-3 shadow-sm">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-100 dark:text-slate-100 light:text-slate-900 tracking-tight">
            Contact & Professional Networking
          </h2>
          <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 max-w-xl text-sm sm:text-base mt-3 leading-relaxed">
            Open to software engineering internships, technical collaborations, and campus placement opportunities.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Profiles */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200/90 shadow-2xl light:shadow-xl light:shadow-slate-200/50 space-y-6">
              <div>
                <h3 className="text-2xl font-black text-slate-100 dark:text-slate-100 light:text-slate-900">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-xs sm:text-sm text-cyan-400 dark:text-cyan-400 light:text-blue-600 font-mono mt-1 font-semibold">
                  {PERSONAL_INFO.professionalTitle} • {PERSONAL_INFO.college}
                </p>
              </div>

              {/* Contact items with 1-Click Copy */}
              <div className="space-y-4">
                
                {/* Email Item */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:border-blue-500/50 transition-all group">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="flex items-center gap-3.5 min-w-0"
                  >
                    <div className="p-3 rounded-xl bg-blue-600/15 text-blue-400 group-hover:scale-110 transition-transform shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono text-slate-400 block uppercase font-semibold">Email Address</span>
                      <span className="text-sm font-bold text-slate-200 dark:text-slate-200 light:text-slate-800 group-hover:text-blue-400 transition-colors truncate block">
                        {PERSONAL_INFO.email}
                      </span>
                    </div>
                  </a>

                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                    className="p-2 rounded-xl bg-slate-800/80 dark:bg-slate-800/80 light:bg-white text-slate-300 hover:text-white transition-colors shrink-0 shadow-sm"
                    title="Copy Email"
                    aria-label="Copy Email to Clipboard"
                  >
                    {copiedType === 'email' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-slate-400" />
                    )}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200 hover:border-blue-500/50 transition-all group">
                  <a
                    href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-3.5 min-w-0"
                  >
                    <div className="p-3 rounded-xl bg-cyan-600/15 text-cyan-400 group-hover:scale-110 transition-transform shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono text-slate-400 block uppercase font-semibold">Phone Number</span>
                      <span className="text-sm font-bold text-slate-200 dark:text-slate-200 light:text-slate-800 group-hover:text-cyan-400 transition-colors truncate block">
                        {PERSONAL_INFO.phone}
                      </span>
                    </div>
                  </a>

                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                    className="p-2 rounded-xl bg-slate-800/80 dark:bg-slate-800/80 light:bg-white text-slate-300 hover:text-white transition-colors shrink-0 shadow-sm"
                    title="Copy Phone"
                    aria-label="Copy Phone to Clipboard"
                  >
                    {copiedType === 'phone' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-slate-400" />
                    )}
                  </button>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200">
                  <div className="p-3 rounded-xl bg-rose-600/15 text-rose-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase font-semibold">Location</span>
                    <span className="text-sm font-bold text-slate-200 dark:text-slate-200 light:text-slate-800">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>

              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-slate-800 dark:border-slate-800 light:border-slate-200">
                <span className="text-xs font-mono uppercase text-slate-400 block mb-3 font-semibold">
                  Official Profiles
                </span>
                <div className="flex gap-3">
                  <a
                    href={PERSONAL_INFO.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-200 dark:text-slate-200 light:text-slate-800 hover:text-white hover:border-blue-500/50 hover:bg-blue-600/10 transition-all text-xs font-semibold"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub Profile</span>
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900/90 dark:bg-slate-900/90 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-300 text-slate-200 dark:text-slate-200 light:text-slate-800 hover:text-white hover:border-blue-500/50 hover:bg-blue-600/10 transition-all text-xs font-semibold"
                  >
                    <LinkedinIcon className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Validated Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200/90 shadow-2xl light:shadow-xl light:shadow-slate-200/50">
              
              <h3 className="text-2xl font-black text-slate-100 dark:text-slate-100 light:text-slate-900 mb-1">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 mb-6 leading-relaxed">
                Fill in the details below to initiate direct communication with Elakkiya.
              </p>

              {/* Feedback Alert */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 dark:text-emerald-400 light:text-emerald-700 flex items-start gap-3 text-xs sm:text-sm animate-fadeIn">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Message Prepared</span>
                    <span>{statusMessage}</span>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 dark:text-rose-400 light:text-rose-700 flex items-start gap-3 text-xs sm:text-sm animate-fadeIn">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Notice</span>
                    <span>{statusMessage}</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Honeypot hidden input */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5 font-semibold">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white text-slate-100 dark:text-slate-100 light:text-slate-900 placeholder:text-slate-500 border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.name ? 'border-rose-500' : 'border-slate-800 dark:border-slate-800 light:border-slate-300'
                      }`}
                    />
                    {errors.name && <p className="text-xs text-rose-400 mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5 font-semibold">
                      Your Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white text-slate-100 dark:text-slate-100 light:text-slate-900 placeholder:text-slate-500 border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.email ? 'border-rose-500' : 'border-slate-800 dark:border-slate-800 light:border-slate-300'
                      }`}
                    />
                    {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5 font-semibold">
                    Subject <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Software Engineering Internship / Full-Stack Project Collaboration"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white text-slate-100 dark:text-slate-100 light:text-slate-900 placeholder:text-slate-500 border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.subject ? 'border-rose-500' : 'border-slate-800 dark:border-slate-800 light:border-slate-300'
                    }`}
                  />
                  {errors.subject && <p className="text-xs text-rose-400 mt-1">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 dark:text-slate-300 light:text-slate-700 mb-1.5 font-semibold">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Elakkiya, we are impressed by your projects (RenewGuard, VisionInspect AI) and would like to discuss..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 dark:bg-slate-900/80 light:bg-white text-slate-100 dark:text-slate-100 light:text-slate-900 placeholder:text-slate-500 border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                      errors.message ? 'border-rose-500' : 'border-slate-800 dark:border-slate-800 light:border-slate-300'
                    }`}
                  />
                  {errors.message && <p className="text-xs text-rose-400 mt-1">{errors.message}</p>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Direct Message</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-slate-400 font-mono">
                  Protected with client-side validation and anti-spam verification.
                </p>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

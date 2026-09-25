import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle2, Copy, Check, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactFormState } from '../types';

interface ContactProps {
  onOpenResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [showFormModal, setShowFormModal] = useState(false);
  const [formData, setFormData] = useState<ContactFormState>({
    name: '',
    email: '',
    subject: '',
    projectType: 'Frontend Engineering',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setShowFormModal(false);
      }, 4000);
    }, 1000);
  };

  return (
    <section id="contact" className="bg-[#121316] text-white border-b border-[#19396D]/20 scroll-mt-12 overflow-hidden">
      {/* 2-Column Split Layout (Exact Match to Screenshot 7) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[620px]">
        {/* ========================================================================= */}
        {/* LEFT COLUMN: Monospace Text & Contact Channels (Screenshot 7 Exact Match) */}
        {/* ========================================================================= */}
        <div className="lg:col-span-6 p-8 sm:p-14 lg:p-20 xl:p-24 flex flex-col justify-between space-y-10">
          <div className="space-y-8 max-w-xl">
            {/* Title */}
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.08]">
              Available for select <br />
              freelance <br />
              opportunities
            </h2>

            {/* Monospace Subtitle Paragraph */}
            <div className="font-mono text-sm sm:text-base text-neutral-300 space-y-2 leading-relaxed">
              <p>Have an exciting project you need help with?</p>
              <p>Send me an email or contact me via instant message!</p>
            </div>

            {/* Big Underlined Email Address (Screenshot 7 Exact Match) */}
            <div className="pt-4">
              <div className="flex items-center gap-3">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-mono font-bold text-lg sm:text-xl lg:text-2xl text-white hover:text-[#38BDF8] underline decoration-2 underline-offset-8 transition-colors break-all"
                >
                  {PERSONAL_INFO.email}
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded bg-neutral-800 hover:bg-[#19396D] text-neutral-300 hover:text-white transition-colors cursor-pointer shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Monospace Channels List (Screenshot 7 Exact Match) */}
            <div className="font-mono text-base space-y-2.5 pt-4 text-neutral-200">
              <div>
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                  className="hover:text-[#38BDF8] transition-colors"
                >
                  Phone: {PERSONAL_INFO.phone}
                </a>
              </div>

              <div>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#38BDF8] transition-colors"
                >
                  LinkedIn
                </a>
              </div>

              <div>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#38BDF8] transition-colors"
                >
                  Github
                </a>
              </div>

              <div>
                <button
                  onClick={onOpenResume}
                  className="hover:text-[#38BDF8] transition-colors text-left cursor-pointer"
                >
                  Download Resume (PDF)
                </button>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => setShowFormModal(true)}
                  className="px-5 py-2.5 rounded bg-white text-[#121316] hover:bg-neutral-200 text-xs font-mono font-bold transition-all flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <MessageSquare className="w-4 h-4 text-[#121316]" />
                  <span>Send Message Form</span>
                </button>
              </div>
            </div>
          </div>

          <div className="text-xs font-mono text-neutral-500 pt-6">
            // Omito Elizabeth · Frontend & DevOps Practitioner · Kisumu & Nairobi
          </div>
        </div>

        {/* ========================================================================= */}
        {/* RIGHT COLUMN: 3 Contiguous Solid Colored Boxes (NO GAP, Screenshot 7 Match) */}
        {/* ========================================================================= */}
        <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-0 select-none">
          {/* BOX 1: Tall Solid Purple Box (Exact Color #A259FF from Screenshot 7) */}
          <div className="bg-[#A259FF] text-white p-8 sm:p-10 lg:p-12 flex flex-col justify-between min-h-[380px] md:min-h-full">
            {/* Top Row: Quote mark + Circular Avatar */}
            <div className="flex items-start justify-between">
              {/* Massive White Double Quote Glyphs */}
              <svg className="w-14 h-14 text-white fill-current opacity-95 shrink-0" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Circular Avatar Photo (Mark Greenspan) */}
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/60 shadow-lg shrink-0 bg-neutral-900">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                  alt="Mark Greenspan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Testimonial Quote Text */}
            <p className="text-xs sm:text-sm text-white/95 leading-relaxed font-sans my-8">
              Since 2024 Elizabeth has been responsible for the development of our systems and client web applications which has been instrumental to our team's delivery. Even while working remotely she’s been highly responsive, organized and strategic in her thinking. In addition to staying on top of day-to-day site changes and builds, she’s provided us with great advice to stay on top of the current changes in web technologies. She’s also implemented effective project management and QA processes. As a result Elizabeth has been a highly valued and impactful member of our team.
            </p>

            {/* Author Attribution */}
            <div className="space-y-0.5">
              <div className="font-bold text-sm sm:text-base text-white">
                – Mark Greenspan
              </div>
              <div className="text-xs text-white/80">
                Founder at influenceTHIS Canada
              </div>
            </div>
          </div>

          {/* RIGHT HALF: Two Vertically Stacked Solid Blocks (Blue & Deep Purple) */}
          <div className="flex flex-col gap-0">
            {/* BOX 2: Solid Electric Blue (Exact Color #0066FF from Screenshot 7) */}
            <div className="bg-[#0066FF] text-white p-8 sm:p-10 flex flex-col justify-between flex-1 min-h-[290px]">
              {/* Top Row: Quote mark + Circular Avatar */}
              <div className="flex items-start justify-between">
                <svg className="w-12 h-12 text-white fill-current opacity-95 shrink-0" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                {/* Circular Avatar Photo (Wilfried Hajek) */}
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/60 shadow-lg shrink-0 bg-neutral-900">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
                    alt="Wilfried Hajek"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Quote Text */}
              <p className="text-xs sm:text-sm text-white/95 leading-relaxed font-sans my-6">
                Elizabeth is AMAZING! If you have any doubt about hiring her, ask me – I am really impressed by this developer!
              </p>

              {/* Attribution */}
              <div className="space-y-0.5">
                <div className="font-bold text-sm sm:text-base text-white">
                  – Wilfried Hajek
                </div>
                <div className="text-xs text-white/80">
                  Agile Coach | Speaker | Trainer
                </div>
              </div>
            </div>

            {/* BOX 3: Solid Royal Violet Purple (Exact Color #8435E8 from Screenshot 7) */}
            <div className="bg-[#8435E8] text-white p-8 sm:p-10 flex flex-col justify-between flex-1 min-h-[310px]">
              {/* Top Row: Quote mark + Circular Avatar */}
              <div className="flex items-start justify-between">
                <svg className="w-12 h-12 text-white fill-current opacity-95 shrink-0" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                {/* Circular Avatar Photo (Jonathan Castro) */}
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/60 shadow-lg shrink-0 bg-neutral-900">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
                    alt="Jonathan Castro"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Quote Text */}
              <p className="text-xs sm:text-sm text-white/95 leading-relaxed font-sans my-6">
                Elizabeth is one of the best professionals that we have known in web development skills. Between her skills you can find good communication and accuracy with the planning in complex projects.
              </p>

              {/* Attribution */}
              <div className="space-y-0.5">
                <div className="font-bold text-sm sm:text-base text-white">
                  – Jonathan Castro
                </div>
                <div className="text-xs text-white/80">
                  CEO & Founder at The Cliff
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Direct Inquiry Modal */}
      {showFormModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-lg rounded-2xl bg-[#0F1424] border border-[#19396D] shadow-2xl p-6 sm:p-8 text-white">
            <h3 className="font-display font-bold text-2xl text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs text-neutral-400 font-mono mb-6">
              Transmission to omitolizatieno@gmail.com
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="font-bold text-white text-base">Message Sent Successfully!</h4>
                <p className="text-xs text-neutral-300">
                  Thank you! Elizabeth will reply to your message within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2 rounded bg-black/50 border border-neutral-700 text-white text-xs font-mono focus:border-[#38BDF8] focus:outline-none"
                    placeholder="Alex Otieno"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2 rounded bg-black/50 border border-neutral-700 text-white text-xs font-mono focus:border-[#38BDF8] focus:outline-none"
                    placeholder="alex@domain.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">
                    Project Scope / Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2 rounded bg-black/50 border border-neutral-700 text-white text-xs font-mono focus:border-[#38BDF8] focus:outline-none"
                    placeholder="Describe your web application, live streaming, or DevOps project..."
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    type="button"
                    onClick={() => setShowFormModal(false)}
                    className="text-xs font-mono text-neutral-400 hover:text-white cursor-pointer"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-5 py-2.5 rounded bg-[#19396D] hover:bg-[#142F5E] text-white text-xs font-mono font-bold border border-[#38BDF8]/40 flex items-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>{isSubmitting ? 'Transmitting...' : 'Send Message'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

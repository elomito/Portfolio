import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, Send, CheckCircle2, Copy, Check, MessageSquare, Camera } from 'lucide-react';
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

  // Reviewer Photos State
  const [reviewerPhotos, setReviewerPhotos] = useState<{
    flovian?: string;
    vallery?: string;
    clinton?: string;
  }>({});

  const reviewerFileInputRef = useRef<HTMLInputElement>(null);
  const [activeReviewerTarget, setActiveReviewerTarget] = useState<'flovian' | 'vallery' | 'clinton' | 'any'>('any');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('omito_reviewer_photos');
      if (saved) {
        setReviewerPhotos(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const saveReviewerPhoto = async (key: 'flovian' | 'vallery' | 'clinton', filename: string, base64: string) => {
    setReviewerPhotos((prev) => {
      const next = { ...prev, [key]: base64 };
      try {
        localStorage.setItem('omito_reviewer_photos', JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });

    try {
      await fetch('/api/upload-photo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename, base64 }),
      });
    } catch {
      // server persistence is optional fallback
    }
  };

  const handleReviewerFiles = (files: FileList | null, explicitTarget?: 'flovian' | 'vallery' | 'clinton') => {
    if (!files || files.length === 0) return;
    const currentTarget = explicitTarget || activeReviewerTarget;

    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64 = e.target?.result as string;
        if (!base64) return;

        const nameLower = file.name.toLowerCase();
        let target: 'flovian' | 'vallery' | 'clinton' | null = null;

        if (nameLower.includes('flovian')) {
          target = 'flovian';
        } else if (nameLower.includes('vallery')) {
          target = 'vallery';
        } else if (nameLower.includes('clinton')) {
          target = 'clinton';
        } else if (currentTarget !== 'any') {
          target = currentTarget;
        }

        if (target) {
          saveReviewerPhoto(target, file.name, base64);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const openPickerFor = (target: 'flovian' | 'vallery' | 'clinton') => {
    setActiveReviewerTarget(target);
    if (reviewerFileInputRef.current) {
      reviewerFileInputRef.current.value = '';
      reviewerFileInputRef.current.click();
    }
  };

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
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
        {/* ========================================================================= */}
        {/* LEFT COLUMN: Monospace Text & Contact Channels (Screenshot 7 Exact Match) */}
        {/* ========================================================================= */}
        <div className="lg:col-span-6 p-8 sm:p-10 lg:p-14 xl:p-16 flex flex-col justify-between space-y-8">
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
                <a
                  href={PERSONAL_INFO.devto}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#38BDF8] transition-colors"
                >
                  Dev.to
                </a>
              </div>

              <div>
                <a
                  href={PERSONAL_INFO.x}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#38BDF8] transition-colors"
                >
                  X (Twitter)
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
        </div>

        {/* ========================================================================= */}
        {/* RIGHT COLUMN: 3 Contiguous Solid Colored Boxes (NO GAP, Screenshot 7 Match) */}
        {/* ========================================================================= */}
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            handleReviewerFiles(e.dataTransfer.files);
          }}
          className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-0 select-none relative"
        >
          {/* Hidden File Input for Reviewer Photos */}
          <input
            ref={reviewerFileInputRef}
            type="file"
            multiple
            accept="image/*,.webp,.jpeg,.jpg,.png"
            className="hidden"
            onChange={(e) => handleReviewerFiles(e.target.files)}
          />

          {/* BOX 1: Tall Solid Purple Box (Flovian Owiti) */}
          <div className="bg-[#A259FF] text-white p-7 sm:p-9 lg:p-11 flex flex-col justify-between min-h-[380px] md:min-h-full">
            {/* Top Row: Quote mark + Circular Avatar Photo */}
            <div className="flex items-start justify-between">
              {/* Massive White Double Quote Glyphs */}
              <svg className="w-12 h-12 text-white fill-current opacity-95 shrink-0" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Circular Avatar Photo Badge (Flovian Owiti) */}
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/80 shadow-xl shrink-0 bg-neutral-900 ring-2 ring-white/20">
                <img
                  src={reviewerPhotos.flovian || '/flovian.webp'}
                  alt="Flovian Owiti"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    if (e.currentTarget.src.includes('flovian.webp')) {
                      e.currentTarget.src = '/Flovian%20Owiti.webp';
                    } else if (!e.currentTarget.src.includes('flovian-owiti.webp')) {
                      e.currentTarget.src = '/reviewers/flovian-owiti.webp';
                    }
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-white font-display font-black text-lg pointer-events-none -z-10">
                  FO
                </div>
              </div>
            </div>

            {/* Testimonial Quote Text */}
            <div className="text-xs sm:text-[13px] text-white/95 leading-relaxed font-sans my-6 space-y-3">
              <p>
                I have had the opportunity to work closely with Elizabeth Omito during her Project Management shadowing experience on the LLF project, and what stands out to me is how naturally she connects technology, people and delivery.
              </p>
              <p>
                Elizabeth is not the kind of project manager who simply tracks tasks on a board. She is curious about what is happening underneath the task. When the team is discussing development, design, QA or technical challenges, she takes the initiative to understand the context, ask the right questions and connect the discussion back to the project objectives. As a result Elizabeth has been a highly valued and impactful member of our team.
              </p>
            </div>

            {/* Author Attribution */}
            <div className="space-y-0.5 pt-2 border-t border-white/20">
              <div className="font-bold text-sm sm:text-base text-white">
                Flovian Owiti
              </div>
              <div className="text-xs text-white/80">
                Project Manager at Zone01 Kisumu
              </div>
            </div>
          </div>

          {/* RIGHT HALF: Two Vertically Stacked Solid Blocks (Blue & Deep Purple) */}
          <div className="flex flex-col gap-0">
            {/* BOX 2: Solid Electric Blue (Vallery Odinga) */}
            <div className="bg-[#0066FF] text-white p-7 sm:p-9 flex flex-col justify-between flex-1 min-h-[310px]">
              {/* Top Row: Quote mark + Circular Avatar Photo */}
              <div className="flex items-start justify-between">
                <svg className="w-10 h-10 text-white fill-current opacity-95 shrink-0" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                {/* Circular Avatar Photo Badge (Vallery Odinga) */}
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white/80 shadow-xl shrink-0 bg-neutral-900 ring-2 ring-white/20">
                  <img
                    src={reviewerPhotos.vallery || '/vallery.webp'}
                    alt="Vallery Odinga"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      if (e.currentTarget.src.includes('vallery.webp')) {
                        e.currentTarget.src = '/Vallery%20Odinga.webp';
                      } else if (!e.currentTarget.src.includes('vallery-odinga.webp')) {
                        e.currentTarget.src = '/reviewers/vallery-odinga.webp';
                      }
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-white font-display font-black text-base pointer-events-none -z-10">
                    VO
                  </div>
                </div>
              </div>

              {/* Quote Text */}
              <div className="text-xs sm:text-[13px] text-white/95 leading-relaxed font-sans my-4 space-y-2.5">
                <p>
                  Elizabeth approaches technology with a strong problem-solving mindset. She is not afraid to ask questions, dig into how things work, and move from simply understanding an idea to actually building with it. Her growing interest in Bitcoin, Lightning, open-source development, and software engineering reflects someone who is intentional about expanding her technical depth.
                </p>
                <p>
                  I’m confident that Elizabeth will continue growing into a strong software engineer and contributor within the open-source ecosystem. Her curiosity, consistency, and willingness to learn make her someone worth watching.
                </p>
              </div>

              {/* Attribution */}
              <div className="space-y-0.5 pt-2 border-t border-white/20">
                <div className="font-bold text-sm sm:text-base text-white">
                  Vallery Odinga
                </div>
                <div className="text-xs text-white/80">
                  Bitcoin Open Source Contributor
                </div>
              </div>
            </div>

            {/* BOX 3: Solid Royal Violet Purple (Clinton Odhiambo) */}
            <div className="bg-[#8435E8] text-white p-7 sm:p-9 flex flex-col justify-between flex-1 min-h-[310px]">
              {/* Top Row: Quote mark + Circular Avatar Photo */}
              <div className="flex items-start justify-between">
                <svg className="w-10 h-10 text-white fill-current opacity-95 shrink-0" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                {/* Circular Avatar Photo Badge (Clinton Odhiambo) */}
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white/80 shadow-xl shrink-0 bg-neutral-900 ring-2 ring-white/20">
                  <img
                    src={reviewerPhotos.clinton || '/clinton.webp'}
                    alt="Clinton Odhiambo"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      if (e.currentTarget.src.includes('clinton.webp')) {
                        e.currentTarget.src = '/Clinton%20Odhiambo.webp';
                      } else if (!e.currentTarget.src.includes('clinton-odhiambo.webp')) {
                        e.currentTarget.src = '/reviewers/clinton-odhiambo.webp';
                      }
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-white font-display font-black text-base pointer-events-none -z-10">
                    CO
                  </div>
                </div>
              </div>

              {/* Quote Text */}
              <div className="text-xs sm:text-[13px] text-white/95 leading-relaxed font-sans my-4 space-y-2.5">
                <p>
                  Elizabeth is comfortable working with Git and Linux-based environments and has been gaining practical exposure to CI/CD, deployment workflows, environment configuration, and troubleshooting application and infrastructure issues. She approaches technical problems with curiosity and is willing to investigate issues from the application layer through to the underlying system.
                </p>
                <p>
                  I would recommend Elizabeth to opportunities where she can continue developing her DevOps skills while contributing to real engineering teams. She has the mindset, curiosity, and practical foundation needed to grow into a strong DevOps professional.
                </p>
              </div>

              {/* Attribution */}
              <div className="space-y-0.5 pt-2 border-t border-white/20">
                <div className="font-bold text-sm sm:text-base text-white">
                  Clinton Odhiambo
                </div>
                <div className="text-xs text-white/80">
                  CEO Dev.wengi | Fullstack Developer
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

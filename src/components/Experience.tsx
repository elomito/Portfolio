import React, { useState } from 'react';
import { Plus, Minus, MapPin, ExternalLink, GraduationCap, Award } from 'lucide-react';
import { EXPERIENCES, EDUCATION_LIST, CERTIFICATIONS_LIST } from '../data/portfolioData';

interface ExperienceProps {
  onOpenResume: () => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onOpenResume }) => {
  const [expandedId, setExpandedId] = useState<string>('zone01');

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? '' : id));
  };

  return (
    <section
      id="experience"
      className="py-24 sm:py-32 bg-[#0F1117] text-white border-b border-[#19396D]/20 scroll-mt-12"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Centered Heading (Exact Match to Screenshot 6) */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
            Professional <br className="sm:hidden" />
            Experience
          </h2>
        </div>

        {/* Accordion List (Screenshot 6 exact layout) */}
        <div className="space-y-4">
          {EXPERIENCES.map((exp) => {
            const isExpanded = expandedId === exp.id;
            return (
              <div
                key={exp.id}
                className="rounded-xl overflow-hidden border border-neutral-800 transition-all duration-300 shadow-lg"
              >
                {/* Header Bar */}
                <button
                  type="button"
                  onClick={() => toggleExpand(exp.id)}
                  className={`w-full px-6 sm:px-8 py-5 flex items-center justify-between text-left transition-colors cursor-pointer ${
                    isExpanded
                      ? 'bg-[#19396D] text-white' // Pantone Surf the Web
                      : 'bg-[#161C2C] hover:bg-[#1C2438] text-neutral-200'
                  }`}
                >
                  <div className="font-display font-bold text-base sm:text-lg pr-4">
                    <span>{exp.role}</span>{' '}
                    <span className="opacity-90 font-normal text-sm sm:text-base">
                      @ {exp.company}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 shrink-0 font-mono text-xs sm:text-sm">
                    <span className="opacity-80">{exp.period}</span>
                    <span className="p-1 rounded bg-black/20 text-white">
                      {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </div>
                </button>

                {/* Expanded Content Drawer (Exact Match to Screenshot 6) */}
                {isExpanded && (
                  <div className="p-6 sm:p-8 bg-[#0D121F] border-t border-[#19396D]/30 relative overflow-hidden animate-fadeIn">
                    {/* Watermark Company Logo on Right (Screenshot 6 match) */}
                    <div className="absolute right-6 sm:right-10 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-10 font-display font-black text-6xl sm:text-7xl uppercase text-white">
                      {exp.logoText}
                    </div>

                    <div className="relative z-10 space-y-5 max-w-2xl">
                      {/* Location & Website Link */}
                      <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400">
                        <span className="flex items-center gap-1.5 text-neutral-300">
                          <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
                          {exp.location}
                        </span>
                        <span>·</span>
                        <a
                          href={`https://${exp.website}`}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1 text-[#38BDF8] hover:underline"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          {exp.website}
                        </a>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                        {exp.description}
                      </p>

                      {/* Tag Chips in Navy/Blue */}
                      <div className="flex flex-wrap items-center gap-2 pt-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#19396D]/40 text-[#FAF7F2] border border-[#38BDF8]/30 shadow-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Education & Credentials Quick Sub-grid */}
        <div className="mt-16 pt-12 border-t border-neutral-800 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Education Mini Card */}
          <div className="p-6 rounded-xl bg-[#131622] border border-neutral-800 space-y-4">
            <div className="flex items-center gap-2 text-[#38BDF8] font-mono text-xs font-bold uppercase tracking-wider">
              <GraduationCap className="w-4 h-4" />
              <span>Academic Grounding</span>
            </div>

            <div className="space-y-3">
              {EDUCATION_LIST.map((edu, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="flex justify-between items-baseline text-xs sm:text-sm font-bold text-white">
                    <span>{edu.institution}</span>
                    <span className="text-[10px] font-mono text-neutral-400">{edu.period}</span>
                  </div>
                  <p className="text-xs text-neutral-400">
                    {edu.qualification} · <span className="italic text-[#38BDF8]">{edu.status}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Mini Card */}
          <div className="p-6 rounded-xl bg-[#131622] border border-neutral-800 space-y-4">
            <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4" />
              <span>Specialized Certifications</span>
            </div>

            <div className="space-y-2.5">
              {CERTIFICATIONS_LIST.map((cert, idx) => (
                <div key={idx} className="text-xs">
                  <span className="font-semibold text-white block">{cert.title}</span>
                  <span className="text-neutral-400 font-mono text-[11px]">
                    {cert.issuer} ({cert.year})
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Resume Trigger Callout */}
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-[#38BDF8]/40 hover:border-[#38BDF8] bg-[#19396D]/30 hover:bg-[#19396D] text-xs font-mono text-white transition-all cursor-pointer"
          >
            <span>Open Complete Printable Curriculum Vitae (PDF)</span>
          </button>
        </div>
      </div>
    </section>
  );
};

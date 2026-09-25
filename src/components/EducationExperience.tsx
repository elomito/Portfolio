import React from 'react';
import { GraduationCap, Award, Code2, Download, CheckCircle2 } from 'lucide-react';
import { EDUCATION_LIST, CERTIFICATIONS_LIST, SKILL_CATEGORIES } from '../data/portfolioData';

interface EducationExperienceProps {
  onOpenResume: () => void;
}

export const EducationExperience: React.FC<EducationExperienceProps> = ({ onOpenResume }) => {
  return (
    <section id="background" className="py-16 sm:py-24 border-b border-[#163973]/10 dark:border-[#2A5CB8]/20 scroll-mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-12 space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#163973] dark:text-[#93B4F0]">
            Pedagogy & Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#163973] dark:text-[#FAF7F2]">
            Education & Technical Grounding
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-xl">
            A background combining digital forensics and threat modeling with rigorous systems programming and full-stack software development.
          </p>
        </div>

        {/* 2-Column Grid: Education on Left, Certifications on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Education Column */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF7F2] dark:bg-[#0B1426] border border-[#163973]/20 dark:border-[#2A5CB8]/30 shadow-sm space-y-6">
            <div className="flex items-center gap-2 pb-4 border-b border-[#163973]/15 dark:border-[#2A5CB8]/20">
              <GraduationCap className="w-5 h-5 text-[#163973] dark:text-[#93B4F0]" />
              <h3 className="text-lg font-bold font-display text-[#163973] dark:text-[#FAF7F2]">
                Formal Education
              </h3>
            </div>

            <div className="space-y-6">
              {EDUCATION_LIST.map((edu, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-1">
                    <h4 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-[#FAF7F2]">
                      {edu.institution}
                    </h4>
                    <span className="text-xs font-mono text-neutral-500">{edu.period}</span>
                  </div>

                  <div className="text-xs font-semibold text-[#163973] dark:text-[#93B4F0]">
                    {edu.qualification} · <span className="italic font-normal">{edu.status}</span>
                  </div>

                  <ul className="space-y-1.5 pt-1">
                    {edu.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="text-xs text-neutral-600 dark:text-neutral-300 flex items-start gap-2">
                        <span className="text-[#163973] dark:text-[#93B4F0] mt-0.5">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Bootcamps Column */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF7F2] dark:bg-[#0B1426] border border-[#163973]/20 dark:border-[#2A5CB8]/30 shadow-sm space-y-6">
            <div className="flex items-center gap-2 pb-4 border-b border-[#163973]/15 dark:border-[#2A5CB8]/20">
              <Award className="w-5 h-5 text-amber-500" />
              <h3 className="text-lg font-bold font-display text-[#163973] dark:text-[#FAF7F2]">
                Certifications & Programs
              </h3>
            </div>

            <div className="space-y-5">
              {CERTIFICATIONS_LIST.map((cert, idx) => (
                <div key={idx} className="space-y-1 pb-4 border-b border-[#163973]/10 dark:border-[#2A5CB8]/15 last:border-none last:pb-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-1">
                    <h4 className="text-sm font-bold text-neutral-900 dark:text-[#FAF7F2]">
                      {cert.title}
                    </h4>
                    <span className="text-xs font-mono text-neutral-500">{cert.year}</span>
                  </div>
                  <div className="text-xs font-medium text-[#163973] dark:text-[#93B4F0]">
                    {cert.issuer}
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-300 pt-0.5">
                    {cert.focus}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick Resume Download Callout */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenResume}
                className="w-full py-2.5 px-4 rounded-xl bg-[#163973] hover:bg-[#122A54] text-white text-xs font-bold transition-all shadow flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Open Full Curriculum Vitae & Print PDF</span>
              </button>
            </div>
          </div>
        </div>

        {/* Technical Skills Matrix */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0A1224] border border-[#163973]/20 dark:border-[#2A5CB8]/30 shadow-sm">
          <div className="flex items-center gap-2 pb-4 border-b border-[#163973]/15 dark:border-[#2A5CB8]/20 mb-6">
            <Code2 className="w-5 h-5 text-[#163973] dark:text-[#93B4F0]" />
            <h3 className="text-base sm:text-lg font-bold font-display text-[#163973] dark:text-[#FAF7F2]">
              Technical Skills Inventory
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILL_CATEGORIES.map((cat) => (
              <div key={cat.category} className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#163973] dark:text-[#93B4F0]">
                  {cat.category}
                </h4>
                <div className="text-xs font-mono text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {cat.skills.join(' · ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

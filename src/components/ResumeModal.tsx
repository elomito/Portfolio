import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Globe, ExternalLink, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, EDUCATION_LIST, CERTIFICATIONS_LIST, SKILL_CATEGORIES } from '../data/portfolioData';

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
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadTextCV = () => {
    const resumeText = `OMITO ELIZABETH
Frontend Developer | DevOps | Project Management
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone} | Location: ${PERSONAL_INFO.location}
GitHub: ${PERSONAL_INFO.github} | LinkedIn: ${PERSONAL_INFO.linkedin}

=======================================================
PROFESSIONAL SUMMARY
=======================================================
${PERSONAL_INFO.summary}

=======================================================
TECHNICAL SKILLS
=======================================================
Languages: JavaScript, TypeScript, Go, Python, HTML5, CSS3, SQL
Frameworks: React 19, Vite, Gin, Node.js, Tailwind CSS, TanStack
Tools: Git, GitHub, Docker, VS Code, Postman, CI/CD Pipelines
Databases: SQLite, Supabase, PostgreSQL
Concepts: REST APIs, WebRTC, Bitcoin Lightning, Agile/Scrum, OOP, Debugging, Computer Security & Forensics

=======================================================
SELECTED PROJECTS
=======================================================
${PROJECTS.map(
  (p) => `* ${p.title} - ${p.tagline}
  Stack: ${p.techStack.join(', ')}
  ${p.description}
`
).join('\n')}

=======================================================
EDUCATION
=======================================================
${EDUCATION_LIST.map(
  (e) => `* ${e.institution} - ${e.qualification} (${e.status} | ${e.period})
  Highlights: ${e.highlights.join('; ')}
`
).join('\n')}

=======================================================
CERTIFICATIONS & PROGRAMS
=======================================================
${CERTIFICATIONS_LIST.map((c) => `* ${c.title} | ${c.issuer} (${c.year}) - ${c.focus}`).join('\n')}
`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Omito_Elizabeth_CV.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-0 no-print" onClick={onClose} />

      <div className="relative z-10 w-full max-w-4xl max-h-[94vh] overflow-y-auto rounded-2xl bg-[#FAF7F2] dark:bg-[#0A1224] border border-[#163973]/20 dark:border-[#2A5CB8]/30 shadow-2xl text-[#122444] dark:text-[#FAF7F2] flex flex-col">
        {/* Controls Header (Hidden in Print) */}
        <div className="no-print sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#FAF7F2]/95 dark:bg-[#0A1224]/95 backdrop-blur border-b border-[#163973]/15 dark:border-[#2A5CB8]/20">
          <div>
            <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">
              Curriculum Vitae Preview
            </span>
            <h3 className="text-lg font-bold font-display text-[#163973] dark:text-[#FAF7F2]">
              Omito Elizabeth · Resume
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-[#163973] hover:bg-[#122A54] text-white text-xs font-semibold flex items-center gap-1.5 shadow transition-colors cursor-pointer"
              title="Save as PDF or Print"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Save as PDF / Print</span>
            </button>

            <button
              onClick={handleDownloadTextCV}
              className="px-3.5 py-1.5 rounded-lg border border-[#163973]/30 hover:border-[#163973] text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Download Plaintext Resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export TXT</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close"
              className="p-1.5 rounded-lg text-neutral-500 hover:text-black dark:hover:text-white hover:bg-[#163973]/10 dark:hover:bg-white/10 transition-colors cursor-pointer ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Sheet */}
        <div className="p-6 sm:p-12 space-y-8 bg-white dark:bg-[#0D1629] text-neutral-900 dark:text-neutral-100 max-w-3xl mx-auto shadow-sm my-4 rounded-xl border border-neutral-200 dark:border-neutral-800">
          {/* Header */}
          <div className="border-b border-neutral-300 dark:border-neutral-700 pb-6 text-center space-y-2">
            <h1 className="text-3xl sm:text-4xl font-bold font-display text-[#163973] dark:text-[#FAF7F2] tracking-tight">
              Omito Elizabeth
            </h1>
            <p className="text-sm font-semibold tracking-wide text-neutral-600 dark:text-neutral-300 uppercase">
              Frontend Developer | DevOps | Project Management
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-neutral-500 dark:text-neutral-400 font-mono pt-1">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline flex items-center gap-1">
                <Mail className="w-3 h-3" />
                {PERSONAL_INFO.email}
              </a>
              <span>·</span>
              <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} className="hover:underline flex items-center gap-1">
                <Phone className="w-3 h-3" />
                {PERSONAL_INFO.phone}
              </a>
              <span>·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {PERSONAL_INFO.location}
              </span>
              <span>·</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:underline">
                GitHub
              </a>
              <span>·</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#163973] dark:text-[#93B4F0] border-b border-[#163973]/20 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed text-justify">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#163973] dark:text-[#93B4F0] border-b border-[#163973]/20 pb-1">
              Technical Skills
            </h2>
            <div className="space-y-1 text-xs sm:text-sm">
              <div>
                <span className="font-semibold text-neutral-900 dark:text-white">Languages: </span>
                <span className="text-neutral-700 dark:text-neutral-300">JavaScript, TypeScript, Go, Python, HTML5, CSS3, SQL</span>
              </div>
              <div>
                <span className="font-semibold text-neutral-900 dark:text-white">Frameworks & Libraries: </span>
                <span className="text-neutral-700 dark:text-neutral-300">React 19, Vite, Gin, Node.js, Tailwind CSS, TanStack</span>
              </div>
              <div>
                <span className="font-semibold text-neutral-900 dark:text-white">Tools & DevOps: </span>
                <span className="text-neutral-700 dark:text-neutral-300">Git, GitHub, Docker, VS Code, Postman, CI/CD Pipelines</span>
              </div>
              <div>
                <span className="font-semibold text-neutral-900 dark:text-white">Databases: </span>
                <span className="text-neutral-700 dark:text-neutral-300">SQLite, Supabase, PostgreSQL</span>
              </div>
              <div>
                <span className="font-semibold text-neutral-900 dark:text-white">Concepts: </span>
                <span className="text-neutral-700 dark:text-neutral-300">REST APIs, Agile/Scrum, OOP, Debugging, CI/CD, Computer Security and Forensics</span>
              </div>
            </div>
          </div>

          {/* Selected Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#163973] dark:text-[#93B4F0] border-b border-[#163973]/20 pb-1">
              Selected Projects
            </h2>

            {PROJECTS.map((proj) => (
              <div key={proj.id} className="space-y-1.5">
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <h3 className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white">
                    {proj.title} <span className="font-normal text-neutral-500">| {proj.techStack.join(', ')}</span>
                  </h3>
                  <span className="text-xs text-neutral-400 font-mono">{proj.year}</span>
                </div>
                <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {proj.description}
                </p>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#163973] dark:text-[#93B4F0] border-b border-[#163973]/20 pb-1">
              Education
            </h2>
            {EDUCATION_LIST.map((edu, idx) => (
              <div key={idx} className="space-y-0.5">
                <div className="flex justify-between items-baseline text-xs sm:text-sm font-bold text-neutral-900 dark:text-white">
                  <span>{edu.institution}</span>
                  <span className="font-normal text-neutral-500 font-mono text-xs">{edu.period}</span>
                </div>
                <div className="text-xs text-neutral-600 dark:text-neutral-400">
                  {edu.qualification} · <span className="italic">{edu.status}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications & Programs */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#163973] dark:text-[#93B4F0] border-b border-[#163973]/20 pb-1">
              Certifications & Programs
            </h2>
            <div className="space-y-1 text-xs text-neutral-700 dark:text-neutral-300">
              {CERTIFICATIONS_LIST.map((cert, idx) => (
                <div key={idx}>
                  • <span className="font-semibold text-neutral-900 dark:text-white">{cert.title}</span> — {cert.issuer} ({cert.year})
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom note */}
        <div className="no-print p-6 bg-[#FAF7F2]/90 dark:bg-[#0A1224]/90 border-t border-[#163973]/15 dark:border-[#2A5CB8]/20 flex items-center justify-between text-xs text-neutral-500">
          <span>Click "Save as PDF / Print" to export this formatted CV.</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#163973] hover:bg-[#122A54] text-white font-semibold rounded-lg shadow transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

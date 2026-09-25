import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#19396D]/30 bg-[#090C14] text-white py-14 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Editorial Description */}
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="font-mono font-bold text-base text-white flex items-center justify-center md:justify-start gap-1">
              <span>OmitoElizabeth</span>
              <span className="text-[#38BDF8]">._</span>
            </h4>
            <p className="text-xs font-mono text-neutral-400">
              Frontend Developer · DevOps · Project Management · Kisumu & Nairobi, Kenya
            </p>
          </div>

          {/* Quiet Navigation & Actions */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-neutral-300">
            <button
              onClick={onOpenResume}
              className="hover:text-[#38BDF8] transition-colors cursor-pointer"
            >
              Curriculum Vitae (PDF)
            </button>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#38BDF8] transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#38BDF8] transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>LinkedIn</span>
            </a>
            <button
              onClick={scrollToTop}
              className="hover:text-[#38BDF8] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Quiet Copyright Row */}
        <div className="mt-8 pt-6 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-neutral-500">
          <span>
            © {new Date().getFullYear()} Omito Elizabeth. Built with React 19 & Tailwind CSS.
          </span>
          <span className="text-[#38BDF8]/80">
            Pantone 19-3952 TCX "Surf the Web" Palette
          </span>
        </div>
      </div>
    </footer>
  );
};


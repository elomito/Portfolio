import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, ArrowRight } from 'lucide-react';
import { Project } from '../types';
import { WapiSimulator } from './simulators/WapiSimulator';
import { ProperSatsSimulator } from './simulators/ProperSatsSimulator';
import { SendmeSimulator } from './simulators/SendmeSimulator';
import { BanditSimulator } from './simulators/BanditSimulator';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#FAF7F2] dark:bg-[#0A1224] border border-[#163973]/20 dark:border-[#2A5CB8]/30 shadow-2xl text-[#122444] dark:text-[#FAF7F2] flex flex-col">
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#FAF7F2]/95 dark:bg-[#0A1224]/95 backdrop-blur border-b border-[#163973]/15 dark:border-[#2A5CB8]/20">
          <div>
            <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 mb-0.5">
              <span>{project.category}</span>
              <span>·</span>
              <span>{project.year}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-[#163973] dark:text-[#FAF7F2]">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-lg text-neutral-500 hover:text-black dark:hover:text-white hover:bg-[#163973]/10 dark:hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          {/* Tagline */}
          <p className="text-base sm:text-lg font-medium text-neutral-700 dark:text-neutral-200">
            {project.tagline}
          </p>

          {/* Interactive Simulator Section */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#163973] dark:text-[#93B4F0]">
                Live Interactive System Simulator
              </span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400">
                Functional demo state
              </span>
            </div>

            {project.hasSimulator === 'wapi' && <WapiSimulator />}
            {project.hasSimulator === 'propersats' && <ProperSatsSimulator />}
            {project.hasSimulator === 'sendme' && <SendmeSimulator />}
            {project.hasSimulator === 'bandit' && <BanditSimulator />}
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="p-3 rounded-xl bg-white dark:bg-[#101D33] border border-[#163973]/15 dark:border-[#2A5CB8]/20"
              >
                <div className="text-[11px] text-neutral-500 dark:text-neutral-400 mb-1">
                  {metric.label}
                </div>
                <div className="text-base font-bold text-[#163973] dark:text-[#FAF7F2] font-mono">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white/70 dark:bg-[#101D33]/60 border border-[#163973]/15 dark:border-[#2A5CB8]/20">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#163973] dark:text-[#93B4F0] mb-2">
                Problem & Real-World Friction
              </h4>
              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/70 dark:bg-[#101D33]/60 border border-[#163973]/15 dark:border-[#2A5CB8]/20">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#163973] dark:text-[#93B4F0] mb-2">
                Engineering Architecture & Solution
              </h4>
              <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture Highlights */}
          <div className="p-4 rounded-xl bg-white/70 dark:bg-[#101D33]/60 border border-[#163973]/15 dark:border-[#2A5CB8]/20">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#163973] dark:text-[#93B4F0] mb-3">
              Key Engineering Milestones
            </h4>
            <div className="space-y-2">
              {project.architectureHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-[#163973] dark:text-[#93B4F0] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Unboxed (Anti-Pill discipline) */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-2">
              Technology Stack
            </h4>
            <p className="text-xs sm:text-sm font-mono text-[#163973] dark:text-[#FAF7F2]">
              {project.techStack.join(' · ')}
            </p>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="p-6 bg-[#FAF7F2]/90 dark:bg-[#0A1224]/90 border-t border-[#163973]/15 dark:border-[#2A5CB8]/20 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-neutral-500">
            Designed & Engineered by Omito Elizabeth
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg border border-[#163973]/20 dark:border-[#2A5CB8]/30 hover:border-[#163973] text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <Github className="w-4 h-4" />
                Repository
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-[#163973] hover:bg-[#122A54] text-white text-xs font-semibold shadow transition-colors cursor-pointer"
            >
              Done Reviewing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

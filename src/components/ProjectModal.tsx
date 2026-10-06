import React, { useEffect, useState } from 'react';
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Award,
  Play,
  Layers,
  ArrowRight,
  Maximize2,
  Sparkles,
  Info,
} from 'lucide-react';
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
  const [activeTab, setActiveTab] = useState<'simulator' | 'screenshot'>('simulator');

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#0F121C] border border-[#19396D]/40 shadow-2xl text-white flex flex-col">
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0F121C]/95 backdrop-blur-md border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8] mb-1">
              <span>{project.category}</span>
              <span>·</span>
              <span>{project.year}</span>
              {project.deployedStatus === 'deployed' && (
                <>
                  <span>·</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live Deployed
                  </span>
                </>
              )}
              {project.deployedStatus === 'in_development' && (
                <>
                  <span>·</span>
                  <span className="text-amber-400 font-medium">PoC / In Development</span>
                </>
              )}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white flex items-center gap-3">
              <span>{project.title}</span>
              {project.recognition && (
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold flex items-center gap-1">
                  <Award className="w-3 h-3 text-amber-400" />
                  {project.recognition}
                </span>
              )}
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Tagline / Subtitle */}
          <p className="text-base sm:text-lg font-medium text-neutral-200 leading-snug">
            {project.tagline}
          </p>

          {/* PROJECT-SPECIFIC DEEP DIVES */}

          {/* 1. WAPI: MY ROLE & COORDINATION FOCUS */}
          {project.id === 'wapi' && (
            <div className="p-5 rounded-xl bg-[#19396D]/20 border border-[#38BDF8]/30 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#38BDF8] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
                  My Role: {project.role}
                </span>
                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1 rounded bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-xs font-mono text-emerald-300 font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    <span>Visit Live Platform (Render)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
              <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed">
                {project.roleDescription}
              </p>
              {project.focusAreas && (
                <div className="pt-2 border-t border-white/10 space-y-1">
                  <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                    Core Focus:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.focusAreas.map((focus) => (
                      <span
                        key={focus}
                        className="px-2 py-0.5 rounded bg-[#0A101C] border border-[#38BDF8]/30 text-xs font-mono text-[#38BDF8]"
                      >
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 2. PROPERSATS: RECOGNITION & KEY CONTRIBUTION */}
          {project.id === 'propersats' && (
            <div className="p-5 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-3">
              <div className="flex items-center gap-2 text-amber-400">
                <Award className="w-5 h-5 shrink-0" />
                <span className="text-sm font-bold font-mono uppercase tracking-wider">
                  {project.recognition}
                </span>
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300 block mb-1">
                  Key Contribution:
                </span>
                <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed">
                  {project.keyContribution}
                </p>
              </div>
              <div className="pt-2 border-t border-white/10 text-xs font-mono text-neutral-400 flex items-center gap-2">
                <Info className="w-3.5 h-3.5 text-amber-400" />
                <span>Status: Fully implemented locally with Polar & LND (Public cloud deployment pending).</span>
              </div>
            </div>
          )}

          {/* 3. SENDME: PRODUCT VISION & USE CASES */}
          {project.id === 'sendme' && (
            <div className="p-5 rounded-xl bg-purple-500/10 border border-purple-500/30 space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-300 block">
                Product Vision:
              </span>
              <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed">
                {project.productVision}
              </p>
              {project.useCases && (
                <div className="pt-2 border-t border-white/10 space-y-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-300 block">
                    Real-World Use Cases:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.useCases.map((useCase, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                        <span>{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 4. BANDIT: LIGHTWEIGHT ARCHITECTURE & HOW IT WORKS */}
          {project.id === 'bandit' && (
            <div className="p-5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 block">
                How It Works:
              </span>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                The project is intentionally lightweight. It does not run a web server or maintain a local database. Google Sheets is the storage layer, and Google OAuth is used to authorize access to the sheet.
              </p>
              {project.howItWorks && (
                <div className="space-y-1.5 pt-2 border-t border-white/10 font-mono text-xs text-neutral-200">
                  {project.howItWorks.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold shrink-0">{idx + 1}.</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB TOGGLE: Interactive Simulator vs Screenshot Asset */}
          <div>
            <div className="flex items-center justify-between mb-3 border-b border-neutral-800 pb-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('simulator')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeTab === 'simulator'
                      ? 'bg-[#38BDF8] text-[#0A101C]'
                      : 'text-neutral-400 hover:text-white bg-neutral-800/60'
                  }`}
                >
                  <Play className="w-3 h-3 fill-current" />
                  Live Simulator
                </button>
                <button
                  onClick={() => setActiveTab('screenshot')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeTab === 'screenshot'
                      ? 'bg-[#38BDF8] text-[#0A101C]'
                      : 'text-neutral-400 hover:text-white bg-neutral-800/60'
                  }`}
                >
                  <Layers className="w-3 h-3" />
                  UI Mockup & Graphic
                </button>
              </div>

              <span className="text-xs font-mono text-neutral-400 hidden sm:inline">
                {activeTab === 'simulator'
                  ? 'Functional sandbox state'
                  : 'High-fidelity visual design'}
              </span>
            </div>

            {/* TAB 1: SIMULATOR */}
            {activeTab === 'simulator' && (
              <div className="animate-fadeIn">
                {project.hasSimulator === 'wapi' && <WapiSimulator />}
                {project.hasSimulator === 'propersats' && <ProperSatsSimulator />}
                {project.hasSimulator === 'sendme' && <SendmeSimulator />}
                {project.hasSimulator === 'bandit' && <BanditSimulator />}
              </div>
            )}

            {/* TAB 2: SCREENSHOT / IMAGE */}
            {activeTab === 'screenshot' && project.imageUrl && (
              <div className="rounded-xl overflow-hidden border border-neutral-800 bg-[#0A0D14] p-2 animate-fadeIn">
                <img
                  src={project.imageUrl}
                  alt={`${project.title} UI`}
                  className="w-full h-auto max-h-[460px] object-contain mx-auto rounded-lg"
                />
              </div>
            )}
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="p-3.5 rounded-xl bg-[#141826] border border-neutral-800 space-y-1"
              >
                <div className="text-[11px] font-mono text-neutral-400">
                  {metric.label}
                </div>
                <div className="text-sm sm:text-base font-bold text-white font-mono">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#141826] border border-neutral-800 space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400">
                Problem & Real-World Friction
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#141826] border border-neutral-800 space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                Engineering Architecture & Solution
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture Highlights */}
          <div className="p-5 rounded-xl bg-[#141826] border border-neutral-800 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#38BDF8]">
              Key Engineering Milestones & Coordination
            </h4>
            <div className="space-y-2">
              {project.architectureHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-[#141826] border border-neutral-700 font-mono text-xs text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 bg-[#0B0E17] border-t border-neutral-800 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs font-mono text-neutral-400">
            Engineered by Omito Elizabeth
          </div>

          <div className="flex items-center gap-3">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-bold flex items-center gap-1.5 transition-colors shadow-lg"
              >
                <span>Live Web App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg border border-neutral-700 hover:border-neutral-500 text-neutral-300 hover:text-white text-xs font-mono font-semibold flex items-center gap-1.5 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-mono font-semibold transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

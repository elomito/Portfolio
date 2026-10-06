import React from 'react';
import {
  ArrowUpRight,
  ExternalLink,
  Play,
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  return (
    <section id="work" className="py-14 sm:py-20 bg-[#0F1117] text-white border-b border-[#19396D]/20 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* ========================================================================= */}
        {/* SECTION HEADER: Clean, direct introduction to the 4 projects              */}
        {/* ========================================================================= */}
        <div className="mb-12 space-y-3">
          <h2 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[0.95]">
            My Work
          </h2>
          <p className="font-mono text-xs sm:text-sm text-neutral-400 max-w-2xl">
            Featured product delivery and engineering across live streaming media, Bitcoin Lightning escrow protocols, community logistics marketplaces, and security credential vaults.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2x2 PROJECT GRID: Spacious, high-fidelity visual cards for the 4 projects */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer flex flex-col justify-between bg-[#131622] rounded-2xl overflow-hidden border border-neutral-800 hover:border-[#38BDF8]/60 hover:shadow-[0_15px_40px_rgba(56,189,248,0.15)] transition-all duration-300"
            >
              {/* Visual Mockup Header with Real Screenshot Graphic */}
              <div className="aspect-[16/10] bg-[#0A0D14] relative overflow-hidden group/img border-b border-neutral-800/80">
                {project.imageUrl && (
                  <img
                    src={project.imageUrl}
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                )}

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#131622] via-transparent to-black/30 pointer-events-none" />

                {/* Hover CTA Indicator */}
                <div className="absolute inset-0 bg-[#090D1A]/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <span className="px-4 py-2 rounded-lg bg-[#38BDF8] text-[#0A101C] font-mono text-xs font-bold shadow-xl flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Play className="w-3.5 h-3.5 fill-current" />
                    Interactive Simulator & Details
                  </span>
                </div>
              </div>

              {/* Card Text & Metadata */}
              <div className="p-6 sm:p-7 space-y-4">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h3 className="font-display font-bold text-2xl text-white group-hover:text-[#38BDF8] transition-colors flex items-center gap-2">
                      <span>{project.title}</span>
                      {project.id === 'wapi' && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#38BDF8]/15 text-[#38BDF8] border border-[#38BDF8]/30">
                          Role: Project Manager
                        </span>
                      )}
                    </h3>
                    <span className="text-xs font-mono text-neutral-400">{project.year}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#38BDF8]/90 font-mono font-medium">
                    {project.tagline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Project-specific highlight pills */}
                {project.id === 'wapi' && project.focusAreas && (
                  <div className="p-3 rounded-lg bg-[#19396D]/20 border border-[#19396D]/40 space-y-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#38BDF8] block">
                      Coordination Focus:
                    </span>
                    <p className="text-xs text-neutral-300 font-mono">
                      {project.focusAreas.join(' · ')}
                    </p>
                  </div>
                )}

                {project.id === 'propersats' && project.keyContribution && (
                  <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 space-y-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400 block">
                      Key Contribution:
                    </span>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {project.keyContribution}
                    </p>
                  </div>
                )}

                {project.id === 'sendme' && project.useCases && (
                  <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/30 space-y-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-300 block">
                      Primary Use Cases:
                    </span>
                    <p className="text-xs text-neutral-300 font-mono">
                      {project.useCases.slice(0, 3).join(' · ')}
                    </p>
                  </div>
                )}

                {project.id === 'bandit' && project.howItWorks && (
                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 space-y-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 block">
                      Zero-Database Architecture:
                    </span>
                    <p className="text-xs text-neutral-300 font-mono">
                      Python 3 CLI → Google OAuth 2.0 PKCE → Google Sheets Sheet1
                    </p>
                  </div>
                )}

                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-neutral-800/90 border border-neutral-700/80 text-[11px] font-mono text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-neutral-800 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-[#38BDF8] group-hover:text-white transition-colors">
                    <span>Explore Architecture & Simulator</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>

                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-neutral-400 hover:text-emerald-400 transition-colors flex items-center gap-1"
                    >
                      <span>Visit Web App</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

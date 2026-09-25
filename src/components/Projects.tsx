import React, { useState } from 'react';
import { ArrowUpRight, Radio, Zap, Navigation, Terminal, ExternalLink, Play, Eye } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

type FilterCategory = 'All' | 'Streaming & Media' | 'FinTech & Web3' | 'Logistics & Realtime' | 'DevOps & Security';

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<FilterCategory>('All');

  const filteredProjects = PROJECTS.filter((proj) => {
    if (filter === 'All') return true;
    return proj.category === filter;
  });

  const categories: { label: FilterCategory; count: string }[] = [
    { label: 'All', count: '04' },
    { label: 'Streaming & Media', count: '01' },
    { label: 'FinTech & Web3', count: '01' },
    { label: 'Logistics & Realtime', count: '01' },
    { label: 'DevOps & Security', count: '01' },
  ];

  const featuredProject = PROJECTS[0]; // Wapi

  return (
    <section id="work" className="py-24 sm:py-32 bg-[#0F1117] text-white border-b border-[#19396D]/20 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* ========================================================================= */}
        {/* PART 1: FEATURED SHOWCASE (Exact Match to Screenshot 3)                   */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center mb-28">
          {/* Left Column: Heading, Subtext, Arrow, & Button */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight leading-[0.95]">
              My <br />
              Work
            </h2>

            <p className="font-mono text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-lg">
              Deployed scalable live streaming, Bitcoin Lightning escrows, and hyperlocal community logistics platforms using React and modern distributed architectures. Grounded in a degree in Computer Security & Forensics paired with systems programming at Zone01 Kisumu.
            </p>

            {/* Hand-drawn Style Arrow & Callout */}
            <div className="relative pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* Curved SVG Arrow */}
              <div className="hidden sm:block w-24 h-16 text-[#38BDF8] shrink-0">
                <svg viewBox="0 0 100 60" fill="none" className="w-full h-full stroke-current">
                  <path
                    d="M10 50 C 35 50, 70 45, 85 15"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeDasharray="4 4"
                  />
                  <path
                    d="M75 12 L 87 14 L 88 26"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div className="space-y-3">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 block">
                    Featured Project
                  </span>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                    {featuredProject.title} Stream Platform
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectProject(featuredProject)}
                  className="px-6 py-2.5 rounded-lg bg-[#19396D] hover:bg-[#142F5E] text-[#FAF7F2] text-xs font-mono font-bold shadow-lg border border-[#38BDF8]/40 flex items-center gap-2 cursor-pointer transition-all hover:scale-105"
                >
                  <Eye className="w-4 h-4 text-[#38BDF8]" />
                  <span>View Project & Simulator</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Angled Phone Mockup (Screenshot 3 exact match) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div
              onClick={() => onSelectProject(featuredProject)}
              className="group relative w-72 sm:w-80 h-[500px] sm:h-[560px] rounded-[42px] p-3.5 bg-[#1A1F2C] border-4 border-neutral-700 shadow-[0_25px_60px_rgba(0,0,0,0.8)] cursor-pointer transform lg:rotate-6 hover:rotate-0 transition-transform duration-500 overflow-hidden"
            >
              {/* Phone Speaker & Camera Island */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-20" />

              {/* Live Screen Content */}
              <div className="w-full h-full rounded-[32px] overflow-hidden bg-gradient-to-b from-[#0B1426] via-[#101D38] to-[#0A0E1A] text-white flex flex-col justify-between p-4 relative">
                {/* Status Bar */}
                <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 pt-3 px-2 z-10">
                  <span>9:41</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
                    <span>5G</span>
                  </div>
                </div>

                {/* App Screen Content */}
                <div className="space-y-4 my-auto relative z-10 text-center">
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-red-600/90 text-[10px] font-bold uppercase tracking-wider">
                    LIVE STREAM
                  </div>
                  <h4 className="font-display font-bold text-xl text-white">
                    Wapi Creator Ingest
                  </h4>
                  <p className="text-[11px] text-neutral-300 font-mono max-w-[200px] mx-auto">
                    Sub-500ms WebRTC + M-Pesa STK Push Micro-tipping
                  </p>

                  {/* Simulated Tip Card */}
                  <div className="p-3 rounded-xl bg-black/40 border border-[#38BDF8]/30 backdrop-blur-sm text-left space-y-1.5 mx-2">
                    <div className="flex justify-between items-center text-[10px] font-mono">
                      <span className="text-emerald-400 font-bold">M-Pesa Tip Received</span>
                      <span className="text-white">+100 KES</span>
                    </div>
                    <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-[#38BDF8] rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Phone Bottom CTA */}
                <div className="p-3 bg-black/60 rounded-2xl border border-white/10 text-center space-y-1">
                  <p className="text-[11px] font-mono text-[#38BDF8] font-semibold">
                    Tap to Launch Live Simulator
                  </p>
                  <p className="text-[9px] text-neutral-400">
                    Test live video ingest & Safaricom Daraja callbacks
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PART 2: FILTERED WORK GRID (Exact Match to Screenshots 4 & 5)             */}
        {/* ========================================================================= */}
        <div className="pt-8">
          {/* Filter Bar with Superscript Numbers (Screenshot 4 exact match) */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 font-mono text-xs mb-12 border-b border-neutral-800 pb-4">
            <span className="text-neutral-500 font-semibold">Filter by</span>

            {categories.map((cat) => {
              const isActive = filter === cat.label;
              return (
                <button
                  key={cat.label}
                  type="button"
                  onClick={() => setFilter(cat.label)}
                  className={`flex items-baseline gap-1 transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[#38BDF8] font-bold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className="text-[10px] text-[#38BDF8]/80">{cat.count}</span>
                  <span className="text-neutral-600 ml-1">/</span>
                </button>
              );
            })}
          </div>

          {/* Clean Editorial Projects Grid (Screenshots 4 & 5) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer flex flex-col justify-between bg-[#131622] rounded-xl overflow-hidden border border-neutral-800 hover:border-[#19396D] hover:shadow-[0_10px_30px_rgba(25,57,109,0.3)] transition-all duration-300"
              >
                {/* Visual Mockup Header (Simulated Device / Screen Showcase) */}
                <div className="aspect-[16/10] bg-gradient-to-br from-[#18233C] to-[#0A101C] p-5 flex flex-col justify-between relative overflow-hidden">
                  {/* Subtle Grid / Technical Lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf80a_1px,transparent_1px),linear-gradient(to_bottom,#38bdf80a_1px,transparent_1px)] bg-[size:16px_16px]" />

                  {/* Top Bar inside card preview */}
                  <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                    <span className="flex items-center gap-1.5 text-[#38BDF8]">
                      {project.id === 'wapi' && <Radio className="w-3.5 h-3.5" />}
                      {project.id === 'propersats' && <Zap className="w-3.5 h-3.5 text-amber-400" />}
                      {project.id === 'sendme' && <Navigation className="w-3.5 h-3.5 text-emerald-400" />}
                      {project.id === 'bandit' && <Terminal className="w-3.5 h-3.5 text-blue-400" />}
                      <span>{project.category}</span>
                    </span>
                    <span className="text-[10px]">{project.year}</span>
                  </div>

                  {/* Center Device / System Emblem */}
                  <div className="relative z-10 my-auto text-center space-y-1 transform group-hover:scale-105 transition-transform duration-300">
                    <div className="w-12 h-12 rounded-xl bg-[#19396D]/40 border border-[#38BDF8]/40 mx-auto flex items-center justify-center text-[#38BDF8] shadow-lg">
                      <Play className="w-5 h-5 ml-0.5" />
                    </div>
                    <span className="text-[11px] font-mono text-neutral-300 block">
                      Launch Interactive Simulator
                    </span>
                  </div>

                  {/* Bottom Metric Pill */}
                  <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-neutral-400 pt-2 border-t border-white/10">
                    <span>{project.metrics[0].label}:</span>
                    <span className="text-[#38BDF8] font-bold">{project.metrics[0].value}</span>
                  </div>
                </div>

                {/* Card Text & Metadata (Screenshots 4 & 5 Exact Match) */}
                <div className="p-6 space-y-3">
                  <h3 className="font-display font-bold text-xl text-white group-hover:text-[#38BDF8] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-neutral-400 font-mono">
                    {project.category}
                  </p>

                  <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-xs font-mono text-[#38BDF8]">
                    <span>// View Architecture</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { ArrowDown, FileText, ChevronDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onExploreProjects: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onExploreProjects, onContactClick }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between items-center pt-28 pb-12 px-4 sm:px-6 overflow-hidden bg-[#0F1117] text-white"
    >
      {/* Background 3D Geometric Scene (Cubes, Glows, and Ambient Light from Screenshot 1) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        {/* Ambient background glows */}
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[#19396D]/25 blur-[120px] -top-20 -left-20" />
        <div className="absolute w-[450px] h-[450px] rounded-full bg-[#C49B5B]/15 blur-[100px] top-1/4 right-0" />
        <div className="absolute w-[600px] h-[600px] rounded-full bg-[#0A1224]/80 blur-[80px] -bottom-20" />

        {/* 3D Geometric Floating Cubes & Glowing Orb Illustration */}
        <div className="relative w-full max-w-4xl h-[420px] opacity-85 select-none -mt-8">
          <svg
            viewBox="0 0 800 500"
            className="w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.7)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Defs: Gradients and filters */}
            <defs>
              <linearGradient id="orbGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFE4BC" />
                <stop offset="40%" stopColor="#FF9B53" />
                <stop offset="100%" stopColor="#DD5226" />
              </linearGradient>

              {/* Cube 1 (Center Large Dark Navy / Gunmetal Cube) */}
              <linearGradient id="cube1Top" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4A3B30" />
                <stop offset="100%" stopColor="#2A2420" />
              </linearGradient>
              <linearGradient id="cube1Left" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1E1A17" />
                <stop offset="100%" stopColor="#110F0E" />
              </linearGradient>
              <linearGradient id="cube1Right" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8C5C38" />
                <stop offset="100%" stopColor="#3D2516" />
              </linearGradient>

              {/* Cube 2 (Upper Left Navy Cube) */}
              <linearGradient id="cube2Top" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#253C68" />
                <stop offset="100%" stopColor="#182A4D" />
              </linearGradient>
              <linearGradient id="cube2Left" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#111B30" />
                <stop offset="100%" stopColor="#0B1220" />
              </linearGradient>
              <linearGradient id="cube2Right" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1A2D53" />
                <stop offset="100%" stopColor="#0E1930" />
              </linearGradient>

              {/* Cube 3 (Lower Right Charcoal Navy Cube) */}
              <linearGradient id="cube3Top" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#202A3C" />
                <stop offset="100%" stopColor="#131B2A" />
              </linearGradient>
              <linearGradient id="cube3Left" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0D121D" />
                <stop offset="100%" stopColor="#06090F" />
              </linearGradient>

              {/* Glowing Orb radial blur */}
              <radialGradient id="sunSphere" cx="40%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#FFF1D6" />
                <stop offset="45%" stopColor="#FFA654" />
                <stop offset="90%" stopColor="#D9491D" />
                <stop offset="100%" stopColor="#882008" />
              </radialGradient>
              <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="16" />
              </filter>
            </defs>

            {/* Glowing warm orb */}
            <circle cx="445" cy="115" r="28" fill="#FF8D36" opacity="0.6" filter="url(#softGlow)" />
            <circle cx="445" cy="115" r="18" fill="url(#sunSphere)" />

            {/* Back Left Cube (Deep Navy/Indigo Cube) */}
            <g transform="translate(-10, -20)">
              {/* Top Face */}
              <polygon points="310,120 380,80 320,50 250,90" fill="url(#cube2Top)" />
              {/* Left Face */}
              <polygon points="250,90 320,50 320,150 250,190" fill="url(#cube2Left)" />
              {/* Right Face */}
              <polygon points="320,50 380,80 380,180 320,150" fill="url(#cube2Right)" />
            </g>

            {/* Center Main Isometric Cube (Illuminated by warm light) */}
            <g transform="translate(40, 20)">
              {/* Top Face */}
              <polygon points="410,210 510,150 430,105 330,165" fill="url(#cube1Top)" />
              {/* Left Face (Dark shadow side) */}
              <polygon points="330,165 410,210 410,340 330,295" fill="url(#cube1Left)" />
              {/* Right Face (Lit by warm orb) */}
              <polygon points="410,210 510,150 510,280 410,340" fill="url(#cube1Right)" />
            </g>

            {/* Bottom Right Cube (Dark Matte Slate Cube) */}
            <g transform="translate(60, 40)">
              {/* Top Face */}
              <polygon points="480,310 550,270 495,240 425,280" fill="url(#cube3Top)" />
              {/* Left Face */}
              <polygon points="425,280 480,310 480,390 425,360" fill="url(#cube3Left)" />
              {/* Right Face */}
              <polygon points="480,310 550,270 550,350 480,390" fill="#1C273C" />
            </g>

            {/* Floating Small Cylinder Accent */}
            <ellipse cx="495" cy="180" rx="14" ry="7" fill="#253550" />
            <path d="M481,180 v30 a14,7 0 0,0 28,0 v-30 Z" fill="#152134" />
          </svg>
        </div>
      </div>

      {/* Main Center Typography (Exact Match to Screenshot 1) */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center my-auto">
        {/* Massive Sans/Display Title */}
        <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] tracking-tight uppercase text-white drop-shadow-2xl leading-[0.95]">
          OMITO ELIZABETH
        </h1>

        {/* Subtitle in Monospace */}
        <p className="font-mono text-xs sm:text-sm md:text-base tracking-[0.22em] uppercase text-neutral-300 mt-4 sm:mt-6 font-semibold">
          SOFTWARE ENGINEER, PROJECT MANAGER & DEVOPS ENGINEER
        </p>

        {/* Action Pills / Quick Nav */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
          <button
            type="button"
            onClick={onExploreProjects}
            className="px-5 py-2.5 rounded-lg bg-[#19396D] hover:bg-[#142F5E] text-[#FAF7F2] text-xs font-mono font-bold border border-[#38BDF8]/40 shadow-lg shadow-[#19396D]/30 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Explore Work</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#38BDF8]" />
          </button>

          <button
            type="button"
            onClick={onOpenResume}
            className="px-5 py-2.5 rounded-lg border border-neutral-700 hover:border-[#38BDF8] bg-black/40 backdrop-blur-sm text-xs font-mono text-neutral-200 transition-all flex items-center gap-2 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>Curriculum Vitae</span>
          </button>

          <button
            type="button"
            onClick={onContactClick}
            className="px-5 py-2.5 rounded-lg hover:text-[#38BDF8] text-neutral-400 text-xs font-mono transition-colors cursor-pointer"
          >
            <span>// Contact Me</span>
          </button>
        </div>
      </div>

      {/* "AS FEATURED IN" / Credentials Bar (Exact Match to Screenshot 1) */}
      <div className="relative z-10 w-full max-w-4xl mx-auto mt-12 mb-6">
        <p className="font-mono text-[11px] tracking-[0.25em] uppercase text-neutral-500 text-center mb-6">
          AS FEATURED IN & CREDENTIALS
        </p>

        {/* Horizontal Brand Badges with Terminal Style */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 opacity-75 hover:opacity-100 transition-opacity font-mono text-xs sm:text-sm">
          <div className="flex items-center gap-1 text-white hover:text-[#38BDF8] transition-colors">
            <span className="text-[#38BDF8]">&lt;</span>
            <span className="font-bold">zone01</span>
            <span className="text-neutral-400">kisumu</span>
          </div>

          <div className="flex items-center gap-1.5 text-neutral-200 hover:text-[#38BDF8] transition-colors">
            <span className="font-bold tracking-wider">JOOUST</span>
            <span className="text-[10px] text-[#38BDF8] uppercase">Computer Security And Forensics</span>
          </div>

          <div className="flex items-center gap-1 text-neutral-200 hover:text-emerald-400 transition-colors">
            <span className="font-black text-emerald-400">She Code</span>
            <span className="text-neutral-300">Africa</span>
          </div>

          <div className="flex items-center gap-1.5 text-neutral-300 hover:text-cyan-400 transition-colors">
            <span className="font-mono">DigiKen</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
          </div>
        </div>
      </div>

      {/* Bottom Mouse Scroll Indicator (Exact Match to Screenshot 1) */}
      <div className="relative z-10 flex flex-col items-center mt-4">
        <button
          onClick={onExploreProjects}
          aria-label="Scroll to content"
          className="w-6 h-10 rounded-full border-2 border-neutral-600 hover:border-[#38BDF8] flex items-start justify-center p-1.5 transition-colors cursor-pointer"
        >
          <span className="w-1.5 h-2.5 rounded-full bg-[#38BDF8] animate-bounce" />
        </button>
      </div>
    </section>
  );
};

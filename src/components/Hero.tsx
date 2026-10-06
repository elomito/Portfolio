import React, { useState } from 'react';

interface HeroProps {
  onOpenResume?: () => void;
  onExploreProjects?: () => void;
  onContactClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onExploreProjects }) => {
  const [photoSrc, setPhotoSrc] = useState<string>(() => {
    return localStorage.getItem('omito_profile_photo') || '/profie.webp';
  });

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (!e.currentTarget.src.includes('profie.webp')) {
      e.currentTarget.src = '/profie.webp';
      setPhotoSrc('/profie.webp');
    }
  };

  const handleScrollToExplore = () => {
    if (onExploreProjects) {
      onExploreProjects();
      return;
    }
    const target = document.getElementById('work') || document.getElementById('expertise');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen lg:min-h-[105vh] flex items-center bg-[#0B0D17] text-white overflow-hidden border-b border-[#19396D]/20 pt-28 sm:pt-36 pb-24 sm:pb-32 lg:py-28 select-none"
    >
      {/* ========================================================================= */}
      {/* 1. CLEAN, MINIMAL & SERENE AMBIENT BACKGROUND (No clutter, No crowded SVGs)*/}
      {/* ========================================================================= */}
      
      {/* Soft atmospheric violet-indigo halo behind the portrait */}
      <div className="absolute right-0 lg:right-12 top-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-[#7C3AED]/22 via-[#6366F1]/16 to-[#38BDF8]/10 blur-[150px] pointer-events-none" />

      {/* Subtle deep sapphire ambient bloom on top-left */}
      <div className="absolute -left-20 top-1/4 w-[450px] h-[450px] rounded-full bg-[#19396D]/15 blur-[160px] pointer-events-none" />

      {/* ========================================================================= */}
      {/* 2. MAIN 2-COLUMN HERO SHOWCASE                                            */}
      {/* ========================================================================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* ===================================================================== */}
          {/* LEFT COLUMN: Expands > half page width (lg:col-span-8 / 66.7% width) */}
          {/* ===================================================================== */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8 text-left">
            
            {/* Sentence 1: Big, bold & strictly spans two lines */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[5rem] text-white tracking-tight leading-[1.08] w-full">
              <span className="block whitespace-normal sm:whitespace-nowrap">
                I’m{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C084FC] via-[#A78BFA] to-[#9370DB]">
                  Elizabeth Omito
                </span>
                ,
              </span>
              <span className="block whitespace-normal sm:whitespace-nowrap text-white">
                a software developer.
              </span>
            </h1>

            {/* Sentence 2: Maintained clear & concise subtitle */}
            <p className="font-sans text-neutral-300 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed font-normal">
              My work connects <strong className="text-white font-medium">software development</strong>, <strong className="text-white font-medium">project management</strong>, and <strong className="text-white font-medium">DevOps</strong> to build and ship reliable systems.
            </p>

            {/* CTA Button Row (Wider buttons) */}
            <div className="pt-3 flex flex-wrap items-center gap-4 sm:gap-5">
              {/* Primary Purple Gradient Button: Download CV */}
              <button
                type="button"
                onClick={onOpenResume}
                className="min-w-[175px] sm:min-w-[200px] px-9 sm:px-11 py-3.5 rounded-xl bg-gradient-to-r from-[#5B46EB] via-[#7C3AED] to-[#9333EA] hover:from-[#4E39DC] hover:to-[#7E22CE] text-white font-medium text-xs sm:text-sm font-sans shadow-lg shadow-[#7C3AED]/30 hover:shadow-[#7C3AED]/50 hover:scale-[1.02] transition-all duration-300 cursor-pointer text-center flex items-center justify-center"
              >
                <span>Download CV</span>
              </button>

              {/* Secondary Explore Button */}
              <button
                type="button"
                onClick={handleScrollToExplore}
                className="min-w-[175px] sm:min-w-[200px] px-9 sm:px-11 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-neutral-300 hover:text-white font-medium text-xs sm:text-sm font-sans transition-all duration-200 cursor-pointer text-center flex items-center justify-center"
              >
                Explore Projects
              </button>
            </div>

          </div>

          {/* ===================================================================== */}
          {/* RIGHT COLUMN: Tall Fully Rounded Pill Avatar (lg:col-span-4)          */}
          {/* ===================================================================== */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end items-center">
            <div className="relative">

              {/* Floating 3D Sparkle Star 1 (Top-Right, matching d2.jpg) */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-20 text-[#A78BFA] filter drop-shadow-[0_0_15px_rgba(167,139,250,0.7)] animate-pulse">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
                </svg>
              </div>

              {/* Floating 3D Sparkle Star 2 (Small offset, matching d2.jpg) */}
              <div className="absolute top-6 -right-7 sm:top-8 sm:-right-8 z-20 text-[#C084FC] filter drop-shadow-[0_0_10px_rgba(192,132,252,0.8)]">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
                </svg>
              </div>

              {/* Tall Pill Capsule Avatar Frame (Fully rounded top AND bottom, thin border) */}
              <div className="relative w-64 h-88 sm:w-80 sm:h-[460px] lg:w-[350px] lg:h-[510px] rounded-full p-1 bg-gradient-to-b from-[#8B5CF6]/45 via-[#6366F1]/20 to-[#19396D]/15 shadow-[0_0_50px_rgba(124,58,237,0.25)] border border-[#8B5CF6]/30">
                
                {/* Inner Masked Avatar Container with hairline border */}
                <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-b from-[#181A2A] to-[#0B0D17] border border-white/15">
                  <img
                    src={photoSrc}
                    alt="Elizabeth Omito"
                    onError={handleImageError}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top filter contrast-[1.06] brightness-[0.98] transition-transform duration-700 ease-out hover:scale-105"
                  />

                  {/* Gentle studio ambient light reflection overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#7C3AED]/25 via-transparent to-[#38BDF8]/15 pointer-events-none" />
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

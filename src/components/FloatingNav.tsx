import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

interface FloatingNavProps {
  sections: { id: string; label: string }[];
  activeSection: string;
}

export const FloatingNav: React.FC<FloatingNavProps> = ({ sections, activeSection }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Right Edge Circular Progress Indicator (Screenshot 2 & 4 match) */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-4">
        {sections.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              className="group relative flex items-center justify-center p-1 cursor-pointer"
              aria-label={`Jump to ${sec.label}`}
            >
              <span
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? 'w-3 h-3 bg-[#38BDF8] ring-4 ring-[#38BDF8]/20 shadow-[0_0_12px_#38bdf8]'
                    : 'w-2 h-2 bg-neutral-600 group-hover:bg-neutral-400'
                }`}
              />

              {/* Tooltip on hover */}
              <span className="absolute right-7 px-2 py-1 rounded bg-[#0F1117] border border-neutral-700 text-[10px] font-mono text-[#38BDF8] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
                // {sec.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Floating Back to Top Button (Screenshots 1-7 Exact Match) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 w-11 h-11 bg-white hover:bg-neutral-100 text-[#19396D] shadow-2xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 cursor-pointer font-bold border border-neutral-200"
          style={{ borderRadius: '2px' }}
        >
          <ArrowUp className="w-5 h-5 text-[#19396D]" strokeWidth={2.5} />
        </button>
      )}
    </>
  );
};

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

interface FloatingNavProps {
  sections: { id: string; label: string }[];
  activeSection: string;
}

export const FloatingNav: React.FC<FloatingNavProps> = () => {
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

  return (
    <>
      {/* Floating Back to Top Button */}
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

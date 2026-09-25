import React, { useState } from 'react';
import { Sun, Moon, FileText, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, activeSection = 'home' }) => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { num: '01', label: 'home', href: '#home' },
    { num: '02', label: 'expertise', href: '#expertise' },
    { num: '03', label: 'work', href: '#work' },
    { num: '04', label: 'experience', href: '#experience' },
    { num: '05', label: 'blog', href: '#blog' },
    { num: '06', label: 'contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0F1117]/85 dark:bg-[#0A0D14]/90 border-b border-[#19396D]/20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        {/* Brand Wordmark with terminal underscore */}
        <a
          href="#home"
          className="font-mono font-bold text-lg sm:text-xl tracking-tight text-[#FAF7F2] hover:opacity-90 transition-opacity flex items-center"
        >
          <span>OmitoElizabeth</span>
          <span className="text-[#38BDF8] animate-pulse">._</span>
        </a>

        {/* Numbered Terminal Navigation (Screenshot exact match) */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navItems.map((item) => {
            const isActive = activeSection === item.label;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="group flex flex-col items-center transition-all cursor-pointer font-mono"
              >
                <span className="text-[10px] text-[#38BDF8]/70 group-hover:text-[#38BDF8] transition-colors leading-none mb-1">
                  {item.num}
                </span>
                <span
                  className={`text-xs tracking-wide transition-colors ${
                    isActive
                      ? 'text-[#38BDF8] font-bold'
                      : 'text-[#38BDF8]/80 group-hover:text-[#38BDF8]'
                  }`}
                >
                  // {item.label}
                </span>
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Dark Mode & Resume PDF */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="p-2 rounded-lg border border-[#19396D]/40 hover:border-[#38BDF8] text-[#FAF7F2] hover:bg-[#19396D]/30 transition-all cursor-pointer"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-300" />
            ) : (
              <Moon className="w-4 h-4 text-[#38BDF8]" />
            )}
          </button>

          <button
            onClick={onOpenResume}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#19396D] hover:bg-[#142F5E] text-[#FAF7F2] text-xs font-mono font-medium border border-[#38BDF8]/30 shadow-sm transition-all cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>Resume (PDF)</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg border border-[#19396D]/40 text-[#FAF7F2] cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-6 py-5 bg-[#0F1117] border-b border-[#19396D]/30 space-y-4 font-mono">
          <div className="grid grid-cols-2 gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="py-2 text-xs text-[#38BDF8] hover:text-white flex items-center gap-2"
              >
                <span className="text-[10px] text-neutral-400">{item.num}</span>
                <span>// {item.label}</span>
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#19396D]/30">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 px-3 rounded-lg bg-[#19396D] text-white text-xs font-mono font-semibold flex items-center justify-center gap-2 border border-[#38BDF8]/40"
            >
              <FileText className="w-4 h-4 text-[#38BDF8]" />
              <span>View & Download Resume PDF</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};


import React from 'react';

interface NavbarProps {
  onOpenResume?: () => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection = 'home' }) => {
  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Expertise', href: '#expertise', id: 'expertise' },
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Articles', href: '#articles', id: 'articles' },
    { label: 'Hobbies', href: '#hobbies', id: 'hobbies' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full py-4 sm:py-6 flex justify-center items-center pointer-events-none transition-all">
      {/* Centered Apple Glass Floating Island Navbar */}
      <div className="pointer-events-auto px-4 max-w-full">
        <nav
          aria-label="Main Navigation"
          className="flex items-center gap-1 sm:gap-2 px-3 sm:px-7 py-2 sm:py-2.5 rounded-full bg-white/[0.06] dark:bg-[#0B0D17]/75 backdrop-blur-2xl border border-white/[0.16] shadow-[0_12px_40px_rgba(0,0,0,0.45)] ring-1 ring-white/10 transition-all duration-300 overflow-x-auto no-scrollbar max-w-[95vw]"
        >
          {navItems.map((item) => {
            const isActive = activeSection.toLowerCase() === item.id.toLowerCase();
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`whitespace-nowrap px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-sans tracking-wide transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-white/20 text-white font-semibold shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)] backdrop-blur-md'
                    : 'text-neutral-400 hover:text-white hover:bg-white/[0.08] font-normal'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

import React from 'react';

interface FooterProps {
  onOpenResume?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return <footer className="h-12 bg-[#0F1117]" />;
};

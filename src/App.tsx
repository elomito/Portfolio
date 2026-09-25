/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Expertise } from './components/Expertise';
import { Projects } from './components/Projects';
import { ProjectModal } from './components/ProjectModal';
import { Experience } from './components/Experience';
import { Blog } from './components/Blog';
import { BlogModal } from './components/BlogModal';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { FloatingNav } from './components/FloatingNav';
import { Project, BlogPost } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  const navSections = [
    { id: 'home', label: 'home' },
    { id: 'expertise', label: 'expertise' },
    { id: 'work', label: 'work' },
    { id: 'experience', label: 'experience' },
    { id: 'blog', label: 'blog' },
    { id: 'contact', label: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
      for (let i = navSections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(navSections[i].id);
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(navSections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#0F1117] text-white selection:bg-[#19396D] selection:text-[#FAF7F2] font-sans antialiased">
        {/* Numbered Terminal Navigation (Screenshot 1 Match) */}
        <Navbar
          onOpenResume={() => setIsResumeOpen(true)}
          activeSection={activeSection}
        />

        {/* Floating Side Indicators & Back-to-Top Button (Screenshots 2-7 Match) */}
        <FloatingNav
          sections={navSections}
          activeSection={activeSection}
        />

        {/* Main Sections */}
        <main>
          {/* Section 01: Hero with 3D Cubes & Warm Lighting (Screenshot 1) */}
          <Hero
            onOpenResume={() => setIsResumeOpen(true)}
            onExploreProjects={() => scrollToSection('work')}
            onContactClick={() => scrollToSection('contact')}
          />

          {/* Section 02: My Expertise with Code Watermark & 3-Col Framed Grid (Screenshot 2) */}
          <Expertise />

          {/* Section 03: My Work with Featured Phone Mockup & Filtered Grid (Screenshots 3, 4, 5) */}
          <Projects onSelectProject={(project) => setSelectedProject(project)} />

          {/* Section 04: Professional Experience Accordion (Screenshot 6) */}
          <Experience onOpenResume={() => setIsResumeOpen(true)} />

          {/* Section 05: Engineering Blog & Research Case Studies */}
          <Blog onSelectPost={(post) => setSelectedPost(post)} />

          {/* Section 06: Available for Select Freelance Opportunities & Testimonials (Screenshot 7) */}
          <Contact onOpenResume={() => setIsResumeOpen(true)} />
        </main>

        {/* Minimalist Terminal Footer */}
        <Footer onOpenResume={() => setIsResumeOpen(true)} />

        {/* Interactive Modals */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

        <BlogModal
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
        />

        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}

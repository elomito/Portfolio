import React from 'react';
import { Monitor, Atom, ShieldCheck, Terminal, Layers } from 'lucide-react';

export const Expertise: React.FC = () => {
  return (
    <section
      id="expertise"
      className="relative py-24 sm:py-32 bg-[#0F1117] text-white border-b border-[#19396D]/20 overflow-hidden scroll-mt-12"
    >
      {/* Background Code Watermark (Exact Match to Screenshot 2) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.07] font-mono text-xs sm:text-sm p-8 sm:p-16 select-none overflow-hidden text-neutral-400">
        <p>&lt;html lang="en"&gt;</p>
        <p className="pl-4">&lt;head&gt;</p>
        <p className="pl-8">&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</p>
        <p className="pl-8">&lt;title&gt;What do I do&lt;/title&gt;</p>
        <p className="pl-4">&lt;/head&gt;</p>
        <p className="pl-4">&lt;body&gt;</p>
        <p className="pl-8">&lt;h1&gt;Engineering resilient client experiences & distributed backends&lt;/h1&gt;</p>
        <p className="pl-8">&lt;p&gt;</p>
        <p className="pl-12">Building low-latency WebRTC streams, Bitcoin Lightning escrows, and responsive React applications.</p>
        <p className="pl-8">&lt;/p&gt;</p>
        <p className="pl-8">&lt;span&gt;</p>
        <p className="pl-12">Zone01 Kisumu & JOOUST Computer Security and Forensics.</p>
        <p className="pl-8">&lt;/span&gt;</p>
        <p className="pl-4">&lt;/body&gt;</p>
        <p>&lt;/html&gt;</p>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading (Screenshot 2 Match) */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
            My Expertise
          </h2>
        </div>

        {/* 3-Column Framed Grid (Exact Match to Screenshot 2) */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-neutral-700/80 bg-[#0C101A]/60 backdrop-blur-md rounded-sm divide-y md:divide-y-0 md:divide-x divide-neutral-700/80 shadow-2xl">
          {/* Box 1: Software Development */}
          <div className="p-8 sm:p-10 flex flex-col justify-between hover:bg-[#19396D]/10 transition-colors">
            <div>
              {/* Header Icon & Title */}
              <div className="flex items-start gap-4 mb-6">
                <Monitor className="w-8 h-8 text-neutral-200 shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                    Software Development
                  </h3>
                  {/* Underline Bar (Pink / Magenta Accent) */}
                  <div className="w-16 h-1 bg-[#F43F5E] mt-2 rounded-full" />
                </div>
              </div>

              {/* Code Tags & Body */}
              <div className="font-mono text-xs sm:text-sm text-neutral-400 space-y-2 pt-2">
                <div className="text-neutral-600 select-none">&lt;h3&gt;</div>
                <p className="text-neutral-300 leading-relaxed pl-3 border-l-2 border-neutral-700">
                  Experienced in both functional and systems programming: JavaScript, TypeScript, Go, Python, SQL, and RESTful API architecture.
                </p>
                <div className="text-neutral-600 select-none">&lt;/h3&gt;</div>
              </div>
            </div>

            <div className="pt-8 text-xs font-mono text-neutral-500">
              // Go · TypeScript · Python · SQL
            </div>
          </div>

          {/* Box 2: Frontend Dev React */}
          <div className="p-8 sm:p-10 flex flex-col justify-between hover:bg-[#19396D]/10 transition-colors">
            <div>
              {/* Header Icon & Title */}
              <div className="flex items-start gap-4 mb-6">
                <Atom className="w-8 h-8 text-[#38BDF8] shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                    Frontend Dev <br className="hidden sm:inline" />
                    React, Vite, WebRTC
                  </h3>
                  {/* Underline Bar (Pantone Surf Navy / Electric Blue Accent) */}
                  <div className="w-16 h-1 bg-[#38BDF8] mt-2 rounded-full" />
                </div>
              </div>

              {/* Code Tags & Body */}
              <div className="font-mono text-xs sm:text-sm text-neutral-400 space-y-2 pt-2">
                <div className="text-neutral-600 select-none">&lt;h3&gt;</div>
                <p className="text-neutral-300 leading-relaxed pl-3 border-l-2 border-[#19396D]">
                  Passionate about high-performance UI/UX. Deep expertise in React 19, low-latency WebRTC video streaming, Tailwind CSS, TanStack, and real-time state machines.
                </p>
                <div className="text-neutral-600 select-none">&lt;/h3&gt;</div>
              </div>
            </div>

            <div className="pt-8 text-xs font-mono text-[#38BDF8]">
              // React 19 · WebRTC · Tailwind · TanStack
            </div>
          </div>

          {/* Box 3: DevOps & Security */}
          <div className="p-8 sm:p-10 flex flex-col justify-between hover:bg-[#19396D]/10 transition-colors">
            <div>
              {/* Header Icon & Title */}
              <div className="flex items-start gap-4 mb-6">
                <ShieldCheck className="w-8 h-8 text-amber-400 shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                    DevOps & Security <br className="hidden sm:inline" />
                    Docker, LND, CI/CD
                  </h3>
                  {/* Underline Bar (Orange / Amber Accent) */}
                  <div className="w-16 h-1 bg-[#F97316] mt-2 rounded-full" />
                </div>
              </div>

              {/* Code Tags & Body */}
              <div className="font-mono text-xs sm:text-sm text-neutral-400 space-y-2 pt-2">
                <div className="text-neutral-600 select-none">&lt;h3&gt;</div>
                <p className="text-neutral-300 leading-relaxed pl-3 border-l-2 border-neutral-700">
                  Background in Computer Security & Forensics. Skilled in Docker containerization, Git workflows, Bitcoin Lightning (LND) hold invoices, and automated CI/CD pipelines.
                </p>
                <div className="text-neutral-600 select-none">&lt;/h3&gt;</div>
              </div>
            </div>

            <div className="pt-8 text-xs font-mono text-amber-400/90">
              // Docker · Git · LND · Security Forensics
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

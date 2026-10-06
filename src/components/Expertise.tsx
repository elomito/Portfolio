import React from 'react';
import { Monitor, Kanban, Terminal } from 'lucide-react';

export const Expertise: React.FC = () => {
  return (
    <section
      id="expertise"
      className="relative py-14 sm:py-20 bg-[#0F1117] text-white border-b border-[#19396D]/20 overflow-hidden scroll-mt-12 select-none"
    >
      {/* Background Code Watermark (Exact Match to Original) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.07] font-mono text-xs sm:text-sm p-8 sm:p-16 select-none overflow-hidden text-neutral-400">
        <p>&lt;html lang="en"&gt;</p>
        <p className="pl-4">&lt;head&gt;</p>
        <p className="pl-8">&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</p>
        <p className="pl-8">&lt;title&gt;What do I do&lt;/title&gt;</p>
        <p className="pl-4">&lt;/head&gt;</p>
        <p className="pl-4">&lt;body&gt;</p>
        <p className="pl-8">&lt;h1&gt;Engineering resilient client experiences &amp; distributed backends&lt;/h1&gt;</p>
        <p className="pl-8">&lt;p&gt;</p>
        <p className="pl-12">Building low-latency WebRTC streams, Bitcoin Lightning escrows, and responsive React applications.</p>
        <p className="pl-8">&lt;/p&gt;</p>
        <p className="pl-8">&lt;span&gt;</p>
        <p className="pl-12">Zone01 Kisumu &amp; JOOUST Computer Security and Forensics.</p>
        <p className="pl-8">&lt;/span&gt;</p>
        <p className="pl-4">&lt;/body&gt;</p>
        <p>&lt;/html&gt;</p>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
            My Expertise
          </h2>
        </div>

        {/* 3-Column Framed Grid (Original Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-neutral-700/80 bg-[#0C101A]/60 backdrop-blur-md rounded-sm divide-y md:divide-y-0 md:divide-x divide-neutral-700/80 shadow-2xl">
          
          {/* ========================================================================= */}
          {/* Card 1: Software Development                                              */}
          {/* ========================================================================= */}
          <div className="group p-7 sm:p-8 flex flex-col justify-between hover:bg-[#19396D]/15 transition-all duration-300">
            <div className="space-y-4">
              {/* Header Icon & Title */}
              <div className="flex items-start gap-3.5">
                <Monitor className="w-7 h-7 text-[#38BDF8] shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.75} />
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                    Software Development
                  </h3>
                  <div className="w-14 h-1 bg-[#38BDF8] mt-2 rounded-full transition-all duration-300 group-hover:w-24" />
                </div>
              </div>

              {/* Short Description */}
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Building practical, maintainable websites and applications with high-performance UI/UX, clean architecture, and continuous learning. Passionate about responsive frontend interfaces and robust backend integration.
              </p>

              {/* What I work with */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-neutral-400">
                  What I work with
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['React & Vite', 'WebRTC', 'Go', 'JavaScript / TypeScript', 'HTML & CSS', 'REST APIs', 'SQLite', 'Auth & Session'].map((item) => (
                    <span
                      key={item}
                      className="px-2 py-0.5 rounded bg-neutral-800/90 border border-neutral-700 text-[11px] font-mono text-neutral-300 transition-colors duration-200 hover:border-[#38BDF8]/50 hover:text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* Card 2: Project Management                                                */}
          {/* ========================================================================= */}
          <div className="group p-7 sm:p-8 flex flex-col justify-between hover:bg-[#19396D]/15 transition-all duration-300">
            <div className="space-y-4">
              {/* Header Icon & Title */}
              <div className="flex items-start gap-3.5">
                <Kanban className="w-7 h-7 text-[#A259FF] shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.75} />
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                    Project Management
                  </h3>
                  <div className="w-14 h-1 bg-[#A259FF] mt-2 rounded-full transition-all duration-300 group-hover:w-24" />
                </div>
              </div>

              {/* Short Description */}
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Turning ideas into structured, trackable work by connecting people, priorities, timelines, and delivery. Creating clarity and momentum across every development phase.
              </p>

              {/* What I work with */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-neutral-400">
                  What I work with
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['Agile & Scrum', 'Sprint Planning', 'Backlog Management', 'Stand-ups & Retros', 'Requirements Tracking', 'Issue Tracking', 'Documentation', 'Stakeholder Comms'].map((item) => (
                    <span
                      key={item}
                      className="px-2 py-0.5 rounded bg-neutral-800/90 border border-neutral-700 text-[11px] font-mono text-neutral-300 transition-colors duration-200 hover:border-[#A259FF]/50 hover:text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* Card 3: DevOps                                                            */}
          {/* ========================================================================= */}
          <div className="group p-7 sm:p-8 flex flex-col justify-between hover:bg-[#19396D]/15 transition-all duration-300">
            <div className="space-y-4">
              {/* Header Icon & Title */}
              <div className="flex items-start gap-3.5">
                <Terminal className="w-7 h-7 text-emerald-400 shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110" strokeWidth={1.75} />
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                    DevOps
                  </h3>
                  <div className="w-14 h-1 bg-emerald-400 mt-2 rounded-full transition-all duration-300 group-hover:w-24" />
                </div>
              </div>

              {/* Short Description */}
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Exploring practices that connect development and operations—from version control and automation to deployment and reliable software delivery.
              </p>

              {/* What I work with */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-neutral-400">
                  What I work with
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['Linux', 'Git & GitHub', 'CI/CD Pipelines', 'GitHub Actions', 'Deployment Workflows', 'Env Configuration', 'Bash Scripting', 'Docker', 'Monitoring & Debugging'].map((item) => (
                    <span
                      key={item}
                      className="px-2 py-0.5 rounded bg-neutral-800/90 border border-neutral-700 text-[11px] font-mono text-neutral-300 transition-colors duration-200 hover:border-emerald-400/50 hover:text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

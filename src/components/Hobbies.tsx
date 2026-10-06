import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2, ChevronRight, Camera, Upload } from 'lucide-react';
import { HOBBIES } from '../data/portfolioData';

export const Hobbies: React.FC = () => {
  const [selectedHobbyId, setSelectedHobbyId] = useState<string>(HOBBIES[0].id);
  const [customPhotos, setCustomPhotos] = useState<Record<string, string>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('omito_hobby_photos');
      if (saved) {
        setCustomPhotos(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const handlePhotoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      const base64 = event.target?.result as string;
      if (!base64) return;

      const updated = { ...customPhotos, [selectedHobbyId]: base64 };
      setCustomPhotos(updated);

      try {
        localStorage.setItem('omito_hobby_photos', JSON.stringify(updated));
      } catch {
        // ignore
      }

      // Also persist to disk via API
      try {
        let filename = 'Cyber Security CTFs & Forensics.webp';
        if (selectedHobbyId === 'community-mentorship') filename = 'Community Mentorship & Women in Tech.webp';
        if (selectedHobbyId === 'technical-event-hosting') filename = 'Technical Event Hosting .jpeg';
        if (selectedHobbyId === 'technical-writing') filename = 'Technical Writing & Open Source.webp';

        await fetch('/api/upload-photo', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ filename, base64 }),
        });
      } catch {
        // ignore
      }
    };
    reader.readAsDataURL(file);
  };

  const activeHobby = HOBBIES.find((h) => h.id === selectedHobbyId) || HOBBIES[0];
  const activeImage = customPhotos[activeHobby.id] || activeHobby.image;

  return (
    <section id="hobbies" className="py-14 sm:py-20 bg-[#0F1117] text-white border-b border-[#19396D]/20 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="mb-10 space-y-2">
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Relevant Hobbies & Disciplines
          </h2>
          <p className="font-mono text-xs sm:text-sm text-neutral-400 max-w-2xl">
            Hands-on security investigations, community mentorship, technical event hosting, and open-source writing.
          </p>
        </div>

        {/* Interactive Split Showcase (Breaks Card Monotony with Compact Navigation) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 4 Slim Compact Discipline Selectors (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-2.5">
            {HOBBIES.map((hobby, index) => {
              const isSelected = hobby.id === selectedHobbyId;

              return (
                <button
                  key={hobby.id}
                  onClick={() => setSelectedHobbyId(hobby.id)}
                  className={`w-full text-left p-3 rounded-xl border transition-all duration-200 cursor-pointer flex items-center gap-3.5 group ${
                    isSelected
                      ? 'bg-[#19396D]/30 border-[#38BDF8] shadow-[0_0_20px_rgba(56,189,248,0.15)] ring-1 ring-[#38BDF8]/40'
                      : 'bg-[#131622] border-neutral-800/90 hover:border-neutral-700 hover:bg-[#161B2E]'
                  }`}
                >
                  {/* Photo Thumbnail */}
                  <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0 bg-[#0A0D14] border border-neutral-800">
                    <img
                      src={customPhotos[hobby.id] || hobby.image}
                      alt={hobby.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        // Fallback to internal path if needed
                        if (hobby.id === 'cybersecurity-ctf') e.currentTarget.src = '/hobbies/cybersecurity.webp';
                        else if (hobby.id === 'community-mentorship') e.currentTarget.src = '/hobbies/mentorship.webp';
                        else if (hobby.id === 'technical-event-hosting') e.currentTarget.src = '/hobbies/event-hosting.jpeg';
                        else if (hobby.id === 'technical-writing') e.currentTarget.src = '/hobbies/tech-writing.webp';
                      }}
                    />
                    <div className="absolute inset-0 bg-black/10" />
                  </div>

                  {/* Title & Micro-excerpt */}
                  <div className="flex-1 min-w-0 space-y-0.5">
                    <span className="font-mono text-[10px] text-[#38BDF8] font-bold block">
                      0{index + 1}
                    </span>

                    <h3
                      className={`text-sm sm:text-base font-bold font-display truncate transition-colors ${
                        isSelected ? 'text-[#38BDF8]' : 'text-white group-hover:text-neutral-200'
                      }`}
                    >
                      {hobby.title}
                    </h3>

                    <p className="text-[11px] text-neutral-400 line-clamp-1 font-sans">
                      {hobby.highlights[0]} · {hobby.highlights[1]}
                    </p>
                  </div>

                  {/* Indicator Arrow */}
                  <ChevronRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-[#38BDF8] translate-x-1' : 'text-neutral-600 group-hover:text-neutral-400'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Featured Discipline Stage (lg:col-span-7) */}
          <div className="lg:col-span-7 rounded-2xl bg-[#131622] border border-neutral-800 p-5 sm:p-7 space-y-5 shadow-2xl relative overflow-hidden">
            {/* Hidden file input for changing hobby photo */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*,.webp,.jpeg,.jpg,.png"
              className="hidden"
              onChange={handlePhotoSelect}
            />

            {/* Photo Container */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden bg-[#0A0D14] border border-neutral-800 shadow-inner group">
              <img
                src={activeImage}
                alt={activeHobby.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                onError={(e) => {
                  if (activeHobby.id === 'cybersecurity-ctf') e.currentTarget.src = '/hobbies/cybersecurity.webp';
                  else if (activeHobby.id === 'community-mentorship') e.currentTarget.src = '/hobbies/mentorship.webp';
                  else if (activeHobby.id === 'technical-event-hosting') e.currentTarget.src = '/hobbies/event-hosting.jpeg';
                  else if (activeHobby.id === 'technical-writing') e.currentTarget.src = '/hobbies/tech-writing.webp';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131622]/80 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Title & Description */}
            <div className="space-y-3.5">
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                {activeHobby.title}
              </h3>

              <div className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans space-y-2.5 whitespace-pre-line">
                {activeHobby.description}
              </div>

              {/* Areas I Explore / Areas I Enjoy */}
              {activeHobby.areasExplore && (
                <div className="pt-3.5 border-t border-neutral-800 space-y-2.5">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#38BDF8] block">
                    {activeHobby.id === 'technical-event-hosting' ? 'Areas I Enjoy:' : 'Areas I Explore:'}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeHobby.areasExplore.map((area, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 p-2 rounded-lg bg-[#0C0F1A] border border-neutral-800/80 text-xs text-neutral-300"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8] shrink-0 mt-0.5" />
                        <div className="leading-snug">
                          {area.label && (
                            <strong className="text-white font-mono mr-1 font-semibold block sm:inline">
                              {area.label}:
                            </strong>
                          )}
                          <span className="text-neutral-300">{area.text}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights tags */}
              <div className="pt-3 border-t border-neutral-800 flex flex-wrap gap-2">
                {activeHobby.highlights.map((h, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md bg-[#19396D]/40 border border-[#38BDF8]/30 text-[11px] font-mono text-[#38BDF8]"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

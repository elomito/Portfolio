import React, { useEffect } from 'react';
import { X, Calendar, Clock, Tag, ArrowLeft } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ post, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (post) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [post, onClose]);

  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#FAF7F2] dark:bg-[#0A1224] border border-[#163973]/20 dark:border-[#2A5CB8]/30 shadow-2xl text-[#122444] dark:text-[#FAF7F2] flex flex-col">
        {/* Sticky Top Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#FAF7F2]/95 dark:bg-[#0A1224]/95 backdrop-blur border-b border-[#163973]/15 dark:border-[#2A5CB8]/20">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-[#163973] dark:hover:text-[#FAF7F2] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Articles
          </button>

          <button
            onClick={onClose}
            aria-label="Close"
            className="p-1.5 rounded-lg text-neutral-500 hover:text-black dark:hover:text-white hover:bg-[#163973]/10 dark:hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-10 space-y-8">
          {/* Metadata Header */}
          <div className="space-y-3 border-b border-[#163973]/15 dark:border-[#2A5CB8]/20 pb-6">
            <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
              <span className="font-semibold text-[#163973] dark:text-[#93B4F0]">{post.category}</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {post.publishDate}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-[#163973] dark:text-[#FAF7F2] leading-tight">
              {post.title}
            </h1>

            <p className="text-sm font-mono text-neutral-500 dark:text-neutral-400">
              By Omito Elizabeth · Frontend Developer & DevOps Practitioner
            </p>
          </div>

          {/* Lead Introduction */}
          <p className="text-base sm:text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed font-serif italic border-l-2 border-[#163973] dark:border-[#93B4F0] pl-4 py-1">
            "{post.content.introduction}"
          </p>

          {/* Article Sections */}
          <div className="space-y-8">
            {post.content.sections.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="text-lg sm:text-xl font-bold font-display text-[#163973] dark:text-[#93B4F0]">
                  {section.heading}
                </h2>

                {section.body.map((paragraph, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}

                {/* Code Snippet if present */}
                {section.codeSnippet && (
                  <div className="rounded-xl overflow-hidden border border-[#163973]/30 bg-[#0B132B] text-neutral-200 my-4">
                    {section.codeSnippet.filename && (
                      <div className="px-4 py-2 bg-[#070D1F] border-b border-[#163973]/30 text-xs font-mono text-[#93B4F0] flex items-center justify-between">
                        <span>{section.codeSnippet.filename}</span>
                        <span className="text-[10px] text-neutral-500 uppercase">
                          {section.codeSnippet.language}
                        </span>
                      </div>
                    )}
                    <pre className="p-4 text-xs font-mono overflow-x-auto leading-relaxed text-amber-200/90">
                      <code>{section.codeSnippet.code}</code>
                    </pre>
                  </div>
                )}

                {/* Architectural Callout */}
                {section.callout && (
                  <div className="p-4 rounded-xl bg-[#163973]/10 dark:bg-[#163973]/30 border border-[#163973]/20 dark:border-[#2A5CB8]/30 text-xs sm:text-sm text-[#163973] dark:text-[#FAF7F2] font-medium">
                    <span className="font-bold mr-2 text-amber-600 dark:text-amber-400">Architectural Note:</span>
                    {section.callout}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <div className="p-5 rounded-2xl bg-white dark:bg-[#101D33] border border-[#163973]/15 dark:border-[#2A5CB8]/20 space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#163973] dark:text-[#93B4F0]">
              Key Engineering Takeaway
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {post.content.conclusion}
            </p>
          </div>

          {/* Tags */}
          <div className="pt-4 border-t border-[#163973]/15 dark:border-[#2A5CB8]/20 flex flex-wrap items-center gap-2 text-xs text-neutral-500">
            <Tag className="w-3.5 h-3.5 text-[#163973] dark:text-[#93B4F0]" />
            <span className="font-medium">Topics:</span>
            <span className="font-mono text-[#163973] dark:text-[#FAF7F2]">
              {post.tags.join(' · ')}
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-[#FAF7F2]/90 dark:bg-[#0A1224]/90 border-t border-[#163973]/15 dark:border-[#2A5CB8]/20 flex items-center justify-between">
          <span className="text-xs text-neutral-500">
            Written by Omito Elizabeth
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#163973] hover:bg-[#122A54] text-white text-xs font-semibold rounded-lg shadow transition-colors cursor-pointer"
          >
            Close Reader
          </button>
        </div>
      </div>
    </div>
  );
};

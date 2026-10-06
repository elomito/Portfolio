import React from 'react';
import { ArrowRight, BookOpen, ExternalLink } from 'lucide-react';
import { BLOG_POSTS, PERSONAL_INFO } from '../data/portfolioData';
import { BlogPost } from '../types';

interface BlogProps {
  onSelectPost: (post: BlogPost) => void;
}

export const Blog: React.FC<BlogProps> = ({ onSelectPost }) => {
  return (
    <section id="articles" className="py-14 sm:py-20 bg-[#0F1117] text-white border-b border-[#19396D]/20 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
              Articles & Case Studies
            </h2>
            <p className="font-mono text-xs sm:text-sm text-neutral-400 max-w-xl">
              Engineering insights, CI/CD delivery pipelines, Docker containerization, and networking architecture published on Dev.to.
            </p>
          </div>

          {/* Dev.to Publication Link */}
          <a
            href={PERSONAL_INFO.devto}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-lg bg-[#19396D]/60 hover:bg-[#19396D] border border-[#38BDF8]/40 text-xs font-mono font-bold text-white flex items-center gap-2 transition-all self-start md:self-auto hover:scale-105"
          >
            <span className="px-1.5 py-0.5 rounded bg-white text-black font-extrabold text-[10px]">DEV</span>
            <span>Follow on Dev.to</span>
            <ExternalLink className="w-3 h-3 text-[#38BDF8]" />
          </a>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              onClick={() => onSelectPost(post)}
              className="group cursor-pointer flex flex-col justify-between p-8 rounded-xl bg-[#131622] border border-neutral-800 hover:border-[#19396D] hover:shadow-[0_10px_30px_rgba(25,57,109,0.3)] transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Title */}
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-[#38BDF8] transition-colors leading-snug">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono text-neutral-400">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-black/40 border border-neutral-800 text-neutral-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-4 border-t border-neutral-800 flex items-center justify-between text-xs font-mono text-[#38BDF8]">
                <span className="flex items-center gap-1.5 font-bold">
                  <BookOpen className="w-3.5 h-3.5" />
                  Read Full Article & Code
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

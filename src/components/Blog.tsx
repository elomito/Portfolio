import React from 'react';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { BLOG_POSTS } from '../data/portfolioData';
import { BlogPost } from '../types';

interface BlogProps {
  onSelectPost: (post: BlogPost) => void;
}

export const Blog: React.FC<BlogProps> = ({ onSelectPost }) => {
  return (
    <section id="blog" className="py-24 sm:py-32 bg-[#0F1117] text-white border-b border-[#19396D]/20 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="mb-16 space-y-3">
          <span className="font-mono text-xs text-[#38BDF8] tracking-wider uppercase block">
            // technical writing & case studies
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
            Engineering Insights
          </h2>
          <p className="font-mono text-xs sm:text-sm text-neutral-400 max-w-xl">
            Architectural explorations into WebRTC latency, Safaricom M-Pesa webhooks, Bitcoin Lightning escrows, and digital forensics principles.
          </p>
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
                {/* Meta Header */}
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-400">
                  <span className="text-[#38BDF8] font-semibold">{post.category}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.publishDate}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

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
                  Read Full Technical Breakdown
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

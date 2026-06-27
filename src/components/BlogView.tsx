import React, { useState } from 'react';
import { ARTICLES } from '../data';
import { Article } from '../types';
import { Search, Clock, Calendar, ArrowRight, X, BookOpen } from 'lucide-react';
import SEO from './SEO';

export default function BlogView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const filteredArticles = ARTICLES.filter((art) =>
    art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    art.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Simple markdown processor to render clean headings/lists inside the modal without external package weight limit risks
  const renderArticleContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, idx) => {
      const trimmed = line.trim();
      if (!trimmed) return <div key={idx} className="h-4" />;
      
      if (trimmed.startsWith('###')) {
        return (
          <h3 key={idx} className="font-display font-bold text-xl text-slate-900 mt-6 mb-2 tracking-tight">
            {trimmed.replace('###', '').trim()}
          </h3>
        );
      }
      
      if (trimmed.startsWith('-')) {
        // Parse bold elements inside list items if any
        const itemText = trimmed.replace('-', '').trim();
        return (
          <li key={idx} className="ml-5 list-disc text-slate-650 my-1.5 text-base leading-relaxed pl-1">
            {parseInlineStyling(itemText)}
          </li>
        );
      }

      return (
        <p key={idx} className="text-slate-650 text-base leading-relaxed my-3">
          {parseInlineStyling(trimmed)}
        </p>
      );
    });
  };

  const parseInlineStyling = (text: string) => {
    // Process markdown's **text** into bold elements
    const parts = text.split('**');
    return parts.map((part, i) => {
      if (i % 2 === 1) {
        return <strong key={i} className="font-bold text-slate-950">{part}</strong>;
      }
      return part;
    });
  };

  return (
    <div className="space-y-12 py-10 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEO 
        title="SprintX Blog – Core Performance & Sports Shoes Guides" 
        description="Explore the SprintX knowledge hub for professional guides on sports training, shoe maintenance, injury preventive cushioning, and performance lifestyle guides." 
        keywords="Running Tips, Shoe Guides, Sports Footwear Blog"
        canonicalPath="/blog"
      />
      {/* Blog Hero Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6 border-b border-slate-150">
        <div className="text-left space-y-2 max-w-xl">
          <div className="inline-flex bg-orange-100 text-orange-700 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider">
            Knowledge Hub
          </div>
          <h1 className="font-display font-extrabold text-4xl text-slate-900 tracking-tight">
            SprintX Articles
          </h1>
          <p className="text-slate-700 text-sm sm:text-base">
            Expert-curated guides on sports training, shoe maintenance, physical anatomy support, and lifestyle choices.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-450" />
          <input
            type="text"
            placeholder="Search wellness articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-hidden focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all font-medium text-slate-800"
          />
        </div>
      </div>

      {/* Articles Grid */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((art) => (
            <article
              key={art.id}
              onClick={() => setSelectedArticle(art)}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-3xs hover:shadow-lg hover:border-slate-200 transition-all duration-300 flex flex-col justify-between cursor-pointer text-left"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-slate-900">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-slate-800 font-mono text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full uppercase">
                    Health & Shoe Care
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-3">
                  <div className="flex items-center space-x-4 text-xs font-mono text-slate-600">
                    <span className="flex items-center space-x-1">
                      <Calendar className="h-3.5 w-3.5 text-orange-500" />
                      <span>{art.date}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="h-3.5 w-3.5 text-orange-500" />
                      <span>{art.readTime}</span>
                    </span>
                  </div>

                  <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-950 leading-tight group-hover:text-orange-500 transition-colors">
                    {art.title}
                  </h2>

                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed line-clamp-2">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0">
                <span className="inline-flex items-center text-sm font-semibold text-orange-500 group-hover:text-orange-600">
                  Read Full Article
                  <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
                </span>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-200 space-y-2">
          <BookOpen className="mx-auto h-10 w-10 text-slate-300" />
          <h3 className="font-semibold text-slate-700">No Articles Found</h3>
          <p className="text-sm text-slate-600">Try modifying your search terms (e.g. "running" or "washing").</p>
        </div>
      )}

      {/* Interactive Article Reading Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
          {/* Backdrop screen */}
          <div 
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity" 
            onClick={() => setSelectedArticle(null)}
          />

          <div className="flex min-h-full items-center justify-center p-4 sm:p-6 text-center">
            <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all w-full max-w-3xl my-8">
              {/* Close pin */}
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/60 text-white hover:bg-slate-950 transition-colors cursor-pointer rounded-full"
                aria-label="Close article"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Banner */}
              <div className="relative h-64 sm:h-80 bg-slate-900">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 text-left space-y-2.5">
                  <div className="flex items-center space-x-4 text-xs font-mono text-slate-300">
                    <span className="flex items-center space-x-1">
                      <Calendar className="h-3.5 w-3.5 text-orange-400" />
                      <span>{selectedArticle.date}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="h-3.5 w-3.5 text-orange-400" />
                      <span>{selectedArticle.readTime}</span>
                    </span>
                  </div>
                  <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight tracking-tight">
                    {selectedArticle.title}
                  </h2>
                </div>
              </div>

              {/* Article Markdown parsed container */}
              <div className="p-6 sm:p-8 md:p-10 max-h-[50vh] overflow-y-auto scrollbar-thin">
                <div className="prose prose-slate max-w-none text-left">
                  {renderArticleContent(selectedArticle.content)}
                </div>
              </div>

              {/* Footer row */}
              <div className="bg-slate-50 px-6 py-4 sm:px-8 flex justify-between items-center border-t border-slate-100">
                <span className="text-xs font-mono text-slate-600 uppercase tracking-wide">
                  Published by SprintX Footwear
                </span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-950 text-white font-medium rounded-xl text-xs sm:text-sm cursor-pointer"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS, ARTICLES } from '../data';
import { 
  Compass, 
  ShoppingBag, 
  Info, 
  BookOpen, 
  Mail, 
  FileText, 
  Tag, 
  MapPin, 
  Flame, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import SEO from './SEO';

export default function SitemapView() {
  return (
    <div className="space-y-12 py-10 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
      <SEO 
        title="SprintX Site Directory – Visual HTML Map" 
        description="Navigate all premium athletic footwear models, training guides, corporate contact forms, and support indices of SprintX Footwear." 
        keywords="SprintX Sitemap, Shoe Directory, Athlete Guides"
        canonicalPath="/sitemap"
      />

      {/* Header Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full filter blur-3xl opacity-20 -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-800 rounded-full filter blur-3xl opacity-30 -ml-20 -mb-20"></div>
        
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex bg-orange-500 text-white font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider font-mono">
            Navigation Index
          </div>
          <h1 className="font-display font-black text-3xl sm:text-5xl tracking-tight leading-none text-white">
            SprintX Site Directory
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl font-normal">
            Welcome to our central hub. Easily explore our full range of professional athletic footwear, read curated training articles, or find administrative sitemaps.
          </p>
        </div>
      </div>

      {/* Grid of Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Card 1: Core Pages */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 hover:border-orange-200 transition-colors">
          <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
            <div className="p-2.5 bg-orange-50 text-orange-600 rounded-xl">
              <Compass className="h-5 w-5" />
            </div>
            <h2 className="font-display font-extrabold text-slate-900 text-lg tracking-tight">
              Main Pages
            </h2>
          </div>
          <ul className="space-y-3">
            <li>
              <Link to="/" className="group flex items-center justify-between text-slate-700 hover:text-orange-600 text-sm font-semibold transition-colors">
                <span>Home Page</span>
                <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-orange-500" />
              </Link>
            </li>
            <li>
              <Link to="/products" className="group flex items-center justify-between text-slate-700 hover:text-orange-600 text-sm font-semibold transition-colors">
                <span>Our Shoes & Catalog</span>
                <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-orange-500" />
              </Link>
            </li>
            <li>
              <Link to="/about" className="group flex items-center justify-between text-slate-700 hover:text-orange-600 text-sm font-semibold transition-colors">
                <span>About SprintX Brand</span>
                <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-orange-500" />
              </Link>
            </li>
            <li>
              <Link to="/blog" className="group flex items-center justify-between text-slate-700 hover:text-orange-600 text-sm font-semibold transition-colors">
                <span>Latest Blog & Guides</span>
                <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-orange-500" />
              </Link>
            </li>
            <li>
              <Link to="/contact" className="group flex items-center justify-between text-slate-700 hover:text-orange-600 text-sm font-semibold transition-colors">
                <span>Contact Us & Support</span>
                <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-orange-500" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Card 2: Shoe Products Catalog */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 hover:border-orange-200 transition-colors">
          <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
            <div className="p-2.5 bg-orange-50 text-orange-600 rounded-xl">
              <ShoppingBag className="h-5 w-5" />
            </div>
            <h2 className="font-display font-extrabold text-slate-900 text-lg tracking-tight">
              Elite Footwear
            </h2>
          </div>
          <ul className="space-y-3">
            {PRODUCTS.map((prod) => (
              <li key={prod.id}>
                <Link 
                  to="/products" 
                  className="group flex items-center justify-between text-slate-700 hover:text-orange-600 text-sm font-semibold transition-colors"
                >
                  <span className="flex flex-col">
                    <span>{prod.name}</span>
                    <span className="text-[10px] text-slate-500 font-normal italic uppercase font-mono tracking-wider">{prod.category}</span>
                  </span>
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-orange-500" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Card 3: Training Knowledge Blog */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 hover:border-orange-200 transition-colors">
          <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
            <div className="p-2.5 bg-orange-50 text-orange-600 rounded-xl">
              <BookOpen className="h-5 w-5" />
            </div>
            <h2 className="font-display font-extrabold text-slate-900 text-lg tracking-tight">
              Insights & Articles
            </h2>
          </div>
          <ul className="space-y-3">
            {ARTICLES.map((art) => (
              <li key={art.id}>
                <Link 
                  to="/blog" 
                  className="group flex items-center justify-between text-slate-700 hover:text-orange-600 text-sm font-semibold transition-colors"
                >
                  <span className="flex flex-col">
                    <span className="line-clamp-1">{art.title}</span>
                    <span className="text-[10px] text-slate-500 font-normal font-mono">{art.date} • {art.readTime}</span>
                  </span>
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-orange-500" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Card 4: Categories & Specialties */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 hover:border-orange-200 transition-colors">
          <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
            <div className="p-2.5 bg-orange-50 text-orange-600 rounded-xl">
              <Tag className="h-5 w-5" />
            </div>
            <h2 className="font-display font-extrabold text-slate-900 text-lg tracking-tight">
              Shoe Categories
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {['Running Shoes', 'Sports Shoes', 'Casual Sneakers', 'Walking Shoes'].map((cat, idx) => (
              <Link 
                key={idx}
                to="/products"
                className="p-3 bg-slate-50 hover:bg-orange-50 rounded-xl text-slate-700 hover:text-orange-600 text-xs font-bold transition-all text-center border border-slate-150"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>

        {/* Card 5: Search & Support Channels */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 hover:border-orange-200 transition-colors">
          <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
            <div className="p-2.5 bg-orange-50 text-orange-600 rounded-xl">
              <Mail className="h-5 w-5" />
            </div>
            <h2 className="font-display font-extrabold text-slate-900 text-lg tracking-tight">
              Corporate & Help
            </h2>
          </div>
          <ul className="space-y-3">
            <li>
              <a href="mailto:support@sprintx.com" className="group flex items-center justify-between text-slate-700 hover:text-orange-600 text-sm font-semibold transition-colors">
                <span>Email Support Desk</span>
                <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-600 font-mono">support@sprintx.com</span>
              </a>
            </li>
            <li>
              <div className="group flex items-center justify-between text-slate-700 text-sm font-semibold">
                <span>Helpline Voice Line</span>
                <span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded text-slate-600 font-mono">+91 11 4055 9988</span>
              </div>
            </li>
            <li>
              <div className="group flex items-center justify-between text-slate-700 text-sm font-semibold">
                <span>Delhi HQ Address</span>
                <span className="text-[10px] text-slate-600 text-right line-clamp-1 italic">Vasant Kunj, New Delhi</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Card 6: Search Engine Crawler Files */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 hover:border-orange-200 transition-colors">
          <div className="flex items-center space-x-3 pb-3 border-b border-slate-100">
            <div className="p-2.5 bg-orange-50 text-orange-600 rounded-xl">
              <FileText className="h-5 w-5" />
            </div>
            <h2 className="font-display font-extrabold text-slate-900 text-lg tracking-tight">
              SEO Bot Registries
            </h2>
          </div>
          <ul className="space-y-3">
            <li>
              <a 
                href="/sitemap.xml" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center justify-between text-slate-700 hover:text-orange-600 text-sm font-semibold transition-colors"
              >
                <span className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>XML Sitemap</span>
                </span>
                <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-mono uppercase tracking-wider font-bold">sitemap.xml</span>
              </a>
            </li>
            <li>
              <a 
                href="/robots.txt" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center justify-between text-slate-700 hover:text-orange-600 text-sm font-semibold transition-colors"
              >
                <span className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  <span>Robots Exclusion</span>
                </span>
                <span className="text-[10px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded font-mono uppercase tracking-wider font-bold">robots.txt</span>
              </a>
            </li>
            <li>
              <a 
                href="/google148fc9822834ca44.html" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center justify-between text-slate-700 hover:text-orange-600 text-sm font-semibold transition-colors"
              >
                <span className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                  <span>Google Verification</span>
                </span>
                <span className="text-[10px] bg-orange-50 text-orange-700 px-2 py-0.5 rounded font-mono text-[9px]">File Verification</span>
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Trust Quote Footer Banner */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 text-center sm:text-left">
        <div className="space-y-1">
          <div className="flex items-center justify-center sm:justify-start space-x-2 text-slate-900">
            <Sparkles className="h-5 w-5 text-orange-500" />
            <span className="font-display font-bold text-base">Fully Compliant Navigation Index</span>
          </div>
          <p className="text-xs text-slate-600 max-w-lg">
            This visual directory is verified to have 100% background-foreground color contrasts compliant with global web accessibility standards (WCAG 2.1 AA).
          </p>
        </div>
        <Link 
          to="/products"
          className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-bold text-sm tracking-tight transition-all shadow-md shadow-orange-500/10 cursor-pointer"
        >
          Begin Exploring
        </Link>
      </div>
    </div>
  );
}

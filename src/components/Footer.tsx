import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Zap, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300">
      {/* Top Banner section */}
      <div className="border-b border-slate-850">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <Zap className="h-6 w-6 text-orange-500 fill-orange-500" />
            <span className="font-display font-bold text-xl tracking-tight text-white">
              Sprint<span className="text-orange-500">X</span>
            </span>
          </div>
          <p className="text-sm text-slate-300">
            SprintX – Run Beyond Limits. Empowering athletic strides across India.
          </p>
        </div>
      </div>

      {/* Main Grid content */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="font-display font-semibold text-white tracking-wide uppercase text-xs">
            Corporate Headquarters
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
              <span>
                SprintX Footwear Pvt. Ltd.<br />
                221 Sports Avenue, New Delhi, India
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="h-4 w-4 text-orange-500 shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="h-4 w-4 text-orange-500 shrink-0" />
              <a href="mailto:support@sprintx.com" className="hover:text-white transition-colors">
                support@sprintx.com
              </a>
            </li>
          </ul>
        </div>

        {/* Quick navigation */}
        <div className="space-y-4">
          <h3 className="font-display font-semibold text-white tracking-wide uppercase text-xs">
            Quick Navigation
          </h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <Link to="/" onClick={handleLinkClick} className="text-left hover:text-white transition-colors py-1 cursor-pointer">
              Home Page
            </Link>
            <Link to="/products" onClick={handleLinkClick} className="text-left hover:text-white transition-colors py-1 cursor-pointer">
              Our Shoes
            </Link>
            <Link to="/about" onClick={handleLinkClick} className="text-left hover:text-white transition-colors py-1 cursor-pointer">
              About Us
            </Link>
            <Link to="/blog" onClick={handleLinkClick} className="text-left hover:text-white transition-colors py-1 cursor-pointer">
              Latest Blog
            </Link>
            <Link to="/contact" onClick={handleLinkClick} className="text-left hover:text-white transition-colors py-1 cursor-pointer">
              Contact Us
            </Link>
            <Link to="/sitemap" onClick={handleLinkClick} className="text-left hover:text-white transition-colors py-1 cursor-pointer">
              Site Map
            </Link>
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="text-left hover:text-white transition-colors py-1 cursor-pointer">
              Site Map (XML)
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="space-y-4">
          <h3 className="font-display font-semibold text-white tracking-wide uppercase text-xs">
            Follow SprintX Official
          </h3>
          <p className="text-sm text-slate-300">
            Join our athletic community for exclusive drops and fitness updates.
          </p>
          <div className="flex space-x-4">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer noopener"
              className="p-2 bg-slate-900 rounded-lg hover:bg-orange-500 hover:text-white transition-all text-slate-300"
              title="Instagram: @SprintXOfficial"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noreferrer noopener"
              className="p-2 bg-slate-900 rounded-lg hover:bg-orange-500 hover:text-white transition-all text-slate-300"
              title="Facebook: SprintX Footwear"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noreferrer noopener"
              className="p-2 bg-slate-900 rounded-lg hover:bg-orange-500 hover:text-white transition-all text-slate-300"
              title="X (Twitter): @SprintXOfficial"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Under footer copyright */}
      <div className="bg-slate-975 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 text-xs text-slate-300">
          <p>© {currentYear} SprintX Footwear Pvt. Ltd. All rights reserved.</p>
          <div className="flex space-x-4">
            <span>India Standard Time</span>
            <span>•</span>
            <span>Premium Performance Footwear</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

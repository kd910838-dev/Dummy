import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CartItem } from '../types';
import { ShoppingBag, Zap, Menu, X } from 'lucide-react';

interface HeaderProps {
  cart: CartItem[];
  setIsCartOpen: (open: boolean) => void;
}

export default function Header({ cart, setIsCartOpen }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/about', label: 'About Us' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact Us' }
  ];

  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isPathActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/"
            onClick={handleNavClick}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="bg-orange-500 text-white p-1.5 rounded-lg group-hover:bg-orange-600 transition-colors">
              <Zap className="h-5 w-5 fill-white" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-slate-950 sm:text-2xl">
              Sprint<span className="text-orange-500">X</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleNavClick}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isPathActive(item.path)
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Cart & Mobile menu trigger icon */}
          <div className="flex items-center space-x-3">
            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full text-slate-700 hover:bg-slate-50 hover:text-orange-500 transition-colors cursor-pointer"
              aria-label="Toggle cart"
            >
              <ShoppingBag className="h-5.5 w-5.5" />
              {totalCartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] font-bold font-mono h-5 w-5 flex items-center justify-center rounded-full ring-2 ring-white animate-bounce">
                  {totalCartItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900 cursor-pointer"
              aria-label="Main menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-4 space-y-1 shadow-inner">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={handleNavClick}
              className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                isPathActive(item.path)
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

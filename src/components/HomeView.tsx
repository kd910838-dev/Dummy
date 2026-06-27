import React from 'react';
import { useNavigate } from 'react-router-dom';
import { REVIEWS, WHY_US } from '../data';
import { ArrowRight, Star, Layers, Sparkles, Activity, IndianRupee, Truck, Zap } from 'lucide-react';
import SEO from './SEO';

export default function HomeView() {
  const navigate = useNavigate();
  
  const categories = [
    { name: 'Running Shoes', count: 'Velocity & Speed', bg: 'from-blue-500 to-indigo-600', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600' },
    { name: 'Sports Shoes', count: 'Outdoor & Trail', bg: 'from-orange-500 to-red-600', image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=600' },
    { name: 'Casual Sneakers', count: 'Streetwear & Lifestyle', bg: 'from-emerald-500 to-teal-600', image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=600' },
    { name: 'Walking Shoes', count: 'Plush All-Day Wear', bg: 'from-purple-500 to-pink-600', image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=600' }
  ];

  const handleCategorySelect = (categoryName: string) => {
    const formatted = categoryName === 'All Pairings' || categoryName === 'All' ? '' : `?category=${encodeURIComponent(categoryName)}`;
    navigate(`/products${formatted}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return <Layers className="h-6 w-6 text-orange-600" />;
      case 'Sparkles': return <Sparkles className="h-6 w-6 text-orange-600" />;
      case 'Activity': return <Activity className="h-6 w-6 text-orange-600" />;
      case 'IndianRupee': return <IndianRupee className="h-6 w-6 text-orange-600" />;
      case 'Truck': return <Truck className="h-6 w-6 text-orange-600" />;
      default: return <Zap className="h-6 w-6 text-orange-600" />;
    }
  };

  return (
    <div className="space-y-20 pb-20">
      <SEO 
        title="SprintX – Run Beyond Limits" 
        description="Discover premium athletic shoes designed for ultimate comfort, performance, and modern style with SprintX. Explore specialized running, sport, casual lifestyle, and walking shoes with fast delivery across India." 
        keywords="Athletic Shoes, Running Shoes, Sports Footwear"
        canonicalPath="/"
      />
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white rounded-3xl mx-4 sm:mx-6 lg:mx-8 mt-6">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-orange-950/40" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 lg:px-12 flex flex-col lg:flex-row items-center gap-12 z-10">
          <div className="flex-1 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 bg-orange-500/10 text-orange-400 px-3 py-1.2 rounded-full border border-orange-500/30 text-xs font-semibold uppercase tracking-wider">
              <span>Made For Champions</span>
            </div>
            
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none text-white">
              SprintX – <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Run Beyond Limits</span>
            </h1>
            
            <p className="text-slate-300 text-lg sm:text-xl max-w-xl font-normal leading-relaxed">
              Discover premium shoes designed for comfort, performance, and style. Whether you're running, training, or walking, SprintX has the perfect pair for every step.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => handleCategorySelect('All Pairings')}
                className="inline-flex items-center justify-center px-6 py-3.5 bg-orange-500 text-white font-semibold rounded-xl shadow-lg shadow-orange-500/20 hover:bg-orange-600 hover:shadow-orange-500/30 transition-all duration-200 group text-base cursor-pointer"
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1.5 transition-transform" />
              </button>
              <button
                onClick={() => {
                  navigate('/about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center px-6 py-3.5 bg-slate-800 text-slate-100 font-semibold rounded-xl border border-slate-750 hover:bg-slate-750 transition-all duration-200 text-base cursor-pointer"
              >
                Explore Collection
              </button>
            </div>
          </div>

          {/* Banner Graphic Showcase */}
          <div className="flex-1 relative w-full flex justify-center items-center">
            <div className="absolute w-72 h-72 sm:w-80 sm:h-80 bg-orange-500/20 rounded-full blur-3xl" />
            <img 
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800" 
              alt="SprintX Ultimate Sport Shoe" 
              className="relative w-full max-w-md object-contain drop-shadow-[0_25px_25px_rgba(249,115,22,0.4)] rotate-[-12deg] hover:rotate-[-5deg] transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* 2. Featured Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="font-display font-extrabold text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Featured Categories
          </h2>
          <p className="text-slate-700 text-base max-w-lg mx-auto">
            Engineered footwear solutions customized for specific weight loading and stride kinematics.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              onClick={() => handleCategorySelect(cat.name)}
              className="group relative h-80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-slate-100"
            >
              {/* Image background block */}
              <div className="absolute inset-0 bg-slate-900">
                <img 
                  src={cat.image} 
                  alt={cat.name}
                  className="w-full h-full object-cover opacity-75 group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Gradient layer */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

              {/* Text content position bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-1 text-left">
                <p className="text-xs font-semibold text-orange-400 tracking-wider uppercase font-mono">
                  {cat.count}
                </p>
                <h3 className="font-display font-bold text-xl text-white">
                  {cat.name}
                </h3>
                <div className="inline-flex items-center space-x-1.5 text-xs font-semibold text-white/90 pt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Explore Shoes</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Why Choose SprintX? */}
      <section className="bg-white border-y border-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-2">
            <h2 className="font-display font-extrabold text-3xl tracking-tight text-slate-900 sm:text-4xl">
              Why Choose SprintX?
            </h2>
            <p className="text-slate-700 text-base max-w-lg mx-auto">
              Every detail is calibrated to perfection, delivering luxury high-performance at responsive prices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {WHY_US.map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center hover:bg-slate-100/50 transition-colors space-y-4 shadow-2xs"
              >
                <div className="mx-auto w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  {getIcon(item.icon)}
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-display font-bold text-slate-900 text-sm tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Customer Reviews */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-2">
          <h2 className="font-display font-extrabold text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Customer Reviews
          </h2>
          <p className="text-slate-700 text-base max-w-lg mx-auto">
            Don't just take our word for it. Hear from real runners pushing limits across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xs flex flex-col justify-between text-left space-y-6 relative hover:shadow-md transition-shadow"
            >
              <div className="absolute top-6 right-8 text-6xl font-serif text-slate-100 select-none pointer-events-none">
                “
              </div>
              <div className="space-y-4 relative z-10">
                {/* Stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 italic text-sm leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>
              
              <div className="border-t border-slate-50 pt-4 flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {rev.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    {rev.author}
                  </h4>
                  <p className="text-xs text-slate-600">Verified Buyer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

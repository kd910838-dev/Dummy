import React from 'react';
import { VALUES } from '../data';
import { ShieldCheck, Lightbulb, Leaf, Heart, ArrowRight } from 'lucide-react';
import SEO from './SEO';

export default function AboutView() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="h-6 w-6 text-orange-600" />;
      case 'Lightbulb': return <Lightbulb className="h-6 w-6 text-orange-600" />;
      case 'Leaf': return <Leaf className="h-6 w-6 text-orange-600" />;
      case 'Heart': return <Heart className="h-6 w-6 text-orange-600" />;
      default: return <ShieldCheck className="h-6 w-6 text-orange-600" />;
    }
  };

  return (
    <div className="space-y-16 py-10 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEO 
        title="About SprintX – Crafted For Champions" 
        description="Learn the founding story of SprintX and our mission to create elite athletic, running, and fitness lifestyle footwear combining premium durability and affordability." 
        keywords="SprintX Brand, Premium Footwear, Athletic Lifestyle"
        canonicalPath="/about"
      />
      {/* Editorial Header & Story */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6 text-left">
          <div className="inline-flex bg-orange-100 text-orange-700 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider">
            Our Journey
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-slate-900 tracking-tight">
            About SprintX
          </h1>
          <div className="space-y-4 text-base text-slate-700 leading-relaxed max-w-2xl font-normal">
            <p className="font-medium text-slate-800 text-lg">
              SprintX was founded with a simple mission: to create high-performance footwear that combines comfort, durability, and modern style.
            </p>
            <p>
              Since our launch, we have helped thousands of customers achieve their fitness goals with shoes designed for everyday performance. We believe that premium footwear should not carry astronomical price tags. By streamlining our supply chains and selecting durable lightweight polymers, we deliver peak-performance runners straight to active enthusiasts across India.
            </p>
          </div>
        </div>

        {/* Feature Image Frame */}
        <div className="lg:col-span-5 relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur-lg opacity-20" />
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-white p-2">
            <img 
              src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=600" 
              alt="Active running with SprintX" 
              className="rounded-xl w-full h-80 object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission Row */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Vision Card */}
        <div className="bg-slate-900 text-white p-8 sm:p-10 rounded-2xl text-left flex flex-col justify-between space-y-6 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-orange-500/10 rounded-full blur-2xl" />
          <div className="space-y-4">
            <span className="text-orange-400 font-mono text-xs uppercase tracking-widest font-bold">The Horizon</span>
            <h2 className="font-display font-extrabold text-2xl tracking-tight">Our Vision</h2>
            <p className="text-slate-300 text-base leading-relaxed">
              To become a trusted global footwear brand known for innovation and customer satisfaction, empowering millions to walk, run, and step with infinite confidence.
            </p>
          </div>
        </div>

        {/* Mission Card */}
        <div className="bg-white border border-slate-100 p-8 sm:p-10 rounded-2xl text-left flex flex-col justify-between space-y-6 shadow-xs">
          <div className="space-y-4 font-normal">
            <span className="text-orange-500 font-mono text-xs uppercase tracking-widest font-bold">The Drive</span>
            <h2 className="font-display font-extrabold text-2xl tracking-tight text-slate-900">Our Mission</h2>
            <ul className="space-y-3.5 text-slate-700 text-base">
              <li className="flex items-start">
                <span className="text-orange-500 font-extrabold mr-2.5">•</span>
                <span>Deliver premium-quality footwear calibrated for extreme physical support.</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 font-extrabold mr-2.5">•</span>
                <span>Promote healthy, organic, and active lifestyles throughout regional communities.</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 font-extrabold mr-2.5">•</span>
                <span>Provide exceptional, uncompromising customer service assisting standard deliveries.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="space-y-10">
        <div className="text-center space-y-2">
          <div className="inline-flex bg-orange-100 text-orange-700 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider">
            Core Beliefs
          </div>
          <h2 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight sm:text-4xl">
            Our Values
          </h2>
          <p className="text-slate-700 text-base max-w-md mx-auto">
            The foundation of everything we build, design, and produce at SprintX.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((val) => (
            <div
              key={val.title}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-3xs hover:border-orange-200 transition-colors text-left space-y-4"
            >
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center">
                {getIcon(val.icon)}
              </div>
              <div className="space-y-2">
                <h3 className="font-display font-bold text-slate-900 text-lg tracking-tight">
                  {val.title}
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Star, 
  Package, 
  Compass, 
  BookOpen,
  Heart
} from 'lucide-react';
import { ActivePage, StarterKit } from '../types';
import { STARTER_KITS_DATA } from '../data/kitsData';

interface HeroSectionProps {
  setActivePage: (page: ActivePage) => void;
  onSelectKit: (kit: StarterKit) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ setActivePage, onSelectKit }) => {
  const featuredKits = STARTER_KITS_DATA.slice(0, 3);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Soft Background Accents */}
      <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 -z-10 w-80 h-80 bg-rose-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines and CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-amber-100/80 border border-amber-300/60 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold text-amber-950 shadow-xs">
              <Sparkles className="w-4 h-4 text-amber-600 animate-pulse" />
              <span>No more researching 20 products. We packed the essentials.</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-[#1E1B18] tracking-tight leading-[1.08]">
              Start Something <br />
              <span className="relative inline-block text-stone-900">
                New.
                <span className="absolute -bottom-1 left-0 right-0 h-3 bg-amber-300/60 -z-10 rounded-sm transform -rotate-1" />
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-xl text-stone-600 max-w-2xl font-normal leading-relaxed">
              Everything you need to discover a new hobby, lifestyle or experience — thoughtfully curated into one kit with beginner tools, clear guides, and zero intimidation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                id="hero-explore-cta"
                onClick={() => {
                  setActivePage('explore');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-[#1E1B18] hover:bg-stone-800 text-white font-bold text-base sm:text-lg px-8 py-4 rounded-2xl shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-2 group active:scale-95"
              >
                <span>Explore Starter Kits</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-amber-400" />
              </button>

              <button
                id="hero-quiz-cta"
                onClick={() => {
                  setActivePage('quiz');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-amber-400 hover:bg-amber-500 text-stone-950 font-bold text-base sm:text-lg px-7 py-4 rounded-2xl transition-all flex items-center justify-center gap-2.5 shadow-sm hover:shadow-md active:scale-95"
              >
                <Sparkles className="w-5 h-5 text-stone-900" />
                <span>Find My Kit (1-Min Quiz)</span>
              </button>
            </div>

            {/* Trust Checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-stone-200/70 text-xs sm:text-sm font-semibold text-stone-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Prior Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Step-by-Step Guidebook</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>30-Day Happiness Guarantee</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Kit Mosaic */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Lifestyle Card */}
              <div className="relative rounded-3xl bg-white p-3 shadow-2xl border border-stone-200/80 overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
                <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-stone-100">
                  <img
                    src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80"
                    alt="Starter Kits on desk"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-amber-400 text-stone-950 text-xs font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        Featured Starter Box
                      </span>
                      <span className="bg-white/20 backdrop-blur-md text-xs px-2 py-0.5 rounded-full font-medium">
                        Everything Inside
                      </span>
                    </div>
                    <h3 className="font-display font-extrabold text-2xl text-white">
                      Photography Starter Kit
                    </h3>
                    <p className="text-xs text-stone-200 mt-1 line-clamp-1">
                      Tripod • 64GB Fast SD • Lens Cleaning Kit • 50-Photo Handbook
                    </p>
                  </div>
                </div>

                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-stone-800">4.9 / 5.0</span>
                    <span className="text-xs text-stone-500">(340+ beginners started)</span>
                  </div>

                  <button
                    onClick={() => {
                      const kit = STARTER_KITS_DATA.find((k) => k.id === 'kit-photography');
                      if (kit) onSelectKit(kit);
                    }}
                    className="text-xs font-bold text-stone-900 hover:text-amber-600 flex items-center gap-1"
                  >
                    <span>View Box</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Floating Pill Mini Card 1: Painting Kit */}
              <div 
                onClick={() => {
                  const kit = STARTER_KITS_DATA.find((k) => k.id === 'kit-painting');
                  if (kit) onSelectKit(kit);
                }}
                className="absolute -top-6 -left-6 sm:-left-8 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-stone-200/80 flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform hidden sm:flex"
              >
                <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-stone-100">
                  <img
                    src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=200&q=80"
                    alt="Painting kit"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left pr-2">
                  <div className="text-[10px] font-bold text-rose-600 uppercase tracking-wider">
                    🎨 Most Popular
                  </div>
                  <div className="text-xs font-bold text-stone-900">Painting Starter Kit</div>
                  <div className="text-[11px] text-stone-500">18 Paints + Easel + Guide</div>
                </div>
              </div>

              {/* Floating Pill Mini Card 2: Plant Parent */}
              <div 
                onClick={() => {
                  const kit = STARTER_KITS_DATA.find((k) => k.id === 'kit-plants');
                  if (kit) onSelectKit(kit);
                }}
                className="absolute -bottom-6 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-stone-200/80 flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform"
              >
                <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-stone-100">
                  <img
                    src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=200&q=80"
                    alt="Plant kit"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left pr-2">
                  <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">
                    🌱 Zero Guesswork
                  </div>
                  <div className="text-xs font-bold text-stone-900">Plant Parent Kit</div>
                  <div className="text-[11px] text-stone-500">Pots + Soil + Moisture Meter</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Star, 
  ShieldCheck, 
  Package, 
  Compass, 
  Heart, 
  CheckCircle2,
  Quote
} from 'lucide-react';
import { HeroSection } from '../components/HeroSection';
import { CategoryGrid } from '../components/CategoryGrid';
import { HowItWorks } from '../components/HowItWorks';
import { FindKitQuiz } from '../components/FindKitQuiz';
import { GiftExperience } from '../components/GiftExperience';
import { ProductCard } from '../components/ProductCard';
import { STARTER_KITS_DATA } from '../data/kitsData';
import { ActivePage, CategorySlug, StarterKit } from '../types';

interface HomeViewProps {
  setActivePage: (page: ActivePage) => void;
  onSelectKit: (kit: StarterKit) => void;
  onSelectCategory: (category: CategorySlug) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ 
  setActivePage, 
  onSelectKit, 
  onSelectCategory 
}) => {
  const [activeFilterTab, setActiveFilterTab] = useState<'all' | 'popular' | 'creative' | 'active' | 'home'>('all');

  const filteredKits = STARTER_KITS_DATA.filter((kit) => {
    if (activeFilterTab === 'popular') return kit.badge === 'Bestseller' || kit.badge === 'Trending';
    if (activeFilterTab === 'creative') return ['painting', 'photography', 'content-creation', 'diy-decor'].includes(kit.category);
    if (activeFilterTab === 'active') return ['fitness', 'travel', 'college'].includes(kit.category);
    if (activeFilterTab === 'home') return ['plants', 'baking', 'journaling'].includes(kit.category);
    return true;
  });

  const testimonials = [
    {
      author: 'Sophia Chen',
      role: 'First-time Painter',
      quote: 'I spent weeks on Amazon putting brushes and easels in my cart, getting completely confused. The Painting Starter Kit arrived in 2 days and I finished my first sunset canvas that same evening.',
      kitName: 'Painting Starter Kit',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      stars: 5,
    },
    {
      author: 'David Ramirez',
      role: 'Content Creator',
      quote: 'The plug-and-play wireless mic and lighting in this box blew me away. My first TikTok video sounded like a real podcast studio. Best $79 investment I made this year.',
      kitName: 'Content Creator Kit',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      stars: 5,
    },
    {
      author: 'Emma Watson-Lee',
      role: 'Plant Parent',
      quote: 'I used to kill every houseplant within 3 weeks. The moisture meter and the simple care compass took away all the guesswork. My pothos and snake plants are thriving!',
      kitName: 'Plant Parent Kit',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
      stars: 5,
    },
  ];

  return (
    <div className="space-y-0">
      
      {/* 1. Hero Section */}
      <HeroSection 
        setActivePage={setActivePage} 
        onSelectKit={onSelectKit} 
      />

      {/* 2. "What Do You Want to Start?" Discovery Section */}
      <CategoryGrid 
        onSelectCategory={onSelectCategory} 
        setActivePage={setActivePage} 
      />

      {/* 3. Starter Kit Collection / Product Grid Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-amber-800 bg-amber-100/90 px-3.5 py-1 rounded-full mb-3">
              <Package className="w-3.5 h-3.5" />
              <span>Curated Starter Boxes</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1E1B18] tracking-tight">
              Featured Starter Kits
            </h2>
            <p className="text-stone-700 text-sm sm:text-base mt-2 max-w-xl">
              All-in-one boxes with tested essentials, beginner guides, and guaranteed starting momentum.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
            {[
              { id: 'all', label: 'All Kits' },
              { id: 'popular', label: '⭐ Bestsellers' },
              { id: 'creative', label: '🎨 Creative' },
              { id: 'active', label: '⚡ Active & Lifestyle' },
              { id: 'home', label: '🌱 Cozy & Home' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilterTab(tab.id as any)}
                className={`px-3.5 py-2 rounded-full text-xs font-bold transition-all ${
                  activeFilterTab === tab.id
                    ? 'bg-[#1E1B18] text-white shadow-sm'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredKits.slice(0, 6).map((kit) => (
            <ProductCard
              key={kit.id}
              kit={kit}
              onSelectKit={onSelectKit}
              featured={kit.badge === 'Bestseller'}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <button
            id="home-view-all-kits-btn"
            onClick={() => {
              setActivePage('explore');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 bg-[#1E1B18] hover:bg-stone-800 text-white font-bold text-sm sm:text-base px-8 py-4 rounded-2xl shadow-sm hover:shadow-lg transition-all active:scale-95"
          >
            <span>Explore All 10 Starter Kits</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>
        </div>
      </section>

      {/* 4. "How It Works" 4-Step Process Section */}
      <HowItWorks setActivePage={setActivePage} />

      {/* 5. "Find Your Kit" Interactive Quiz Section */}
      <section className="py-20 bg-stone-100/70 border-b border-stone-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FindKitQuiz onSelectKit={onSelectKit} inline={false} />
        </div>
      </section>

      {/* 6. "Gift an Experience" Section */}
      <GiftExperience onSelectKit={onSelectKit} />

      {/* 7. Brand Story / Problem Solver Feature Block */}
      <section className="py-20 bg-white border-b border-stone-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1E1B18] rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden">
            
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-3xl space-y-6 relative z-10">
              <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3.5 py-1 rounded-full inline-block">
                The Starter Philosophy
              </span>

              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                You’re not just buying tools. <br />
                <span className="text-amber-400">You’re buying a starting point.</span>
              </h2>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                People constantly want to try photography, painting, baking, fitness, journaling or something completely new — but the first step feels exhausting.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800">
                  <span className="text-stone-500 text-xs line-through block">Paints + brushes + canvas</span>
                  <span className="font-bold text-amber-300 text-sm mt-1 block">“My first step into painting.”</span>
                </div>
                <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800">
                  <span className="text-stone-500 text-xs line-through block">Tripod + mic + ring light</span>
                  <span className="font-bold text-amber-300 text-sm mt-1 block">“My first published video.”</span>
                </div>
                <div className="p-4 rounded-2xl bg-stone-900 border border-stone-800">
                  <span className="text-stone-500 text-xs line-through block">Measuring cups + mold</span>
                  <span className="font-bold text-amber-300 text-sm mt-1 block">“My first golden focaccia.”</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => {
                    setActivePage('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-amber-400 hover:bg-amber-500 text-stone-950 font-bold text-sm px-6 py-3.5 rounded-xl transition-all flex items-center gap-2"
                >
                  <span>Read Our Brand Mission</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 8. Starter Testimonials */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-800 bg-amber-100/90 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-3">
              <Star className="w-3.5 h-3.5 fill-amber-700 text-amber-700" />
              <span>Real Beginner Experiences</span>
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#1E1B18] tracking-tight">
              From “I want to try this” to “I made this.”
            </h2>
            <p className="text-stone-700 text-sm sm:text-base mt-2">
              Over 25,000+ people took their first step with a START. box this year.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((t, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-stone-700 text-xs sm:text-sm leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.author}
                      className="w-10 h-10 rounded-full object-cover border border-stone-200"
                    />
                    <div>
                      <h4 className="font-bold text-xs text-stone-900">{t.author}</h4>
                      <span className="text-[11px] text-stone-700">{t.role}</span>
                    </div>
                  </div>

                  <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-2 py-1 rounded-md">
                    {t.kitName.split(' ')[0]} Kit
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

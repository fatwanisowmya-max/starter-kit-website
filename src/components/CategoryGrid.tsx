import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { CATEGORIES_DATA } from '../data/kitsData';
import { CategorySlug, ActivePage } from '../types';

interface CategoryGridProps {
  onSelectCategory: (category: CategorySlug) => void;
  setActivePage: (page: ActivePage) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelectCategory, setActivePage }) => {
  const handleCategoryClick = (catId: CategorySlug) => {
    onSelectCategory(catId);
    setActivePage('explore');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-16 sm:py-20 bg-stone-50/70 border-y border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-amber-800 bg-amber-100/90 px-3 py-1 rounded-full mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Explore By Interest</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1E1B18] tracking-tight">
              What Do You Want to Start?
            </h2>
            <p className="text-stone-700 text-sm sm:text-base mt-2 max-w-xl">
              Select an obsession you’ve always wanted to try. We’ve already put the essential starter kit together for you.
            </p>
          </div>

          <button
            onClick={() => {
              setActivePage('explore');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-sm font-bold text-[#1E1B18] hover:text-amber-800 flex items-center gap-1.5 self-start md:self-auto group transition-colors"
          >
            <span>View all 10 Starter Kits</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-amber-700" />
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {CATEGORIES_DATA.map((category) => (
            <div
              key={category.id}
              id={`cat-card-${category.id}`}
              onClick={() => handleCategoryClick(category.id)}
              className="group relative bg-white rounded-2xl overflow-hidden border border-stone-200/80 hover:border-stone-400 shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Image with Tag */}
              <div className="relative aspect-4/3 overflow-hidden bg-stone-100">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Emoji badge */}
                <div className="absolute top-3 left-3 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center text-lg shadow-sm">
                  {category.emoji}
                </div>
              </div>

              {/* Text info */}
              <div className="p-4 sm:p-4.5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-base text-[#1E1B18] group-hover:text-amber-800 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-stone-700 mt-1 line-clamp-2 leading-relaxed">
                    {category.tagline}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-stone-900 group-hover:text-amber-800">
                  <span>Explore Kit</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

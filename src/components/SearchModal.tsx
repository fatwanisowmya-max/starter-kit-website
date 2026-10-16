import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Sparkles, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { STARTER_KITS_DATA } from '../data/kitsData';
import { StarterKit } from '../types';

interface SearchModalProps {
  onSelectKit: (kit: StarterKit) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ onSelectKit }) => {
  const { isSearchOpen, setIsSearchOpen } = useCart();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const filteredKits = STARTER_KITS_DATA.filter((kit) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      kit.name.toLowerCase().includes(q) ||
      kit.shortDescription.toLowerCase().includes(q) ||
      kit.category.toLowerCase().includes(q) ||
      kit.inclusionsSummary.toLowerCase().includes(q) ||
      kit.components.some((c) => c.name.toLowerCase().includes(q) || c.description.toLowerCase().includes(q))
    );
  });

  const handlePick = (kit: StarterKit) => {
    onSelectKit(kit);
    setIsSearchOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickTags = ['Painting', 'Photography', 'Baking', 'Travel', 'Plants', 'Fitness', 'Journaling'];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-start justify-center pt-16 sm:pt-24 p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full border border-stone-200 shadow-2xl overflow-hidden relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Search Bar Input */}
        <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center gap-3 bg-stone-50">
          <Search className="w-5 h-5 text-stone-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search hobbies, tools, or kits (e.g. 'acrylics', 'tripod', 'plants')..."
            className="flex-1 bg-transparent text-sm sm:text-base text-stone-900 placeholder:text-stone-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-full text-stone-400 hover:text-stone-600 hover:bg-stone-200 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="text-xs font-bold text-stone-500 hover:text-stone-900 px-2 py-1 rounded-lg hover:bg-stone-200 transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Quick Tag Pills */}
        <div className="px-5 py-3 bg-stone-50/50 border-b border-stone-100 flex items-center gap-2 overflow-x-auto text-xs">
          <span className="font-bold text-stone-400 uppercase tracking-wider text-[10px] shrink-0">Popular:</span>
          {quickTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-2.5 py-1 rounded-full bg-white border border-stone-200 text-stone-700 hover:bg-amber-50 hover:border-amber-300 font-medium shrink-0 transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-5 space-y-2.5">
          {filteredKits.length === 0 ? (
            <div className="text-center py-12 text-stone-500 space-y-2">
              <Sparkles className="w-8 h-8 text-stone-300 mx-auto" />
              <p className="font-bold text-sm text-stone-700">No starter kits found for "{query}"</p>
              <p className="text-xs">Try searching for "painting", "mic", or "baking".</p>
            </div>
          ) : (
            filteredKits.map((kit) => (
              <div
                key={kit.id}
                onClick={() => handlePick(kit)}
                className="group flex items-center justify-between p-3 rounded-2xl hover:bg-stone-50 border border-transparent hover:border-stone-200 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 rounded-xl overflow-hidden bg-stone-100 shrink-0">
                    <img src={kit.primaryImage} alt={kit.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-display font-bold text-sm text-stone-900 group-hover:text-amber-800 transition-colors">
                        {kit.name}
                      </h4>
                      {kit.badge && (
                        <span className="text-[10px] font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full">
                          {kit.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-stone-500 line-clamp-1 mt-0.5">
                      {kit.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-right">
                  <div>
                    <span className="font-display font-black text-sm text-stone-900 block">${kit.price}</span>
                    <div className="flex items-center gap-1 text-[11px] text-amber-500 justify-end">
                      <Star className="w-3 h-3 fill-amber-400" />
                      <span>{kit.rating}</span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-stone-400 group-hover:translate-x-1 group-hover:text-stone-900 transition-all" />
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};

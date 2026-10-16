import React, { useState, useMemo } from 'react';
import { 
  Search, 
  SlidersHorizontal, 
  Sparkles, 
  X, 
  RotateCcw,
  CheckCircle2
} from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { STARTER_KITS_DATA, CATEGORIES_DATA } from '../data/kitsData';
import { CategorySlug, StarterKit } from '../types';

interface ExploreViewProps {
  onSelectKit: (kit: StarterKit) => void;
  selectedCategoryFilter: CategorySlug | 'all';
  setSelectedCategoryFilter: (category: CategorySlug | 'all') => void;
}

export const ExploreView: React.FC<ExploreViewProps> = ({
  onSelectKit,
  selectedCategoryFilter,
  setSelectedCategoryFilter,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');
  const [priceMax, setPriceMax] = useState<number>(100);

  const filteredKits = useMemo(() => {
    return STARTER_KITS_DATA.filter((kit) => {
      // Category filter
      if (selectedCategoryFilter !== 'all' && kit.category !== selectedCategoryFilter) {
        return false;
      }
      // Difficulty filter
      if (difficultyFilter !== 'all' && kit.difficulty !== difficultyFilter) {
        return false;
      }
      // Price filter
      if (kit.price > priceMax) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = kit.name.toLowerCase().includes(q);
        const matchesDesc = kit.shortDescription.toLowerCase().includes(q);
        const matchesInclusions = kit.inclusionsSummary.toLowerCase().includes(q);
        const matchesComponents = kit.components.some(c => c.name.toLowerCase().includes(q));
        if (!matchesName && !matchesDesc && !matchesInclusions && !matchesComponents) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      // Default 'featured'
      return (b.badge ? 1 : 0) - (a.badge ? 1 : 0);
    });
  }, [selectedCategoryFilter, difficultyFilter, priceMax, searchQuery, sortBy]);

  const resetFilters = () => {
    setSelectedCategoryFilter('all');
    setDifficultyFilter('all');
    setPriceMax(100);
    setSearchQuery('');
    setSortBy('featured');
  };

  const hasActiveFilters = 
    selectedCategoryFilter !== 'all' || 
    difficultyFilter !== 'all' || 
    priceMax < 100 || 
    searchQuery.length > 0;

  return (
    <div className="py-10 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="mb-10 text-left">
        <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-amber-800 bg-amber-100/90 px-3.5 py-1 rounded-full mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Curated Starter Kits Catalogue</span>
        </div>
        <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-[#1E1B18] tracking-tight">
          Explore All Starter Kits
        </h1>
        <p className="text-stone-700 text-sm sm:text-base mt-2 max-w-2xl">
          Every box contains the essential high-grade tools, clear illustrated guide, and inspiration to begin right now.
        </p>
      </div>

      {/* Category Filter Pills Scrollable Row */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
        <button
          onClick={() => setSelectedCategoryFilter('all')}
          className={`px-4 py-2 rounded-full text-xs font-bold shrink-0 transition-all ${
            selectedCategoryFilter === 'all'
              ? 'bg-[#1E1B18] text-white shadow-sm'
              : 'bg-white hover:bg-stone-200/80 text-stone-700 border border-stone-200'
          }`}
        >
          All Starter Kits ({STARTER_KITS_DATA.length})
        </button>

        {CATEGORIES_DATA.map((cat) => {
          const isSelected = selectedCategoryFilter === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategoryFilter(cat.id)}
              className={`px-3.5 py-2 rounded-full text-xs font-bold shrink-0 transition-all flex items-center gap-1.5 ${
                isSelected
                  ? 'bg-[#1E1B18] text-white shadow-sm'
                  : 'bg-white hover:bg-stone-200/80 text-stone-700 border border-stone-200'
              }`}
            >
              <span>{cat.emoji}</span>
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* Secondary Controls Bar */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200 shadow-xs mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search within kits, items, or tools..."
            className="w-full bg-stone-50 border border-stone-200 rounded-xl pl-9 pr-8 py-2 text-xs text-stone-900 focus:outline-none focus:border-stone-900 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-2.5 text-stone-400 hover:text-stone-700"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Filters Group */}
        <div className="flex flex-wrap items-center gap-3">
          
          {/* Difficulty Dropdown */}
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-stone-700 font-semibold hidden sm:inline">Level:</span>
            <select
              value={difficultyFilter}
              onChange={(e) => setDifficultyFilter(e.target.value)}
              className="bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-xs text-stone-800 font-medium focus:outline-none"
            >
              <option value="all">All Levels</option>
              <option value="Zero Experience Needed">Zero Experience Needed</option>
              <option value="Beginner">Beginner</option>
            </select>
          </div>

          {/* Sort By */}
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-stone-700 font-semibold hidden sm:inline">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-xs text-stone-800 font-medium focus:outline-none"
            >
              <option value="featured">Featured / Bestsellers</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          {/* Reset Filters */}
          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="text-xs font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1 px-2.5 py-1.5 rounded-lg hover:bg-rose-50 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          )}

        </div>

      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between mb-6 text-xs text-stone-700 font-semibold">
        <span>Showing {filteredKits.length} curated starter {filteredKits.length === 1 ? 'kit' : 'kits'}</span>
        <span className="text-emerald-700 font-bold flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5" />
          All kits in stock & ready to ship
        </span>
      </div>

      {/* Product Grid */}
      {filteredKits.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-stone-200 p-8 space-y-4">
          <Sparkles className="w-12 h-12 text-stone-300 mx-auto" />
          <h3 className="font-display font-bold text-xl text-stone-800">
            No starter kits matched your criteria
          </h3>
          <p className="text-xs text-stone-700 max-w-sm mx-auto">
            Try adjusting your search terms, resetting category filters, or exploring all beginner kits.
          </p>
          <button
            onClick={resetFilters}
            className="bg-[#1E1B18] text-white font-bold text-xs px-5 py-2.5 rounded-xl hover:bg-stone-800 transition-colors inline-flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset All Filters</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredKits.map((kit) => (
            <ProductCard
              key={kit.id}
              kit={kit}
              onSelectKit={onSelectKit}
              featured={kit.badge === 'Bestseller'}
            />
          ))}
        </div>
      )}

    </div>
  );
};

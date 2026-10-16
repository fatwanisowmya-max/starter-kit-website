import React from 'react';
import { Star, ShoppingBag, Eye, Heart, Check, Sparkles, ArrowRight } from 'lucide-react';
import { StarterKit } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  kit: StarterKit;
  onSelectKit: (kit: StarterKit) => void;
  featured?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ kit, onSelectKit, featured = false }) => {
  const { addToCart, isInWishlist, toggleWishlist, openQuickView } = useCart();
  const isWishlisted = isInWishlist(kit.id);

  const handleCardClick = () => {
    onSelectKit(kit);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      id={`kit-card-${kit.slug}`}
      className={`group relative bg-white rounded-3xl border border-stone-200/80 hover:border-stone-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden ${
        featured ? 'ring-2 ring-amber-400/50' : ''
      }`}
    >
      {/* Image Container with Actions */}
      <div className="relative aspect-4/3 sm:aspect-16/11 bg-stone-100 overflow-hidden cursor-pointer" onClick={handleCardClick}>
        <img
          src={kit.primaryImage}
          alt={kit.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Subtle Dark Gradient Overlay on Bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 flex flex-wrap items-center gap-2">
          {kit.badge && (
            <span className="bg-[#1E1B18]/90 backdrop-blur-md text-amber-300 text-xs font-extrabold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-400" />
              {kit.badge}
            </span>
          )}
          <span className="bg-white/90 backdrop-blur-md text-stone-800 text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-xs">
            {kit.timeToStart.split('to')[0].trim()}
          </span>
        </div>

        {/* Wishlist Button */}
        <button
          id={`wishlist-btn-${kit.id}`}
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(kit.id);
          }}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
          className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md text-stone-700 hover:text-rose-500 flex items-center justify-center shadow-sm hover:scale-110 active:scale-95 transition-all"
        >
          <Heart className={`w-4.5 h-4.5 ${isWishlisted ? 'text-rose-500 fill-rose-500' : ''}`} />
        </button>

        {/* Quick View Floating Pill Button on Hover */}
        <div className="absolute bottom-3 inset-x-3 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            id={`quickview-btn-${kit.id}`}
            onClick={(e) => {
              e.stopPropagation();
              openQuickView(kit);
            }}
            className="bg-white/95 backdrop-blur-md text-stone-900 text-xs font-bold px-4 py-2 rounded-full shadow-lg hover:bg-white flex items-center gap-1.5 transform hover:scale-105 active:scale-95 transition-all"
          >
            <Eye className="w-3.5 h-3.5 text-stone-600" />
            <span>Peek Inside Kit</span>
          </button>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Rating and Reviews */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <div className="flex items-center text-amber-400">
                <Star className="w-4 h-4 fill-amber-400" />
              </div>
              <span className="text-xs font-bold text-stone-800">{kit.rating}</span>
              <span className="text-xs text-stone-600">({kit.reviewCount})</span>
            </div>
            <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
              {kit.difficulty}
            </span>
          </div>

          {/* Kit Name */}
          <h3 
            onClick={handleCardClick}
            className="font-display font-bold text-lg sm:text-xl text-[#1E1B18] group-hover:text-amber-800 transition-colors cursor-pointer leading-snug"
          >
            {kit.name}
          </h3>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-stone-700 mt-1.5 line-clamp-2 leading-relaxed">
            {kit.shortDescription}
          </p>

          {/* "What's Inside" Preview Tagline */}
          <div className="mt-3.5 pt-3 border-t border-stone-100">
            <div className="text-[11px] uppercase tracking-wider font-bold text-stone-700 mb-1 flex items-center gap-1">
              <span>What's Inside:</span>
            </div>
            <p className="text-xs text-stone-700 font-medium line-clamp-1 bg-stone-50 px-2.5 py-1.5 rounded-lg border border-stone-100">
              {kit.inclusionsSummary}
            </p>
          </div>
        </div>

        {/* Price & Action Row */}
        <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between gap-2">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-display font-extrabold text-xl sm:text-2xl text-[#1E1B18]">
                ${kit.price}
              </span>
              {kit.originalPrice && (
                <span className="text-xs font-medium text-stone-600 line-through">
                  ${kit.originalPrice}
                </span>
              )}
            </div>
            <span className="text-[10px] text-stone-700 font-medium">Free 3-day delivery</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              id={`quick-add-btn-${kit.id}`}
              onClick={(e) => {
                e.stopPropagation();
                addToCart(kit, 1);
              }}
              title="Add to cart"
              className="p-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 transition-colors flex items-center justify-center"
            >
              <ShoppingBag className="w-4 h-4" />
            </button>

            <button
              id={`view-kit-btn-${kit.slug}`}
              onClick={handleCardClick}
              className="bg-[#1E1B18] hover:bg-stone-800 text-white text-xs sm:text-sm font-bold px-3.5 py-2.5 rounded-xl transition-all flex items-center gap-1 shadow-sm hover:shadow active:scale-95"
            >
              <span>View Kit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

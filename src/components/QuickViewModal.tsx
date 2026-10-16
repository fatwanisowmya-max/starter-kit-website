import React, { useState } from 'react';
import { X, Star, ShoppingBag, ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { StarterKit } from '../types';

interface QuickViewModalProps {
  onSelectKit: (kit: StarterKit) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ onSelectKit }) => {
  const { quickViewKit, closeQuickView, addToCart, isInWishlist, toggleWishlist } = useCart();
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);

  if (!quickViewKit) return null;

  const isWishlisted = isInWishlist(quickViewKit.id);
  const images = quickViewKit.galleryImages || [quickViewKit.primaryImage];

  const handleFullView = () => {
    onSelectKit(quickViewKit);
    closeQuickView();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div className="bg-white rounded-3xl max-w-4xl w-full border border-stone-200 shadow-2xl overflow-hidden relative animate-in fade-in zoom-in-95 duration-200 flex flex-col md:flex-row">
        
        {/* Close button */}
        <button
          onClick={closeQuickView}
          className="absolute top-4 right-4 p-2 rounded-full bg-stone-100/90 text-stone-600 hover:bg-stone-200 z-10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Gallery */}
        <div className="md:w-1/2 p-6 bg-stone-50 flex flex-col justify-between">
          <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-white shadow-xs">
            <img
              src={images[selectedImgIndex] || quickViewKit.primaryImage}
              alt={quickViewKit.name}
              className="w-full h-full object-cover"
            />
            {quickViewKit.badge && (
              <span className="absolute top-3 left-3 bg-[#1E1B18]/90 text-amber-300 text-xs font-black px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                <Sparkles className="w-3 h-3 text-amber-400" />
                {quickViewKit.badge}
              </span>
            )}
          </div>

          {/* Thumbnail Strip */}
          {images.length > 1 && (
            <div className="flex gap-2 mt-4 overflow-x-auto pb-1">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImgIndex(idx)}
                  className={`w-16 h-16 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                    selectedImgIndex === idx ? 'border-[#1E1B18] scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Info & Inclusions */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-5">
          
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-1.5 text-xs text-amber-500">
                <Star className="w-4 h-4 fill-amber-400" />
                <span className="font-bold text-stone-800">{quickViewKit.rating}</span>
                <span className="text-stone-500">({quickViewKit.reviewCount} reviews)</span>
              </div>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                {quickViewKit.difficulty}
              </span>
            </div>

            <h3 className="font-display font-extrabold text-2xl text-[#1E1B18]">
              {quickViewKit.name}
            </h3>

            <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
              {quickViewKit.shortDescription}
            </p>

            {/* Inclusions list */}
            <div className="mt-4 pt-4 border-t border-stone-100">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-500 block mb-2">
                What's Inside The Box ({quickViewKit.components.length} Items):
              </span>
              <div className="space-y-1.5 max-h-40 overflow-y-auto pr-1">
                {quickViewKit.components.map((comp) => (
                  <div key={comp.id} className="flex items-start gap-2 text-xs text-stone-700 bg-stone-50 p-2 rounded-lg">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-stone-900">{comp.name}</strong> — {comp.subtitle}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-stone-200 flex flex-col gap-3">
            <div className="flex items-baseline justify-between">
              <div className="flex items-baseline gap-2">
                <span className="font-display font-black text-2xl text-[#1E1B18]">
                  ${quickViewKit.price}
                </span>
                {quickViewKit.originalPrice && (
                  <span className="text-xs text-stone-400 line-through">
                    ${quickViewKit.originalPrice}
                  </span>
                )}
              </div>
              <span className="text-xs text-stone-500 font-medium">Free 3-Day Delivery</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => toggleWishlist(quickViewKit.id)}
                className="p-3 rounded-xl border border-stone-300 hover:bg-stone-100 text-stone-700 transition-colors"
                title={isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
              >
                <Heart className={`w-4 h-4 ${isWishlisted ? 'text-rose-500 fill-rose-500' : ''}`} />
              </button>

              <button
                onClick={() => {
                  addToCart(quickViewKit, 1);
                  closeQuickView();
                }}
                className="flex-1 bg-amber-400 hover:bg-amber-500 text-stone-950 font-bold text-xs sm:text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Starter Box</span>
              </button>

              <button
                onClick={handleFullView}
                className="bg-[#1E1B18] hover:bg-stone-800 text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl transition-all flex items-center gap-1"
              >
                <span>Full Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

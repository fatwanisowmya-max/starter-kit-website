import React, { useState } from 'react';
import { Gift, Heart, Sparkles, ArrowRight, Check, Package, MessageSquare } from 'lucide-react';
import { GIFT_PERSONAS_DATA, STARTER_KITS_DATA } from '../data/kitsData';
import { StarterKit } from '../types';
import { useCart } from '../context/CartContext';

interface GiftExperienceProps {
  onSelectKit: (kit: StarterKit) => void;
}

export const GiftExperience: React.FC<GiftExperienceProps> = ({ onSelectKit }) => {
  const { addToCart } = useCart();
  const [selectedPersonaId, setSelectedPersonaId] = useState<string>('creative');
  const [giftNote, setGiftNote] = useState<string>('Here is everything you need to start something exciting. Can’t wait to see what you create!');

  const activePersona = GIFT_PERSONAS_DATA.find((p) => p.id === selectedPersonaId) || GIFT_PERSONAS_DATA[0];
  const recommendedKit = STARTER_KITS_DATA.find((k) => k.category === activePersona.recommendedCategory) || STARTER_KITS_DATA[0];

  const handleGiftAddToCart = () => {
    addToCart(recommendedKit, 1, true, giftNote);
  };

  return (
    <section className="py-18 bg-[#FAF8F5] border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-rose-800 bg-rose-100/90 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-3">
            <Gift className="w-3.5 h-3.5 text-rose-700" />
            <span>Experience-Based Gifting</span>
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#1E1B18] tracking-tight">
            Give Them Something to Start.
          </h2>
          <p className="text-stone-700 text-sm sm:text-base mt-3 leading-relaxed">
            Instead of giving generic items, give them a hobby. Give them an experience. Give them a reason to try something new with everything in one beautiful box.
          </p>
        </div>

        {/* Persona Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 max-w-4xl mx-auto">
          {GIFT_PERSONAS_DATA.map((persona) => {
            const isSelected = selectedPersonaId === persona.id;
            return (
              <button
                key={persona.id}
                id={`gift-tab-${persona.id}`}
                onClick={() => setSelectedPersonaId(persona.id)}
                className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#1E1B18] text-white shadow-md scale-105'
                    : 'bg-white hover:bg-stone-200/80 text-stone-700 border border-stone-200'
                }`}
              >
                <span>{persona.emoji}</span>
                <span>{persona.title}</span>
              </button>
            );
          })}
        </div>

        {/* Highlighted Gift Card Layout */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-xl max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Persona Image & Recommended Kit */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-stone-100 shadow-inner">
                <img
                  src={recommendedKit.primaryImage}
                  alt={recommendedKit.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-rose-500 text-white font-extrabold text-xs px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      Perfect Gift Match
                    </span>
                  </div>
                  <h3 className="font-display font-extrabold text-2xl text-white">
                    {recommendedKit.name}
                  </h3>
                  <p className="text-xs text-stone-200 mt-1 line-clamp-1">
                    {recommendedKit.shortDescription}
                  </p>
                </div>
              </div>

              {/* Persona Quote */}
              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200/60 text-xs text-amber-900 font-medium italic flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{activePersona.sampleQuote}</span>
              </div>
            </div>

            {/* Right: Gifting Details & Note Customizer */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-5">
              
              <div>
                <div className="text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                  Why it's a great gift
                </div>
                <h4 className="font-display font-bold text-xl sm:text-2xl text-[#1E1B18]">
                  {activePersona.title}
                </h4>
                <p className="text-stone-700 text-xs sm:text-sm mt-1.5 leading-relaxed">
                  {activePersona.description}
                </p>

                {/* Inside Box Preview */}
                <div className="mt-4 p-3 rounded-xl bg-stone-50 border border-stone-200/70 text-xs text-stone-700">
                  <div className="font-bold text-stone-900 uppercase tracking-wider text-[11px] mb-1">
                    🎁 Everything included in their gift box:
                  </div>
                  <p className="leading-relaxed">
                    {recommendedKit.inclusionsSummary}
                  </p>
                </div>
              </div>

              {/* Gift Note Input */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <MessageSquare className="w-3.5 h-3.5 text-stone-600" />
                    Complimentary Handwritten Gift Card Note
                  </span>
                  <span className="text-[10px] text-emerald-600 font-extrabold">Included Free</span>
                </label>
                <textarea
                  id="gift-note-textarea"
                  value={giftNote}
                  onChange={(e) => setGiftNote(e.target.value)}
                  rows={2}
                  maxLength={180}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl p-3 text-xs text-stone-800 focus:outline-none focus:border-stone-900 transition-colors resize-none"
                  placeholder="Write a warm note for the recipient..."
                />
              </div>

              {/* Price & Add Gift to Cart */}
              <div className="pt-3 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display font-black text-2xl text-[#1E1B18]">
                      ${recommendedKit.price}
                    </span>
                    {recommendedKit.originalPrice && (
                      <span className="text-xs text-stone-600 line-through">
                        ${recommendedKit.originalPrice}
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] text-stone-700 font-medium">Free premium gift box packaging</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    id="gift-view-details-btn"
                    onClick={() => onSelectKit(recommendedKit)}
                    className="px-3.5 py-2.5 rounded-xl border border-stone-300 hover:bg-stone-100 text-stone-800 text-xs font-bold transition-colors"
                  >
                    View Details
                  </button>
                  
                  <button
                    id="gift-add-to-cart-btn"
                    onClick={handleGiftAddToCart}
                    className="bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-1.5 active:scale-95"
                  >
                    <Gift className="w-4 h-4" />
                    <span>Send as Gift</span>
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

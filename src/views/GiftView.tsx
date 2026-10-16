import React from 'react';
import { GiftExperience } from '../components/GiftExperience';
import { StarterKit, ActivePage } from '../types';
import { Gift, Heart, Sparkles, Package, ArrowLeft } from 'lucide-react';
import { STARTER_KITS_DATA } from '../data/kitsData';
import { ProductCard } from '../components/ProductCard';

interface GiftViewProps {
  onSelectKit: (kit: StarterKit) => void;
  setActivePage: (page: ActivePage) => void;
}

export const GiftView: React.FC<GiftViewProps> = ({ onSelectKit, setActivePage }) => {
  return (
    <div className="space-y-12 py-8 sm:py-12">
      
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => {
            setActivePage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-500 hover:text-stone-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Main Persona Gifting Experience */}
      <GiftExperience onSelectKit={onSelectKit} />

      {/* Gifting Guarantee Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-sm">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-rose-800 bg-rose-100/90 px-3.5 py-1 rounded-full">
              The START. Gifting Promise
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-[#1E1B18] mt-2">
              Why Starter Kits make unforgettable gifts
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mx-auto mb-3">
                <Gift className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-base text-stone-900">Complimentary Gift Wrap</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Handcrafted premium presentation box sealed with ribbon and embossed seal.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto mb-3">
                <Heart className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-base text-stone-900">Custom Handwritten Card</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                We transcribe your personal note onto heavy letterpress cardstock.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                <Package className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-base text-stone-900">Zero Price Tag Included</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Receipts and prices are sent digitally to you only. Your recipient gets only joy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Most Gifted Kits Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="font-display font-extrabold text-2xl text-[#1E1B18]">
              Most Gifted Starter Kits
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              Ranked by community gifting favorites this season.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {STARTER_KITS_DATA.slice(0, 3).map((kit) => (
            <ProductCard
              key={kit.id}
              kit={kit}
              onSelectKit={onSelectKit}
              featured={true}
            />
          ))}
        </div>
      </section>

    </div>
  );
};

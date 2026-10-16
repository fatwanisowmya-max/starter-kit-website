import React from 'react';
import { Sparkles, Heart, Package, CheckCircle2, ArrowRight, ShieldCheck, Smile } from 'lucide-react';
import { ActivePage } from '../types';

interface AboutViewProps {
  setActivePage: (page: ActivePage) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ setActivePage }) => {
  return (
    <div className="py-12 sm:py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Brand Hero */}
      <div className="text-center space-y-4">
        <span className="text-xs font-extrabold uppercase tracking-widest text-amber-800 bg-amber-100/90 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Our Brand Manifesto</span>
        </span>
        <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-[#1E1B18] tracking-tight leading-tight">
          Everything you need to start, <br />
          <span className="text-amber-700">in one thoughtful box.</span>
        </h1>
        <p className="text-stone-700 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          We built START. to solve the friction, confusion, and hesitation that stops people from trying something new.
        </p>
      </div>

      {/* The Problem & Solution Story */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-sm space-y-8">
        <div>
          <h2 className="font-display font-extrabold text-2xl text-[#1E1B18] mb-3">
            Why does starting a new hobby feel so exhausting?
          </h2>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            Think about the last time you wanted to try watercolor painting, learn espresso brewing, get into indoor houseplants, or record a video podcast. 
          </p>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed mt-3">
            You opened Google or Reddit, spent 4 hours reading conflicting reviews on 20 different gear guides, loaded 14 random items into an online shopping cart, got overwhelmed by choice fatigue, and never started.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-stone-200 space-y-3">
          <h3 className="font-display font-bold text-lg text-amber-900">
            Our Promise: The Curated Starting Point
          </h3>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
            We test dozens of beginner tools with real first-timers, remove the useless filler, keep the genuine essentials, and pair them with an illustrated, zero-jargon handbook. When your START. box arrives, you are 5 minutes away from finishing your very first project.
          </p>
        </div>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-7 rounded-3xl border border-stone-200 shadow-2xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
            01
          </div>
          <h3 className="font-display font-bold text-xl text-[#1E1B18]">
            Curated With Ruthless Care
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            We don’t sell 5,000 SKUs. We curate 10 iconic Starter Kits where every single brush, cable, and guide is intentionally chosen.
          </p>
        </div>

        <div className="bg-white p-7 rounded-3xl border border-stone-200 shadow-2xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
            02
          </div>
          <h3 className="font-display font-bold text-xl text-[#1E1B18]">
            Zero Prior Experience Needed
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            We design for day one. No intimidating technical vocabulary. Just clear, rewarding visual steps that build your confidence immediately.
          </p>
        </div>

        <div className="bg-white p-7 rounded-3xl border border-stone-200 shadow-2xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
            03
          </div>
          <h3 className="font-display font-bold text-xl text-[#1E1B18]">
            Sustainable & High Quality
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            Boxes are made from 100% post-consumer recycled cardboard with soy ink printing, and the tools inside are durable enough to grow with you.
          </p>
        </div>

        <div className="bg-white p-7 rounded-3xl border border-stone-200 shadow-2xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
            04
          </div>
          <h3 className="font-display font-bold text-xl text-[#1E1B18]">
            30-Day Starter Joy Guarantee
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            If you unbox your kit and don't feel genuine excitement to start, send it back for a full 100% refund, no questions asked.
          </p>
        </div>
      </div>

      {/* Call to action */}
      <div className="text-center bg-[#1E1B18] text-white rounded-3xl p-10 sm:p-14 space-y-6">
        <h2 className="font-display font-black text-3xl sm:text-4xl">
          Ready to try something new today?
        </h2>
        <p className="text-stone-300 text-sm max-w-md mx-auto">
          Pick an obsession, open the box, and take your first step.
        </p>
        <button
          onClick={() => {
            setActivePage('explore');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="bg-amber-400 hover:bg-amber-500 text-stone-950 font-bold text-sm px-8 py-3.5 rounded-xl inline-flex items-center gap-2 shadow-md transition-all active:scale-95"
        >
          <span>Explore All 10 Starter Kits</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};

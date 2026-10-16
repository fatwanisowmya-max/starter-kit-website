import React, { useState } from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  BookOpen, 
  Heart, 
  ArrowRight, 
  CheckCircle2, 
  Package, 
  Smile,
  Instagram,
  Twitter,
  Youtube
} from 'lucide-react';
import { ActivePage } from '../types';
import { CATEGORIES_DATA } from '../data/kitsData';

interface FooterProps {
  setActivePage: (page: ActivePage) => void;
  onSelectCategory?: (category: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage, onSelectCategory }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#181614] text-[#FAF8F5] pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Promise / 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-16 border-b border-stone-800">
          <div className="flex items-start gap-4 p-4 rounded-2xl bg-stone-900/60 border border-stone-800/60">
            <div className="p-2.5 rounded-xl bg-amber-400/10 text-amber-400 shrink-0">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base text-stone-100">Curated Essentials</h4>
              <p className="text-stone-400 text-xs mt-1 leading-relaxed">
                Only the tools you actually need to start. Zero junk, zero expensive confusion.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-2xl bg-stone-900/60 border border-stone-800/60">
            <div className="p-2.5 rounded-xl bg-emerald-400/10 text-emerald-400 shrink-0">
              <Smile className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base text-stone-100">Zero Experience Required</h4>
              <p className="text-stone-400 text-xs mt-1 leading-relaxed">
                Designed specifically for complete beginners with gentle, friendly pacing.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-2xl bg-stone-900/60 border border-stone-800/60">
            <div className="p-2.5 rounded-xl bg-sky-400/10 text-sky-400 shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base text-stone-100">Illustrated Guidebook</h4>
              <p className="text-stone-400 text-xs mt-1 leading-relaxed">
                Every box includes a clear, visual roadmap to finish your very first project.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-2xl bg-stone-900/60 border border-stone-800/60">
            <div className="p-2.5 rounded-xl bg-rose-400/10 text-rose-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base text-stone-100">30-Day Joy Guarantee</h4>
              <p className="text-stone-400 text-xs mt-1 leading-relaxed">
                Love your first steps into your new hobby, or we will refund your starter kit.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Links & Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-14 border-b border-stone-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-amber-400 text-stone-950 flex items-center justify-center font-extrabold text-lg">
                S<span className="text-stone-950 font-black">.</span>
              </div>
              <span className="font-display font-black text-2xl tracking-tight text-white">
                START<span className="text-amber-400">.</span>
              </span>
            </div>
            
            <p className="text-stone-300 text-sm leading-relaxed max-w-sm">
              <span className="font-semibold text-stone-100">“Everything you need to start, in one box.”</span>
              <br />
              We eliminate research paralysis and assemble the tools, guidance, and inspiration so you can take that exciting first step.
            </p>

            <div className="flex items-center gap-3 pt-2 text-stone-400">
              <a href="#instagram" aria-label="Instagram" className="p-2 rounded-full bg-stone-900 hover:text-white hover:bg-stone-800 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#twitter" aria-label="Twitter" className="p-2 rounded-full bg-stone-900 hover:text-white hover:bg-stone-800 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#youtube" aria-label="YouTube" className="p-2 rounded-full bg-stone-900 hover:text-white hover:bg-stone-800 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Explore Hobbies */}
          <div>
            <h5 className="font-display font-bold text-xs uppercase tracking-widest text-stone-400 mb-4">
              Explore Passions
            </h5>
            <ul className="space-y-2.5 text-sm text-stone-400">
              {CATEGORIES_DATA.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => {
                      if (onSelectCategory) onSelectCategory(cat.id);
                      setActivePage('explore');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
                  >
                    <span>{cat.emoji}</span>
                    <span>{cat.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div>
            <h5 className="font-display font-bold text-xs uppercase tracking-widest text-stone-400 mb-4">
              Discovery
            </h5>
            <ul className="space-y-2.5 text-sm text-stone-400">
              <li>
                <button onClick={() => { setActivePage('explore'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition-colors">
                  All Starter Kits
                </button>
              </li>
              <li>
                <button onClick={() => { setActivePage('quiz'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-amber-400 transition-colors flex items-center gap-1 font-semibold text-amber-300">
                  <Sparkles className="w-3.5 h-3.5" />
                  Find Your Kit Quiz
                </button>
              </li>
              <li>
                <button onClick={() => { setActivePage('how-it-works'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition-colors">
                  How It Works (01–04)
                </button>
              </li>
              <li>
                <button onClick={() => { setActivePage('gift'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition-colors">
                  Gift an Experience
                </button>
              </li>
              <li>
                <button onClick={() => { setActivePage('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-white transition-colors">
                  Our Mission & Story
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h5 className="font-display font-bold text-xs uppercase tracking-widest text-stone-400 mb-4">
              The Starter Club
            </h5>
            <p className="text-xs text-stone-400 mb-3 leading-relaxed">
              Get weekly inspiration on new hobbies, DIY weekend ideas, and 10% off your first box.
            </p>

            {subscribed ? (
              <div className="p-3 bg-emerald-950/60 border border-emerald-800/80 rounded-xl text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>You're in! Check your inbox for your 10% welcome coupon.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    id="footer-newsletter-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full bg-stone-900 border border-stone-700 rounded-xl py-2.5 px-3.5 text-sm text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                  <button
                    type="submit"
                    id="footer-newsletter-submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-amber-400 hover:bg-amber-500 text-stone-950 rounded-lg text-xs font-bold transition-colors flex items-center gap-1"
                  >
                    <span>Join</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
                <span className="text-[11px] text-stone-400 block">
                  Zero spam. Unsubscribe anytime.
                </span>
              </form>
            )}
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <p>© {new Date().getFullYear()} START. Curated Kits Inc. All rights reserved. Designed to help you start something new.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-stone-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-stone-300 cursor-pointer">Terms of Service</span>
            <span className="hover:text-stone-300 cursor-pointer">Shipping & Returns</span>
            <span className="hover:text-stone-300 cursor-pointer">FAQ</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

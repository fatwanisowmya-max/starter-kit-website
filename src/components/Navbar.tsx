import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Search, 
  Heart, 
  Sparkles, 
  Menu, 
  X, 
  Compass, 
  Gift, 
  HelpCircle,
  BookOpen
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ActivePage } from '../types';

interface NavbarProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  onSelectCategory?: (category: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage }) => {
  const { cartCount, wishlist, setIsCartOpen, setIsSearchOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; page: ActivePage; icon?: React.ReactNode; badge?: string }[] = [
    { label: 'Explore Kits', page: 'explore', icon: <Compass className="w-4 h-4" /> },
    { label: 'Find Your Kit', page: 'quiz', icon: <Sparkles className="w-4 h-4 text-amber-500" />, badge: 'Quiz' },
    { label: 'How It Works', page: 'how-it-works', icon: <BookOpen className="w-4 h-4" /> },
    { label: 'Gift a Kit', page: 'gift', icon: <Gift className="w-4 h-4 text-rose-500" /> },
    { label: 'About', page: 'about', icon: <HelpCircle className="w-4 h-4" /> },
  ];

  const handleNavClick = (page: ActivePage) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Banner */}
      <div className="bg-[#1E1B18] text-[#FAF8F5] text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-3">
        <span className="inline-flex items-center gap-1.5 text-amber-300">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Everything you need to start, in one box.</span>
        </span>
        <span className="hidden sm:inline text-stone-400">|</span>
        <span className="hidden sm:inline">Use code <span className="font-bold text-amber-300 bg-stone-800 px-1.5 py-0.5 rounded text-[11px]">START10</span> for 10% off your first kit</span>
        <span className="hidden md:inline text-stone-400">|</span>
        <span className="hidden md:inline text-stone-300">Free 3-Day Shipping on orders $60+</span>
      </div>

      {/* Main Sticky Header */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-stone-200/80 py-3' 
            : 'bg-[#FAF8F5] border-b border-stone-200/50 py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <button 
            id="nav-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 group text-left focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-[#1E1B18] text-white flex items-center justify-center font-extrabold text-xl tracking-tighter shadow-sm group-hover:scale-105 transition-transform">
              S<span className="text-amber-400 text-2xl leading-none">.</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-2xl tracking-tight text-[#1E1B18] leading-none group-hover:text-amber-800 transition-colors">
                START<span className="text-amber-500">.</span>
              </span>
              <span className="text-[10px] font-semibold tracking-widest text-stone-700 uppercase -mt-0.5">
                Curated Kits
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = activePage === item.page;
              return (
                <button
                  key={item.page}
                  id={`nav-${item.page}-btn`}
                  onClick={() => handleNavClick(item.page)}
                  className={`px-3.5 py-2 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 relative ${
                    isActive 
                      ? 'bg-[#1E1B18] text-white shadow-sm' 
                      : 'text-stone-700 hover:text-[#1E1B18] hover:bg-stone-200/60'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.badge && !isActive && (
                    <span className="bg-amber-100 text-amber-900 font-bold text-[10px] px-1.5 py-0.2 rounded-full uppercase tracking-wider">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Search Trigger */}
            <button
              id="header-search-btn"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search starter kits"
              className="p-2.5 rounded-full text-stone-700 hover:text-[#1E1B18] hover:bg-stone-200/60 transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist Indicator */}
            <button
              id="header-wishlist-btn"
              onClick={() => handleNavClick('explore')}
              aria-label="Wishlist items"
              className="p-2.5 rounded-full text-stone-700 hover:text-[#1E1B18] hover:bg-stone-200/60 transition-colors relative"
            >
              <Heart className={`w-5 h-5 ${wishlist.length > 0 ? 'text-rose-500 fill-rose-500' : ''}`} />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-rose-500 text-white font-bold text-[10px] rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              id="header-cart-btn"
              onClick={() => setIsCartOpen(true)}
              aria-label="Shopping Cart"
              className="flex items-center gap-2 bg-[#1E1B18] hover:bg-stone-800 text-white px-3.5 py-2 rounded-full font-semibold text-sm transition-all shadow-sm hover:shadow active:scale-95"
            >
              <ShoppingBag className="w-4 h-4 text-amber-400" />
              <span className="hidden sm:inline">Cart</span>
              <span className="bg-amber-400 text-stone-900 font-extrabold text-xs w-5 h-5 rounded-full flex items-center justify-center -mr-1">
                {cartCount}
              </span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-700 hover:bg-stone-200/60 md:hidden transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-stone-900/40 backdrop-blur-xs flex flex-col justify-end">
          <div 
            className="bg-[#FAF8F5] rounded-t-3xl p-6 shadow-2xl border-t border-stone-200 max-h-[85vh] overflow-y-auto animate-in slide-in-from-bottom duration-300"
          >
            <div className="flex items-center justify-between pb-4 border-b border-stone-200 mb-5">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#1E1B18] text-white flex items-center justify-center font-bold text-lg">
                  S<span className="text-amber-400">.</span>
                </div>
                <span className="font-display font-extrabold text-xl text-[#1E1B18]">START.</span>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full bg-stone-200/70 text-stone-700 hover:bg-stone-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  id={`mobile-nav-${item.page}-btn`}
                  onClick={() => handleNavClick(item.page)}
                  className={`flex items-center justify-between p-3.5 rounded-2xl text-base font-semibold transition-colors ${
                    activePage === item.page 
                      ? 'bg-[#1E1B18] text-white' 
                      : 'bg-stone-100/70 text-stone-800 hover:bg-stone-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="bg-amber-400 text-stone-950 text-xs font-bold px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-stone-200 flex flex-col gap-3">
              <button
                id="mobile-quiz-cta-btn"
                onClick={() => handleNavClick('quiz')}
                className="w-full bg-amber-400 hover:bg-amber-500 text-stone-950 font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm"
              >
                <Sparkles className="w-5 h-5" />
                <span>Take "Find Your Kit" Quiz</span>
              </button>
              <button
                id="mobile-cart-cta-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsCartOpen(true);
                }}
                className="w-full bg-stone-200 hover:bg-stone-300 text-stone-800 font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>View Cart ({cartCount} items)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

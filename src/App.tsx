import React, { useState, useEffect } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuickViewModal } from './components/QuickViewModal';
import { SearchModal } from './components/SearchModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { Toast } from './components/Toast';

import { HomeView } from './views/HomeView';
import { ExploreView } from './views/ExploreView';
import { ProductDetailView } from './views/ProductDetailView';
import { QuizView } from './views/QuizView';
import { GiftView } from './views/GiftView';
import { AboutView } from './views/AboutView';

import { STARTER_KITS_DATA } from './data/kitsData';
import { ActivePage, CategorySlug, StarterKit } from './types';

const MainAppContent: React.FC = () => {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [selectedKit, setSelectedKit] = useState<StarterKit>(STARTER_KITS_DATA[0]);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<CategorySlug | 'all'>('all');

  const handleSelectKit = (kit: StarterKit) => {
    setSelectedKit(kit);
    setActivePage('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (category: CategorySlug) => {
    setSelectedCategoryFilter(category);
    setActivePage('explore');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (page: ActivePage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E1B18] flex flex-col font-sans selection:bg-amber-300 selection:text-stone-900">
      
      {/* Global Navigation Bar */}
      <Navbar 
        activePage={activePage} 
        setActivePage={handleNavigate} 
      />

      {/* Main Dynamic View Content */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomeView
            setActivePage={handleNavigate}
            onSelectKit={handleSelectKit}
            onSelectCategory={handleSelectCategory}
          />
        )}

        {activePage === 'explore' && (
          <ExploreView
            onSelectKit={handleSelectKit}
            selectedCategoryFilter={selectedCategoryFilter}
            setSelectedCategoryFilter={setSelectedCategoryFilter}
          />
        )}

        {activePage === 'product' && (
          <ProductDetailView
            kit={selectedKit}
            onSelectKit={handleSelectKit}
            setActivePage={handleNavigate}
          />
        )}

        {activePage === 'quiz' && (
          <QuizView
            onSelectKit={handleSelectKit}
            setActivePage={handleNavigate}
          />
        )}

        {activePage === 'gift' && (
          <GiftView
            onSelectKit={handleSelectKit}
            setActivePage={handleNavigate}
          />
        )}

        {activePage === 'about' && (
          <AboutView
            setActivePage={handleNavigate}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer 
        setActivePage={handleNavigate} 
      />

      {/* Interactive Global Modals & Drawers */}
      <QuickViewModal 
        onSelectKit={handleSelectKit} 
      />

      <SearchModal 
        onSelectKit={handleSelectKit} 
      />

      <CartDrawer 
        setActivePage={handleNavigate}
        onSelectKit={handleSelectKit}
      />

      <CheckoutModal />

      <Toast />

    </div>
  );
};

export function App() {
  return (
    <CartProvider>
      <MainAppContent />
    </CartProvider>
  );
}

export default App;

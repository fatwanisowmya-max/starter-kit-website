import React, { useState } from 'react';
import { 
  Star, 
  ShoppingBag, 
  Heart, 
  Share2, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  Package, 
  BookOpen, 
  Clock, 
  Smile, 
  Gift, 
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  MessageSquare,
  Award,
  Zap
} from 'lucide-react';
import { StarterKit, ActivePage } from '../types';
import { useCart } from '../context/CartContext';
import { STARTER_KITS_DATA } from '../data/kitsData';

interface ProductDetailViewProps {
  kit: StarterKit;
  onSelectKit: (kit: StarterKit) => void;
  setActivePage: (page: ActivePage) => void;
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({
  kit,
  onSelectKit,
  setActivePage,
}) => {
  const { addToCart, isInWishlist, toggleWishlist, setIsCheckoutOpen, addToast } = useCart();
  const isWishlisted = isInWishlist(kit.id);

  const [selectedImgIndex, setSelectedImgIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isGiftMode, setIsGiftMode] = useState(false);
  const [giftNote, setGiftNote] = useState('');
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);

  // Review Form State
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [newReviewAuthor, setNewReviewAuthor] = useState('');
  const [newReviewTitle, setNewReviewTitle] = useState('');
  const [newReviewComment, setNewReviewComment] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [newReviewProject, setNewReviewProject] = useState('');
  const [reviewsList, setReviewsList] = useState(kit.reviews);

  const images = kit.galleryImages || [kit.primaryImage];

  const handleAddToCart = () => {
    addToCart(kit, quantity, isGiftMode, isGiftMode ? giftNote : undefined);
  };

  const handleBuyNow = () => {
    addToCart(kit, quantity, isGiftMode, isGiftMode ? giftNote : undefined);
    setIsCheckoutOpen(true);
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewAuthor.trim() || !newReviewComment.trim()) return;

    const newRev = {
      id: `rev-${Date.now()}`,
      author: newReviewAuthor,
      rating: newReviewRating,
      date: 'Just now',
      title: newReviewTitle || 'Awesome starter kit!',
      comment: newReviewComment,
      verified: true,
      firstProject: newReviewProject || 'My First Creation',
    };

    setReviewsList([newRev, ...reviewsList]);
    setShowReviewModal(false);
    setNewReviewAuthor('');
    setNewReviewTitle('');
    setNewReviewComment('');
    setNewReviewProject('');
    addToast('Thank you! Your beginner review was added.', 'success');
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      addToast('Kit link copied to clipboard!', 'info');
    }
  };

  const relatedKits = STARTER_KITS_DATA.filter((k) => k.id !== kit.id).slice(0, 3);

  return (
    <div className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Top Breadcrumb Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => {
            setActivePage('explore');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-700 hover:text-stone-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Starter Kits</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={handleShare}
            className="p-2 rounded-xl border border-stone-200 text-stone-700 hover:bg-stone-100 transition-colors text-xs font-semibold flex items-center gap-1.5"
          >
            <Share2 className="w-4 h-4" />
            <span className="hidden sm:inline">Share</span>
          </button>

          <button
            onClick={() => toggleWishlist(kit.id)}
            className="p-2 rounded-xl border border-stone-200 text-stone-700 hover:bg-stone-100 transition-colors text-xs font-semibold flex items-center gap-1.5"
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'text-rose-500 fill-rose-500' : ''}`} />
            <span className="hidden sm:inline">{isWishlisted ? 'Saved' : 'Save'}</span>
          </button>
        </div>
      </div>

      {/* 1. Above The Fold: Gallery & Purchase Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        
        {/* Gallery (Left Col) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative aspect-4/3 sm:aspect-16/11 rounded-3xl overflow-hidden bg-stone-100 border border-stone-200/90 shadow-md">
            <img
              src={images[selectedImgIndex] || kit.primaryImage}
              alt={kit.name}
              className="w-full h-full object-cover"
            />
            {kit.badge && (
              <span className="absolute top-4 left-4 bg-[#1E1B18]/90 text-amber-300 text-xs font-black px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                {kit.badge}
              </span>
            )}
            <span className="absolute bottom-4 left-4 bg-white/95 text-stone-800 text-xs font-bold px-3 py-1 rounded-full shadow-xs flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              {kit.timeToStart}
            </span>
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-1">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImgIndex(idx)}
                  className={`w-20 h-20 rounded-2xl overflow-hidden border-2 shrink-0 transition-all ${
                    selectedImgIndex === idx
                      ? 'border-[#1E1B18] scale-105 shadow-sm'
                      : 'border-stone-200 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Kit angle" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Purchase Info (Right Col) */}
        <div className="lg:col-span-5 space-y-6">
          
          <div>
            {/* Rating & Difficulty */}
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-extrabold text-stone-800">{kit.rating}</span>
                <span className="text-xs text-stone-700">({kit.reviewCount} beginner reviews)</span>
              </div>
              <span className="text-xs font-bold text-emerald-800 bg-emerald-100/90 px-2.5 py-0.5 rounded-full">
                {kit.difficulty}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display font-black text-3xl sm:text-4xl text-[#1E1B18] tracking-tight leading-tight">
              {kit.name}
            </h1>

            {/* Emotional Hook */}
            <p className="text-sm font-semibold text-amber-800 mt-2">
              "{kit.emotionalHook}"
            </p>

            {/* Long description */}
            <p className="text-xs sm:text-sm text-stone-700 mt-3 leading-relaxed">
              {kit.longDescription}
            </p>
          </div>

          {/* Pricing Row */}
          <div className="p-4 rounded-2xl bg-white border border-stone-200/80 shadow-2xs space-y-3">
            <div className="flex items-baseline justify-between">
              <div className="flex items-baseline gap-2">
                <span className="font-display font-black text-3xl text-[#1E1B18]">
                  ${kit.price}
                </span>
                {kit.originalPrice && (
                  <span className="text-sm text-stone-600 line-through">
                    ${kit.originalPrice}
                  </span>
                )}
                <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md">
                  Save ${kit.originalPrice ? kit.originalPrice - kit.price : 15}
                </span>
              </div>

              <span className="text-xs text-emerald-800 font-extrabold flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" />
                In Stock
              </span>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center justify-between pt-3 border-t border-stone-100 text-xs">
              <span className="font-bold text-stone-700">Quantity</span>
              <div className="flex items-center border border-stone-300 rounded-xl bg-stone-50">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1.5 text-stone-700 hover:text-stone-900 font-bold"
                >
                  -
                </button>
                <span className="px-3 font-extrabold text-stone-900">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1.5 text-stone-700 hover:text-stone-900 font-bold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Gifting Checkbox Toggle */}
            <div className="pt-2 border-t border-stone-100">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isGiftMode}
                  onChange={(e) => setIsGiftMode(e.target.checked)}
                  className="w-4 h-4 rounded text-rose-600 focus:ring-rose-500 border-stone-300"
                />
                <span className="text-xs font-bold text-stone-800 flex items-center gap-1.5">
                  <Gift className="w-3.5 h-3.5 text-rose-500" />
                  <span>Send as a gift (Free box wrap & handwritten note)</span>
                </span>
              </label>

              {isGiftMode && (
                <div className="mt-2 animate-in fade-in duration-200">
                  <textarea
                    value={giftNote}
                    onChange={(e) => setGiftNote(e.target.value)}
                    rows={2}
                    placeholder="Enter recipient's gift card message..."
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl p-2.5 text-xs text-stone-900 focus:outline-none focus:border-stone-900"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Primary Action CTAs */}
          <div className="space-y-2.5">
            <button
              id="pdp-add-to-cart-btn"
              onClick={handleAddToCart}
              className="w-full bg-amber-400 hover:bg-amber-500 text-stone-950 font-extrabold text-sm sm:text-base py-4 px-6 rounded-2xl flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all active:scale-98"
            >
              <ShoppingBag className="w-5 h-5 text-stone-950" />
              <span>Add to Starter Box (${kit.price * quantity})</span>
            </button>

            <button
              id="pdp-buy-now-btn"
              onClick={handleBuyNow}
              className="w-full bg-[#1E1B18] hover:bg-stone-800 text-white font-extrabold text-sm sm:text-base py-4 px-6 rounded-2xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-98"
            >
              <span>Instant Buy Now</span>
              <ArrowRight className="w-5 h-5 text-amber-400" />
            </button>
          </div>

          {/* Guarantee Badges */}
          <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-stone-700">
            <div className="flex items-center gap-2 bg-stone-50 p-2.5 rounded-xl border border-stone-200/60">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>30-Day Joy Guarantee</span>
            </div>
            <div className="flex items-center gap-2 bg-stone-50 p-2.5 rounded-xl border border-stone-200/60">
              <Package className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Fast 3-Day Delivery</span>
            </div>
          </div>

        </div>

      </div>

      {/* 2. "What's Inside?" Visual Component Cards (Section 9 of PRD) */}
      <section className="pt-10 border-t border-stone-200">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-800 bg-amber-100/90 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-2">
            <Package className="w-3.5 h-3.5" />
            <span>Complete Starter Experience</span>
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#1E1B18] tracking-tight">
            What’s Inside Your Box?
          </h2>
          <p className="text-stone-700 text-sm sm:text-base mt-2">
            Every component was chosen specifically so you can begin without buying anything else.
          </p>
        </div>

        {/* Visual Component Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {kit.components.map((component, idx) => (
            <div
              key={component.id}
              className={`p-6 rounded-3xl border flex flex-col justify-between transition-all duration-200 ${
                component.highlight
                  ? 'bg-amber-500/10 border-amber-300/80 shadow-xs'
                  : 'bg-white border-stone-200/80 shadow-xs'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-white border border-stone-200 flex items-center justify-center text-stone-900 font-bold text-sm shadow-2xs">
                    0{idx + 1}
                  </div>
                  {component.highlight && (
                    <span className="text-[10px] font-black uppercase tracking-wider bg-amber-400 text-stone-950 px-2.5 py-0.5 rounded-full">
                      Hero Essential
                    </span>
                  )}
                </div>

                <h3 className="font-display font-extrabold text-lg text-[#1E1B18]">
                  {component.name}
                </h3>
                
                <h4 className="text-xs font-bold text-amber-800 mt-0.5">
                  {component.subtitle}
                </h4>

                <p className="text-xs text-stone-700 mt-2.5 leading-relaxed">
                  {component.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Pre-tested & Beginner Ready</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. "Why This Kit?" 4 Benefits (Section 10 of PRD) */}
      <section className="bg-[#1E1B18] text-white rounded-3xl p-8 sm:p-14">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3.5 py-1 rounded-full inline-block mb-3">
            Built for Beginners
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            Why This Kit?
          </h2>
          <p className="text-stone-300 text-sm mt-2">
            No research overwhelm. No missing parts. Just open the box and start exploring.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {kit.whyBenefits.map((benefit, i) => (
            <div key={i} className="p-6 rounded-2xl bg-stone-900/80 border border-stone-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-white">
                {benefit.title}
              </h3>
              <p className="text-xs text-stone-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. "Inside the Beginner's Guide" Interactive Breakdown */}
      <section className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-sm">
        <div className="max-w-3xl mx-auto space-y-8">
          
          <div className="text-center">
            <span className="text-xs font-extrabold uppercase tracking-widest text-sky-800 bg-sky-100/90 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-2">
              <BookOpen className="w-3.5 h-3.5 text-sky-700" />
              <span>Handbook Preview</span>
            </span>
            <h2 className="font-display font-black text-3xl text-[#1E1B18] tracking-tight">
              Inside Your Beginner's Guidebook
            </h2>
            <p className="text-stone-700 text-xs sm:text-sm mt-1.5">
              Included in physical print inside your box. Visual, jargon-free steps to your first milestone.
            </p>
          </div>

          <div className="space-y-3">
            {kit.guideChapters.map((chapter) => (
              <div
                key={chapter.step}
                className="p-5 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-display font-extrabold text-xs text-stone-500 bg-stone-200 px-2 py-0.5 rounded-md">
                      Chapter {chapter.step}
                    </span>
                    <h4 className="font-display font-bold text-base text-[#1E1B18]">
                      {chapter.title}
                    </h4>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {chapter.description}
                  </p>
                  <div className="text-[11px] font-bold text-amber-800 pt-1">
                    💡 Key Takeaway: {chapter.keyTakeaway}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-extrabold text-stone-700 bg-white px-3 py-1.5 rounded-xl border border-stone-200 shrink-0 self-start sm:self-auto">
                  <Clock className="w-3.5 h-3.5 text-amber-500" />
                  <span>{chapter.duration}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Verified Reviews & First Project Stories */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-stone-200">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-800 bg-amber-100/90 px-3 py-1 rounded-full inline-block mb-2">
              Community Reviews
            </span>
            <h2 className="font-display font-black text-3xl text-[#1E1B18]">
              Beginner Experiences ({reviewsList.length})
            </h2>
            <p className="text-stone-700 text-xs sm:text-sm mt-1">
              Read real stories from people who started their journey with this kit.
            </p>
          </div>

          <button
            onClick={() => setShowReviewModal(true)}
            className="bg-[#1E1B18] hover:bg-stone-800 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all self-start sm:self-auto flex items-center gap-1.5"
          >
            <MessageSquare className="w-4 h-4 text-amber-400" />
            <span>Write a Review</span>
          </button>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviewsList.map((rev) => (
            <div key={rev.id} className="bg-white p-6 rounded-3xl border border-stone-200/80 shadow-2xs space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <h4 className="font-display font-bold text-base text-[#1E1B18]">
                    {rev.title}
                  </h4>
                </div>
                <span className="text-[11px] text-stone-600">{rev.date}</span>
              </div>

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                "{rev.comment}"
              </p>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-stone-900">{rev.author}</span>
                  {rev.verified && (
                    <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded">
                      Verified Starter
                    </span>
                  )}
                </div>

                {rev.firstProject && (
                  <span className="text-[11px] text-amber-800 font-semibold bg-amber-50 px-2 py-0.5 rounded-md">
                    🎨 First: {rev.firstProject}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Review Submission Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-stone-200 shadow-2xl relative">
            <h3 className="font-display font-bold text-xl text-[#1E1B18] mb-1">
              Share Your Beginner Experience
            </h3>
            <p className="text-xs text-stone-500 mb-4">
              How did this starter kit help you take your first step?
            </p>

            <form onSubmit={handleAddReview} className="space-y-3.5">
              <div>
                <label className="text-[11px] font-bold text-stone-700 block mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  value={newReviewAuthor}
                  onChange={(e) => setNewReviewAuthor(e.target.value)}
                  placeholder="e.g. Jordan M."
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl p-2.5 text-xs text-stone-900 focus:outline-none focus:border-stone-900"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-stone-700 block mb-1">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      type="button"
                      key={num}
                      onClick={() => setNewReviewRating(num)}
                      className={`p-2 rounded-xl text-xs font-bold flex items-center gap-1 border transition-all ${
                        newReviewRating >= num ? 'bg-amber-400 text-stone-950 border-amber-400' : 'bg-stone-50 text-stone-500 border-stone-200'
                      }`}
                    >
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{num}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-stone-700 block mb-1">Headline</label>
                <input
                  type="text"
                  value={newReviewTitle}
                  onChange={(e) => setNewReviewTitle(e.target.value)}
                  placeholder="e.g. I finally started painting without stress!"
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl p-2.5 text-xs text-stone-900 focus:outline-none focus:border-stone-900"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-stone-700 block mb-1">Your First Creation / Project</label>
                <input
                  type="text"
                  value={newReviewProject}
                  onChange={(e) => setNewReviewProject(e.target.value)}
                  placeholder="e.g. Lavender Sunset Canvas"
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl p-2.5 text-xs text-stone-900 focus:outline-none focus:border-stone-900"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-stone-700 block mb-1">Your Feedback</label>
                <textarea
                  required
                  rows={3}
                  value={newReviewComment}
                  onChange={(e) => setNewReviewComment(e.target.value)}
                  placeholder="Tell us what you liked about the tools and beginner guidebook..."
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl p-2.5 text-xs text-stone-900 focus:outline-none focus:border-stone-900 resize-none"
                />
              </div>

              <div className="pt-3 border-t border-stone-200 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowReviewModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-stone-600 hover:bg-stone-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#1E1B18] text-white px-5 py-2 rounded-xl text-xs font-bold hover:bg-stone-800"
                >
                  Post Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 6. Frequently Asked Questions Accordion */}
      {kit.faqs && kit.faqs.length > 0 && (
        <section className="bg-stone-50 rounded-3xl p-8 sm:p-12 border border-stone-200 max-w-3xl mx-auto space-y-6">
          <div className="text-center">
            <h3 className="font-display font-black text-2xl text-[#1E1B18]">
              Beginner FAQs
            </h3>
            <p className="text-xs text-stone-500 mt-1">
              Common questions answered before you unbox.
            </p>
          </div>

          <div className="space-y-3">
            {kit.faqs.map((faq, idx) => {
              const isOpen = activeFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-2xs"
                >
                  <button
                    onClick={() => setActiveFaqIndex(isOpen ? null : idx)}
                    className="w-full p-4 text-left font-bold text-xs sm:text-sm text-[#1E1B18] flex items-center justify-between gap-3 hover:bg-stone-50 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-stone-400 transition-transform ${isOpen ? 'rotate-180 text-stone-900' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-xs text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 7. Related Starter Kits */}
      <section className="pt-10 border-t border-stone-200">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="font-display font-extrabold text-2xl text-[#1E1B18]">
              You Might Also Love
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              Other highly rated starting points to explore.
            </p>
          </div>

          <button
            onClick={() => {
              setActivePage('explore');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs font-bold text-stone-900 hover:text-amber-800 flex items-center gap-1"
          >
            <span>See All Kits</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedKits.map((relKit) => (
            <div
              key={relKit.id}
              onClick={() => {
                onSelectKit(relKit);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-white rounded-2xl border border-stone-200 p-4 hover:shadow-md transition-all cursor-pointer flex gap-4 group"
            >
              <div className="w-24 h-24 rounded-xl overflow-hidden bg-stone-100 shrink-0">
                <img src={relKit.primaryImage} alt={relKit.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-display font-bold text-sm text-[#1E1B18] group-hover:text-amber-800 transition-colors line-clamp-1">
                    {relKit.name}
                  </h4>
                  <p className="text-xs text-stone-500 line-clamp-2 mt-0.5">
                    {relKit.shortDescription}
                  </p>
                </div>
                <div className="flex items-center justify-between text-xs font-bold text-stone-900 pt-1">
                  <span>${relKit.price}</span>
                  <span className="text-amber-800 flex items-center gap-0.5 text-[11px]">
                    Explore →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

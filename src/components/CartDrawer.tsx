import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  Sparkles, 
  Gift, 
  ShieldCheck,
  CheckCircle2,
  Tag
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ActivePage, StarterKit } from '../types';

interface CartDrawerProps {
  setActivePage: (page: ActivePage) => void;
  onSelectKit: (kit: StarterKit) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ setActivePage, onSelectKit }) => {
  const { 
    cart, 
    isCartOpen, 
    setIsCartOpen, 
    updateQuantity, 
    removeFromCart, 
    cartCount, 
    subtotal, 
    discount, 
    shipping, 
    total,
    promoCode,
    applyPromo,
    removePromo,
    setIsCheckoutOpen
  } = useCart();

  const [inputCode, setInputCode] = useState('');
  const [promoMessage, setPromoMessage] = useState<{ text: string; isError: boolean } | null>(null);

  if (!isCartOpen) return null;

  const freeShippingThreshold = 60;
  const progressToFreeShipping = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  const amountNeededForFreeShipping = Math.max(0, Math.round((freeShippingThreshold - subtotal) * 100) / 100);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCode.trim()) return;
    const res = applyPromo(inputCode);
    setPromoMessage({ text: res.message, isError: !res.success });
    if (res.success) setInputCode('');
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dark Backdrop */}
      <div 
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-stone-900/50 backdrop-blur-xs transition-opacity duration-300" 
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F5] border-l border-stone-200 shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-5 sm:p-6 bg-white border-b border-stone-200 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#1E1B18] text-white flex items-center justify-center font-bold text-sm">
                <ShoppingBag className="w-4 h-4 text-amber-400" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-[#1E1B18]">
                  Your Starter Box ({cartCount})
                </h3>
                <span className="text-[11px] text-stone-500 font-medium">Ready to begin</span>
              </div>
            </div>

            <button
              id="cart-drawer-close-btn"
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-full text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="bg-amber-50 px-5 py-3 border-b border-amber-200/60">
            <div className="flex items-center justify-between text-xs font-bold text-amber-950 mb-1.5">
              {amountNeededForFreeShipping === 0 ? (
                <span className="flex items-center gap-1 text-emerald-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  You've unlocked FREE 3-day shipping!
                </span>
              ) : (
                <span>Add ${amountNeededForFreeShipping} more for FREE shipping</span>
              )}
              <span className="text-amber-800">{progressToFreeShipping}%</span>
            </div>
            <div className="w-full bg-amber-200/70 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-amber-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${progressToFreeShipping}%` }}
              />
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-stone-200/70 text-stone-400 flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-display font-bold text-lg text-stone-800">Your cart is empty</h4>
                <p className="text-xs text-stone-500 max-w-xs mx-auto">
                  Discover a new hobby or take our 1-minute quiz to find your ideal starting kit.
                </p>
                <div className="pt-2 flex flex-col gap-2">
                  <button
                    onClick={() => {
                      setIsCartOpen(false);
                      setActivePage('explore');
                    }}
                    className="bg-[#1E1B18] text-white text-xs font-bold py-3 px-5 rounded-xl hover:bg-stone-800 transition-colors"
                  >
                    Browse Starter Kits
                  </button>
                  <button
                    onClick={() => {
                      setIsCartOpen(false);
                      setActivePage('quiz');
                    }}
                    className="text-xs font-bold text-amber-800 hover:text-amber-900 py-2"
                  >
                    Take "Find My Kit" Quiz →
                  </button>
                </div>
              </div>
            ) : (
              cart.map((item) => (
                <div 
                  key={item.kit.id}
                  className="bg-white p-4 rounded-2xl border border-stone-200/90 shadow-2xs space-y-3"
                >
                  <div className="flex gap-3.5">
                    <div 
                      onClick={() => {
                        setIsCartOpen(false);
                        onSelectKit(item.kit);
                      }}
                      className="w-20 h-20 rounded-xl overflow-hidden bg-stone-100 shrink-0 cursor-pointer"
                    >
                      <img
                        src={item.kit.primaryImage}
                        alt={item.kit.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-1">
                          <h4 
                            onClick={() => {
                              setIsCartOpen(false);
                              onSelectKit(item.kit);
                            }}
                            className="font-display font-bold text-sm text-[#1E1B18] hover:text-amber-800 transition-colors cursor-pointer leading-tight"
                          >
                            {item.kit.name}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.kit.id)}
                            className="text-stone-400 hover:text-rose-500 p-1 transition-colors"
                            title="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>

                        {item.isGift && (
                          <div className="mt-1 inline-flex items-center gap-1 text-[10px] font-bold bg-rose-50 text-rose-700 px-2 py-0.5 rounded-md">
                            <Gift className="w-3 h-3" />
                            <span>Gift Box + Custom Card</span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-stone-100">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-stone-200 rounded-lg bg-stone-50">
                          <button
                            onClick={() => updateQuantity(item.kit.id, item.quantity - 1)}
                            className="p-1 text-stone-600 hover:text-stone-900 transition-colors"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="text-xs font-extrabold px-2.5 text-stone-800">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.kit.id, item.quantity + 1)}
                            className="p-1 text-stone-600 hover:text-stone-900 transition-colors"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Price */}
                        <div className="font-display font-extrabold text-sm text-[#1E1B18]">
                          ${item.kit.price * item.quantity}
                        </div>
                      </div>
                    </div>
                  </div>

                  {item.giftMessage && (
                    <div className="bg-rose-50/50 p-2 rounded-lg border border-rose-100 text-[11px] text-rose-900 italic">
                      <span className="font-bold not-italic text-rose-950 block text-[10px]">Note:</span>
                      "{item.giftMessage}"
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Footer Calculations & Checkout */}
          {cart.length > 0 && (
            <div className="p-5 sm:p-6 bg-white border-t border-stone-200 space-y-4">
              
              {/* Promo Code Input */}
              {promoCode ? (
                <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 px-3 py-2 rounded-xl text-xs text-emerald-900 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Coupon <strong>{promoCode}</strong> applied</span>
                  </div>
                  <button
                    onClick={removePromo}
                    className="text-stone-400 hover:text-stone-800 text-[11px] font-bold"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyPromo} className="space-y-1">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Promo code (e.g. START10)"
                      value={inputCode}
                      onChange={(e) => setInputCode(e.target.value)}
                      className="flex-1 bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 text-xs uppercase placeholder:normal-case focus:outline-none focus:border-stone-900"
                    />
                    <button
                      type="submit"
                      className="bg-stone-900 text-white font-bold text-xs px-3.5 py-2 rounded-xl hover:bg-stone-800 transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                  {promoMessage && (
                    <span className={`text-[11px] block ${promoMessage.isError ? 'text-rose-600' : 'text-emerald-700'}`}>
                      {promoMessage.text}
                    </span>
                  )}
                </form>
              )}

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-stone-900">${subtotal}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-medium">
                    <span>Discount</span>
                    <span>-${discount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-semibold text-stone-900">
                    {shipping === 0 ? <span className="text-emerald-700 font-bold">FREE</span> : `$${shipping}`}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#1E1B18] pt-2 border-t border-stone-100">
                  <span>Total</span>
                  <span className="font-display font-extrabold text-xl">${total}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                id="cart-drawer-checkout-btn"
                onClick={handleProceedToCheckout}
                className="w-full bg-[#1E1B18] hover:bg-stone-800 text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-98"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-stone-400 font-medium text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>30-Day Happiness Guarantee • Secure 256-Bit Checkout</span>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  X, 
  CheckCircle2, 
  Package, 
  CreditCard, 
  Truck, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  Clock,
  Lock,
  Gift
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { OrderDetails } from '../types';

export const CheckoutModal: React.FC = () => {
  const { 
    cart, 
    subtotal, 
    discount, 
    shipping, 
    total, 
    isCheckoutOpen, 
    setIsCheckoutOpen,
    createOrder,
    lastOrder
  } = useCart();

  const [name, setName] = useState('Alex Morgan');
  const [email, setEmail] = useState('alex.morgan@example.com');
  const [address, setAddress] = useState('742 Evergreen Terrace');
  const [city, setCity] = useState('Springfield');
  const [state, setState] = useState('OR');
  const [zip, setZip] = useState('97477');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'apple' | 'google'>('card');
  const [cardNumber, setCardNumber] = useState('•••• •••• •••• 4242');
  const [cardExpiry, setCardExpiry] = useState('12/28');
  const [cardCvc, setCardCvc] = useState('888');

  const [isProcessing, setIsProcessing] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState<OrderDetails | null>(null);

  if (!isCheckoutOpen) return null;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      const placed = createOrder({
        customerName: name,
        customerEmail: email,
        shippingAddress: `${address}, ${city}, ${state} ${zip}`,
      });
      setConfirmedOrder(placed);

      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.5 },
          colors: ['#F59E0B', '#10B981', '#3B82F6', '#8B5CF6'],
        });
      } catch (err) {}
    }, 1200);
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setConfirmedOrder(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div className="bg-[#FAF8F5] rounded-3xl max-w-3xl w-full border border-stone-200 shadow-2xl overflow-hidden relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 z-10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {confirmedOrder ? (
          /* Order Confirmation Screen */
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-100/90 px-3.5 py-1 rounded-full">
                Order Confirmed • Ready to Start
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#1E1B18] mt-3">
                Your Starter Journey Begins!
              </h2>
              <p className="text-stone-700 text-sm mt-2 max-w-md mx-auto">
                We've sent a receipt to <strong>{confirmedOrder.customerEmail}</strong>. Your curated box is being packed with care.
              </p>
            </div>

            {/* Order Summary Box */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-2xs text-left max-w-lg mx-auto space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100 text-xs">
                <div>
                  <span className="text-stone-700 block text-[11px]">Tracking ID</span>
                  <span className="font-extrabold text-[#1E1B18] text-sm">{confirmedOrder.orderId}</span>
                </div>
                <div className="text-right">
                  <span className="text-stone-700 block text-[11px]">Est. Delivery</span>
                  <span className="font-extrabold text-emerald-700 text-sm">{confirmedOrder.estimatedDelivery}</span>
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-3 max-h-48 overflow-y-auto">
                {confirmedOrder.items.map((item) => (
                  <div key={item.kit.id} className="flex items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={item.kit.primaryImage}
                        alt={item.kit.name}
                        className="w-10 h-10 rounded-lg object-cover"
                      />
                      <div>
                        <div className="font-bold text-stone-900">{item.kit.name}</div>
                        <div className="text-stone-700">Qty: {item.quantity} {item.isGift && '• 🎁 Gift Box'}</div>
                      </div>
                    </div>
                    <span className="font-bold text-stone-900">${item.kit.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-sm font-bold text-[#1E1B18]">
                <span>Total Paid</span>
                <span className="font-display font-extrabold text-lg">${confirmedOrder.total}</span>
              </div>
            </div>

            {/* Next Steps Timeline */}
            <div className="max-w-lg mx-auto bg-stone-100/70 rounded-2xl p-4 text-xs text-left space-y-2">
              <div className="font-bold text-stone-900 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-500" />
                <span>What happens next:</span>
              </div>
              <ul className="space-y-1.5 text-stone-600 pl-5 list-disc">
                <li>Our team hand-packs your tools, components, and handbook.</li>
                <li>You will receive courier tracking updates via email.</li>
                <li>Open the box, read the quick guide, and take your first step!</li>
              </ul>
            </div>

            <button
              onClick={handleClose}
              className="bg-[#1E1B18] hover:bg-stone-800 text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-sm transition-all"
            >
              Continue Exploring Passions
            </button>
          </div>
        ) : (
          /* Main Checkout Form */
          <div className="p-6 sm:p-10">
            
            <div className="flex items-center gap-2 mb-6">
              <div className="w-7 h-7 rounded-lg bg-[#1E1B18] text-white flex items-center justify-center font-bold text-xs">
                <Lock className="w-3.5 h-3.5 text-amber-400" />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-2xl text-[#1E1B18]">
                  Complete Your Order
                </h3>
                <span className="text-xs text-stone-500">Fast, encrypted 256-bit checkout</span>
              </div>
            </div>

            <form onSubmit={handlePlaceOrder} className="space-y-6">
              
              {/* Customer Info */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700">
                  1. Contact Information
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-stone-600 block mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white border border-stone-200 rounded-xl p-2.5 text-xs text-stone-900 focus:border-stone-900 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-stone-600 block mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white border border-stone-200 rounded-xl p-2.5 text-xs text-stone-900 focus:border-stone-900 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700">
                  2. Shipping Destination
                </h4>
                <div>
                  <label className="text-[11px] font-semibold text-stone-600 block mb-1">Street Address</label>
                  <input
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full bg-white border border-stone-200 rounded-xl p-2.5 text-xs text-stone-900 focus:border-stone-900 focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-stone-600 block mb-1">City</label>
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full bg-white border border-stone-200 rounded-xl p-2.5 text-xs text-stone-900 focus:border-stone-900 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-stone-600 block mb-1">State</label>
                    <input
                      type="text"
                      required
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="w-full bg-white border border-stone-200 rounded-xl p-2.5 text-xs text-stone-900 focus:border-stone-900 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-stone-600 block mb-1">ZIP Code</label>
                    <input
                      type="text"
                      required
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                      className="w-full bg-white border border-stone-200 rounded-xl p-2.5 text-xs text-stone-900 focus:border-stone-900 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700">
                  3. Payment Method
                </h4>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                      paymentMethod === 'card'
                        ? 'bg-[#1E1B18] text-white border-[#1E1B18]'
                        : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                    }`}
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Credit Card</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('apple')}
                    className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                      paymentMethod === 'apple'
                        ? 'bg-[#1E1B18] text-white border-[#1E1B18]'
                        : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                    }`}
                  >
                    <span> Pay</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('google')}
                    className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                      paymentMethod === 'google'
                        ? 'bg-[#1E1B18] text-white border-[#1E1B18]'
                        : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                    }`}
                  >
                    <span>G Pay</span>
                  </button>
                </div>

                {paymentMethod === 'card' && (
                  <div className="bg-white p-4 rounded-2xl border border-stone-200 space-y-3">
                    <div>
                      <label className="text-[11px] font-semibold text-stone-600 block mb-1">Card Number</label>
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className="w-full bg-stone-50 border border-stone-200 rounded-xl p-2 text-xs font-mono text-stone-900 focus:border-stone-900 focus:outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-[11px] font-semibold text-stone-600 block mb-1">Expires</label>
                        <input
                          type="text"
                          value={cardExpiry}
                          onChange={(e) => setCardExpiry(e.target.value)}
                          className="w-full bg-stone-50 border border-stone-200 rounded-xl p-2 text-xs font-mono text-stone-900 focus:border-stone-900 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] font-semibold text-stone-600 block mb-1">CVC</label>
                        <input
                          type="text"
                          value={cardCvc}
                          onChange={(e) => setCardCvc(e.target.value)}
                          className="w-full bg-stone-50 border border-stone-200 rounded-xl p-2 text-xs font-mono text-stone-900 focus:border-stone-900 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Total & Submit */}
              <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                <div>
                  <span className="text-xs text-stone-500 block">Total Due</span>
                  <span className="font-display font-extrabold text-2xl text-[#1E1B18]">
                    ${total}
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing || cart.length === 0}
                  className="bg-[#1E1B18] hover:bg-stone-800 text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-md flex items-center gap-2 disabled:opacity-50 transition-all active:scale-95"
                >
                  {isProcessing ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Processing...</span>
                    </span>
                  ) : (
                    <>
                      <span>Place Starter Order (${total})</span>
                      <ArrowRight className="w-4 h-4 text-amber-400" />
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};

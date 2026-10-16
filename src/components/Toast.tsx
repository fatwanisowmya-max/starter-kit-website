import React from 'react';
import { CheckCircle2, Sparkles, ShoppingBag, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Toast: React.FC = () => {
  const { toasts, removeToast } = useCart();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto bg-[#1E1B18] text-white p-3.5 rounded-2xl shadow-xl border border-stone-700/80 flex items-center justify-between gap-3 animate-in slide-in-from-bottom-5 duration-300"
        >
          <div className="flex items-center gap-3">
            {toast.kitImage ? (
              <img
                src={toast.kitImage}
                alt="Kit thumbnail"
                className="w-10 h-10 rounded-xl object-cover shrink-0 border border-stone-600"
              />
            ) : toast.type === 'cart' ? (
              <div className="w-9 h-9 rounded-xl bg-amber-400 text-stone-950 flex items-center justify-center shrink-0">
                <ShoppingBag className="w-4 h-4" />
              </div>
            ) : (
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
            )}
            <span className="text-xs font-semibold text-stone-100 leading-snug">
              {toast.message}
            </span>
          </div>

          <button
            onClick={() => removeToast(toast.id)}
            className="text-stone-400 hover:text-white p-1 rounded-lg hover:bg-stone-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};

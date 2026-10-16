import React, { createContext, useContext, useState, useEffect } from 'react';
import { StarterKit, CartItem, OrderDetails } from '../types';
import { STARTER_KITS_DATA } from '../data/kitsData';

interface ToastState {
  id: string;
  message: string;
  type?: 'success' | 'info' | 'cart';
  kitImage?: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (kit: StarterKit, quantity?: number, isGift?: boolean, giftMessage?: string) => void;
  removeFromCart: (kitId: string) => void;
  updateQuantity: (kitId: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  promoCode: string;
  promoDiscountPercent: number;
  applyPromo: (code: string) => { success: boolean; message: string };
  removePromo: () => void;
  
  // Wishlist
  wishlist: string[];
  toggleWishlist: (kitId: string) => void;
  isInWishlist: (kitId: string) => boolean;

  // UI Drawers & Modals
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  quickViewKit: StarterKit | null;
  openQuickView: (kit: StarterKit) => void;
  closeQuickView: () => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;

  // Notification Toast
  toasts: ToastState[];
  addToast: (message: string, type?: 'success' | 'info' | 'cart', kitImage?: string) => void;
  removeToast: (id: string) => void;

  // Orders
  orders: OrderDetails[];
  createOrder: (details: Omit<OrderDetails, 'orderId' | 'date' | 'estimatedDelivery' | 'items' | 'subtotal' | 'discount' | 'shipping' | 'total'>) => OrderDetails;
  lastOrder: OrderDetails | null;
  setLastOrder: (order: OrderDetails | null) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'start_kits_cart_v1';
const WISHLIST_STORAGE_KEY = 'start_kits_wishlist_v1';
const ORDERS_STORAGE_KEY = 'start_kits_orders_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Cart state initialized from localStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // rehydrate kits with current data
        return parsed.map((item: { kitId: string; quantity: number; isGift?: boolean; giftMessage?: string }) => {
          const matched = STARTER_KITS_DATA.find((k) => k.id === item.kitId);
          return matched ? { kit: matched, quantity: item.quantity, isGift: item.isGift, giftMessage: item.giftMessage } : null;
        }).filter(Boolean);
      }
    } catch (e) {
      console.error('Error loading cart from storage', e);
    }
    return [];
  });

  // Wishlist state
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(WISHLIST_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Orders history
  const [orders, setOrders] = useState<OrderDetails[]>(() => {
    try {
      const saved = localStorage.getItem(ORDERS_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [lastOrder, setLastOrder] = useState<OrderDetails | null>(null);

  // Promo code
  const [promoCode, setPromoCode] = useState<string>('');
  const [promoDiscountPercent, setPromoDiscountPercent] = useState<number>(0);

  // Modals & Drawers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [quickViewKit, setQuickViewKit] = useState<StarterKit | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Toasts
  const [toasts, setToasts] = useState<ToastState[]>([]);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      const serialized = cart.map((item) => ({
        kitId: item.kit.id,
        quantity: item.quantity,
        isGift: item.isGift,
        giftMessage: item.giftMessage,
      }));
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(serialized));
    } catch (e) {
      console.error('Failed to save cart', e);
    }
  }, [cart]);

  // Sync wishlist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist));
    } catch (e) {
      console.error('Failed to save wishlist', e);
    }
  }, [wishlist]);

  // Sync orders to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders));
    } catch (e) {
      console.error('Failed to save orders', e);
    }
  }, [orders]);

  const addToast = (message: string, type: 'success' | 'info' | 'cart' = 'success', kitImage?: string) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type, kitImage }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const addToCart = (kit: StarterKit, quantity = 1, isGift = false, giftMessage?: string) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex((item) => item.kit.id === kit.id);
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity,
          isGift: isGift || next[existingIndex].isGift,
          giftMessage: giftMessage || next[existingIndex].giftMessage,
        };
        return next;
      }
      return [...prev, { kit, quantity, isGift, giftMessage }];
    });

    addToast(`Added "${kit.name}" to your starter cart!`, 'cart', kit.primaryImage);
    setIsCartOpen(true);
  };

  const removeFromCart = (kitId: string) => {
    setCart((prev) => prev.filter((item) => item.kit.id !== kitId));
    addToast('Removed item from cart', 'info');
  };

  const updateQuantity = (kitId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(kitId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.kit.id === kitId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (kitId: string) => {
    setWishlist((prev) => {
      const exists = prev.includes(kitId);
      const kit = STARTER_KITS_DATA.find((k) => k.id === kitId);
      if (exists) {
        addToast(`Removed ${kit?.name || 'kit'} from wishlist`, 'info');
        return prev.filter((id) => id !== kitId);
      } else {
        addToast(`Saved ${kit?.name || 'kit'} to your hobby bucket list!`, 'success', kit?.primaryImage);
        return [...prev, kitId];
      }
    });
  };

  const isInWishlist = (kitId: string) => wishlist.includes(kitId);

  const openQuickView = (kit: StarterKit) => {
    setQuickViewKit(kit);
  };

  const closeQuickView = () => {
    setQuickViewKit(null);
  };

  const applyPromo = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'START10' || clean === 'STARTNOW') {
      setPromoCode(clean);
      setPromoDiscountPercent(0.1);
      addToast('Promo code START10 applied! 10% off your entire starter kit.', 'success');
      return { success: true, message: '10% discount applied!' };
    } else if (clean === 'HOBBY15' || clean === 'FIRSTSTEP') {
      setPromoCode(clean);
      setPromoDiscountPercent(0.15);
      addToast('Promo code applied! 15% off your order.', 'success');
      return { success: true, message: '15% discount applied!' };
    } else {
      return { success: false, message: 'Invalid promo code. Try "START10" or "HOBBY15"' };
    }
  };

  const removePromo = () => {
    setPromoCode('');
    setPromoDiscountPercent(0);
    addToast('Promo code removed', 'info');
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.kit.price * item.quantity, 0);
  const discount = Math.round(subtotal * promoDiscountPercent * 100) / 100;
  // Free shipping over $60
  const shipping = subtotal >= 60 || subtotal === 0 ? 0 : 7.99;
  const total = Math.max(0, Math.round((subtotal - discount + shipping) * 100) / 100);

  const createOrder = (details: Omit<OrderDetails, 'orderId' | 'date' | 'estimatedDelivery' | 'items' | 'subtotal' | 'discount' | 'shipping' | 'total'>): OrderDetails => {
    const orderId = `STK-${Math.floor(100000 + Math.random() * 900000)}`;
    const now = new Date();
    const deliveryDate = new Date();
    deliveryDate.setDate(now.getDate() + 3);

    const fullOrder: OrderDetails = {
      ...details,
      orderId,
      items: [...cart],
      subtotal,
      discount,
      shipping,
      total,
      date: now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      estimatedDelivery: deliveryDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
    };

    setOrders((prev) => [fullOrder, ...prev]);
    setLastOrder(fullOrder);
    clearCart();
    setPromoCode('');
    setPromoDiscountPercent(0);

    return fullOrder;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        subtotal,
        discount,
        shipping,
        total,
        promoCode,
        promoDiscountPercent,
        applyPromo,
        removePromo,
        wishlist,
        toggleWishlist,
        isInWishlist,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        quickViewKit,
        openQuickView,
        closeQuickView,
        isSearchOpen,
        setIsSearchOpen,
        toasts,
        addToast,
        removeToast,
        orders,
        createOrder,
        lastOrder,
        setLastOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

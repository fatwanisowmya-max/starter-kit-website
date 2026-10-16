export interface KitComponent {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  iconName?: string;
  image?: string;
  highlight?: boolean;
}

export interface GuideChapter {
  step: number;
  title: string;
  duration: string;
  description: string;
  keyTakeaway: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
  avatar?: string;
  firstProject?: string;
}

export type CategorySlug = 
  | 'photography'
  | 'painting'
  | 'baking'
  | 'travel'
  | 'fitness'
  | 'journaling'
  | 'plants'
  | 'content-creation'
  | 'diy-decor'
  | 'college';

export interface CategoryInfo {
  id: CategorySlug;
  name: string;
  emoji: string;
  tagline: string;
  description: string;
  image: string;
  accentColor: string;
  bgLight: string;
}

export interface StarterKit {
  id: string;
  slug: string;
  name: string;
  category: CategorySlug;
  badge?: string; // e.g. "Bestseller", "Trending", "Staff Pick", "New"
  shortDescription: string;
  emotionalHook: string;
  longDescription: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  difficulty: 'Beginner' | 'Zero Experience Needed' | 'All Levels';
  timeToStart: string; // e.g. "10 mins to first shot", "15 mins to first dough"
  primaryImage: string;
  galleryImages: string[];
  inclusionsSummary: string; // e.g. "Paints • Brushes • Canvas • Palette • Beginner Guide"
  components: KitComponent[];
  guideChapters: GuideChapter[];
  whyBenefits: {
    title: string;
    description: string;
    icon: string;
  }[];
  reviews: Review[];
  faqs: {
    question: string;
    answer: string;
  }[];
  giftPersona: string[]; // e.g. "creative", "curious"
}

export interface CartItem {
  kit: StarterKit;
  quantity: number;
  isGift?: boolean;
  giftMessage?: string;
}

export type ActivePage = 
  | 'home'
  | 'explore'
  | 'product'
  | 'quiz'
  | 'gift'
  | 'about'
  | 'how-it-works';

export interface QuizAnswerOption {
  text: string;
  subtitle?: string;
  emoji: string;
  categories: CategorySlug[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  subtext: string;
  options: QuizAnswerOption[];
}

export interface GiftPersona {
  id: string;
  title: string;
  emoji: string;
  description: string;
  recommendedCategory: CategorySlug;
  sampleQuote: string;
  image: string;
}

export interface OrderDetails {
  orderId: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  customerName: string;
  customerEmail: string;
  shippingAddress: string;
  giftNote?: string;
  date: string;
  estimatedDelivery: string;
}

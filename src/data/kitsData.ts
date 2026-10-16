import { StarterKit, CategoryInfo, GiftPersona } from '../types';

export const CATEGORIES_DATA: CategoryInfo[] = [
  {
    id: 'photography',
    name: 'Photography',
    emoji: '📷',
    tagline: 'Capture your first great shots',
    description: 'Master lighting, framing, and lenses without the gear confusion.',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
    accentColor: '#3B82F6',
    bgLight: '#EFF6FF',
  },
  {
    id: 'painting',
    name: 'Painting',
    emoji: '🎨',
    tagline: 'Make your first masterpiece',
    description: 'Rich acrylics, premium brushes, and guided canvases for your initial stroke.',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    accentColor: '#EC4899',
    bgLight: '#FDF2F8',
  },
  {
    id: 'baking',
    name: 'Baking',
    emoji: '🧁',
    tagline: 'Bake your first golden loaf & treats',
    description: 'Fail-proof measurements, artisan tools, and foolproof beginner recipes.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    accentColor: '#F59E0B',
    bgLight: '#FEF3C7',
  },
  {
    id: 'travel',
    name: 'Travel',
    emoji: '✈️',
    tagline: 'Explore the world effortlessly',
    description: 'Compression organizers, universal adapters, and smart weekend packing.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80',
    accentColor: '#10B981',
    bgLight: '#ECFDF5',
  },
  {
    id: 'fitness',
    name: 'Gym & Fitness',
    emoji: '🏋️',
    tagline: 'Build your workout momentum',
    description: 'Modular resistance bands, quick-dry gear, and a 30-day foundational workout guide.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    accentColor: '#EF4444',
    bgLight: '#FEF2F2',
  },
  {
    id: 'journaling',
    name: 'Journaling',
    emoji: '✍️',
    tagline: 'Reflect, write & clear your mind',
    description: 'Dotted heavyweight journals, archival fineliners, and daily mindfulness prompts.',
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80',
    accentColor: '#8B5CF6',
    bgLight: '#F5F3FF',
  },
  {
    id: 'plants',
    name: 'Plant Parent',
    emoji: '🌱',
    tagline: 'Grow your indoor jungle with confidence',
    description: 'Resilient starter succulents, moisture meters, terracotta pots, and soil blend.',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80',
    accentColor: '#059669',
    bgLight: '#D1FAE5',
  },
  {
    id: 'content-creation',
    name: 'Content Creation',
    emoji: '🎬',
    tagline: 'Create your first viral video or podcast',
    description: 'Crisp studio lighting, broadcast clip-on mic, steady tripod, and scripting blueprint.',
    image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=800&q=80',
    accentColor: '#F97316',
    bgLight: '#FFF7ED',
  },
  {
    id: 'diy-decor',
    name: 'DIY Décor',
    emoji: '🏠',
    tagline: 'Craft personalized pieces for your home',
    description: 'Ceramic clay, macramé cord, sculpting tools, and inspiring room aesthetic cards.',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
    accentColor: '#D97706',
    bgLight: '#FEF3C7',
  },
  {
    id: 'college',
    name: 'College Life',
    emoji: '🎓',
    tagline: 'Conquer your semester from Day 1',
    description: 'High-focus study planner, desk wire management, flashcards, and dorm essentials.',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80',
    accentColor: '#6366F1',
    bgLight: '#EEF2FF',
  },
];

export const STARTER_KITS_DATA: StarterKit[] = [
  {
    id: 'kit-photography',
    slug: 'photography-starter-kit',
    name: 'Photography Starter Kit',
    category: 'photography',
    badge: 'Bestseller',
    shortDescription: 'Everything you need to capture your first great shots.',
    emotionalHook: 'Your first step into photography — without the guesswork.',
    longDescription: 'Taking stunning photos should not require a degree in optical physics or spending thousands on confusing lenses. The Photography Starter Kit gives you the exact tactile gear, stabilization, memory capacity, and intuitive visual handbook to start capturing high-impact memories immediately with your smartphone or camera.',
    price: 68,
    originalPrice: 89,
    rating: 4.9,
    reviewCount: 342,
    difficulty: 'Zero Experience Needed',
    timeToStart: '10 minutes to your first hero shot',
    primaryImage: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1200&q=80'
    ],
    inclusionsSummary: 'Camera accessories • Mini tripod • Fast memory card • Precision lens cleaning kit • Beginner handbook',
    components: [
      {
        id: 'c-tripod',
        name: 'Flexible Mini Grip Tripod',
        subtitle: 'Compact & Ultra-Stable',
        description: 'Wraps around posts, sits on desks, and holds smartphones or cameras firmly at any creative angle.',
        iconName: 'Camera',
        highlight: true,
      },
      {
        id: 'c-sdcard',
        name: 'High-Speed 64GB U3 Memory Card',
        subtitle: 'Ready to store 5,000+ RAW shots',
        description: 'Blazing read/write speeds that ensure zero lag when snapping continuous bursts and 4K footage.',
        iconName: 'HardDrive',
      },
      {
        id: 'c-cleaning',
        name: 'Optics Precision Cleaning Kit',
        subtitle: 'Crystal clear glass forever',
        description: 'Microfiber lens pens, silicone air dust blower, and anti-static cloths to keep your glass spotless.',
        iconName: 'Sparkles',
      },
      {
        id: 'c-guide',
        name: 'The "First 50 Photos" Guidebook',
        subtitle: 'Simple, visual cheat sheets',
        description: 'No technical jargon. Clear illustrations on rule of thirds, golden hour lighting, and composition tricks.',
        iconName: 'BookOpen',
        highlight: true,
      },
      {
        id: 'c-pouch',
        name: 'Weather-Resistant Starter Sling',
        subtitle: 'Grab & Go Portability',
        description: 'Cushioned modular dividers to store all your gear cleanly on your first city photo walk.',
        iconName: 'Package',
      }
    ],
    guideChapters: [
      { step: 1, title: 'Unbox & Setup', duration: '5 min', description: 'Mounting your device, formatting your storage, and balancing on the mini tripod.', keyTakeaway: 'Stable foundation eliminates 90% of beginner blur.' },
      { step: 2, title: 'Mastering Light in 3 Rules', duration: '15 min', description: 'Finding natural window light, avoiding harsh shadows, and backlighting portraits.', keyTakeaway: 'Light creates emotion more than megapixels do.' },
      { step: 3, title: 'The Composition Rulebook', duration: '20 min', description: 'Leading lines, symmetry, framing natural windows, and creating depth.', keyTakeaway: 'Positioning your subject off-center tells a story.' },
      { step: 4, title: 'Your First 5 Challenge Shots', duration: '30 min', description: '5 fun assignment cards to complete your initial mini-portfolio today.', keyTakeaway: 'Practice makes intuition permanent.' }
    ],
    whyBenefits: [
      { title: 'Curated Essentials', description: 'Only the tools you actually need. Zero confusing gear clutter.', icon: 'CheckCircle' },
      { title: 'Beginner-Friendly', description: 'Every item is pre-tested and ready to use straight out of the box.', icon: 'Smile' },
      { title: 'All-In-One Value', description: 'Save over 40% compared to sourcing separate parts individually.', icon: 'Gift' },
      { title: 'Instant Inspiration', description: 'Includes 5 photo prompt cards to ignite your creativity on Day 1.', icon: 'Sparkles' }
    ],
    reviews: [
      { id: 'r1', author: 'Maya K.', rating: 5, date: '2 days ago', title: 'Finally took photos I am proud to frame!', comment: 'I always wanted to learn photography but felt so intimidated by forum gear talk. This kit broke everything down into simple visual steps. The mini tripod is my favorite companion now.', verified: true, firstProject: 'Sunset Golden Hour Series' },
      { id: 'r2', author: 'Marcus L.', rating: 5, date: '1 week ago', title: 'Everything worked immediately', comment: 'The guidebook alone is worth the price. The lens cleaner and sling bag make it easy to bring everywhere.', verified: true, firstProject: 'Street Architecture Walk' }
    ],
    faqs: [
      { question: 'Does this work with my iPhone or Android phone?', answer: 'Yes! The flexible mini tripod includes an adjustable padded smartphone clamp that fits all modern iPhone and Android devices, as well as a standard 1/4" mount for DSLRs and mirrorless cameras.' },
      { question: 'Do I need any prior photography knowledge?', answer: 'None at all! The kit was designed specifically for someone who has never adjusted an aperture or ISO setting in their life.' }
    ],
    giftPersona: ['creative', 'curious', 'traveller']
  },
  {
    id: 'kit-content-creator',
    slug: 'content-creator-kit',
    name: 'Content Creator Starter Kit',
    category: 'content-creation',
    badge: 'Trending',
    shortDescription: 'Studio lighting, crisp audio & creator planning in one box.',
    emotionalHook: 'Your first step into content creation — turn ideas into published videos.',
    longDescription: 'Great content is 80% clear sound and flattering lighting. Instead of endless YouTube tutorials debating audio interfaces, this kit provides a plug-and-play wireless lapel mic, adjustable bi-color ring light, sturdy overhead tripod, and a 60-day viral scripting planner.',
    price: 79,
    originalPrice: 99,
    rating: 4.95,
    reviewCount: 418,
    difficulty: 'Zero Experience Needed',
    timeToStart: '12 minutes to record Episode 1',
    primaryImage: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80'
    ],
    inclusionsSummary: 'Ring light • Wireless lapel mic • Overhead tripod • Scripting planner • Backdrop cards',
    components: [
      { id: 'cc-mic', name: 'Plug & Play Wireless Mic', subtitle: 'Broadcast-quality audio', description: 'Zero Bluetooth pairing hassles. Plug receiver directly into your phone for instant, echo-free voice pickup.', iconName: 'Mic', highlight: true },
      { id: 'cc-light', name: 'Bi-Color Soft Glow Light', subtitle: 'Adjustable Warm to Cool', description: 'Flattering, diffused lighting that makes you look professional in any dim room without harsh glare.', iconName: 'Sun', highlight: true },
      { id: 'cc-tripod', name: 'Overhead & Desk Stand', subtitle: '360° Rotating Arm', description: 'Switch from talking-head to unboxing/desk flat-lay angles in seconds.', iconName: 'Video' },
      { id: 'cc-planner', name: '60-Day Content Roadmap', subtitle: 'Hook formulas & templates', description: 'Proven storytelling frameworks, hook generators, and weekly publishing checklists.', iconName: 'FileText' }
    ],
    guideChapters: [
      { step: 1, title: 'Audio First', duration: '5 min', description: 'Positioning your microphone for intimate, clean sound without room echo.', keyTakeaway: 'Viewers forgive average video, but never bad audio.' },
      { step: 2, title: '3-Point Desk Lighting', duration: '10 min', description: 'Placing your key light 45 degrees to create flattering dimension.', keyTakeaway: 'Diffusion makes any camera look 5x more expensive.' },
      { step: 3, title: 'The 3-Second Hook Rule', duration: '15 min', description: 'Structuring your intro to hold viewer attention without rambling.', keyTakeaway: 'Answer the viewer’s question in the first sentence.' }
    ],
    whyBenefits: [
      { title: 'Plug & Play Setup', description: 'Zero audio drivers or complex software. Plug into phone and record.', icon: 'Zap' },
      { title: 'Confidence Booster', description: 'Eliminates camera shyness with structured scripts and great lighting.', icon: 'CheckCircle' },
      { title: 'Complete Ecosystem', description: 'Audio, lighting, stabilization, and planning all in sync.', icon: 'Sparkles' }
    ],
    reviews: [
      { id: 'r3', author: 'Devon T.', rating: 5, date: '3 days ago', title: 'Posted my first 10 TikToks in 2 days!', comment: 'I was procrastinating for a year because I didn’t know what mic to buy. The mic in this kit sounds as good as a studio podcaster mic. So happy!', verified: true, firstProject: 'Coding Tutorials Mini-Series' }
    ],
    faqs: [
      { question: 'Does the wireless mic work with iPhone 15/16 USB-C and Lightning?', answer: 'Yes! Both USB-C and Lightning adapters are included directly inside the box.' }
    ],
    giftPersona: ['creative', 'curious', 'student']
  },
  {
    id: 'kit-painting',
    slug: 'painting-starter-kit',
    name: 'Painting Starter Kit',
    category: 'painting',
    badge: 'Bestseller',
    shortDescription: 'Everything you need to make your first acrylic masterpiece.',
    emotionalHook: 'Your excuse to finally start painting — from blank canvas to proud display.',
    longDescription: 'Uncap your creative soul without messy mistakes or low-quality chalky paints. The Painting Starter Kit features 18 velvety, high-pigment acrylic tubes, 6 ergonomic nylon synthetic brushes, a sturdy desktop wooden easel, dual primed canvas boards, and step-by-step color mixing guides.',
    price: 54,
    originalPrice: 72,
    rating: 4.92,
    reviewCount: 520,
    difficulty: 'Zero Experience Needed',
    timeToStart: '15 minutes to your first color wash',
    primaryImage: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80'
    ],
    inclusionsSummary: '18 Acrylic paints • 6 Artist brushes • 2 Stretched canvases • Wooden easel • Color wheel guide',
    components: [
      { id: 'p-paints', name: '18 Vibrant Heavy-Body Acrylics', subtitle: 'Rich, blendable pigments', description: 'Thick, creamy paint that glides smoothly and dries with a satin finish.', iconName: 'Palette', highlight: true },
      { id: 'p-brushes', name: '6 Precision Synthetic Brushes', subtitle: 'Flat, Round, Fan, Detail', description: 'Resilient nylon bristles that hold paint beautifully without shedding hairs onto your art.', iconName: 'PenTool' },
      { id: 'p-easel', name: 'Foldable Beechwood Table Easel', subtitle: 'Adjustable incline', description: 'Sturdy tabletop display easel that holds your canvas at the perfect painting posture.', iconName: 'Maximize' },
      { id: 'p-canvas', name: '2 Triple-Primed Cotton Canvases', subtitle: '8x10” & 10x12” sizes', description: 'Acid-free 100% cotton canvas ready for paint without warping or bleeding.', iconName: 'Square' },
      { id: 'p-guide', name: 'Color Alchemy & Guided Projects', subtitle: '3 step-by-step landscapes', description: 'Learn color blending, layering textures, and painting dreamy sunsets with zero stress.', iconName: 'BookOpen', highlight: true }
    ],
    guideChapters: [
      { step: 1, title: 'Color Mixing Made Simple', duration: '10 min', description: 'How to mix any shade using primary colors without muddying your palette.', keyTakeaway: 'Start with light colors and add dark colors in tiny increments.' },
      { step: 2, title: 'Brush Strokes 101', duration: '15 min', description: 'Mastering the dry-brush, wet-on-wet wash, and textured stippling.', keyTakeaway: 'The angle of your wrist changes the personality of your stroke.' },
      { step: 3, title: 'Project 1: Mountain Sunset Glow', duration: '45 min', description: 'Step-by-step canvas painting with guided outlines to frame proudly.', keyTakeaway: 'Trust the process through the middle layers.' }
    ],
    whyBenefits: [
      { title: 'Artist-Grade Materials', description: 'No cheap watery kid paints; you get rich, archival artist-quality pigment.', icon: 'Award' },
      { title: 'Zero Mess Setup', description: 'Includes disposable mixing palette sheets and an easy-clean water basin.', icon: 'CheckCircle' },
      { title: 'Relaxing Mindfulness', description: 'Designed as a soothing escape from screen time and digital fatigue.', icon: 'Heart' }
    ],
    reviews: [
      { id: 'r4', author: 'Elena S.', rating: 5, date: '5 days ago', title: 'I had not painted since 6th grade!', comment: 'This kit made me fall in love with art again. The guidebook explains color mixing so intuitively that my first sunset painting looks like it came from a gallery!', verified: true, firstProject: 'Lavender Sunset Landscape' }
    ],
    faqs: [
      { question: 'Do acrylic paints wash out easily with water?', answer: 'Yes! While wet, acrylics clean effortlessly with soap and warm water from your brushes and hands. Once dried on canvas, they become permanent and durable.' }
    ],
    giftPersona: ['creative', 'curious', 'relaxing']
  },
  {
    id: 'kit-baking',
    slug: 'baking-starter-kit',
    name: 'Baking Starter Kit',
    category: 'baking',
    badge: 'Popular',
    shortDescription: 'Basic baking tools, molds, specialty ingredients & foolproof recipes.',
    emotionalHook: 'Your first golden loaf & pastries — fill your kitchen with the aroma of home.',
    longDescription: 'Baking is magical chemistry when you have the right calibrated tools. We took away the stress of sunken cakes and dense dough with precision measuring spoons, non-stick silicone bake mats, a dough scraper, balloon whisk, and our foolproof Beginner Baker Handbook with 12 classic recipes.',
    price: 62,
    originalPrice: 78,
    rating: 4.88,
    reviewCount: 290,
    difficulty: 'Zero Experience Needed',
    timeToStart: '20 minutes to first bake in oven',
    primaryImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=80'
    ],
    inclusionsSummary: 'Stainless measuring set • Silicone baking mat • Dough whisk & scraper • 8" Cake mold • Recipe handbook',
    components: [
      { id: 'b-tools', name: 'Laser-Etched Stainless Measuring Cups', subtitle: 'Never rub off', description: 'Accurate dry and liquid measures for dependable recipes every time.', iconName: 'Compass', highlight: true },
      { id: 'b-mat', name: 'Platinum Silicone Non-Stick Mat', subtitle: 'Oven safe to 480°F', description: 'With diameter guide rings for rolling cookie dough, pizza crust, and pie dough.', iconName: 'Grid' },
      { id: 'b-scraper', name: 'Bench Scraper & Flexible Spatula', subtitle: 'Dough & batter control', description: 'Effortlessly divide sourdough and scrape every last drop of chocolate batter.', iconName: 'Tool' },
      { id: 'b-book', name: 'The Golden Crust Recipe Book', subtitle: '12 fail-proof classics', description: 'Step-by-step visual timers for banana bread, chocolate lava cake, and artisan focaccia.', iconName: 'BookOpen', highlight: true }
    ],
    guideChapters: [
      { step: 1, title: 'The Science of Measuring Flour', duration: '5 min', description: 'Why spooning into cups prevents dense, dry baked goods.', keyTakeaway: 'Proper measuring transforms texture.' },
      { step: 2, title: 'Your First Artisan Focaccia', duration: '30 min', description: 'Dimpling the dough with rosemary, olive oil, and sea salt.', keyTakeaway: 'Yeast fermentation creates heavenly honeycomb crumb.' }
    ],
    whyBenefits: [
      { title: 'Fail-Proof Ratios', description: 'Every recipe is tested 20+ times for guaranteed rise and golden crust.', icon: 'CheckCircle' },
      { title: 'Eco & Reusable', description: 'Eliminates disposable parchment paper with durable silicone mats.', icon: 'Shield' }
    ],
    reviews: [
      { id: 'r5', author: 'Liam W.', rating: 5, date: '1 week ago', title: 'My kids loved our Sunday bake session', comment: 'The focaccia recipe was so easy to follow, and the non-stick mat made cleanup take less than two minutes.', verified: true, firstProject: 'Rosemary Sea Salt Focaccia' }
    ],
    faqs: [
      { question: 'Is everything in the kit dishwasher safe?', answer: 'Yes, all stainless steel tools, silicone mats, and scrapers are 100% food-grade and dishwasher safe.' }
    ],
    giftPersona: ['creative', 'curious', 'relaxing']
  },
  {
    id: 'kit-travel',
    slug: 'travel-starter-kit',
    name: 'Travel Starter Kit',
    category: 'travel',
    badge: 'Staff Pick',
    shortDescription: 'Compression organizers, mini utilities, universal power & packing checklist.',
    emotionalHook: 'Your first seamless trip — pack light, travel smart, and stay organized anywhere.',
    longDescription: 'Turn packing chaos into effortless wanderlust. The Travel Starter Kit contains 4 ultralight compression packing cubes, a 150-country universal adapter with fast dual USB-C PD charging, TSA-approved silicone leakproof bottles, a digital luggage scale, and our pre-flight checklist.',
    price: 58,
    originalPrice: 75,
    rating: 4.89,
    reviewCount: 312,
    difficulty: 'Zero Experience Needed',
    timeToStart: 'Pack a 7-day carry-on in 15 mins',
    primaryImage: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80'
    ],
    inclusionsSummary: '4 Compression cubes • Universal global adapter • TSA bottle set • Luggage scale • Pre-flight packing list',
    components: [
      { id: 't-cubes', name: '4x Ripstop Compression Cubes', subtitle: 'Saves 60% luggage volume', description: 'Dual zipper system compresses sweaters and shirts into neat, wrinkle-free bricks.', iconName: 'Package', highlight: true },
      { id: 't-adapter', name: 'Global All-in-One Power Adapter', subtitle: 'US / UK / EU / AU plugs + USB-C', description: 'Power your laptop and phone simultaneously in over 150 countries safely.', iconName: 'Zap' },
      { id: 't-bottles', name: 'Leakproof Silicone Toiletry Set', subtitle: 'TSA 3.4oz compliant', description: 'Soft squeeze bottles with 3-layer anti-leak caps for shampoo, lotion, and serums.', iconName: 'Droplet' },
      { id: 't-checklist', name: 'Smart Traveler Essentials Blueprint', subtitle: 'Capsule wardrobe & tips', description: 'Never leave your charger or passport behind again with magnetic reusable checklists.', iconName: 'CheckSquare' }
    ],
    guideChapters: [
      { step: 1, title: 'The Carry-On Capsule Wardrobe', duration: '10 min', description: 'Choosing 8 versatile clothing items that make 14 stylish outfits.', keyTakeaway: 'Neutral layers match every occasion.' },
      { step: 2, title: 'Airport Security in 60 Seconds', duration: '5 min', description: 'How to arrange your liquids and tech for zero-stress security lines.', keyTakeaway: 'Top-tier cube placement speeds up your transit.' }
    ],
    whyBenefits: [
      { title: 'Zero Baggage Fees', description: 'Fit 7–10 days of travel into a single overhead carry-on bag effortlessly.', icon: 'CheckCircle' },
      { title: 'Durable Ripstop Fabric', description: 'Built with water-resistant honeycomb nylon and reinforced YKK zippers.', icon: 'Shield' }
    ],
    reviews: [
      { id: 'r6', author: 'Chloe B.', rating: 5, date: '2 weeks ago', title: 'Saved my trip to Japan!', comment: 'The universal adapter charged all our devices, and the compression cubes allowed me to pack 2 weeks in a small backpack. Essential for anyone who travels.', verified: true, firstProject: 'Tokyo & Kyoto 10-Day Solo Trip' }
    ],
    faqs: [
      { question: 'Will the adapter work for high-power hair dryers?', answer: 'The adapter supports up to 2000W devices with dual voltage (100V-250V), making it perfect for phones, laptops, and dual-voltage travel stylers.' }
    ],
    giftPersona: ['traveller', 'curious', 'student']
  },
  {
    id: 'kit-gym',
    slug: 'gym-starter-kit',
    name: 'Gym & Fitness Starter Kit',
    category: 'fitness',
    badge: 'Popular',
    shortDescription: 'Insulated bottle, resistance bands, microfiber towel & workout guide.',
    emotionalHook: 'Your first step into fitness — build consistent strength without gym anxiety.',
    longDescription: 'You do not need an intimidating gym membership or complex machines to build lean muscle and daily energy. The Gym Starter Kit delivers 5 progressive anti-snap resistance bands with ankle straps and door anchor, a vacuum-insulated stainless sports bottle, an antimicrobial gym towel, and a progressive 30-Day Foundational Workout Blueprint.',
    price: 49,
    originalPrice: 65,
    rating: 4.87,
    reviewCount: 275,
    difficulty: 'Zero Experience Needed',
    timeToStart: '10 mins to your first full-body workout',
    primaryImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80'
    ],
    inclusionsSummary: '5 Tube resistance bands • Door anchor & ankle straps • 24oz Insulated bottle • Cooling towel • 30-Day workout guide',
    components: [
      { id: 'g-bands', name: '5-Level Stackable Resistance Bands', subtitle: '10 lbs to 150 lbs total', description: 'Premium natural latex tubes with heavy-duty metal carabiners for home and travel workouts.', iconName: 'Activity', highlight: true },
      { id: 'g-bottle', name: '24oz Stainless Vacuum Bottle', subtitle: 'Keeps water cold 24 hrs', description: 'Sweat-free powder coat with leakproof chug lid and built-in carry loop.', iconName: 'Droplet' },
      { id: 'g-towel', name: 'Quick-Dry Antimicrobial Gym Towel', subtitle: 'Absorbs 4x its weight', description: 'Silky soft microfiber that dries 3x faster than cotton and repels gym odors.', iconName: 'Feather' },
      { id: 'g-plan', name: 'The 30-Day Momentum Workout Guide', subtitle: 'Form videos & daily routines', description: 'Simple 20-minute daily routines targeting upper body, lower body, and core with zero guesswork.', iconName: 'BookOpen', highlight: true }
    ],
    guideChapters: [
      { step: 1, title: 'Safe Anchor Setup', duration: '5 min', description: 'How to lock the door anchor securely without marking door frames.', keyTakeaway: 'Anchor stability gives 100% workout confidence.' },
      { step: 2, title: 'Proper Movement Mechanics', duration: '15 min', description: 'Engaging your core, maintaining spinal alignment, and breathing on exertion.', keyTakeaway: 'Form builds strength faster than brute resistance.' }
    ],
    whyBenefits: [
      { title: 'Gym in a Bag', description: 'Perform over 60 gym-quality exercises in your living room or hotel room.', icon: 'CheckCircle' },
      { title: 'Joint-Friendly Resistance', description: 'Linear elastic tension strengthens muscles while protecting joints.', icon: 'Shield' }
    ],
    reviews: [
      { id: 'r7', author: 'Alex M.', rating: 5, date: '4 days ago', title: 'Got me moving again after 3 years', comment: 'I was always nervous stepping into a public gym. These bands and the 30-day guide gave me the easiest routine to follow at home before work.', verified: true, firstProject: '30-Day Morning Habit Challenge' }
    ],
    faqs: [
      { question: 'Can the bands snap during heavy use?', answer: 'Our bands are constructed from 100% multi-layered Malaysian natural latex with inner safety cords to prevent overstretching and snapping.' }
    ],
    giftPersona: ['fitness', 'student', 'curious']
  },
  {
    id: 'kit-journaling',
    slug: 'journaling-starter-kit',
    name: 'Journaling Starter Kit',
    category: 'journaling',
    badge: 'Staff Pick',
    shortDescription: 'Hardcover dotted journal, archival pens, stickers, prompts & habit tracker.',
    emotionalHook: 'Your first step into mindfulness — clear mental clutter and design your days.',
    longDescription: 'Turn a blank page from a source of intimidation into your daily sanctuary. The Journaling Starter Kit pairs a lay-flat 160 GSM bleedproof vegan leather journal with 5 archival Japanese fineliner pens, aesthetic planning stickers, index tabs, and our acclaimed 90-Day Guided Reflection Prompt Book.',
    price: 45,
    originalPrice: 59,
    rating: 4.96,
    reviewCount: 388,
    difficulty: 'Zero Experience Needed',
    timeToStart: '5 minutes to your first morning brain dump',
    primaryImage: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=1200&q=80'
    ],
    inclusionsSummary: '160 GSM dotted notebook • 5 Archival fineliners • Minimalist sticker pack • Habit tracker stencil • Prompt cards',
    components: [
      { id: 'j-book', name: '160 GSM Bleedproof Dotted Journal', subtitle: 'Vegan Leather Lay-Flat', description: 'Heavy bamboo paper that never ghosts or bleeds, even with fountain pens and watercolors.', iconName: 'Book', highlight: true },
      { id: 'j-pens', name: '5 Japanese Archival Fineliners', subtitle: '0.1mm to 0.8mm nibs', description: 'Waterproof, fade-resistant black ink pens for smooth lettering and neat bullet points.', iconName: 'Edit3' },
      { id: 'j-stencil', name: 'Brass Habit Tracker Stencil & Ruler', subtitle: 'Quick layouts in seconds', description: 'Instantly trace calendar grids, habit trackers, and decorative banners without measuring.', iconName: 'Sliders' },
      { id: 'j-prompts', name: '52 Mindful Prompt Cards', subtitle: 'Never stare at a blank page', description: 'Deep questions on gratitude, values, focus, and future dreams to spark your writing.', iconName: 'HelpCircle', highlight: true }
    ],
    guideChapters: [
      { step: 1, title: 'The 5-Minute Morning Brain Dump', duration: '5 min', description: 'Pouring out anxious thoughts onto paper to free up mental clarity.', keyTakeaway: 'You write to declutter your mind, not to be perfect.' },
      { step: 2, title: 'The Bullet Method Simplified', duration: '10 min', description: 'Organizing tasks, notes, and events with 3 simple symbols.', keyTakeaway: 'Simplicity beats elaborate setups every time.' }
    ],
    whyBenefits: [
      { title: 'Zero Ghosting Paper', description: 'Ultra-thick 160 GSM paper prevents ink from bleeding through pages.', icon: 'CheckCircle' },
      { title: 'Stress Reduction', description: 'Clinically shown to lower daily anxiety and improve cognitive focus.', icon: 'Heart' }
    ],
    reviews: [
      { id: 'r8', author: 'Nadia R.', rating: 5, date: '3 days ago', title: 'The prompt cards cured my blank page freeze', comment: 'I always gave up after 2 days because I didn’t know what to write. The cards make journaling feel like a warm conversation with a friend.', verified: true, firstProject: '30-Day Gratitude Practice' }
    ],
    faqs: [
      { question: 'Is the paper fountain pen friendly?', answer: 'Yes! The 160 GSM ultra-dense paper is engineered specifically to prevent bleedthrough and feathering with all ink pens.' }
    ],
    giftPersona: ['creative', 'curious', 'relaxing', 'student']
  },
  {
    id: 'kit-plants',
    slug: 'plant-parent-starter-kit',
    name: 'Plant Parent Starter Kit',
    category: 'plants',
    badge: 'Bestseller',
    shortDescription: 'Beginner plants, terracotta pots, mini tools, soil & plant-care guide.',
    emotionalHook: 'Your first indoor jungle — keep green plants thriving with zero guesswork.',
    longDescription: 'No green thumb? No problem! The Plant Parent Starter Kit eliminates the trial and error of keeping houseplants alive. Receive 3 resilient starter cuttings (Snake Plant, Pothos & ZZ), drainage-enabled terracotta pots, organic nutrient-rich potting mix, a precision soil moisture meter, and our foolproof Plant Care Compass.',
    price: 52,
    originalPrice: 68,
    rating: 4.91,
    reviewCount: 364,
    difficulty: 'Zero Experience Needed',
    timeToStart: '15 minutes to repot your first plant',
    primaryImage: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=1200&q=80'
    ],
    inclusionsSummary: '3 Hardy starter varieties • Terracotta drainage pots • Custom organic soil • Soil moisture meter • Care guide',
    components: [
      { id: 'pl-meter', name: 'Digital 3-in-1 Soil Moisture Meter', subtitle: 'Never overwater again', description: 'Instantly reads root moisture, soil pH, and sunlight levels with zero batteries required.', iconName: 'Compass', highlight: true },
      { id: 'pl-pots', name: '2 Handcrafted Terracotta Pots & Saucers', subtitle: 'Natural porous clay', description: 'Prevents root rot by allowing natural air circulation and moisture drainage.', iconName: 'Layers' },
      { id: 'pl-tools', name: '3-Piece Mini Gardening Tool Set', subtitle: 'Shovel, Rake & Pruning shears', description: 'Rust-proof stainless mini tools perfect for repotting small indoor plants cleanly.', iconName: 'Tool' },
      { id: 'pl-guide', name: 'The "Don’t Kill It" Plant Care Guide', subtitle: 'Lighting & watering compass', description: 'Simple diagnosing charts: yellow leaves, drooping stems, and light placement tips.', iconName: 'BookOpen', highlight: true }
    ],
    guideChapters: [
      { step: 1, title: 'The Golden Rule of Watering', duration: '5 min', description: 'Why measuring root moisture stops 95% of plant deaths.', keyTakeaway: 'When in doubt, wait 2 more days before watering.' },
      { step: 2, title: 'Finding the Right Window', duration: '10 min', description: 'Direct vs. bright indirect sunlight explained with simple hand-shadow tests.', keyTakeaway: 'Indirect bright light makes leaves vibrant and green.' }
    ],
    whyBenefits: [
      { title: 'Hardy Low-Light Varieties', description: 'Carefully chosen species that thrive even if you forget to water them.', icon: 'CheckCircle' },
      { title: 'Battery-Free Meter', description: 'Take the guesswork out of watering by testing root depth directly.', icon: 'Zap' }
    ],
    reviews: [
      { id: 'r9', author: 'Jordan K.', rating: 5, date: '1 week ago', title: 'I finally didn’t kill my plant!', comment: 'The moisture meter is a game changer. I used to overwater everything. My pothos is growing new vines every week now!', verified: true, firstProject: 'Living Room Greenery Corner' }
    ],
    faqs: [
      { question: 'What if my plant arrives damaged during transit?', answer: 'We guarantee 100% safe live delivery! If any plant arrives distressed, we ship a fresh replacement immediately for free.' }
    ],
    giftPersona: ['plant-parent', 'curious', 'relaxing']
  },
  {
    id: 'kit-diy-decor',
    slug: 'diy-decor-kit',
    name: 'DIY Décor Starter Kit',
    category: 'diy-decor',
    badge: 'Trending',
    shortDescription: 'Air-dry clay, sculpting tools, waterproof sealants & aesthetic inspiration.',
    emotionalHook: 'Your first handmade home décor — craft ceramic dishes, vases & sculptural art.',
    longDescription: 'Infuse your living space with custom handcrafted charm. The DIY Décor Starter Kit comes with 2kg of silky air-dry pottery clay, 8 wooden and loop sculpting tools, waterproof matte sealants, pastel acrylic paints, and step-by-step aesthetic room décor inspiration blueprints.',
    price: 56,
    originalPrice: 70,
    rating: 4.93,
    reviewCount: 310,
    difficulty: 'Zero Experience Needed',
    timeToStart: '20 minutes to sculpt your first jewelry dish',
    primaryImage: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80'
    ],
    inclusionsSummary: '2kg Air-dry sculpting clay • 8 Sculpting tools • Waterproof varnish • 6 Earthy paints • Project cards',
    components: [
      { id: 'd-clay', name: '2kg Ultra-Smooth Air-Dry Clay', subtitle: 'No kiln or oven required', description: 'Hardens naturally in 24 hours into a stone-hard ceramic finish ready for paint and varnish.', iconName: 'Feather', highlight: true },
      { id: 'd-tools', name: '8 Boxwood & Wire Sculpting Tools', subtitle: 'Smooth, carve & detail', description: 'Carve textures, smooth edges, and slice clean geometric silhouettes effortlessly.', iconName: 'Tool' },
      { id: 'd-varnish', name: 'Waterproof Matte Ceramic Sealant', subtitle: 'Moisture and stain protection', description: 'Gives your finished dishes, candle holders, and plant trays a durable showroom finish.', iconName: 'Shield' },
      { id: 'd-cards', name: '10 Minimalist Room Décor Cards', subtitle: 'Trinket trays, arches & vases', description: 'Visual scale blueprints for crafting popular Scandi-style home accents.', iconName: 'BookOpen', highlight: true }
    ],
    guideChapters: [
      { step: 1, title: 'Conditioning Clay Without Cracking', duration: '5 min', description: 'Working moisture evenly into the clay for pliable sculpting.', keyTakeaway: 'Smooth surfaces with a damp sponge for flawless curves.' },
      { step: 2, title: 'Project: Scalloped Jewelry Dish', duration: '25 min', description: 'Rolling out the slab, cutting the wavy edge, and pinching the rim.', keyTakeaway: 'Pinch pottery is meditative and forgiving.' }
    ],
    whyBenefits: [
      { title: 'No Kiln Needed', description: 'Cures completely at room temperature in 24 to 48 hours without specialized baking.', icon: 'CheckCircle' },
      { title: 'Display-Ready Art', description: 'Create functional décor you will actually love displaying on coffee tables.', icon: 'Sparkles' }
    ],
    reviews: [
      { id: 'r10', author: 'Sophie T.', rating: 5, date: '6 days ago', title: 'Made the cutest candle holders for my room', comment: 'Such a therapeutic weekend activity with friends. The sealant worked great and looks like real stoneware ceramics!', verified: true, firstProject: 'Wavy Coaster Set' }
    ],
    faqs: [
      { question: 'Is air-dry clay food safe?', answer: 'While our matte varnish makes pieces water-resistant for planters, coasters, and jewelry dishes, air-dry clay is not recommended for direct food or hot soup contact.' }
    ],
    giftPersona: ['creative', 'curious', 'relaxing']
  },
  {
    id: 'kit-college',
    slug: 'college-starter-kit',
    name: 'College Starter Kit',
    category: 'college',
    badge: 'Popular',
    shortDescription: 'Focus planner, desk cable management, highlighters & semester survival guide.',
    emotionalHook: 'Your first semester made easy — ace your classes and stay organized without burnout.',
    longDescription: 'Starting college or university is an exhilarating leap that quickly gets overwhelming without a clear organizational system. The College Starter Kit compiles a semester-long academic GPA planner, magnetic cable organizers, dual-tip pastel highlighters, study flashcard binders, and our "Freshman to Honors" Academic Blueprint.',
    price: 49,
    originalPrice: 65,
    rating: 4.86,
    reviewCount: 230,
    difficulty: 'Zero Experience Needed',
    timeToStart: 'Set up your entire semester in 20 mins',
    primaryImage: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80'
    ],
    inclusionsSummary: 'Semester academic planner • 6 Pastel highlighters • 300 Ring flashcards • Magnetic cable dock • Study strategy guide',
    components: [
      { id: 'col-planner', name: 'Semester Academic GPA Planner', subtitle: 'Syllabus breakdown & exams', description: 'Track assignments, finals schedules, project milestones, and study sessions effortlessly.', iconName: 'Calendar', highlight: true },
      { id: 'col-pens', name: '6 Dual-Tip Aesthetic Pastel Highlighters', subtitle: 'No-bleed chisel & fine tips', description: 'Soft muted tones that highlight textbook notes clearly without hurting your eyes.', iconName: 'PenTool' },
      { id: 'col-dock', name: 'Magnetic Desktop Cable Dock', subtitle: 'Declutters study desks', description: 'Keeps laptop chargers, phone cords, and headphones neatly positioned at arm’s reach.', iconName: 'Sliders' },
      { id: 'col-guide', name: 'The "Ace Your Exams" Strategy Guide', subtitle: 'Active recall & spaced repetition', description: 'Evidence-based study hacks to study less hours while retaining significantly higher grades.', iconName: 'BookOpen', highlight: true }
    ],
    guideChapters: [
      { step: 1, title: 'The Syllabus Matrix Setup', duration: '15 min', description: 'Transferring every exam date and paper deadline into your master planner.', keyTakeaway: 'Proactive scheduling eliminates all-nighters.' },
      { step: 2, title: 'Spaced Repetition Flashcards', duration: '10 min', description: 'How to review cards with the Leitner box system for long-term memory.', keyTakeaway: 'Testing yourself beats re-reading notes 3x over.' }
    ],
    whyBenefits: [
      { title: 'Zero Exam Panic', description: 'Designed by honor graduates to replace chaotic cramming with steady clarity.', icon: 'CheckCircle' },
      { title: 'Dorm & Desk Ready', description: 'Compact, aesthetic essentials that keep tight dorm spaces neat.', icon: 'Sparkles' }
    ],
    reviews: [
      { id: 'r11', author: 'Ethan V.', rating: 5, date: '2 weeks ago', title: 'Gift from my parents before freshman year', comment: 'I use the planner every single morning. It helped me land a 3.8 GPA in my first semester of engineering.', verified: true, firstProject: 'Dean’s List Semester' }
    ],
    faqs: [
      { question: 'Is the planner undated so I can start anytime?', answer: 'Yes! The planner is 100% undated, allowing you to begin at the start of Fall, Spring, Summer, or mid-semester without wasting pages.' }
    ],
    giftPersona: ['student', 'curious', 'creative']
  }
];

export const GIFT_PERSONAS_DATA: GiftPersona[] = [
  {
    id: 'creative',
    title: 'For the Creative Soul',
    emoji: '🎨',
    description: 'Give them the tools to paint, sculpt, or design their next self-expressive masterpiece.',
    recommendedCategory: 'painting',
    sampleQuote: '“I want to make something with my hands this weekend.”',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'traveller',
    title: 'For the Wanderer & Explorer',
    emoji: '✈️',
    description: 'For the friend who always has a flight booked and loves discovering new places.',
    recommendedCategory: 'travel',
    sampleQuote: '“My bags are packed for the next adventure.”',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'fitness',
    title: 'For the Active Mover',
    emoji: '🏋️',
    description: 'Empower their fitness momentum with portable equipment and daily guided routines.',
    recommendedCategory: 'fitness',
    sampleQuote: '“I want to feel energized, strong, and consistent.”',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'plant-parent',
    title: 'For the Plant Parent',
    emoji: '🌱',
    description: 'The gift of thriving greenery with easy-care tools and foolproof hydration guidance.',
    recommendedCategory: 'plants',
    sampleQuote: '“I want a home filled with peaceful green life.”',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'student',
    title: 'For the Student & Scholar',
    emoji: '🎓',
    description: 'Help them start the term organized, confident, and ahead of the study curve.',
    recommendedCategory: 'college',
    sampleQuote: '“I want to master my classes without burning out.”',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'curious',
    title: 'For the Curious Learner',
    emoji: '✨',
    description: 'For someone who loves trying anything new — from photography to content creation.',
    recommendedCategory: 'photography',
    sampleQuote: '“I wonder how this works — I’d love to try it.”',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80',
  },
];

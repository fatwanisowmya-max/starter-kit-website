import { QuizQuestion, CategorySlug, StarterKit } from '../types';
import { STARTER_KITS_DATA } from './kitsData';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'What sounds most fun right now?',
    subtext: 'Pick the feeling that makes your eyes light up the most.',
    options: [
      {
        text: 'Creating & Making',
        subtitle: 'Painting, crafting, hands-on artistry',
        emoji: '🎨',
        categories: ['painting', 'diy-decor', 'baking'],
      },
      {
        text: 'Exploring & Capturing',
        subtitle: 'Seeing the world, documenting moments',
        emoji: '📷',
        categories: ['photography', 'travel', 'content-creation'],
      },
      {
        text: 'Staying Active & Moving',
        subtitle: 'Building physical energy, daily momentum',
        emoji: '🏋️',
        categories: ['fitness'],
      },
      {
        text: 'Being Productive & Organized',
        subtitle: 'Clearing mental clutter, conquering goals',
        emoji: '⚡',
        categories: ['journaling', 'college', 'content-creation'],
      },
      {
        text: 'Relaxing & Nurturing',
        subtitle: 'Quiet mindfulness, growing slow hobbies',
        emoji: '🌱',
        categories: ['plants', 'journaling', 'painting'],
      },
    ],
  },
  {
    id: 2,
    question: 'Where would you rather spend your time?',
    subtext: 'Your ideal creative sanctuary or environment.',
    options: [
      {
        text: 'Cozy At Home',
        subtitle: 'Living room floor, kitchen counter, quiet desk',
        emoji: '🏡',
        categories: ['painting', 'baking', 'plants', 'diy-decor', 'journaling'],
      },
      {
        text: 'Outdoors in Fresh Air',
        subtitle: 'Parks, nature trails, sunny balconies',
        emoji: '🌲',
        categories: ['photography', 'fitness', 'plants', 'travel'],
      },
      {
        text: 'On the Move & Exploring',
        subtitle: 'New cities, cafes, weekend trips',
        emoji: '✈️',
        categories: ['travel', 'photography', 'journaling'],
      },
      {
        text: 'Anywhere with Good Vibes',
        subtitle: 'Adaptive, portable, ready anywhere',
        emoji: '✨',
        categories: ['content-creation', 'college', 'fitness'],
      },
    ],
  },
  {
    id: 3,
    question: "What's your experience level?",
    subtext: 'We curate everything so zero experience is 100% fine!',
    options: [
      {
        text: 'Total Beginner',
        subtitle: 'Never tried this before — need step-by-step guidance',
        emoji: '🌱',
        categories: ['painting', 'plants', 'baking', 'photography', 'diy-decor'],
      },
      {
        text: "I've tried it once or twice",
        subtitle: 'Know a tiny bit, but never had the right tools',
        emoji: '💡',
        categories: ['fitness', 'journaling', 'content-creation', 'travel'],
      },
      {
        text: 'Ready for a fresh, curated restart',
        subtitle: 'Want an all-in-one upgrade with zero clutter',
        emoji: '🚀',
        categories: ['college', 'content-creation', 'travel', 'fitness'],
      },
    ],
  },
  {
    id: 4,
    question: "What's your ideal starting session?",
    subtext: 'How you like to ease into a new hobby.',
    options: [
      {
        text: 'A quick 15-minute daily ritual',
        subtitle: 'Consistent, bite-sized moments of focus',
        emoji: '☕',
        categories: ['journaling', 'fitness', 'plants'],
      },
      {
        text: 'A fun, immersive weekend project',
        subtitle: 'Put on some music and lose track of time',
        emoji: '🎵',
        categories: ['painting', 'baking', 'diy-decor', 'photography'],
      },
      {
        text: 'A long-term lifestyle upgrade',
        subtitle: 'Building a lasting habit or creative identity',
        emoji: '🌟',
        categories: ['content-creation', 'college', 'travel', 'fitness'],
      },
    ],
  },
];

export interface RecommendationResult {
  recommendedKit: StarterKit;
  headline: string;
  reason: string;
  matchedCategories: CategorySlug[];
  secondaryKit?: StarterKit;
}

export function calculateQuizResult(selectedAnswers: number[]): RecommendationResult {
  const categoryScores: Record<CategorySlug, number> = {
    photography: 0,
    painting: 0,
    baking: 0,
    travel: 0,
    fitness: 0,
    journaling: 0,
    plants: 0,
    'content-creation': 0,
    'diy-decor': 0,
    college: 0,
  };

  selectedAnswers.forEach((optionIndex, questionIndex) => {
    const question = QUIZ_QUESTIONS[questionIndex];
    if (question && question.options[optionIndex]) {
      const option = question.options[optionIndex];
      option.categories.forEach((cat, idx) => {
        // Higher weight for top-listed category
        categoryScores[cat] = (categoryScores[cat] || 0) + (3 - idx > 0 ? 3 - idx : 1);
      });
    }
  });

  const sortedCategories = (Object.keys(categoryScores) as CategorySlug[]).sort(
    (a, b) => categoryScores[b] - categoryScores[a]
  );

  const topCategory = sortedCategories[0] || 'painting';
  const secondCategory = sortedCategories[1] || 'photography';

  const matchedKit = STARTER_KITS_DATA.find((k) => k.category === topCategory) || STARTER_KITS_DATA[0];
  const secondaryKit = STARTER_KITS_DATA.find((k) => k.category === secondCategory) || STARTER_KITS_DATA[1];

  const reasonsMap: Record<CategorySlug, { headline: string; reason: string }> = {
    painting: {
      headline: 'Your Starter Kit: Painting 🎨',
      reason: 'You seem like someone who thrives on hands-on visual creation and relaxing, screen-free focus. Painting provides a rich, tactile outlet to express ideas with zero pressure.',
    },
    photography: {
      headline: 'Your Starter Kit: Photography 📷',
      reason: 'You have a keen eye for noticing beauty in the world and love capturing memorable moments. This kit equips you to capture breathtaking visual stories without gear confusion.',
    },
    'content-creation': {
      headline: 'Your Starter Kit: Content Creation 🎬',
      reason: 'You have exciting ideas and stories to share with an audience. With studio-quality audio, flattering light, and scripting frameworks, you will publish your first video with absolute confidence.',
    },
    baking: {
      headline: 'Your Starter Kit: Baking 🧁',
      reason: 'You enjoy warm, cozy home creations that bring joy to your senses and friends. Our fail-proof tools and guided recipes guarantee delicious golden bakes on your very first try.',
    },
    travel: {
      headline: 'Your Starter Kit: Travel ✈️',
      reason: 'You love exploring new surroundings and crave seamless, stress-free adventures. This kit keeps you ultra-organized, ultralight, and ready for any weekend getaway.',
    },
    fitness: {
      headline: 'Your Starter Kit: Gym & Fitness 🏋️',
      reason: 'You want to build energetic, consistent physical momentum without gym intimidation. The progressive resistance bands and 30-day guide make working out anywhere simple and fun.',
    },
    journaling: {
      headline: 'Your Starter Kit: Journaling ✍️',
      reason: 'You value clarity of mind, mindfulness, and intentional daily living. The thick bleedproof journal, Japanese pens, and prompt cards turn writing into your favorite daily sanctuary.',
    },
    plants: {
      headline: 'Your Starter Kit: Plant Parent 🌱',
      reason: 'You want to bring soothing green life into your living space without worrying about dead plants. The moisture meter and resilient cuttings make plant care effortless.',
    },
    'diy-decor': {
      headline: 'Your Starter Kit: DIY Décor 🏠',
      reason: 'You love personalizing your living space with unique aesthetic touches. Air-dry clay sculpting gives you the freedom to create chic ceramics without a kiln.',
    },
    college: {
      headline: 'Your Starter Kit: College Life 🎓',
      reason: 'You want to conquer your academic goals with calm confidence and organized study systems from day one.',
    },
  };

  const meta = reasonsMap[topCategory] || {
    headline: `Your Starter Kit: ${matchedKit.name}`,
    reason: 'A perfectly balanced starting point based on your creative energy and ideal routine.',
  };

  return {
    recommendedKit: matchedKit,
    headline: meta.headline,
    reason: meta.reason,
    matchedCategories: sortedCategories.slice(0, 3),
    secondaryKit,
  };
}

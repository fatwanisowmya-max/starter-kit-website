import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  RotateCcw, 
  ShoppingBag, 
  CheckCircle2, 
  Star, 
  Compass, 
  Eye
} from 'lucide-react';
import { QUIZ_QUESTIONS, calculateQuizResult, RecommendationResult } from '../data/quizData';
import { StarterKit } from '../types';
import { useCart } from '../context/CartContext';

interface FindKitQuizProps {
  onSelectKit: (kit: StarterKit) => void;
  inline?: boolean;
}

export const FindKitQuiz: React.FC<FindKitQuizProps> = ({ onSelectKit, inline = false }) => {
  const { addToCart, openQuickView } = useCart();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<RecommendationResult | null>(null);

  const handleSelectOption = (optionIndex: number) => {
    const updated = [...selectedAnswers];
    updated[currentStep] = optionIndex;
    setSelectedAnswers(updated);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate results
      const res = calculateQuizResult(updated);
      setResult(res);
      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#F59E0B', '#10B981', '#3B82F6', '#EC4899'],
        });
      } catch (e) {
        // Confetti fallback
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelectedAnswers([]);
    setResult(null);
  };

  const currentQ = QUIZ_QUESTIONS[currentStep];
  const progressPercent = Math.round(((currentStep + (result ? 1 : 0)) / QUIZ_QUESTIONS.length) * 100);

  return (
    <div 
      id="find-your-kit-quiz-container"
      className={`relative ${
        inline 
          ? 'bg-amber-500/10 rounded-3xl p-6 sm:p-10 border border-amber-300/60 shadow-lg' 
          : 'bg-white rounded-3xl p-6 sm:p-12 border border-stone-200 shadow-xl max-w-4xl mx-auto'
      }`}
    >
      {/* Decorative sparkle */}
      <div className="absolute top-6 right-6 text-amber-400 opacity-60">
        <Sparkles className="w-8 h-8" />
      </div>

      {!result ? (
        <div>
          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-800 bg-amber-100/90 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5 mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>1-Minute Hobby Matcher</span>
            </span>
            <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-[#1E1B18] tracking-tight">
              Not sure where to start?
            </h3>
            <p className="text-stone-700 text-xs sm:text-sm mt-1.5">
              Tell us what sounds exciting. We’ll find your ideal starter point.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex items-center justify-between text-xs font-bold text-stone-700 mb-1.5">
              <span>Question {currentStep + 1} of {QUIZ_QUESTIONS.length}</span>
              <span>{progressPercent}% completed</span>
            </div>
            <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-amber-400 h-full rounded-full transition-all duration-300 ease-out"
                style={{ width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Text */}
          <div className="text-center mb-8">
            <h4 className="font-display font-bold text-xl sm:text-2xl text-[#1E1B18]">
              {currentQ.question}
            </h4>
            <p className="text-stone-700 text-xs sm:text-sm mt-1">
              {currentQ.subtext}
            </p>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-2xl mx-auto">
            {currentQ.options.map((option, idx) => {
              const isSelected = selectedAnswers[currentStep] === idx;
              return (
                <button
                  key={option.text}
                  id={`quiz-q${currentQ.id}-opt${idx}`}
                  onClick={() => handleSelectOption(idx)}
                  className={`p-4 sm:p-5 rounded-2xl border text-left transition-all duration-200 flex items-start gap-3.5 group relative ${
                    isSelected
                      ? 'bg-[#1E1B18] text-white border-[#1E1B18] shadow-md scale-[1.01]'
                      : 'bg-white hover:bg-stone-50 border-stone-200/90 text-stone-800 hover:border-stone-400 shadow-xs'
                  }`}
                >
                  <span className="text-2xl sm:text-3xl shrink-0 group-hover:scale-110 transition-transform">
                    {option.emoji}
                  </span>
                  <div>
                    <div className={`font-bold text-sm sm:text-base leading-snug ${isSelected ? 'text-white' : 'text-[#1E1B18]'}`}>
                      {option.text}
                    </div>
                    {option.subtitle && (
                      <div className={`text-xs mt-0.5 leading-relaxed ${isSelected ? 'text-stone-300' : 'text-stone-700'}`}>
                        {option.subtitle}
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="mt-8 pt-6 border-t border-stone-200/70 flex items-center justify-between max-w-2xl mx-auto">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className={`text-xs font-bold flex items-center gap-1 px-3 py-2 rounded-xl transition-colors ${
                currentStep === 0 
                  ? 'text-stone-400 cursor-not-allowed opacity-0' 
                  : 'text-stone-700 hover:text-[#1E1B18] hover:bg-stone-100'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            <span className="text-xs text-stone-700 font-medium">
              Pick the option that calls to you
            </span>
          </div>

        </div>
      ) : (
        /* Result Screen */
        <div className="animate-in fade-in zoom-in-95 duration-400 text-center max-w-3xl mx-auto">
          
          <div className="inline-flex items-center gap-2 bg-emerald-100 border border-emerald-300 text-emerald-900 font-bold text-xs px-3.5 py-1 rounded-full mb-3 shadow-xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Hobby Match Found!</span>
          </div>

          <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#1E1B18] tracking-tight">
            {result.headline}
          </h3>

          <p className="text-stone-700 text-sm sm:text-base mt-3 max-w-xl mx-auto leading-relaxed">
            "{result.reason}"
          </p>

          {/* Recommended Kit Highlight Card */}
          <div className="mt-8 bg-[#FAF8F5] rounded-3xl p-6 border border-stone-200/80 shadow-md text-left flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-56 aspect-4/3 rounded-2xl overflow-hidden bg-stone-100 shrink-0 relative">
              <img
                src={result.recommendedKit.primaryImage}
                alt={result.recommendedKit.name}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-2.5 left-2.5 bg-amber-400 text-stone-950 font-black text-[10px] uppercase px-2 py-0.5 rounded-full">
                Top Match
              </span>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 text-xs text-stone-700 mb-1">
                <div className="flex text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                </div>
                <span className="font-bold text-stone-800">{result.recommendedKit.rating}</span>
                <span>({result.recommendedKit.reviewCount} beginner reviews)</span>
              </div>

              <h4 className="font-display font-extrabold text-xl text-[#1E1B18]">
                {result.recommendedKit.name}
              </h4>

              <p className="text-xs text-stone-700 mt-1 line-clamp-2">
                {result.recommendedKit.shortDescription}
              </p>

              <div className="mt-3 bg-white p-2.5 rounded-xl border border-stone-200/60 text-xs text-stone-700 font-medium">
                <span className="font-bold text-stone-900 block text-[11px] uppercase tracking-wider mb-0.5">Inside your box:</span>
                {result.recommendedKit.inclusionsSummary}
              </div>

              <div className="mt-4 pt-3 border-t border-stone-200/60 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display font-extrabold text-2xl text-[#1E1B18]">
                    ${result.recommendedKit.price}
                  </span>
                  {result.recommendedKit.originalPrice && (
                    <span className="text-xs text-stone-600 line-through">
                      ${result.recommendedKit.originalPrice}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    id="quiz-result-peek-btn"
                    onClick={() => openQuickView(result.recommendedKit)}
                    className="p-2.5 rounded-xl bg-stone-200/70 hover:bg-stone-300 text-stone-800 transition-colors"
                    title="Peek inside"
                  >
                    <Eye className="w-4 h-4" />
                  </button>

                  <button
                    id="quiz-result-cart-btn"
                    onClick={() => addToCart(result.recommendedKit, 1)}
                    className="p-2.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-stone-950 font-bold transition-colors flex items-center gap-1.5 text-xs"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </button>

                  <button
                    id="quiz-result-explore-btn"
                    onClick={() => onSelectKit(result.recommendedKit)}
                    className="bg-[#1E1B18] hover:bg-stone-800 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition-colors flex items-center gap-1 shadow-sm"
                  >
                    <span>Explore Your Kit</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Reset & Alternative options */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              id="quiz-retake-btn"
              onClick={handleReset}
              className="text-xs font-bold text-stone-700 hover:text-[#1E1B18] flex items-center gap-1.5 py-2 px-3 rounded-lg hover:bg-stone-100 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retake Quiz</span>
            </button>

            {result.secondaryKit && (
              <span className="text-xs text-stone-700">
                Runner up:{' '}
                <button
                  onClick={() => onSelectKit(result.secondaryKit!)}
                  className="font-bold text-[#1E1B18] hover:underline"
                >
                  {result.secondaryKit.name}
                </button>
              </span>
            )}
          </div>

        </div>
      )}
    </div>
  );
};

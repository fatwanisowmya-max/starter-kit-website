import React from 'react';
import { FindKitQuiz } from '../components/FindKitQuiz';
import { StarterKit, ActivePage } from '../types';
import { Compass, Sparkles, ArrowLeft, CheckCircle2 } from 'lucide-react';

interface QuizViewProps {
  onSelectKit: (kit: StarterKit) => void;
  setActivePage: (page: ActivePage) => void;
}

export const QuizView: React.FC<QuizViewProps> = ({ onSelectKit, setActivePage }) => {
  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Top Breadcrumb */}
      <div className="mb-6">
        <button
          onClick={() => {
            setActivePage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-500 hover:text-stone-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Quiz Card */}
      <div className="mb-14">
        <FindKitQuiz onSelectKit={onSelectKit} inline={false} />
      </div>

      {/* Why Take the Quiz Section */}
      <div className="max-w-4xl mx-auto bg-stone-100/80 rounded-3xl p-8 sm:p-10 border border-stone-200">
        <h3 className="font-display font-bold text-xl text-[#1E1B18] text-center mb-6">
          Why start with our Hobby Matcher?
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-white text-amber-500 flex items-center justify-center mx-auto shadow-2xs">
              <Compass className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-stone-900">Zero Guesswork</h4>
            <p className="text-xs text-stone-600">
              Matches your current energy, living space, and creative curiosity.
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-white text-emerald-500 flex items-center justify-center mx-auto shadow-2xs">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-stone-900">100% Starter Ready</h4>
            <p className="text-xs text-stone-600">
              No previous experience required for any of our recommended kits.
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-white text-sky-500 flex items-center justify-center mx-auto shadow-2xs">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-stone-900">Unbox in 3 Days</h4>
            <p className="text-xs text-stone-600">
              Fast, carbon-neutral shipping with everything inside a single box.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

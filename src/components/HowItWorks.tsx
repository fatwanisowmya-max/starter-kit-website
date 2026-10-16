import React from 'react';
import { Sparkles, Package, Play, Heart, ArrowRight } from 'lucide-react';
import { ActivePage } from '../types';

interface HowItWorksProps {
  setActivePage?: (page: ActivePage) => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ setActivePage }) => {
  const steps = [
    {
      num: '01',
      title: 'Choose',
      subtitle: 'Pick what you’ve always wanted to try',
      description: 'Browse our curated starter kits or take our 1-minute quiz to discover your ideal starting point.',
      icon: <Sparkles className="w-6 h-6 text-amber-500" />,
      color: 'bg-amber-100 text-amber-900 border-amber-200',
    },
    {
      num: '02',
      title: 'Unbox',
      subtitle: 'Get curated essentials in one kit',
      description: 'Open a thoughtfully organized box with only the high-quality tools you need — no useless clutter.',
      icon: <Package className="w-6 h-6 text-emerald-500" />,
      color: 'bg-emerald-100 text-emerald-900 border-emerald-200',
    },
    {
      num: '03',
      title: 'Start',
      subtitle: 'Follow the beginner guidebook',
      description: 'Forget 10-hour video tutorials. Jump straight into simple, visual steps that get you results in minutes.',
      icon: <Play className="w-6 h-6 text-sky-500" />,
      color: 'bg-sky-100 text-sky-900 border-sky-200',
    },
    {
      num: '04',
      title: 'Make It Yours',
      subtitle: 'Experiment & build your lifestyle',
      description: 'Finish your first project with pride and turn your curious impulse into a lasting creative outlet.',
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      color: 'bg-rose-100 text-rose-900 border-rose-200',
    },
  ];

  return (
    <section className="py-18 bg-white border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-800 bg-amber-100/90 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Simple 4-Step Journey</span>
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1E1B18] tracking-tight">
            How It Works
          </h2>
          <p className="text-stone-700 text-sm sm:text-base mt-3 leading-relaxed">
            We removed the friction between "I'd love to try that" and "I'm actually doing this."
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              id={`step-card-${step.num}`}
              className="relative bg-[#FAF8F5] rounded-3xl p-6 sm:p-7 border border-stone-200/80 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                {/* Step number badge & icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display font-black text-2xl tracking-tight text-stone-700">
                    {step.num}
                  </span>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-2xs group-hover:scale-110 transition-transform ${step.color}`}>
                    {step.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-xl text-[#1E1B18] group-hover:text-amber-800 transition-colors">
                  {step.title}
                </h3>
                
                <h4 className="text-xs font-bold text-stone-700 mt-1 uppercase tracking-wider">
                  {step.subtitle}
                </h4>

                <p className="text-xs sm:text-sm text-stone-700 mt-3 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Step indicator footer */}
              <div className="mt-6 pt-4 border-t border-stone-200/60 flex items-center gap-2 text-xs font-semibold text-stone-700">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>Step {idx + 1} of 4</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom banner CTA */}
        {setActivePage && (
          <div className="mt-12 text-center">
            <button
              id="how-it-works-quiz-cta"
              onClick={() => {
                setActivePage('quiz');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-[#1E1B18] hover:bg-stone-800 text-white text-sm font-bold px-7 py-3.5 rounded-2xl shadow-sm hover:shadow-md transition-all active:scale-95"
            >
              <span>Not sure which one to choose? Take the Quiz</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

import { X, Check } from 'lucide-react';

const traditional = [
  'Reactive reporting — damage after it happens',
  'Siloed dashboards that do not talk to each other',
  'Decisions based on intuition and manual analysis',
  'Black-box alerts with no explanation',
  'Fragmented tools that need an IT team to maintain',
];

const stablescore = [
  'Proactive recommendations before risk hits',
  'Unified decision layer across all systems',
  'Continuous AI monitoring with explainable output',
  'Every recommendation includes root-cause context',
  'One platform, deployed in days, no coding required',
];

export default function ComparisonSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 relative overflow-hidden">
      <div className="absolute bottom-[10%] left-[-5%] w-[300px] h-[300px] rounded-full bg-accent/[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">WHY STABLESCORE</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight">
            Not another dashboard. Not another chatbot.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-0 rounded-2xl border border-border overflow-hidden">
          <div className="bg-bg-light p-8">
            <h3 className="text-lg font-semibold text-navy-900 mb-6">Traditional Operational Tools</h3>
            <ul className="space-y-4">
              {traditional.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-muted">
                  <X size={16} className="text-red-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-navy-900 p-8">
            <h3 className="text-lg font-semibold text-white mb-6">StableScore AI</h3>
            <ul className="space-y-4">
              {stablescore.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-200">
                  <Check size={16} className="text-green-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

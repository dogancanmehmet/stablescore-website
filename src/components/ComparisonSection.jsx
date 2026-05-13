import { X, Check, AlertTriangle, Wallet, Clock, Code2 } from 'lucide-react';

const traditional = [
  { text: '€50K+ annual license fee', icon: Wallet },
  { text: '6-12 month implementation', icon: Clock },
  { text: 'Coding / IT team required', icon: Code2 },
  { text: 'Only shows reports', icon: AlertTriangle },
  { text: 'Reactive, post-damage alerts', icon: AlertTriangle },
];

const stablescore = [
  'Starting at €299/month',
  '48-hour setup',
  'No code, no IT needed',
  'Ready action recommendations',
  'Proactive, 14-day advance warning',
];

export default function ComparisonSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Subtle gradient blob */}
      <div className="absolute bottom-[10%] left-[-5%] w-[300px] h-[300px] rounded-full bg-accent/[0.03] blur-[100px] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">WHY STABLESCORE?</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight">
            Enterprise tools break SMB budgets.
          </h2>
          <p className="mt-4 text-base text-muted max-w-2xl mx-auto">
            You would love to use SAP IBP or Oracle Demantra. But license costs, implementation timelines, and IT team requirements make it impossible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-0 rounded-2xl border border-border overflow-hidden">
          <div className="bg-bg-light p-8">
            <h3 className="text-lg font-semibold text-navy-900 mb-2">Traditional Enterprise Tools</h3>
            <p className="text-sm text-muted mb-6">SAP, Oracle, big consulting projects</p>
            <ul className="space-y-4">
              {traditional.map((item) => (
                <li key={item.text} className="flex items-center gap-3 text-sm text-muted">
                  <X size={16} className="text-red-400 flex-shrink-0" />
                  {item.text}
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted">Starting cost</p>
              <p className="text-2xl font-bold text-navy-900">€50,000+</p>
            </div>
          </div>
          <div className="bg-navy-900 p-8">
            <h3 className="text-lg font-semibold text-white mb-2">StableScore AI</h3>
            <p className="text-sm text-gray-400 mb-6">Built for SMBs</p>
            <ul className="space-y-4">
              {stablescore.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-200">
                  <Check size={16} className="text-green-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-sm text-gray-400">Starting cost</p>
              <p className="text-2xl font-bold text-white">€299/month</p>
              <p className="text-xs text-gray-400 mt-1">First 14 days free trial</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

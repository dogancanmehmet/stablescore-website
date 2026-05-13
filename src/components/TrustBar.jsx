import { Shield, Brain, Puzzle, Zap, Building2, BadgeCheck } from 'lucide-react';

const items = [
  { icon: Building2, title: 'Built in Germany', desc: 'Engineered for reliability' },
  { icon: BadgeCheck, title: 'Enterprise-Grade Security', desc: 'Your data stays yours' },
  { icon: Brain, title: 'Explainable AI', desc: 'Transparent by design' },
  { icon: Puzzle, title: 'ERP Compatible', desc: 'Works with your stack' },
  { icon: Zap, title: '48-Hour Setup', desc: 'Go live in 2 days' },
  { icon: Shield, title: 'SMB-Friendly Pricing', desc: 'Pay as you grow' },
];

export default function TrustBar() {
  return (
    <section className="w-full bg-bg-light border-y border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-8 md:gap-10 lg:gap-12">
          {items.map((item) => (
            <div key={item.title} className="flex items-center gap-3">
              <item.icon size={22} className="text-navy-800 flex-shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-sm font-semibold text-navy-900">{item.title}</p>
                <p className="text-xs text-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

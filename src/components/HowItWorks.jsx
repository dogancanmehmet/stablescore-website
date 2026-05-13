import { Database, Brain, Zap, ArrowRight } from 'lucide-react';

const steps = [
  {
    num: '1',
    icon: Database,
    title: 'Connect Your Data',
    desc: 'ERP, Excel, CRM and other operational systems.',
  },
  {
    num: '2',
    icon: Brain,
    title: 'Detect What Matters',
    desc: 'AI continuously monitors signals and patterns.',
  },
  {
    num: '3',
    icon: Zap,
    title: 'Act With Confidence',
    desc: 'Receive explainable recommendations and act.',
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Subtle gradient blob */}
      <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] rounded-full bg-accent/[0.03] blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mb-12">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">HOW IT WORKS</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight">
            Simple to start.<br />Powerful to scale.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-accent text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                  {step.num}
                </div>
                <div className="w-12 h-12 rounded-xl bg-bg-light border border-border flex items-center justify-center">
                  <step.icon size={22} className="text-navy-800" strokeWidth={1.5} />
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:flex items-center justify-center flex-1">
                    <ArrowRight size={20} className="text-border" />
                  </div>
                )}
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';
import { Check, ArrowRight, Zap, Building2, Landmark } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    desc: 'Ideal for your first AI experience',
    price: '€299',
    period: '/month',
    features: [
      '1 integration (ERP or Excel)',
      'Basic stock risk analysis',
      'Weekly email reports',
      '1 user',
      'Email support',
    ],
    cta: 'Start Free Trial',
    popular: false,
    icon: Zap,
  },
  {
    name: 'Growth',
    desc: 'For growing SMBs',
    price: '€799',
    period: '/month',
    features: [
      'Unlimited integrations',
      'All 4 AI modules',
      'Daily real-time alerts',
      '10 users',
      'Priority support',
      'Custom dashboard',
    ],
    cta: 'Start Free Trial',
    popular: true,
    icon: Building2,
  },
  {
    name: 'Scale',
    desc: 'Multi-location operations',
    price: '€1,499',
    period: '/month',
    features: [
      'All Growth features',
      'Multi-location support',
      'API access',
      'Unlimited users',
      'Dedicated Customer Success',
      'SLA guarantee',
    ],
    cta: 'Talk to Sales',
    popular: false,
    icon: Landmark,
  },
];

export default function PricingTeaser() {
  return (
    <section className="w-full bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Soft gradient blob */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/[0.03] blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">PRICING</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight">
            Enterprise power, SMB budget.
          </h2>
          <p className="mt-4 text-base text-muted leading-relaxed">
            Instead of the annual cost of SAP and Oracle solutions, pay monthly and upgrade as you grow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                plan.popular
                  ? 'bg-navy-900 border-navy-900 text-white'
                  : 'bg-bg-light border-border'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full">
                  Most Popular
                </div>
              )}
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <plan.icon size={20} className="text-accent" strokeWidth={1.5} />
              </div>
              <h3 className={`text-xl font-semibold mb-1 ${plan.popular ? 'text-white' : 'text-navy-900'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-4 ${plan.popular ? 'text-gray-300' : 'text-muted'}`}>
                {plan.desc}
              </p>
              <div className="mb-6">
                <span className={`text-3xl font-bold ${plan.popular ? 'text-white' : 'text-navy-900'}`}>
                  {plan.price}
                </span>
                <span className={plan.popular ? 'text-gray-400' : 'text-muted'}>{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check size={14} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span className={plan.popular ? 'text-gray-200' : 'text-navy-800'}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/demo"
                className={`w-full inline-flex items-center justify-center gap-2 text-sm font-medium px-5 py-2.5 rounded-lg transition-colors ${
                  plan.popular
                    ? 'bg-accent text-white hover:bg-accent-light'
                    : 'bg-navy-900 text-white hover:bg-navy-700'
                }`}
              >
                {plan.cta}
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-muted">
            All plans include a <span className="font-semibold text-navy-900">14-day free trial</span> and{' '}
            <span className="font-semibold text-navy-900">setup support</span>.
          </p>
        </div>
      </div>
    </section>
  );
}

import { Quote, Building2, Users, TrendingUp } from 'lucide-react';

const testimonials = [
  {
    quote: 'StableScore gave us something we never had before: a clear, ranked list of what to fix before it impacts our revenue. The explainability is what convinced our leadership team.',
    author: 'Thomas Weber',
    role: 'Head of Operations',
    company: 'Mid-sized Manufacturing Company',
    icon: Building2,
  },
  {
    quote: 'We connected our ERP in two days. Within the first month, we had identified €800K in dead stock and procurement inefficiencies we did not know existed.',
    author: 'Anna Müller',
    role: 'Supply Chain Director',
    company: 'European Distribution Firm',
    icon: Users,
  },
  {
    quote: 'Our investors specifically asked for operational intelligence. StableScore gave us a data-driven decision layer that makes our operational maturity visible and defensible.',
    author: 'Marcus Chen',
    role: 'COO',
    company: 'Mid-market Financial Services',
    icon: TrendingUp,
  },
];

const logos = [
  'Manufacturing Co.', 'FMCG Distributor', 'Financial Services', 'Retail Group', 'Logistics Partner', 'Healthcare Supplier',
];

export default function SocialProof() {
  return (
    <section className="w-full bg-navy-900 py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-[-10%] left-[30%] w-[400px] h-[400px] rounded-full bg-accent/[0.07] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-15%] right-[10%] w-[300px] h-[300px] rounded-full bg-purple-400/[0.05] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold text-accent-light uppercase tracking-wider mb-3">TRUSTED BY OPERATIONAL TEAMS</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            What mid-sized companies say.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 flex flex-col"
            >
              <Quote size={24} className="text-accent-light mb-4" />
              <p className="text-base text-white leading-relaxed mb-6 flex-1">
                "{t.quote}"
              </p>
              <div className="pt-5 border-t border-white/10">
                <p className="text-sm font-semibold text-white">{t.author}</p>
                <p className="text-xs text-gray-400">{t.role}</p>
                <p className="text-xs text-gray-500">{t.company}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-xs text-gray-400 uppercase tracking-wider mb-6">
            Companies across industries trust StableScore
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {logos.map((logo) => (
              <div
                key={logo}
                className="px-4 py-2 bg-white/5 rounded-lg text-sm text-gray-300 font-medium"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

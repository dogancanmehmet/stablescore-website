import { Quote, Building2, Users, TrendingUp } from 'lucide-react';

const testimonials = [
  {
    quote: 'Stock-outs dropped 40% with StableScore. I no longer spend my weeks in Excel. The AI tells me what to do, and I just approve.',
    author: 'Mehmet Yilmaz',
    role: 'Operations Manager',
    company: '125-employee Manufacturing Company',
    metric: '40%',
    metricLabel: 'Stock-out reduction',
    icon: Building2,
  },
  {
    quote: 'Connecting to our ERP took just 2 days. We saw our first ROI in week 3. I have never seen a tool deliver value this fast.',
    author: 'Ayse Kaya',
    role: 'Supply Chain Director',
    company: '80-employee Distribution Company',
    metric: '2 days',
    metricLabel: 'Setup time',
    icon: Users,
  },
  {
    quote: 'We use StableScore to show our investors how operationally efficient we are. Data-driven decisions build trust.',
    author: 'Can Demir',
    role: 'CEO',
    company: '45-employee E-commerce Startup',
    metric: '3x',
    metricLabel: 'Faster reporting',
    icon: TrendingUp,
  },
];

const logos = [
  'ABC Manufacturing', 'XYZ Logistics', 'Beta Distribution', 'Delta Retail', 'Gamma Food', 'Omega Textile',
];

export default function SocialProof() {
  return (
    <section className="w-full bg-navy-900 py-16 md:py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-[-10%] left-[30%] w-[400px] h-[400px] rounded-full bg-accent/[0.07] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-15%] right-[10%] w-[300px] h-[300px] rounded-full bg-purple-400/[0.05] blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold text-accent-light uppercase tracking-wider mb-3">CUSTOMER STORIES</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            What SMBs like yours are saying.
          </h2>
          <p className="mt-4 text-base text-gray-300 leading-relaxed">
            200+ mid-sized companies trust StableScore with their operations.
          </p>
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
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white">{t.author}</p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                    <p className="text-xs text-gray-500">{t.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-accent-light">{t.metric}</p>
                    <p className="text-[10px] text-gray-400 uppercase tracking-wide">{t.metricLabel}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-xs text-gray-400 uppercase tracking-wider mb-6">
            Some of the SMBs that trust us
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

import { Link } from 'react-router-dom';
import { ArrowRight, Package, Warehouse, ShoppingCart, Activity, AlertTriangle, FileText } from 'lucide-react';

const useCases = [
  { icon: Package, title: 'Prevent Stock-outs' },
  { icon: Warehouse, title: 'Reduce Dead Stock' },
  { icon: ShoppingCart, title: 'Smarter Procurement' },
  { icon: Activity, title: 'Demand Signals' },
  { icon: AlertTriangle, title: 'Operational Risk Alerts' },
  { icon: FileText, title: 'Management Decision Support' },
];

const caseStudies = [
  {
    tag: 'FMCG DISTRIBUTION',
    desc: 'Identified stock-out exposure and high-waste inventory patterns across distribution data.',
    image: true,
  },
  {
    tag: 'MANUFACTURING',
    desc: 'Streamlined supplier evaluation and procurement workflows through AI-driven recommendations.',
    image: true,
  },
  {
    tag: 'FINANCIAL OPERATIONS',
    desc: 'Automated high-volume compliance screening, surfacing only high-risk items for human review.',
    image: true,
  },
];

export default function UseCases() {
  return (
    <section className="w-full bg-bg-light py-16 md:py-24 relative overflow-hidden">
      {/* Subtle gradient blob */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-amber-400/[0.03] blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">USE CASES</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight mb-6">
              From operational signals to business decisions.
            </h2>
            <Link to="/solutions" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-light transition-colors mb-8">
              See all use cases <ArrowRight size={14} />
            </Link>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {useCases.map((uc) => (
                <div
                  key={uc.title}
                  className="bg-white border border-border rounded-xl p-5 hover:shadow-sm transition-shadow cursor-pointer"
                >
                  <uc.icon size={22} className="text-navy-800 mb-3" strokeWidth={1.5} />
                  <p className="text-sm font-medium text-navy-900">{uc.title}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">CASE STUDIES</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight mb-6">
              Real operational outcomes.
            </h2>
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-light transition-colors mb-8">
              Read all case studies <ArrowRight size={14} />
            </Link>

            <div className="space-y-4">
              {caseStudies.map((cs) => (
                <div
                  key={cs.tag}
                  className="bg-white border border-border rounded-xl p-5 flex gap-4 hover:shadow-sm transition-shadow cursor-pointer"
                >
                  <div className="w-20 h-20 rounded-lg bg-bg-light border border-border flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-accent uppercase tracking-wider mb-1">{cs.tag}</p>
                    <p className="text-sm text-navy-800 leading-relaxed">{cs.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

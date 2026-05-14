import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Factory, Landmark } from 'lucide-react';

const cases = [
  {
    slug: 'fmcg-distribution-risk-detection',
    industry: 'FMCG Distribution',
    icon: Building2,
    title: 'Detecting stock-out exposure and high-waste inventory patterns',
    challenge: 'Distribution teams often work with fragmented ERP reports, manual planning sheets and delayed visibility into stock movements. By the time a problem appears in standard reporting, lost sales or waste may already have occurred.',
    solution: 'StableScore AI analyzed historical operational data, detected recurring risk patterns and surfaced early signals related to stock-out exposure, return risk and inventory inefficiency.',
    outcome: [
      'Identified stock-out exposure across product and location combinations.',
      'Surfaced high-waste and high-return inventory patterns.',
      'Helped teams understand which operational signals were contributing to risk.',
      'Created a foundation for explainable next-best-action recommendations.',
    ],
  },
  {
    slug: 'procurement-comparison-assistant',
    industry: 'Manufacturing & Procurement',
    icon: Factory,
    title: 'Reducing manual effort in offer collection and supplier comparison',
    challenge: 'Procurement teams often spend significant time collecting offers, normalizing supplier information and comparing terms manually across files, emails and ERP records.',
    solution: 'StableScore AI supported the analysis of supplier and procurement data by structuring fragmented information, comparing relevant parameters and highlighting decision-relevant differences.',
    outcome: [
      'Reduced repetitive manual analysis.',
      'Improved visibility across supplier offers and procurement options.',
      'Supported faster and more consistent comparison workflows.',
      'Helped teams move from document handling to decision preparation.',
    ],
  },
  {
    slug: 'regulated-data-review',
    industry: 'Regulated Operations',
    icon: Landmark,
    title: 'Supporting structured review of operational and compliance-related data',
    challenge: 'Teams in regulated environments need to review complex information carefully while maintaining control over sensitive data and decision traceability.',
    solution: 'StableScore AI provided a private-first analytical layer to help structure internal data, identify relevant signals and support explainable review workflows.',
    outcome: [
      'Improved consistency in information review.',
      'Reduced repetitive manual workload.',
      'Supported traceable and explainable decision preparation.',
      'Kept sensitive data within controlled environments.',
    ],
  },
];

export default function CaseStudies() {
  return (
    <div className="w-full">
      {/* 1. Hero */}
      <section className="w-full bg-white pt-16 pb-12 md:pt-24 md:pb-16 relative overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-accent/[0.04] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[400px] h-[400px] rounded-full bg-blue-400/[0.04] blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Case Studies</p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-navy-900 leading-[1.1] tracking-tight">
              Decision intelligence applied to real operational problems.
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Examples of how StableScore AI can help teams detect risks, understand root causes and act earlier across operational environments.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Operational Signals Section */}
      <section className="w-full bg-bg-light py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Approach</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight mb-4">
              From operational signals to explainable actions
            </h2>
            <p className="text-base text-muted leading-relaxed">
              StableScore AI helps organizations move from fragmented reporting and delayed reactions to continuous operational visibility and decision support.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Disclaimer */}
      <section className="w-full bg-bg-light py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-muted">
            Some case studies are anonymized or generalized to protect customer confidentiality. Results may vary depending on data quality, process maturity and deployment scope.
          </p>
        </div>
      </section>

      {/* 3. Cases */}
      <section className="w-full bg-bg-light py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {cases.map((cs) => (
              <div
                key={cs.slug}
                className="bg-white border border-border rounded-2xl overflow-hidden"
              >
                <div className="bg-accent/[0.03] px-8 py-4 border-b border-border flex items-center gap-3">
                  <cs.icon size={18} className="text-navy-800" strokeWidth={1.5} />
                  <span className="text-xs font-bold text-navy-900 uppercase tracking-wider">{cs.industry}</span>
                </div>

                <div className="p-8 md:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 leading-tight mb-8">
                    {cs.title}
                  </h2>

                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <p className="text-xs font-semibold text-navy-900 uppercase tracking-wider mb-2">Challenge</p>
                      <p className="text-sm text-muted leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-navy-900 uppercase tracking-wider mb-2">Solution</p>
                      <p className="text-sm text-muted leading-relaxed">{cs.solution}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-navy-900 uppercase tracking-wider mb-2">Outcome</p>
                      <ul className="space-y-2">
                        {cs.outcome.map((o) => (
                          <li key={o} className="flex items-start gap-2 text-sm text-navy-800">
                            <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                            {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight mb-4">
            Have a similar operational challenge?
          </h2>
          <p className="text-base text-muted leading-relaxed mb-8">
            StableScore AI can be evaluated with your existing operational data to identify relevant risk signals, decision bottlenecks and measurable use cases.
          </p>
          <Link
            to="/demo"
            className="inline-flex items-center gap-2 bg-navy-900 text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-navy-700 transition-colors"
          >
            Discuss Your Use Case
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

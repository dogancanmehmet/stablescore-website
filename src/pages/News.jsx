import { ArrowRight, Calendar } from 'lucide-react';

const articles = [
  {
    slug: 'why-dashboards-are-not-enough',
    date: 'Draft',
    category: 'Decision Intelligence',
    title: 'Why dashboards are not enough for operational decision-making',
    summary: 'Dashboards show what happened. Operational teams need systems that detect what is changing, explain why it matters and recommend what to do next.',
  },
  {
    slug: 'from-ai-assistants-to-decision-systems',
    date: 'Draft',
    category: 'Enterprise AI',
    title: 'From AI assistants to decision systems',
    summary: 'Generic AI assistants can answer questions, but operational companies need continuous, explainable and context-aware decision support.',
  },
  {
    slug: 'private-ai-for-operational-data',
    date: 'Draft',
    category: 'Data Privacy',
    title: 'Why private-first AI matters for operational data',
    summary: 'ERP, procurement, inventory and financial data require more than convenience. They require controlled deployment, traceability and trust.',
  },
];

export default function News() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="w-full bg-white pt-16 pb-12 md:pt-24 md:pb-16 relative overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-accent/[0.04] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[400px] h-[400px] rounded-full bg-blue-400/[0.04] blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Insights</p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-navy-900 leading-[1.1] tracking-tight">
              Practical thinking on decision intelligence, operational risk and enterprise AI.
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Notes from our work on explainable AI systems, ERP-connected analytics and operational decision support.
            </p>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="w-full bg-bg-light py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="bg-white border border-border rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2.5 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-muted">
                    <Calendar size={12} />
                    {article.date}
                  </div>
                </div>
                <h2 className="text-lg font-semibold text-navy-900 leading-snug mb-3">
                  {article.title}
                </h2>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {article.summary}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-light transition-colors">
                  Read more <ArrowRight size={14} />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

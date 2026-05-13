import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';

const articles = [
  {
    date: 'March 15, 2024',
    category: 'Product',
    title: 'StableScore launches Demand Signals module',
    excerpt: 'Our newest module helps businesses uncover hidden demand patterns from sales, marketing, and external data sources.',
  },
  {
    date: 'February 28, 2024',
    category: 'Company',
    title: 'StableScore raises Series A to expand across Europe',
    excerpt: 'We are excited to announce our Series A funding round, led by top European VCs, to accelerate our mission.',
  },
  {
    date: 'January 10, 2024',
    category: 'Product',
    title: 'New ERP connectors: SAP S/4HANA and Oracle Fusion',
    excerpt: 'Native integrations for two of the most widely used enterprise ERP systems are now available out of the box.',
  },
  {
    date: 'December 5, 2023',
    category: 'Industry',
    title: 'How FMCG distributors cut waste by 30% with AI',
    excerpt: 'A deep dive into how mid-sized distributors are using operational intelligence to reduce inventory waste.',
  },
  {
    date: 'November 18, 2023',
    category: 'Company',
    title: 'Welcome to our new Berlin headquarters',
    excerpt: 'After rapid growth, we have moved into a new office space in the heart of Berlin to accommodate our expanding team.',
  },
  {
    date: 'October 3, 2023',
    category: 'Product',
    title: 'StableScore expands into healthcare and pharma verticals',
    excerpt: 'New industry-specific modules help hospitals and pharmaceutical companies ensure critical supply availability and reduce waste.'
  },
];

export default function News() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="w-full bg-white pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">NEWS</p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-navy-900 leading-[1.1] tracking-tight">
              Latest updates from StableScore.
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Product launches, company milestones, and insights from the world of operational intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="w-full bg-bg-light py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <article
                key={article.title}
                className="bg-white border border-border rounded-2xl p-6 hover:shadow-md transition-shadow cursor-pointer"
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
                  {article.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-light transition-colors">
                  Read more <ArrowRight size={14} />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight mb-4">
            Stay in the loop.
          </h2>
          <p className="text-base text-muted leading-relaxed mb-8">
            Follow us on LinkedIn for the latest product updates, industry insights, and company news.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-navy-900 text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-navy-700 transition-colors"
          >
            Get in Touch
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

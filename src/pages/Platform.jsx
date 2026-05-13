import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  Layers,
  Server,
  Puzzle,
  ShieldCheck,
  Cloud,
  Database,
  Lock,
  Eye,
  FileCheck,
  Gauge,
} from 'lucide-react';

const pillars = [
  {
    icon: Layers,
    title: 'Unified Overview',
    desc: 'A single pane of glass for your entire operational health. Risk exposure, inventory status, and AI recommendations in one view.',
    features: [
      'Real-time operational health dashboard',
      'Risk exposure scoring and trending',
      'Recommended actions ranked by impact',
      'Custom alerts and notifications',
    ],
  },
  {
    icon: Server,
    title: 'Scalable Architecture',
    desc: 'Built for mid-sized enterprises that need enterprise-grade reliability without enterprise-grade complexity.',
    features: [
      'Cloud-native microservices architecture',
      'Auto-scaling based on data volume',
      'Sub-second query response times',
      '99.9% uptime SLA',
    ],
  },
  {
    icon: Puzzle,
    title: 'Deep Integrations',
    desc: 'Connect your existing stack in hours, not months. Native connectors for the tools you already use.',
    features: [
      'ERP connectors (SAP, Oracle, MS Dynamics)',
      'Warehouse Management Systems',
      'BI tools and data warehouses',
      'Custom API and webhook support',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Security',
    desc: 'Security and compliance by design. Your data stays under your control, always.',
    features: [
      'GDPR & EU AI Act aligned',
      'End-to-end data encryption',
      'Role-based access control (RBAC)',
      'Full audit trail and data lineage',
    ],
  },
];

const integrations = [
  { name: 'SAP', category: 'ERP' },
  { name: 'Oracle', category: 'ERP' },
  { name: 'Microsoft Dynamics', category: 'ERP' },
  { name: 'Salesforce', category: 'CRM' },
  { name: 'HubSpot', category: 'CRM' },
  { name: 'Snowflake', category: 'Data Warehouse' },
  { name: 'BigQuery', category: 'Data Warehouse' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MySQL', category: 'Database' },
  { name: 'Shopify', category: 'E-commerce' },
  { name: 'Magento', category: 'E-commerce' },
  { name: 'Custom API', category: 'Custom' },
];

const deployment = [
  {
    icon: Cloud,
    title: 'SaaS',
    desc: 'Fully managed cloud deployment. Get started in minutes with zero infrastructure overhead.',
    features: ['Automatic updates', 'Managed backups', 'Global CDN', 'Pay-as-you-grow'],
  },
  {
    icon: Database,
    title: 'Private Cloud',
    desc: 'Dedicated cloud environment on AWS, Azure, or GCP with isolated resources and custom configurations.',
    features: ['Isolated tenant', 'Custom VPC', 'Dedicated support', 'Flexible SLAs'],
  },
  {
    icon: Lock,
    title: 'On-Premise',
    desc: 'Deploy StableScore inside your own data center for maximum control and regulatory compliance.',
    features: ['Air-gapped option', 'Full data sovereignty', 'Custom compliance', 'Local support'],
  },
];

export default function Platform() {
  return (
    <div className="w-full">
      {/* 1. Hero */}
      <section id="overview" className="w-full bg-white pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">PLATFORM</p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-navy-900 leading-[1.1] tracking-tight">
              The intelligence layer for your operations.
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              Connect your existing systems and let StableScore transform raw data into prioritized, explainable actions — without replacing your stack.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 bg-navy-900 text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-navy-700 transition-colors"
              >
                Book a Demo
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/solutions"
                className="inline-flex items-center gap-2 border border-border text-navy-800 text-sm font-medium px-6 py-3 rounded-lg hover:bg-bg-light transition-colors"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Platform Pillars */}
      <section id="pillars" className="w-full bg-bg-light py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight">
              Built for how you work.
            </h2>
            <p className="mt-4 text-base text-muted leading-relaxed">
              Four foundational pillars that make StableScore enterprise-ready from day one.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="bg-white border border-border rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                  <p.icon size={24} className="text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">{p.title}</h3>
                <p className="text-base text-muted leading-relaxed mb-5">{p.desc}</p>
                <ul className="space-y-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-navy-800">
                      <Check size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Architecture */}
      <section id="architecture" className="w-full bg-navy-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-xs font-semibold text-accent-light uppercase tracking-wider mb-3">ARCHITECTURE</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
                Cloud-native. API-first. Scalable.
              </h2>
              <p className="text-base text-gray-300 leading-relaxed mb-6">
                StableScore is built on a modern microservices architecture that separates data ingestion, AI processing, and presentation layers. This means faster deployments, easier scaling, and zero downtime updates.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Gauge, label: 'Sub-second query latency at scale' },
                  { icon: Database, label: 'Handles millions of events per day' },
                  { icon: Eye, label: 'Real-time streaming data processing' },
                  { icon: Lock, label: 'End-to-end encryption in transit and at rest' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <item.icon size={18} className="text-accent-light" strokeWidth={1.5} />
                    </div>
                    <span className="text-sm text-white">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="space-y-4">
                <div className="bg-white/10 rounded-xl p-5">
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-3">Data Sources</p>
                  <div className="flex flex-wrap gap-2">
                    {['ERP', 'WMS', 'CRM', 'BI', 'Excel', 'API'].map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-xs text-white font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-center py-2">
                  <div className="w-px h-6 bg-white/20" />
                </div>
                <div className="bg-accent/20 rounded-xl p-5">
                  <p className="text-xs text-accent-light uppercase tracking-wide mb-3">StableScore AI Layer</p>
                  <div className="grid grid-cols-2 gap-2">
                    {['Ingestion', 'Processing', 'ML Models', 'Recommendations'].map((tag) => (
                      <span key={tag} className="px-3 py-1.5 bg-accent/20 rounded-lg text-xs text-white font-medium text-center">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-center py-2">
                  <div className="w-px h-6 bg-white/20" />
                </div>
                <div className="bg-white/10 rounded-xl p-5">
                  <p className="text-xs text-gray-400 uppercase tracking-wide mb-3">Output Layer</p>
                  <div className="flex flex-wrap gap-2">
                    {['Dashboard', 'Alerts', 'API', 'Reports', 'Actions'].map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-xs text-white font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Integrations */}
      <section id="integrations" className="w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">INTEGRATIONS</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight">
              Connects to your existing stack.
            </h2>
            <p className="mt-4 text-base text-muted leading-relaxed">
              Native connectors and APIs mean you can be up and running in hours — not months.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {integrations.map((int) => (
              <div
                key={int.name}
                className="bg-bg-light border border-border rounded-xl p-5 flex items-center justify-between hover:border-accent/30 transition-colors"
              >
                <div>
                  <p className="text-sm font-semibold text-navy-900">{int.name}</p>
                  <p className="text-xs text-muted">{int.category}</p>
                </div>
                <div className="w-8 h-8 rounded-lg bg-white border border-border flex items-center justify-center">
                  <Puzzle size={14} className="text-muted" strokeWidth={1.5} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted">
              Don't see your system?{' '}
              <Link to="/contact" className="text-accent hover:text-accent-light transition-colors font-medium">
                Contact us
              </Link>{' '}
              for custom integration options.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Security */}
      <section id="security" className="w-full bg-bg-light py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">SECURITY & COMPLIANCE</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight mb-6">
                Your data. Your control.
              </h2>
              <p className="text-base text-muted leading-relaxed mb-6">
                We treat your operational data with the same care we'd want for our own. Security isn't a checkbox — it's woven into every layer of our platform.
              </p>
              <ul className="space-y-3">
                {[
                  'GDPR & EU AI Act aligned',
                  'GDPR compliant by design',
                  'End-to-end AES-256 encryption',
                  'Role-based access control (RBAC)',
                  'Full audit trail for every action',
                  'Data residency options (EU, US, APAC)',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-navy-800">
                    <ShieldCheck size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-border rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                  <FileCheck size={20} className="text-green-600" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy-900">Data Protection</p>
                  <p className="text-xs text-muted">GDPR Aligned</p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Security', value: 'Enterprise' },
                  { label: 'Availability', value: '99.9% SLA' },
                  { label: 'Processing Integrity', value: 'Verified' },
                  { label: 'Confidentiality', value: 'End-to-end' },
                  { label: 'Privacy', value: 'GDPR Ready' },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                    <span className="text-sm text-muted">{row.label}</span>
                    <span className="text-sm font-medium text-navy-900">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Deployment Options */}
      <section id="deployment" className="w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">DEPLOYMENT</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight">
              Deploy your way.
            </h2>
            <p className="mt-4 text-base text-muted leading-relaxed">
              Choose the deployment model that fits your security, compliance, and operational requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {deployment.map((d) => (
              <div
                key={d.title}
                className="bg-bg-light border border-border rounded-2xl p-8 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                  <d.icon size={24} className="text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">{d.title}</h3>
                <p className="text-base text-muted leading-relaxed mb-5">{d.desc}</p>
                <ul className="space-y-2">
                  {d.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-navy-800">
                      <Check size={14} className="text-green-500 flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA */}
      <section id="cta" className="w-full bg-navy-900 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
            See the platform in action.
          </h2>
          <p className="text-base text-gray-300 leading-relaxed mb-8">
            Book a personalized demo with our solutions team and see how StableScore fits your infrastructure.
          </p>
          <Link
            to="/demo"
            className="inline-flex items-center gap-2 bg-accent text-white text-sm font-medium px-8 py-3.5 rounded-lg hover:bg-accent-light transition-colors"
          >
            Book a Demo
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

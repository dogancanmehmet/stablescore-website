import { Link } from 'react-router-dom';
import { ArrowRight, Check, Database, Eye, Lightbulb, ClipboardCheck, Cloud, Lock, Server, Puzzle, Shield, Gauge } from 'lucide-react';

const sections = [
  {
    icon: Database,
    title: 'Connect operational data',
    body: 'Integrate ERP, CRM, databases, spreadsheets and internal documents without replacing existing systems.',
    bullets: [
      'ERP and database connectivity',
      'Structured and unstructured data support',
      'Operational KPI discovery',
      'Private deployment options',
    ],
  },
  {
    icon: Eye,
    title: 'Monitor decision signals',
    body: 'StableScore AI continuously watches relevant KPIs, anomalies and operational patterns so teams can act before problems escalate.',
    bullets: [
      'Risk and anomaly detection',
      'Demand and inventory deviation signals',
      'Procurement and supplier-related patterns',
      'Operational trend monitoring',
    ],
  },
  {
    icon: Lightbulb,
    title: 'Explain what matters',
    body: 'The platform does not only flag issues. It explains contributing factors, affected business areas and possible operational impact.',
    bullets: [
      'Root-cause context',
      'Explainable model outputs',
      'Business-friendly summaries',
      'Traceable decision support',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Recommend next actions',
    body: 'StableScore AI helps teams move from insight to action with recommended next steps that remain under human control.',
    bullets: [
      'Next-best-action suggestions',
      'Human-in-the-loop workflows',
      'Priority-based risk ranking',
      'Decision-ready outputs for business teams',
    ],
  },
];

const controlledEnvPoints = [
  'Private cloud and on-premise deployment options',
  'Explainability and human review workflows',
  'ERP and operational system connectivity',
  'Cross-system operational context',
  'Continuous monitoring architecture',
  'Controlled and traceable recommendation flows',
];

const workflowExamples = [
  'Operational review workflows',
  'Approval processes',
  'Procurement prioritization',
  'Inventory escalation',
  'Risk-based operational actions',
];

const technical = [
  'Private cloud and on-premise deployment options',
  'Designed for sensitive operational data',
  'API-first architecture',
  'ERP and business system integration',
  'Explainability and traceability by design',
  'Reliable infrastructure for continuous monitoring',
];

export default function Platform() {
  return (
    <div className="w-full">
      {/* 1. Hero */}
      <section className="w-full bg-white pt-16 pb-12 md:pt-24 md:pb-16 relative overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-accent/[0.04] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[400px] h-[400px] rounded-full bg-blue-400/[0.04] blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Platform</p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-navy-900 leading-[1.1] tracking-tight">
              A decision intelligence layer for your operational data.
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              StableScore AI connects to ERP, business and operational data sources to monitor risks, explain root causes and recommend actions.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 bg-navy-900 text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-navy-700 transition-colors"
              >
                Request a Demo
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

      {/* 2. Four Sections */}
      <section className="w-full bg-bg-light py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {sections.map((s) => (
              <div
                key={s.title}
                className="bg-white border border-border rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                  <s.icon size={24} className="text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">{s.title}</h3>
                <p className="text-base text-muted leading-relaxed mb-5">{s.body}</p>
                <ul className="space-y-2.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-navy-800">
                      <Check size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Technical Positioning */}
      <section className="w-full bg-navy-900 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-[20%] left-[-5%] w-[300px] h-[300px] rounded-full bg-accent/[0.08] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[-5%] w-[350px] h-[350px] rounded-full bg-indigo-400/[0.06] blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-xs font-semibold text-accent-light uppercase tracking-wider mb-3">Architecture</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
                Built for controlled enterprise environments.
              </h2>
              <p className="text-base text-gray-300 leading-relaxed">
                StableScore is designed for organizations that need control over their data, integration depth with existing systems, and explainability in every recommendation.
              </p>
            </div>
            <div className="space-y-4">
              {technical.map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Check size={16} className="text-accent-light" />
                  </div>
                  <span className="text-base text-gray-200 pt-1">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Controlled Environments */}
      <section className="w-full bg-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-accent/[0.03] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[400px] h-[400px] rounded-full bg-blue-400/[0.03] blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Control</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight mb-6">
                Built for controlled operational environments
              </h2>
              <p className="text-base text-muted leading-relaxed">
                Designed for organizations where operational continuity, explainability and data control matter.
              </p>
            </div>
            <div className="space-y-4">
              {controlledEnvPoints.map((t) => (
                <div key={t} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Check size={16} className="text-accent" />
                  </div>
                  <span className="text-base text-navy-800 pt-1">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Workflow Layer */}
      <section className="w-full bg-bg-light py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Workflows</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight mb-6">
                Decision-ready operational workflows
              </h2>
              <p className="text-base text-muted leading-relaxed">
                StableScore AI supports operational teams with decision-ready outputs that can be reviewed, prioritized and integrated into existing workflows.
              </p>
            </div>
            <div className="bg-white border border-border rounded-2xl p-8">
              <p className="text-xs font-semibold text-navy-900 uppercase tracking-wider mb-4">Supported Workflows</p>
              <ul className="space-y-3">
                {workflowExamples.map((w) => (
                  <li key={w} className="flex items-start gap-3">
                    <Check size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-navy-800">{w}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Deployment */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Deployment</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight">
              Deploy your way.
            </h2>
            <p className="mt-4 text-base text-muted leading-relaxed">
              Choose the deployment model that fits your security, compliance, and operational requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Cloud,
                title: 'SaaS',
                desc: 'Managed cloud deployment with controlled access, secure backups and scalable usage.',
                features: ['Managed updates', 'Secure backups', 'Controlled access', 'Scalable usage'],
              },
              {
                icon: Server,
                title: 'Private Cloud',
                desc: 'Isolated cloud environment with custom network setup and security-oriented configuration.',
                features: ['Isolated environment', 'Custom network setup', 'Deployment support', 'Security-oriented configuration'],
              },
              {
                icon: Lock,
                title: 'On-Premise',
                desc: 'Local deployment inside your infrastructure for data sovereignty and restricted network control.',
                features: ['Data sovereignty', 'Local deployment', 'Restricted network option', 'Custom compliance setup'],
              },
            ].map((d) => (
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
      <section className="w-full bg-bg-light py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight mb-4">
            See how the platform fits your infrastructure.
          </h2>
          <p className="text-base text-muted leading-relaxed mb-8">
            Book a personalized demo with our solutions team and see how StableScore connects to your operational data.
          </p>
          <Link
            to="/demo"
            className="inline-flex items-center gap-2 bg-accent text-white text-sm font-medium px-8 py-3.5 rounded-lg hover:bg-accent-light transition-colors"
          >
            Request a Demo
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

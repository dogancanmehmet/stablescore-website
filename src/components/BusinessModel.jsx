import { Cloud, Server, Lock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const models = [
  {
    icon: Cloud,
    title: 'SaaS',
    subtitle: 'Fastest time to value',
    description: 'Managed cloud deployment with controlled access, secure backups and scalable usage. Ideal for teams that want to start quickly without infrastructure overhead.',
    target: 'Mid-market operational teams',
  },
  {
    icon: Server,
    title: 'Private Cloud',
    subtitle: 'Isolated enterprise environment',
    description: 'Isolated cloud environment with custom network setup and security-oriented configuration. For organizations that need separation without managing physical infrastructure.',
    target: 'Enterprise operational divisions',
  },
  {
    icon: Lock,
    title: 'On-Premise',
    subtitle: 'Maximum data control',
    description: 'Local deployment inside your infrastructure for data sovereignty and restricted network control. Designed for regulated industries and organizations with strict compliance requirements.',
    target: 'Regulated and data-sensitive operations',
  },
];

export default function BusinessModel() {
  return (
    <section className="w-full bg-white py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-accent/[0.03] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-15%] left-[-10%] w-[400px] h-[400px] rounded-full bg-blue-400/[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">How We Work With You</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight mb-4">
            Start with a PoC. Scale as you grow.
          </h2>
          <p className="text-base text-muted leading-relaxed">
            Every engagement starts with a proof of concept using your operational data. Once value is demonstrated, we deploy on the model that fits your security and scaling needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {models.map((m) => (
            <div
              key={m.title}
              className="bg-bg-light border border-border rounded-2xl p-8 hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <m.icon size={24} className="text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-1">{m.title}</h3>
              <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-4">{m.subtitle}</p>
              <p className="text-sm text-muted leading-relaxed mb-4 flex-1">{m.description}</p>
              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted">Best for</p>
                <p className="text-sm font-medium text-navy-900">{m.target}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-navy-900 rounded-2xl p-8 md:p-10 relative overflow-hidden">
          <div className="absolute top-[-20%] right-[-10%] w-[300px] h-[300px] rounded-full bg-accent/[0.08] blur-[120px] pointer-events-none" />
          <div className="relative">
            <h3 className="text-xl font-bold text-white mb-4">How Customers Start</h3>
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <p className="text-xs font-semibold text-accent-light uppercase tracking-wider mb-2">Step 1</p>
                <p className="text-sm text-white font-medium mb-1">Data Evaluation</p>
                <p className="text-xs text-gray-400 leading-relaxed">Upload or connect sample operational data. We identify risk signals and use cases within days.</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-accent-light uppercase tracking-wider mb-2">Step 2</p>
                <p className="text-sm text-white font-medium mb-1">PoC Validation</p>
                <p className="text-xs text-gray-400 leading-relaxed">See decision cards, risk rankings and recommended actions using your real operational context.</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-accent-light uppercase tracking-wider mb-2">Step 3</p>
                <p className="text-sm text-white font-medium mb-1">Production Deploy</p>
                <p className="text-xs text-gray-400 leading-relaxed">Choose SaaS, Private Cloud or On-Premise. Integrate into operational workflows and scale.</p>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-sm text-gray-300">
                Ready to see your operational risk map?
              </p>
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent-light hover:text-white transition-colors"
              >
                Request a PoC <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

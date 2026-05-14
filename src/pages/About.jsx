import { Link } from 'react-router-dom';
import { ArrowRight, Target, Brain, Server, Check, Users } from 'lucide-react';

const whatWeBuild = [
  { icon: Server, title: 'Operational layer', body: 'Monitors ERP and business systems continuously.' },
  { icon: Brain, title: 'Explainable output', body: 'Every signal includes context and recommended action.' },
  { icon: Target, title: 'Private-first', body: 'Cloud or on-premise. Your data stays yours.' },
];

const principles = [
  'Explainability before automation',
  'Human-in-the-loop by design',
  'Private deployment when required',
  'Operational value over AI hype',
];

const validation = [
  { label: 'PoCs', value: 'Multiple', desc: 'Across FMCG, manufacturing and regulated ops' },
  { label: 'Scale', value: '30M+ rows', desc: 'Processed in under 30 minutes' },
  { label: 'Backed by', value: 'EU Programs', desc: 'European startup and innovation ecosystem' },
  { label: 'Aligned with', value: 'Fraunhofer', desc: 'Applied AI for operational systems' },
];

export default function About() {
  return (
    <div className="w-full">
      {/* 1. Hero */}
      <section id="about-us" className="w-full bg-white pt-16 pb-12 md:pt-24 md:pb-16 relative overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-accent/[0.04] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[400px] h-[400px] rounded-full bg-blue-400/[0.04] blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">About</p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-navy-900 leading-[1.1] tracking-tight">
              We build decision intelligence for operational companies.
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              StableScore AI turns ERP and operational data into explainable risk signals and recommended actions before problems become revenue loss.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Mission - Big type */}
      <section id="mission" className="w-full bg-navy-900 py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-[20%] left-[-5%] w-[300px] h-[300px] rounded-full bg-accent/[0.08] blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold text-accent-light uppercase tracking-wider mb-4">Mission</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.15]">
              Close the decision gap.
            </h2>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-2xl">
              Companies have dashboards and data. What they lack is a continuous system that tells them what is changing, why it matters and what to do next.
            </p>
          </div>
        </div>
      </section>

      {/* 3. What We Build */}
      <section id="what-we-build" className="w-full bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">What We Build</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 leading-[1.1]">
              Three capabilities. One layer.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {whatWeBuild.map((item) => (
              <div
                key={item.title}
                className="bg-bg-light border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                  <item.icon size={24} className="text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Principles */}
      <section id="principles" className="w-full bg-bg-light py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Principles</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 leading-[1.1]">
                How we think about operations.
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {principles.map((p) => (
                <div key={p} className="flex items-start gap-3 bg-white border border-border rounded-xl p-5">
                  <Check size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-navy-800">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Validation */}
      <section id="validation" className="w-full bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Validation</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 leading-[1.1]">
              Tested. Validated. Growing.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {validation.map((v) => (
              <div key={v.label} className="bg-bg-light border border-border rounded-2xl p-6">
                <p className="text-[10px] font-bold text-muted uppercase tracking-widest mb-2">{v.label}</p>
                <p className="text-2xl font-bold text-navy-900 mb-1">{v.value}</p>
                <p className="text-xs text-muted">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="w-full bg-navy-900 py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
            See where your operational risk is hidden.
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/demo"
              className="inline-flex items-center gap-2 bg-accent text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-accent-light transition-colors"
            >
              Request a Demo
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-white/20 text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { ArrowRight, Target, Brain, Server, Users, Check } from 'lucide-react';

const whatWeBuild = [
  {
    icon: Server,
    title: 'Operational decision layer',
    body: 'A layer on top of ERP, CRM, database and file systems that continuously monitors operational signals and business KPIs.',
  },
  {
    icon: Brain,
    title: 'Explainable recommendations',
    body: 'Every risk signal is supported by context, contributing factors and recommended next steps.',
  },
  {
    icon: Target,
    title: 'Private-first deployment',
    body: 'Designed for organizations that need control over their data, with private cloud and on-premise deployment options.',
  },
];

const principles = [
  'Explainability before automation',
  'Human-in-the-loop by design',
  'Private deployment when required',
  'Operational value over AI hype',
  'Decision support, not black-box replacement',
];

const validation = [
  'Tested across multiple business domains including distribution, procurement, manufacturing and regulated environments.',
  'Processed large-scale operational datasets to identify risk patterns, anomalies and decision opportunities.',
  'Supported by European startup and innovation ecosystem programs.',
  'Engaged in customer and partner discussions with ERP, cloud and operational technology stakeholders.',
];

export default function About() {
  return (
    <div className="w-full">
      {/* 1. Hero */}
      <section className="w-full bg-white pt-16 pb-12 md:pt-24 md:pb-16 relative overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-accent/[0.04] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[400px] h-[400px] rounded-full bg-blue-400/[0.04] blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">About StableScore AI</p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-navy-900 leading-[1.1] tracking-tight">
              We build decision intelligence for operational companies.
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              StableScore AI helps companies turn ERP, business and operational data into explainable risk signals, root-cause insights and recommended actions before problems turn into revenue loss.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Our Approach */}
      <section className="w-full bg-bg-light py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Approach</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight mb-6">
              Our approach
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              We believe operational companies do not need more dashboards or disconnected AI tools. They need systems that continuously turn operational data into explainable decisions.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Mission */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Our Mission</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight mb-6">
              Close the decision gap.
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              Companies do not lack dashboards, reports or data. They lack a continuous decision system that helps teams understand what is changing, why it matters and what should be done next. StableScore AI exists to close that decision gap.
            </p>
          </div>
        </div>
      </section>

      {/* 4. What We Build */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">What We Build</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight">
              Three capabilities. One decision layer.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {whatWeBuild.map((item) => (
              <div
                key={item.title}
                className="bg-bg-light border border-border rounded-2xl p-8 hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                  <item.icon size={22} className="text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-3">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Built Around Operational Reality */}
      <section className="w-full bg-bg-light py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Reality</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight mb-6">
                Built around operational reality
              </h2>
            </div>
            <div className="space-y-4">
              {[
                'ERP-driven operational environments',
                'Cross-system operational visibility',
                'Explainable recommendation systems',
                'Human-in-the-loop operational support',
                'Decision traceability and trust',
              ].map((p) => (
                <div key={p} className="flex items-start gap-3">
                  <Check size={18} className="text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-base text-navy-800">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Principles */}
      <section className="w-full bg-navy-900 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-[20%] left-[-5%] w-[300px] h-[300px] rounded-full bg-accent/[0.08] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[-5%] w-[350px] h-[350px] rounded-full bg-indigo-400/[0.06] blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-xs font-semibold text-accent-light uppercase tracking-wider mb-3">Our Principles</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                How we think about building for operations.
              </h2>
            </div>
            <div className="space-y-4">
              {principles.map((p) => (
                <div key={p} className="flex items-start gap-3">
                  <Check size={18} className="text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-base text-gray-200">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Team */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Team</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight mb-6">
                Built by operators, engineers and data scientists.
              </h2>
              <p className="text-base text-muted leading-relaxed">
                StableScore AI is built by a founding team with experience across AI systems, data science, business development and enterprise technology. The team combines technical execution with a deep understanding of operational decision-making in real business environments.
              </p>
            </div>
            <div className="bg-bg-light border border-border rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Users size={20} className="text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy-900 mb-1">Interested in our team?</p>
                  <p className="text-sm text-muted leading-relaxed">
                    Detailed team information can be shared during investor, partner or customer discussions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Validation */}
      <section className="w-full bg-bg-light py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Validation</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight">
              Tested. Validated. Growing.
            </h2>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {validation.map((v) => (
              <div key={v} className="flex items-start gap-4 bg-white border border-border rounded-xl p-6">
                <Check size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-navy-800 leading-relaxed">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight mb-6">
            Want to understand how StableScore AI could work with your operational data?
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/demo"
              className="inline-flex items-center gap-2 bg-navy-900 text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-navy-700 transition-colors"
            >
              Request a Demo
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-border text-navy-800 text-sm font-medium px-6 py-3 rounded-lg hover:bg-bg-light transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

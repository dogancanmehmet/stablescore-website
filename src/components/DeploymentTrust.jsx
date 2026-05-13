import { Link } from 'react-router-dom';
import { Cloud, Shield, Server, Users, Brain, FileCheck, ArrowRight, Clock, Lock, Gauge } from 'lucide-react';

const features = [
  { icon: Cloud, label: 'SaaS' },
  { icon: Shield, label: 'Private Cloud' },
  { icon: Server, label: 'On-Premise' },
  { icon: Users, label: 'Human Oversight' },
  { icon: Brain, label: 'Explainable AI' },
  { icon: FileCheck, label: 'Audit Trail' },
];

export default function DeploymentTrust() {
  return (
    <section className="w-full bg-bg-light py-16 md:py-24 relative overflow-hidden">
      {/* Soft gradient blob */}
      <div className="absolute top-[40%] right-[-5%] w-[350px] h-[350px] rounded-full bg-green-400/[0.04] blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">TRUST & COMPLIANCE</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight mb-6">
              Bank-grade security, SMB speed.
            </h2>
            <p className="text-base text-muted leading-relaxed mb-8">
              GDPR and EU AI Act aligned, with end-to-end encryption and full data sovereignty. Your data is never sold or shared with third parties.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: Lock, title: 'Data Sovereignty', desc: 'You fully own your data' },
                { icon: Gauge, title: 'GDPR Aligned', desc: 'Full EU data law compliance' },
                { icon: Clock, title: '99.9% Uptime', desc: 'SLA guarantee' },
                { icon: Shield, title: 'Privacy First', desc: 'Never sold or shared' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white border border-border flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-navy-800" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy-900">{item.title}</p>
                    <p className="text-xs text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-6">
              {features.map((f) => (
                <div key={f.label} className="flex items-center gap-2">
                  <f.icon size={18} className="text-navy-800" strokeWidth={1.5} />
                  <span className="text-sm font-medium text-navy-800">{f.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-border rounded-2xl p-8 shadow-sm">
            <div className="bg-green-50 border border-green-100 rounded-xl p-4 mb-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                <Shield size={16} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-navy-900">Investor-Ready Security</p>
                <p className="text-xs text-muted">Pass due diligence security checklists in one go.</p>
              </div>
            </div>
            <h3 className="text-xl font-bold text-navy-900 mb-2">
              What is your data trying to tell you?
            </h3>
            <p className="text-sm text-muted mb-6 leading-relaxed">
              Discover StableScore with a live demo tailored to your operations. Free, 30 minutes, no obligation.
            </p>
            <Link
              to="/demo"
              className="inline-flex items-center gap-2 bg-accent text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-accent-light transition-colors"
            >
              Get Free Demo
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

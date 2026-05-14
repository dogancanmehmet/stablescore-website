import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Target,
  Users,
  Lightbulb,
  Shield,
  Globe,
  Heart,
  MapPin,
  Mail,
  ExternalLink,
} from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Outcome First',
    desc: 'We measure success by the tangible results our customers achieve — not by features shipped.',
  },
  {
    icon: Lightbulb,
    title: 'Explainable by Design',
    desc: 'Every recommendation must be understandable. No black boxes, no hidden logic.',
  },
  {
    icon: Users,
    title: 'Human in the Loop',
    desc: 'AI augments human judgment, never replaces it. Operators stay in control.',
  },
  {
    icon: Shield,
    title: 'Enterprise Trust',
    desc: 'Security, compliance, and data privacy are non-negotiable foundations of everything we build.',
  },
  {
    icon: Globe,
    title: 'Built in Germany',
    desc: 'Engineered with German standards of reliability, precision, and long-term thinking.',
  },
  {
    icon: Heart,
    title: 'Customer Partnership',
    desc: 'We work alongside our customers, co-developing solutions that fit their reality.',
  },
];

const team = [
  { name: 'Dr. Klaus Richter', role: 'CEO & Co-Founder', initials: 'KR' },
  { name: 'Sarah Hoffmann', role: 'CTO & Co-Founder', initials: 'SH' },
  { name: 'Marcus Chen', role: 'Chief Product Officer', initials: 'MC' },
  { name: 'Anna Müller', role: 'VP of Engineering', initials: 'AM' },
  { name: 'Thomas Weber', role: 'Head of Customer Success', initials: 'TW' },
  { name: 'Elena Rossi', role: 'Lead Data Scientist', initials: 'ER' },
];

const milestones = [
  { year: '2021', title: 'Founded in Berlin', desc: 'StableScore AI founded with a mission to democratize operational intelligence.' },
  { year: '2022', title: 'First Enterprise Customers', desc: 'Signed first three mid-market manufacturing and distribution clients.' },
  { year: '2023', title: 'Platform Launch', desc: 'Public launch of the StableScore platform with four core intelligence modules.' },
  { year: '2024', title: 'Platform Expansion', desc: 'Expanded platform capabilities into FMCG, financial services, and healthcare verticals.' },
];

export default function About() {
  return (
    <div className="w-full">
      {/* 1. Hero */}
      <section id="about-us" className="w-full bg-white pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">ABOUT US</p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-navy-900 leading-[1.1] tracking-tight">
              Decision Intelligence for operational excellence.
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              StableScore AI was founded in Germany with a simple mission: turn operational data into clear, prioritized, and explainable next actions.
            </p>
            <p className="mt-4 text-lg text-muted leading-relaxed">
              We believe mid-sized companies deserve the same AI capabilities as enterprises — without the complexity, cost, or black-box models.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Story / Milestones */}
      <section id="story" className="w-full bg-bg-light py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">OUR STORY</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight mb-6">
                Built by operators, for operators.
              </h2>
              <p className="text-base text-muted leading-relaxed mb-5">
                Our founders spent years running supply chain and operations teams at mid-sized companies. They experienced firsthand the frustration of having data but lacking actionable insight.
              </p>
              <p className="text-base text-muted leading-relaxed mb-5">
                StableScore was born from a simple question: What if AI could tell you exactly what to fix, before it impacts your business?
              </p>
              <p className="text-base text-muted leading-relaxed">
                Today, we serve operational teams across manufacturing, distribution, retail, and financial services — helping them move from reactive firefighting to proactive decision-making.
              </p>
            </div>

            <div className="space-y-0">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex gap-6 pb-8 last:pb-0 relative">
                  {i < milestones.length - 1 && (
                    <div className="absolute left-[1.125rem] top-10 bottom-0 w-px bg-border" />
                  )}
                  <div className="w-9 h-9 rounded-full bg-accent text-white text-sm font-bold flex items-center justify-center flex-shrink-0 z-10">
                    {m.year.slice(-2)}
                  </div>
                  <div className="pt-0.5">
                    <p className="text-sm font-semibold text-navy-900">{m.title}</p>
                    <p className="text-sm text-muted leading-relaxed mt-1">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Values */}
      <section id="values" className="w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">OUR VALUES</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight">
              What drives us every day.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-bg-light border border-border rounded-2xl p-8 hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                  <v.icon size={22} className="text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">{v.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Team */}
      <section id="team" className="w-full bg-bg-light py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">OUR TEAM</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight">
              Meet the people behind StableScore.
            </h2>
            <p className="mt-4 text-base text-muted leading-relaxed">
              A diverse team of engineers, data scientists, and operators united by one mission.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white border border-border rounded-2xl p-6 flex items-center gap-4 hover:shadow-sm transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-navy-900 text-white text-lg font-bold flex items-center justify-center flex-shrink-0">
                  {member.initials}
                </div>
                <div>
                  <p className="text-base font-semibold text-navy-900">{member.name}</p>
                  <p className="text-sm text-muted">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Careers */}
      <section id="careers" className="w-full bg-navy-900 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-xs font-semibold text-accent-light uppercase tracking-wider mb-3">CAREERS</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
                Join us in building the future of operational intelligence.
              </h2>
              <p className="text-base text-gray-300 leading-relaxed mb-8">
                We're always looking for exceptional people who are passionate about solving real operational problems with AI. Remote-first, Berlin-based.
              </p>
              <div className="space-y-3">
                {[
                  'Senior ML Engineer',
                  'Product Designer',
                  'Customer Success Manager',
                  'Sales Director — DACH',
                ].map((job) => (
                  <div
                    key={job}
                    className="flex items-center justify-between bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-3 hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <span className="text-sm font-medium text-white">{job}</span>
                    <ArrowRight size={14} className="text-gray-400" />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-accent-light" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Location</p>
                  <p className="text-sm text-gray-300">Berlin, Germany — Remote-first</p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-accent-light" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Contact</p>
                  <p className="text-sm text-gray-300">careers@stablescore.ai</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <ExternalLink size={20} className="text-accent-light" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Follow us</p>
                  <p className="text-sm text-gray-300">LinkedIn — StableScore AI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Contact / Office */}
      <section id="contact-cta" className="w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-bg-light border border-border rounded-2xl p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 leading-tight mb-2">
                Want to learn more?
              </h2>
              <p className="text-base text-muted leading-relaxed">
                Whether you're interested in a partnership, press inquiry, or just want to say hello — we'd love to hear from you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-navy-900 text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-navy-700 transition-colors"
              >
                Contact Us
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center justify-center gap-2 border border-border text-navy-800 text-sm font-medium px-6 py-3 rounded-lg hover:bg-white transition-colors"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { ArrowRight, Check } from 'lucide-react';

const benefits = [
  'Personalized platform walkthrough',
  'Q&A with our solutions team',
  'Custom value assessment for your operations',
  'No commitment required',
];

export default function Demo() {
  return (
    <section className="w-full py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">BOOK A DEMO</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-navy-900 leading-tight mb-6">
              See what your data is trying to tell you.
            </h1>
            <p className="text-lg text-muted leading-relaxed mb-8">
              Book a live walkthrough tailored to your operations. We'll show you how StableScore identifies risks, reveals opportunities, and recommends clear next actions.
            </p>
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm text-navy-800">
                  <Check size={16} className="text-green-500 flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-bg-light border border-border rounded-2xl p-8">
            <h3 className="text-lg font-semibold text-navy-900 mb-6">Request your demo</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-1">First name</label>
                  <input type="text" className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent" placeholder="Jane" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-900 mb-1">Last name</label>
                  <input type="text" className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-900 mb-1">Work email</label>
                <input type="email" className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent" placeholder="jane@company.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-900 mb-1">Company</label>
                <input type="text" className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent" placeholder="Acme Inc." />
              </div>
              <div>
                <label className="block text-sm font-medium text-navy-900 mb-1">What are you most interested in?</label>
                <select className="w-full px-4 py-2.5 rounded-lg border border-border bg-white text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent text-muted">
                  <option>Select an option</option>
                  <option>Inventory Intelligence</option>
                  <option>Procurement Intelligence</option>
                  <option>Operational Risk</option>
                  <option>Demand Signals</option>
                  <option>General overview</option>
                </select>
              </div>
              <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-accent text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-accent-light transition-colors mt-2">
                Book a Demo
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

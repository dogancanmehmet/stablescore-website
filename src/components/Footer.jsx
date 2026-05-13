import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const links = {
  PLATFORM: [
    { label: 'Overview', to: '/platform#overview' },
    { label: 'Architecture', to: '/platform#architecture' },
    { label: 'Integrations', to: '/platform#integrations' },
    { label: 'Security', to: '/platform#security' },
  ],
  SOLUTIONS: [
    { label: 'Inventory Intelligence', to: '/solutions#inventory-intelligence' },
    { label: 'Procurement Intelligence', to: '/solutions#procurement-intelligence' },
    { label: 'Operational Risk', to: '/solutions#operational-risk' },
    { label: 'Demand Signals', to: '/solutions#demand-signals' },
    { label: 'Industries', to: '/industries' },
  ],
  'CASE STUDIES': [
    { label: 'All Case Studies', to: '/case-studies' },
    { label: 'FMCG Distribution', to: '/case-studies#fmcg-distribution' },
    { label: 'Manufacturing', to: '/case-studies#manufacturing' },
    { label: 'Financial Operations', to: '/case-studies#financial-operations' },
  ],
  COMPANY: [
    { label: 'About Us', to: '/about#about-us' },
    { label: 'Careers', to: '/about#careers' },
    { label: 'News', to: '/news' },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-navy-900 rounded-md flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-lg font-bold text-navy-900 tracking-tight">
                STABLESCORE<span className="font-normal text-muted"> AI</span>
              </span>
            </Link>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              Decision Intelligence for operational excellence.
            </p>
          </div>

          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <p className="text-xs font-semibold text-navy-900 uppercase tracking-wider mb-4">{title}</p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link to={item.to} className="text-sm text-muted hover:text-navy-900 transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="text-xs font-semibold text-navy-900 uppercase tracking-wider mb-4">CONTACT</p>
            <ul className="space-y-2.5">
              <li>
                <a href="mailto:hello@stablescore.ai" className="text-sm text-muted hover:text-navy-900 transition-colors">
                  hello@stablescore.ai
                </a>
              </li>
              <li>
                <a href="tel:+4917612345678" className="text-sm text-muted hover:text-navy-900 transition-colors">
                  +49 176 12345678
                </a>
              </li>
              <li>
                <a href="#" className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-bg-light border border-border text-navy-800 hover:bg-navy-900 hover:text-white transition-colors mt-2">
                  <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            © 2024 StableScore AI GmbH. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-xs text-muted hover:text-navy-900 transition-colors">Privacy Policy</Link>
            <Link to="/impressum" className="text-xs text-muted hover:text-navy-900 transition-colors">Impressum</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

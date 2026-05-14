import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { label: 'Platform', to: '/platform' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Industries', to: '/industries' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'About', to: '/about' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
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

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? 'text-accent' : 'text-navy-800 hover:text-accent'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contact"
              className="text-sm font-medium text-navy-800 hover:text-accent transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center gap-2 bg-accent text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-accent-light transition-colors"
            >
              Request a Demo
              <ArrowRight size={14} />
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-navy-900"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-white px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="flex items-center justify-between text-sm font-medium text-navy-800 py-2"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/demo"
            className="block w-full mt-3 bg-accent text-white text-sm font-medium px-5 py-2.5 rounded-lg text-center"
            onClick={() => setMobileOpen(false)}
          >
            Request a Demo
          </Link>
        </div>
      )}
    </nav>
  );
}

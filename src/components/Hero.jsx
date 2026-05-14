import { Link } from 'react-router-dom';
import { ArrowRight, AlertTriangle, Search, FileText, ThumbsUp, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className="w-full bg-white pt-16 pb-12 md:pt-24 md:pb-16 relative overflow-hidden">
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-accent/[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-15%] left-[-10%] w-[400px] h-[400px] rounded-full bg-blue-400/[0.04] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-navy-900 leading-[1.1] tracking-tight">
              Act before operational risk becomes revenue loss.
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              StableScore AI connects to ERP and operational data to detect risks, explain root causes, and recommend the next best action — before stock-outs, waste, delays, or missed sales hit your business.
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
                Explore the Platform
              </Link>
            </div>
            <p className="mt-6 text-xs text-muted">
              Built for mid-sized FMCG distributors and operational companies using ERP systems.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -top-3 left-4 z-10">
              <span className="px-2.5 py-1 bg-navy-900 text-white text-[10px] font-medium rounded-md shadow-sm">
                Example decision card
              </span>
            </div>
            <div className="bg-white rounded-xl shadow-2xl border border-border overflow-hidden">
              <div className="flex">
                <div className="w-56 bg-navy-900 p-4 hidden sm:block">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-6 h-6 bg-white/10 rounded flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2L2 7l10 5 10-5-10-5z" />
                        <path d="M2 17l10 5 10-5" />
                        <path d="M2 12l10 5 10-5" />
                      </svg>
                    </div>
                    <span className="text-xs font-semibold text-white">STABLESCORE</span>
                  </div>
                  <nav className="space-y-1">
                    {['Overview', 'Alerts', 'Recommendations', 'Inventory', 'Procurement', 'Demand Signals', 'Reports', 'Settings'].map((item, i) => (
                      <div
                        key={item}
                        className={`flex items-center gap-3 px-3 py-2 rounded-md text-xs ${i === 0 ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white'}`}
                      >
                        <div className="w-4 h-4 rounded-sm bg-white/10" />
                        {item}
                      </div>
                    ))}
                  </nav>
                </div>
                <div className="flex-1 p-5">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-semibold text-navy-900">Decision Card</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-gray-100" />
                      <div className="w-4 h-4 rounded-full bg-gray-100" />
                      <div className="w-6 h-6 rounded-full bg-accent/10 text-accent text-[10px] flex items-center justify-center font-bold">A</div>
                    </div>
                  </div>

                  {/* Decision Card */}
                  <div className="bg-red-50 border border-red-100 rounded-xl p-4 mb-4">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                        <AlertTriangle size={16} className="text-red-600" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-red-700 uppercase tracking-wide">High Priority Risk</p>
                        <p className="text-sm font-bold text-navy-900">Stock-out exposure in Product Group XYZ</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div className="bg-white/60 rounded-lg p-2.5">
                        <p className="text-[9px] text-muted uppercase tracking-wide">Financial Impact</p>
                        <p className="text-sm font-bold text-navy-900">€240K est. revenue at risk</p>
                      </div>
                      <div className="bg-white/60 rounded-lg p-2.5">
                        <p className="text-[9px] text-muted uppercase tracking-wide">Time to Impact</p>
                        <p className="text-sm font-bold text-navy-900">8 days</p>
                      </div>
                    </div>
                    <div className="space-y-1.5 mb-3">
                      <div className="flex items-center gap-2">
                        <Search size={12} className="text-red-500 flex-shrink-0" />
                        <p className="text-[11px] text-navy-800"><strong>Root cause:</strong> Demand increased 34% vs forecast; current stock covers 12 days; supplier lead time is 18 days.</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText size={12} className="text-red-500 flex-shrink-0" />
                        <p className="text-[11px] text-navy-800"><strong>Contributing signals:</strong> 3 SKUs below safety stock; 2 suppliers with extended lead times.</p>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-[9px] text-muted uppercase tracking-wide mb-1.5">Recommended Action</p>
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-navy-900">Emergency reorder 1,200 units</p>
                        <span className="px-2 py-0.5 bg-accent/10 text-accent text-[10px] font-semibold rounded-full">Confidence: 87%</span>
                      </div>
                    </div>
                  </div>

                  {/* Approval row */}
                  <div className="flex items-center gap-3 bg-bg-light rounded-lg p-3 mb-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center">
                        <Shield size={12} className="text-amber-600" />
                      </div>
                      <span className="text-[10px] text-navy-800 font-medium">Pending approval</span>
                    </div>
                    <div className="flex-1 h-px bg-border" />
                    <div className="flex items-center gap-2">
                      <button className="px-3 py-1.5 bg-white border border-border rounded-md text-[10px] font-medium text-muted hover:bg-bg-light transition-colors">
                        Review
                      </button>
                      <button className="px-3 py-1.5 bg-accent text-white rounded-md text-[10px] font-medium hover:bg-accent-light transition-colors flex items-center gap-1">
                        <ThumbsUp size={10} />
                        Approve
                      </button>
                    </div>
                  </div>

                  {/* Secondary cards */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-bg-light rounded-lg p-3">
                      <p className="text-[9px] text-muted uppercase tracking-wide mb-2">Watchlist</p>
                      <div className="space-y-2">
                        {['Dead stock: €45K', 'Supplier delay: 2 days'].map((item) => (
                          <div key={item} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                            <span className="text-[10px] text-navy-800">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-bg-light rounded-lg p-3">
                      <p className="text-[9px] text-muted uppercase tracking-wide mb-2">System Status</p>
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        <span className="text-[10px] text-navy-800">Monitoring active</span>
                      </div>
                      <p className="text-[9px] text-muted mt-1">8 data sources connected</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

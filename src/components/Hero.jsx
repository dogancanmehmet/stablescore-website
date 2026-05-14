import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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
              Built for operational teams at mid-sized companies across Europe.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -top-3 left-4 z-10">
              <span className="px-2.5 py-1 bg-navy-900 text-white text-[10px] font-medium rounded-md shadow-sm">
                Example operational cockpit
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
                    <h3 className="text-sm font-semibold text-navy-900">Overview</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-gray-100" />
                      <div className="w-4 h-4 rounded-full bg-gray-100" />
                      <div className="w-6 h-6 rounded-full bg-accent/10 text-accent text-[10px] flex items-center justify-center font-bold">A</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {[
                      { label: 'At Risk Revenue', value: '€2.4M', change: '+16% vs last 30 days', color: 'text-red-500' },
                      { label: 'Stock-out Risk', value: '215', change: '+23%', color: 'text-red-500' },
                      { label: 'Dead Stock Value', value: '€1.7M', change: '-11%', color: 'text-green-500' },
                      { label: 'Missed Sales (Est.)', value: '€890K', change: '+16%', color: 'text-red-500' },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-bg-light rounded-lg p-3">
                        <p className="text-[10px] text-muted uppercase tracking-wide">{stat.label}</p>
                        <p className="text-lg font-bold text-navy-900 mt-1">{stat.value}</p>
                        <p className={`text-[10px] mt-0.5 ${stat.color}`}>{stat.change}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-bg-light rounded-lg p-3 mb-3">
                    <p className="text-[10px] text-muted uppercase tracking-wide mb-2">Risk Exposure Over Time</p>
                    <div className="h-16 flex items-end gap-1">
                      {[40, 55, 45, 60, 50, 70, 55, 65, 75, 60, 50, 55].map((h, i) => (
                        <div key={i} className="flex-1 bg-accent/20 rounded-sm" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                    <div className="flex justify-between mt-1 text-[9px] text-muted">
                      <span>Apr 15</span>
                      <span>Apr 22</span>
                      <span>Apr 29</span>
                      <span>May 6</span>
                      <span>May 13</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-1 bg-bg-light rounded-lg p-3">
                      <p className="text-[10px] text-muted uppercase tracking-wide mb-2">Recommended Actions</p>
                      <div className="space-y-2">
                        {['Reorder XYZ product group', 'Reduce overstock in 8 SKUs', 'Review supplier lead time'].map((action) => (
                          <div key={action} className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-accent" />
                            <span className="text-[10px] text-navy-800">{action}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-[10px] text-accent mt-2">See all recommendations →</p>
                    </div>
                    <div className="w-28 bg-bg-light rounded-lg p-3">
                      <p className="text-[10px] text-muted uppercase tracking-wide mb-2">System Status</p>
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        <span className="text-[10px] text-navy-800">All systems operational</span>
                      </div>
                      <p className="text-[9px] text-muted mt-2">Updated 15 min ago</p>
                      <p className="text-[9px] text-muted">12 data sources connected</p>
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

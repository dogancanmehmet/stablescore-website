import { Clock, Zap } from 'lucide-react';

export default function ContinuousDecisionSupport() {
  return (
    <section className="w-full bg-white py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-accent/[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Category</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-navy-900 leading-[1.1] mb-6">
              Continuous. Not periodic.
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-8">
              Operational risks evolve every day. Reporting cycles are too slow. StableScore monitors continuously and surfaces what matters before problems become visible.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center">
                  <Clock size={20} className="text-red-500" />
                </div>
                <div>
                  <p className="text-xs text-muted">Traditional</p>
                  <p className="text-sm font-bold text-navy-900">Monthly reports</p>
                </div>
              </div>
              <div className="w-12 h-px bg-border" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center">
                  <Zap size={20} className="text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-muted">StableScore</p>
                  <p className="text-sm font-bold text-navy-900">Real-time signals</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-bg-light border border-border rounded-2xl p-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 opacity-40">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-500">1</div>
                  <div className="flex-1">
                    <p className="text-xs font-medium text-navy-900">Monthly ERP report generated</p>
                    <p className="text-[10px] text-muted">Problem already happened</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 opacity-60">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-500">2</div>
                  <div className="flex-1">
                    <p className="text-xs font-medium text-navy-900">Team analyzes spreadsheet</p>
                    <p className="text-[10px] text-muted">Days of manual work</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 opacity-80">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-500">3</div>
                  <div className="flex-1">
                    <p className="text-xs font-medium text-navy-900">Problem identified in meeting</p>
                    <p className="text-[10px] text-muted">Weeks too late</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-accent/5 border border-accent/20 rounded-xl p-3">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-[10px] font-bold text-white">✓</div>
                  <div className="flex-1">
                    <p className="text-xs font-bold text-navy-900">StableScore detects risk early</p>
                    <p className="text-[10px] text-accent font-medium">Action recommended instantly</p>
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

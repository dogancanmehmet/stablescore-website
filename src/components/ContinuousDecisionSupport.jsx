export default function ContinuousDecisionSupport() {
  return (
    <section className="w-full bg-white py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-accent/[0.03] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-15%] left-[-10%] w-[400px] h-[400px] rounded-full bg-blue-400/[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">Category</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight mb-4">
            Not periodic reporting. Continuous decision support.
          </h2>
          <p className="text-lg text-muted leading-relaxed mb-6">
            Operational risks evolve continuously. Decision support should too.
          </p>
          <p className="text-base text-muted leading-relaxed">
            StableScore AI continuously monitors operational signals and highlights what matters before problems become visible in traditional reporting cycles.
          </p>
        </div>
      </div>
    </section>
  );
}

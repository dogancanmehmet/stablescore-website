import Hero from '../components/Hero';
import TractionBar from '../components/TractionBar';
import TrustBar from '../components/TrustBar';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import OperationalDecisionLayer from '../components/OperationalDecisionLayer';
import HowItWorks from '../components/HowItWorks';
import ContinuousDecisionSupport from '../components/ContinuousDecisionSupport';
import UseCases from '../components/UseCases';
import ExplainabilitySection from '../components/ExplainabilitySection';
import WhyEmbedded from '../components/WhyEmbedded';
import ComparisonSection from '../components/ComparisonSection';
import DeploymentTrust from '../components/DeploymentTrust';
import RiskReducers from '../components/RiskReducers';

export default function Home() {
  return (
    <>
      <Hero />
      <TractionBar />
      <TrustBar />
      <ProblemSection />
      <SolutionSection />
      <OperationalDecisionLayer />
      <HowItWorks />
      <ContinuousDecisionSupport />
      <UseCases />
      <ExplainabilitySection />
      <WhyEmbedded />
      <ComparisonSection />
      <DeploymentTrust />
      <RiskReducers />
    </>
  );
}

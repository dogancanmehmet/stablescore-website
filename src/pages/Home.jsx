import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import SocialProof from '../components/SocialProof';
import ComparisonSection from '../components/ComparisonSection';
import PricingTeaser from '../components/PricingTeaser';
import HowItWorks from '../components/HowItWorks';
import UseCases from '../components/UseCases';
import DeploymentTrust from '../components/DeploymentTrust';
import RiskReducers from '../components/RiskReducers';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProblemSection />
      <SolutionSection />
      <SocialProof />
      <ComparisonSection />
      <PricingTeaser />
      <HowItWorks />
      <UseCases />
      <DeploymentTrust />
      <RiskReducers />
    </>
  );
}

import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import CtaSection from "@/components/cta-section";
import ComparisonSection from "@/components/comparison-section";
import FAQSection from "@/components/faq-section";
import IntegrationPage from "@/components/integration-section";
import IntegrationMarquee from "@/components/integrationMarquee";
import HowItWorksSection from "@/components/works";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="h-px bg-border container mx-auto opacity-50"></div>
      <FeaturesSection />
      <HowItWorksSection />
      <ComparisonSection />
      <IntegrationPage />
      <IntegrationMarquee />
      <FAQSection />
      <CtaSection />
    </>
  );
}
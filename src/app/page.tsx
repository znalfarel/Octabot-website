import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import CtaSection from "@/components/cta-section";
import ComparisonSection from "@/components/comparison-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="h-px bg-border container mx-auto opacity-50"></div> {/* Subtle Divider */}
      <FeaturesSection />
      <ComparisonSection />
      <CtaSection />
    </>
  );
}
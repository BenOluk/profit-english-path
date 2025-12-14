import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import ArgumentSection from "@/components/landing/ArgumentSection";
import EventCTASection from "@/components/landing/EventCTASection";
import SegmentationSection from "@/components/landing/SegmentationSection";
import DiscoverySection from "@/components/landing/DiscoverySection";
import BioSection from "@/components/landing/BioSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import PricingSection from "@/components/landing/PricingSection";
import GuaranteeSection from "@/components/landing/GuaranteeSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";

const Index = () => {
  return (
    <main className="overflow-hidden">
      {/* BLOCO 1 - Hero */}
      <HeroSection />
      {/* BLOCO 2 - Features/Transição */}
      <FeaturesSection />
      {/* BLOCO 3 - Argument + What you learn */}
      <ArgumentSection />
      {/* BLOCO 4 - Event CTA/Transição */}
      <EventCTASection />
      {/* BLOCO 5 - Segmentation */}
      <SegmentationSection />
      {/* BLOCO 6 - Discovery */}
      <DiscoverySection />
      {/* Seções finais mantidas */}
      <BioSection />
      <TestimonialsSection />
      <PricingSection />
      <GuaranteeSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
};

export default Index;

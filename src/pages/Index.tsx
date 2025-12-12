import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import ArgumentSection from "@/components/landing/ArgumentSection";
import WhatYouLearnSection from "@/components/landing/WhatYouLearnSection";
import EventDetailsSection from "@/components/landing/EventDetailsSection";
import SegmentationSection from "@/components/landing/SegmentationSection";
import DiscoverySection from "@/components/landing/DiscoverySection";
import BioSection from "@/components/landing/BioSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import PricingSection from "@/components/landing/PricingSection";
import RecordedAccessSection from "@/components/landing/RecordedAccessSection";
import GuaranteeSection from "@/components/landing/GuaranteeSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <FeaturesSection />
      <ArgumentSection />
      <WhatYouLearnSection />
      <EventDetailsSection />
      <BioSection />
      <TestimonialsSection />
      <SegmentationSection />
      <DiscoverySection />
      <RecordedAccessSection />
      <PricingSection />
      <GuaranteeSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
};

export default Index;

import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import ArgumentSection from "@/components/landing/ArgumentSection";
import WhatYouLearnSection from "@/components/landing/WhatYouLearnSection";
import EventDetailsSection from "@/components/landing/EventDetailsSection";
import SegmentationSection from "@/components/landing/SegmentationSection";
import DiscoverySection from "@/components/landing/DiscoverySection";
import FinalCTASection from "@/components/landing/FinalCTASection";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <FeaturesSection />
      <ArgumentSection />
      <WhatYouLearnSection />
      <EventDetailsSection />
      <SegmentationSection />
      <DiscoverySection />
      <FinalCTASection />
    </main>
  );
};

export default Index;

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VipPlans from "@/components/VipPlans";
import AdditionalPackages from "@/components/AdditionalPackages";
import Differentials from "@/components/Differentials";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import FinalCall from "@/components/FinalCall";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <VipPlans />
      <AdditionalPackages />
      <Differentials />
      <TeamSection />
      <ContactSection />
      <FinalCall />
    </div>
  );
};

export default Index;

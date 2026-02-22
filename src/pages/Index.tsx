import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import SolutionsSection from "@/components/SolutionsSection";
import BenefitsSection from "@/components/BenefitsSection";
import QuoteBanner from "@/components/QuoteBanner";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <MissionSection />
        <SolutionsSection />
        <BenefitsSection />
        <QuoteBanner />
        <AboutSection />
        <ContactSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

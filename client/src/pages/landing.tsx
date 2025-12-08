import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import EmpathySection from "@/components/EmpathySection";
import SolutionSection from "@/components/SolutionSection";
import TrustSection from "@/components/TrustSection";
import MarketDataSection from "@/components/MarketDataSection";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col" data-testid="page-landing">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <EmpathySection />
        <SolutionSection />
        <TrustSection />
        <MarketDataSection />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

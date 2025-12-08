import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import EmpathySection from "@/components/EmpathySection";
import SolutionSection from "@/components/SolutionSection";
import TrustSection from "@/components/TrustSection";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";

export default function LandingPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden" data-testid="page-landing">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <EmpathySection />
        <SolutionSection />
        <TrustSection />
        <ProcessSection />
        <CTASection />
      </main>
    </div>
  );
}

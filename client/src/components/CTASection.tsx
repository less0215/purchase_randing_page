import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section 
      className="bg-primary/10 p-8 my-8 text-center"
      data-testid="section-cta"
    >
      <h2 
        className="text-2xl font-bold tracking-tight"
        data-testid="text-cta-headline"
      >
        지금 바로 시계의 진정한 가치를 확인하세요
      </h2>
      <p 
        className="mt-2 mb-6 text-muted-foreground text-base"
        data-testid="text-cta-subheadline"
      >
        전문가의 무료 견적을 받아보세요. 빠르고, 무료이며, 완전히 비밀이 보장됩니다.
      </p>
      <Link href="/quote">
        <Button 
          size="lg"
          className="w-full h-12 rounded-lg text-base font-bold"
          data-testid="button-cta-quote"
        >
          무료 견적 받기
        </Button>
      </Link>
    </section>
  );
}

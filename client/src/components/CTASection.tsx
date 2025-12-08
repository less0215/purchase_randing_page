import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, Clock, Globe } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 md:py-24" data-testid="section-cta">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <h2 
          className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4"
          data-testid="text-cta-headline"
        >
          내 롤렉스, 얼마에 팔 수 있을까?
        </h2>
        <p 
          className="text-lg text-muted-foreground mb-8"
          data-testid="text-cta-subheadline"
        >
          24시간 내 견적을 안내해 드립니다
        </p>
        
        <Link href="/quote">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 mb-8"
            data-testid="button-cta-quote"
          >
            무료 견적 받아보기
          </Button>
        </Link>
        
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Badge variant="secondary" className="px-3 py-1.5">
            <Building2 className="w-3.5 h-3.5 mr-1.5" />
            홍콩 법인 보유
          </Badge>
          <Badge variant="secondary" className="px-3 py-1.5">
            <Clock className="w-3.5 h-3.5 mr-1.5" />
            24시간 내 회신
          </Badge>
          <Badge variant="secondary" className="px-3 py-1.5">
            <Globe className="w-3.5 h-3.5 mr-1.5" />
            스탬핑 무관
          </Badge>
        </div>
      </div>
    </section>
  );
}

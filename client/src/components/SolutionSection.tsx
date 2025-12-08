import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Shield, Zap } from "lucide-react";

const solutionCards = [
  {
    icon: TrendingUp,
    title: "업계 최고가 약속",
    description: "독자적인 글로벌 유통망을 보유해 타업체보다 높은 가격을 제시해 드릴 수 있습니다.",
  },
  {
    icon: Shield,
    title: "철저한 비밀 유지",
    description: "모든 거래 관련 소통은 텔레그램으로 소통하기 때문에 개인 정보 노출은 걱정하지 않으셔도 됩니다.",
  },
  {
    icon: Zap,
    title: "간단한 거래 프로세스",
    description: "문의부터 매입까지 단 3단계, 복잡한 절차 없이 신속하게 진행됩니다.",
  },
];

export default function SolutionSection() {
  return (
    <section className="py-12 md:py-20" data-testid="section-solution">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h2 
          className="text-2xl md:text-3xl font-bold text-center mb-10"
          data-testid="text-solution-headline"
        >
          명쾌한 해결책을 제시합니다
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutionCards.map((card, index) => (
            <Card 
              key={index}
              className="hover-elevate transition-transform duration-200"
              data-testid={`card-solution-${index}`}
            >
              <CardContent className="p-6 md:p-8 text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <card.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-3" data-testid={`text-solution-title-${index}`}>
                  {card.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid={`text-solution-desc-${index}`}>
                  {card.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

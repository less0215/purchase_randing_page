import { Card, CardContent } from "@/components/ui/card";
import { Globe, TrendingDown, Users, Lock } from "lucide-react";

const empathyCards = [
  {
    icon: Globe,
    title: "해외스탬핑 롤렉스 매입 거부",
    description: "국내 A/S 불가 등 이유로 팔고 싶어도 팔지 못하시지 않으셨나요?",
  },
  {
    icon: TrendingDown,
    title: "아무도 사지 않는 비인기 모델",
    description: "인기 모델이 아니라는 이유로 처분하기 어렵지 않으셨나요?",
  },
  {
    icon: Users,
    title: "AD 관계 유지",
    description: "매각 사실이 AD에게 알려지면 관계가 틀어질까봐 걱정 되지 않으신가요?",
  },
  {
    icon: Lock,
    title: "거래 이력 비공개",
    description: "여러가지 이유로 인해 거래 이력이 남지 않는 거래를 원하시지 않으신가요?",
  },
];

export default function EmpathySection() {
  return (
    <section className="py-12 md:py-20 bg-card/50" data-testid="section-empathy">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h2 
          className="text-2xl md:text-3xl font-bold text-center mb-10"
          data-testid="text-empathy-headline"
        >
          혹시 이런 경험 있으신가요?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {empathyCards.map((card, index) => (
            <Card 
              key={index} 
              className="hover-elevate transition-transform duration-200"
              data-testid={`card-empathy-${index}`}
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <card.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg" data-testid={`text-empathy-title-${index}`}>
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed" data-testid={`text-empathy-desc-${index}`}>
                      {card.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

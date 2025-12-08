import { Banknote, ShieldCheck, Rocket } from "lucide-react";

const solutionCards = [
  {
    icon: Banknote,
    title: "업계 최고가",
    description: "글로벌 시장 데이터를 활용해 최상의 가격을 제시합니다.",
  },
  {
    icon: ShieldCheck,
    title: "비밀 보장",
    description: "프라이버시가 최우선입니다. 모든 거래는 안전하고 비공개로 진행됩니다.",
  },
  {
    icon: Rocket,
    title: "간편하고 빠른 프로세스",
    description: "3단계 간소화된 매입 프로세스로 빠르게 대금을 받으세요.",
  },
];

export default function SolutionSection() {
  return (
    <section data-testid="section-solution">
      <h2 
        className="text-2xl font-bold leading-tight tracking-tight px-4 pb-3 pt-8"
        data-testid="text-solution-headline"
      >
        SUN MOON의 해결책
      </h2>
      
      <div className="flex flex-col gap-4 p-4">
        {solutionCards.map((card, index) => (
          <div 
            key={index}
            className="flex items-center gap-4 rounded-lg p-4 bg-primary/10"
            data-testid={`card-solution-${index}`}
          >
            <card.icon className="w-8 h-8 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-bold text-base" data-testid={`text-solution-title-${index}`}>
                {card.title}
              </h3>
              <p className="text-muted-foreground text-sm" data-testid={`text-solution-desc-${index}`}>
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

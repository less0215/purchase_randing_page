import { Globe, Watch, Handshake, Lock } from "lucide-react";

const empathyCards = [
  {
    icon: Globe,
    title: "해외 스탬핑",
    description: "구매 지역에 관계없이 모든 시계를 매입합니다.",
  },
  {
    icon: Watch,
    title: "비인기 모델",
    description: "해외 시세 데이터로 어떤 모델이든 최적의 가격을 제시합니다.",
  },
  {
    icon: Handshake,
    title: "AD 관계 우려",
    description: "거래는 완전히 독립적이고 비공개로 진행됩니다.",
  },
  {
    icon: Lock,
    title: "철저한 비밀 보장",
    description: "번거로움이나 프라이버시 걱정 없이 시계를 판매하세요.",
  },
];

export default function EmpathySection() {
  return (
    <section data-testid="section-empathy">
      <h2 
        className="text-2xl font-bold leading-tight tracking-tight px-4 pb-3 pt-8"
        data-testid="text-empathy-headline"
      >
        롤렉스 판매, 어려우셨나요?
      </h2>
      <p className="text-muted-foreground text-base font-normal leading-relaxed pb-3 pt-1 px-4">
        비인기 모델, 해외 스탬핑, 비밀 판매가 필요하신 분들의 어려움을 잘 알고 있습니다.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4">
        {empathyCards.map((card, index) => (
          <div 
            key={index}
            className="flex flex-1 gap-3 rounded-lg border bg-card p-4 flex-col"
            data-testid={`card-empathy-${index}`}
          >
            <card.icon className="w-6 h-6 text-primary" />
            <div className="flex flex-col gap-1">
              <h3 className="text-base font-bold leading-tight" data-testid={`text-empathy-title-${index}`}>
                {card.title}
              </h3>
              <p className="text-muted-foreground text-sm font-normal leading-normal" data-testid={`text-empathy-desc-${index}`}>
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

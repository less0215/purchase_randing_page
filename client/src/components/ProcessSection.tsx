import { FileText, Search, Banknote } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: FileText,
    title: "견적 문의",
    description: "온라인 견적폼을 작성해 문의해 주세요",
  },
  {
    number: "2",
    icon: Search,
    title: "전문가 감정 및 가격 제안",
    description: "작성해 주신 견적폼 내용을 바탕삼아 전문가가 견적가를 제시해 드립니다",
  },
  {
    number: "3",
    icon: Banknote,
    title: "매입 완료 및 즉시 지급",
    description: "제안 받은 매입가가 마음에 드시면 24시간 내 대금 지급을 해드립니다",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-12 md:py-20 bg-card/50" data-testid="section-process">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h2 
          className="text-2xl md:text-3xl font-bold text-center mb-12"
          data-testid="text-process-headline"
        >
          3단계로 끝나는 간편한 매입 프로세스
        </h2>
        
        <div className="relative">
          <div className="hidden md:block absolute top-16 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-border" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative text-center"
                data-testid={`step-${index}`}
              >
                <div className="relative z-10 w-16 h-16 mx-auto rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold">{step.number}</span>
                </div>
                
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="font-semibold text-lg mb-2" data-testid={`text-step-title-${index}`}>
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid={`text-step-desc-${index}`}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

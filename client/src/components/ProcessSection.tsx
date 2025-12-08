const steps = [
  {
    number: "1",
    title: "견적 신청",
    description: "간단한 폼에 시계 정보를 입력하세요. 단 몇 분이면 됩니다.",
  },
  {
    number: "2",
    title: "전문가 감정",
    description: "전문가가 시계를 평가하고 시장 최고가를 제시합니다.",
  },
  {
    number: "3",
    title: "대금 수령",
    description: "제안을 수락하시면 안전한 수거와 즉시 입금을 진행합니다.",
  },
];

export default function ProcessSection() {
  return (
    <section data-testid="section-process">
      <h2 
        className="text-2xl font-bold leading-tight tracking-tight px-4 pb-3 pt-8"
        data-testid="text-process-headline"
      >
        3단계 간편 프로세스
      </h2>
      
      <div className="p-4 space-y-6">
        {steps.map((step, index) => (
          <div 
            key={index}
            className="flex items-start gap-4"
            data-testid={`step-${index}`}
          >
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
              {step.number}
            </div>
            <div>
              <h3 className="font-bold text-base" data-testid={`text-step-title-${index}`}>
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm" data-testid={`text-step-desc-${index}`}>
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

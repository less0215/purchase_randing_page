const steps = [
  {
    number: "1",
    title: "Submit Your Quote",
    description: "Fill out our simple form with your watch details. It only takes a few minutes.",
  },
  {
    number: "2",
    title: "Expert Appraisal",
    description: "Our specialists will assess your watch and provide a top-market offer.",
  },
  {
    number: "3",
    title: "Receive Payment",
    description: "Once you accept, we arrange secure collection and immediate payment.",
  },
];

export default function ProcessSection() {
  return (
    <section data-testid="section-process">
      <h2 
        className="text-[22px] font-bold leading-tight tracking-tight px-4 pb-3 pt-8"
        data-testid="text-process-headline"
      >
        Our 3-Step Process
      </h2>
      
      <div className="p-4 space-y-6">
        {steps.map((step, index) => (
          <div 
            key={index}
            className="flex items-start gap-4"
            data-testid={`step-${index}`}
          >
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
              {step.number}
            </div>
            <div>
              <h3 className="font-bold" data-testid={`text-step-title-${index}`}>
                {step.title}
              </h3>
              <p className="text-muted-foreground" data-testid={`text-step-desc-${index}`}>
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

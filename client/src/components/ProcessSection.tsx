import { useTranslation } from "react-i18next";

export default function ProcessSection() {
  const { t } = useTranslation();
  const steps = t("process.steps", { returnObjects: true }) as Array<{ title: string; description: string }>;

  return (
    <section data-testid="section-process">
      <h2
        className="text-2xl font-bold leading-tight tracking-tight px-4 pb-3 pt-8"
        data-testid="text-process-headline"
      >
        {t("process.headline")}
      </h2>

      <div className="p-4 space-y-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-start gap-4"
            data-testid={`step-${index}`}
          >
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
              {index + 1}
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

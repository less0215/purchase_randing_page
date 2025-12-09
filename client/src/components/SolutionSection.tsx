import { Banknote, ShieldCheck, Rocket } from "lucide-react";
import { useTranslation } from "react-i18next";

const icons = [Banknote, ShieldCheck, Rocket];

export default function SolutionSection() {
  const { t } = useTranslation();
  const cards = t("solution.cards", { returnObjects: true }) as Array<{ title: string; description: string }>;

  return (
    <section data-testid="section-solution">
      <h2
        className="text-2xl font-bold leading-tight tracking-tight px-4 pb-3 pt-8"
        data-testid="text-solution-headline"
      >
        {t("solution.headline")}
      </h2>

      <div className="flex flex-col gap-4 p-4">
        {cards.map((card, index) => {
          const Icon = icons[index];
          return (
            <div
              key={index}
              className="flex items-center gap-4 rounded-lg p-4 bg-primary/10"
              data-testid={`card-solution-${index}`}
            >
              <Icon className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-bold text-base" data-testid={`text-solution-title-${index}`}>
                  {card.title}
                </h3>
                <p className="text-muted-foreground text-sm" data-testid={`text-solution-desc-${index}`}>
                  {card.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

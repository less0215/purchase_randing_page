import { Globe, Watch, Eye } from "lucide-react";
import { useTranslation } from "react-i18next";

const icons = [Globe, Watch, Eye];

export default function EmpathySection() {
  const { t } = useTranslation();
  const cards = t("empathy.cards", { returnObjects: true }) as Array<{ title: string; description: string }>;

  return (
    <section data-testid="section-empathy">
      <h2
        className="text-2xl font-bold leading-tight tracking-tight px-4 pb-3 pt-8"
        data-testid="text-empathy-headline"
      >
        {t("empathy.headline")}
      </h2>
      <p className="text-muted-foreground text-base font-normal leading-relaxed pb-3 pt-1 px-4">
        {t("empathy.subheadline")}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4">
        {cards.map((card, index) => {
          const Icon = icons[index];
          return (
            <div
              key={index}
              className="flex flex-1 gap-3 rounded-lg border bg-card p-4 flex-col"
              data-testid={`card-empathy-${index}`}
            >
              <Icon className="w-6 h-6 text-primary" />
              <div className="flex flex-col gap-1">
                <h3 className="text-base font-bold leading-tight" data-testid={`text-empathy-title-${index}`}>
                  {card.title}
                </h3>
                <p className="text-muted-foreground text-sm font-normal leading-normal" data-testid={`text-empathy-desc-${index}`}>
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

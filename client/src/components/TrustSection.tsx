import { Award, Users, BadgeCheck, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const icons = [Award, Users, BadgeCheck, MapPin];

export default function TrustSection() {
  const { t } = useTranslation();
  const badges = t("trust.badges", { returnObjects: true }) as string[];

  return (
    <section data-testid="section-trust">
      <h2
        className="text-2xl font-bold leading-tight tracking-tight px-4 pb-3 pt-8"
        data-testid="text-trust-headline"
      >
        {t("trust.headline")}
      </h2>

      <div className="grid grid-cols-2 gap-4 p-4">
        {badges.map((label, index) => {
          const Icon = icons[index];
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2 p-4 border rounded-lg bg-card"
              data-testid={`card-trust-${index}`}
            >
              <Icon className="w-8 h-8 text-primary" />
              <p className="text-center text-xs font-semibold text-muted-foreground">
                {label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

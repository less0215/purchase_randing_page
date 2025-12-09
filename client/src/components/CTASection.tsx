import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export default function CTASection() {
  const { t } = useTranslation();

  return (
    <section
      className="bg-primary/10 p-8 my-8 text-center"
      data-testid="section-cta"
    >
      <h2
        className="text-2xl font-bold tracking-tight"
        data-testid="text-cta-headline"
      >
        {t("cta.headline")}
      </h2>
      <p
        className="mt-2 mb-6 text-muted-foreground text-base"
        data-testid="text-cta-subheadline"
      >
        {t("cta.subheadline")}
      </p>
      <Link href="/quote">
        <Button
          size="lg"
          className="w-full h-12 rounded-lg text-base font-bold"
          data-testid="button-cta-quote"
        >
          {t("cta.button")}
        </Button>
      </Link>
    </section>
  );
}

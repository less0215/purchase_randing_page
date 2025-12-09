import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import heroImage from "@assets/generated_images/luxury_rolex_watch_product_shot.png";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="@container" data-testid="section-hero">
      <div className="p-0 md:p-4">
        <div
          className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat md:gap-8 md:rounded-lg items-start justify-end px-4 pb-10 md:px-10"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%), url("${heroImage}")`
          }}
        >
          <div className="flex flex-col gap-3 text-left">
            <h1
              className="text-white text-3xl font-extrabold leading-tight tracking-tight md:text-5xl"
              data-testid="text-hero-headline"
              dangerouslySetInnerHTML={{ __html: t("hero.headline") }}
            />
            <p
              className="text-gray-200 text-base font-normal leading-relaxed md:text-lg"
              data-testid="text-hero-subheadline"
              dangerouslySetInnerHTML={{ __html: t("hero.subheadline") }}
            />
          </div>
          <Link href="/quote" className="w-full max-w-[480px]">
            <Button
              size="lg"
              className="w-full h-12 rounded-lg text-base font-bold"
              data-testid="button-hero-cta"
            >
              {t("hero.cta")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

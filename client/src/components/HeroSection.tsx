import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/luxury_rolex_watch_product_shot.png";

export default function HeroSection() {
  return (
    <section className="@container" data-testid="section-hero">
      <div className="p-0 md:p-4">
        <div 
          className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat md:gap-8 md:rounded-lg items-start justify-end px-4 pb-10 md:px-10"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%), url("${heroImage}")`
          }}
        >
          <div className="flex flex-col gap-2 text-left">
            <h1 
              className="text-white text-4xl font-black leading-tight tracking-tight md:text-5xl"
              data-testid="text-hero-headline"
            >
              Get the True Value for Your Rolex. Fast and Confidential.
            </h1>
            <h2 
              className="text-gray-200 text-sm font-normal leading-normal md:text-base"
              data-testid="text-hero-subheadline"
            >
              SUN MOON offers the highest prices and a seamless selling experience for Rolex owners.
            </h2>
          </div>
          <Link href="/quote" className="w-full max-w-[480px]">
            <Button 
              size="lg"
              className="w-full h-12 rounded-lg text-base font-bold"
              data-testid="button-hero-cta"
            >
              Get a Quote
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

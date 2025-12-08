import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section 
      className="bg-primary/10 p-8 my-8 text-center"
      data-testid="section-cta"
    >
      <h2 
        className="text-2xl font-bold tracking-tight"
        data-testid="text-cta-headline"
      >
        Discover Your Watch's True Value Today
      </h2>
      <p 
        className="mt-2 mb-6 text-muted-foreground"
        data-testid="text-cta-subheadline"
      >
        Get a no-obligation quote from the experts. The process is fast, free, and completely confidential.
      </p>
      <Link href="/quote">
        <Button 
          size="lg"
          className="w-full h-12 rounded-lg text-base font-bold"
          data-testid="button-cta-quote"
        >
          Get My Free Quote
        </Button>
      </Link>
    </section>
  );
}

import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/luxury_rolex_watch_product_shot.png";

export default function HeroSection() {
  return (
    <section className="py-12 md:py-20 lg:py-24" data-testid="section-hero">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-3 space-y-6">
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              data-testid="text-hero-headline"
            >
              국내에서 팔기 어려우셨죠?
            </h1>
            <p 
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
              data-testid="text-hero-subheadline"
            >
              해외 스탬핑, 비인기 모델, AD 관계 걱정까지—<br className="hidden md:block" />
              국내 매입처에서 제값 받기 어려운 롤렉스가 있습니다
            </p>
          </div>
          
          <div className="lg:col-span-2">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-card">
              <img 
                src={heroImage}
                alt="럭셔리 롤렉스 시계"
                className="w-full h-full object-cover"
                data-testid="img-hero"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

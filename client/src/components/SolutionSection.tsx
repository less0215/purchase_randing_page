import { Banknote, ShieldCheck, Rocket } from "lucide-react";

const solutionCards = [
  {
    icon: Banknote,
    title: "Highest Price",
    description: "We leverage global market data to ensure you get the best offer.",
  },
  {
    icon: ShieldCheck,
    title: "Guaranteed Confidentiality",
    description: "Your privacy is our priority. All transactions are secure and discreet.",
  },
  {
    icon: Rocket,
    title: "Simple, Fast Process",
    description: "Get paid quickly with our streamlined 3-step buying process.",
  },
];

export default function SolutionSection() {
  return (
    <section data-testid="section-solution">
      <h2 
        className="text-[22px] font-bold leading-tight tracking-tight px-4 pb-3 pt-8"
        data-testid="text-solution-headline"
      >
        The SUN MOON Solution
      </h2>
      
      <div className="flex flex-col gap-4 p-4">
        {solutionCards.map((card, index) => (
          <div 
            key={index}
            className="flex items-center gap-4 rounded-lg p-4 bg-primary/10"
            data-testid={`card-solution-${index}`}
          >
            <card.icon className="w-8 h-8 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-bold" data-testid={`text-solution-title-${index}`}>
                {card.title}
              </h3>
              <p className="text-muted-foreground text-sm" data-testid={`text-solution-desc-${index}`}>
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import { Globe, Watch, Handshake, Lock } from "lucide-react";

const empathyCards = [
  {
    icon: Globe,
    title: "Overseas Stamping",
    description: "We buy watches regardless of where they were purchased.",
  },
  {
    icon: Watch,
    title: "Unpopular Models",
    description: "We have overseas market data to offer the best price for any model.",
  },
  {
    icon: Handshake,
    title: "AD Relationship Concerns",
    description: "Your transaction is completely independent and private.",
  },
  {
    icon: Lock,
    title: "Strict Confidentiality",
    description: "Sell your watch without any hassle or privacy concerns.",
  },
];

export default function EmpathySection() {
  return (
    <section data-testid="section-empathy">
      <h2 
        className="text-[22px] font-bold leading-tight tracking-tight px-4 pb-3 pt-8"
        data-testid="text-empathy-headline"
      >
        Having Trouble Selling Your Rolex?
      </h2>
      <p className="text-muted-foreground text-base font-normal leading-normal pb-3 pt-1 px-4">
        Whether it's an unpopular model, has overseas stamping, or you simply require a confidential sale, we understand the challenges sellers face.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4">
        {empathyCards.map((card, index) => (
          <div 
            key={index}
            className="flex flex-1 gap-3 rounded-lg border bg-card p-4 flex-col"
            data-testid={`card-empathy-${index}`}
          >
            <card.icon className="w-6 h-6 text-primary" />
            <div className="flex flex-col gap-1">
              <h3 className="text-base font-bold leading-tight" data-testid={`text-empathy-title-${index}`}>
                {card.title}
              </h3>
              <p className="text-muted-foreground text-sm font-normal leading-normal" data-testid={`text-empathy-desc-${index}`}>
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

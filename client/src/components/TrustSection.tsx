import { Award, Users, BadgeCheck, MapPin } from "lucide-react";

const trustBadges = [
  {
    icon: Award,
    label: "DPMS License Holder",
  },
  {
    icon: Users,
    label: "HICC Member",
  },
  {
    icon: BadgeCheck,
    label: "Chrono24 Verified",
  },
  {
    icon: MapPin,
    label: "Hong Kong Entity",
  },
];

export default function TrustSection() {
  return (
    <section data-testid="section-trust">
      <h2 
        className="text-[22px] font-bold leading-tight tracking-tight px-4 pb-3 pt-8"
        data-testid="text-trust-headline"
      >
        Why Trust SUN MOON?
      </h2>
      
      <div className="grid grid-cols-2 gap-4 p-4">
        {trustBadges.map((badge, index) => (
          <div 
            key={index}
            className="flex flex-col items-center justify-center gap-2 p-4 border rounded-lg bg-card"
            data-testid={`card-trust-${index}`}
          >
            <badge.icon className="w-8 h-8 text-primary" />
            <p className="text-center text-xs font-semibold text-muted-foreground">
              {badge.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

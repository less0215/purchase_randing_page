import { useState } from "react";
import { Sparkles } from "lucide-react";
import ContactModal from "./ContactModal";

export default function Footer() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <footer className="bg-card p-8 border-t" data-testid="footer">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-7 h-7 text-primary" />
            <h2 
              className="text-lg font-bold leading-tight tracking-tight"
              style={{ fontFamily: 'Public Sans, sans-serif' }}
              data-testid="text-footer-logo"
            >
              SUN MOON
            </h2>
          </div>
          <div className="space-y-1 text-sm text-muted-foreground">
            <p data-testid="text-footer-email">contact@sunmoon.com</p>
            <p data-testid="text-footer-phone">+852 1234 5678</p>
            <p data-testid="text-footer-address">123 Watch St, Central, Hong Kong</p>
          </div>
          <div className="mt-6 text-xs text-muted-foreground">
            <p data-testid="text-copyright">© 2024 SUN MOON. All rights reserved.</p>
            <button 
              onClick={() => setContactOpen(true)}
              className="underline mt-2 hover:text-foreground transition-colors"
              data-testid="button-privacy"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </footer>

      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </>
  );
}

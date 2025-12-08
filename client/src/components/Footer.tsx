import { useState } from "react";
import { MapPin, MessageCircle } from "lucide-react";
import { SiTelegram } from "react-icons/si";
import ContactModal from "./ContactModal";

export default function Footer() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <footer className="py-8 border-t bg-card/30" data-testid="footer">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <span 
                className="text-lg font-bold"
                style={{ fontFamily: 'Inter, sans-serif' }}
                data-testid="text-footer-logo"
              >
                SUN MOON
              </span>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span data-testid="text-footer-location">서울역 인근</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <SiTelegram className="w-4 h-4" />
                <span data-testid="text-footer-telegram">텔레그램 문의</span>
              </div>
            </div>
            
            <button 
              onClick={() => setContactOpen(true)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
              data-testid="button-contact"
            >
              기타 문의
            </button>
          </div>
          
          <div className="mt-6 pt-6 border-t text-center text-xs text-muted-foreground">
            <p data-testid="text-copyright">© 2024 SUN MOON. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </>
  );
}

import { Link, useLocation } from "wouter";
import { ArrowLeft, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  showBack?: boolean;
}

export default function Header({ showBack = false }: HeaderProps) {
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b" data-testid="header">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16">
          <div className="flex items-center gap-4">
            {showBack && (
              <Link href="/">
                <Button variant="ghost" size="sm" data-testid="button-back">
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  돌아가기
                </Button>
              </Link>
            )}
            <Link href="/">
              <span 
                className="text-xl font-bold tracking-tight cursor-pointer"
                style={{ fontFamily: 'Inter, sans-serif' }}
                data-testid="logo"
              >
                SUN MOON
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="w-4 h-4" />
            <span data-testid="text-location">서울역 인근</span>
          </div>
        </div>
      </div>
    </header>
  );
}

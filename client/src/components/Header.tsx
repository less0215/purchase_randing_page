import { Link } from "wouter";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  showBack?: boolean;
  showCta?: boolean;
  centered?: boolean;
}

export default function Header({ showBack = false, showCta = true, centered = false }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-background/80 backdrop-blur-sm p-4 border-b" data-testid="header">
      {showBack ? (
        <Link href="/">
          <button className="flex items-center gap-1 text-foreground" data-testid="button-back">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-base font-medium">돌아가기</span>
          </button>
        </Link>
      ) : (
        <div className="flex items-center gap-2">
          <Sparkles className="w-7 h-7 text-primary" />
          <Link href="/">
            <span 
              className="text-xl font-bold tracking-tight cursor-pointer"
              data-testid="logo"
            >
              SUN MOON
            </span>
          </Link>
        </div>
      )}
      
      {centered && (
        <h2 className="absolute left-1/2 -translate-x-1/2 text-xl font-bold tracking-tight">
          SUN MOON
        </h2>
      )}
      
      {showCta && !showBack && (
        <Link href="/quote">
          <Button 
            size="sm" 
            className="rounded-full px-4 font-semibold"
            data-testid="button-header-quote"
          >
            견적 받기
          </Button>
        </Link>
      )}
      
      {showBack && <div className="w-24" />}
    </header>
  );
}

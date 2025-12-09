import { Link } from "wouter";
import { ArrowLeft, Sparkles, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  showBack?: boolean;
  showCta?: boolean;
  centered?: boolean;
}

export default function Header({ showBack = false, showCta = true, centered = false }: HeaderProps) {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-background/80 backdrop-blur-sm p-4 border-b" data-testid="header">
      {showBack ? (
        <Link href="/">
          <button className="flex items-center gap-1 text-foreground" data-testid="button-back">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-base font-medium">{t("header.back")}</span>
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

      {centered && !showBack && (
        <h2 className="absolute left-1/2 -translate-x-1/2 text-xl font-bold tracking-tight">
          SUN MOON
        </h2>
      )}

      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="gap-1 px-2" data-testid="button-language">
              <Globe className="w-4 h-4" />
              <span className="text-sm">{i18n.language === "ko" ? "KO" : "EN"}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => changeLanguage("ko")}>
              {t("language.ko")}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => changeLanguage("en")}>
              {t("language.en")}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {showCta && !showBack && (
          <Link href="/quote">
            <Button
              size="sm"
              className="rounded-full px-4 font-semibold"
              data-testid="button-header-quote"
            >
              {t("header.getQuote")}
            </Button>
          </Link>
        )}
      </div>
    </header>
  );
}

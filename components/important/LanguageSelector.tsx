"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  const label = language === "tr" ? "TR" : "EN";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="rounded-full px-3">
          {label}
          <span className="sr-only">Select language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => setLanguage("tr")}
          className={language === "tr" ? "font-semibold" : ""}
        >
          TR — Türkçe
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("en")}
          className={language === "en" ? "font-semibold" : ""}
        >
          EN — English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

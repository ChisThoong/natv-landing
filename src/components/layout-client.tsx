"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/header";
import { LanguageProvider } from "@/contexts/language-context";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideHeader =
    pathname.startsWith("/profile") ||
    pathname.startsWith("/login") ||
    pathname.startsWith("/register");

  return (
    <LanguageProvider>
      {!hideHeader && <Header />}
      {children}
    </LanguageProvider>
  );
}

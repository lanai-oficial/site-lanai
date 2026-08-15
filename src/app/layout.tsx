import type { Metadata } from "next";
import type { ReactNode } from "react";
import { AnalyticsPageView } from "@/components/analytics-page-view";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "@fontsource/arimo/400.css";
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans-condensed/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lanaispa.com.br"),
  title: { default: "Lanai | Beleza, cuidado e presença", template: "%s | Lanai" },
  description: "Conheça os serviços, experiências e profissionais da Lanai.",
  openGraph: { type: "website", locale: "pt_BR", siteName: "Lanai" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="pt-BR"><body><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><Header /><AnalyticsPageView /><main id="conteudo">{children}</main><Footer /></body></html>;
}

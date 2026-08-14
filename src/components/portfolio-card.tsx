"use client";

import { trackEvent } from "@/lib/analytics";
import type { PortfolioItem } from "@/data/professionals";

export function PortfolioCard({ item, professional }: { item: PortfolioItem; professional: string }) {
  return (
    <button className="portfolio-card" onClick={() => trackEvent("portfolio_view", { portfolio_id: item.id, professional_slug: professional })}>
      <span className="image-placeholder" aria-hidden="true">Imagem a cadastrar</span>
      <span className="eyebrow">Portfólio demonstrativo</span><strong>{item.title}</strong><span>{item.description}</span>
    </button>
  );
}

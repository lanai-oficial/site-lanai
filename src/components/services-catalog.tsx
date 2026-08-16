"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

type Service = {
  id: string; numero: number; nome: string; preco_minimo: number; preco_maximo: number; moeda: string;
  tier1: { frase_curta: string };
  tier2: { gancho: string; descricao: string; para_quem_e: string; informacao_importante: string | null };
  cta: string; cta_whatsapp_mensagem: string;
};

type Category = { id: string; nome: string; ordem: number; total_servicos: number; servicos: Service[] };

const priceFormatter = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 0, maximumFractionDigits: 0 });

function servicePrice(service: Service) {
  const minimum = priceFormatter.format(service.preco_minimo);
  return service.preco_minimo === service.preco_maximo ? minimum : `${minimum} – ${priceFormatter.format(service.preco_maximo)}`;
}

export function ServicesCatalog({ categories }: { categories: Category[] }) {
  const selectedCategory = useSearchParams().get("categoria");
  const visibleCategories = selectedCategory ? categories.filter(({ id }) => id === selectedCategory) : categories;

  useEffect(() => {
    if (!selectedCategory) return;
    const category = categories.find(({ id }) => id === selectedCategory);
    trackEvent("view_category_page", {
      category: category?.nome ?? selectedCategory,
      category_id: selectedCategory,
      filter_applied: "categoria",
      services_shown: category?.servicos.length ?? 0,
    });
  }, [categories, selectedCategory]);

  return (
    <div className="services-catalog">
      {visibleCategories.map((category) => <section className="service-category" key={category.id} aria-labelledby={`category-${category.id}`}>
        <header><span className="service-category-number">{String(category.ordem).padStart(2, "0")}</span><h2 id={`category-${category.id}`}>{category.nome}</h2></header>
        <div className="service-card-grid">
          {category.servicos.map((service, index) => <Link className="service-card" key={service.id} href={`/servicos/${service.id}`} onClick={() => trackEvent("click_service_card", { service_id: service.id, category_id: category.id, position: index + 1 })}>
            <span className="service-number">{String(service.numero).padStart(2, "0")}</span>
            <h3>{service.nome}</h3><p>{service.tier1.frase_curta}</p><strong>{servicePrice(service)}</strong>
            <span className="service-card-action">Ver detalhes <span aria-hidden="true">→</span></span>
          </Link>)}
        </div>
      </section>)}
    </div>
  );
}

"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import type { CatalogCategory, CatalogService } from "@/data/catalog";
import { trackEvent } from "@/lib/analytics";

const priceFormatter = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 0, maximumFractionDigits: 0 });

function servicePrice(service: CatalogService) {
  const minimum = priceFormatter.format(service.preco_minimo);
  return service.preco_minimo === service.preco_maximo ? minimum : `${minimum} – ${priceFormatter.format(service.preco_maximo)}`;
}

export function ServicesCatalog({ categories }: { categories: CatalogCategory[] }) {
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

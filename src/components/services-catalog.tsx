"use client";

import { useEffect, useRef, useState } from "react";
import { WhatsAppLink } from "@/components/whatsapp-link";

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
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!selectedService) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setSelectedService(null); };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedService]);

  return <>
    <div className="services-catalog">
      {categories.map((category) => <section className="service-category" key={category.id} aria-labelledby={`category-${category.id}`}>
        <header><span className="service-category-number">{String(category.ordem).padStart(2, "0")}</span><h2 id={`category-${category.id}`}>{category.nome}</h2></header>
        <div className="service-card-grid">
          {category.servicos.map((service) => <button className="service-card" key={service.id} type="button" onClick={() => setSelectedService(service)} aria-haspopup="dialog">
            <span className="service-number">{String(service.numero).padStart(2, "0")}</span>
            <h3>{service.nome}</h3><p>{service.tier1.frase_curta}</p><strong>{servicePrice(service)}</strong>
            <span className="service-card-action">Ver detalhes <span aria-hidden="true">→</span></span>
          </button>)}
        </div>
      </section>)}
    </div>
    {selectedService && <div className="service-modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedService(null); }}>
      <section className="service-modal" role="dialog" aria-modal="true" aria-labelledby="service-modal-title">
        <button ref={closeButton} className="service-modal-close" type="button" onClick={() => setSelectedService(null)} aria-label="Fechar detalhes">×</button>
        <span className="service-number">{String(selectedService.numero).padStart(2, "0")}</span>
        <h2 id="service-modal-title">{selectedService.nome}</h2><p className="service-modal-price">{servicePrice(selectedService)}</p>
        <p className="service-modal-hook">{selectedService.tier2.gancho}</p><p>{selectedService.tier2.descricao}</p>
        <div className="service-modal-audience"><p>{selectedService.tier2.para_quem_e}</p></div>
        {selectedService.tier2.informacao_importante && <p className="service-modal-important">{selectedService.tier2.informacao_importante}</p>}
        <WhatsAppLink origin={`service:${selectedService.id}`} message={selectedService.cta_whatsapp_mensagem}>{selectedService.cta}</WhatsAppLink>
      </section>
    </div>}
  </>;
}

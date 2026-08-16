import type { Metadata } from "next";
import Image from "next/image";
import { notFound, permanentRedirect } from "next/navigation";
import { EventView } from "@/components/event-view";
import { WhatsAppLink } from "@/components/whatsapp-link";
import servicesCatalog from "@/data/lanai_33_servicos_v1_producao.json";
import { serviceCatalogDestinations } from "@/data/services";
import { universeImages } from "@/data/images";

type CatalogService = (typeof servicesCatalog.categorias)[number]["servicos"][number];
type CatalogCategory = (typeof servicesCatalog.categorias)[number];

const catalogServices = servicesCatalog.categorias.flatMap((category) =>
  category.servicos.map((service) => ({ service, category })),
);

function getCatalogService(slug: string): { service: CatalogService; category: CatalogCategory } | undefined {
  return catalogServices.find(({ service }) => service.id === slug);
}

function categoryImage(categoryId: string) {
  if (categoryId === "spa") return universeImages.spa;
  if (categoryId === "estetica-facial" || categoryId === "estetica-corporal") return universeImages.estetica;
  return universeImages["salao-de-beleza"];
}

const priceFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency", currency: "BRL", minimumFractionDigits: 0, maximumFractionDigits: 0,
});

function servicePrice(service: CatalogService) {
  const minimum = priceFormatter.format(service.preco_minimo);
  return service.preco_minimo === service.preco_maximo
    ? minimum
    : `${minimum} – ${priceFormatter.format(service.preco_maximo)}`;
}

export function generateStaticParams() {
  return [...new Set([...catalogServices.map(({ service }) => service.id), ...Object.keys(serviceCatalogDestinations)])]
    .map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const item = getCatalogService((await params).slug);
  return item ? { title: item.service.nome, description: item.service.tier1.frase_curta } : {};
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const item = getCatalogService(slug);

  if (!item) {
    const legacyDestination = serviceCatalogDestinations[slug];
    if (legacyDestination) permanentRedirect(`/servicos?categoria=${legacyDestination}`);
    notFound();
  }

  const { service, category } = item;
  return <main className="detail-page">
    <EventView event="service_view" id={service.id} />
    <div className="detail-visual">
      <Image src={categoryImage(category.id)} alt={`${service.nome} na Lanai`} fill priority sizes="(max-width: 800px) 100vw, 50vw" />
    </div>
    <article>
      <h1>{service.nome}</h1>
      <p className="service-callout">{service.tier1.frase_curta}</p>
      <p className="service-modal-price">{servicePrice(service)}</p>
      <div className="service-information">
        <div>
          <p className="service-modal-hook">{service.tier2.gancho}</p>
          <p>{service.tier2.descricao}</p>
          <p>{service.tier2.para_quem_e}</p>
          {service.tier2.informacao_importante && <p>{service.tier2.informacao_importante}</p>}
        </div>
      </div>
      <WhatsAppLink origin={`service:${service.id}`} message={service.cta_whatsapp_mensagem}>{service.cta}</WhatsAppLink>
    </article>
  </main>;
}

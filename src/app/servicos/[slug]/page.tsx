import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EventView } from "@/components/event-view";
import Image from "next/image";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { catalogServices, getCatalogService } from "@/data/catalog";
import { universeImages } from "@/data/images";
export function generateStaticParams() { return catalogServices.map(({ id }) => ({ slug: id })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const item = getCatalogService((await params).slug); return item ? { title: item.nome, description: item.tier2.descricao } : {}; }
export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const item = getCatalogService((await params).slug);
  if (!item) notFound();

  return <main className="detail-page">
    <EventView event="service_view" id={item.id} payload={{ service_id: item.id, category_id: item.category_id, price_min: item.preco_minimo, price_max: item.preco_maximo }} />
    <div className="detail-visual">
      <Image src={universeImages[item.category_id === "hair-spa" || item.category_id === "manicure" || item.category_id === "nail-design" || item.category_id === "sobrancelhas" ? "salao-de-beleza" : item.category_id.startsWith("estetica") ? "estetica" : "spa"]} alt={`Ambiente Lanai relacionado a ${item.nome}`} fill priority sizes="(max-width: 800px) 100vw, 50vw" />
    </div>
    <article>
      <h1>{item.nome}</h1>
      <p className="service-callout">{item.tier1.frase_curta}</p>
      <details className="service-information">
        <summary>Mais informações</summary>
        <div><p>{item.tier2.gancho}</p><p>{item.tier2.descricao}</p><p><strong>Para quem é:</strong> {item.tier2.para_quem_e}</p>{item.tier2.informacao_importante && <p>{item.tier2.informacao_importante}</p>}</div>
      </details>
      <WhatsAppLink origin={`service:${item.id}`} serviceId={item.id} categoryId={item.category_id} message={`${item.cta_whatsapp_mensagem}. Vim da página /servicos/${item.id}.`}>{item.cta}</WhatsAppLink>
    </article>
  </main>;
}

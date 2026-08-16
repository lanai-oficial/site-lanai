import Link from "next/link";
import Image from "next/image";
import { CategoryLink } from "@/components/category-link";
import { EventView } from "@/components/event-view";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { getCategoriesByUniverse, type ServiceUniverse } from "@/data/catalog";
import { universeImages } from "@/data/images";

export function UniversePage({ universe }: { universe: ServiceUniverse }) {
  const categories = getCategoriesByUniverse(universe.slug);
  return <>
    <EventView event="category_view" id={universe.slug} payload={{ category: universe.slug }} />
    <section className={`universe-hero universe-${universe.slug}`}><Image src={universeImages[universe.slug]} alt={`Ambiente do universo ${universe.name} da Lanai`} fill priority sizes="100vw" /><span className="image-shade" /><div><p className="eyebrow">Universo Lanai</p><h1>{universe.name}</h1><p>{universe.description}</p></div></section>
    <section className="section universe-intro"><div><p className="eyebrow">Descubra</p><h2>{universe.eyebrow}</h2></div><p className="lead">{universe.introduction}</p></section>
    <section className="section universe-categories"><p className="eyebrow">Categorias</p><div className="category-directory">{categories.map(({ category, name, description }, index) => {
      return <CategoryLink category={category.id} categoryId={category.id} key={category.id}><span>0{index + 1}</span><div><h2>{name}</h2><p>{description}</p></div><b aria-hidden="true">→</b></CategoryLink>;
    })}</div><Link className="text-link" href="/servicos">Ver todos os serviços →</Link></section>
    <section className="booking-band"><div><p className="eyebrow">Atendimento pessoal</p><h2>Vamos encontrar o cuidado certo para você.</h2></div><div><WhatsAppLink origin={`universe:${universe.slug}`} message={`Olá! Gostaria de saber mais sobre ${universe.name}. Vim da página /${universe.slug}.`}>Agende pelo WhatsApp</WhatsAppLink><small>A recepção confirmará serviço, profissional, horário e disponibilidade.</small></div></section>
  </>;
}

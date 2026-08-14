import type { Metadata } from "next";
import Link from "next/link";
import { getCategoriesByUniverse, serviceUniverses } from "@/data/services";

export const metadata: Metadata = { title: "Serviços", description: "Explore os serviços da Lanai por universo e categoria." };

export default function ServicesPage() {
  return <div className="section page services-directory"><p className="eyebrow">Diretório Lanai</p><h1>Serviços</h1><p className="lead">Navegue por Salão de Beleza, Estética e Spa. Para detalhes e disponibilidade, converse com a recepção.</p>{serviceUniverses.map((universe, universeIndex) => <section className="directory-group" key={universe.slug}><div className="directory-heading"><span>0{universeIndex + 1}</span><div><p className="eyebrow">{universe.eyebrow}</p><h2>{universe.name}</h2><Link className="text-link" href={`/${universe.slug}`}>Visitar universo →</Link></div></div><div className="directory-links">{getCategoriesByUniverse(universe.slug).map((item) => <Link href={`/servicos/${item.slug}`} key={item.slug}><div><p className="eyebrow">{item.eyebrow}</p><h3>{item.name}</h3><p>{item.description}</p></div><b aria-hidden="true">→</b></Link>)}</div></section>)}</div>;
}

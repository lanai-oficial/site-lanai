import Link from "next/link";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { serviceUniverses } from "@/data/services";

export default function Home() {
  return <>
    <section className="hero"><div className="hero-shape" aria-hidden="true" /><div className="hero-copy"><p className="eyebrow">Lanai · beleza & bem-estar</p><h1>Um tempo<br />só seu.</h1><p>Salão de beleza, estética e spa reunidos no Shopping Downtown, na Barra da Tijuca.</p><WhatsAppLink origin="home_hero">Agende pelo WhatsApp</WhatsAppLink><small>A recepção confirmará serviço, profissional, horário e disponibilidade.</small></div></section>
    <section className="intro section"><p className="eyebrow">Universo Lanai</p><h2>Cuidado em cada detalhe.</h2><p>Escolha um dos nossos três universos para começar.</p></section>
    <section className="section universe-section"><div className="section-heading"><div><p className="eyebrow">Explore</p><h2>Três formas de cuidar</h2></div><Link className="text-link" href="/servicos">Ver diretório completo →</Link></div><div className="universe-grid">{serviceUniverses.map((universe, index) => <Link className={`universe-card tone-${index}`} href={`/${universe.slug}`} key={universe.slug}><span className="eyebrow">{universe.eyebrow}</span><h3>{universe.name}</h3><p>{universe.description}</p><span aria-hidden="true">Conhecer →</span></Link>)}</div></section>
    <section className="home-about section"><p className="eyebrow">Sobre a Lanai</p><h2>Beleza e bem-estar no Shopping Downtown.</h2><p>A Lanai está localizada na Barra da Tijuca e reúne diferentes experiências de cuidado em um só lugar.</p><Link className="text-link" href="/sobre">Conheça a Lanai →</Link></section>
    <section className="statement"><p className="eyebrow">Atendimento</p><h2>Converse com<br />a recepção.</h2><p>Compartilhe o que procura. A equipe confirmará serviço, profissional, horário e disponibilidade.</p><WhatsAppLink className="button light" origin="home_final">Agende pelo WhatsApp</WhatsAppLink></section>
  </>;
}

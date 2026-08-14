import Link from "next/link";
import Image from "next/image";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { serviceUniverses } from "@/data/services";
import { lanaiImages, universeImages } from "@/data/images";

export default function Home() {
  return <>
    <section className="hero image-hero"><Image src={lanaiImages.reception} alt="Recepção da Lanai, com plantas, mármore e vista para o salão" fill priority sizes="100vw" /><div className="image-shade" /><div className="hero-copy"><p className="eyebrow">Estética · Spa · Beleza</p><h1>Viva a<br />experiência<br />Lanai.</h1><p>Um lugar para cuidar de você no Shopping Downtown.</p><WhatsAppLink origin="home_hero">Agende seu horário</WhatsAppLink></div><a className="scroll-cue" href="#universos">Descubra ↓</a></section>
    <section className="intro section"><p className="eyebrow">Bem-vinda à Lanai</p><h2>Seu momento começa aqui.</h2><p>Beleza, estética e bem-estar reunidos em uma experiência feita para desacelerar.</p></section>
    <section className="universe-section" id="universos"><div className="section-heading section"><div><p className="eyebrow">Experiências</p><h2>Escolha o seu cuidado</h2></div><Link className="text-link" href="/servicos">Todos os serviços →</Link></div><div className="universe-grid">{serviceUniverses.map((universe) => <Link className="universe-card" href={`/${universe.slug}`} key={universe.slug}><Image src={universeImages[universe.slug]} alt="" fill sizes="(max-width: 800px) 100vw, 33vw" /><span className="card-shade" /><span className="card-copy"><span className="eyebrow">{universe.eyebrow}</span><h3>{universe.name}</h3><span aria-hidden="true">Conhecer →</span></span></Link>)}</div></section>
    <section className="home-about"><div className="home-about-image"><Image src={lanaiImages.facadeWide} alt="Fachada da Lanai no Shopping Downtown" fill sizes="(max-width: 800px) 100vw, 58vw" /></div><div className="home-about-copy"><p className="eyebrow">Nossa casa</p><h2>Um destino de cuidado no Downtown.</h2><p>A Lanai reúne diferentes experiências em um espaço amplo, acolhedor e cercado pela atmosfera da Barra da Tijuca.</p><Link className="text-link" href="/sobre">Conheça a Lanai →</Link></div></section>
    <section className="statement"><p className="eyebrow">Atendimento</p><h2>Converse com<br />a recepção.</h2><p>Compartilhe o que procura. A equipe confirmará serviço, profissional, horário e disponibilidade.</p><WhatsAppLink className="button light" origin="home_final">Agende pelo WhatsApp</WhatsAppLink></section>
  </>;
}

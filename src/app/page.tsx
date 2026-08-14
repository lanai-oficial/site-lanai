import Link from "next/link";
import Image from "next/image";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { serviceUniverses } from "@/data/services";
import { lanaiImages, universeImages } from "@/data/images";
import { OFFICIAL_LINKS } from "@/lib/contact";

export default function Home() {
  return <>
    <section className="hero image-hero"><Image src={lanaiImages.receptionWide} alt="Recepção da Lanai, com madeira, plantas e luz natural" fill priority sizes="100vw" /><div className="image-shade" /><div className="hero-copy"><p className="eyebrow">Estética · Spa · Beleza</p><h1>Experiência<br />Lanai</h1><WhatsAppLink origin="home_hero">Agende seu horário</WhatsAppLink></div><a className="scroll-cue" href="#universos">Descubra ↓</a></section>
    <section className="universe-section" id="universos"><div className="section-heading section"><div><p className="eyebrow">Experiência Lanai</p><h2>Beleza, estética e bem-estar.</h2></div><Link className="text-link" href="/servicos">Ver serviços →</Link></div><div className="universe-grid">{serviceUniverses.map((universe) => <Link className="universe-card" href={`/${universe.slug}`} key={universe.slug}><Image src={universeImages[universe.slug]} alt={`Ambiente Lanai — ${universe.name}`} fill sizes="(max-width: 800px) 100vw, 33vw" /><span className="card-shade" /><span className="card-copy"><h3>{universe.name}</h3><span aria-hidden="true">Conhecer →</span></span></Link>)}</div></section>
    <section className="home-about"><div className="home-about-image"><Image src={lanaiImages.facadeWide} alt="Fachada da Lanai no Shopping Downtown" fill sizes="(max-width: 800px) 100vw, 62vw" /></div><div className="home-about-copy"><p className="eyebrow">Lanai</p><h2>Um espaço para desacelerar.</h2><Link className="text-link" href="/sobre">Conheça nossa história →</Link></div></section>
    <section className="instagram"><div className="instagram-heading"><p className="eyebrow">Instagram</p><h2>Conecte-se com a experiência Lanai</h2><a className="text-link" href={OFFICIAL_LINKS.instagram} target="_blank" rel="noreferrer">@lanai_spa →</a></div><div className="instagram-grid">{[lanaiImages.treatmentRoom,lanaiImages.salon,lanaiImages.reception,lanaiImages.facadeNight].map((src,index)=><a href={OFFICIAL_LINKS.instagram} target="_blank" rel="noreferrer" key={src}><Image src={src} alt={`Lanai no Instagram, imagem ${index+1}`} fill sizes="(max-width: 800px) 50vw, 25vw" /></a>)}</div></section>
  </>;
}

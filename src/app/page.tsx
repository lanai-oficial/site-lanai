import Image from "next/image";
import Link from "next/link";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { homeImages, lanaiImages } from "@/data/images";
import { EventView } from "@/components/event-view";


const banners = [
  { title: "Lanai", href: "/sobre", image: homeImages.hero, position: "center 48%", alt: "Fachada da Lanai no Downtown" },
  { title: "Serviços de Estética", href: "/estetica", image: lanaiImages.treatmentRoom, position: "center 58%", alt: "Sala de tratamentos da Lanai" },
  { title: "Salão de Beleza", href: "/salao-de-beleza", image: lanaiImages.salon, position: "center 60%", alt: "Salão de beleza da Lanai" },
] as const;

function Icon({ name }: { name: "instagram" | "location" | "chat" | "calendar" | "spark" }) {
  const paths = {
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>,
    location: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    chat: <><path d="M20 15a4 4 0 0 1-4 4H8l-5 3 1.6-4.8A7 7 0 0 1 3 13V8a4 4 0 0 1 4-4h9a4 4 0 0 1 4 4Z" /><path d="M8 10h8M8 14h5" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01" /></>,
    spark: <><path d="m12 2 1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5Z" /><path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7Z" /></>,
  };
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

export default function Home() {
  return <div className="home-page">
    <EventView event="view_home" id="home" />
    <div className="home-banners">
      {banners.map((banner, index) => <section className="home-banner" key={banner.title}>
        <Image src={banner.image} alt={banner.alt} fill priority={index === 0} unoptimized sizes="100vw" style={{ objectPosition: banner.position }} />
        <div className="home-banner-shade" />
        <div className="home-banner-copy">
          {index === 0 ? <h1>{banner.title}</h1> : <h2>{banner.title}</h2>}
          <Link href={banner.href}>Saiba mais</Link>
        </div>
      </section>)}
    </div>
    <section className="home-experience" aria-labelledby="experience-title">
      <header><h2 id="experience-title">A Experiência Lanai</h2></header>
      <div className="home-experience-grid">
        <article><Icon name="chat" /><h3>Fale com o especialista</h3><p>Converse com a recepção e encontre o cuidado ideal para você.</p><WhatsAppLink className="home-text-link" origin="home_experience_specialist">Saiba mais &gt;</WhatsAppLink></article>
        <article><Icon name="calendar" /><h3>Agende seu atendimento</h3><p>Escolha o melhor momento para viver a sua experiência Lanai.</p><WhatsAppLink className="home-text-link" origin="home_experience_booking">Agendar agora &gt;</WhatsAppLink></article>
        <article><Icon name="spark" /><h3>Lanai Day</h3><p>Reserve um tempo para beleza, cuidado e bem-estar.</p><WhatsAppLink className="home-text-link" origin="home_experience_lanai_day">Agendar agora &gt;</WhatsAppLink></article>
      </div>
    </section>
  </div>;
}

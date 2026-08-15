import Image from "next/image";
import Link from "next/link";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { homeImages, lanaiImages } from "@/data/images";
import { OFFICIAL_LINKS } from "@/lib/contact";
import lanaiLogoAzul from "../../LANAI_LOGO_AZUL_0521.png";
import lanaiLogoBranco from "../../LANAI_LOGO_BRANCO_0521.png";

const navigation = [
  ["Salão de Beleza", "/salao-de-beleza"],
  ["Estética", "/estetica"],
  ["Spa", "/spa"],
  ["Terapia Capilar", "/servicos/cabelos"],
  ["Sobre a Lanai", "/sobre"],
] as const;

const banners = [
  { title: "Lanai", href: "/sobre", image: homeImages.hero, position: "center 48%", alt: "Fachada da Lanai no Downtown" },
  { title: "Serviços de Estética", href: "/estetica", image: lanaiImages.treatmentRoom, position: "center 58%", alt: "Sala de tratamentos da Lanai" },
  { title: "Salão de Beleza", href: "/salao-de-beleza", image: lanaiImages.salon, position: "center 60%", alt: "Salão de beleza da Lanai" },
  { title: "Terapia Capilar", href: "/servicos/cabelos", image: lanaiImages.receptionWide, position: "center 48%", alt: "Ambiente interno da Lanai" },
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

function HomeHeader() {
  const links = <>{navigation.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}<WhatsAppLink className="home-nav-link" origin="home_navigation">Agende agora</WhatsAppLink></>;
  return <header className="home-header">
    <div className="home-topline" />
    <div className="home-header-main">
      <span className="home-header-spacer" />
      <Link className="home-logo" href="/" aria-label="Lanai — página inicial"><Image src={lanaiLogoAzul} alt="Lanai" priority /></Link>
      <div className="home-header-icons">
        <a href={OFFICIAL_LINKS.instagram} target="_blank" rel="noreferrer" aria-label="Instagram da Lanai"><Icon name="instagram" /></a>
        <a href={OFFICIAL_LINKS.maps} target="_blank" rel="noreferrer" aria-label="Como chegar à Lanai"><Icon name="location" /></a>
      </div>
      <details className="home-mobile-menu"><summary>Menu</summary><nav aria-label="Navegação principal para celular">{links}</nav></details>
    </div>
    <nav className="home-desktop-nav" aria-label="Navegação principal">{links}</nav>
  </header>;
}

export default function Home() {
  return <div className="home-page">
    <HomeHeader />
    <div className="home-banners">
      {banners.map((banner, index) => <section className="home-banner" key={banner.title}>
        <Image src={banner.image} alt={banner.alt} fill priority={index === 0} unoptimized sizes="100vw" style={{ objectPosition: banner.position }} />
        <div className="home-banner-shade" />
        <div className="home-banner-copy"><h1>{banner.title}</h1><Link href={banner.href}>Saiba mais</Link></div>
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
    <footer className="home-footer">
      <div className="home-footer-grid">
        <div className="home-footer-brand"><Image src={lanaiLogoBranco} alt="Lanai" /><p>Beleza, cuidado e presença.</p></div>
        <nav aria-label="Navegação do rodapé"><h2>Institucional</h2><Link href="/sobre">Sobre a Lanai</Link><Link href="/servicos">Serviços</Link><Link href="/contato">Contato</Link></nav>
        <div><h2>Horários de atendimento</h2><p>Terça-feira a sábado<br />das 9h às 20h.</p><h2 className="home-footer-subtitle">Localização</h2><p>Downtown<br />Barra da Tijuca</p></div>
        <div><h2>Entrar em contato</h2><WhatsAppLink className="home-text-link" origin="home_footer">Agende pelo WhatsApp</WhatsAppLink><a href={OFFICIAL_LINKS.maps} target="_blank" rel="noreferrer">Como chegar</a></div>
        <div><h2>Últimas novidades Lanai</h2><p>Acompanhe nossos cuidados e novidades.</p><a href={OFFICIAL_LINKS.instagram} target="_blank" rel="noreferrer">Instagram &gt;</a></div>
      </div>
      <small>© {new Date().getFullYear()} Lanai. Todos os direitos reservados.</small>
      <div className="home-footer-line" />
    </footer>
  </div>;
}

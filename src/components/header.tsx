import Image from "next/image";
import Link from "next/link";
import { WhatsAppLink } from "@/components/whatsapp-link";
import lanaiLogoAzul from "../../LANAI_LOGO_AZUL_0521.png";

const links = [
  ["Início", "/"],
  ["Salão de Beleza", "/salao-de-beleza"],
  ["Estética", "/estetica"],
  ["Spa", "/spa"],
  ["Serviços", "/servicos"],
  ["Sobre a Lanai", "/sobre"],
];

function NavigationLinks() {
  return <>{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}<WhatsAppLink className="nav-cta" origin="main_navigation">Agende pelo WhatsApp</WhatsAppLink></>;
}

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand brand-header" href="/" aria-label="Lanai — página inicial">
        <Image src={lanaiLogoAzul} alt="Lanai" priority />
      </Link>
      <nav className="desktop-nav" aria-label="Navegação principal"><NavigationLinks /></nav>
      <details className="mobile-nav"><summary>Menu</summary><nav aria-label="Navegação principal para celular"><NavigationLinks /></nav></details>
    </header>
  );
}

import Image from "next/image";
import Link from "next/link";
import { WhatsAppLink } from "@/components/whatsapp-link";
import lanaiLogoBranco from "../../LANAI_LOGO_BRANCO_0521.png";
import { OFFICIAL_LINKS } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand"><Link className="brand brand-footer" href="/" aria-label="Lanai — página inicial"><Image src={lanaiLogoBranco} alt="Lanai" /></Link><p>Beleza, cuidado e presença.</p></div>
      <nav className="footer-group" aria-label="Navegação do rodapé"><p className="eyebrow">Navegação</p><Link href="/salao-de-beleza">Salão de Beleza</Link><Link href="/estetica">Estética</Link><Link href="/spa">Spa</Link><Link href="/servicos">Serviços</Link><Link href="/sobre">Sobre a Lanai</Link></nav>
      <div className="footer-group"><p className="eyebrow">Localização</p><p>Downtown<br />Barra da Tijuca</p><p className="eyebrow footer-hours-title">Horário</p><p>Consulte a recepção.</p></div>
      <div className="footer-group footer-actions"><p className="eyebrow">Ações</p><a href={OFFICIAL_LINKS.instagram} target="_blank" rel="noreferrer">Instagram →</a><a href={OFFICIAL_LINKS.maps} target="_blank" rel="noreferrer">Como chegar →</a><WhatsAppLink className="footer-link" origin="footer">Agende pelo WhatsApp →</WhatsAppLink></div>
      <small>© {new Date().getFullYear()} Lanai. Todos os direitos reservados.</small>
    </footer>
  );
}

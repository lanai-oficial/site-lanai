import Image from "next/image";
import Link from "next/link";
import { WhatsAppLink } from "@/components/whatsapp-link";
import lanaiLogoBranco from "../../LANAI_LOGO_BRANCO_0521.png";
import { OFFICIAL_LINKS } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="site-footer">
      <div><Link className="brand brand-footer" href="/" aria-label="Lanai — página inicial"><Image src={lanaiLogoBranco} alt="Lanai" /></Link><p>Beleza, cuidado e presença.</p></div>
      <div><p className="eyebrow">Explore</p><Link href="/salao-de-beleza">Salão de Beleza</Link><Link href="/estetica">Estética</Link><Link href="/spa">Spa</Link><Link href="/servicos">Serviços</Link><Link href="/sobre">Sobre a Lanai</Link></div>
      <div><p className="eyebrow">Encontre a Lanai</p><p>Shopping Downtown<br />Barra da Tijuca</p><a href={OFFICIAL_LINKS.instagram} target="_blank" rel="noreferrer">Instagram →</a><a href={OFFICIAL_LINKS.maps} target="_blank" rel="noreferrer">Como chegar →</a><WhatsAppLink className="footer-link" origin="footer">Agende pelo WhatsApp →</WhatsAppLink></div>
      <small>© {new Date().getFullYear()} Lanai. Todos os direitos reservados.</small>
    </footer>
  );
}

import Link from "next/link";
import { WhatsAppLink } from "@/components/whatsapp-link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div><span className="brand">LANAI</span><p>Beleza, cuidado e presença.</p></div>
      <div><p className="eyebrow">Explore</p><Link href="/salao-de-beleza">Salão de Beleza</Link><Link href="/estetica">Estética</Link><Link href="/spa">Spa</Link><Link href="/servicos">Serviços</Link><Link href="/sobre">Sobre a Lanai</Link></div>
      <div><p className="eyebrow">Atendimento</p><p>A recepção confirma serviço, profissional, horário e disponibilidade.</p><WhatsAppLink className="footer-link" origin="footer">Agende pelo WhatsApp →</WhatsAppLink></div>
      <small>© {new Date().getFullYear()} Lanai. Todos os direitos reservados.</small>
    </footer>
  );
}

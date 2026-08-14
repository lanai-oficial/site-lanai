import type { Metadata } from "next";
import { WhatsAppLink } from "@/components/whatsapp-link";
export const metadata: Metadata = { title: "Contato", description: "Entre em contato com a recepção da Lanai no Shopping Downtown." };
export default function ContactPage() { return <div className="section page contact"><p className="eyebrow">Shopping Downtown · Barra da Tijuca</p><h1>Contato</h1><div className="contact-grid"><div><h2>Fale com a recepção</h2><p>Compartilhe o serviço que procura. A equipe orientará os próximos passos.</p><WhatsAppLink origin="contact">Agende pelo WhatsApp</WhatsAppLink><small>A recepção confirmará serviço, profissional, horário e disponibilidade.</small></div><div><h2>Lanai</h2><p>Shopping Downtown<br />Barra da Tijuca</p></div></div></div>; }

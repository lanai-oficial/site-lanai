import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { futureAreas } from "@/lib/publication";
export const metadata: Metadata = { title: "Noivas e Eventos", description: "Converse com a Lanai sobre produções para celebrações especiais." };
export default function EventsPage() { if (!futureAreas.bridesAndEvents) notFound(); return <div className="detail-page event-page"><div className="detail-visual" aria-hidden="true"><span>Celebrações</span></div><article><p className="eyebrow">Momentos singulares</p><h1>Noivas<br />e Eventos</h1><p className="lead">Um cuidado pensado em torno de você e do seu momento.</p><p>Converse com a recepção para compartilhar a ocasião, a data e as necessidades da sua produção.</p><WhatsAppLink origin="brides_events" message="Olá! Gostaria de conversar sobre Noivas e Eventos. Vim da página /noivas-e-eventos.">Iniciar conversa</WhatsAppLink><small>A conversa não representa reserva ou agendamento confirmado.</small></article></div>; }

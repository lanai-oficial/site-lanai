import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EventView } from "@/components/event-view";
import Image from "next/image";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { getServiceCategory, serviceCategories } from "@/data/services";
import { universeImages } from "@/data/images";
export function generateStaticParams() { return serviceCategories.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const item = getServiceCategory((await params).slug); return item ? { title: item.name, description: item.description } : {}; }
export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) { const item = getServiceCategory((await params).slug); if (!item) notFound(); return <div className="detail-page"><EventView event="service_view" id={item.slug} /><div className="detail-visual"><Image src={universeImages[item.universe]} alt={`Ambiente Lanai relacionado a ${item.name}`} fill priority sizes="(max-width: 800px) 100vw, 50vw" /></div><article><p className="eyebrow">{item.eyebrow}</p><h1>{item.name}</h1><p className="lead">{item.description}</p><p>Converse com a recepção para conhecer os serviços desta categoria.</p><WhatsAppLink origin={`service:${item.slug}`} message={`Olá! Gostaria de saber mais sobre ${item.name}. Vim da página /servicos/${item.slug}.`}>Agende pelo WhatsApp</WhatsAppLink><small>A recepção confirmará serviço, profissional, horário e disponibilidade.</small></article></div>; }

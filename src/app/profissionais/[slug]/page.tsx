import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EventView } from "@/components/event-view";
import { PortfolioCard } from "@/components/portfolio-card";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { activeProfessionals, getActiveProfessional } from "@/data/professionals";
import { futureAreas } from "@/lib/publication";
export function generateStaticParams() { return activeProfessionals.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const person = getActiveProfessional((await params).slug); return person ? { title: person.name, description: person.biography, robots: person.placeholder ? { index: false, follow: true } : undefined } : {}; }
export default async function ProfessionalProfile({ params }: { params: Promise<{ slug: string }> }) { if (!futureAreas.professionals) notFound(); const person = getActiveProfessional((await params).slug); if (!person) notFound(); return <>
  <EventView event="professional_profile_view" id={person.slug} />
  <section className="profile-hero"><div className="portrait-placeholder">Foto profissional<br />a cadastrar</div><div><p className="eyebrow">{person.specialty}</p><h1>{person.name}</h1><p className="lead">{person.biography}</p><WhatsAppLink origin={`professional:${person.slug}`} message={`Olá! Quero agendar com ${person.name}. Vim da página /profissionais/${person.slug}.`}>Quero agendar com este profissional</WhatsAppLink><small>A recepção confirmará disponibilidade e agendamento.</small></div></section>
  <section className="section profile-section"><p className="eyebrow">01 · Sobre</p><h2>Um olhar singular</h2><p>{person.biography}</p>{person.videoUrl && <a href={person.videoUrl}>Assistir ao vídeo de apresentação</a>}</section>
  <section className="section"><p className="eyebrow">02 · Portfólio</p><h2>Trabalhos & inspirações</h2><div className="portfolio-grid">{person.portfolio.map((item) => <PortfolioCard item={item} professional={person.slug} key={item.id} />)}</div></section>
  <section className="section profile-services"><div><p className="eyebrow">03 · Serviços</p><h2>Especialidades</h2></div><ul>{person.services.map((service) => <li key={service}>{service}</li>)}</ul>{person.instagram && <a href={person.instagram}>Instagram</a>}</section>
  </>; }

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { activeProfessionals } from "@/data/professionals";
import { futureAreas } from "@/lib/publication";
export const metadata: Metadata = { title: "Conheça o nosso time", description: "Conheça os talentos e especialidades do time Lanai." };
export default function ProfessionalsPage() { if (!futureAreas.professionals) notFound(); return <div className="section page"><p className="eyebrow">Pessoas & histórias</p><h1>Conheça o<br />nosso time</h1><p className="lead">Cada profissional é um pequeno universo dentro da Lanai.</p><aside className="notice"><strong>Conteúdo demonstrativo</strong><p>Os perfis abaixo validam a estrutura do site e não representam profissionais reais.</p></aside><div className="professional-grid">{activeProfessionals.map((person) => <Link href={`/profissionais/${person.slug}`} className="professional-card" key={person.slug}><span className="portrait-placeholder">Foto a cadastrar</span><p className="eyebrow">{person.specialty}</p><h2>{person.name}</h2><span>Conhecer perfil →</span></Link>)}</div></div>; }

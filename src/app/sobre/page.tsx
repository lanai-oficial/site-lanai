import type { Metadata } from "next";
import { WhatsAppLink } from "@/components/whatsapp-link";
import Image from "next/image";
import { lanaiImages } from "@/data/images";
export const metadata: Metadata = { title: "Sobre a Lanai", description: "Conheça a Lanai no Shopping Downtown, na Barra da Tijuca." };
export default function AboutPage() { return <><section className="about-hero"><Image src={lanaiImages.exterior} alt="Fachada da Lanai no Shopping Downtown" fill priority sizes="100vw"/><span className="image-shade"/><div><p className="eyebrow">Nossa essência</p><h1>Sobre a Lanai</h1></div></section><section className="section prose"><p className="eyebrow">Shopping Downtown · Barra da Tijuca</p><h2>Beleza, cuidado e bem-estar em um só lugar.</h2><p>A Lanai reúne salão de beleza, estética e spa em uma experiência integrada, em um espaço amplo e acolhedor.</p><WhatsAppLink origin="about" message="Olá! Gostaria de conhecer a Lanai. Vim da página /sobre.">Falar com a recepção</WhatsAppLink></section></>; }

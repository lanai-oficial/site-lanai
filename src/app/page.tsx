import Link from "next/link";
import Image from "next/image";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { serviceUniverses } from "@/data/services";
import { homeImages, lanaiImages } from "@/data/images";
import { OFFICIAL_LINKS } from "@/lib/contact";
import { getInstagramPosts, type InstagramPost } from "@/lib/instagram";

const instagramFallback = [
  lanaiImages.treatmentRoom,
  lanaiImages.salon,
  lanaiImages.reception,
  lanaiImages.facadeNight,
];

async function loadInstagramPosts() {
  try {
    return await getInstagramPosts();
  } catch {
    return [];
  }
}

function postImage(post: InstagramPost) {
  return post.media_type === "VIDEO"
    ? post.thumbnail_url
    : post.media_url;
}

export default async function Home() {
  const posts = await loadInstagramPosts();
  const gallery = instagramFallback.map((fallbackImage, index) => {
    const post = posts[index];
    const image = post && postImage(post);

    return {
      id: post?.id ?? fallbackImage,
      href: post?.permalink ?? OFFICIAL_LINKS.instagram,
      image: image ?? fallbackImage,
      alt: post?.caption?.trim() || `Lanai no Instagram, imagem ${index + 1}`,
    };
  });

  return <>
    <section className="hero image-hero"><Image src={homeImages.hero} alt="Fachada principal da Lanai no Downtown" fill priority sizes="100vw" style={{ objectPosition: "center" }} /><div className="image-shade" /><div className="hero-copy"><p className="eyebrow">Estética · Spa · Beleza</p><h1>Experiência<br />Lanai</h1><WhatsAppLink origin="home_hero">Agende seu horário</WhatsAppLink></div><a className="scroll-cue" href="#universos">Descubra ↓</a></section>
    <section className="universe-section" id="universos"><div className="section-heading section"><div><p className="eyebrow">Experiência Lanai</p><h2>Beleza, estética e bem-estar.</h2></div><Link className="text-link" href="/servicos">Ver serviços →</Link></div><div className="universe-grid">{serviceUniverses.map((universe) => <Link className="universe-card" href={`/${universe.slug}`} key={universe.slug}><Image src={homeImages.universes[universe.slug]} alt={`Ambiente Lanai — ${universe.name}`} fill sizes="(max-width: 800px) 100vw, 33vw" style={{ objectPosition: universe.slug === "spa" ? "30% center" : "center" }} /><span className="card-shade" /><span className="card-copy"><h3>{universe.name}</h3><span aria-hidden="true">Conhecer →</span></span></Link>)}</div></section>
    <section className="home-about"><div className="home-about-image"><Image src={homeImages.services} alt="Recepção da Lanai, com madeira, plantas e luz natural" fill sizes="(max-width: 800px) 100vw, 62vw" style={{ objectPosition: "40% center" }} /></div><div className="home-about-copy"><p className="eyebrow">Lanai</p><h2>Um espaço para desacelerar.</h2><Link className="text-link" href="/sobre">Conheça nossa história →</Link></div></section>
    <section className="instagram"><div className="instagram-heading"><p className="eyebrow">Instagram</p><h2>Conecte-se com a experiência Lanai</h2></div><div className="instagram-grid">{gallery.map((item) => <a href={item.href} target="_blank" rel="noreferrer" key={item.id}><Image src={item.image} alt={item.alt} fill sizes="(max-width: 800px) 50vw, 25vw" /></a>)}</div></section>
  </>;
}

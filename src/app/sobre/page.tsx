import type { Metadata } from "next";
import Image from "next/image";
import { lanaiImages } from "@/data/images";

export const metadata: Metadata = {
  title: "Sobre a Lanai",
  description: "Conheça a origem, a história e a visão que deram forma à Lanai.",
};

export default function AboutPage() {
  return <>
    <section className="about-hero">
      <Image src={lanaiImages.receptionWide} alt="Recepção da Lanai, cercada por plantas e luz natural" fill priority sizes="100vw" />
      <span className="image-shade" />
      <div className="about-hero-copy"><p className="eyebrow">Nossa história</p><h1>Uma ilha<br />dentro da cidade.</h1><p>Uma pausa para estar por inteiro no momento presente.</p></div>
    </section>

    <main className="about-story">
      <section className="about-origin section">
        <p className="chapter-number" aria-hidden="true">01</p>
        <div><p className="eyebrow">A origem</p><h2>Lanai começou com uma ideia de pausa.</h2></div>
        <p className="about-lead">No meio da correria do Rio, criar uma ilha: um lugar para relaxar, desconectar do lado de fora e se reconectar com o agora. A imagem deu nome à Lanai — e direção a tudo o que viria depois.</p>
      </section>

      <section className="about-image-chapter">
        <div className="about-tall-image"><Image src={lanaiImages.exterior} alt="Entrada da Lanai no Shopping Downtown" fill sizes="(max-width: 800px) 100vw, 55vw" /></div>
        <div className="about-chapter-copy"><p className="eyebrow">O começo</p><h2>O conceito veio antes do endereço atual.</h2><p>A primeira Lanai nasceu no Centro do Rio, entre a Avenida Rio Branco e a Rua das Flores. Bastava subir dois lances de escada para deixar a cidade lá fora — e entrar em um ambiente pensado, desde o início, como um momento de descompressão.</p></div>
      </section>

      <section className="about-transition">
        <div><p className="eyebrow">2020 · Um novo endereço</p><h2>O endereço mudou.<br />O conceito permaneceu.</h2></div>
        <p>O fim de um ciclo no Centro abriu caminho para a chegada ao Shopping Downtown, em 15 de dezembro. A Barra já estava nos planos; a mudança levou a mesma visão a um espaço novo.</p>
      </section>

      <section className="about-today section">
        <header><p className="eyebrow">A Lanai hoje</p><h2>A pausa ganhou espaço.</h2><p>A visão inicial vive hoje em um ambiente que reúne beleza, estética e spa. Plantas, luz, música e uma atmosfera acolhedora não são cenário: fazem parte da experiência.</p></header>
        <div className="about-photo-grid">
          <figure className="about-photo-main"><Image src={lanaiImages.reception} alt="Ambiente atual da Lanai com plantas e mobiliário em madeira" fill sizes="(max-width: 800px) 100vw, 60vw" /></figure>
          <figure><Image src={lanaiImages.spa} alt="Sala de spa da Lanai preparada para um momento de cuidado" fill sizes="(max-width: 800px) 100vw, 35vw" /></figure>
          <figure><Image src={lanaiImages.salon} alt="Espaço atual de beleza da Lanai" fill sizes="(max-width: 800px) 100vw, 35vw" /></figure>
        </div>
      </section>

      <section className="founder-section">
        <div className="founder-atmosphere" aria-hidden="true"><span>pausa</span><span>acolhimento</span><span>presença</span></div>
        <blockquote>
          <p className="eyebrow">A visão da fundadora</p>
          <h2>“Eu nunca fui fã de salão.”</h2>
          <p>Daqueles cheios de espelhos, barulho e pressa. Foi desse incômodo que nasceu a vontade de criar um espaço diferente: calmo, sem relógios ou televisões disputando atenção; um lugar onde as pessoas pudessem se sentir acolhidas, não analisadas.</p>
          <p>A Lanai existe para interromper um pouco o piloto automático. Porque beleza também pode ser pausa, reconexão e reencontro.</p>
          <footer><strong>Celina Mailu Cassariego</strong><span>Fundadora da Lanai</span></footer>
        </blockquote>
      </section>
    </main>
  </>;
}

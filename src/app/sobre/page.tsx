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
        <p className="about-lead">A inspiração veio de Lanai, ilha do Havaí, e se tornou uma ideia muito nossa: criar, no meio da correria do Rio, uma ilha-refúgio para relaxar, desconectar do lado de fora e se reconectar com o agora.</p>
      </section>

      <section className="about-image-chapter">
        <div className="about-tall-image"><Image src={lanaiImages.firstLanai} alt="A primeira Lanai, no Centro do Rio" fill sizes="(max-width: 800px) 100vw, 55vw" /></div>
        <div className="about-chapter-copy"><p className="eyebrow">2017 · O começo</p><h2>O conceito veio antes do endereço atual.</h2><p>A primeira Lanai nasceu em 2017, no Centro do Rio, entre a Avenida Rio Branco e a Rua das Flores. Subir dois lances de escada era uma passagem: a pressa do Centro ficava do lado de fora e começava um momento de descompressão.</p><p>Não havia relógios nem televisão convencional, propositalmente. Referências ao mar, música, sons da natureza e plantas naturais compunham uma experiência sensorial feita para devolver cada pessoa ao presente.</p></div>
      </section>

      <section className="about-transition">
        <div><p className="eyebrow">2020 · Um novo endereço</p><h2>O endereço mudou.<br />O conceito permaneceu.</h2></div>
        <p>Em 2020, o fim de um ciclo no Centro abriu caminho para a chegada ao Downtown, em 15 de dezembro. A Barra da Tijuca já estava nos planos; a mudança levou a mesma visão a um espaço novo.</p>
      </section>

      <section className="about-today section">
        <header><p className="eyebrow">A Lanai hoje</p><h2>A pausa ganhou espaço.</h2><p>O conceito da primeira Lanai continua vivo no ambiente atual, que reúne beleza, estética e spa. Plantas naturais, luz, música e uma atmosfera acolhedora não são cenário: fazem parte da experiência.</p></header>
        <div className="about-photo-grid">
          <figure className="about-photo-main"><Image src={lanaiImages.reception} alt="Ambiente atual da Lanai com plantas e mobiliário em madeira" fill sizes="(max-width: 800px) 100vw, 60vw" /></figure>
          <figure><Image src={lanaiImages.spa} alt="Sala de spa da Lanai preparada para um momento de cuidado" fill sizes="(max-width: 800px) 100vw, 35vw" /></figure>
          <figure><Image src={lanaiImages.salon} alt="Espaço atual de beleza da Lanai" fill sizes="(max-width: 800px) 100vw, 35vw" /></figure>
        </div>
      </section>

      <section className="founder-section">
        <div className="founder-portrait"><Image src={lanaiImages.founderCelina} alt="Celina Mailu Cassariego, fundadora da Lanai" fill sizes="(max-width: 800px) 100vw, 35vw" /></div>
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

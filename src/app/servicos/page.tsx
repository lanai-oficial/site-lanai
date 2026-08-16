import type { Metadata } from "next";
import { ServicesCatalog } from "@/components/services-catalog";
import servicesCatalog from "@/data/lanai_33_servicos_v1_producao.json";

export const metadata: Metadata = { title: "Serviços", description: "Explore os serviços da Lanai por universo e categoria." };

export default function ServicesPage() {
  return <main className="section page services-page">
    <p className="eyebrow">Diretório Lanai</p>
    <h1>Serviços</h1>
    <ServicesCatalog categories={servicesCatalog.categorias} />
  </main>;
}

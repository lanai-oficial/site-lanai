import type { Metadata } from "next";
import { UniversePage } from "@/components/universe-page";
import { getServiceUniverse } from "@/data/services";
export const metadata: Metadata = { title: "Estética", description: "Conheça as categorias de Estética Facial e Corporal da Lanai." };
export default function AestheticsPage() { return <UniversePage universe={getServiceUniverse("estetica")!} />; }

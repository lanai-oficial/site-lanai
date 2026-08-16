import type { Metadata } from "next";
import { UniversePage } from "@/components/universe-page";
import { getServiceUniverse } from "@/data/catalog";
export const metadata: Metadata = { title: "Salão de Beleza", description: "Conheça as categorias do Salão de Beleza Lanai." };
export default function SalonPage() { return <UniversePage universe={getServiceUniverse("salao-de-beleza")!} />; }

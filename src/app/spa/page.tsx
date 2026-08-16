import type { Metadata } from "next";
import { UniversePage } from "@/components/universe-page";
import { getServiceUniverse } from "@/data/catalog";
export const metadata: Metadata = { title: "Spa", description: "Conheça o universo de Spa da Lanai." };
export default function SpaPage() { return <UniversePage universe={getServiceUniverse("spa")!} />; }

import { notFound, permanentRedirect } from "next/navigation";
import { serviceCatalogDestinations } from "@/data/services";

export function generateStaticParams() {
  return Object.keys(serviceCatalogDestinations).map((slug) => ({ slug }));
}

export default async function LegacyServiceRoute({ params }: { params: Promise<{ slug: string }> }) {
  const destination = serviceCatalogDestinations[(await params).slug];
  if (!destination) notFound();
  permanentRedirect(`/servicos?categoria=${destination}`);
}

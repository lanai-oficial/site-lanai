import catalog from "@/data/lanai_33_servicos_v1_producao.json";

export type UniverseSlug = "salao-de-beleza" | "estetica" | "spa";
export type CatalogCategory = (typeof catalog.categorias)[number];
export type CatalogService = CatalogCategory["servicos"][number];
export type ServiceUniverse = {
  slug: UniverseSlug;
  name: string;
  eyebrow: string;
  description: string;
  introduction: string;
};

type UniverseCategory = {
  categoryId: CatalogCategory["id"];
  name: string;
  description: string;
};

export const serviceCatalog = catalog;
export const catalogServices = catalog.categorias.flatMap((category) =>
  category.servicos.map((service) => ({ ...service, category_id: category.id, category_name: category.nome })),
);

const serviceUniverses: ServiceUniverse[] = [
  {
    slug: "salao-de-beleza",
    name: "Salão de Beleza",
    eyebrow: "Expressão & cuidado",
    description: "Serviços de beleza reunidos em uma experiência atenta aos detalhes.",
    introduction: "Conheça as categorias disponíveis e converse com a recepção para encontrar o serviço, o profissional e o horário adequados.",
  },
  {
    slug: "estetica",
    name: "Estética",
    eyebrow: "Rosto & corpo",
    description: "Cuidados faciais e corporais organizados de forma simples.",
    introduction: "Explore as áreas de estética facial e corporal. A recepção esclarece as opções disponíveis antes de confirmar o atendimento.",
  },
  {
    slug: "spa",
    name: "Spa",
    eyebrow: "Pausa & presença",
    description: "Um convite para desacelerar e dedicar tempo ao bem-estar.",
    introduction: "Consulte a recepção para conhecer as experiências disponíveis e receber orientação sobre o atendimento.",
  },
];

const categoriesByUniverse: Record<UniverseSlug, UniverseCategory[]> = {
  "salao-de-beleza": [
    { categoryId: "hair-spa", name: "Cabelos", description: "Conheça os cuidados disponíveis para cabelos." },
    { categoryId: "manicure", name: "Unhas", description: "Conheça os cuidados disponíveis para mãos e pés." },
    { categoryId: "sobrancelhas", name: "Sobrancelhas", description: "Conheça os serviços disponíveis para sobrancelhas." },
  ],
  estetica: [
    { categoryId: "estetica-facial", name: "Estética Facial", description: "Conheça os cuidados disponíveis em estética facial." },
    { categoryId: "estetica-corporal", name: "Estética Corporal", description: "Conheça os cuidados disponíveis em estética corporal." },
  ],
  spa: [
    { categoryId: "spa", name: "Experiências de Spa", description: "Conheça as experiências disponíveis no Spa." },
  ],
};

export function getCatalogService(id: string) {
  return catalogServices.find((service) => service.id === id);
}

export function getServiceUniverse(slug: UniverseSlug) {
  return serviceUniverses.find((universe) => universe.slug === slug);
}

export function getCategoriesByUniverse(universe: UniverseSlug) {
  return categoriesByUniverse[universe].flatMap((presentation) => {
    const category = catalog.categorias.find(({ id }) => id === presentation.categoryId);
    return category ? [{ ...presentation, category }] : [];
  });
}

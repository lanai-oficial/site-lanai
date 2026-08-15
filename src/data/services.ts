export type UniverseSlug = "salao-de-beleza" | "estetica" | "spa";

export type ServiceCategory = {
  slug: string;
  name: string;
  eyebrow: string;
  description: string;
  universe: UniverseSlug;
  aliases: string[];
};

export type ServiceUniverse = {
  slug: UniverseSlug;
  name: string;
  eyebrow: string;
  description: string;
  introduction: string;
};

export const serviceUniverses: ServiceUniverse[] = [
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

export const serviceCategories: ServiceCategory[] = [
  { slug: "cabelos", name: "Cabelos", eyebrow: "Forma & expressão", description: "Conheça os cuidados disponíveis para cabelos.", universe: "salao-de-beleza", aliases: ["luzes", "morena iluminada", "mechas", "corte", "escova", "cor", "coloracao", "penteado"] },
  { slug: "unhas", name: "Unhas", eyebrow: "Detalhes", description: "Conheça os cuidados disponíveis para mãos e pés.", universe: "salao-de-beleza", aliases: ["unha", "manicure", "pedicure", "maos", "pes"] },
  { slug: "sobrancelhas", name: "Sobrancelhas", eyebrow: "Traço & equilíbrio", description: "Conheça os serviços disponíveis para sobrancelhas.", universe: "salao-de-beleza", aliases: ["sobrancelha", "design", "olhar"] },
  { slug: "depilacao", name: "Depilação", eyebrow: "Cuidado", description: "Conheça as opções de depilação disponíveis.", universe: "estetica", aliases: ["depilar", "pelos", "cera"] },
  { slug: "estetica-facial", name: "Estética Facial", eyebrow: "Rosto", description: "Conheça os cuidados disponíveis em estética facial.", universe: "estetica", aliases: ["pele", "rosto", "limpeza de pele", "botox", "facial"] },
  { slug: "estetica-corporal", name: "Estética Corporal", eyebrow: "Corpo", description: "Conheça os cuidados disponíveis em estética corporal.", universe: "estetica", aliases: ["corpo", "modeladora", "drenagem", "celulite"] },
  { slug: "spa", name: "Experiências de Spa", eyebrow: "Bem-estar", description: "Conheça as experiências disponíveis no Spa.", universe: "spa", aliases: ["massagem", "relaxar", "relaxamento", "bem estar", "day spa"] },
];

export function getServiceCategory(slug: string) {
  return serviceCategories.find((category) => category.slug === slug);
}

export function getServiceUniverse(slug: string) {
  return serviceUniverses.find((universe) => universe.slug === slug);
}

export function getCategoriesByUniverse(universe: UniverseSlug) {
  return serviceCategories.filter((category) => category.universe === universe);
}

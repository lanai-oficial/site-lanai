import catalog from "@/data/lanai_33_servicos_v1_producao.json";

export type CatalogCategory = (typeof catalog.categorias)[number];
export type CatalogService = CatalogCategory["servicos"][number];

export const serviceCatalog = catalog;
export const catalogServices = catalog.categorias.flatMap((category) =>
  category.servicos.map((service) => ({ ...service, category_id: category.id, category_name: category.nome })),
);

export function getCatalogService(id: string) {
  return catalogServices.find((service) => service.id === id);
}

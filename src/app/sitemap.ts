import type { MetadataRoute } from "next";
import { serviceCategories } from "@/data/services";
const baseUrl = "https://www.lanaispa.com.br";
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/salao-de-beleza", "/estetica", "/spa", "/servicos", "/sobre", "/contato"];
  return [...pages.map((path) => ({ url: `${baseUrl}${path}`, changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.8 })), ...serviceCategories.map(({ slug }) => ({ url: `${baseUrl}/servicos/${slug}`, changeFrequency: "monthly" as const, priority: 0.7 }))];
}

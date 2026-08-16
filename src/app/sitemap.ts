import type { MetadataRoute } from "next";
const baseUrl = "https://www.lanaispa.com.br";
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/salao-de-beleza", "/estetica", "/spa", "/servicos", "/sobre", "/contato"];
  return pages.map((path) => ({ url: `${baseUrl}${path}`, changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.8 }));
}

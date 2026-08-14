import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
const whatsapp = read("src/lib/whatsapp.ts");
const header = read("src/components/header.tsx");
const services = read("src/data/services.ts");
const sitemap = read("src/app/sitemap.ts");
const publicSource = [
  "src/app/page.tsx",
  "src/app/sobre/page.tsx",
  "src/app/contato/page.tsx",
  "src/app/servicos/page.tsx",
  "src/app/servicos/[slug]/page.tsx",
  "src/components/header.tsx",
  "src/components/footer.tsx",
  "src/components/universe-page.tsx",
  "src/data/services.ts",
].map(read).join("\n");

assert.match(whatsapp, /https:\/\/wa\.me\/message\/K62JPAM2VAUWP1/);
for (const item of ["Início", "Salão de Beleza", "Estética", "Spa", "Serviços", "Sobre a Lanai", "Agende pelo WhatsApp"]) assert.ok(header.includes(item), `Navegação ausente: ${item}`);
for (const hidden of ["Nosso time", "Noivas e Eventos", "Terapia Capilar"]) assert.ok(!header.includes(hidden), `Item indevido na navegação: ${hidden}`);
assert.ok(!sitemap.includes("profissionais"));
assert.ok(!sitemap.includes("noivas-e-eventos"));
assert.ok(!services.toLowerCase().includes("terapia capilar"));

for (const claim of ["solução definitiva", "redução garantida", "resultados revolucionários", "magia"]) {
  assert.ok(!publicSource.toLowerCase().includes(claim), `Afirmação inadequada: ${claim}`);
}
for (const placeholder of ["demonstrativo", "a cadastrar", "r$", "preço"]) {
  assert.ok(!publicSource.toLowerCase().includes(placeholder), `Conteúdo provisório público: ${placeholder}`);
}

console.log("Escopo público, WhatsApp, navegação, sitemap e conteúdo editorial verificados.");

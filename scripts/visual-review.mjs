import assert from "node:assert/strict";
import { mkdir } from "node:fs/promises";
import { chromium } from "@playwright/test";

const baseUrl = process.env.BASE_URL ?? "http://127.0.0.1:3000";
const output = new URL("../docs/screenshots/", import.meta.url);
const pages = [
  ["home-mobile.png", "/"],
  ["salao-mobile.png", "/salao-de-beleza"],
  ["estetica-mobile.png", "/estetica"],
  ["spa-mobile.png", "/spa"],
  ["servicos-mobile.png", "/servicos"],
  ["sobre-mobile.png", "/sobre"],
];

await mkdir(output, { recursive: true });
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
const consoleErrors = [];
page.on("console", (message) => { if (message.type() === "error") consoleErrors.push(message.text()); });

for (const [filename, pathname] of pages) {
  const response = await page.goto(`${baseUrl}${pathname}`, { waitUntil: "networkidle" });
  assert.equal(response?.status(), 200, `${pathname} não respondeu 200`);
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth), true, `${pathname} possui rolagem horizontal`);
  await page.screenshot({ path: new URL(filename, output).pathname, fullPage: true });
  const pageText = (await page.locator("body").innerText()).toLowerCase();
  const forbiddenContent = ["conteúdo demonstrativo", "foto a cadastrar", "r$ 100"];
  if (pathname !== "/") forbiddenContent.push("terapia capilar");
  for (const forbidden of forbiddenContent) assert.ok(!pageText.includes(forbidden), `${pathname} expõe: ${forbidden}`);
}

await page.setViewportSize({ width: 1440, height: 1000 });
for (const [mobileFilename, pathname] of pages) {
  await page.goto(`${baseUrl}${pathname}`, { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(750);
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth), true, `${pathname} possui rolagem horizontal no desktop`);
  await page.screenshot({ path: new URL(mobileFilename.replace("-mobile", "-desktop"), output).pathname });
}

await page.goto(`${baseUrl}/servicos/cabelos`, { waitUntil: "domcontentloaded" });
const serviceWhatsApp = await page.locator("#conteudo").getByRole("link", { name: "Agende pelo WhatsApp" }).getAttribute("href");
assert.match(decodeURIComponent(serviceWhatsApp ?? ""), /Cabelos/);
assert.match(decodeURIComponent(serviceWhatsApp ?? ""), /\/servicos\/cabelos/);

for (const pathname of ["/profissionais", "/profissionais/perfil-demonstrativo-aurora", "/noivas-e-eventos"]) {
  assert.equal((await page.request.get(`${baseUrl}${pathname}`)).status(), 404, `Rota futura exposta: ${pathname}`);
}
assert.deepEqual(consoleErrors, [], `Erros no console: ${consoleErrors.join("; ")}`);
await browser.close();
console.log("MVP revisado em mobile e desktop; capturas, conteúdo, rotas futuras e WhatsApp verificados.");

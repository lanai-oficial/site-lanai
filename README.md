# Site oficial da Lanai

Fundação técnica da versão 1 do site institucional da **Lanai**, construída com Next.js, TypeScript e App Router e preparada para uma publicação futura na Vercel. O projeto prioriza celular, navegação editorial, acessibilidade, desempenho e conteúdo honesto.

> Este repositório não está publicado em produção. Domínio, DNS e e-mails permanecem na Locaweb e não são alterados por esta entrega.

## Decisões aprovadas

- Marca: Lanai; domínio futuro: `www.lanaispa.com.br`.
- Navegação pública do MVP: Início, Salão de Beleza, Estética, Spa, Serviços, Sobre a Lanai e CTA de WhatsApp. Terapia Capilar não integra a V1.
- Todo pedido de agendamento abre o WhatsApp oficial da recepção. A recepção confirma manualmente e registra no Trinks; clique ou mensagem não equivale a agendamento.
- As estruturas futuras de profissionais e Noivas e Eventos permanecem no código, mas respondem como página não encontrada e não integram navegação ou sitemap enquanto o conteúdo não for aprovado.
- Nesta etapa, os dados vivem em módulos TypeScript substituíveis futuramente por um CMS. Não há banco personalizado.
- A referência editorial é conceitual; o projeto não copia código, texto, identidade ou layout de terceiros.

## Implementado

- Home, universos Salão de Beleza, Estética e Spa, diretório de Serviços, categorias individuais, Sobre, Contato e página 404.
- Conteúdo público sem preços, nomes fictícios, dados demonstrativos ou imagens genéricas apresentadas como material real da Lanai.
- Layout responsivo, foco visível, link para pular conteúdo, HTML semântico, idioma e suporte a movimento reduzido.
- Metadados por página, Open Graph básico, `robots.txt`, `sitemap.xml` e rotas estáticas.
- Link central de WhatsApp e mensagens contextuais nas páginas públicas relevantes.
- Eventos de navegador centralizados e eventos dependentes do Trinks documentados em [`docs/analytics.md`](docs/analytics.md).

## Ainda não implementado

- Publicação na Vercel, ambiente de produção, domínio, DNS ou configuração de e-mail.
- Conteúdo detalhado e aprovado de cada serviço; fotos autorizadas da unidade; endereço completo, horários e redes sociais oficiais.
- Publicação das áreas Conheça o Nosso Time, perfis individuais e Noivas e Eventos.
- CMS, área administrativa, banco de dados, automação de agendamento ou integração com Trinks.
- IDs ou provedores de analytics, banner/gestão de consentimento e dashboards.
- Os eventos `lead_identified`, `appointment_created`, `appointment_attended` e `sale_closed`: dependem de uma futura integração e não são inferidos do clique no WhatsApp.
- Métricas, projeções, ROI, volume de agendamentos ou receita.

## Desenvolvimento

Requisitos: Node.js 20.9 ou mais recente e npm.

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`. Conteúdo editorial temporário fica em `src/data`; substitua-o apenas por material aprovado.

## Testes e verificações

```bash
npm run lint
npm run typecheck
npm run build
npm run check:content
npm run check:visual # requer a aplicação em execução e Chromium do Playwright
```

Antes de integrar na branch principal, também é recomendada uma revisão manual em telas pequenas e grandes, navegação por teclado, validação de todas as mensagens do WhatsApp e auditoria Lighthouse no ambiente de preview.

As capturas geradas localmente ficam em `docs/screenshots`, diretório ignorado pelo Git. O roteiro automatizado valida páginas públicas em mobile e desktop, ausência de rolagem horizontal, ocultação das rotas futuras, ausência de conteúdo provisório e destinos contextuais do WhatsApp.

### Registry npm

O projeto fixa somente o registry público oficial em `.npmrc` e não contém tokens ou credenciais. Para diagnosticar uma falha de instalação, execute `npm config get registry` e `curl -I https://registry.npmjs.org/react`. Se o registry estiver correto, mas a resposta `403` vier de um proxy da rede, o responsável pelo ambiente deverá liberar acesso HTTPS a `registry.npmjs.org`; trocar credenciais do projeto não resolve um bloqueio de saída da infraestrutura.

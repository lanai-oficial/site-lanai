# Rastreabilidade

A camada em `src/lib/analytics.ts` mantém os nomes de eventos em um único lugar e, nesta etapa, apenas escreve no `window.dataLayer`. Nenhum ID de GA4, GTM, Meta ou outro fornecedor foi inventado ou configurado.

## Eventos disponíveis no navegador

- `page_view`: mudança de página;
- `service_view`: visualização de uma categoria de serviço;
- `professional_profile_view`: visualização de perfil ativo;
- `portfolio_view`: interação com item do portfólio;
- `whatsapp_click`: clique que abre o WhatsApp, sempre com a origem.
- `search_open`: abertura da experiência de busca;
- `search_submit`: pesquisa enviada, com termo normalizado e quantidade de resultados;
- `search_result_click`: resultado escolhido, com serviço e categoria;
- `search_no_results`: termo pesquisado que não encontrou conteúdo;
- `search_to_booking`: clique posterior no WhatsApp atribuído ao resultado escolhido na busca.

Esses eventos indicam comportamento no site. Em especial, `whatsapp_click` **não** significa agendamento confirmado.

## Auditoria e privacidade da busca

O projeto não contém SDK, ID ou script configurado de GA4, Google Tag Manager ou Vercel Analytics. A implementação mantém o padrão existente de eventos no `window.dataLayer`, pronto para o provedor e as regras de consentimento que forem aprovados. Não foi criada uma plataforma paralela.

O termo é normalizado, limitado a 80 caracteres e registrado apenas como intenção agregável. Nenhum nome, telefone, e-mail, identificador de cliente ou conteúdo de formulário é acrescentado. A atribuição entre um resultado e o clique em agendamento fica somente no `sessionStorage` da aba e é removida depois do primeiro clique no WhatsApp.

Os relatórios futuros podem agrupar `search_submit` por termo, resultado e período; cruzar `search_no_results`; comparar categorias em `search_result_click`; e calcular a passagem para o WhatsApp com `search_to_booking`. A confirmação de agendamento continua dependendo de integração posterior com a agenda.

## Eventos futuros, dependentes de integração

- `lead_identified`;
- `appointment_created`;
- `appointment_attended`;
- `sale_closed`.

Eles estão tipados e documentados, mas não são disparados. A origem, as regras de consentimento, a identidade do lead e a integração com Trinks precisam ser definidas antes da implementação.

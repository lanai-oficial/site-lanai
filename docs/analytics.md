# Rastreabilidade

A camada em `src/lib/analytics.ts` mantém os nomes de eventos em um único lugar e, nesta etapa, apenas escreve no `window.dataLayer`. Nenhum ID de GA4, GTM, Meta ou outro fornecedor foi inventado ou configurado.

## Eventos disponíveis no navegador

- `page_view`: mudança de página;
- `service_view`: visualização de uma categoria de serviço;
- `professional_profile_view`: visualização de perfil ativo;
- `portfolio_view`: interação com item do portfólio;
- `whatsapp_click`: clique que abre o WhatsApp, sempre com a origem.

Esses eventos indicam comportamento no site. Em especial, `whatsapp_click` **não** significa agendamento confirmado.

## Eventos futuros, dependentes de integração

- `lead_identified`;
- `appointment_created`;
- `appointment_attended`;
- `sale_closed`.

Eles estão tipados e documentados, mas não são disparados. A origem, as regras de consentimento, a identidade do lead e a integração com Trinks precisam ser definidas antes da implementação.

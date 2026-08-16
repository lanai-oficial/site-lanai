export const browserEventNames = [
  "page_view",
  "view_home",
  "view_about",
  "category_view",
  "view_category_page",
  "click_service_card",
  "service_view",
  "professional_profile_view",
  "portfolio_view",
  "whatsapp_click",
  "search_open",
  "search_submit",
  "search_result_click",
  "search_no_results",
  "search_to_booking",
] as const;

export const futureIntegrationEventNames = [
  "lead_identified",
  "appointment_created",
  "appointment_attended",
  "sale_closed",
] as const;

export type BrowserEventName = (typeof browserEventNames)[number];
export type AnalyticsPayload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window { dataLayer?: Array<Record<string, unknown>> }
}

const CAMPAIGN_ATTRIBUTION_KEY = "lanai_campaign_attribution";

function campaignAttribution(): AnalyticsPayload {
  const params = new URLSearchParams(window.location.search);
  const current = {
    utm_source: params.get("utm_source") || undefined,
    utm_campaign: params.get("utm_campaign") || undefined,
    utm_content: params.get("utm_content") || undefined,
  };
  if (current.utm_source || current.utm_campaign || current.utm_content) {
    window.sessionStorage.setItem(CAMPAIGN_ATTRIBUTION_KEY, JSON.stringify(current));
    return current;
  }
  try {
    return JSON.parse(window.sessionStorage.getItem(CAMPAIGN_ATTRIBUTION_KEY) || "{}") as AnalyticsPayload;
  } catch {
    return {};
  }
}

/** Camada neutra: registra somente no dataLayer local, sem enviar a provedores externos. */
export function trackEvent(event: BrowserEventName, payload: AnalyticsPayload = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, timestamp: new Date().toISOString(), ...campaignAttribution(), ...payload });
}

const SEARCH_ATTRIBUTION_KEY = "lanai_search_attribution";

export type SearchAttribution = { search_term: string; result_id: string; category: string };

export function rememberSearchAttribution(attribution: SearchAttribution) {
  if (typeof window === "undefined") return;
  window.sessionStorage.setItem(SEARCH_ATTRIBUTION_KEY, JSON.stringify(attribution));
}

export function consumeSearchAttribution(): SearchAttribution | undefined {
  if (typeof window === "undefined") return;
  const stored = window.sessionStorage.getItem(SEARCH_ATTRIBUTION_KEY);
  if (!stored) return;
  window.sessionStorage.removeItem(SEARCH_ATTRIBUTION_KEY);
  try { return JSON.parse(stored) as SearchAttribution; } catch { return; }
}

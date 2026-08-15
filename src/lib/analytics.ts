export const browserEventNames = [
  "page_view",
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

/** Camada neutra: não envia dados enquanto um provedor real não for configurado. */
export function trackEvent(event: BrowserEventName, payload: AnalyticsPayload = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...payload });
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

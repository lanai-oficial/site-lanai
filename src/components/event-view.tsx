"use client";

import { useEffect } from "react";
import { AnalyticsPayload, BrowserEventName, trackEvent } from "@/lib/analytics";

export function EventView({ event, id, payload = {} }: { event: BrowserEventName; id: string; payload?: AnalyticsPayload }) {
  useEffect(() => { trackEvent(event, { content_id: id, ...payload }); }, [event, id, payload]);
  return null;
}

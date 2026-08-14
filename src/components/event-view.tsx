"use client";

import { useEffect } from "react";
import { BrowserEventName, trackEvent } from "@/lib/analytics";

export function EventView({ event, id }: { event: BrowserEventName; id: string }) {
  useEffect(() => { trackEvent(event, { content_id: id }); }, [event, id]);
  return null;
}

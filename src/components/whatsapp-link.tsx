"use client";

import { ReactNode } from "react";
import { consumeSearchAttribution, trackEvent } from "@/lib/analytics";
import { whatsappUrl } from "@/lib/whatsapp";

export function WhatsAppLink({ children, message, origin, className = "button" }: { children: ReactNode; message?: string; origin: string; className?: string }) {
  return <a className={className} href={whatsappUrl(message)} target="_blank" rel="noreferrer" onClick={() => {
    trackEvent("whatsapp_click", { origin });
    const search = consumeSearchAttribution();
    if (search) trackEvent("search_to_booking", { ...search, booking_origin: origin });
  }}>{children}</a>;
}
